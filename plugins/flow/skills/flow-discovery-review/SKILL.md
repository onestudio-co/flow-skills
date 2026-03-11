---
name: flow-discovery-review
description: >
  Generates the weekly Discovery Review agenda for teams in FLOW-Discovery mode.
  Compiles experiment results from the past week and proposes Continue, Refine, Pivot,
  or Stop for each active Discovery Brief. Triggers on: "discovery review",
  "weekly discovery", "hypothesis review", "what did we learn", "experiment results",
  "should we pivot", "flow-discovery-review".
---

# Flow Discovery Review

## What Is the Discovery Review?

The Discovery Review is a weekly 45-60 minute meeting for teams operating in Discovery mode. It is the primary decision-making ceremony for all active Discovery cycles (typically 1-2 week cycles).

For each active hypothesis, the review produces a single verdict: **Continue / Refine / Pivot / Stop**.

The guiding question is: **"What did we learn? Did our belief change?"**

A higher kill rate is expected and healthy in Discovery mode. Stopping early IS the point — it means the system is working. Every hypothesis killed quickly frees capacity for one that might actually work. Teams that never kill hypotheses are not running real experiments.

---

## Review Workflow

Follow these steps to generate the Discovery Review agenda.

### Step 1: Gather Active Discovery Briefs

Collect all Discovery Briefs currently in active cycles. For each brief, confirm:
- It passed Gate D1 (Brief Completeness)
- An experiment was planned and executed this week
- The owner is identified and available for the review

If a brief has no experiment activity this week, flag it as stalled and include it in the agenda for a status check.

### Step 2: Collect Experiment Data for Each Brief

For each active Discovery Brief, gather:

1. **Hypothesis being tested** — the exact "We believe that..." statement from the brief
2. **Experiment run this week** — type (from the experiment ladder), execution details, sample size
3. **Validation signals collected vs minimum bar** — what was the threshold, what actually happened
4. **Kill condition status** — has the kill condition been met or not
5. **Surprises or unexpected findings** — anything the team did not anticipate

If any of these are missing, note the gap explicitly in the agenda. Incomplete data means the experiment was not designed well enough or was not executed as planned.

### Step 3: Propose a Recommendation

For each hypothesis, propose one of four verdicts based on the evidence:

| Verdict | When to use | What happens next |
|---------|-------------|-------------------|
| **Continue** | Signal is emerging but not conclusive. More data needed. | Run one more cycle with the same hypothesis and a refined or repeated experiment. |
| **Refine** | Hypothesis is partially right but needs sharpening. The direction is promising but the framing is off. | Adjust the hypothesis statement and design a new experiment targeting the refined belief. |
| **Pivot** | Problem exists but is different from what was assumed. Evidence points to an adjacent or deeper problem. | Archive current hypothesis. Write a new Discovery Brief with a new hypothesis. |
| **Stop** | No evidence of the problem after adequate testing. Kill condition met or signal is absent. | Archive learnings. Free up capacity. Move on. |

### Binary Learning Assessment

For every hypothesis, ask the team: **"What evidence changed our belief?"**

If the team cannot answer this concretely with specific data points, quotes, or measurements, the experiment was not designed well enough. Flag this in the agenda and recommend redesigning the experiment before continuing.

This is a binary test — either the team has concrete evidence or they do not. Vague statements like "we feel more confident" or "it seems promising" do not count.

---

## Agenda Template

Generate the review agenda using this exact format:

```markdown
# Discovery Review — <YYYY-MM-DD>

**Facilitator**: <Flow Facilitator>
**Active briefs**: <N> | **Completed this week**: <N>

---

## Hypothesis: <title>
**Owner**: <name> | **Cycle**: <N> (week <N> of <N>)

**Hypothesis**: <"We believe that...">
**Target user**: <who>

**Experiment this week:**
- Type: <interview / landing page / prototype / etc.>
- Sample: <N participants/data points>
- Execution notes: <what actually happened>

**Signals collected:**
| Signal | Expected bar | Actual result | Status |
|--------|-------------|---------------|--------|
| <what> | <threshold> | <what happened> | PASS/FAIL |

**Kill condition**: <from brief>
**Kill condition status**: NOT MET / MET

**Key learning**: <1-2 sentences — what changed our understanding?>

**Recommendation**: <Continue / Refine / Pivot / Stop>
**Rationale**: <evidence-based reasoning>

**If Continue**: <what experiment next week?>
**If Refine**: <what changes to hypothesis?>
**If Pivot**: <new hypothesis direction?>
**If Stop**: <key learnings to archive>

---
```

Repeat the hypothesis section for each active Discovery Brief.

After all individual hypothesis sections, include the following summary sections:

```markdown
## Portfolio Summary
| Hypothesis | Week | Signal Status | Recommendation |
|-----------|------|--------------|----------------|
| <title> | <N> | <PASS/FAIL/MIXED> | <Continue/Refine/Pivot/Stop> |
| ... | ... | ... | ... |

## Gate D3 Candidates
<Any hypotheses showing transition signals toward Outcome mode? List them here with
the specific signals that suggest readiness: consistent user demand, repeated usage,
early revenue or commitments, clear product direction. If none, state "No D3 candidates
this week.">

## Learnings Archive
_[Capture validated and invalidated hypotheses and key insights from this week.
Every Stop and every Pivot generates an archivable learning. Format:]_

- **<hypothesis title>** — <VALIDATED/INVALIDATED> — <1-sentence summary of what was learned>
```

---

## How to Run This Skill

When the user triggers this skill:

1. Ask the user which Discovery Briefs are active this week, or look for them in the relevant track files.
2. For each brief, ask the user to provide (or help them compile):
   - What experiment was run
   - What the results were
   - Whether the kill condition was triggered
   - Any surprises
3. Apply the binary learning assessment to each hypothesis.
4. Propose a recommendation (Continue / Refine / Pivot / Stop) with evidence-based rationale.
5. Generate the complete agenda using the template above.
6. Highlight any D3 candidates and any stalled briefs.
7. Populate the Learnings Archive for any hypotheses being stopped or pivoted.

If the user has only one hypothesis, still use the full template — the structure matters even for a single item. If the user has many hypotheses (5+), prioritize the ones closest to a decision point (kill condition approaching, strong signal emerging, or stalled).

---

## Decision Criteria Details

### Continue — when signal is emerging

Use when:
- Some validation signals met the bar, others did not
- Sample size was too small for a definitive answer
- The direction feels right but needs one more data point
- The experiment ran into execution issues (low turnout, bad timing) but the hypothesis is still plausible

Guard against: "Continue" as a default. If a hypothesis has been in Continue for 3+ cycles with no strengthening signal, escalate to Pivot or Stop.

### Refine — when the hypothesis needs sharpening

Use when:
- The problem space is confirmed but the specific framing is off
- Users describe the problem differently than the hypothesis assumed
- The target user segment needs narrowing or shifting
- Experiments are generating signal but not the signal expected

Output: A revised "We believe that..." statement with specific changes highlighted.

### Pivot — when the problem is different

Use when:
- Evidence points to an adjacent problem that is more painful or more common
- Users consistently redirect conversations to a different topic
- The experiment invalidated the hypothesis but revealed something else
- Technical feasibility findings change the problem framing

Output: A new Discovery Brief direction with the pivot rationale.

### Stop — when there is no evidence

Use when:
- Kill condition has been met
- Multiple cycles with no signal emergence
- Users consistently say the problem does not exist or does not matter
- Better opportunities have been identified elsewhere

Output: Archived learnings — what was tested, what was found, why it was stopped. This is valuable institutional knowledge.

---

## Anti-Patterns to Flag During Review

### 1. Zombie hypotheses
**Symptom**: A hypothesis that has been in "Continue" for 3+ cycles with no change in signal strength.
**Action**: Force a decision — Refine with a specific change, Pivot to a new direction, or Stop.

### 2. Confirmation bias in results
**Symptom**: Team interprets ambiguous results as positive. Phrases like "they seemed interested" or "nobody said no."
**Action**: Apply the binary learning test. Demand specific evidence. Reframe: "What would failure look like? Did we see any of that?"

### 3. Missing kill conditions
**Symptom**: Brief had no kill condition, or the kill condition was so generous it could never trigger.
**Action**: Pause the review for this hypothesis. Define a real kill condition before proceeding.

### 4. Experiment drift
**Symptom**: The experiment executed was significantly different from what was planned.
**Action**: Note the drift. Assess whether the actual experiment still answers the hypothesis question. If not, the cycle does not count — rerun with discipline.

### 5. No learnings from Stop decisions
**Symptom**: Team stops a hypothesis but captures no learnings.
**Action**: Every Stop generates an archivable learning. If the team cannot articulate what was learned, the experiment was wasted. Capture the learning before closing.

### 6. Portfolio imbalance
**Symptom**: All hypotheses are in the same stage or getting the same verdict.
**Action**: Flag this in the Portfolio Summary. A healthy Discovery portfolio has a mix of stages and outcomes.
