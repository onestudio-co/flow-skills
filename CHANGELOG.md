# Changelog

## v3.0.0 — 2026-03-23

**The Great Simplification** — Panel Meeting #18: 3 rounds, 33 agent invocations, 11 panelists, 0 blocks. Radical redesign driven by consensus that FLOW had become the bloated framework it was designed to replace.

### Breaking Changes

Everything. This is a complete rewrite.

| Dimension | v2 | v3 | Reduction |
|-----------|----|----|-----------|
| Gates | 8 (D1-D3, O1-O5) | 3 (G1 Commit, G2 Pulse, G3 Resolve) | 63% |
| Artifacts | 8 standalone docs | 3 (Cycle Brief, Kill/Merge Record, Learning Entry) | 63% |
| Core concepts | 21+ named | 7 (4 primitives + 3 config dimensions) | 67% |
| Anti-patterns | 21 named | 7 named + 14 inlined | 67% |
| Glossary | 50+ terms | ~15 | 70% |
| Documentation | 23 chapters + 5 guides | 8 core + 6 appendix | 50% |
| Skills | 19 commands | 5 | 74% |
| Doc lines | 5,235 | 1,526 | 71% |

### New Skills (5 total)

- `/flow` — Context-aware entry point. Shows status, suggests actions, auto-initializes new projects
- `/flow-start` — Begin new work. Conversational cycle creation: 3-5 questions -> Cycle Brief
- `/flow-check` — Evaluate progress. G2 Pulse, G3 Resolve, reconciliation
- `/flow-close` — End work. Kill/merge decision, learning capture, archive
- `/flow-coach` — Thinking partner. 1-1-1 rule: 1 observation, 1 suggestion, 1 question

### Removed Skills (17)

flow-archive, flow-brief, flow-config, flow-contract, flow-experiment, flow-expert, flow-gate, flow-health, flow-init, flow-intake, flow-kill, flow-reconcile, flow-review, flow-spec, flow-status, flow-tempo, flow-wip

All functionality absorbed into the 5 new skills.

### New Core Model

**4 Primitives**: Cycle, Decision, Learning, Two Modes (Discovery/Outcome)
**3 Config Dimensions**: Tempo (cycle length), Scale (team size), Rigor (ceremony level)
**3 Gates**: G1 Commit (blocking entry), G2 Pulse (mid-cycle check), G3 Resolve (kill/merge decision)
**3 Artifacts**: Cycle Brief (living doc), Kill/Merge Record, Learning Entry

### New Documentation (14 files, 1,526 lines)

Core (8): Why FLOW, Spine, Discovery, Outcome, Kill Discipline, Tempo & WIP, Roles & Rituals, Getting Started
Appendix (6): Agentic Era, Adaptation Guide, Anti-Patterns, Templates, Glossary, Facilitation

### Absorbed Proposals (from M16 + M17)

- Translation Card -> Chapter 8 Getting Started (framework comparison tables)
- Spike Tier -> Short Discovery cycles (no special concept needed)
- Capability Trigger -> Sidebar recipe in Chapter 3 Discovery

### Dropped Proposals

- Stride Rename (cycle is sufficient)
- Multi-Context Mode (teams solve locally)
- Agent Escalation Protocol (premature)
- Conviction Decay Metrics (anti-pattern naming is enough)
- Domain Gate Templates (folded into Appendix B)

---

## v2.5.0 — 2026-03-21

**Validation Debt** — Panel Meeting #15. `/flow-reconcile` skill, three-bucket classification.

---

## v2.4.0 — 2026-03-21

**Plugin Architecture Compliance** — Restructured to match Claude Code plugin spec.
