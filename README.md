# FLOW — Decision-Centric Product Development

> **Decide what to bet on. Run small cycles. Kill what's not working. Keep what you learn.**

`v3.0.3` &middot; `14 docs` &middot; `5 skills` &middot; `20 panel meetings`

---

## What's New in v3.0.3 — Role-Aware Intake

Panel Meeting #20: real team feedback (Shawwa asked if /flow-start personalizes per role). 4 approve, 1 defer.

- **Role-aware follow-up questions** — `/flow-start` adds 1 role-specific question after core intake (Developer, PM, Designer, QA).
- **Role caching** — asks once, stores in `.flow/config.yaml`. Skippable for multi-hat people.
- **Discovery roles**: technical spikes (Dev), feedback targets (PM), fidelity level (Designer), experiment validity (QA).
- **Outcome roles**: technical risk (Dev), metric ownership (PM), design reuse (Designer), acceptance criteria (QA).

## What's New in v3.0.2 — First Real Adoption

Panel Meeting #19: first real-team feedback (12-person team, 48 hours of use). 6 patches:

- **Kill condition validation** — must have metric + threshold + deadline. G1 blocks otherwise.
- **Practical mode questions** — "Do you have evidence users need this?" replaces theoretical classification.
- **Learning enforcement** — `/flow-close` requires a Learning Entry before archival.
- **Coach knowledge boundary** — only answers from FLOW docs. Says "I don't know" when outside scope.
- **v2 upgrade guide** — `/flow` auto-detects v2 artifacts and offers batch migration.
- **Role one-pagers** — "FLOW for Developers/PMs/Designers/QA" added to Chapter 8.

---

## What's New in v3.0.0 — The Great Simplification

Panel Meeting #18: 3 rounds, 33 agent invocations, 11 panelists, 0 blocks. FLOW was becoming the bloated framework it warned against. The panel rebuilt it from primitives.

| | v2 | v3 | Reduction |
|--|----|----|-----------|
| Gates | 8 (D1-D3, O1-O5) | **3** (Commit, Pulse, Resolve) | 63% |
| Artifacts | 8 standalone docs | **3** (Cycle Brief, Kill/Merge Record, Learning Entry) | 63% |
| Concepts | 21+ named | **7** (4 primitives + 3 config) | 67% |
| Anti-patterns | 21 | **7** named + 14 inlined | 67% |
| Skills | 19 commands | **5** | 74% |
| Doc lines | 5,235 | **1,526** | 71% |
| Glossary | 50+ terms | **~15** | 70% |

---

## What is FLOW?

FLOW optimizes for **decisions**, not velocity. Every concept exists to answer three questions:

1. **What should we learn?** — Before building, what do we need to understand?
2. **What should we build?** — Given evidence, what's worth investing in?
3. **What should we stop?** — What's failing and needs to die?

### Two Modes

| Mode | Risk | Goal | Output |
|------|------|------|--------|
| **Discovery** | Building the wrong thing | Learning | Evidence |
| **Outcome** | Failing to ship the right thing | Shipping | Working product + metric |

### Three Gates

| Gate | When | Purpose |
|------|------|---------|
| **G1 Commit** | Before cycle starts | Is the bet sound? Kill condition set? (Blocking) |
| **G2 Pulse** | Mid-cycle | Kill condition triggered? Evidence accumulating? |
| **G3 Resolve** | Cycle end | Kill, Merge, or Continue? Evidence-driven. |

### Three Artifacts

| Artifact | What it is |
|----------|-----------|
| **Cycle Brief** | Living doc per cycle: bet + plan + evidence |
| **Kill/Merge Record** | Decision + reasoning at G3 |
| **Learning Entry** | What we learned. Outlives the cycle. |

### The Decision Spine

```
Vision -> Strategy -> Bet -> Cycle
```

Every cycle traces upward. No trace = no entry.

---

## 5 Skills

| Command | Purpose |
|---------|---------|
| `/flow` | Context-aware entry point. Status, routing, auto-init. |
| `/flow-start` | Begin work. 3-5 questions -> Cycle Brief. |
| `/flow-check` | Evaluate. G2 Pulse, G3 Resolve, reconciliation. |
| `/flow-close` | End work. Kill/merge, learning capture. |
| `/flow-coach` | Thinking partner. 1-1-1 rule: 1 observation, 1 suggestion, 1 question. |

---

## Quick Start

1. Type `/flow` in any project. First time? It auto-initializes.
2. `/flow-start` to begin a cycle. Answer 3-5 questions. Get a Cycle Brief.
3. Do the work. `/flow-check` for a mid-cycle pulse.
4. `/flow-close` when done. Kill, merge, or continue. Capture the learning.

---

## 7 Ambient Rules

Add to your project's `CLAUDE.md`:

1. **Mode Awareness** — Discovery or Outcome? Ask before starting.
2. **Kill Conditions** — Every Cycle Brief has one. Specific, measurable, timebound. Default is kill.
3. **Spine Trace** — Every cycle traces to Vision -> Strategy -> Bet -> Cycle.
4. **WIP Limits** — At capacity? "What are you willing to stop?"
5. **Gate Enforcement** — G1 Commit, G2 Pulse, G3 Resolve. Never skip.
6. **Learning Capture** — Every completed cycle produces a Learning Entry.
7. **Tempo Awareness** — Cycle length matches your context. Never assume a default.

---

## Documentation

14 files in `docs/`:

### Core (8 chapters — the complete operating manual)

| # | Chapter | Content |
|---|---------|---------|
| 1 | Why FLOW Exists | Thesis, primitives, gates, artifacts, config |
| 2 | The Decision Spine | Vision -> Strategy -> Bet -> Cycle |
| 3 | Discovery Mode | End-to-end: brief -> experiment -> evidence -> decide |
| 4 | Outcome Mode | End-to-end: spec -> build -> observe -> decide |
| 5 | Kill Discipline | Kill conditions, 30-min inspection, honesty layer |
| 6 | Tempo & WIP | Cycle length, WIP limits, configuration |
| 7 | Roles & Rituals | 4 roles, rituals, **STOP HERE IF YOU WANT** |
| 8 | Getting Started | First cycle, translation cards from Scrum/Shape Up/SAFe |

### Advanced Appendix (6 — optional deep-dives)

| | Appendix | Content |
|--|----------|---------|
| A | Agentic Era | Agent roles, observation floor, comprehension review |
| B | Adaptation | Solo, Agency, Hardware, Enterprise, Government |
| C | Anti-Patterns | 7 named patterns with full context |
| D | Templates | Cycle Brief, Kill/Merge Record, Learning Entry, Config |
| E | Glossary | ~15 terms |
| F | Facilitation | Gate facilitation, portfolio review, 1-1-1 coaching |

---

## The Review Panel

11 product managers across fintech, gaming, healthtech, solo startups, e-commerce, insurance, edtech, climate tech, developer tools, agencies, and government. 19 meetings. Meeting #18 produced v3.0 — The Great Simplification. Meeting #19 addressed first real-team adoption feedback — Cycle Brief validation, coach knowledge boundaries, v2 upgrade guide, and role one-pagers.

---

## Installation

### First time
```
/plugin marketplace add onestudio-co/flow-skills
/plugin install flow@flow-skills
```

### Update to latest
```
/plugin marketplace update flow-skills
/plugin update flow@flow-skills
```

### For your team (auto-install)
Add to your project's `.claude/settings.json`:
```json
{
  "extraKnownMarketplaces": {
    "flow-skills": {
      "source": {
        "source": "github",
        "repo": "onestudio-co/flow-skills"
      }
    }
  },
  "enabledPlugins": {
    "flow@flow-skills": true
  }
}
```
Team members get FLOW automatically when they trust the project folder.

---

## Repository Structure

```
flow-skills/
├── README.md
├── CLAUDE.md                    # 7 ambient rules
├── CHANGELOG.md
├── docs/                        # 14 files (8 core + 6 appendix)
│   ├── 01-why-flow.md
│   ├── 02-spine.md
│   ├── 03-discovery.md
│   ├── 04-outcome.md
│   ├── 05-kill.md
│   ├── 06-tempo-wip.md
│   ├── 07-roles-rituals.md
│   ├── 08-getting-started.md
│   ├── appendix-a-agentic.md
│   ├── appendix-b-adaptation.md
│   ├── appendix-c-anti-patterns.md
│   ├── appendix-d-templates.md
│   ├── appendix-e-glossary.md
│   └── appendix-f-facilitation.md
├── skills/
│   ├── flow/SKILL.md            # Entry point + router
│   ├── flow-start/SKILL.md      # Begin work
│   ├── flow-check/SKILL.md      # Evaluate progress
│   ├── flow-close/SKILL.md      # End work
│   └── flow-coach/SKILL.md      # Thinking partner
└── .claude-plugin/
    ├── plugin.json
    └── marketplace.json
```

---

## License

MIT

---

*Built by [One Studio](https://one-studio.co) — Fastest Value Delivery.*
