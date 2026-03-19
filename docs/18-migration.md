> Part VI: Adoption | [← Previous](17-roles.md) | [Next →](19-organizational-change.md)

# Chapter 17: Migration to FLOW

> *Panel-reviewed: Meeting #7 (2026-03-19)*
> **Read this**: PMs, Flow Coaches, team leads planning FLOW adoption. Find your starting framework.

---

## Starting Point Assessment

Before migrating, answer honestly: where is your team today?

| Question | Signal |
|----------|--------|
| Do you have a way to distinguish learning work from building work? | If no → you need modes ([Chapter 2](02-mental-model.md)) |
| Can you trace any piece of work to a strategic goal? | If no → you need the spine ([Chapter 3](03-decision-spine.md)) |
| Can your team say "no" to new requests with confidence? | If no → you need intake + admission control ([Chapter 4](05-intake.md)) |
| When was the last time you killed a feature or project? | If never → you need kill conditions |
| How many things are "in progress" right now? | If >5 per team → you need WIP limits ([Chapter 12](13-wip-limits.md)) |

---

## Migration by Starting Framework

### From Scrum
**What maps directly**: Sprint cadence → Outcome cycle cadence. Sprint Review → Outcome Review. Product Backlog → Intake queue.
**What changes**: Add mode classification — not everything is a user story. Discovery work gets a Discovery Brief, not a PBI. Sprint goals now include kill conditions. Velocity tracking is replaced by target metric tracking.
**What's new**: Discovery mode, kill conditions, the Decision Spine, shaping.
**Week-by-week**: Keep running sprints. In Week 1, add mode classification to refinement. In Week 3, write your first Discovery Brief for an uncertain item. In Week 5, add kill conditions to sprint goals. In Week 8, run your first Kill/Merge meeting.

### From SAFe
**What maps directly**: PI Planning → spine alignment. WSJF → intake classification. ARTs → team topology.
**What changes**: Add team-level Discovery mode (SAFe's "Explore" state is portfolio-level — bring it down). Replace WSJF deprioritization with pre-committed kill conditions that actually stop work.
**What's new**: Discovery Briefs, kill conditions at team level, Build Contracts, simplified gate structure.
**Week-by-week**: At your next PI Planning, classify each feature as Discovery or Outcome. Pilot FLOW's artifacts with one squad for one PI. Expand to other squads based on results.

### From Shape Up
**What maps directly**: Shaping → FLOW shaping ([Chapter 4](05-intake.md)). Betting table → spine check. 6-week cycles → Outcome cycles (flex the length).
**What changes**: Make shaping a team activity, not senior-only. Add evidence-based kill conditions alongside appetite (whichever triggers first). Add formal Discovery mode for uncertain work.
**What's new**: Discovery Briefs (shaping produced bets — FLOW adds hypothesis testing), Gate structure, Build Contract, Learning Archive.
**Week-by-week**: In your next cycle, add a kill condition to each pitch. For the next uncertain pitch, run a 2-week Discovery cycle instead of shaping it and betting on it directly.

### From Waterfall / PRINCE2
**What maps directly**: Stage gates → FLOW gates. Feasibility study → Discovery mode. SOW → Build Contract. Change Control Board → Kill/Merge + intake authority.
**What changes**: Introduce shorter cycles WITHIN your existing stages. Instead of one long feasibility → build → test sequence, run multiple Discovery and Outcome cycles within each stage.
**What's new**: Mode classification, kill conditions, experiment hierarchy, WIP limits.
**Week-by-week**: In your next project stage, run one Discovery cycle (2-4 weeks) instead of a 3-month feasibility study. Use the Discovery Brief format. If it works, expand.

### From Kanban
**What maps directly**: Flow-based execution stays. Board stays. WIP limits (you already have these!).
**What changes**: Add mode classification to your board ("Discovery" and "Outcome" columns or tags). Add kill conditions to cards. Add spine mapping ("why is this card on the board?").
**What's new**: Discovery Briefs, SPEC-Lites, gates, Kill/Merge ritual.
**Week-by-week**: Add a "Mode" tag to your board this week. Next week, write a Discovery Brief for the most uncertain card. In Week 4, run your first Kill/Merge review.

### From Nothing (No Methodology)
**What maps directly**: Your intuition maps to FLOW's informal/mental mode. Your gut feeling about what to build? That's an implicit hypothesis. Your sense that something isn't working? That's an untriggered kill condition.
**What changes**: Make the implicit explicit. Write down your spine (vision, strategy, bet). Write a minimum Discovery Brief (3 fields) before starting. Set kill conditions before building.
**What's new**: Everything. But start small.
**Week-by-week**: Week 1 — write your spine on a sticky note. Week 2 — write a minimum Brief for your next idea. Week 3 — set a kill condition. Week 4 — review: should you keep going or kill it? You're now doing FLOW.

---

## Role Transformation — Week by Week

Changing methodology is one thing. Changing how people see their jobs is another. Here's a phased approach:

**Weeks 1-2 — Awareness**: Share [Chapter 16](17-roles.md) (Roles & Team Topology) with the team. Each person reads their "From → To" transformation. Facilitate a discussion: "What excites you? What scares you?" Address the fear head-on: nobody is being replaced. Expertise is being redirected.

**Weeks 3-4 — First Practice**: Each function practices their new role in one cycle:
- QA defines a quality kill condition (instead of writing test cases)
- Data Analyst interprets one experiment result (instead of pulling numbers)
- Designer designs one experiment (instead of creating mockups for handoff)
- DevOps instruments one metric (instead of waiting for "ready to deploy")
- BA writes one Discovery Brief section (instead of a requirements doc)

**Weeks 5-8 — Integration**: The team runs one complete cycle with everyone in their FLOW functions. The Flow Coach facilitates gates and enforces the "no handoffs" principle. Debrief after: "What worked? What was awkward? What do we need more practice on?"

**Weeks 9-12 — Normalization**: FLOW functions feel natural. The "From → To" table starts to feel like "old way vs. how we work now." The team self-corrects when they slip into old patterns ("Wait — we're doing a handoff. Let's collaborate instead.")

**Critical success factor**: Leadership must visibly support role transformation. If a QA engineer defines a quality kill condition and gets told "just write the test cases," the transformation dies. [Chapter 18](19-organizational-change.md) covers the organizational change management needed.

---

## Common Migration Failures

**1. Big Bang Adoption**: Trying to adopt all of FLOW at once. Start with ONE concept (modes, or kill conditions, or spine). Add the rest incrementally.

**2. Process Without Culture**: Adding FLOW artifacts without changing the culture around killing. If killing is punished, kill conditions are theater.

**3. Renaming Without Changing**: Calling your sprint a "cycle" and your backlog an "intake queue" without actually classifying work by mode or setting kill conditions.

**4. Pilot Without Support**: Running a FLOW pilot on one team without leadership awareness. When the pilot team kills a feature, leadership asks "why did you stop working?" Cover: [Chapter 18](19-organizational-change.md).

**5. All Discovery, No Outcome**: Teams fall in love with Discovery because learning feels safe and productive without shipping. If your team hasn't entered Outcome mode in 6 weeks, they're avoiding the hard part.

---

## The 30-Day Health Check

After 30 days of FLOW adoption, check:

- [ ] **Mode classification is happening.** New work is explicitly labeled Discovery or Outcome.
- [ ] **At least one Discovery Brief was written.** The team has tried structured learning.
- [ ] **At least one kill condition was set.** The team has pre-committed to stopping.
- [ ] **At least one kill was executed** (or the team has work they WOULD kill). Killing is normalized.
- [ ] **WIP is visible.** The team knows how many concurrent cycles they have.
- [ ] **The spine exists.** Someone can trace any active work to a strategy.

If 4+ items are checked: you're on track. If 2-3: push harder on the missing items. If 0-1: the migration hasn't started — go back to Week 1.

---

*Next: [Chapter 18 — Organizational Change: Selling FLOW →](19-organizational-change.md)*
