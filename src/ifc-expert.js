const IFC_TUNNEL_SOURCES = [
  {
    id: "ifc4x3-tunnel-home",
    title: "IFC4.3 Tunnel - Landing",
    url: "https://ifc43-docs.standards.buildingsmart.org/schemas/domain/IfcTunnelDomain/content.html"
  },
  {
    id: "ifc4x3-ifcevent",
    title: "IfcEvent",
    url: "https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcEvent.htm"
  },
  {
    id: "ifc4x3-ifcpropertyset",
    title: "IfcPropertySet",
    url: "https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcPropertySet.htm"
  },
  {
    id: "ifc4x3-rel-defines-by-properties",
    title: "IfcRelDefinesByProperties",
    url: "https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcRelDefinesByProperties.htm"
  },
  {
    id: "ifc4x3-rel-associates-document",
    title: "IfcRelAssociatesDocument",
    url: "https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcRelAssociatesDocument.htm"
  },
  {
    id: "ifc4x3-document-reference",
    title: "IfcDocumentReference",
    url: "https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcDocumentReference.htm"
  }
];

const OFFLINE_FALLBACK_TEXT = {
  "ifc4x3-tunnel-home": `IFC4.3 Tunnel Domain overview. The tunnel domain extends IFC4.3 with entities and concepts for underground infrastructure. The documentation includes schema structure, examples, and domain-specific requirements tied to infrastructure alignment workflows.`,
  "ifc4x3-ifcevent": `IfcEvent is a control element in IFC used to represent an occurrence, milestone, or event in a process or lifecycle context. IfcEvent can be assigned to process structures and classified by predefined type.`,
  "ifc4x3-ifcpropertyset": `IfcPropertySet is a container of properties. Property set names may come from standardized sets where defined by specification, but project-specific property set names can also be used. Naming conventions should be agreed in project information requirements.`,
  "ifc4x3-rel-defines-by-properties": `IfcRelDefinesByProperties assigns one or more property sets or property definitions to objects. It is the standard relationship used to connect IfcPropertySet to target objects such as IfcEvent.`,
  "ifc4x3-rel-associates-document": `IfcRelAssociatesDocument associates IFC objects with external or referenced documents. This is the standard way to relate source documentation, references, or files to model objects.`,
  "ifc4x3-document-reference": `IfcDocumentReference is a reference to an external document or identification in a document system. Together with IfcRelAssociatesDocument it provides a structured link from IFC entities to external source files.`
};

const STOPWORDS = new Set([
  "the", "and", "for", "that", "with", "from", "this", "are", "was", "were", "into", "your", "you",
  "som", "att", "och", "det", "den", "med", "fran", "till", "har", "kan", "ska", "om", "en", "ett"
]);

function tokenize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9_\-\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 2 && !STOPWORDS.has(t));
}

function stripHtml(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function splitIntoChunks(text, chunkSize = 1300, overlap = 180) {
  const chunks = [];
  let i = 0;
  while (i < text.length) {
    const slice = text.slice(i, i + chunkSize).trim();
    if (slice.length > 60) chunks.push(slice);
    i += Math.max(1, chunkSize - overlap);
  }
  return chunks;
}

function scoreChunk(queryTokens, chunk) {
  const chunkTokens = tokenize(chunk.content);
  if (!chunkTokens.length || !queryTokens.length) return 0;

  const freq = new Map();
  for (const t of chunkTokens) {
    freq.set(t, (freq.get(t) || 0) + 1);
  }

  let score = 0;
  for (const q of queryTokens) {
    const tf = freq.get(q) || 0;
    if (!tf) continue;
    score += 1 + Math.log(1 + tf);
  }

  const lengthPenalty = 1 / Math.log(10 + chunk.content.length);
  return score * lengthPenalty;
}

function summarizeChunk(chunk, queryTokens) {
  const text = chunk.content;
  if (text.length <= 320) return text;
  const lower = text.toLowerCase();

  let bestPos = 0;
  let bestHits = -1;
  for (let i = 0; i < Math.min(2200, text.length - 200); i += 80) {
    const segment = lower.slice(i, i + 240);
    let hits = 0;
    for (const q of queryTokens) {
      if (segment.includes(q)) hits += 1;
    }
    if (hits > bestHits) {
      bestHits = hits;
      bestPos = i;
    }
  }

  const start = Math.max(0, bestPos - 40);
  const end = Math.min(text.length, start + 320);
  return text.slice(start, end).trim();
}

export function createIfcExpertEngine() {
  const state = {
    indexedAt: null,
    chunks: [],
    sourceCount: IFC_TUNNEL_SOURCES.length,
    failedSources: [],
    fallbackSources: []
  };

  async function fetchSource(source) {
    const response = await fetch(source.url, {
      headers: {
        "User-Agent": "AlignmentOffline-IFC-Expert"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const plain = stripHtml(html);
    const chunks = splitIntoChunks(plain).map((content, index) => ({
      id: `${source.id}-chunk-${index + 1}`,
      sourceId: source.id,
      sourceTitle: source.title,
      sourceUrl: source.url,
      content
    }));

    return {
      source,
      chunks,
      rawLength: plain.length
    };
  }

  async function reindex() {
    const allChunks = [];
    const failed = [];
    const fallback = [];

    for (const source of IFC_TUNNEL_SOURCES) {
      try {
        const fetched = await fetchSource(source);
        allChunks.push(...fetched.chunks);
      } catch (error) {
        const offlineText = OFFLINE_FALLBACK_TEXT[source.id];
        if (offlineText) {
          const chunks = splitIntoChunks(offlineText, 700, 80).map((content, index) => ({
            id: `${source.id}-fallback-${index + 1}`,
            sourceId: source.id,
            sourceTitle: source.title,
            sourceUrl: source.url,
            content
          }));
          allChunks.push(...chunks);
          fallback.push({ sourceId: source.id, url: source.url, reason: String(error?.message || error) });
        } else {
          failed.push({ sourceId: source.id, url: source.url, error: String(error?.message || error) });
        }
      }
    }

    state.chunks = allChunks;
    state.failedSources = failed;
    state.fallbackSources = fallback;
    state.indexedAt = new Date().toISOString();

    return {
      ok: true,
      indexedAt: state.indexedAt,
      sourceCount: IFC_TUNNEL_SOURCES.length,
      failedCount: failed.length,
      fallbackCount: fallback.length,
      chunkCount: allChunks.length,
      failedSources: failed,
      fallbackSources: fallback
    };
  }

  function health() {
    return {
      ok: true,
      indexedAt: state.indexedAt,
      chunkCount: state.chunks.length,
      sourceCount: state.sourceCount,
      failedSources: state.failedSources,
      fallbackSources: state.fallbackSources,
      sources: IFC_TUNNEL_SOURCES
    };
  }

  async function ask(question) {
    const q = String(question || "").trim();
    if (!q) {
      return {
        ok: false,
        error: "Question is required"
      };
    }

    if (!state.indexedAt || state.chunks.length === 0) {
      await reindex();
    }

    const queryTokens = tokenize(q);
    const ranked = state.chunks
      .map((chunk) => ({ chunk, score: scoreChunk(queryTokens, chunk) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    if (!ranked.length) {
      return {
        ok: true,
        answer: "Jag hittade ingen tydlig träff i de indexerade IFC4.3 Tunnel-källorna för frågan. Formulera om med entitetsnamn (t.ex. IfcEvent, IfcPropertySet).",
        citations: [],
        indexedAt: state.indexedAt
      };
    }

    const bullets = ranked.slice(0, 3).map((item, idx) => {
      const excerpt = summarizeChunk(item.chunk, queryTokens);
      return `${idx + 1}. ${item.chunk.sourceTitle}: ${excerpt}`;
    });

    const answer = [
      "Svar baserat på IFC4.3-källor:",
      ...bullets,
      "",
      "Obs: verifiera alltid i citerad källa vid modellbeslut."
    ].join("\n");

    const citations = ranked.slice(0, 3).map((item) => ({
      title: item.chunk.sourceTitle,
      url: item.chunk.sourceUrl,
      chunkId: item.chunk.id,
      score: Number(item.score.toFixed(4))
    }));

    return {
      ok: true,
      question: q,
      answer,
      citations,
      indexedAt: state.indexedAt
    };
  }

  return {
    reindex,
    ask,
    health,
    sources: IFC_TUNNEL_SOURCES
  };
}
