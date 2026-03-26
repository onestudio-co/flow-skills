> [Prev: Tempo & WIP](06-tempo-wip.md) | [Next: Getting Started ->](08-getting-started.md)

# Chapter 7: Roles & Rituals

---

## Four Roles

FLOW has four roles. In a solo team, one person plays all four. In a large team, each maps to dedicated people.

### PM — Owns the Bet

The PM decides *what* to learn and *what* to build. They write the Cycle Brief, set the kill condition, and make the kill/merge/continue decision at G3.

**In Discovery**: Leads hypothesis formation. Designs experiments with the Designer. Evaluates evidence.
**In Outcome**: Defines scope and target metric. Runs the cycle. Presents at G3 Resolve.

### Engineer — Owns the Build

The Engineer decides *how* to build. They own implementation, architecture decisions, and observability.

**In Discovery**: Advises on experiment feasibility. Builds prototypes when needed.
**In Outcome**: Leads execution. Implements features. Ensures metrics are instrumented.

### Designer — Owns the Experiment

The Designer owns experiment design across both modes. This isn't just "UX" — it's choosing the cheapest, fastest way to learn.

**In Discovery**: Designs experiments — conversations, mockups, prototypes, usability tests. Picks the cheapest approach.
**In Outcome**: Works alongside the Engineer. Validates UX during development. Tests with users mid-cycle.

### Flow Coach — Owns the Process

The Flow Coach is not a manager. Not a decision-maker. A facilitator.

They ask three questions:
1. "Did we pass the gate?"
2. "What's our WIP?"
3. "What decision did we make?"

**Responsibilities**:
- Facilitates rituals (keeps them short and focused)
- Enforces WIP limits (says "we're at capacity" when others want to start)
- Guards gates (blocks work that hasn't passed)
- Flags anti-patterns (calls out zombie bets, conviction decay, gate theatre)

> **Anti-pattern: Gate Theatre**
>
> What it looks like: Gates always pass. Kill conditions are written but never enforced. G3 always results in "Continue."
>
> The fix: Track gate failure rates. If gates never fail, the team isn't evaluating honestly. The Flow Coach should be able to point to at least one gate that *didn't* pass in the last month.

### Cycle Ownership

**One person owns config per cycle.** Typically the PM or tech lead. They run `/flow-start`, write the Cycle Brief, and are accountable for the kill condition. Other team members contribute through the brief (adding evidence, updating scope) but don't independently set config values like tempo or WIP for the same cycle. This prevents conflicting state when multiple people answer setup questions.

### How Roles Shift Between Modes

| | Discovery | Outcome |
|---|-----------|---------|
| **Who leads** | PM + Designer | PM + Engineer |
| **PM focus** | Hypothesis, evidence | Scope, metric |
| **Engineer focus** | Feasibility, prototypes | Implementation, observability |
| **Designer focus** | Experiment design | UX validation |
| **Flow Coach** | Same across both: gates, WIP, decisions |

---

## Three Gates (Summary)

### G1: Commit
**When**: Before starting a cycle.
**Question**: "Is this bet worth running?"

- [ ] Cycle Brief exists (hypothesis or problem + kill condition + experiment or scope)
- [ ] Spine trace is clear
- [ ] WIP capacity available
- [ ] Kill condition is specific, measurable, and timebound

### G2: Pulse
**When**: Mid-cycle or on-demand.
**Question**: "Is this cycle still on track?"

- [ ] Kill condition hasn't triggered
- [ ] Work is progressing (not stalled)
- [ ] No scope creep beyond the Cycle Brief
- [ ] Observation data is being collected

> **Anti-pattern: Ghost Cycle**
>
> A cycle passes G1 but nobody checks on it. No mid-cycle pulse. No observation. A cycle with no G2 pulse cannot pass G3.

### G3: Resolve
**When**: End of cycle.
**Question**: "Kill, Merge, or Continue?"

- **Kill**: Evidence says stop. Write a Kill/Merge Record + Learning Entry. Free the WIP slot.
- **Merge**: Goal achieved. Ship it. Write records. Free the WIP slot.
- **Continue**: Evidence is promising but incomplete. Max **2 continues** — then Kill or Merge.

> **Anti-pattern: Mode Bleed**
>
> A Discovery cycle starts producing production code. An Outcome cycle drifts into research. Mode transitions require passing through G3 and then G1 for the new mode.

---

## Three Artifacts (Summary)

### 1. Cycle Brief
Minimum three fields:

**Discovery:** `Hypothesis + Kill Condition + Experiment`
**Outcome:** `Problem + Kill Condition + Scope`

### 2. Kill/Merge Record
Written at G3: `Decision + Evidence + Impact`

### 3. Learning Entry
Written after every cycle: `What we tested + What we learned + What this means`

---

## Key Rituals

| Ritual | Purpose | When | Duration |
|--------|---------|------|----------|
| **Intake Review** | Classify incoming work: Discovery or Outcome? | Start of cycle | 15 min |
| **G2 Pulse** | Mid-cycle health check | Mid-cycle | 5-15 min |
| **G3 Kill/Merge** | End-of-cycle decision | End of cycle | 30-45 min |
| **Portfolio Review** | Strategy alignment, WIP health, zombie check | Monthly | 45-60 min |

Keep rituals short. If a ritual takes longer than its time-box, the team either has too much WIP or hasn't prepared.

---

> ## You Now Know Enough to Practice FLOW
>
> **Chapters 1-7 are the complete operating manual.**
>
> Two modes. Three gates. Three artifacts. Four roles. Kill what's not working. Keep what you learn.
>
> **The remaining chapter is a quick-start guide.** Read it when you're ready to run your first cycle. The appendices go deeper on specific topics — read them when you need them, not before.
>
> **FLOW: Decide what to bet on. Run small cycles. Kill what's not working. Keep what you learn.**

---

> Next: [Getting Started ->](08-getting-started.md)
