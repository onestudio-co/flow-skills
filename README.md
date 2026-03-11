# FLOW Skills for Claude Code

20 interactive skills that bring the FLOW methodology to life inside Claude Code. Each skill guides you through a specific FLOW activity — from intake to kill/merge decisions.

## Skills

| Skill | Command | Description |
|-------|---------|-------------|
| Coach | `/flow-coach` | Interactive onboarding — learn FLOW through explanations, quizzes, and diagnosis |
| Intake | `/flow-intake` | Classify and route incoming work into FLOW |
| Discovery Brief | `/flow-discovery-brief` | Create a Discovery Brief with hypothesis, experiment, and kill condition |
| SPEC-Lite | `/flow-spec-lite` | Create or validate a SPEC-Lite or Discovery Brief |
| Build Contract | `/flow-build-contract` | Create the product-engineering agreement before building |
| Experiment Design | `/flow-experiment-design` | Design the smallest, cheapest, fastest experiment |
| Experiment Log | `/flow-experiment-log` | Capture structured experiment results |
| Spine Check | `/flow-spine-check` | Validate that work maps through the Decision Spine |
| Gate: Discovery | `/flow-gate-discovery` | Run Discovery gates (D1, D2, D3) |
| Gate: Outcome | `/flow-gate-outcome` | Run Outcome gates (O1–O5) |
| Cycle Status | `/flow-cycle-status` | Quick status snapshot of any active cycle |
| Discovery Review | `/flow-discovery-review` | Generate the weekly Discovery Review agenda |
| Outcome Review | `/flow-outcome-review` | Generate the weekly Outcome Review |
| Kill/Merge Agenda | `/flow-kill-merge-agenda` | Prepare the weekly Kill/Merge meeting agenda |
| Kill/Merge Notes | `/flow-kill-merge-notes` | Capture Kill/Merge/Continue decisions |
| WIP Check | `/flow-wip-check` | Enforce Work In Progress limits |
| Production Readiness | `/flow-production-readiness` | Evaluate readiness to move from Exploration to Production |
| Health Report | `/flow-health-report` | Monthly governance review — detect process theater |
| Learning Archive | `/flow-learning-archive` | Archive completed cycles into institutional memory |
| Glossary | `/flow-glossary` | Canonical glossary of all FLOW terminology |

## Installation

Copy the skill folders into your Claude Code skills directory:

```bash
cp -r flow-* ~/.claude/skills/
```

## What is FLOW?

FLOW is a methodology for the agentic era. It has two operating modes:

- **Discovery** — when you don't know if you're solving the right problem (goal: learning)
- **Outcome** — when you know the problem and want measurable results (goal: moving a metric)

Start with `/flow-coach` to learn the methodology interactively.
