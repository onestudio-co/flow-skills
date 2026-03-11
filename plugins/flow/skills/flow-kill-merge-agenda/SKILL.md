---
name: flow-kill-merge-agenda
description: >
  Generate the weekly Kill/Merge meeting agenda for FLOW-Outcome. Use this skill whenever someone
  needs to prepare for or run a Kill/Merge ritual, review active Outcome cycles, decide what to
  kill or merge, or compile evidence for portfolio decisions. Trigger on phrases like "kill merge",
  "kill/merge", "weekly review agenda", "prepare the kill merge", "what should we kill",
  "what should we merge", "flow-kill-merge-agenda", "outcome review meeting", "portfolio review",
  "cycle review", "what's ready to kill", "what's ready to merge", "prepare the ritual",
  "kill merge agenda", or any variation of asking to review active Outcome cycles for
  kill/merge/continue decisions.
---

# Flow Kill/Merge Agenda Skill

You generate the weekly Kill/Merge meeting agenda — the most important ritual in FLOW-Outcome. Your job is to compile evidence, propose decisions, and ensure the meeting is evidence-based, not opinion-based. Every recommendation you make must cite specific data. "We feel good about it" is not evidence.

## What the Kill/Merge Ritual Is

The Kill/Merge is a weekly 45-60 minute meeting that reviews all active Outcome cycles. It is the portfolio-level decision point where the team decides the fate of every in-progress cycle. For each cycle, the meeting must produce one of five decisions: Kill, Merge, Simplify, Continue, or Adjust.

### Core Principles

1. **Evidence over opinion.** Every recommendation requires data. No data, no recommendation — only a flag that data is missing.
2. **Killing is success.** Killing work early means the system is working. It freed up capacity before more was wasted. Frame every kill as a win, not a failure.
3. **No deferral without a plan.** "Let's discuss next week" is only acceptable if accompanied by a specific evidence-gathering plan for that week.
4. **WIP is sacred.** The meeting must review WIP status and enforce limits. New work cannot start until existing work is decided.
5. **Decisions are logged.** Every decision made in the meeting is captured with the evidence that supported it.

---

## The Five Recommendations

For each active Outcome cycle, propose exactly one of these recommendations. Each must include a rationale with specific evidence.

### Kill

Evidence shows this cycle is not working. Use when:

- The kill condition from the SPEC-Lite has been met
- The target metric has not moved despite sufficient time and effort
- A fundamental assumption has been invalidated by data
- The cost of continuing exceeds the expected value of success
- External conditions have changed, making the outcome irrelevant

**Evidence standard**: Must cite the specific kill condition and the data that triggered it, OR must cite metric data showing no movement over a meaningful period relative to the cycle length.

### Merge

The feature or outcome is validated and ready to harden. Use when:

- The target metric has been hit or exceeded
- The experiment has produced strong positive results
- The solution is validated and ready to move from Exploration to Production
- User adoption or engagement data confirms the hypothesis

**Evidence standard**: Must cite metric data showing target achievement, OR must cite strong qualitative evidence (e.g., "5 of 8 users completed the flow unprompted in usability testing").

### Simplify

The cycle is working but is over-engineered. Use when:

- The metric is moving but the solution is more complex than needed
- There are components that don't contribute to the metric movement
- Maintenance cost is disproportionate to the value delivered
- A simpler version would achieve the same outcome

**Evidence standard**: Must identify specific components or scope that can be removed while preserving the metric impact.

### Continue

The cycle is on track but evidence is not yet conclusive. Use when:

- Metric trend is positive but hasn't reached the target
- The experiment is still running and hasn't reached statistical significance
- Early signals are encouraging but need more time
- The cycle is within its expected timeline

**Evidence standard**: Must cite the positive trend data and explain why more time will be conclusive. Must specify what "conclusive" looks like and when to expect it.

### Adjust

The cycle is partially working and needs a course correction. Use when:

- Some aspects show positive results while others don't
- The approach is sound but the scope, target, or timeline needs changing
- New information suggests a pivot within the same problem space
- The metric definition itself needs refinement

**Evidence standard**: Must cite what is working (with data), what isn't working (with data), and the specific adjustment proposed.

---

## Agenda Generation Workflow

Follow these steps in order to generate the agenda.

### Step 1: Gather Active Cycles

Identify all items currently in Outcome mode that are in-progress. For each, locate:

- The SPEC-Lite or equivalent specification document
- Any tracking data, dashboards, or metrics logs
- Recent task completions or blockers
- Any experiment results from the past week

If operating inside HQ, check `tasks.md` across tracks for active Outcome-mode work. Check `decisions.md` for recent decisions that affect active cycles. Check `ideas.md` for signals or observations related to active cycles.

### Step 2: Collect Evidence Per Cycle

For each active cycle, compile:

| Data Point | Source | Required? |
|------------|--------|-----------|
| SPEC-Lite summary (problem, metric, kill condition) | SPEC-Lite document | Yes |
| Current metric value | Dashboard, analytics, or manual measurement | Yes |
| Baseline metric value | SPEC-Lite or initial measurement | Yes |
| Target metric value | SPEC-Lite | Yes |
| Days/weeks into the cycle | Start date from SPEC-Lite or task board | Yes |
| Total planned cycle length | SPEC-Lite | Yes |
| Experiment results this week | Team updates, data logs | Yes (even if "none") |
| Blockers or risks surfaced | Standups, task board, team flags | Yes (even if "none") |
| Dashboard snapshots or data points | Analytics tools | If available |
| Qualitative observations | User feedback, team observations | If available |

If any required data is missing, flag it explicitly in the agenda. Missing data is itself a signal — it may indicate the cycle lacks proper instrumentation, which is a problem.

### Step 3: Propose Recommendations

For each cycle, apply this decision logic:

```
1. Is the kill condition met?
   YES → Recommend KILL
   NO  → continue

2. Has the target metric been achieved?
   YES → Recommend MERGE
   NO  → continue

3. Is the metric trending positive but solution is over-complex?
   YES → Recommend SIMPLIFY
   NO  → continue

4. Is the metric trending positive and within timeline?
   YES → Recommend CONTINUE
   NO  → continue

5. Is the metric partially responding (some aspects working)?
   YES → Recommend ADJUST
   NO  → continue

6. Is the metric flat or negative with sufficient data?
   YES → Recommend KILL
   NO  → Flag as INSUFFICIENT DATA, recommend evidence-gathering plan
```

### Step 4: Assemble the Agenda

Use the template below. Order cycles by proximity to their kill condition — those closest to being killed go first. This ensures the most urgent decisions get the most energy.

### Step 5: Add Portfolio Summary

After all individual cycles, compile the portfolio summary table and WIP review.

---

## Agenda Template

Generate the agenda in this exact format.

```markdown
# Kill/Merge Meeting — <YYYY-MM-DD>

**Facilitator**: <Flow Facilitator or EM>
**Duration**: 45-60 min
**WIP Status**: <N active / N limit>

---

## Cycle: <name>
**Owner**: <name> | **Week**: <N of M> | **Mode**: Outcome

**Metric**: <metric name>
| | Baseline | Current | Target |
|---|---------|---------|--------|
| <metric> | <val> | <val> | <val> |

**Evidence this week:**
- <data point or observation>
- <data point or observation>

**Kill condition**: <from SPEC-Lite>
**Kill condition status**: NOT MET / APPROACHING / MET

**Recommendation**: <Kill / Merge / Simplify / Continue / Adjust>
**Rationale**: <2-3 sentences with evidence>

**Decision**: _[to be filled in meeting]_
**Action items**: _[to be filled in meeting]_

---

## Cycle: <next cycle>
...

---

## Portfolio Summary
| Cycle | Week | Metric Trend | Recommendation |
|-------|------|-------------|----------------|
| ... | ... | ↑ ↓ → | ... |

## WIP Review
- Current WIP: <N>
- WIP Limit: <N>
- Violations: <any>

## Decisions Log
_[Fill during meeting — capture every decision with evidence cited]_
```

---

## Evidence Quality Standards

Not all evidence is equal. Apply these standards when evaluating data for recommendations.

### Strong Evidence

- **Quantitative with significance**: "Conversion increased 3pp in 2 weeks with p<0.05" — clear metric movement with statistical backing.
- **Unprompted qualitative signal**: "5 of 8 interviewees mentioned this pain unprompted" — strong for discovery-phase validation.
- **Behavioral data**: "40% of users completed the full flow without guidance" — observed actions, not stated preferences.
- **Comparative data**: "Variant B outperformed control by 12% over 500 sessions" — A/B or comparative experiment results.
- **Kill condition data**: "Metric has been flat for 3 consecutive weeks against a 2-week threshold" — directly addresses the pre-agreed kill condition.

### Weak Evidence

- **Prompted feedback**: "Users said they like it" — prompted responses are unreliable. People say what they think you want to hear.
- **Small sample anecdote**: "One user said this was amazing" — a single data point is not a pattern.
- **Proxy metrics without link**: "Page views increased" — unless page views are the target metric or have a proven causal link to it, this is noise.
- **Time-based only**: "We've been working on this for 3 weeks" — effort is not evidence of value.

### Not Evidence

- **Feelings**: "We feel good about it" — feelings are not data.
- **Authority**: "The VP thinks this is important" — organizational authority does not validate a hypothesis.
- **Effort invested**: "We've put a lot of work into this" — sunk cost. The question is whether continuing will produce results, not whether past effort was large.
- **Consensus without data**: "The team agrees this is working" — agreement without data is groupthink.

When a recommendation cites weak evidence or no evidence, flag it explicitly. The meeting should either: (a) make the decision with acknowledged uncertainty, or (b) defer with a specific plan to gather strong evidence within one week.

---

## Facilitator Guidance

Include these instructions at the top of the agenda for the facilitator.

### Meeting Structure

1. **Open (2 min)**: State WIP status, number of cycles to review, and any pre-meeting context.
2. **Cycle reviews (5-10 min each)**: Start with cycles closest to their kill condition. Present evidence, state recommendation, discuss, decide.
3. **Portfolio summary (5 min)**: Review the full portfolio table. Look for patterns — too many "Continue" decisions may indicate the team is avoiding hard calls.
4. **WIP review (3 min)**: Check WIP against limits. If a cycle was killed or merged, a slot opened — is there queued work ready to start?
5. **Decisions log (5 min)**: Read back all decisions made. Confirm each one. Assign action items.

### Facilitation Rules

- **Time-box strictly.** Each cycle gets 5-10 minutes. If a decision can't be reached in that time, it's because evidence is missing — assign someone to get the evidence and decide next week.
- **Force a decision.** Every cycle must leave the meeting with one of: Kill, Merge, Simplify, Continue (with specific evidence to watch), or Adjust (with specific changes). "Let's discuss next week" without a new evidence plan is not an acceptable outcome.
- **Celebrate kills.** When the team kills a cycle, explicitly acknowledge it as a success. The system caught a bad investment early. The capacity freed up is real and valuable.
- **Watch for "Continue" drift.** If the same cycle has been "Continue" for 3+ weeks without meaningful metric movement, escalate. Continuing without progress is just slow failure.
- **Protect the WIP limit.** Do not start new cycles if the team is at WIP limit. The temptation to "just add one more" is the number one enemy of focus.

### Red Flags During the Meeting

- **No data for a cycle**: The cycle may lack proper instrumentation. Recommend pausing the cycle to set up measurement before continuing.
- **All cycles are "Continue"**: The team may be avoiding hard decisions. Challenge each "Continue" — what specific data would change the recommendation?
- **Kill condition keeps changing**: If the team retroactively adjusts kill conditions to avoid killing work, the ritual has lost its integrity. The kill condition was set at the start for a reason.
- **Emotional resistance to killing**: Remind the team that killing early is cheaper than failing late. The evidence, not attachment, should drive the decision.

---

## Integration with HQ

When operating inside the HQ system:

- **Source data from tracks**: Check `tasks.md` in relevant tracks for active Outcome work and progress updates. Check `decisions.md` for recent decisions that affect cycles. Check `ideas.md` for observations or signals.
- **Record decisions**: After the meeting, capture each Kill/Merge/Simplify/Continue/Adjust decision in the appropriate track's `decisions.md` using the standard decision format.
- **Update tasks**: For killed cycles, move tasks to Completed with a note. For merged cycles, create production hardening tasks. For adjusted cycles, update task descriptions.
- **Track assignment**: Each cycle in the agenda should note which HQ track it belongs to.

---

## Integration with Other FLOW Skills

- **SPEC-Lite**: The SPEC-Lite is the primary source for each cycle's problem, metric, kill condition, and target. Reference it directly in the agenda.
- **Build Contract**: For cycles recommended for Merge, the next step is a production Build Contract.
- **Gate checks**: Kill/Merge decisions are effectively gate checks at the portfolio level. A Kill is a failed gate. A Merge is a passed gate into production.
- **Intake**: When a cycle is killed and a WIP slot opens, the intake skill handles routing new work into the freed slot.

---

## Quick Reference: Recommendation Decision Matrix

```
                    Metric Moving?
                   YES          NO
                ┌──────────┬──────────┐
  Kill          │          │  KILL    │
  Condition  NO │          │  (if     │
  Met?          │          │  enough  │
                │          │  time)   │
                ├──────────┼──────────┤
             YES│  N/A     │  KILL    │
                │  (kill   │          │
                │  anyway) │          │
                └──────────┴──────────┘

                    Metric at Target?
                   YES          NO
                ┌──────────┬──────────┐
  Solution      │ MERGE    │ CONTINUE │
  Complex?   NO │          │          │
                ├──────────┼──────────┤
             YES│ SIMPLIFY │ ADJUST   │
                │ (then    │          │
                │  merge)  │          │
                └──────────┴──────────┘
```

---

## Example Recommendation Writeups

### Kill Example

> **Recommendation**: Kill
> **Rationale**: The SPEC-Lite set a kill condition of "fewer than 10% of users complete onboarding within 2 weeks." After 3 weeks, completion rate is at 6%, down from 8% at baseline. The metric moved in the wrong direction despite two iteration cycles. The fundamental assumption — that a simplified onboarding flow would increase completion — appears invalidated. Recommend killing and redirecting capacity to the retention cycle, which has stronger positive signals.

### Merge Example

> **Recommendation**: Merge
> **Rationale**: Target was to increase checkout conversion from 22% to 28%. Current conversion is 31% sustained over 2 weeks across 1,200 sessions. The result exceeds the target with strong statistical significance (p<0.01). The experiment is conclusive — recommend merging into production and hardening the implementation.

### Continue Example

> **Recommendation**: Continue
> **Rationale**: Search relevance score has improved from 0.62 to 0.71 against a target of 0.80. The trend is positive and consistent week-over-week. We are in week 3 of a planned 5-week cycle. Recommend continuing with the current approach. If the trend holds, we should reach target by week 5. Key data to watch next week: whether the 0.71 score holds under increased query volume from the marketing push launching Tuesday.

---

## Common Pitfalls to Flag

- **Zombie cycles**: Cycles that have been "Continue" for longer than their planned duration without a formal extension decision. Flag these prominently.
- **Evidence-free recommendations**: Any recommendation without specific data citations. Do not let these pass — either find the data or flag its absence.
- **Missing kill conditions**: Cycles that were started without a defined kill condition in the SPEC-Lite. These are dangerous because there is no pre-agreed trigger for stopping.
- **WIP creep**: Gradual addition of "small" cycles that individually seem harmless but collectively exceed the WIP limit.
- **Sunk cost arguments**: Any reasoning that includes "but we've already invested X" as justification for continuing. Past investment is irrelevant — only future expected value matters.
