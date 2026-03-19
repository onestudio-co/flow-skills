# Changelog

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
