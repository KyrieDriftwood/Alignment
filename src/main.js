import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { buildIfcEventsSpf } from "./ifc-events-spf.js";

const container = document.getElementById("viewer");
const status = document.getElementById("status");
const view3dButton = document.getElementById("view-3d");
const view2dButton = document.getElementById("view-2d");
const prevStepButton = document.getElementById("prev-step");
const nextStepButton = document.getElementById("next-step");
const saveIfcButton = document.getElementById("save-ifc");
const classSelect = document.getElementById("classification-class");
const riskTypeSelect = document.getElementById("classification-risk-type");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
container.appendChild(canvas);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setClearColor(0xe8f0eb, 1);
container.appendChild(renderer.domElement);

container.style.position = "relative";
canvas.style.position = "absolute";
canvas.style.inset = "0";
renderer.domElement.style.position = "absolute";
renderer.domElement.style.inset = "0";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000000);
camera.up.set(0, 0, 1);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.target.set(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight.position.set(50, 80, 120);
scene.add(ambientLight);
scene.add(directionalLight);

const gridHelper = new THREE.GridHelper(200, 20, 0x6f8f82, 0xbfd4c8);
// Three.js grid is XZ by default (Y-up). Rotate it so it represents the IFC XY plane (Z-up).
gridHelper.rotation.x = Math.PI / 2;
scene.add(gridHelper);

let activeView = "3d";
let alignment3DPoints = [];
let alignment3DStationed = [];
let alignment3DObjects = [];
let markerCubeObjects = [];

const zoneLength = 20;
const zoneCount = 3;
const stepLength = 5;
const zoneRatios = [1, 3, 1];
const floorOffset = 3;
const anfangOffset = 8;
const anfangHeight = Math.max(0, anfangOffset - floorOffset);
const markerCubeSize = 0.5;
const ifcApiBase = `${import.meta.env.BASE_URL}api/ifc-events`;
const alignmentIfcUrl = `${import.meta.env.BASE_URL}alignment.ifc`;
const localIfcEventsDbKey = "alignment-ifc-events-db";
const exportSessionStorageKey = "alignment-export-session-id";

let alignmentPoints = [];
let totalLength = 0;
let windowStart = 0;
let trackedMarkers = [];
let lastRenderState = null;
const exportSessionId = getOrCreateExportSessionId();

function classColorHex(classCode) {
  if (classCode === "TK2") return "#b8860b";
  if (classCode === "TK3") return "#b22222";
  return "#1c7a5a";
}

function classColorInt(classCode) {
  if (classCode === "TK2") return 0xb8860b;
  if (classCode === "TK3") return 0xb22222;
  return 0x1c7a5a;
}

function buildEventId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }
  return `evt-${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`;
}

function getOrCreateExportSessionId() {
  try {
    const existing = window.sessionStorage.getItem(exportSessionStorageKey);
    if (existing) {
      return existing;
    }
    const nextId = buildEventId();
    window.sessionStorage.setItem(exportSessionStorageKey, nextId);
    return nextId;
  } catch {
    return buildEventId();
  }
}

function readLocalIfcEventsDb() {
  try {
    const raw = window.localStorage.getItem(localIfcEventsDbKey);
    if (!raw) {
      return { events: [] };
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return { events: parsed };
    }
    if (parsed && Array.isArray(parsed.events)) {
      return parsed;
    }
  } catch {
    // Fall through to empty db.
  }

  return { events: [] };
}

function writeLocalIfcEventsDb(db) {
  window.localStorage.setItem(localIfcEventsDbKey, JSON.stringify(db));
}

function storeLocalIfcEvent(eventRecord) {
  const db = readLocalIfcEventsDb();
  const nextEvent = {
    id: eventRecord.id || buildEventId(),
    ifcClass: eventRecord.ifcClass || "IfcEvent",
    name: eventRecord.name || "Tunnel marker",
    timestamp: eventRecord.timestamp || new Date().toISOString(),
    data: eventRecord.data || {}
  };
  db.events.push(nextEvent);
  writeLocalIfcEventsDb(db);
  return nextEvent;
}

function getLocalIfcEventsForCurrentSession() {
  return readLocalIfcEventsDb().events.filter((eventRecord) => {
    return eventRecord?.ifcClass === "IfcActionRequest"
      && eventRecord?.data?.sessionId === exportSessionId
      && eventRecord?.data?.worldXYZ;
  });
}

function restoreLocalMarkersForCurrentSession() {
  return getLocalIfcEventsForCurrentSession().map((eventRecord) => {
    const local = eventRecord.data.localXYZ || {};
    const world = eventRecord.data.worldXYZ || {};

    return {
      station: Number(eventRecord.data.station ?? local.y ?? 0),
      xRaw: Number(eventRecord.data.xRaw ?? 0),
      classCode: eventRecord.data.classification?.classCode || "TK1",
      riskType: eventRecord.data.classification?.riskType || "bom sprutbetong",
      local: {
        x: Number(local.x ?? 0),
        y: Number(local.y ?? 0),
        z: Number(local.z ?? 0)
      },
      world: {
        x: Number(world.x ?? 0),
        y: Number(world.y ?? 0),
        z: Number(world.z ?? 0)
      }
    };
  });
}

async function registerIfcEvent(marker) {
  const selectedClass = marker.classCode || classSelect?.value || "TK1";
  const selectedRiskType = marker.riskType || riskTypeSelect?.value || "bom sprutbetong";

  const payload = {
    id: buildEventId(),
    ifcClass: "IfcActionRequest",
    name: "RiskObservation",
    timestamp: new Date().toISOString(),
    data: {
      sessionId: exportSessionId,
      localXYZ: marker.local,
      worldXYZ: marker.world,
      station: marker.station,
      xRaw: marker.xRaw,
      offsets: {
        floor: floorOffset,
        anfang: anfangOffset
      },
      classification: {
        classCode: selectedClass,
        riskType: selectedRiskType
      }
    }
  };

  try {
    const response = await fetch(ifcApiBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`IFC event save failed (${response.status})`);
    }

    return response.json();
  } catch (error) {
    const savedEvent = storeLocalIfcEvent(payload);
    return {
      ok: true,
      event: savedEvent,
      count: getLocalIfcEventsForCurrentSession().length,
      storedLocally: true,
      error: String(error?.message || error)
    };
  }
}

async function exportCurrentIfcEvent() {
  try {
    const response = await fetch(`${ifcApiBase}/export-current?sessionId=${encodeURIComponent(exportSessionId)}`, {
      method: "POST"
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`IFC export failed (${response.status}): ${text}`);
    }

    return response.json();
  } catch {
    const exportEvents = getLocalIfcEventsForCurrentSession();
    if (!exportEvents.length) {
      throw new Error("No local IFC event available to export");
    }

    return {
      ok: true,
      fileName: "export.ifc",
      eventId: exportEvents[exportEvents.length - 1].id,
      eventCount: exportEvents.length,
      content: buildIfcEventsSpf(exportEvents, "alignment.ifc"),
      storedLocally: true
    };
  }
}

function downloadTextFile(fileName, content) {
  const blob = new Blob([content], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function resizeViewports() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, container.clientWidth);
  const height = Math.max(1, container.clientHeight);

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  renderer.setPixelRatio(dpr);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  render();
  render3D();
}

function parseIfc3DAlignmentData(ifcText) {
  const pointRegex = /#(\d+)=IFCCARTESIANPOINT\(\(([^\)]*)\)\);/g;
  const polylineRegex = /#(\d+)=IFCPOLYLINE\(\(([^\)]*)\)\);/g;
  const sweptDiskRegex = /#(\d+)=IFCSWEPTDISKSOLID\(#(\d+),/g;

  const points = new Map();
  const polylines = new Map();
  const sweptDirectrixIds = [];

  let match;
  while ((match = pointRegex.exec(ifcText)) !== null) {
    const id = Number(match[1]);
    const values = match[2]
      .split(",")
      .map((v) => Number(v.trim()))
      .filter((v) => Number.isFinite(v));
    if (values.length >= 2) {
      points.set(id, {
        x: values[0],
        y: values[1],
        z: values[2] ?? 0
      });
    }
  }

  while ((match = polylineRegex.exec(ifcText)) !== null) {
    const polylineId = Number(match[1]);
    const pointRefs = match[2]
      .split(",")
      .map((t) => Number(t.replace(/[#\s]/g, "")))
      .filter((n) => Number.isFinite(n));
    polylines.set(polylineId, pointRefs);
  }

  while ((match = sweptDiskRegex.exec(ifcText)) !== null) {
    sweptDirectrixIds.push(Number(match[2]));
  }

  let selectedRefs = [];

  for (const polylineId of sweptDirectrixIds) {
    const refs = polylines.get(polylineId);
    if (refs && refs.length > selectedRefs.length) {
      selectedRefs = refs;
    }
  }

  if (!selectedRefs.length) {
    for (const refs of polylines.values()) {
      if (refs.length > selectedRefs.length) {
        selectedRefs = refs;
      }
    }
  }

  return selectedRefs
    .map((id) => points.get(id))
    .filter((p) => p && Number.isFinite(p.x) && Number.isFinite(p.y) && Number.isFinite(p.z));
}

function buildOffset3DPolyline(points, lateralOffset, zOffset) {
  const out = [];
  let lastNX = 1;
  let lastNY = 0;

  for (let i = 0; i < points.length; i += 1) {
    const prev = points[Math.max(0, i - 1)];
    const next = points[Math.min(points.length - 1, i + 1)];

    let tx = next.x - prev.x;
    let ty = next.y - prev.y;
    const len = Math.hypot(tx, ty);

    if (len > 1e-9) {
      tx /= len;
      ty /= len;
      lastNX = -ty;
      lastNY = tx;
    }

    const p = points[i];
    const point = {
      x: p.x + lastNX * lateralOffset,
      y: p.y + lastNY * lateralOffset,
      z: p.z + zOffset
    };

    if (Number.isFinite(point.x) && Number.isFinite(point.y) && Number.isFinite(point.z)) {
      out.push(point);
    }
  }

  return out;
}

function add3DLine(points, color) {
  if (points.length < 2) return;

  const geometry = new THREE.BufferGeometry().setFromPoints(
    points.map((p) => new THREE.Vector3(p.x, p.y, p.z))
  );
  const material = new THREE.LineBasicMaterial({ color });
  const line = new THREE.Line(geometry, material);
  scene.add(line);
  alignment3DObjects.push(line);
}

function computeBoundsFromPointSets(pointSets) {
  const min = new THREE.Vector3(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
  const max = new THREE.Vector3(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);

  for (const set of pointSets) {
    for (const p of set) {
      if (!Number.isFinite(p.x) || !Number.isFinite(p.y) || !Number.isFinite(p.z)) continue;
      if (p.x < min.x) min.x = p.x;
      if (p.y < min.y) min.y = p.y;
      if (p.z < min.z) min.z = p.z;
      if (p.x > max.x) max.x = p.x;
      if (p.y > max.y) max.y = p.y;
      if (p.z > max.z) max.z = p.z;
    }
  }

  if (!Number.isFinite(min.x) || !Number.isFinite(max.x)) {
    min.set(0, 0, 0);
    max.set(1, 1, 1);
  }

  return { min, max };
}

function build3DStationed(points) {
  if (!points.length) return [];
  const out = [{ ...points[0], s: 0 }];
  let acc = 0;

  for (let i = 1; i < points.length; i += 1) {
    const a = points[i - 1];
    const b = points[i];
    // Stationing is along plan alignment in XY for consistent 2D/3D mapping.
    acc += Math.hypot(b.x - a.x, b.y - a.y);
    out.push({ ...b, s: acc });
  }

  return out;
}

function sample3DAtStation(stationed, s) {
  if (!stationed.length) return null;
  if (s <= 0) {
    const a = stationed[0];
    const b = stationed[Math.min(1, stationed.length - 1)] || a;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    return { x: a.x, y: a.y, z: a.z, s: 0, tx: dx / len, ty: dy / len };
  }

  const last = stationed[stationed.length - 1];
  if (s >= last.s) {
    const b = last;
    const a = stationed[Math.max(0, stationed.length - 2)] || b;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    return { x: b.x, y: b.y, z: b.z, s: last.s, tx: dx / len, ty: dy / len };
  }

  for (let i = 1; i < stationed.length; i += 1) {
    const a = stationed[i - 1];
    const b = stationed[i];
    if (s > b.s) continue;

    const ds = b.s - a.s;
    const t = ds < 1e-12 ? 0 : (s - a.s) / ds;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;

    return {
      x: a.x + dx * t,
      y: a.y + dy * t,
      z: a.z + (b.z - a.z) * t,
      s,
      tx: dx / len,
      ty: dy / len
    };
  }

  return null;
}

function addMarkerCube3D(marker) {
  const base = sample3DAtStation(alignment3DStationed, marker.station);
  if (!base) return null;

  const nx = -(base.ty ?? 0);
  const ny = base.tx ?? 1;

  const worldX = base.x + nx * marker.local.x;
  const worldY = base.y + ny * marker.local.x;
  const worldZ = base.z + marker.local.z;

  const geometry = new THREE.BoxGeometry(markerCubeSize, markerCubeSize, markerCubeSize);
  const material = new THREE.MeshStandardMaterial({
    color: classColorInt(marker.classCode),
    roughness: 0.5,
    metalness: 0.05
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(worldX, worldY, worldZ);
  scene.add(mesh);
  markerCubeObjects.push(mesh);

  return { x: worldX, y: worldY, z: worldZ };
}

function update3DAlignment(points) {
  for (const obj of alignment3DObjects) {
    scene.remove(obj);
    obj.geometry.dispose();
    obj.material.dispose();
  }
  alignment3DObjects = [];

  for (const cube of markerCubeObjects) {
    scene.remove(cube);
    cube.geometry.dispose();
    cube.material.dispose();
  }
  markerCubeObjects = [];

  if (!points.length) return;

  alignment3DStationed = build3DStationed(points);

  const centerLine = points;
  const bottomLeft = buildOffset3DPolyline(points, -floorOffset, 0);
  const bottomRight = buildOffset3DPolyline(points, floorOffset, 0);
  const anfangLeft = buildOffset3DPolyline(points, -floorOffset, anfangHeight);
  const anfangRight = buildOffset3DPolyline(points, floorOffset, anfangHeight);

  add3DLine(centerLine, 0x1c7a5a);
  add3DLine(bottomLeft, 0x1c7a5a);
  add3DLine(bottomRight, 0x1c7a5a);
  add3DLine(anfangLeft, 0x6a4a2c);
  add3DLine(anfangRight, 0x6a4a2c);

  for (const marker of trackedMarkers) {
    const cubeWorld = addMarkerCube3D(marker);
    if (cubeWorld) {
      marker.world = {
        x: cubeWorld.x,
        y: cubeWorld.y,
        z: cubeWorld.z
      };
    }
  }

  const bounds = computeBoundsFromPointSets([centerLine, bottomLeft, bottomRight, anfangLeft, anfangRight]);
  const center = bounds.min.clone().add(bounds.max).multiplyScalar(0.5);
  const size = bounds.max.clone().sub(bounds.min);
  const radius = Math.max(size.x, size.y, size.z, 1);

  gridHelper.position.set(center.x, center.y, center.z);
  gridHelper.scale.setScalar(Math.max(1, radius / 100));

  controls.target.copy(center);
  camera.position.set(center.x + radius * 0.9, center.y - radius * 1.3, center.z + radius * 0.7);
  camera.near = Math.max(0.01, radius / 10000);
  camera.far = Math.max(1000, radius * 100);
  camera.updateProjectionMatrix();
  controls.update();
}

function render3D() {
  if (activeView !== "3d") return;
  controls.update();
  renderer.render(scene, camera);
}

function animate3D() {
  render3D();
  requestAnimationFrame(animate3D);
}

function setActiveView(nextView) {
  activeView = nextView;
  const show3d = nextView === "3d";

  renderer.domElement.style.display = show3d ? "block" : "none";
  canvas.style.display = show3d ? "none" : "block";

  if (view3dButton) {
    view3dButton.style.filter = show3d ? "brightness(1.12)" : "none";
  }
  if (view2dButton) {
    view2dButton.style.filter = show3d ? "none" : "brightness(1.12)";
  }

  if (show3d) {
    const s0 = Math.round(windowStart);
    const s1 = Math.min(Math.round(windowStart + zoneLength * zoneCount), Math.round(totalLength));
    status.textContent = `3D-flik aktiv: IFC alignment 0/${String(s0).padStart(3, "0")} - 0/${String(s1).padStart(3, "0")}.`;
    render3D();
  } else {
    render();
  }
}

function parseIfcPlanData(ifcText) {
  const pointRegex = /#(\d+)=IFCCARTESIANPOINT\(\(([^\)]*)\)\);/g;
  const dirRegex = /#(\d+)=IFCDIRECTION\(\(([^\)]*)\)\);/g;
  const axisRegex = /#(\d+)=IFCAXIS2PLACEMENT2D\(#(\d+),#(\d+)\);/g;
  const segmentRegex = /#(\d+)=IFCCURVESEGMENT\([^,]*,#(\d+),IFCLENGTHMEASURE\(([-+0-9.Ee]+)\),IFCLENGTHMEASURE\(([-+0-9.Ee]+)\),#(\d+)\);/g;
  const compositeRegex = /#(\d+)=IFCCOMPOSITECURVE\(\(([^\)]*)\),/g;
  const footprintRegex = /IFCSHAPEREPRESENTATION\([^\n]*'FootPrint'[^\n]*\(#(\d+)\)\);/;
  const lineRegex = /#(\d+)=IFCLINE\(/g;
  const circleRegex = /#(\d+)=IFCCIRCLE\(#\d+,([-+0-9.Ee]+)\);/g;

  const pointMap = new Map();
  const dirMap = new Map();
  const axisToPoint = new Map();
  const axisToDir = new Map();
  const segmentMap = new Map();
  const compositeMap = new Map();
  const lineSet = new Set();
  const circleMap = new Map();

  let m;
  while ((m = pointRegex.exec(ifcText)) !== null) {
    const id = Number(m[1]);
    const nums = m[2].split(",").map((x) => Number(x.trim()));
    if (nums.length < 2 || Number.isNaN(nums[0]) || Number.isNaN(nums[1])) continue;
    pointMap.set(id, { x: nums[0], y: nums[1] });
  }

  while ((m = dirRegex.exec(ifcText)) !== null) {
    const id = Number(m[1]);
    const nums = m[2].split(",").map((x) => Number(x.trim()));
    const dx = nums[0] ?? 1;
    const dy = nums[1] ?? 0;
    const len = Math.hypot(dx, dy) || 1;
    dirMap.set(id, { x: dx / len, y: dy / len });
  }

  while ((m = axisRegex.exec(ifcText)) !== null) {
    axisToPoint.set(Number(m[1]), Number(m[2]));
    axisToDir.set(Number(m[1]), Number(m[3]));
  }

  while ((m = segmentRegex.exec(ifcText)) !== null) {
    segmentMap.set(Number(m[1]), {
      placementId: Number(m[2]),
      segmentLength: Number(m[4]),
      parentCurveId: Number(m[5])
    });
  }

  while ((m = compositeRegex.exec(ifcText)) !== null) {
    const id = Number(m[1]);
    const refs = m[2]
      .split(",")
      .map((t) => Number(t.replace(/[#\s]/g, "")))
      .filter((n) => Number.isFinite(n));
    compositeMap.set(id, refs);
  }

  while ((m = lineRegex.exec(ifcText)) !== null) {
    lineSet.add(Number(m[1]));
  }

  while ((m = circleRegex.exec(ifcText)) !== null) {
    circleMap.set(Number(m[1]), Math.abs(Number(m[2])));
  }

  const fpMatch = ifcText.match(footprintRegex);
  const fpCompositeId = fpMatch ? Number(fpMatch[1]) : null;

  let selectedSegments = [];
  if (fpCompositeId && compositeMap.has(fpCompositeId)) {
    selectedSegments = compositeMap.get(fpCompositeId);
  } else {
    for (const refs of compositeMap.values()) {
      if (refs.length > selectedSegments.length) selectedSegments = refs;
    }
  }

  function normalizeAngle(a) {
    let x = a;
    while (x <= -Math.PI) x += Math.PI * 2;
    while (x > Math.PI) x -= Math.PI * 2;
    return x;
  }

  function pickSweep(startA, endA, expectedSweep) {
    const raw = normalizeAngle(endA - startA);
    const candidates = [
      raw - Math.PI * 2,
      raw,
      raw + Math.PI * 2,
      -raw - Math.PI * 2,
      -raw,
      -raw + Math.PI * 2
    ];
    let best = candidates[0];
    let bestErr = Math.abs(Math.abs(best) - Math.abs(expectedSweep));
    for (let i = 1; i < candidates.length; i += 1) {
      const err = Math.abs(Math.abs(candidates[i]) - Math.abs(expectedSweep));
      if (err < bestErr) {
        best = candidates[i];
        bestErr = err;
      }
    }
    return best;
  }

  function appendPoint(out, p) {
    const last = out[out.length - 1];
    if (last && Math.hypot(last.x - p.x, last.y - p.y) < 1e-9) return;
    out.push({ x: p.x, y: p.y });
  }

  const records = [];
  for (let i = 0; i < selectedSegments.length; i += 1) {
    const segment = segmentMap.get(selectedSegments[i]);
    if (!segment) continue;

    const pointId = axisToPoint.get(segment.placementId);
    const dirId = axisToDir.get(segment.placementId);
    const origin = pointMap.get(pointId);
    const tangent = dirMap.get(dirId) || { x: 1, y: 0 };
    if (!origin) continue;

    let end = null;
    if (i + 1 < selectedSegments.length) {
      const nextSeg = segmentMap.get(selectedSegments[i + 1]);
      if (nextSeg) {
        const nextPoint = pointMap.get(axisToPoint.get(nextSeg.placementId));
        if (nextPoint) end = nextPoint;
      }
    }

    records.push({
      origin,
      tangent,
      end,
      length: segment.segmentLength,
      curveId: segment.parentCurveId
    });
  }

  const out = [];

  for (const rec of records) {
    const { origin, tangent, end, length, curveId } = rec;

    if (lineSet.has(curveId)) {
      const lineEnd = end || {
        x: origin.x + tangent.x * length,
        y: origin.y + tangent.y * length
      };
      const dist = Math.hypot(lineEnd.x - origin.x, lineEnd.y - origin.y);
      const n = Math.max(2, Math.ceil(dist / 5));
      for (let i = 0; i <= n; i += 1) {
        const t = i / n;
        appendPoint(out, {
          x: origin.x + (lineEnd.x - origin.x) * t,
          y: origin.y + (lineEnd.y - origin.y) * t
        });
      }
      continue;
    }

    if (circleMap.has(curveId)) {
      const radius = circleMap.get(curveId);
      if (!radius || radius < 1e-12) continue;

      const normalLeft = { x: -tangent.y, y: tangent.x };
      const centers = [
        { x: origin.x + normalLeft.x * radius, y: origin.y + normalLeft.y * radius },
        { x: origin.x - normalLeft.x * radius, y: origin.y - normalLeft.y * radius }
      ];

      let center = centers[0];
      let sweep = length / radius;

      if (end) {
        const expected = length / radius;
        let bestScore = Number.POSITIVE_INFINITY;

        for (const c of centers) {
          const startA = Math.atan2(origin.y - c.y, origin.x - c.x);
          const endA = Math.atan2(end.y - c.y, end.x - c.x);
          const candidateSweep = pickSweep(startA, endA, expected);

          const rv = { x: origin.x - c.x, y: origin.y - c.y };
          const tangentFromSweep = candidateSweep >= 0
            ? { x: -rv.y / radius, y: rv.x / radius }
            : { x: rv.y / radius, y: -rv.x / radius };

          const tangentDot = tangentFromSweep.x * tangent.x + tangentFromSweep.y * tangent.y;
          const radiusErr = Math.abs(Math.hypot(end.x - c.x, end.y - c.y) - radius);
          const sweepErr = Math.abs(Math.abs(candidateSweep) - Math.abs(expected));
          const tangentErr = 1 - Math.max(-1, Math.min(1, tangentDot));
          const score = radiusErr * 10 + sweepErr + tangentErr * 0.75;

          if (score < bestScore) {
            bestScore = score;
            center = c;
            sweep = candidateSweep;
          }
        }
      }

      const startA = Math.atan2(origin.y - center.y, origin.x - center.x);
      const n = Math.max(8, Math.ceil(Math.abs(sweep) / (Math.PI / 36)));
      for (let i = 0; i <= n; i += 1) {
        const a = startA + sweep * (i / n);
        appendPoint(out, {
          x: center.x + radius * Math.cos(a),
          y: center.y + radius * Math.sin(a)
        });
      }
      continue;
    }

    appendPoint(out, origin);
  }

  alignmentPoints = out;
}

function buildStationed(points) {
  if (!points.length) return [];
  const out = [{ ...points[0], s: 0 }];
  let acc = 0;
  for (let i = 1; i < points.length; i += 1) {
    const a = points[i - 1];
    const b = points[i];
    acc += Math.hypot(b.x - a.x, b.y - a.y);
    out.push({ ...b, s: acc });
  }
  return out;
}

function sampleAtStation(stationed, s) {
  if (!stationed.length) return null;
  if (s <= 0) return { ...stationed[0], s: 0 };
  const last = stationed[stationed.length - 1];
  if (s >= last.s) return { ...last, s: last.s };

  for (let i = 1; i < stationed.length; i += 1) {
    const a = stationed[i - 1];
    const b = stationed[i];
    if (s > b.s) continue;
    const len = b.s - a.s;
    const t = len < 1e-12 ? 0 : (s - a.s) / len;
    return {
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
      s
    };
  }

  return { ...last };
}

function extractRange(stationed, startS, endS, step = 0.25) {
  const pts = [];
  for (let s = startS; s < endS; s += step) {
    const p = sampleAtStation(stationed, s);
    if (p) pts.push(p);
  }
  const endPoint = sampleAtStation(stationed, endS);
  if (endPoint) pts.push(endPoint);
  return pts;
}

function buildLocalProjected(points, startRef, axisRef) {
  let tx = axisRef.x - startRef.x;
  let ty = axisRef.y - startRef.y;
  const len = Math.hypot(tx, ty);
  if (len < 1e-9) {
    tx = 0;
    ty = 1;
  } else {
    tx /= len;
    ty /= len;
  }
  const nx = -ty;
  const ny = tx;

  return points.map((p) => {
    const dx = p.x - startRef.x;
    const dy = p.y - startRef.y;
    return {
      x: dx * nx + dy * ny,
      y: p.s,
      s: p.s
    };
  });
}

function drawGrid(x0, y0, w, h) {
  ctx.save();
  ctx.strokeStyle = "#d7e3dc";
  ctx.lineWidth = 1;
  const step = 50;

  for (let x = x0; x <= x0 + w; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, y0);
    ctx.lineTo(x, y0 + h);
    ctx.stroke();
  }

  for (let y = y0; y <= y0 + h; y += step) {
    ctx.beginPath();
    ctx.moveTo(x0, y);
    ctx.lineTo(x0 + w, y);
    ctx.stroke();
  }

  ctx.restore();
}

function drawZone(zoneIndex, zoneRect, stationed) {
  const startS = Math.max(0, Math.min(windowStart + zoneIndex * zoneLength, totalLength));
  const endS = Math.max(startS, Math.min(startS + zoneLength, totalLength));

  const worldRange = extractRange(stationed, startS, endS);
  if (!worldRange.length) return;

  const axisRef = worldRange[Math.min(worldRange.length - 1, 12)] || worldRange[worldRange.length - 1];
  const local = buildLocalProjected(worldRange, worldRange[0], axisRef);

  const isMiddleZone = zoneIndex === 1;
  const points = isMiddleZone
    ? local.map((p) => ({ x: 0, y: p.y, s: p.s }))
    : local;

  const markStart = Math.ceil(startS);
  const markEnd = Math.floor(endS);
  const marks = [];

  for (let m = markStart; m <= markEnd; m += 1) {
    const wp = sampleAtStation(stationed, m);
    if (!wp) continue;
    const proj = buildLocalProjected([wp], worldRange[0], axisRef)[0];
    marks.push({
      x: isMiddleZone ? 0 : proj.x,
      s: m,
      label: m % 10 === 0 ? `0/${String(m).padStart(3, "0")}` : ""
    });
  }

  let minX = Infinity;
  let maxX = -Infinity;
  const extents = [-anfangOffset, -floorOffset, floorOffset, anfangOffset, 0];
  for (const p of points) {
    for (const e of extents) {
      const xx = p.x + e;
      if (xx < minX) minX = xx;
      if (xx > maxX) maxX = xx;
    }
  }
  for (const p of marks) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
  }

  if (!Number.isFinite(minX) || !Number.isFinite(maxX)) {
    minX = -1;
    maxX = 1;
  }

  const xRange = Math.max(maxX - minX, 0.25);
  const xPad = 24;
  const yPad = 18;
  const scaleX = Math.max(0.0001, (zoneRect.w - xPad * 2) / xRange);
  const centerX = (minX + maxX) / 2;

  function sx(x) {
    return zoneRect.x + zoneRect.w / 2 + (x - centerX) * scaleX;
  }

  function sy(station) {
    const t = endS - startS < 1e-9 ? 0 : (station - startS) / (endS - startS);
    return zoneRect.y + zoneRect.h - yPad - t * (zoneRect.h - yPad * 2);
  }

  if (isMiddleZone) {
    const meterStepX = Math.abs(sx(1) - sx(0));
    const meterStepY = Math.abs(sy(startS + 1) - sy(startS));
    const centerXGrid = sx(0);

    const maxMetersLeft = Math.ceil((centerXGrid - zoneRect.x) / Math.max(meterStepX, 1e-6));
    const maxMetersRight = Math.ceil((zoneRect.x + zoneRect.w - centerXGrid) / Math.max(meterStepX, 1e-6));

    const minStation = Math.ceil(startS);
    const maxStation = Math.floor(endS);

    ctx.save();
    ctx.strokeStyle = "#bfd4c8";
    ctx.lineWidth = 0.8;

    for (let i = -maxMetersLeft; i <= maxMetersRight; i += 1) {
      const x = sx(i);
      if (x < zoneRect.x || x > zoneRect.x + zoneRect.w) continue;
      ctx.beginPath();
      ctx.moveTo(x, sy(startS));
      ctx.lineTo(x, sy(endS));
      ctx.stroke();
    }

    for (let m = minStation; m <= maxStation; m += 1) {
      const y = sy(m);
      ctx.beginPath();
      ctx.moveTo(zoneRect.x, y);
      ctx.lineTo(zoneRect.x + zoneRect.w, y);
      ctx.stroke();
    }

    const crossHalf = Math.max(1.5, Math.min(meterStepX, meterStepY) * 0.12);
    ctx.strokeStyle = "#8fab9d";
    ctx.lineWidth = 0.9;
    for (let i = -maxMetersLeft; i <= maxMetersRight; i += 1) {
      const x = sx(i);
      if (x < zoneRect.x || x > zoneRect.x + zoneRect.w) continue;
      for (let m = minStation; m <= maxStation; m += 1) {
        const y = sy(m);
        if (y < zoneRect.y || y > zoneRect.y + zoneRect.h) continue;
        ctx.beginPath();
        ctx.moveTo(x - crossHalf, y);
        ctx.lineTo(x + crossHalf, y);
        ctx.moveTo(x, y - crossHalf);
        ctx.lineTo(x, y + crossHalf);
        ctx.stroke();
      }
    }

    ctx.restore();
  }

  function drawOffsetPolyline(offset, color, width, dash = []) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.setLineDash(dash);
    ctx.beginPath();
    ctx.moveTo(sx(points[0].x + offset), sy(points[0].s));
    for (let i = 1; i < points.length; i += 1) {
      ctx.lineTo(sx(points[i].x + offset), sy(points[i].s));
    }
    ctx.stroke();
    ctx.restore();
  }

  ctx.save();
  drawOffsetPolyline(-anfangOffset, "#6a4a2c", 1.8, [6, 4]);
  drawOffsetPolyline(-floorOffset, "#1c7a5a", 2.2);
  drawOffsetPolyline(floorOffset, "#1c7a5a", 2.2);
  drawOffsetPolyline(anfangOffset, "#6a4a2c", 1.8, [6, 4]);

  if (isMiddleZone && trackedMarkers.length) {
    for (const marker of trackedMarkers) {
      if (marker.station < startS || marker.station > endS) continue;
      const mx = sx(marker.xRaw);
      const my = sy(marker.station);
      ctx.save();
      ctx.strokeStyle = classColorHex(marker.classCode);
      ctx.lineWidth = 2;
      const r = 6;
      ctx.beginPath();
      ctx.moveTo(mx - r, my - r);
      ctx.lineTo(mx + r, my + r);
      ctx.moveTo(mx - r, my + r);
      ctx.lineTo(mx + r, my - r);
      ctx.stroke();
      ctx.restore();
    }
  }

  for (const mark of marks) {
    const x = sx(mark.x);
    const y = sy(mark.s);
    ctx.strokeStyle = "#2d5b4c";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - 5, y);
    ctx.lineTo(x + 5, y);
    ctx.stroke();

    if (mark.label) {
      ctx.fillStyle = "#16392d";
      ctx.font = "12px 'Avenir Next', 'Segoe UI', sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(mark.label, x + 8, y);
    }
  }

  ctx.fillStyle = "#134232";
  ctx.beginPath();
  ctx.arc(sx(points[0].x), sy(points[0].s), 3.5, 0, Math.PI * 2);
  ctx.fill();

  const from = Math.round(startS);
  const to = Math.round(endS);
  const zoneNumber = zoneIndex + 1;
  const zoneType = isMiddleZone ? "ratad" : "original";
  const label = `Zon ${zoneNumber}: 0/${String(from).padStart(3, "0")} - 0/${String(to).padStart(3, "0")} (${zoneType})`;

  ctx.fillStyle = "#17372c";
  ctx.font = "700 13px 'Avenir Next', 'Segoe UI', sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(label, zoneRect.x + 8, zoneRect.y + 4);
  ctx.restore();

  return {
    startS,
    endS,
    zoneRect,
    centerX,
    scaleX,
    yPad
  };
}

function render() {
  const width = container.clientWidth;
  const height = container.clientHeight;

  ctx.clearRect(0, 0, width, height);

  if (!alignmentPoints.length) return;

  const stationed = buildStationed(alignmentPoints);
  totalLength = stationed[stationed.length - 1].s;

  const margin = 8;
  const innerX = margin;
  const innerY = margin;
  const innerW = width - margin * 2;
  const innerH = height - margin * 2;

  drawGrid(innerX, innerY, innerW, innerH);

  const ratioSum = zoneRatios.reduce((a, b) => a + b, 0);
  const zoneHeights = zoneRatios.map((r) => (innerH * r) / ratioSum);

  const topZone3Y = innerY;
  const middleZone2Y = innerY + zoneHeights[2];
  const bottomZone1Y = innerY + zoneHeights[2] + zoneHeights[1];

  // Draw separators between zones (seamless panel, no separate windows).
  ctx.save();
  ctx.strokeStyle = "#95b5a8";
  ctx.lineWidth = 1.25;
  const separator1 = middleZone2Y;
  const separator2 = bottomZone1Y;
  ctx.beginPath();
  ctx.moveTo(innerX, separator1);
  ctx.lineTo(innerX + innerW, separator1);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(innerX, separator2);
  ctx.lineTo(innerX + innerW, separator2);
  ctx.stroke();
  ctx.restore();

  const zone1Rect = { x: innerX, y: bottomZone1Y, w: innerW, h: zoneHeights[0] };
  const zone2Rect = { x: innerX, y: middleZone2Y, w: innerW, h: zoneHeights[1] };
  const zone3Rect = { x: innerX, y: topZone3Y, w: innerW, h: zoneHeights[2] };

  drawZone(0, zone1Rect, stationed);
  const zone2Meta = drawZone(1, zone2Rect, stationed);
  drawZone(2, zone3Rect, stationed);

  lastRenderState = {
    stationed,
    zone2: zone2Meta
  };

  const s0 = Math.round(windowStart);
  const s1 = Math.min(Math.round(windowStart + zoneLength * zoneCount), Math.round(totalLength));
  const latestMarker = trackedMarkers[trackedMarkers.length - 1] || null;
  if (latestMarker) {
    status.textContent = `Tre-zons vy aktiv: 0/${String(s0).padStart(3, "0")} - 0/${String(s1).padStart(3, "0")}. Steg ${stepLength} m. Kryss ${trackedMarkers.length} st. Senaste ${latestMarker.classCode}: XYZ=(${latestMarker.local.x.toFixed(2)}, ${latestMarker.local.y.toFixed(2)}, ${latestMarker.local.z.toFixed(2)}) Verklig XY=(${latestMarker.world.x.toFixed(3)}, ${latestMarker.world.y.toFixed(3)})`;
  } else {
    status.textContent = `Tre-zons vy aktiv: 0/${String(s0).padStart(3, "0")} - 0/${String(s1).padStart(3, "0")}. Steg ${stepLength} m, zon 2 ar ratad.`;
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

async function placeMarkerFromClick(clientX, clientY) {
  if (!lastRenderState?.zone2) return;

  const rect = canvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  const zone = lastRenderState.zone2;
  const { zoneRect, startS, endS, centerX, scaleX, yPad } = zone;
  const inZone2 = x >= zoneRect.x && x <= zoneRect.x + zoneRect.w && y >= zoneRect.y && y <= zoneRect.y + zoneRect.h;
  if (!inZone2) return;

  const usableHeight = Math.max(1e-6, zoneRect.h - yPad * 2);
  const t = clamp((zoneRect.y + zoneRect.h - yPad - y) / usableHeight, 0, 1);
  const station = startS + t * (endS - startS);

  const xRaw = ((x - (zoneRect.x + zoneRect.w / 2)) / Math.max(scaleX, 1e-6)) + centerX;
  const xLocal = clamp(xRaw, -floorOffset, floorOffset);
  const zLocal = clamp(Math.abs(xRaw) - floorOffset, 0, anfangOffset - floorOffset);

  const world = sampleAtStation(lastRenderState.stationed, station);
  if (!world) return;

  const marker = {
    station,
    xRaw,
    classCode: classSelect?.value || "TK1",
    riskType: riskTypeSelect?.value || "bom sprutbetong",
    local: {
      x: xLocal,
      y: station,
      z: zLocal
    },
    world: {
      x: world.x,
      y: world.y,
      z: 0
    }
  };

  const cubeWorld = addMarkerCube3D(marker);
  if (cubeWorld) {
    marker.world = {
      x: cubeWorld.x,
      y: cubeWorld.y,
      z: cubeWorld.z
    };
  }

  trackedMarkers.push(marker);
  render();

  try {
    const saved = await registerIfcEvent(marker);
    status.textContent = `Marker sparad som IfcActionRequest (${saved.event.id}). Lokal XYZ: (${marker.local.x.toFixed(2)}, ${marker.local.y.toFixed(2)}, ${marker.local.z.toFixed(2)}) | Verklig XY: (${marker.world.x.toFixed(3)}, ${marker.world.y.toFixed(3)})`;
  } catch (error) {
    status.textContent = `Marker satt men IFC-event kunde inte sparas. Lokal XYZ: (${marker.local.x.toFixed(2)}, ${marker.local.y.toFixed(2)}, ${marker.local.z.toFixed(2)})`;
    console.error(error);
  }
}

function stepBackward() {
  windowStart = Math.max(0, windowStart - stepLength);
  if (activeView === "2d") {
    render();
  }
}

function stepForward() {
  const maxStart = Math.max(0, totalLength - zoneLength * zoneCount);
  windowStart = Math.min(maxStart, windowStart + stepLength);
  if (activeView === "2d") {
    render();
  }
}

if (view3dButton) {
  view3dButton.addEventListener("click", () => {
    setActiveView("3d");
  });
}

if (view2dButton) {
  view2dButton.addEventListener("click", () => {
    setActiveView("2d");
  });
}

prevStepButton.addEventListener("click", stepBackward);
nextStepButton.addEventListener("click", stepForward);

canvas.addEventListener("click", (ev) => {
  placeMarkerFromClick(ev.clientX, ev.clientY);
});

if (saveIfcButton) {
  saveIfcButton.addEventListener("click", async () => {
    try {
      const exported = await exportCurrentIfcEvent();
      downloadTextFile(exported.fileName, exported.content);
      const exportedCount = Number(exported.eventCount || 0);
      const countText = exportedCount > 0 ? `${exportedCount} kryss` : `event ${exported.eventId}`;
      status.textContent = `IFC exporterad: ${exported.fileName} (${countText}).`;
    } catch (error) {
      status.textContent = "Kunde inte exportera IFC-event. Kontrollera att en markor har sparats.";
      console.error(error);
    }
  });
}

window.addEventListener("resize", resizeViewports);

async function init() {
  status.textContent = "Laddar alignment.ifc...";

  try {
    const res = await fetch(alignmentIfcUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();

    parseIfcPlanData(text);
    alignment3DPoints = parseIfc3DAlignmentData(text);

    trackedMarkers = restoreLocalMarkersForCurrentSession();

    if (!alignmentPoints.length) {
      status.textContent = "Ingen plan-geometri hittades i alignment.ifc.";
      return;
    }

    if (alignment3DPoints.length) {
      update3DAlignment(alignment3DPoints);
    }

    resizeViewports();
    render();
    setActiveView("3d");
    animate3D();
  } catch (error) {
    status.textContent = "Kunde inte lasa alignment.ifc for planvy.";
    console.error(error);
  }
}

init();

