import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createIfcExpertEngine } from "./src/ifc-expert.js";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const ifcEventsDbPath = path.resolve(dirname, "ifc-events-db.json");
const ifcExportDir = path.resolve(dirname, "ifc-event-exports");
const ifcExpert = createIfcExpertEngine();

function readIfcEventsDb() {
  if (!fs.existsSync(ifcEventsDbPath)) {
    return { events: [] };
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(ifcEventsDbPath, "utf8"));
    if (Array.isArray(parsed)) {
      return { events: parsed };
    }
    if (parsed && Array.isArray(parsed.events)) {
      return parsed;
    }
  } catch {
    // Fall through to reset db format.
  }

  return { events: [] };
}

function writeIfcEventsDb(db) {
  fs.writeFileSync(ifcEventsDbPath, `${JSON.stringify(db, null, 2)}\n`, "utf8");
}

function makeIfcGuid(seed = "") {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$";
  let out = "";
  const source = `${Date.now()}-${Math.random()}-${seed}`;
  for (let i = 0; i < 22; i += 1) {
    const code = source.charCodeAt(i % source.length) + i * 17;
    out += chars[Math.abs(code) % chars.length];
  }
  return out;
}

function escIfcString(text) {
  return String(text ?? "").replace(/'/g, "''");
}

function buildIfcEventsSpf(eventRecords, sourceIfcName) {
  const stamp = new Date().toISOString();
  const cubeSize = 0.5;
  const cubeHalf = cubeSize / 2;

  const gidProject = makeIfcGuid("project");
  const lines = [
    "ISO-10303-21;",
    "HEADER;",
    "FILE_DESCRIPTION(('ViewDefinition[DesignTransferView]'),'2;1');",
    `FILE_NAME('export.ifc','${escIfcString(stamp)}',('AlignmentOffline'),('AlignmentOffline'),'GitHub Copilot','GitHub Copilot','');`,
    "FILE_SCHEMA(('IFC4X3_ADD2'));",
    "ENDSEC;",
    "DATA;",
    `#1=IFCPROJECT('${gidProject}',$,'Alignment Event Export',$,$,$,$,(#10),#5);`,
    "#2=IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.);",
    "#3=IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.);",
    "#4=IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.);",
    "#5=IFCUNITASSIGNMENT((#2,#3,#4));",
    "#6=IFCCARTESIANPOINT((0.,0.,0.));",
    "#7=IFCDIRECTION((0.,0.,1.));",
    "#8=IFCDIRECTION((1.,0.,0.));",
    "#9=IFCAXIS2PLACEMENT3D(#6,#7,#8);",
    "#10=IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#9,$);"
  ];

  let nextId = 20;
  const allocId = () => {
    const id = nextId;
    nextId += 1;
    return id;
  };

  for (const eventRecord of eventRecords) {
    const local = eventRecord?.data?.localXYZ || {};
    const world = eventRecord?.data?.worldXYZ || {};
    const station = eventRecord?.data?.station ?? local.y ?? 0;
    const eventStamp = eventRecord?.timestamp || stamp;
    const eventName = eventRecord?.name || "RiskObservation";
    const riskLevel = eventRecord?.data?.classification?.classCode || "TK1";
    const riskType = eventRecord?.data?.classification?.riskType || "bom sprutbetong";
    const eventId = eventRecord?.id || "marker";
    const sessionId = eventRecord?.data?.sessionId || "unknown-session";
    const xRaw = Number(eventRecord?.data?.xRaw ?? 0);
    const floorOffset = Number(eventRecord?.data?.offsets?.floor ?? 0);
    const anfangOffset = Number(eventRecord?.data?.offsets?.anfang ?? 0);

    const localX = Number(local.x ?? 0);
    const localY = Number(local.y ?? station);
    const localZ = Number(local.z ?? 0);

    const worldX = Number(world.x || 0);
    const worldY = Number(world.y || 0);
    const worldZ = Number(world.z || 0);

    const gidActionRequest = makeIfcGuid(`${eventRecord?.id || "action-request"}-action`);
    const gidAnnotation = makeIfcGuid(`${eventRecord?.id || "annotation"}-annotation`);
    const gidPsetAction = makeIfcGuid(`${eventRecord?.id || "pset-action"}-pset`);
    const gidRelAction = makeIfcGuid(`${eventRecord?.id || "rel-action"}-rel-def`);
    const gidRelAssign = makeIfcGuid(`${eventRecord?.id || "rel-assign"}-rel-assign`);

    const idAnnotation = allocId();
    const idPlacement = allocId();
    const idAxis = allocId();
    const idWorldPoint = allocId();
    const idPDefShape = allocId();
    const idPointRep = allocId();
    const idBodyRep = allocId();
    const idBlock = allocId();
    const idBlockAxis = allocId();
    const idBlockPoint = allocId();

    const idAction = allocId();
    const idPropSourceName = allocId();
    const idPropSourceIfc = allocId();
    const idPropSourceDesc = allocId();
    const idPropStatus = allocId();
    const idPropEventId = allocId();
    const idPropEventName = allocId();
    const idPropSessionId = allocId();
    const idPropObsTimestamp = allocId();
    const idPropExportTimestamp = allocId();
    const idPropRiskType = allocId();
    const idPropRiskLevel = allocId();
    const idPropStation = allocId();
    const idPropXRaw = allocId();
    const idPropLocalX = allocId();
    const idPropLocalY = allocId();
    const idPropLocalZ = allocId();
    const idPropWorldX = allocId();
    const idPropWorldY = allocId();
    const idPropWorldZ = allocId();
    const idPropFloorOffset = allocId();
    const idPropAnfangOffset = allocId();
    const idPropGeometry = allocId();
    const idPset = allocId();
    const idRelDefines = allocId();
    const idRelAssign = allocId();

    lines.push(`#${idAnnotation}=IFCANNOTATION('${gidAnnotation}',$,'RiskPoint',$,'Mapped risk position in model coordinates',#${idPlacement},#${idPDefShape});`);
    lines.push(`#${idPlacement}=IFCLOCALPLACEMENT($,#${idAxis});`);
    lines.push(`#${idAxis}=IFCAXIS2PLACEMENT3D(#${idWorldPoint},#7,#8);`);
    lines.push(`#${idWorldPoint}=IFCCARTESIANPOINT((${worldX},${worldY},${worldZ}));`);
    lines.push(`#${idPDefShape}=IFCPRODUCTDEFINITIONSHAPE($,$,(#${idPointRep},#${idBodyRep}));`);
    lines.push(`#${idPointRep}=IFCSHAPEREPRESENTATION(#10,'Annotation','Point',(#${idWorldPoint}));`);
    lines.push(`#${idBodyRep}=IFCSHAPEREPRESENTATION(#10,'Body','CSG',(#${idBlock}));`);
    lines.push(`#${idBlock}=IFCBLOCK(#${idBlockAxis},${cubeSize},${cubeSize},${cubeSize});`);
    lines.push(`#${idBlockAxis}=IFCAXIS2PLACEMENT3D(#${idBlockPoint},#7,#8);`);
    lines.push(`#${idBlockPoint}=IFCCARTESIANPOINT((${-cubeHalf},${-cubeHalf},${-cubeHalf}));`);

    lines.push(`#${idAction}=IFCACTIONREQUEST('${gidActionRequest}',$,'${escIfcString(eventName)}',$,'Risk record from zone 2','${escIfcString(eventId)}',$,.USERDEFINED.);`);
    lines.push(`#${idPropSourceName}=IFCPROPERTYSINGLEVALUE('RequestSourceName',$,IFCLABEL('AlignmentOffline'),$);`);
    lines.push(`#${idPropSourceIfc}=IFCPROPERTYSINGLEVALUE('RequestSourceIfc',$,IFCLABEL('${escIfcString(sourceIfcName)}'),$);`);
    lines.push(`#${idPropSourceDesc}=IFCPROPERTYSINGLEVALUE('RequestSourceDescription',$,IFCTEXT('source=${escIfcString(sourceIfcName)}; timestamp=${escIfcString(eventStamp)}; station=${escIfcString(station)}; riskType=${escIfcString(riskType)}; riskLevel=${escIfcString(riskLevel)}; sessionId=${escIfcString(sessionId)}'),$);`);
    lines.push(`#${idPropStatus}=IFCPROPERTYSINGLEVALUE('Status',$,IFCLABEL('OPEN'),$);`);
    lines.push(`#${idPropEventId}=IFCPROPERTYSINGLEVALUE('EventId',$,IFCLABEL('${escIfcString(eventId)}'),$);`);
    lines.push(`#${idPropEventName}=IFCPROPERTYSINGLEVALUE('EventName',$,IFCLABEL('${escIfcString(eventName)}'),$);`);
    lines.push(`#${idPropSessionId}=IFCPROPERTYSINGLEVALUE('SessionId',$,IFCLABEL('${escIfcString(sessionId)}'),$);`);
    lines.push(`#${idPropObsTimestamp}=IFCPROPERTYSINGLEVALUE('ObservationTimestamp',$,IFCTEXT('${escIfcString(eventStamp)}'),$);`);
    lines.push(`#${idPropExportTimestamp}=IFCPROPERTYSINGLEVALUE('ExportTimestamp',$,IFCTEXT('${escIfcString(stamp)}'),$);`);
    lines.push(`#${idPropRiskType}=IFCPROPERTYSINGLEVALUE('RiskType',$,IFCLABEL('${escIfcString(riskType)}'),$);`);
    lines.push(`#${idPropRiskLevel}=IFCPROPERTYSINGLEVALUE('RiskLevel',$,IFCLABEL('${escIfcString(riskLevel)}'),$);`);
    lines.push(`#${idPropStation}=IFCPROPERTYSINGLEVALUE('Station',$,IFCLENGTHMEASURE(${station}),$);`);
    lines.push(`#${idPropXRaw}=IFCPROPERTYSINGLEVALUE('XRaw',$,IFCREAL(${xRaw}),$);`);
    lines.push(`#${idPropLocalX}=IFCPROPERTYSINGLEVALUE('LocalX',$,IFCLENGTHMEASURE(${localX}),$);`);
    lines.push(`#${idPropLocalY}=IFCPROPERTYSINGLEVALUE('LocalY',$,IFCLENGTHMEASURE(${localY}),$);`);
    lines.push(`#${idPropLocalZ}=IFCPROPERTYSINGLEVALUE('LocalZ',$,IFCLENGTHMEASURE(${localZ}),$);`);
    lines.push(`#${idPropWorldX}=IFCPROPERTYSINGLEVALUE('WorldX',$,IFCLENGTHMEASURE(${worldX}),$);`);
    lines.push(`#${idPropWorldY}=IFCPROPERTYSINGLEVALUE('WorldY',$,IFCLENGTHMEASURE(${worldY}),$);`);
    lines.push(`#${idPropWorldZ}=IFCPROPERTYSINGLEVALUE('WorldZ',$,IFCLENGTHMEASURE(${worldZ}),$);`);
    lines.push(`#${idPropFloorOffset}=IFCPROPERTYSINGLEVALUE('FloorOffset',$,IFCLENGTHMEASURE(${floorOffset}),$);`);
    lines.push(`#${idPropAnfangOffset}=IFCPROPERTYSINGLEVALUE('AnfangOffset',$,IFCLENGTHMEASURE(${anfangOffset}),$);`);
    lines.push(`#${idPropGeometry}=IFCPROPERTYSINGLEVALUE('GeometryType',$,IFCLABEL('Cube 0.5m'),$);`);
    lines.push(`#${idPset}=IFCPROPERTYSET('${gidPsetAction}',$,'Pset_ActionRequest',$,(#${idPropSourceName},#${idPropSourceIfc},#${idPropSourceDesc},#${idPropStatus},#${idPropEventId},#${idPropEventName},#${idPropSessionId},#${idPropObsTimestamp},#${idPropExportTimestamp},#${idPropRiskType},#${idPropRiskLevel},#${idPropStation},#${idPropXRaw},#${idPropLocalX},#${idPropLocalY},#${idPropLocalZ},#${idPropWorldX},#${idPropWorldY},#${idPropWorldZ},#${idPropFloorOffset},#${idPropAnfangOffset},#${idPropGeometry}));`);
    lines.push(`#${idRelDefines}=IFCRELDEFINESBYPROPERTIES('${gidRelAction}',$,$,$,(#${idAction}),#${idPset});`);
    lines.push(`#${idRelAssign}=IFCRELASSIGNSTOCONTROL('${gidRelAssign}',$,$,$,(#${idAnnotation}),#${idAction});`);
  }

  lines.push("ENDSEC;");
  lines.push("END-ISO-10303-21;");

  return lines.join("\n");
}

function buildIfcEventApiPlugin() {
  return {
    name: "ifc-event-db-api",
    configureServer(server) {
      server.middlewares.use("/api/ifc-expert", (req, res, next) => {
        res.setHeader("Content-Type", "application/json");

        if (req.method === "GET" && (req.url === "/" || req.url === "")) {
          res.statusCode = 200;
          res.end(JSON.stringify(ifcExpert.health()));
          return;
        }

        if (req.method === "POST" && req.url?.startsWith("/reindex")) {
          ifcExpert.reindex().then((result) => {
            res.statusCode = 200;
            res.end(JSON.stringify(result));
          }).catch((error) => {
            res.statusCode = 500;
            res.end(JSON.stringify({ ok: false, error: String(error?.message || error) }));
          });
          return;
        }

        if (req.method === "POST" && req.url?.startsWith("/ask")) {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });

          req.on("end", () => {
            let payload;
            try {
              payload = JSON.parse(body || "{}");
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ ok: false, error: "Invalid JSON" }));
              return;
            }

            ifcExpert.ask(payload.question).then((result) => {
              res.statusCode = result.ok ? 200 : 400;
              res.end(JSON.stringify(result));
            }).catch((error) => {
              res.statusCode = 500;
              res.end(JSON.stringify({ ok: false, error: String(error?.message || error) }));
            });
          });
          return;
        }

        next();
      });

      server.middlewares.use("/api/ifc-events", (req, res, next) => {
        res.setHeader("Content-Type", "application/json");

        if (req.method === "POST" && req.url?.startsWith("/export-current")) {
          const db = readIfcEventsDb();
          const requestUrl = new URL(req.url, "http://localhost");
          const requestedSessionId = requestUrl.searchParams.get("sessionId");
          const exportEvents = db.events.filter((eventRecord) => {
            const sameSession = requestedSessionId
              ? eventRecord?.data?.sessionId === requestedSessionId
              : true;
            return sameSession
              && eventRecord?.ifcClass === "IfcActionRequest"
              && eventRecord?.data
              && eventRecord?.data?.worldXYZ;
          });

          if (!exportEvents.length) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "No IfcEvent available to export" }));
            return;
          }

          if (!fs.existsSync(ifcExportDir)) {
            fs.mkdirSync(ifcExportDir, { recursive: true });
          }

          const fileName = "export.ifc";
          const outPath = path.join(ifcExportDir, fileName);
          const content = buildIfcEventsSpf(exportEvents, "alignment.ifc");
          const latestEvent = exportEvents[exportEvents.length - 1];
          fs.writeFileSync(outPath, `${content}\n`, "utf8");

          res.statusCode = 201;
          res.end(JSON.stringify({
            ok: true,
            fileName,
            filePath: outPath,
            eventId: latestEvent.id,
            eventCount: exportEvents.length,
            content
          }));
          return;
        }

        if (req.method === "GET") {
          const db = readIfcEventsDb();
          res.statusCode = 200;
          res.end(JSON.stringify(db));
          return;
        }

        if (req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });

          req.on("end", () => {
            let payload;
            try {
              payload = JSON.parse(body || "{}");
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: "Invalid JSON" }));
              return;
            }

            const db = readIfcEventsDb();
            const eventRecord = {
              id: payload.id || `evt-${Date.now()}`,
              ifcClass: payload.ifcClass || "IfcEvent",
              name: payload.name || "Tunnel marker",
              timestamp: payload.timestamp || new Date().toISOString(),
              data: payload.data || {}
            };

            db.events.push(eventRecord);
            writeIfcEventsDb(db);

            res.statusCode = 201;
            res.end(JSON.stringify({ ok: true, event: eventRecord, count: db.events.length }));
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig({
  base: "./",
  build: {
    outDir: "docs"
  },
  plugins: [buildIfcEventApiPlugin()],
  resolve: {
    alias: {
      "three/examples/jsm/utils/BufferGeometryUtils": path.resolve(dirname, "src/three-buffer-utils-shim.js"),
      "three/examples/jsm/utils/BufferGeometryUtils.js": path.resolve(dirname, "src/three-buffer-utils-shim.js")
    }
  }
});
