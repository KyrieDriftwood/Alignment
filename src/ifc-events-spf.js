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

export function buildIfcEventsSpf(eventRecords, sourceIfcName) {
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