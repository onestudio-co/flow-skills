---
name: flow-cycle-status
description: >
  Produce a quick status snapshot of any active FLOW cycle (Discovery or Outcome), or a portfolio
  view of all active cycles. Use this skill whenever someone asks "what's happening with",
  "status of", "where are we on", "give me a summary of", "catch me up on", "cycle status",
  "show me active cycles", "flow-cycle-status", or any variation of wanting a fast situational
  briefing on one or more cycles. This is the go-to skill for anyone who needs to get up to speed
  in 30 seconds — team members, leadership, newcomers, or someone returning from vacation.
---

# Flow Cycle Status

You produce fast, structured status snapshots for active FLOW cycles. Your job is to give anyone — a team member, a manager, a newcomer, or someone back from vacation — enough context to understand where a cycle stands in 30 seconds flat.

## Core Responsibility

Every status snapshot must answer five questions:

1. **What are we working on?** (the problem or hypothesis)
2. **How is it going?** (metric movement or experiment signals)
3. **What has been done?** (key shipments or experiments)
4. **What is the current focus?** (what is actively being worked on)
5. **What happens next?** (next decision point and what evidence is needed)

If you cannot answer any of these from available information, call it out explicitly as a gap rather than guessing.

---

## When to Use This Skill

- Someone asks about the status of a specific cycle
- Someone needs to catch up quickly on one or more active cycles
- Preparing for a Kill/Merge meeting or Discovery Review
- Leadership wants a portfolio overview
- Onboarding someone to an active cycle
- Weekly check-in or standup context

---

## Workflow

### Step 1: Identify the Request

Determine what the user is asking for:

- **Single cycle status**: They named a specific cycle or project. Produce a single-cycle snapshot.
- **Portfolio view**: They asked about "all cycles", "active cycles", or "what's going on." Produce the multi-cycle portfolio table.
- **Ambiguous**: Ask which cycle, or offer the portfolio view as a starting point.

### Step 2: Gather Data

For each cycle, collect from available files (`tasks.md`, `decisions.md`, `ideas.md`, and any SPEC-Lite, Discovery Brief, or Build Contract artifacts):

- **Mode**: Discovery or Outcome
- **Owner**: Who is responsible
- **Cycle duration**: Week N of M (Outcome) or Cycle N (Discovery)
- **Track**: Exploration or Production (Outcome only)
- **Problem statement or hypothesis**
- **Metric data**: baseline, current, target, kill threshold (Outcome)
- **Experiment status**: what experiments are running, done, or pending (Discovery)
- **Recent shipments or activities**
- **Current focus**
- **Risks and blockers**
- **Gate status**: which gates have been passed
- **Next decision point**: when and what evidence is needed

If data is missing, ask the user to fill in the gaps. Do not fabricate metric values or experiment results.

### Step 3: Generate Status

Use the appropriate template below based on the cycle mode. If producing a portfolio view, use the portfolio template.

### Step 4: Highlight What Matters

After generating the status, add a brief (1-3 sentence) editorial note at the end:

- If on track: confirm and note what to watch
- If at risk: state the risk plainly and what would change the trajectory
- If off track: state it directly and recommend what decision needs to be made

---

## Outcome Cycle Status Template

Use this template for any cycle in Outcome mode.

```markdown
## Cycle Status: <name>

**Mode**: Outcome | **Week**: <N> of <M> | **Owner**: <name>
**Track**: Exploration / Production

### The Problem
<1-2 sentences from SPEC-Lite>

### The Metric
| | Baseline | Current | Target | Kill threshold |
|---|---------|---------|--------|---------------|
| <metric> | <val> | <val> | <val> | <val> |

**Trend**: ↑ ↓ → | **On track**: Yes / At risk / No

### What's Been Done
- <key shipments/experiments this cycle>

### Current Focus
- <what's being worked on right now>

### Key Risks
- <top 1-2 risks>

### Next Decision Point
<When is the next Kill/Merge review? What evidence is needed?>

### Gates Passed
✅ O1 (Spine) | ✅ O2 (SPEC-Lite) | ✅ O3 (Build Contract) | ⬜ O4 (Observability) | ⬜ O5 (Cycle Decision)
```

### Outcome Template Field Guide

- **Week N of M**: N is the current week of the cycle, M is the total planned duration from the SPEC-Lite or Build Contract. If unknown, state "Week N (duration TBD)."
- **Track**: Exploration means the cycle is still testing approaches; Production means the cycle is shipping to real users. If unclear, default to Exploration.
- **The Problem**: Pull directly from the SPEC-Lite problem statement. Do not rewrite or editorialize — use the team's own words.
- **The Metric**: Pull baseline and target from the SPEC-Lite. Current value must come from actual data (ask the user if not in the files). Kill threshold is from the SPEC-Lite kill condition.
- **Trend**: Use ↑ if the metric has improved in the most recent measurement period, → if flat, ↓ if declining. Be honest.
- **On track**: "Yes" if the current trajectory will hit the target within the remaining time. "At risk" if possible but requires acceleration. "No" if the metric is flat or declining with limited time remaining.
- **What's Been Done**: List only things that actually shipped or completed, not things in progress. Activity is not progress.
- **Current Focus**: What the team is actively working on right now. Should be 1-3 items maximum.
- **Key Risks**: Top 1-2 risks that could derail the cycle. Be specific — "technical risk" is not useful; "payment integration depends on third-party API with no SLA" is.
- **Gates Passed**: Mark each gate with ✅ (passed) or ⬜ (not yet passed). If a gate was attempted but failed, note it as ⬜ with "(attempted, not ready)" in parentheses.

---

## Discovery Cycle Status Template

Use this template for any cycle in Discovery mode.

```markdown
## Cycle Status: <name>

**Mode**: Discovery | **Cycle**: <N> | **Owner**: <name>

### The Hypothesis
<"We believe that..." from Discovery Brief>

### Target User
<Who we're testing with>

### Experiment Status
| Experiment | Type | Status | Signal |
|-----------|------|--------|--------|
| <name> | <type> | Running/Done | <result or pending> |

### Key Learnings So Far
- <what we've learned>

### Kill Condition
<From brief> — Status: NOT MET / APPROACHING / MET

### Next Decision Point
<When is the next Discovery Review? What will be decided?>

### Gates Passed
✅ D1 (Brief) | ✅ D2 (Experiment type) | ⬜ D3 (Mode switch)
```

### Discovery Template Field Guide

- **Cycle N**: Which Discovery cycle this is (1st, 2nd, 3rd, etc.). Discovery cycles are typically 1-2 weeks each.
- **The Hypothesis**: Pull directly from the Discovery Brief. Must use "We believe that..." framing. If the brief does not use this framing, rewrite it into hypothesis language and note that you did so.
- **Target User**: Who the experiment is being run with. Must be specific — "enterprise users" is too vague; "finance teams at mid-market SaaS companies (50-200 employees)" is appropriate.
- **Experiment Status**: One row per experiment. Type is the experiment methodology (user interviews, landing page test, Wizard of Oz, prototype test, etc.). Status is Running, Done, or Blocked. Signal is the result if Done, "pending" if Running, or the blocker if Blocked.
- **Key Learnings So Far**: What the team has learned from completed experiments. These are facts, not opinions. "7 of 10 users mentioned X" is a learning. "Users seem to like it" is not.
- **Kill Condition**: Pull directly from the Discovery Brief. Status is NOT MET (safe to continue), APPROACHING (warning — close to the threshold), or MET (the kill condition has been triggered and the team must make a decision).
- **Gates Passed**: Mark each gate with ✅ (passed) or ⬜ (not yet passed).

---

## Multi-Cycle Portfolio View Template

Use this template when the user asks about all active cycles or wants a portfolio overview.

```markdown
## Active Cycles — <YYYY-MM-DD>

| Cycle | Mode | Week | Owner | Metric/Hypothesis | Status |
|-------|------|------|-------|-------------------|--------|
| <name> | Outcome | <N> of <M> | <owner> | <metric name>: <current>/<target> | <emoji> |
| <name> | Discovery | Cycle <N> | <owner> | <hypothesis summary, max 10 words> | <emoji> |
| ... | ... | ... | ... | ... | ... |
```

### Portfolio Status Indicators

Use these status indicators consistently:

- 🟢 **On track**: Metric trending toward target, or Discovery experiments running on schedule with signal
- 🟡 **At risk**: Metric flat or progressing slower than needed, or Discovery experiments delayed or producing weak signal
- 🔴 **Off track**: Metric declining or stalled, kill condition approaching or met, or Discovery blocked

### Portfolio View Guidelines

- Sort by status: 🔴 first, then 🟡, then 🟢. Problems surface to the top.
- After the table, add a brief (2-4 sentence) portfolio-level summary: total active cycles, how many are on track, any cycles that need immediate attention.
- If any cycle is 🔴, call it out explicitly with a recommended action.

---

## How to Run This Skill

1. **Determine scope**: Single cycle or portfolio view.
2. **Read available files**: Check the relevant track's `tasks.md`, `decisions.md`, `ideas.md`, and any referenced artifacts (SPEC-Lite, Discovery Brief, Build Contract).
3. **Identify gaps**: If critical data is missing (current metric value, experiment results), ask the user before generating the status.
4. **Generate the status**: Use the appropriate template. Fill in every field. Mark unknowns explicitly as "Unknown — data needed" rather than leaving them blank.
5. **Add the editorial note**: State whether the cycle is on track, at risk, or off track, and why.
6. **Offer next steps**: Based on the status, suggest what the user might want to do next — run a gate check, update the SPEC-Lite, schedule a Kill/Merge review, etc.

---

## Integration with Other Skills

This skill reads data but does not modify it. It connects to other FLOW skills as follows:

- **flow-outcome-review**: If the status reveals a cycle needs a deeper metric analysis, recommend running the Outcome Review skill.
- **flow-gate-outcome / flow-gate-discovery**: If the status shows a gate has not been passed that should have been, recommend running the appropriate gate check.
- **flow-kill-merge-agenda**: If the status shows a cycle is off track or approaching its kill condition, recommend preparing a Kill/Merge agenda.
- **flow-discovery-review**: If a Discovery cycle's status shows accumulated signals, recommend running a Discovery Review.
- **spec-lite**: If the status reveals the SPEC-Lite is incomplete or outdated, recommend updating it.

---

## Edge Cases

### No active cycles
If there are no active cycles in any track, say so plainly: "No active cycles found. Either all cycles have completed, or new work needs to go through intake." Suggest running the flow-intake skill if the user has work to start.

### Cycle data is stale
If the most recent data is more than 2 weeks old, flag it: "Warning: the most recent data for this cycle is from <date>. The status below may not reflect current reality. Recommend updating metric data before making decisions."

### Cycle has no SPEC-Lite or Discovery Brief
If a cycle exists in tasks but has no formal artifact, generate a minimal status from whatever is available and flag: "This cycle does not have a formal SPEC-Lite / Discovery Brief. The status below is based on task and decision data only. Recommend creating the appropriate artifact."

### Mixed-mode work
If work appears to span both Discovery and Outcome (e.g., a validated problem with an unvalidated solution approach), generate the status using the primary mode and note the secondary mode concern: "Note: while the problem is validated (Outcome mode), the solution approach is still exploratory. Consider whether a Discovery cycle for the solution is warranted."

### User asks for a cycle that does not exist
If the user names a cycle that cannot be found in any track, say so and list the cycles that do exist. Offer to search more broadly or create a new cycle through intake.

---

## Tips

- **Keep it scannable**: The whole point of this skill is speed. If someone cannot get the gist in 30 seconds, the status is too verbose.
- **Be honest about status**: Overly optimistic status reports are worse than useless — they delay necessary decisions. If a cycle is off track, say so.
- **Use the team's own words**: Pull problem statements, hypotheses, and metric names directly from the artifacts. Do not rephrase them — consistency matters for recognition.
- **Date everything**: Always include the date the status was generated. Stale statuses are dangerous.
- **Flag missing data explicitly**: A status with "Unknown" in a field is more honest and useful than a status with a guess. Missing data is itself a signal — it often means the team has not been measuring.
