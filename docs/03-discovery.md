> [Prev: The Decision Spine](02-spine.md) | [Next: Outcome Mode ->](04-outcome.md)

# Chapter 3: Discovery Mode

**Discovery mode** is for learning. The primary risk is building the wrong thing.

You enter Discovery when uncertainty is high — you do not yet know if the problem is real, the solution is right, or the approach will work. The goal is evidence, not code.

---

## How Work Enters

Work arrives from anywhere: a stakeholder request, a customer complaint, a market signal, a hunch. Before it becomes a cycle, ask:

> **"Is the primary risk that we build the wrong thing, or that we fail to ship the right thing?"**

If the answer is "build the wrong thing" — this is Discovery. Write a Cycle Brief and go through G1 Commit.

If the answer is "fail to ship" — this is Outcome. See [Chapter 4](04-outcome.md).

If the answer is "both" — split the work. Known parts go to Outcome. Unknown parts go to Discovery.

---

## The Cycle Brief (Discovery)

The Cycle Brief is the living document for the cycle. In Discovery, it has three sections:

### Bet Section
- **Hypothesis**: "We believe [users] have [problem] because [evidence/assumption]."
- **Kill condition**: A specific, measurable, timebound statement of what failure looks like. Written before emotional attachment forms. Example: "If fewer than 3 of 5 interviewed nurses cite scheduling as a top-3 pain point, we stop."
- **Spine trace**: Which bet does this cycle serve?

### Plan Section
- **Experiment design**: What will you do to test the hypothesis?
- **Method**: How will you collect evidence?
- **Duration**: How long will the experiment run?

### Evidence Section
- **Observations**: Raw data, quotes, metrics — updated as evidence arrives.
- **Interpretation**: What the evidence means. Updated at G2 and G3.

---

## G1 Commit — Discovery Checklist

G1 is a blocking gate. The cycle does not start until these are satisfied:

- [ ] Hypothesis is stated in falsifiable form
- [ ] Kill condition is defined — specific, measurable, timebound
- [ ] Experiment is designed
- [ ] Cheapest valid experiment has been chosen (see hierarchy below)
- [ ] Spine trace is clear

---

## The Experiment Hierarchy

Always pick the cheapest valid way to test your hypothesis:

1. **Conversation** — Talk to people. Interviews, surveys, five-minute chats. Cost: hours.
2. **Prototype** — A mockup, wireframe, or clickable demo. Shows the idea without building it. Cost: days.
3. **Concierge** — Deliver the service manually, pretending the product exists. Cost: days to weeks.
4. **Production code** — Build the real thing. Cost: weeks to months. **Always the last resort.**

Moving down the hierarchy before exhausting the level above is waste. If a conversation can disprove your hypothesis, do not build a prototype. If a prototype can, do not write code.

---

## G2 Pulse — Mid-Cycle Check

G2 is not a formal ceremony. Run it whenever you need a health check — mid-cycle, on-demand, or when something feels off.

Questions to ask:
- Is the kill condition triggered? If yes, go to G3 now.
- Is evidence accumulating? If not, is the experiment actually running?
- Should we pivot the experiment design?
- Are we still in Discovery, or has this become Outcome work?

> **Anti-pattern: Ghost Cycle**
> A cycle that exists on paper but has no active experiment running. Nobody is collecting evidence. The brief was written, G1 was passed, and then... nothing. Ghost Cycles consume WIP slots without producing learning. If a cycle has no experiment activity for more than half its planned duration, it is a ghost. Kill it or restart it.

> **Anti-pattern: Observation Blindness**
> Running the experiment but not actually looking at the evidence. The data is there — user interviews were conducted, metrics were collected — but nobody reads them. The team keeps building because building feels productive. Observation is not optional. If you skip it, you are guessing, not learning.

---

## G3 Resolve — Discovery

At the end of the cycle, the team decides. There are five outcomes:

| Outcome | What it means |
|---------|--------------|
| **Continue** | More evidence needed. Extend the cycle with a revised experiment. Max 1 continue before forcing a different outcome. |
| **Refine** | The hypothesis needs adjustment based on evidence. Rewrite the hypothesis, update the kill condition, run another cycle. |
| **Pivot** | The problem is real but the approach is wrong. New hypothesis, new experiment, same bet. |
| **Stop** | The kill condition was met or the evidence says the problem is not worth solving. Archive the learning. Free the capacity. |
| **Escalate** | The discovery revealed something bigger than the original bet. Escalate to the strategy level for a new bet. |

At G3, produce a **Kill/Merge Record** (what was decided and why) and a **Learning Entry** (what was learned, regardless of outcome).

---

## Sidebar: Capability Triggers

Sometimes an external shift — a new technology, a regulatory change, a competitor move — means old assumptions need retesting. When this happens:

1. Identify which active bets are affected by the shift.
2. For each affected bet, write a Cycle Brief with a hypothesis: "Given [new capability], we believe [old assumption] may no longer hold."
3. Run a bounded reassessment (timebox it — 1-3 days). Do not let capability triggers become open-ended research.
4. At G3, decide: does this change our bet, our strategy, or neither?

This is not a standing process. It is a recipe you run when the ground shifts under you.

---

> Next: [Outcome Mode ->](04-outcome.md)
