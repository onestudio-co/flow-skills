---
name: flow-experiment-log
description: >
  Captures structured experiment results as a searchable record — what was tested, what happened,
  and what was decided. Use this skill when the user says "log experiment", "experiment results",
  "record what we learned", "experiment log", "what happened in the experiment", "have we tested
  this before", "flow-experiment-log", or needs to document the outcome of a completed experiment.
  Also triggered when someone asks whether a particular assumption or hypothesis has already been
  tested. Evidence becomes findable and prevents re-running experiments that already have answers.
---

# Flow Experiment Log

## Purpose

Create a searchable record of every experiment run, its results, and the decision that followed. Experiment logs serve three functions:

1. **Evidence archive** — structured proof of what was tested, what the data showed, and what was decided. This is the ground truth that Discovery Briefs and SPEC-Lites reference.
2. **Institutional memory** — prevents teams from re-running experiments that already have answers. Before designing a new experiment, search existing logs first.
3. **Learning compounding** — the "Learnings for Future" section accumulates reusable insights that improve future experiment design across all tracks.

---

## Experiment Log Template

```markdown
---
doc_type: experiment_log
experiment_id: "<unique id>"
parent_brief: "<Discovery Brief or SPEC-Lite reference>"
cycle_id: "<cycle identifier>"
date_started: "<YYYY-MM-DD>"
date_completed: "<YYYY-MM-DD>"
result: validated | invalidated | inconclusive
---

# Experiment: <title>

## Setup
**Hypothesis**: <what we believed>
**Question**: <what this experiment answered>
**Type**: <interview / landing page / prototype / A/B test / etc.>
**Duration**: <actual duration>

## Design
**Sample**: <who/how many participated>
**Method**: <how the experiment was conducted>
**Control**: <what was the baseline/control, if applicable>

## Results

### Signals Collected
| Signal | Expected bar | Actual result | Met? |
|--------|-------------|---------------|------|
| <what> | <threshold> | <result> | ✅/❌ |

### Raw observations
- <observation 1>
- <observation 2>
- <unexpected finding>

### Data
<Any quantitative data, charts references, or dashboard links>

## Analysis
**Result**: Validated / Invalidated / Inconclusive
**Confidence**: High / Medium / Low
**Key insight**: <1-2 sentences — the most important thing we learned>

## Decision
**What we decided**: <continue / pivot / stop / proceed to Outcome>
**Based on**: <which signals drove this decision>
**Next step**: <what happens next>

## Learnings for Future
- <reusable insight 1>
- <reusable insight 2>
- <what we'd do differently next time>
```

---

## Field Guide

### Required Fields

Every experiment log must have these fields completed. Do not leave any blank.

| Field | Purpose | Quality test |
|-------|---------|-------------|
| **experiment_id** | Unique identifier for cross-referencing | Format: `EXP-YYYY-NNN` (e.g., `EXP-2026-001`) |
| **parent_brief** | Links back to the Discovery Brief or SPEC-Lite that spawned this experiment | Must reference an existing document or state "standalone" |
| **result** (frontmatter) | Machine-searchable outcome | Must be exactly one of: `validated`, `invalidated`, `inconclusive` |
| **Hypothesis** | What was believed before the experiment | Must use hypothesis language ("We believed that...") |
| **Question** | What this experiment answered | Must be a single, specific question |
| **Signals Collected** | Evidence table | At least one row with all four columns filled |
| **Result** (Analysis) | Human-readable outcome | Must match the frontmatter `result` value |
| **Key insight** | The single most important takeaway | 1-2 sentences max; should be quotable in a review |
| **Decision** | What was decided based on the results | Must logically follow from the results |
| **Next step** | What happens after this experiment | Must be concrete and actionable |

### Conditional Fields

| Field | When required |
|-------|--------------|
| **Control** | Required for A/B tests and comparative experiments; write "N/A" for interviews and landing pages |
| **Data** | Required when quantitative data exists; write "Qualitative only" for interview-based experiments |

---

## Quality Checks

Before finalizing any experiment log, verify these conditions:

### Result Integrity

- [ ] **Result is one of three values**: validated / invalidated / inconclusive. No other values are permitted.
- [ ] **Frontmatter result matches Analysis result** — they must be identical.
- [ ] **If inconclusive**: the Analysis section must explain WHY the result is inconclusive and WHAT would make it conclusive. An inconclusive result without an explanation is incomplete.

### Decision-Result Coherence

- [ ] **Decision follows from results** — a "validated" result should not lead to "stop," and an "invalidated" result should not lead to "proceed to Outcome" without explicit justification.
- [ ] **"Based on" references specific signals** from the Signals Collected table, not vague reasoning.
- [ ] **Next step is concrete** — not "think about it more" but a specific action with an owner or timeline.

### Completeness

- [ ] **All signals from the original experiment design are accounted for** — if the Discovery Brief specified 3 signals, all 3 must appear in the Signals Collected table.
- [ ] **Raw observations include at least one unexpected finding** — if nothing was unexpected, explicitly state "No unexpected findings" (this is rare and worth noting).
- [ ] **Learnings for Future has at least two entries** — every experiment teaches something reusable.

### Inconclusive Result Requirements

When the result is "inconclusive," the log must additionally include:

- **Why inconclusive**: Was the sample too small? Was the signal ambiguous? Did external factors interfere?
- **What would make it conclusive**: What specific additional data, sample size, or changed conditions would produce a clear validated/invalidated result?
- **Recommendation**: Re-run with modifications, run a different experiment type, or archive with the inconclusive finding documented.

---

## File Conventions

- **Location**: Store in the `experiments/` directory at the project root. Create the directory if it does not exist.
- **Naming**: `experiment-YYYY-MM-DD-<short-name>.md` — the date is the completion date, and the short name is a kebab-case summary of what was tested.
  - Example: `experiment-2026-03-11-peak-hour-interviews.md`
  - Example: `experiment-2026-02-28-landing-page-conversion.md`
- **Link back**: The `parent_brief` field in frontmatter must reference the Discovery Brief or SPEC-Lite that originated this experiment. Use the filename (e.g., `discovery-peak-hour-orders.md`) or document title.

---

## Search Utility

When someone asks "have we tested X before?" or "what do we know about Y?", use this workflow:

### Search Protocol

1. **Search experiment logs** by grepping the `experiments/` directory for the keyword or topic.
2. **Check frontmatter fields**: search `hypothesis`, `question`, `result`, and `key insight` fields for relevance.
3. **Report findings** in this format:

```
### Prior Experiments on "<topic>"

| Experiment | Date | Result | Key Insight |
|-----------|------|--------|-------------|
| <title + link> | <date_completed> | <result> | <key insight> |

**Recommendation**: <whether existing evidence answers the question, or a new experiment is needed>
```

4. **If no prior experiments exist**, say so explicitly: "No prior experiments found on this topic. Recommend designing a new experiment using the flow-experiment-design skill."

### Search Scope

Search across all tracks, not just the current one. Experiments in one track may contain relevant evidence for another.

---

## Interaction Protocol

When a user triggers this skill:

### Logging a Completed Experiment

1. **Identify the parent brief** — ask which Discovery Brief or SPEC-Lite this experiment belongs to. If standalone, note that.
2. **Ask for results** — gather the key information:
   - "What was the hypothesis you were testing?"
   - "What did the data show? Walk me through the signals."
   - "What surprised you?"
   - "What did you decide based on the results?"
3. **Draft the log** using the template, filling in all sections.
4. **Run quality checks** — verify result integrity, decision-result coherence, and completeness before presenting.
5. **Flag any issues** — if the result is inconclusive without explanation, or the decision does not follow from the results, ask clarifying questions before finalizing.
6. **Save the file** to `experiments/` using the naming convention.
7. **Confirm** with the experiment ID and file location.

### Searching for Prior Experiments

1. **Extract the search topic** from the user's question.
2. **Search** the `experiments/` directory using the search protocol above.
3. **Report findings** with the summary table format.
4. **Recommend next steps** — either reference the existing evidence or suggest a new experiment.

---

## Critical Reminders

- **Log promptly.** Experiment logs should be written as soon as results are available. Memory fades, and undocumented experiments are wasted experiments.
- **Be honest about results.** The log records what actually happened, not what the team hoped would happen. Inconclusive is a valid and valuable result.
- **Decision must follow from data.** If the team decided to proceed despite invalidating results, the log must explain why (e.g., "invalidated for segment A, but interview 7 revealed a stronger signal in segment B").
- **Learnings compound.** The "Learnings for Future" section is the highest-value part of the log over time. Write it for your future self who is designing the next experiment.
- **Search before designing.** Before using flow-experiment-design, always check existing experiment logs first. The answer may already exist.
