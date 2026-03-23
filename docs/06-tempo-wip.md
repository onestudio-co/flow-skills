> [Prev: Kill Discipline](05-kill.md) | [Next: Roles & Rituals ->](07-roles-rituals.md)

# Chapter 6: Tempo & WIP

---

## Tempo: Your Team's Rhythm

Tempo is your team's natural **build-observe-decide** rhythm. It answers: *how long is one cycle?*

Tempo is a number: **cycle length in days.**

- "Our tempo is 2 days" means your team runs 2-day cycles.
- "Our tempo is 14 days" means your team runs 2-week cycles.

That's it. No named profiles. No maturity tiers. Just a number.

### Four Factors

Your tempo is shaped by four things:

| Factor | Question | Example |
|--------|----------|---------|
| **Execution speed** | How fast can you build? | Solo + AI tools = hours. Large team with dependencies = weeks. |
| **Observation requirements** | How long to see results? | Click data = hours. Retention = weeks. Revenue = months. |
| **Coordination overhead** | How many people need to align? | Solo = zero. Cross-department = days. |
| **External constraints** | What's outside your control? | Regulatory review. Client approvals. Manufacturing lead times. |

Your tempo is set by the **slowest factor**, not the fastest. If you can build in a day but need 2 weeks to observe, your tempo is 2 weeks. Building faster doesn't help — you'd just be starting new cycles before you can evaluate old ones.

> **ANTI-PATTERN: Observation Blindness**
>
> What it looks like: The team ships in 2 days, declares victory, and starts the next cycle. Nobody checks whether the last cycle actually worked.
>
> The fix: Your cycle doesn't end when you ship. It ends when you *decide* — and you can't decide without observation data. Set your tempo to include observation time, not just build time.

### Discovering Your Tempo

Teams don't pick a tempo from a menu. They discover it through experience:

1. **Start with a guess.** Most software teams start at 1-2 weeks. Hardware teams start at 4-8 weeks.
2. **Run 3 cycles.**
3. **Retrospect.** Were you rushing decisions because data wasn't ready? Lengthen. Were you idle waiting for a cycle to end? Shorten.
4. **Adjust.** Your tempo will stabilize after 3-5 cycles.

Tempo can change. A team that adopts AI tooling might compress from 2 weeks to 3 days. A team entering a regulated market might extend from 1 week to 4 weeks. Revisit tempo when your constraints change.

---

## WIP Limits: How Much Work At Once

WIP (work in progress) limits cap the number of concurrent cycles your team runs. They exist because:

- **Context switching is expensive.** Each additional cycle adds overhead.
- **Observation capacity is finite.** You can build 10 things in parallel. You cannot meaningfully observe and decide on 10 things in parallel.
- **WIP limits force kills.** "We're at capacity. To start this, what are you willing to stop?" This is the single most powerful question in FLOW.

### Setting WIP Limits

Calibrate to **observation capacity**, not build capacity. The question is: "How many concurrent cycles can this team meaningfully observe and decide on?"

| Team Size | Discovery WIP | Outcome WIP | Total |
|-----------|:------------:|:-----------:|:-----:|
| Solo (1) | 1 | 1 | 1-2 |
| Small (3-8) | 2 | 1-2 | 2-3 |
| Medium (8-15) | 2-3 | 2-3 | 3-5 |
| Large (15+) | 3-4 | 3-5 | 5-8 |

These are starting points. Adjust based on experience.

> **ANTI-PATTERN: Zombie Bet**
>
> What it looks like: The team has 5 WIP slots. All 5 are full. 2 of them haven't been touched in weeks. Nobody wants to kill them because "we might get back to them."
>
> The fix: Any cycle with no activity for more than one tempo length is a zombie. Kill it or actively resume it.

### The WIP Question

When someone wants to start new work and you're at capacity, ask:

**"We're at capacity. To start this, what are you willing to stop?"**

This forces an explicit trade-off. The answer reveals priorities better than any planning session.

---

## FLOW Configuration

Your team's FLOW setup fits on one page:

```
Team: [Name]
Tempo: [X] days
WIP Limits:
  Discovery: [N]
  Outcome: [N]
Rituals:
  Intake Review: [frequency]
  Kill/Merge Review: [frequency]
  Portfolio Review: [frequency]
```

Example:

```
Team: Sentra
Tempo: 3 days
WIP Limits:
  Discovery: 2
  Outcome: 1
Rituals:
  Intake Review: daily (async)
  Kill/Merge Review: end of each cycle
  Portfolio Review: monthly
```

That's the entire configuration.

---

## Two Cadences

FLOW has two rhythms. Don't confuse them.

### Cycle Cadence

Rituals tied to each cycle's lifecycle. They scale with your tempo:

- **At cycle start**: Intake Review — classify, shape, assign incoming work
- **Mid-cycle**: G2 Pulse — is the cycle on track?
- **At cycle end**: G3 Resolve — Kill, Merge, or Continue?

If your tempo is 3 days, these happen every 3 days. If your tempo is 2 weeks, they happen every 2 weeks.

### Portfolio Cadence

Rituals tied to the calendar. They catch slow-moving problems that cycle cadence misses:

- **Portfolio Review** (monthly): Are our bets aligned with strategy? Is WIP inflating? Are we killing enough?

Portfolio cadence doesn't scale with tempo. A team running 2-day cycles still does a monthly portfolio review. Strategic drift happens on calendar time, not cycle time.

---

> Next: [Roles & Rituals ->](07-roles-rituals.md)
