# Appendix D: Templates

> *Copy-paste these. Adapt to your context.*

---

## Cycle Brief

```
# Cycle Brief
Date:
Bet:                          <- Which bet on the Decision Spine?
Mode: [ ] Discovery  [ ] Outcome

## What
[1-3 sentences. What are we doing and why?]

## Hypothesis                  <- Discovery: what we believe. Outcome: what we expect.
We believe [X] because [evidence]. We'll test by [method].

## Kill Condition
Kill if: [specific, measurable, timebound threshold].
Observation floor: [minimum time before evaluating].

## Scope                       <- Outcome only
In: [what's included]
Out: [what's explicitly excluded]

## Target Metric               <- Outcome only
Primary: [metric + threshold]

## Observation Plan
Metric source:
Check frequency:
Who checks:

## Cycle Config
Duration: [e.g., 3 days, 2 weeks]
WIP slot: [which slot this occupies]
```

---

## Kill/Merge Record

```
# Kill/Merge Record
Cycle:                         <- Link to Cycle Brief
Date:
Gate: G3 Resolve

## Decision
[ ] KILL    [ ] MERGE    [ ] CONTINUE (max 2x)

## Evidence
Kill condition status: [triggered / not triggered / inconclusive]
Target metric result: [actual vs. target]
Data maturity: [has the Observation Floor been met?]

## Observation Summary
[What did the data show? 3-5 sentences.]

## Decision Rationale
[Why this decision? What evidence was decisive?]

## If CONTINUE
Revised deadline:
What changes:
Continues remaining: [1 or 0]

## If KILL
What we learned:
What we'd do differently:

## If MERGE
Production readiness: [ ] Yes  [ ] Conditional
Maintenance cost estimate: [per cycle]
```

---

## Learning Entry

```
# Learning Entry
Date:
Cycle:                         <- Link to Cycle Brief
Outcome: [killed / merged / continued]
Bet:                           <- Which bet on the spine?

## What We Learned
[The core insight. 2-4 sentences.]

## Surprises
[What was unexpected? What assumption was wrong?]

## Transferable Insights
[What would help a future team facing a similar bet?]

## Artifacts Preserved
[Links to any code, data, docs worth keeping]
```

---

## FLOW Configuration

```
# FLOW Configuration -- [Team/Project Name]
Date:
Owner:

## Tempo
Cycle duration: [e.g., 1-3 days, 1-2 weeks]
Build phase: [hours / days / weeks]
Observation floor: [metric-dependent]

## WIP Limits
Discovery: [number]
Outcome: [number]
Total: [number]

## Rituals
G1 Commit: [when]
G2 Pulse: [when]
G3 Resolve: [when]
Portfolio Review: [when]

## Context
Agent usage: [fully agentic / partially / minimal / none]
Special constraints: [regulatory, client, hardware, etc.]
```
