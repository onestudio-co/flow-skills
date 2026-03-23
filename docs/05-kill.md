> [Prev: Outcome Mode](04-outcome.md) | [Next: Tempo & WIP ->](06-tempo-wip.md)

# Chapter 5: Kill Discipline

> **Read this**: Everyone. This is FLOW's most important and most uncomfortable chapter.

---

## Why Killing Is FLOW's Superpower

Most teams can start work. Very few can stop it.

Every methodology has a way to begin. Scrum has sprint planning. Shape Up has the betting table. SAFe has PI planning. But none of them have a built-in mechanism for *stopping work that isn't working*. The default is always "continue."

FLOW inverts the default. **The default is kill.** Work continues only when evidence supports continuation.

This matters because:

- **Every kill saves resources.** A cycle killed after 3 days frees the team for the next bet. A cycle that limps along for 3 months burns time, money, and morale.
- **Every kill produces learning.** A killed cycle is not a failure — it's a data point. "We learned that nurses don't need scheduling. They need swap requests." That learning is worth more than the code you didn't write.
- **Kills compound.** A team that kills 4 bad bets in a quarter has redirected effort toward what works. A team that lets those 4 bets limp along has zombie cycles and nothing to show.

---

## Writing Good Kill Conditions

A kill condition is a pre-committed statement of what failure looks like. You write it *before* you start the work, when intellectual honesty is cheap.

### The Three Requirements

Every kill condition must be:

1. **Specific** — names an exact metric or observable outcome
2. **Measurable** — you can check it without debate
3. **Timebound** — has a deadline

### Good vs Bad Kill Conditions

| Bad | Why it's bad | Good |
|-----|-------------|------|
| "If users don't like it" | Not measurable | "If fewer than 5 of 20 beta users enable the feature after 7 days" |
| "If it doesn't work" | Not specific | "If error rate exceeds 2% in the first 48 hours" |
| "If we don't see traction" | Not timebound | "If fewer than 100 activations in the first 14 days" |
| "If the market doesn't respond" | All three | "If 0 of 10 contacted buyers request a follow-up within 2 weeks" |

### Kill Conditions by Mode

**Discovery** — test whether the *hypothesis is valid*:
- "If fewer than 3 of 5 interviewed nurses cite scheduling as a top-3 pain point"
- "If the prototype test shows less than 30% task completion rate"
- "If no buyer expresses willingness to pay after 10 conversations"

**Outcome** — test whether the *solution is working*:
- "If the target metric doesn't improve by 10% within 2 weeks of launch"
- "If fewer than 50 users activate the feature in the first 7 days"
- "If bounce rate on the new flow exceeds 60% after 500 sessions"

---

## The 30-Minute Inspection

When a kill condition triggers, the team takes exactly 30 minutes to answer one question: **Is the data valid?**

This is not a debate about whether to continue. This is a data quality check.

1. **Read the kill condition aloud.** (1 minute)
2. **Review the data.** Is the metric accurate? Was the sample biased? Was there an external factor that invalidated the observation? (20 minutes)
3. **Decide.** (9 minutes)
   - **Data is valid** — Kill stands. Write a Kill/Merge Record. Capture a Learning Entry. Move on.
   - **Data is flawed** — Document the specific flaw. Revise the kill condition. Set a short extension (days, not weeks). This is the *only* acceptable path to continuation after a trigger.

**The default is always kill.** The inspection exists to catch bad data, not to rescue doomed work.

> **ANTI-PATTERN: Sunk Cost Override**
>
> What it looks like: The kill condition triggers. The team says "but we've already invested 3 weeks" or "the stakeholder will be upset." The 30-minute inspection becomes a 2-hour negotiation. The kill condition gets softened. The cycle continues.
>
> The fix: Sunk costs are irrelevant. The only question is: *given what we know now, would we start this work today?* If no, kill it.

---

## The Honesty Layer

Kill discipline only works if the team is honest with itself. Three rules:

### 1. State Confidence
When presenting evidence, say how confident you are. "I'm 80% sure this metric is accurate — we've had tracking issues before" is more useful than "the data shows X."

### 2. Cite Sources
"Users don't want this" is an opinion. "4 of 6 interviewed users said they wouldn't use this feature" is evidence. Always distinguish between what you measured and what you believe.

### 3. Flag Uncertainty
If you don't have enough data, say so. "We need 3 more days of observation data before this kill condition can be fairly evaluated" is valid. "Let's just give it more time" is not — because it has no deadline.

> **ANTI-PATTERN: Conviction Decay**
>
> What it looks like: The team wrote a strong kill condition at G1. By week 3, the condition has been quietly weakened. "100 activations in 14 days" became "50 activations in 21 days" became "any positive signal by end of quarter."
>
> The fix: Kill conditions are locked at G1 Commit. The *only* way to change them is through the 30-minute inspection after a trigger — and only if the data itself was flawed.

---

## Learning Capture at Death

Every killed cycle produces a **Learning Entry**. This is not optional. The learning is the return on investment for the cycle.

A Learning Entry has three parts:

1. **What we tested** — the hypothesis or scope, in one sentence
2. **What we learned** — the evidence that led to the kill, in 2-3 sentences
3. **What this means for future work** — how this learning changes what the team does next

Example:

> **What we tested**: Nurses will adopt a scheduling tool if it reduces schedule creation time by 50%.
>
> **What we learned**: 4 of 5 nurses said scheduling creation isn't their pain point — swap request management is. The scheduling tool hypothesis was based on a misunderstanding of the workflow.
>
> **What this means**: Pivot Discovery to swap request management. The scheduling tool should not enter Outcome mode.

Learning Entries accumulate. Over time, they become your team's institutional memory — a record of everything you tried, what worked, and what didn't.

---

> Next: [Tempo & WIP ->](06-tempo-wip.md)
