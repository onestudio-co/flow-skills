# FLOW — The Methodology for the Agentic Era

**Decision-centric product development. 18 AI-native skills. Panel-reviewed documentation.**

`v2.3` &middot; `23 chapters` &middot; `18 skills` &middot; `14 panel meetings`

---

## What's New in v2.3.0

**The Honesty Layer** — anti-sycophancy rules, cycle persistence, and maturity model.

- **Anti-sycophancy evaluation rules** across all evaluative skills
- **Cycle state persistence** (`active-cycle.json`) for methodology continuity
- **Maturity Model** (L1 Guided → L2 Trusted → L3 Silent)
- **Confidence markers**, research provenance, mandatory self-critique
- **Kill condition enforcement** (triggered = KILL by default)
- **Structured gate interrogation** (3 questions per gate)
- **Domain Expert Agent** blueprint (`/flow-expert`)
- **Transition markers** on every skill output
- **Pause/resume** for active cycles
- **8th ambient rule**: Cycle Continuity

---

## What is FLOW?

FLOW is a **decision-centric methodology** — not an AI-centric one. Every concept, artifact, gate, and ritual exists to optimize for three decisions:

1. **What should we learn?** — Before building, what do we need to understand?
2. **What should we build?** — Given evidence, what's worth investing in?
3. **What should we stop?** — Given the evidence, what's failing and needs to die?

### Two Modes

| Mode | Primary Risk | Goal | Output |
|------|-------------|------|--------|
| **Discovery** | Building the wrong thing | Learning | Evidence |
| **Outcome** | Failing to ship the right thing | Shipping | Working product measured by a target metric |

The mode you're in determines the process you follow. Discovery has its own artifacts (Discovery Brief), gates (D1-D3), and rituals. Outcome has different artifacts (SPEC-Lite, Build Contract), gates (O1-O5), and rituals. You don't pick one process for everything — the work tells you which mode to use.

### The Decision Spine

Every piece of work traces through four levels:

```
Vision → Strategy → Bet → Cycle
```

"Bet" is intentional — it signals intellectual honesty about uncertainty. If the work can't trace to a bet under a strategy, it doesn't enter the system. This is FLOW's admission control.

### Works Without AI

FLOW works without AI agents. The three decision capabilities — Discovery, Outcome, and Kill — are human activities grounded in evidence and judgment. AI agents (like these skills) make FLOW dramatically faster: automated intake classification, gate checks, experiment design, status snapshots. But they're accelerators, not requirements.

---

## Three-Layer Architecture

FLOW operates through three layers:

### Layer 1: CLAUDE.md (Ambient)

Eight rules added to your project's `CLAUDE.md`. Always active. No invocation needed. They ensure every interaction respects FLOW's decision-centric principles — mode awareness, kill conditions, spine tracing, WIP limits, gate enforcement, learning capture, tempo awareness, and cycle continuity.

See [CLAUDE.md Integration](#claudemd-integration) below.

### Layer 2: Skills (Invoked)

18 interactive skills, each handling a specific FLOW activity. Invoked explicitly via `/flow-*` commands. They guide you through structured workflows — asking questions, producing artifacts, chaining to next steps.

See [Skills Reference](#skills-reference) below.

### Layer 3: Memory (Persistent)

State files that persist across sessions: active cycles (including `active-cycle.json` for cycle state persistence), experiment logs, archived learnings, adoption metrics, and domain expert agents. Skills read and write to memory. The ambient layer references it. This is how FLOW maintains continuity.

---

## Quick Start

**Day 0**: Run `/flow-init` to bootstrap FLOW in your project — creates `.flow/`, adds ambient rules, calibrates tempo.

**Day 1**: Type `/flow` — the intelligent router detects your intent and guides you to the right skill. New to FLOW? It walks you through the three decision capabilities. Have work to classify? It routes you to `/flow-intake`.

**Day 7**: You're using `/flow-brief` and `/flow-spec` directly. You know the difference between Discovery and Outcome mode. Kill conditions feel natural.

**Day 30**: FLOW habits are ambient — you don't even invoke skills for basic mode checks. The CLAUDE.md rules catch mode confusion, missing kill conditions, and spine violations automatically. Skills are for structured activities, not reminders.

---

## Skills Reference

| Command | Purpose | Chains To | Who Uses It |
|---------|---------|-----------|-------------|
| `/flow` | Intelligent router — detects intent, routes to the right skill | Any skill | Everyone |
| `/flow-intake` | Classify and route incoming work (shaping, mode decision, spine trace, WIP check) | `/flow-brief` or `/flow-spec` | PM, Founder, Tech Lead |
| `/flow-brief` | Write a Discovery Brief — hypothesis, experiment design, kill condition | `/flow-experiment` | PM, Designer, Founder |
| `/flow-experiment` | Design the smallest, cheapest, fastest valid experiment | `/flow-gate` | PM, Designer, Researcher |
| `/flow-spec` | Write a SPEC-Lite — one-page plan with scope, target metric, kill condition, non-goals | `/flow-contract` | PM, Founder |
| `/flow-contract` | Create the Build Contract — product-engineering agreement on how to build, measure, and roll out | `/flow-gate` | PM + Engineering Lead |
| `/flow-gate` | Run quality checkpoints — D1-D3 (Discovery) and O1-O5 (Outcome) | Next artifact or `/flow-kill` | PM, Flow Coach |
| `/flow-status` | Active cycles dashboard — WIP counts, cycle ages, stale work, mode distribution | — | PM, Flow Coach, Leadership |
| `/flow-kill` | Evidence-based Kill/Merge/Continue decision with structured inspection | `/flow-archive` | PM, Team |
| `/flow-archive` | Capture what was learned from completed or killed cycles into institutional memory | — | PM, Flow Coach |
| `/flow-wip` | Enforce Work In Progress limits — check capacity before accepting new work | — | PM, Flow Coach |
| `/flow-coach` | Learn FLOW interactively — guided tour, deep dives, quizzes, diagnostics, comparisons | `/flow-intake` | New team members |
| `/flow-health` | Adoption health check — detect process theater, measure FLOW maturity | — | Flow Coach, Leadership |
| `/flow-review` | Facilitate Discovery Review and Outcome Review rituals | `/flow-kill` | PM, Flow Coach |
| `/flow-tempo` | Discover your team's build-observe-decide rhythm | — | PM, Team Lead |
| `/flow-config` | Generate your team's FLOW operating agreement | — | PM, Team Lead |
| `/flow-init` | Bootstrap FLOW in a new project — creates `.flow/`, ambient rules, telemetry | `/flow-intake` | New teams |
| `/flow-expert` | Build a Domain Expert agent for domain-specific research validation | — | PM, Domain Lead |

### Skill Chaining

Skills are designed to chain naturally through the FLOW lifecycle:

```
/flow-intake → /flow-brief → /flow-experiment → /flow-gate (D1-D3)
                                                       ↓
/flow-intake → /flow-spec → /flow-contract → /flow-gate (O1-O5) → /flow-kill → /flow-archive
```

The router (`/flow`) handles this automatically for newcomers. Experienced users invoke skills directly.

---

## CLAUDE.md Integration

Add these 8 rules to your project's `CLAUDE.md` to activate FLOW's ambient layer. These rules run passively on every interaction — no skill invocation needed.

```markdown
## FLOW Ambient Rules

1. **Mode Awareness**: Before starting any work, determine: is this Discovery (learning) or Outcome (shipping)? Never confuse the two. Discovery produces evidence. Outcome produces working product.

2. **Kill Conditions**: Every Discovery Brief and every SPEC-Lite MUST have a pre-committed kill condition — specific, measurable, timebound. If the condition is met, the default is kill. No sunk-cost negotiation.

3. **Spine Trace**: Every non-operational cycle must trace to the Decision Spine: Vision → Strategy → Bet → Cycle. If it doesn't trace, it doesn't enter the system.

4. **WIP Limits**: Check capacity before accepting new work. Solo: 1-2 cycles. Small team (3-8): 2-3. Medium (10-20): 4-5. Large (25+): 6-8. At capacity? "What are you willing to stop?"

5. **Gate Enforcement**: Never skip gates. D1 validates the Discovery Brief. D3 validates evidence for mode switch. O1 validates the bet. O5 is Kill/Merge. Gates are mechanical checklists, not meetings — they take 5 minutes if the work is solid.

6. **Learning Capture**: When a cycle completes (killed or merged), capture what was learned. Every kill is a success — it saved resources. Archive the learning so the team never re-runs the same failed experiment.

7. **Tempo Awareness**: FLOW is speed-agnostic. Cycle duration is determined by the team's Tempo — not a global default. When builds are fast (agentic tooling), the bottleneck shifts to observation and decision capacity. Never assume "2-4 weeks" — ask about the team's Tempo.

8. **Cycle Continuity**: Check for active FLOW cycles on every interaction. If a cycle is in progress, be aware of its phase and next step. Flag if the user is about to skip an expected step — advisory, not blocking, but logged.
```

These rules ensure FLOW principles are respected even when no skill is actively running.

---

## Reading Paths

### Solo Founder (team of 1-2)

**Start with**: `/flow-tempo` (discover your rhythm) then `/flow-coach` (guided tour) then `/flow-intake` with a real idea.

**Core skills**: `/flow-brief`, `/flow-experiment`, `/flow-kill`.

**Key chapters**: Ch 1-6, Ch 12 (WIP), Ch 19 (AI agents), Ch 22 (Solo adaptation guide).

**Skip**: `/flow-contract` (you hold both sides), `/flow-review` (ritual is a weekly self-check). Modes collapse — Discovery through building.

### Small Team (3-15 people)

**Start with**: `/flow-coach` for the team, then `/flow-intake` to classify your current backlog.

**Full skill set** — use everything. This is FLOW's sweet spot.

**Key chapters**: Ch 1-14 (Foundation through Operations), then Ch 20-21 (Anti-patterns, Glossary) as reference.

### Enterprise (30+ people)

**Start with**: Ch 1-4 (Foundation), Ch 15-18 (Regulated Environments, Roles, Migration, Org Change).

**Critical skills**: `/flow-intake` (multi-team routing), `/flow-gate` (governance integration), `/flow-health` (process theater detection), `/flow-wip` (per-team limits).

**Key chapters**: Ch 15 (Regulated Environments), Ch 16 (Roles & Topology), Ch 17 (Migration), Ch 22 (Enterprise adaptation guide).

### Agency / Client Work

**Start with**: Ch 22 (Agency adaptation guide) — your context is unique (split spine, paid Discovery, client gates).

**Critical skills**: `/flow-intake` (separate client vs. internal intake), `/flow-brief` (Discovery as paid deliverable), `/flow-spec` (SPEC-Lite as scope doc), `/flow-wip` (WIP across clients).

Read every agency sidebar in the documentation — your context is woven throughout.

---

## Documentation

The `docs/` directory contains 23 panel-reviewed chapters organized in 7 parts:

| Part | Chapters | What It Covers |
|------|----------|---------------|
| **I. Foundation** | Ch 1-3 | Why FLOW exists, mental model, Decision Spine |
| **II. How Work Enters** | Ch 4 | Intake, classification, shaping |
| **III. Discovery Mode** | Ch 5-7 | Discovery Brief, experiments, Discovery decisions & gates |
| **IV. Outcome Mode** | Ch 8-11 | SPEC-Lite, Build Contract, execution, Outcome decisions & gates |
| **V. Operations** | Ch 12-15 | WIP limits, rituals, production readiness, regulated environments |
| **VI. Adoption** | Ch 16-19 | Roles, migration, organizational change, AI agents |
| **VII. Reference** | Ch 20-22 | Anti-patterns catalog, glossary, adaptation guides |

Each chapter includes:
- Core concepts with concrete examples
- Context-specific sidebars (Solo, Agency, Hardware, Enterprise, Government)
- Cross-references to related chapters
- Panel review status

Additional reference files: `outline.md` (full table of contents), `faqs.md` (frequently asked questions).

---

## The Review Panel

Every decision in FLOW was debated by a panel of 11 product managers spanning fintech, gaming, healthtech, solo startups, e-commerce, insurance, edtech, climate tech, developer tools, agencies, and government.

| Panelist | Role | Domain |
|----------|------|--------|
| Sara Al-Rashidi | Senior Product Manager | Fintech / Banking |
| Priya Sharma | Head of Product | HealthTech / Hospital SaaS |
| Carlos Mendez | Solo Founder / PM / Engineer | AI Tools / Developer Productivity |
| Dmitri Volkov | Product Manager / Game Designer | Gaming / Interactive Entertainment |
| Fatima El-Amin | Product Director | E-commerce / Marketplace |
| James O'Connor | Program Manager | Insurance / Legacy Enterprise |
| Liam Chen | Staff Product Manager | Developer Tools / Platform |
| Omar Ibrahim | VP of Product | Government / GovTech |
| Rawan Haddad | Delivery Manager / Senior PM | Software Agency / Outsourcing |
| Amara Osei | Product Lead | Climate Tech / Hardware+Software |
| Yuki Tanaka | Product Manager | EdTech / Consumer Mobile |

The panel reviewed the outline, debated every chapter's content, and validated the complete documentation across 14 review meetings. Their diverse contexts ensured FLOW works across team sizes, domains, and organizational structures — not just in theory.

---

## Installation

```
/install onestudio-co/flow-skills
```

One install — all 18 skills, 23 chapters of documentation, and the CLAUDE.md ambient rules.

---

## Repository Structure

```
flow-skills/
├── README.md                          # This file
├── CLAUDE.md                          # 6 ambient rules (copy to your project)
├── CHANGELOG.md                       # Version history
├── docs/                              # 23 chapters + reference files
│   ├── outline.md                     # Full table of contents
│   ├── 01-why-flow.md                 # Part I: Foundation
│   ├── 02-mental-model.md
│   ├── 03-decision-spine.md
│   ├── 04-first-cycle.md             # Part II: How Work Enters
│   ├── 05-intake.md
│   ├── 06-discovery-brief.md         # Part III: Discovery Mode
│   ├── 07-experiments.md
│   ├── 08-discovery-decisions.md
│   ├── 09-spec-lite.md               # Part IV: Outcome Mode
│   ├── 10-build-contract.md
│   ├── 11-execution.md
│   ├── 12-outcome-decisions.md
│   ├── 13-wip-limits.md              # Part V: Operations
│   ├── 14-rituals.md
│   ├── 15-production-readiness.md
│   ├── 16-regulated-environments.md
│   ├── 17-roles.md                   # Part VI: Adoption
│   ├── 18-migration.md
│   ├── 19-organizational-change.md
│   ├── 20-ai-agents.md
│   ├── 21-anti-patterns.md           # Part VII: Reference
│   ├── 22-glossary.md
│   ├── 23-adaptation-guides.md
│   └── faqs.md
├── plugins/
│   └── flow/
│       ├── .claude-plugin/
│       │   └── plugin.json
│       └── skills/
│           ├── flow/SKILL.md          # Router
│           ├── flow-intake/SKILL.md
│           ├── flow-brief/SKILL.md
│           ├── flow-experiment/SKILL.md
│           ├── flow-spec/SKILL.md
│           ├── flow-contract/SKILL.md
│           ├── flow-gate/SKILL.md
│           ├── flow-status/SKILL.md
│           ├── flow-kill/SKILL.md
│           ├── flow-archive/SKILL.md
│           ├── flow-wip/SKILL.md
│           ├── flow-coach/SKILL.md
│           ├── flow-health/SKILL.md
│           ├── flow-review/SKILL.md
│           ├── flow-tempo/SKILL.md
│           ├── flow-config/SKILL.md
│           ├── flow-init/SKILL.md
│           └── flow-expert/SKILL.md
└── .claude-plugin/
    └── marketplace.json
```

---

## License

MIT

---

*Built by [One Studio](https://one-studio.co) — Fastest Value Delivery.*
