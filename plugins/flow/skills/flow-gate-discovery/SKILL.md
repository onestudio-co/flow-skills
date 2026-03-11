---
name: flow-gate-discovery
description: >
  Run Discovery gates (D1, D2, D3) as mechanical checklists against Discovery-mode work.
  Triggers on: "gate D1", "gate D2", "gate D3", "discovery gate", "is this brief ready",
  "can we run this experiment", "should we switch to outcome", "mode switch", "flow-gate-discovery".
---

# Flow Gate Discovery

Gates are what make FLOW a mechanical property of the workflow, not a cultural hope. Each gate is a hard checklist — pass or fix before proceeding.

## Gate Progression

D1 (Brief Completeness) → run experiment → D2 (Experiment Type Constraint) review → collect signals → weekly Discovery Review → D3 (Mode Switch) assessment when signals accumulate.

---

## Gate D1 — Brief Completeness

**Purpose:** Forces teams to define HOW they will know (validation signal + kill condition) before building.

### Checklist

- [ ] Problem hypothesis exists and uses hypothesis language ("We believe...")
- [ ] Target user is specific (not "all users")
- [ ] Experiment question is a single, answerable question
- [ ] Validation signal has method AND minimum bar/threshold
- [ ] Kill condition has timeframe (1-2 weeks typical) AND measurable threshold
- [ ] Spine mapping traces to Vision
- [ ] Owner assigned
- [ ] One page or less

### How to Run D1

1. Ask the user to provide their Discovery Brief (or point to the document/file).
2. Evaluate each checklist item against the brief content.
3. For each item, mark PASS or NOT READY with a specific note.
4. Produce the report using the format below.
5. If any item is NOT READY, list concrete blockers and what needs to change.

---

## Gate D2 — Experiment Type Constraint

**Purpose:** Keeps early work lightweight and reversible. Prevents premature scalable architecture.

### Checklist

- [ ] Experiment type is appropriate for the confidence level
- [ ] Cheaper alternatives were considered and ruled out with reasoning
- [ ] No production code unless explicitly justified (and cheaper options exhausted)
- [ ] Experiment is reversible / throwaway
- [ ] Duration fits within a 1-2 week discovery cycle
- [ ] Sample size is adequate for the experiment type
- [ ] Decision framework defined (what happens with each possible result)

### How to Run D2

1. Ask the user to describe (or point to) their planned experiment.
2. Challenge the experiment type — could something cheaper achieve the same learning?
3. Evaluate each checklist item.
4. Produce the report using the format below.
5. If any item is NOT READY, recommend a lighter-weight alternative.

---

## Gate D3 — Mode Switch (Discovery to Outcome)

**Purpose:** Prevents staying in "prototype land" forever. Checks for transition signals that justify switching from Discovery mode to Outcome mode.

### Checklist

- [ ] Consistent user demand (not just 1-2 anecdotes)
- [ ] Repeated usage or engagement (if prototype exists)
- [ ] Early revenue or commitments (if applicable)
- [ ] Clear product direction emerged
- [ ] Problem hypothesis validated with evidence (reference experiment results)
- [ ] Team can articulate the problem as fact, not hypothesis
- [ ] Recommendation: switch to Outcome mode and create SPEC-Lite + Build Contract

### How to Run D3

1. Ask the user to present accumulated signals from their Discovery cycles.
2. Evaluate each checklist item against the evidence provided.
3. Produce the report using the format below.
4. If PASS, recommend creating a SPEC-Lite and Build Contract as the next step.
5. If NOT READY, recommend continuing with a refined hypothesis for one more cycle.

---

## Report Format

Use this exact format when producing a gate report:

```
## Gate <D1|D2|D3> Check: <title>

**Verdict**: PASS / NOT READY

| # | Criterion | Status | Notes |
|---|-----------|--------|-------|
| 1 | Hypothesis framing | PASS or NOT READY | Clear "we believe..." structure |
| 2 | Target user specific | PASS or NOT READY | "Enterprise users" too broad |
| ... | ... | ... | ... |

**Blockers:**
1. <specific fix needed>

**Recommendation**: <next step>
```

- Use PASS when ALL checklist items are satisfied.
- Use NOT READY when ANY checklist item fails. List every failing item as a blocker with a concrete fix.
- Always end with a single actionable recommendation.

---

## Edge Cases

### Mixed D3 signals
If D3 signals are mixed (some pass, some do not), the verdict is NOT READY. Recommendation: continue one more Discovery cycle with a refined hypothesis targeting the weakest signals.

### D1 passes but experiment fails
That is success — the team learned something. Archive the brief and experiment results, capture the learning, and move on to the next hypothesis. A failed experiment is not a failed gate.

### Team wants to skip D2
Skipping D2 requires explicit leadership approval (WIP exception). Without that approval, the gate blocks. Document the exception request and rationale if leadership grants it.
