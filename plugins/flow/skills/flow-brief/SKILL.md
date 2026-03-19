# FLOW Discovery Brief — Write a Hypothesis to Test

> **Trigger**: Work has been classified as Discovery (via `/flow-intake` or directly). Time to write a falsifiable hypothesis.
> **Reference**: Chapter 5 (The Discovery Brief), Chapter 6 (Experiments), Chapter 7 (Discovery Decisions)

## What This Skill Does

Guides you through writing a Discovery Brief — a one-page hypothesis document that defines what you're trying to learn, how you'll learn it, and when you'll stop.

> **Coaching note for newcomers**: A Discovery Brief is NOT a requirements doc, project plan, or business case. It's a falsifiable hypothesis with a pre-committed kill condition. Think of it as a scientific experiment proposal for product work. The brief draws from Lean UX ("We believe [capability] will result in [outcome]") but adds FLOW's distinctive contribution: the kill condition and gate mechanism.

## Step 1 — Detect Team Size

Ask: "Are you working solo or with a team?"

**Solo / Collapsed mode** → 3-field minimum brief (faster, you hold all the context)
**Team (2+)** → 5-field full brief (alignment across multiple people)

## Step 2 — Guide Through Each Field

### Full Brief (5 fields — for teams)

**Field 1: Problem Statement**
> What problem are we investigating? Who has it? What evidence suggests it exists?

Help the user be specific. Not "users are unhappy" but "nurses at Hospital X spend 40 min/shift on scheduling — evidence: 12 support tickets in Q1."

Ask: "Who specifically has this problem? What evidence do you have that it exists?"

**Field 2: Hypothesis**
> What do we believe? This must be falsifiable.

Teach the hypothesis formula:

> **"We believe [specific users] have [specific problem] because [observable reason]."**

Examples:
- BAD: "Users will love our scheduling feature" (not falsifiable, no segment, no mechanism)
- GOOD: "We believe nurses at 50+ bed hospitals struggle with shift scheduling because they coordinate via WhatsApp groups with 15+ participants"

Ask: "Who are the specific users? What's the specific problem? What's the observable reason you believe this exists?"

**Field 3: Experiment Design**
> How will we test this? What's the cheapest valid experiment?

Point to the experiment menu (Ch 6): Conversation → Desk Research → Mockup → Prototype → Concierge → Wizard of Oz → Limited Build. Production code is always a LAST RESORT.

Ask: "What's the cheapest way to get a valid answer? Could a conversation answer this before we build anything?"

**Field 4: Kill Condition**
> When do we stop? What evidence would prove us wrong?

This is FLOW's most distinctive feature. The kill condition must be:
- **Pre-committed** (written before the experiment starts)
- **Specific** (not "if users don't like it")
- **Measurable** (a number, a threshold, a deadline)

Teach calibration (Ch 8 — Kill Condition Calibration):
1. **Baseline-relative**: "X% improvement over current state"
2. **Minimum viable signal**: "At least N users do Y"
3. **Industry benchmark**: "Within Z% of industry average"
4. **Compliance-driven**: "Must meet regulatory threshold X"

> **Coaching note**: Your first kill conditions will be wrong. That's expected. Calibrate after 3 cycles: did it trigger when it should have? Did it miss a project that should have been killed? The skill improves with practice.

Ask: "What result would make you stop? Be specific — a number, a threshold, a timeframe."

**Field 5: Success Signal**
> What does validated look like? Not "it works" — specific, measurable.

This is the inverse of the kill condition. Not just "not killed" but "here's what good looks like."

Ask: "If everything goes perfectly, what specific evidence would you see?"

### Minimum Brief (3 fields — solo / collapsed mode)

For solo founders or single-person context, only require:
1. **Hypothesis** (with the formula)
2. **Kill Condition** (pre-committed, specific)
3. **Experiment** (cheapest valid test)

The Problem Statement and Success Signal are implicit when one person holds all context.

## Step 3 — Assemble the Brief

Produce the Discovery Brief in this format:

```markdown
## Discovery Brief — [Title]
**Date**: YYYY-MM-DD
**Author**: [Name]
**Spine trace**: [Vision → Strategy → Bet]

### Problem Statement
[From Field 1]

### Hypothesis
"We believe [users] have [problem] because [reason]."

### Experiment Design
[From Field 3]

### Kill Condition
"If [metric] doesn't reach [threshold] within [timeframe], kill."

### Success Signal
[From Field 5]
```

## Step 4 — Run Gate D1 Automatically

Before the team invests time, validate the brief:

### D1 Checklist
- [ ] Problem is specific (not "users are unhappy")
- [ ] Hypothesis is falsifiable (there exists an outcome that would disprove it)
- [ ] Experiment is designed (team knows what they'll do and measure)
- [ ] Experiment is the cheapest valid option (considered conversations before prototypes)
- [ ] Kill condition is pre-committed, specific, and measurable
- [ ] Success signal is defined (full brief only)
- [ ] Spine traces to an active bet

If any item fails, give specific feedback on how to fix it. Don't just say "fail" — explain what good looks like.

## Step 5 — Chain to Next Skill

> "Brief passes D1. Ready to design the experiment in detail? Run `/flow-experiment`."

If D1 fails: "Let's fix [specific item] first. [Specific guidance on how to fix it.]"

## Agency Sidebar

> **Pricing Discovery as a deliverable**: A Discovery Brief + experiment is a paid engagement. Scope it as "Discovery Phase — deliverable is a validated/invalidated hypothesis with experiment results and recommendation." Price range: $5K-20K depending on experiment complexity. Frame it as risk reduction: "This $10K Discovery Phase could save you $200K in wasted development."

## Hardware Sidebar

> **Hardware Discovery Briefs** may reference desk research, CAD simulations, or teardown analysis as experiments — not just user conversations. The hypothesis might be about technical feasibility ("We believe this controller can handle 50C ambient") not just user desirability. Experiment costs are higher — $3K-10K for a functional prototype vs. $0 for a conversation.

---

## Manual Mode Checklist

If writing a Discovery Brief without this skill:

- [ ] Determine team size (solo = 3 fields, team = 5 fields)
- [ ] Write Problem Statement with specific evidence
- [ ] Write hypothesis using formula: "We believe [users] have [problem] because [reason]"
- [ ] Design the cheapest valid experiment (Ch 6 experiment menu)
- [ ] Write kill condition BEFORE running the experiment — specific, measurable, timebound
- [ ] Write success signal (what validated looks like — not just "not killed")
- [ ] Check spine trace
- [ ] Run Gate D1 checklist (Ch 5)
- [ ] If D1 passes → design experiment in detail (Ch 6)
- [ ] If D1 fails → revise the weak fields and re-check
