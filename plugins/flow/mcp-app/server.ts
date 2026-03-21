console.log("Starting FLOW MCP App server...");

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import {
  registerAppTool,
  registerAppResource,
  RESOURCE_MIME_TYPE,
} from "@modelcontextprotocol/ext-apps/server";
import cors from "cors";
import express from "express";
import fs from "node:fs/promises";
import path from "node:path";

const server = new McpServer({
  name: "FLOW Cycle Dashboard",
  version: "0.1.0",
});

// --- Mock FLOW data (in production, read from .flow/ directory) ---

const cycles = [
  {
    id: "D-2026-001",
    name: "RE Tokenization Research",
    mode: "discovery",
    phase: "D2 — Experiment",
    status: "active",
    bet: "Saudi RE market entry",
    started: "2026-03-10",
    killCondition: "No platform partner interest by Mar 25",
    health: "green",
    daysRemaining: 4,
  },
  {
    id: "O-2026-003",
    name: "HQ Web Dashboard",
    mode: "outcome",
    phase: "O3 — Build",
    status: "active",
    bet: "Agentic command center",
    started: "2026-03-15",
    killCondition: "N/A (internal tooling)",
    health: "green",
    daysRemaining: 2,
  },
  {
    id: "D-2026-004",
    name: "CEO AI Training Workshop",
    mode: "discovery",
    phase: "D1 — Brief",
    status: "active",
    bet: "Consulting funnel via free workshops",
    started: "2026-03-17",
    killCondition: "< 3 signups by Mar 28",
    health: "yellow",
    daysRemaining: 7,
  },
  {
    id: "O-2026-002",
    name: "Neo Later Onboarding",
    mode: "outcome",
    phase: "O4 — Observe",
    status: "paused",
    bet: "Neo Bank employment",
    started: "2026-03-01",
    killCondition: "N/A (employment)",
    health: "gray",
    daysRemaining: 0,
  },
];

// --- MCP App registration ---

const dashboardUri = "ui://flow-dashboard/mcp-app.html";
const detailUri = "ui://flow-cycle-detail/mcp-app.html";

// Tool 1: Show the FLOW dashboard
registerAppTool(
  server,
  "flow-dashboard",
  {
    title: "FLOW Dashboard",
    description:
      "Show an interactive FLOW cycle dashboard with active cycles, their modes, phases, and health signals.",
    inputSchema: {},
    _meta: { ui: { resourceUri: dashboardUri } },
  },
  async () => {
    const active = cycles.filter((c) => c.status === "active");
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({ cycles, summary: { total: cycles.length, active: active.length } }),
        },
      ],
    };
  },
);

// Tool 2: Get cycle detail
registerAppTool(
  server,
  "flow-cycle-detail",
  {
    title: "FLOW Cycle Detail",
    description: "Get detailed information about a specific FLOW cycle by ID.",
    inputSchema: {
      type: "object" as const,
      properties: {
        cycleId: { type: "string", description: "The cycle ID (e.g. D-2026-001)" },
      },
      required: ["cycleId"],
    },
    _meta: { ui: { resourceUri: detailUri } },
  },
  async (args: { cycleId: string }) => {
    const cycle = cycles.find((c) => c.id === args.cycleId);
    if (!cycle) {
      return { content: [{ type: "text", text: JSON.stringify({ error: "Cycle not found" }) }] };
    }
    return { content: [{ type: "text", text: JSON.stringify(cycle) }] };
  },
);

// Serve the bundled HTML for both tools (same UI, different data)
for (const uri of [dashboardUri, detailUri]) {
  registerAppResource(server, uri, uri, { mimeType: RESOURCE_MIME_TYPE }, async () => {
    const html = await fs.readFile(
      path.join(import.meta.dirname, "dist", "mcp-app.html"),
      "utf-8",
    );
    return { contents: [{ uri, mimeType: RESOURCE_MIME_TYPE, text: html }] };
  });
}

// --- Express HTTP transport ---

const app = express();
app.use(cors());
app.use(express.json());

app.post("/mcp", async (req, res) => {
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  res.on("close", () => transport.close());
  await server.connect(transport);
  await transport.handleRequest(req, res, req.body);
});

app.listen(3002, () => {
  console.log("FLOW MCP App server listening on http://localhost:3002/mcp");
});
