> [Prev: Discovery Mode](03-discovery.md) | [Next: Kill Discipline ->](05-kill.md)

# Chapter 4: Outcome Mode

**Outcome mode** is for shipping. The primary risk is failing to ship the right thing.

You enter Outcome when uncertainty is low — you have evidence that the problem is real and the approach is sound. Now you need to execute, measure, and decide whether to keep what you built.

---

## The Cycle Brief (Outcome)

The Cycle Brief in Outcome mode has the same three sections as Discovery, with different contents:

### Bet Section
- **Problem**: What problem are we solving? (Validated through Discovery or already well-understood.)
- **Target metric**: How will we measure success? Be specific: "Activation rate from 12% to 20%" not "improve activation."
- **Kill condition**: What failure looks like. "If activation does not reach 16% within 2 weeks of launch, we stop." Written before building starts.
- **Non-goals**: What is explicitly out of scope. This is where you defend against scope creep. If it is not listed as a goal, it is a non-goal.

### Plan Section
- **Scope**: What will be built. Bounded and specific.
- **Approach**: How it will be built. Technical strategy, not detailed design.
- **Observability plan**: How you will measure the target metric. What instrumentation is needed. You cannot evaluate what you cannot see — plan observation before building.
- **Rollout**: How the change reaches users. Feature flag? Staged rollout? Big bang? The rollout strategy determines how quickly you get evidence.

### Evidence Section
- **Metrics**: Target metric readings, updated as data arrives.
- **Observations**: Qualitative signals — user feedback, support tickets, unexpected behaviors.

The Plan section of the Cycle Brief is the **build contract** — the team's agreement on what will be built and how it will be measured.

---

## G1 Commit — Outcome Checklist

G1 is a blocking gate. The cycle does not start until these are satisfied:

- [ ] Problem is validated (through Discovery, existing data, or domain expertise)
- [ ] Scope is bounded — clear what is in and what is out
- [ ] Kill condition is set — specific, measurable, timebound
- [ ] Observability is planned — you know how you will measure the target metric
- [ ] Non-goals are listed — explicit about what you will not do

> **Anti-pattern: Mode Bleed**
> Starting an Outcome cycle when the problem has not actually been validated. The team skips Discovery because building feels productive. They write a Cycle Brief with a problem statement that is really a hypothesis. Two months later, the feature ships to silence. Mode Bleed is expensive. If you are uncertain about the problem, you are in Discovery, not Outcome — no matter what the brief says.

---

## Building

The team executes within the cycle. Daily work happens however the team works — Kanban, standups, pair programming, AI agents. FLOW does not dictate execution method.

What FLOW does require: the scope stays within the Plan section of the Cycle Brief. If scope needs to change, that is a G2 conversation, not a quiet expansion.

---

## G2 Pulse — Mid-Cycle Check

Run G2 whenever you need a health check. Questions to ask:

- Are metrics on track? If you have early signal, is it pointing toward the target?
- Is scope creeping? Compare current work to the Plan section. If they have diverged, stop and decide.
- Is the kill condition approaching? If the metric is flat or declining, discuss now rather than at G3.
- Is observability working? Are you actually collecting the data you planned to collect?

> **Anti-pattern: Gate Theatre**
> Going through the motions of G2 without actually examining evidence. The team holds the meeting. Someone says "looks good." Everyone nods. No data is reviewed. No kill condition is checked. This is theatre. A real G2 takes 10 minutes and looks at numbers. If your G2 has no numbers, it is not a G2.

> **Anti-pattern: Conviction Decay**
> The kill condition said "kill if activation < 16% after 2 weeks." It has been 2 weeks. Activation is 11%. But the team says "we just need one more sprint" or "the data is noisy" or "we have not marketed it yet." This is conviction decay — the gradual weakening of a pre-committed decision. The kill condition was written when the team was intellectually honest. Honor it.

---

## Observability

You cannot evaluate what you cannot see. Instrument before measuring.

The observability plan in the Cycle Brief answers:
- What metric are we tracking?
- How is it collected? (Analytics, logs, manual count, user interviews)
- How often do we check it?
- What is the baseline before we start?

If you reach G3 and realize you have no data, the cycle was wasted. Observability is not optional — it is the difference between a decision and a guess.

---

## G3 Resolve — Outcome

At the end of the cycle, the team decides. There are three outcomes:

| Outcome | What it means |
|---------|--------------|
| **Kill** | The kill condition was met, or the evidence says the approach is not working. Stop the work. Archive the learning. Free the capacity. |
| **Merge** | The target metric was hit (or exceeded). Ship to production. The feature is now part of the product. |
| **Continue** | Not enough evidence yet. Extend the cycle with clear conditions. **Maximum 2 continues** — after that, you must kill or merge. Unlimited continues is how zombie work stays alive. |

> **Anti-pattern: Sunk Cost Override**
> "We have already invested 6 weeks in this. We cannot kill it now." Yes, you can. The 6 weeks are gone regardless. The question is: should you invest the *next* week? If the evidence says no, stop. Sunk cost is not evidence.

> **Anti-pattern: Zombie Bet**
> A bet that has been "continuing" for months without clear progress. Each cycle ends with "continue" because nobody wants to make the kill decision. The bet is not alive — it is undead. It consumes capacity, produces no outcomes, and blocks new bets from entering. The max-2-continues rule exists to prevent this.

At G3, produce two artifacts:
1. **Kill/Merge Record**: What was decided, what evidence drove the decision, what alternatives were considered.
2. **Learning Entry**: What was learned — about the problem, the approach, the market, the team. This entry survives after the cycle is forgotten. It feeds future bets.

---

> Next: [Kill Discipline ->](05-kill.md)
