import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import fs from "node:fs/promises";
import path from "node:path";

// --- Read real FLOW data from .flow/ directory ---

interface Cycle {
  id: string;
  name: string;
  mode: "discovery" | "outcome";
  phase: string;
  status: "active" | "paused" | "completed" | "killed";
  bet: string;
  started: string;
  killCondition: string;
  health: "green" | "yellow" | "red" | "gray";
  daysRemaining: number;
}

async function loadCycles(): Promise<Cycle[]> {
  // Look for .flow/ in current working directory
  const flowDir = path.join(process.cwd(), ".flow");

  try {
    await fs.access(flowDir);
  } catch {
    return []; // No .flow/ directory — return empty
  }

  const cycles: Cycle[] = [];

  // Read active cycles from .flow/cycles/
  const cyclesDir = path.join(flowDir, "cycles");
  try {
    const files = await fs.readdir(cyclesDir);
    for (const file of files) {
      if (!file.endsWith(".json")) continue;
      try {
        const raw = await fs.readFile(path.join(cyclesDir, file), "utf-8");
        const data = JSON.parse(raw);
        cycles.push({
          id: data.id ?? file.replace(".json", ""),
          name: data.name ?? "Unnamed",
          mode: data.mode ?? "discovery",
          phase: data.phase ?? "Unknown",
          status: data.status ?? "active",
          bet: data.bet ?? "",
          started: data.started ?? "",
          killCondition: data.killCondition ?? data.kill_condition ?? "",
          health: data.health ?? "gray",
          daysRemaining: data.daysRemaining ?? data.days_remaining ?? 0,
        });
      } catch {
        // Skip malformed cycle files
      }
    }
  } catch {
    // No cycles directory
  }

  // Also check .flow/config.yaml for WIP limits (informational)
  return cycles;
}

// --- MCP Server ---

const server = new McpServer({
  name: "FLOW Cycle Dashboard",
  version: "0.2.0",
});

// Tool 1: List all FLOW cycles
server.tool(
  "flow-dashboard",
  "List all FLOW cycles with their modes, phases, health signals, and kill conditions. Returns structured data from the project's .flow/cycles/ directory.",
  {},
  async () => {
    const cycles = await loadCycles();
    const active = cycles.filter((c) => c.status === "active");

    if (cycles.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              cycles: [],
              summary: { total: 0, active: 0 },
              hint: "No cycles found. Run /flow-start to begin a new cycle, or ensure .flow/cycles/ contains cycle JSON files.",
            }),
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({
            cycles,
            summary: {
              total: cycles.length,
              active: active.length,
              discovery: cycles.filter((c) => c.mode === "discovery").length,
              outcome: cycles.filter((c) => c.mode === "outcome").length,
            },
          }),
        },
      ],
    };
  },
);

// Tool 2: Get cycle detail by ID
server.tool(
  "flow-cycle-detail",
  "Get detailed information about a specific FLOW cycle by ID.",
  {
    cycleId: { type: "string", description: "The cycle ID (e.g. D-2026-001)" },
  },
  async ({ cycleId }) => {
    const cycles = await loadCycles();
    const cycle = cycles.find((c) => c.id === cycleId);

    if (!cycle) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              error: "Cycle not found",
              available: cycles.map((c) => c.id),
            }),
          },
        ],
      };
    }

    return {
      content: [{ type: "text", text: JSON.stringify(cycle) }],
    };
  },
);

// --- Stdio transport (works with Claude Code plugin system) ---

const transport = new StdioServerTransport();
await server.connect(transport);
