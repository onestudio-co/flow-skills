---
name: flow-outcome-review
description: >
  Generates the Weekly Outcome Review for active Outcome-mode cycles.
  Triggered by: "outcome review", "did the metric move", "metric review",
  "weekly outcome", "are we on track", "outcome progress", "flow-outcome-review".
---

# Flow Outcome Review

## What the Outcome Review Is

The Weekly Outcome Review is a structured review of metric progress for all active Outcome cycles. It is a companion to the Kill/Merge meeting and feeds directly into Kill/Merge decisions.

- **Focus**: Measurable outcome deltas, not activity. Shipping features is irrelevant if the metric did not move.
- **Core question**: "Did the metric move? If not, why? What do we change?"
- **Cadence**: Weekly, run before or alongside the Kill/Merge meeting.
- **Purpose**: Surface what is working, what is not, and what should be stopped or simplified.

Key principle: **Activity ≠ Progress.** Shipping 10 things that don't move the metric is worse than shipping 1 thing that does.

## Review Workflow

### Step 1: Gather Data

For each active Outcome cycle, collect:

- **SPEC-Lite metric**: baseline value, current value, target value
- **This week's micro-shipments**: what was actually shipped and deployed
- **Experiment results**: A/B test outcomes, feature flag rollout data, any quantitative signal
- **Dashboard data**: the live metric as of review time

### Step 2: Analyze

For each cycle, evaluate:

- **Metric trajectory**: Is the metric improving, flat, or declining?
- **Velocity of change vs remaining time**: At the current rate of change, will we hit the target before the cycle ends?
- **Projected outcome**: Will or won't hit target at current rate — be honest and explicit.
- **Blockers**: What is preventing faster progress? Technical debt, dependencies, unclear hypotheses, wrong audience?

### Step 3: Produce

Generate the following outputs:

- **Per-cycle metric report**: One section per active Outcome cycle with the data table and analysis.
- **Stop/simplify recommendations**: Anything that is consuming effort without moving the metric.
- **Input for Kill/Merge meeting**: Explicit recommendations on which cycles to continue, escalate, simplify, or kill.

## Template

```markdown
# Outcome Review — <YYYY-MM-DD>

---

## Cycle: <name>
**Metric**: <name>

| | Baseline | Last week | This week | Target | Δ this week |
|---|---------|-----------|-----------|--------|-------------|
| <metric> | <val> | <val> | <val> | <val> | <+/- val> |

**Trend**: ↑ Improving / → Flat / ↓ Declining
**Projected**: Will / Won't hit target at current rate

**This week's shipments:**
- <what was shipped and its impact>

**Learnings:**
- <what we learned from this week's data>

**Stop/simplify candidates:**
- <anything we should stop doing or simplify>

**Next week's plan:**
- <planned experiments/shipments>

---

## Summary
| Cycle | Metric Δ | Trend | On Track? |
|-------|---------|-------|-----------|
| ... | ... | ... | ... |

## Simplification Opportunities
<Features, code, or processes that can be simplified>

## Input for Kill/Merge
<Recommendations to bring to the Kill/Merge meeting>
```

## How to Run This Skill

1. Read all active Outcome cycles from the relevant track (check `tasks.md` and `decisions.md` for active cycles and their SPEC-Lite metrics).
2. Ask the user for current metric values if not available in the files.
3. Walk through each cycle using the Step 1-2-3 workflow above.
4. Generate the review document using the template.
5. Store the output in the appropriate track or present it to the user for the Kill/Merge meeting.
