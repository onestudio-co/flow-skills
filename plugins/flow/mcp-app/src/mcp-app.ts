import { App } from "@modelcontextprotocol/ext-apps";

interface Cycle {
  id: string;
  name: string;
  mode: string;
  phase: string;
  status: string;
  bet: string;
  started: string;
  killCondition: string;
  health: string;
  daysRemaining: number;
}

interface DashboardData {
  cycles: Cycle[];
  summary: { total: number; active: number };
}

const appEl = document.getElementById("app")!;
const app = new App({ name: "FLOW Dashboard", version: "0.1.0" });

let expandedId: string | null = null;

function renderDashboard(data: DashboardData) {
  const activeCycles = data.cycles.filter((c) => c.status === "active");
  const pausedCycles = data.cycles.filter((c) => c.status !== "active");

  appEl.innerHTML = `
    <div class="header">
      <h1>FLOW Cycles</h1>
      <span class="badge">Live</span>
    </div>

    <div class="summary-bar">
      <div class="summary-card">
        <div class="label">Active</div>
        <div class="value">${activeCycles.length}</div>
      </div>
      <div class="summary-card">
        <div class="label">Discovery</div>
        <div class="value">${data.cycles.filter((c) => c.mode === "discovery").length}</div>
      </div>
      <div class="summary-card">
        <div class="label">Outcome</div>
        <div class="value">${data.cycles.filter((c) => c.mode === "outcome").length}</div>
      </div>
      <div class="summary-card">
        <div class="label">Paused</div>
        <div class="value">${pausedCycles.length}</div>
      </div>
    </div>

    <div class="cycles-grid">
      ${data.cycles.map((c) => renderCycleCard(c)).join("")}
    </div>

    <button class="refresh-btn" id="refresh-btn">↻ Refresh</button>
  `;

  // Attach click handlers
  data.cycles.forEach((c) => {
    const card = document.getElementById(`cycle-${c.id}`);
    card?.addEventListener("click", () => toggleExpand(c.id, data));
  });

  document.getElementById("refresh-btn")?.addEventListener("click", handleRefresh);
}

function renderCycleCard(cycle: Cycle): string {
  const isExpanded = expandedId === cycle.id;

  return `
    <div class="cycle-card ${isExpanded ? "expanded" : ""}" id="cycle-${cycle.id}">
      <div class="health-dot ${cycle.health}"></div>
      <div class="cycle-info">
        <h3>${cycle.name}</h3>
        <div class="cycle-meta">
          <span class="mode ${cycle.mode}">${cycle.mode}</span>
          <span>${cycle.phase}</span>
          <span>${cycle.id}</span>
        </div>
      </div>
      ${!isExpanded ? `<div class="cycle-days">${cycle.daysRemaining > 0 ? cycle.daysRemaining + "d left" : cycle.status}</div>` : ""}
      ${isExpanded ? renderDetail(cycle) : ""}
    </div>
  `;
}

function renderDetail(cycle: Cycle): string {
  return `
    <div class="detail-panel">
      <div class="detail-row">
        <span class="detail-label">Bet</span>
        <span class="detail-value">${cycle.bet}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Started</span>
        <span class="detail-value">${cycle.started}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Status</span>
        <span class="detail-value">${cycle.status}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Days Remaining</span>
        <span class="detail-value">${cycle.daysRemaining}</span>
      </div>
      ${cycle.killCondition !== "N/A (internal tooling)" && cycle.killCondition !== "N/A (employment)" ? `
        <div class="kill-condition">
          <strong>Kill Condition:</strong> ${cycle.killCondition}
        </div>
      ` : ""}
    </div>
  `;
}

function toggleExpand(id: string, data: DashboardData) {
  expandedId = expandedId === id ? null : id;
  renderDashboard(data);
}

let currentData: DashboardData | null = null;

async function handleRefresh() {
  const result = await app.callServerTool({
    name: "flow-dashboard",
    arguments: {},
  });
  const text = result.content?.find((c: { type: string }) => c.type === "text")?.text;
  if (text) {
    currentData = JSON.parse(text);
    renderDashboard(currentData!);
  }
}

// Connect and handle initial tool result
app.connect();

app.ontoolresult = (result) => {
  const text = result.content?.find((c: { type: string }) => c.type === "text")?.text;
  if (text) {
    try {
      const parsed = JSON.parse(text);
      // Dashboard data has cycles array, detail data has id field
      if (parsed.cycles) {
        currentData = parsed;
        renderDashboard(parsed);
      } else if (parsed.id) {
        // Single cycle detail — render as mini dashboard
        currentData = { cycles: [parsed], summary: { total: 1, active: parsed.status === "active" ? 1 : 0 } };
        renderDashboard(currentData);
      } else if (parsed.error) {
        appEl.innerHTML = `<div class="loading">${parsed.error}</div>`;
      }
    } catch {
      appEl.innerHTML = `<div class="loading">Error parsing data</div>`;
    }
  }
};
