# Changelog

## v2.3.0 — 2026-03-19

**The Honesty Layer** — Panel Meeting #14: first real adoption test surfaced 3 critical issues (sycophantic validation, mode confusion, domain expertise gap). 14 proposals, all approved.

### New Skill
- `/flow-expert` — Domain Expert Agent Blueprint: helps teams build adversarial domain validators for research claims

### New Infrastructure
- **Cycle State File** (`.flow/active-cycle.json`) — persistent state between skill invocations: mode, phase, next step, completed steps, kill condition
- **Transition Markers** — every skill outputs a visual `───── FLOW ─────` block on completion showing cycle state and next step
- **Maturity Model** (L1/L2/L3) — enforcement intensity scales down as teams demonstrate adoption maturity
  - L1 (Guided): blocking checks, explicit prompts — default for new teams
  - L2 (Trusted): non-blocking reminders, dismissable
  - L3 (Silent): telemetry-only, dashboard visibility
- **Pause/Resume** — `/flow-status pause` silences reminders, auto-reminds after 24h

### Anti-Sycophancy (all evaluative skills)
- Evaluation Behavioral Rules added to: `/flow-gate`, `/flow-kill`, `/flow-experiment`, `/flow-review`, `/flow-spec`, `/flow-brief`
- No affirmative openers, challenge-first, earn praise, tone calibration by context type
- Structured Gate Interrogation: 3 required questions per gate (D1-O5) with evidence ratings
- Kill Condition Enforcement: triggered = KILL by default, burden of proof on user to override

### Research Honesty (discovery skills)
- **Confidence Markers**: `[verified]` / `[likely]` / `[VERIFY]` on all research claims
- **Provenance Trail**: source type (training data / web / user / inference) for every claim
- **"What Could Be Wrong?"**: mandatory self-critique section on all research output
- **Expert Review Gate**: optional gate between research and decision (configurable: optional/required/skip)

### Updated
- `/flow-init` — 8 ambient rules (added Cycle Continuity), extended hook with cycle awareness + maturity
- `/flow` router — added pause/resume and domain expert routing
- All 16 non-router skills — transition marker output format
- Hook script — combined telemetry + cycle awareness, maturity-level-dependent output

### Architecture
- `.flow/active-cycle.json` — local session state (not committed to git)
- `.flow/agents/` — domain expert agents (committed, shared with team)
- `maturity.level` in `.flow/config.yaml` — L1/L2/L3 enforcement control
- `expert_review_gate` in `.flow/config.yaml` — optional/required/skip

---

## v2.2.0 — 2026-03-19

**Project Bootstrap** — New `/flow-init` skill and first-time detection in `/flow` router.

### New Skill
- `/flow-init` — Bootstraps FLOW in any project: creates `.flow/` directory (config, cycles, experiments, archive, decisions), adds 7 ambient rules to CLAUDE.md, runs quick Tempo calibration

### Updated
- `/flow` router — Detects first-time use (no `.flow/` directory) and auto-routes to `/flow-init`. Reads `.flow/config.yaml` for team context in all routing decisions.

### Architecture
- Per-project state lives in `.flow/` (committed to git, shared with team)
- Global skills stay in `~/.claude/plugins/` (installed once per machine)
- Dev repo symlinked to cache for instant feedback

---

## v2.1.0 — 2026-03-19

**The Agentic Speed Update** — Panel Meeting #13: real team feedback that FLOW's time assumptions don't match agentic reality.

### New Concepts
- Tempo, Micro-SPEC, Cycle Phases, FLOW Configuration, Observation Floor, FLOW Invariants/Variables, Bottleneck-based WIP

### New Skills (2)
- `/flow-tempo` — Discover your team's rhythm
- `/flow-config` — Generate FLOW operating agreement

### Updated Skills (14 of 14)
All skills updated with Tempo-relative language, Micro-SPEC support, Observation Floor, Comprehension Review, bottleneck-aware WIP

### 7 Agentic Anti-Patterns
Premature Confidence, Experiment Overload, Judgment Fatigue, Context Collapse, Dependency Whiplash, Maintenance Debt, Speed Inequality

## v2.0.0 — 2026-03-19

Complete redesign of the FLOW skills ecosystem.

- **Decision-centric identity**: FLOW optimizes for three decisions (what to learn, what to build, what to stop) — not delivery velocity
- **14 skills** consolidated from 20: merged overlapping skills, unified gates, added intelligent router (`/flow`)
- **Panel-reviewed documentation**: 23 chapters validated by 11 product managers across fintech, gaming, healthtech, solo startups, e-commerce, insurance, edtech, climate tech, dev tools, agencies, and government
- **Three-layer architecture**: CLAUDE.md ambient layer (6 rules, always active) + Skills (14 invoked tools) + Memory (persistent state)
- **CLAUDE.md ambient layer**: 6 rules that run passively — mode awareness, kill conditions, spine trace, WIP limits, gate enforcement, learning capture
- **Context-adaptive**: every skill adapts to team size (solo, small, enterprise), domain (agency, hardware, government), and FLOW experience level
- **Skill chaining**: skills chain naturally through the FLOW lifecycle — intake to brief to experiment to gate to kill to archive

### Skills (v2.0)

| Command | Replaces (v1.0) |
|---------|-----------------|
| `/flow` | New — intelligent router |
| `/flow-intake` | `/flow-intake` |
| `/flow-brief` | `/flow-discovery-brief` |
| `/flow-experiment` | `/flow-experiment-design` + `/flow-experiment-log` |
| `/flow-spec` | `/flow-spec-lite` |
| `/flow-contract` | `/flow-build-contract` |
| `/flow-gate` | `/flow-gate-discovery` + `/flow-gate-outcome` + `/flow-spine-check` |
| `/flow-status` | `/flow-cycle-status` |
| `/flow-kill` | `/flow-kill-merge-agenda` + `/flow-kill-merge-notes` |
| `/flow-archive` | `/flow-learning-archive` |
| `/flow-wip` | `/flow-wip-check` |
| `/flow-coach` | `/flow-coach` |
| `/flow-health` | `/flow-health-report` |
| `/flow-review` | `/flow-discovery-review` + `/flow-outcome-review` |

### Removed Skills

- `/flow-glossary` — replaced by `docs/22-glossary.md` (reference doc, not interactive skill)
- `/flow-production-readiness` — folded into `/flow-gate` (O4/O5 gates)

## v1.0.0 — 2026-03-01

Initial release. 20 skills covering the full FLOW lifecycle: intake, discovery, outcome, experiments, gates, weekly rituals, and coaching.
