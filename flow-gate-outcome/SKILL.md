---
name: flow-gate-outcome
description: >
  Run Outcome gates (O1, O2, O3, O4, O5) as mechanical checklists against Outcome-mode work.
  Triggers on: "gate O1", "gate O2", "gate O3", "gate O4", "gate O5", "outcome gate",
  "is this spec ready", "build contract check", "observability check", "cycle decision",
  "flow-gate-outcome".
---

# Flow Gate Outcome

Gates are what make FLOW a mechanical property of the workflow, not a cultural hope. Each gate is a hard checklist — pass or fix before proceeding. The five Outcome gates enforce the FLOW-Outcome process end-to-end, from spine integrity through cycle-level kill/merge decisions.

## Gate Flow

O1 (Spine Mapping) → O2 (SPEC-Lite Completeness) → O3 (Build Contract Agreement) → implement with daily micro-shipping → O4 (Observability from Day One) check → weekly Kill/Merge → O5 (Cycle-Level Decision)

---

## Gate O1 — Spine Mapping

**Purpose:** Prevents "orphan work" — tasks that do not trace upward through the full decision hierarchy. Enforces acceptance criteria and intent clarity by requiring every piece of work to connect from task through to vision.

### Checklist

- [ ] Task maps to an Experiment
- [ ] Experiment maps to a Problem
- [ ] Problem maps to an Outcome Metric
- [ ] Outcome Metric maps to Vision
- [ ] Mapping is coherent (each level logically supports the next)
- [ ] No gaps or weak links in the chain

### How to Run O1

1. Ask the user to provide the work item (task, ticket, or feature) they want to validate.
2. Walk the spine upward: Task → Experiment → Problem → Outcome Metric → Vision.
3. For each link, evaluate whether the connection is logical and explicit (not assumed).
4. A "weak link" is one where the connection requires a leap of faith or where the user cannot articulate why level N supports level N+1.
5. Produce the report using the format below.
6. If any link is missing or weak, list it as a blocker with a concrete fix.

---

## Gate O2 — SPEC-Lite Completeness

**Purpose:** Enforces constraints, boundaries, and kill conditions to prevent scope creep. Nothing proceeds to a Build Contract without a complete, reviewed SPEC-Lite.

### Checklist

- [ ] Problem describes a pain, not a solution
- [ ] Success metric has baseline AND target
- [ ] At least 2 constraints listed (non-negotiable)
- [ ] At least 2 out-of-scope items listed
- [ ] Kill condition is specific: timeframe + threshold
- [ ] No unresolved TBDs
- [ ] Owner assigned
- [ ] One page or less
- [ ] Spine mapping complete (from O1)

### How to Run O2

1. Ask the user to provide their SPEC-Lite (or point to the document/file).
2. Evaluate each checklist item against the document content.
3. For the "spine mapping complete" item, verify that O1 has been run and passed, or run a quick spine check inline.
4. For each item, mark PASS or NOT READY with a specific note.
5. Produce the report using the format below.
6. If any item is NOT READY, list concrete blockers and what needs to change before proceeding to the Build Contract.

---

## Gate O3 — Build Contract Agreement

**Purpose:** Explicitly prevents execution before product-engineering agreement. No implementation begins until both sides have made concrete, specific commitments.

### Checklist

- [ ] Product commits are specific and actionable
- [ ] Engineering commits include architecture approach
- [ ] Risks identified with mitigation strategies
- [ ] Fallback plan exists
- [ ] Observability plan defined (analytics, feature flags, rollback, perf monitoring)
- [ ] Feature flag strategy for safe rollout
- [ ] Cadence agreed (daily micro-shipping preferred)
- [ ] Both product owner and engineering owner named and agreed

### How to Run O3

1. Ask the user to provide their Build Contract (or point to the document/file).
2. Evaluate each checklist item against the contract content.
3. Challenge vague commitments — "we will be available" is not a product commit; "we will respond to questions within 4 hours" is.
4. Verify that engineering commits include concrete observability and instrumentation plans, not deferred promises.
5. Confirm both owners are named (not just roles) and have explicitly agreed.
6. Produce the report using the format below.
7. If any item is NOT READY, the team must not begin implementation until blockers are resolved.

### Anti-patterns (automatic NOT READY)

- "We'll figure out observability later"
- No fallback plan
- Product commits are just the SPEC-Lite copy-pasted
- Engineering commits are vague ("we'll build it well")
- Missing rollback strategy
- No kill/adjust triggers
- Risks section says "none" or "low risk"

---

## Gate O4 — Observability from Day One

**Purpose:** Matches the policy requirement for production-grade feedback loops. Ensures that when code ships, the team can immediately observe whether it is working, failing, or degrading.

### Checklist

- [ ] Product analytics events instrumented
- [ ] Feature flags configured for progressive rollout
- [ ] Rollback mechanism tested
- [ ] Performance monitoring baseline established
- [ ] Dashboard exists or is planned with specific metrics
- [ ] Error tracking configured for new code paths

### How to Run O4

1. Ask the user to describe or demonstrate their current observability setup for the feature being shipped.
2. Evaluate each checklist item against what is actually in place (not what is planned for later).
3. "Configured" means in code and testable, not "on the roadmap."
4. "Tested" means the rollback has been exercised at least once in a staging or production environment.
5. "Baseline established" means there is a recorded measurement before the feature ships, not "we'll measure after."
6. Produce the report using the format below.
7. If any item is NOT READY, the feature should not proceed to broader rollout until observability gaps are closed.

---

## Gate O5 — Cycle-Level Decision

**Purpose:** Institutionalizes stopping and simplification as normal operations. At the end of every outcome cycle, the team must make an explicit, evidence-based decision: Kill, Merge, Continue, or Adjust.

### Checklist

- [ ] Outcome cycle has reached its timeframe
- [ ] Metric data collected and reviewed
- [ ] Evidence presented for decision (not opinions)
- [ ] Decision made: Kill / Merge / Continue / Adjust
- [ ] If Kill: learnings archived, resources freed
- [ ] If Merge: hardening plan defined, ship as capability
- [ ] If Continue: refined hypothesis, updated targets
- [ ] If Adjust: scope changed, new kill condition set
- [ ] Decision documented in kill/merge notes

### How to Run O5

1. Ask the user which outcome cycle is being reviewed.
2. Ask for the metric data and evidence collected during the cycle.
3. Evaluate whether the cycle has actually reached its timeframe (not being reviewed prematurely or overdue).
4. Check that the decision is grounded in data, not gut feeling. "It feels like it's working" is not evidence.
5. Based on the decision type (Kill/Merge/Continue/Adjust), verify the appropriate follow-up items are addressed.
6. Only ONE decision type applies — all checklist items for that decision type must pass.
7. Produce the report using the format below.
8. If evidence is insufficient for any decision, recommend extending the cycle with a specific data collection plan rather than guessing.

### Decision Types

| Decision | When to use | Required follow-up |
|----------|------------|-------------------|
| **Kill** | Metric did not reach threshold; hypothesis disproven | Archive learnings, free resources, update portfolio |
| **Merge** | Metric met or exceeded target; feature is validated | Define hardening plan, remove feature flag, ship as permanent capability |
| **Continue** | Early positive signal but not yet at threshold | Refine hypothesis, update targets, set new timeframe |
| **Adjust** | Partial signal suggests a pivot, not a stop | Change scope, set new kill condition, document what changed and why |

---

## Report Format

Use this exact format when producing a gate report:

```
## Gate <O1|O2|O3|O4|O5> Check: <title>

**Verdict**: PASS / NOT READY

| # | Criterion | Status | Notes |
|---|-----------|--------|-------|
| 1 | <criterion name> | PASS or NOT READY | <specific observation> |
| 2 | <criterion name> | PASS or NOT READY | <specific observation> |
| ... | ... | ... | ... |

**Blockers:**
1. <specific fix needed>
2. <specific fix needed>

**Recommendation**: <next step>
```

- Use PASS when ALL checklist items are satisfied.
- Use NOT READY when ANY checklist item fails. List every failing item as a blocker with a concrete fix.
- Always end with a single actionable recommendation.

### Report Notes by Gate

- **O1 report**: Show the full spine mapping (Task → Experiment → Problem → Outcome Metric → Vision) as a visual chain. Mark each link as solid or weak.
- **O2 report**: Reference the SPEC-Lite sections directly. Quote the problem statement, metric, and kill condition in the notes column so the reviewer can see what was evaluated.
- **O3 report**: Call out any anti-patterns detected. If an anti-pattern is found, it is an automatic NOT READY regardless of other items.
- **O4 report**: Distinguish between "exists in code" and "exists as a plan." Only the former counts as PASS.
- **O5 report**: Include the decision type and the evidence summary. The recommendation should state what happens next based on the decision (archive, harden, refine, or pivot).

---

## Edge Cases

### O1 passes but O2 fails
This is normal. A valid spine mapping does not guarantee a complete spec. The user needs to flesh out the SPEC-Lite sections (constraints, out-of-scope, kill condition) before proceeding.

### O3 has anti-patterns
Any single anti-pattern is an automatic NOT READY, even if all other checklist items pass. Anti-patterns signal a fundamental gap in the agreement, not a minor oversight.

### O4 run mid-implementation
O4 can be run at any point during implementation as a health check. If it fails mid-cycle, the team should pause broader rollout and close observability gaps before continuing. It does not require restarting the cycle.

### O5 with insufficient data
If the team reaches the cycle timeframe but does not have enough metric data to make a decision, the verdict is NOT READY. Recommend extending the cycle by a specific duration with a concrete data collection plan. Do not allow "we'll decide with what we have" if the data is genuinely insufficient.

### O5 with mixed signals
If the metric partially hit the target, the appropriate decision is usually Adjust (not Continue). Continue implies the same approach will eventually work; Adjust acknowledges something needs to change. Push the team to be honest about which applies.

### Running gates out of order
Gates should be run in order (O1 → O2 → O3 → O4 → O5). If a user asks to run O3 without having passed O2, flag it: "Gate O2 (SPEC-Lite Completeness) should pass before running O3 (Build Contract Agreement). Would you like to run O2 first?" Allow the user to override if they have a reason, but document the skip.
