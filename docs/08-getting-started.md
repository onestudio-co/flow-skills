> [Prev: Roles & Rituals](07-roles-rituals.md) | [Appendices ->](appendix-a-agentic.md)

# Chapter 8: Getting Started

> **Read this**: When you're ready to run your first cycle. Not before.

---

## Your First Cycle in 10 Minutes

### Step 1: Pick One Real Piece of Work

Not a practice exercise. Something your team is actually going to do this week. The smaller, the better for a first cycle.

### Step 2: Classify It

Ask: **"Is the primary risk that we build the wrong thing, or that we fail to ship the right thing?"**

- Build the wrong thing -> **Discovery**
- Fail to ship -> **Outcome**
- Not sure -> **Discovery** (when in doubt, learn first)

### Step 3: Write a Cycle Brief

Three fields. Five minutes.

**Discovery example:**
```
Hypothesis: Developers on teams of 5-20 will use AI-generated PR summaries
            if summaries save >5 min per review.
Kill Condition: If fewer than 5 of 20 beta users enable auto-summaries
               after 7 days, kill.
Experiment: Ship basic summary feature to 20 Discord beta users.
           Track daily enable/disable rates.
```

**Outcome example:**
```
Problem: Users drop off at onboarding step 3 (62% abandon rate, 4 support
        tickets this week).
Kill Condition: If abandon rate doesn't drop below 40% within 10 days
               of launch, kill.
Scope: Redesign step 3. Simplify form from 8 fields to 3. NOT redesigning
      steps 1-2 (separate cycle).
```

### Step 4: Pass G1 Commit

Ask yourself (or your team) the checklist:
- Does the Cycle Brief exist? (You just wrote it.)
- Does it trace to strategy? (Even informally — "this supports our goal of reducing churn.")
- Is there WIP capacity? (Is the team already overloaded?)
- Is the kill condition specific, measurable, and timebound?

If yes to all four, you've passed G1. Start the work.

### Step 5: Do the Work

Build. Experiment. Ship. Whatever the cycle calls for.

Mid-cycle, do a quick G2 Pulse: Is the kill condition still valid? Are we on track? Any scope creep?

### Step 6: G3 Resolve

The cycle ends. Look at the evidence.

- **Kill condition triggered?** -> Run the 30-minute inspection. If data is valid, kill it. Write a Kill/Merge Record.
- **Goal achieved?** -> Merge it. Write a Kill/Merge Record.
- **Promising but incomplete?** -> Continue with a revised brief and new deadline. (Max 2 continues.)

### Step 7: Write a Learning Entry

Kill or merge, you learned something. Write it down:

```
What we tested: AI PR summaries for small teams
What we learned: 12 of 20 users enabled it. But 8 disabled after 3 days
                because summaries were too long. Length, not existence,
                is the issue.
What this means: Next cycle should focus on summary length/density,
                not new summary types.
```

Done. You just ran a FLOW cycle.

---

## Coming From Another Framework?

### Coming from Scrum?

| Scrum | FLOW | What changes |
|-------|------|-------------|
| Sprint | Cycle | Cycles aren't fixed-length by default. Your tempo might be 3 days or 3 weeks. |
| Sprint Goal | Bet | Bets have kill conditions. Sprint goals don't. |
| Sprint Review | G3 Resolve | G3 has three outcomes (Kill/Merge/Continue), not just "demo and discuss." |
| Sprint Backlog | Intake queue | Items get classified as Discovery or Outcome before entering a cycle. |
| Velocity | Kill rate + merge rate | How fast you learn and stop bad work matters more than how fast you ship. |

**Start by**: Adding a kill condition to your next sprint goal.

### Coming from Shape Up?

| Shape Up | FLOW | What changes |
|----------|------|-------------|
| Pitch | Cycle Brief | Cycle Briefs have explicit kill conditions. Pitches have appetite but no failure criteria. |
| Appetite (6 weeks) | Tempo (config value) | Your tempo is based on your constraints, not a default. |
| Betting Table | G1 Commit | G1 also checks spine trace and WIP capacity. |
| Cool-down | Between cycles | Same idea — breathing room between focused work. |

**Start by**: Adding a kill condition to your next pitch.

### Coming from SAFe?

| SAFe | FLOW | What changes |
|------|------|-------------|
| PI (Program Increment) | Portfolio cadence | Monthly portfolio review replaces quarterly PI planning. |
| Feature | Bet | Bets trace to strategy through the spine. |
| Enabler | Discovery cycle | Exploratory work gets its own mode with its own gates. |
| ART Sync | G2 Pulse | Lighter, more frequent. |

**Start by**: Classifying your next PI's features as Discovery or Outcome.

### Coming from Nothing?

1. **Start with one cycle.** Pick the most uncertain thing on your plate. Write a 3-field Cycle Brief.
2. **Set a tempo.** How long will this take to build and observe? That's your first tempo estimate.
3. **Run it.** At the end, ask: Kill, Merge, or Continue?
4. **Add structure when you feel pain.** Don't adopt everything at once.

---

## Common First-Month Mistakes

**1. Kill conditions that are too easy.**
"If zero users sign up" is a catastrophe condition, not a kill condition. Set the bar at what would actually make you change direction.

**2. Skipping G2 Pulse.**
Mid-cycle check feels optional when you're busy. Then you arrive at G3 with no data. A 2-minute async check prevents this.

**3. Never killing anything.**
If your first 5 cycles all result in Merge, either your kill conditions are too easy or you're only picking safe bets.

**4. Overcomplicating the Cycle Brief.**
Three fields. Five minutes. If it takes an hour, you're writing a PRD, not a brief.

**5. Treating tempo as fixed.**
Your tempo will change. When you add AI tools, tempo compresses. Revisit every few months.

**6. WIP limits with no enforcement.**
Writing "WIP: 3" means nothing if nobody says "no" to the fourth cycle.

---

*You're ready. Pick a piece of work. Write a Cycle Brief. Run a cycle. Kill or merge. Learn.*

*For deeper topics, see the [Appendices](appendix-a-agentic.md).*
