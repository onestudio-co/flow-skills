# Appendix A: FLOW in the Agentic Era

> *Optional reading. For practitioners using AI agents as builders, analysts, or facilitators.*

---

## When Build Goes to Zero

A FLOW cycle has three phases: **Build -> Observe -> Decide.**

When AI agents compress Build toward zero — a working experiment in 45 minutes, a production feature in a day — the cycle equation simplifies:

**Cycle Duration = Observe + Decide**

This is the most important shift in product development in decades. The bottleneck moves from "can we build it?" to "should we build it?" and "did it work?" FLOW's primitives (Decision Spine, Kill Conditions, WIP Limits, Observe-before-Decide) become more important, not less. Without them, speed becomes chaos.

---

## Three Agent Roles

**Builder.** The agent writes code, creates artifacts, deploys. This collapses Build from weeks to hours. A solo developer becomes a team. A small team becomes a studio.

**Analyst.** The agent processes observation data, surfaces patterns, compiles evidence packages for G3 Resolve. It organizes — it does not interpret. The human reads the package and decides.

**Facilitator.** The agent runs G1 Commit checklists, tracks WIP, maintains Learning Entries, flags missing kill conditions. The "chief of staff" role.

Most teams start with Builder. Analyst and Facilitator mature as instrumentation improves.

---

## The Bottleneck Shift

When builds are fast, four new bottlenecks emerge:

1. **Decision throughput.** Can the team decide as fast as agents build? Pre-commit kill conditions at G1 so G3 decisions are fast.

2. **Observation infrastructure.** Can you measure as fast as you build? The Cycle Brief must include an observation plan.

3. **Coordination overhead.** Four agents shipping simultaneously will conflict. WIP Limits apply to agent-built work too.

4. **Learning absorption.** Can the team process learnings from five experiments per week? G3 Resolve and Learning Entries are non-negotiable.

---

## The Observation Floor

The minimum observation window before a G3 Resolve decision. Determined by metric maturity — not build speed.

| Metric | Floor |
|--------|-------|
| Click-through rate | Hours |
| Activation rate | Days |
| D7 retention | 1 week |
| Revenue impact | 2-4 weeks |
| Hardware field reliability | 3+ months |

No decision before the floor. An agent that builds in 45 minutes does not earn a decision in 46 minutes.

---

## Comprehension Review

When an agent builds code, the team didn't write it. Before any agent-built work passes G2 Pulse, at least one team member must demonstrate they understand: why the code is structured this way, how to modify it without the agent, and what assumptions the agent made.

This is not code review (checking correctness). It is comprehension review (confirming understanding). Without it, the team accumulates code they cannot debug, extend, or explain.

---

## Agent Anti-Patterns

Three failure modes specific to agentic teams:

**Shipping without observing.** The agent builds so fast that the team skips observation entirely. Feature after feature lands in production with no evidence any of them work. The fix: enforce the Observation Floor. No G3 without data.

**Trusting agent confidence as evidence.** The agent says "this should work." Agent confidence is not user evidence. Kill conditions require real observation data — not the builder's opinion.

**Accumulating maintenance faster than you can maintain.** Build 10, kill 7, merge 3. Next week: 3 more survivors. Every merge is a maintenance commitment. Before merging at G3, ask: "What does maintaining this cost per cycle?"
