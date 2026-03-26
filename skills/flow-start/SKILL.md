# /flow-start — Begin New Work

> **Trigger**: User wants to start a new cycle. "I want to work on X", "new idea", "start a cycle".
> Walks through intake -> classification -> Cycle Brief creation in one conversational flow.

## Prerequisites

- `.flow/` must exist (if not, route to `/flow` for setup)
- Check WIP: if at capacity, say so. "You're at [N]/[N] WIP. To start this, what are you willing to stop?" If user identifies something to kill, run `/flow-close` on it first.

## Step 1 — Understand the Work

Ask: **"What are you trying to do?"**

Listen for the answer. Don't ask more than necessary. One question at a time.

## Step 1.5 — Detect Role (optional)

Check `.flow/.local.yaml` for a `role` field. This file is **local-only** (gitignored) — each team member's machine stores their own role independently.

If found, use it silently. If not found, ask:

**"What's your primary role on this? (Developer / PM / Designer / QA / Skip)"**

- If they answer, save to `.flow/.local.yaml`:
  ```yaml
  role: developer
  ```
- This file MUST be in `.gitignore` — never committed. Each person has their own.
- If `.flow/.local.yaml` doesn't exist, create it.
- If they say "Skip" or wear multiple hats, proceed with the universal questions (no role branching).
- Solo founders or multi-role people should skip — don't force a box.

This determines which **follow-up questions** appear in Steps 3, not the core flow.

## Step 2 — Classify Mode

Use these practical questions to determine mode:

1. **"Do you have evidence users need this?"** — Yes = likely Outcome, No = Discovery
2. **"If you gave your best developer 2 weeks, would they know exactly what to build?"** — Yes = Outcome, No = Discovery
3. **"Is there a technical risk you haven't tried before?"** — Yes = Discovery spike needed

You don't need to ask all three. Stop as soon as the mode is clear. When in doubt, default to Discovery.

Tell the user which mode and why. One sentence. Move on.

## Step 3 — Build the Cycle Brief

### For Discovery, ask (3 questions max):

1. "What's your hypothesis? What do you believe is true?" -> Hypothesis
2. "What would convince you this is NOT true?" -> Kill condition
3. "What's the cheapest way to test this?" -> Experiment design

Guide toward the experiment hierarchy: conversation > prototype > concierge > production code. Push for cheapest valid option.

**Role-specific follow-up (Discovery)** — add ONE of these after the core 3:
- **Developer**: "Is there a technical spike needed before you can test this? What's the unknown?"
- **PM**: "Who are the first 3-5 people you'd show this to for feedback?"
- **Designer**: "What fidelity do you need to test this? Sketch, wireframe, or interactive prototype?"
- **QA**: "How will you know the experiment is running correctly? What signals would indicate a broken test vs a failed hypothesis?"

### For Outcome, ask (3-5 questions):

1. "What problem are you solving? What evidence do you have?" -> Problem + validation
2. "How will you measure success? What metric?" -> Target metric
3. "What would make you stop?" -> Kill condition
4. "What's IN scope and what's OUT?" -> Scope + non-goals
5. "How will you collect the metric data?" -> Observation plan

**Role-specific follow-up (Outcome)** — add ONE of these after the core 5:
- **Developer**: "What's the riskiest technical piece? Should we timebox a spike first?"
- **PM**: "Who owns the metric collection? How often will you check it?"
- **Designer**: "What existing patterns can you reuse? Where does this need new design work?"
- **QA**: "What's the acceptance criteria? How will you verify the observation plan is collecting accurate data?"

## Step 4 — Write the Cycle Brief

Create a file in `.flow/cycles/` named `YYYY-MM-DD-[slug].md` using this template:

```markdown
# Cycle Brief: [Name]
Date: [today]
Mode: [Discovery / Outcome]
Owner: [person who ran /flow-start]
Bet: [spine trace — which bet does this serve?]
Tempo: [from config]

## Hypothesis / Problem
[from Step 3]

## Kill Condition
[MUST have all three parts]:
- **Metric**: [what you're measuring]
- **Threshold**: [specific number or state that triggers kill]
- **Deadline**: [by when — exact date]

## Experiment / Scope
[from Step 3]

## Observation Plan
[from Step 3 or prompted]

## Evidence
[empty — updated during cycle]
```

## Step 5 — Validate Before G1

Before passing G1, verify the Cycle Brief. Show it to the user and ask: **"Does this look right?"**

Check these requirements:
- [ ] Kill condition has a **metric** (what you're measuring)
- [ ] Kill condition has a **threshold** (specific number)
- [ ] Kill condition has a **deadline** (exact date)
- [ ] Hypothesis/problem is stated in one clear sentence
- [ ] Experiment/scope is defined
- [ ] Spine trace exists (even informal)
- [ ] WIP capacity confirmed

**If kill condition is missing any of the 3 parts**, do NOT pass G1. Tell the user what's missing and help them fix it:
- Missing metric: "What would you measure to know if this is working?"
- Missing threshold: "What number would make you stop?"
- Missing deadline: "By when do you need to see results?"

### Examples of good kill conditions:

**Discovery**: "If fewer than 5 of 20 beta users enable auto-summaries after 7 days (by April 3), kill."
- Metric: beta user enable rate
- Threshold: fewer than 5 of 20
- Deadline: April 3 (7 days)

**Outcome**: "If abandon rate doesn't drop below 40% within 10 days of launch (by April 10), kill."
- Metric: onboarding step 3 abandon rate
- Threshold: below 40%
- Deadline: April 10

## Step 6 — G1 Commit

If all checks pass AND user confirms the brief looks right:

"G1 Commit passed. Cycle is active. Good luck — run `/flow-check` when you want a pulse."

If any fail: Tell the user what's missing. Help them fix it. Don't block with jargon — just say what's needed.

## Tone

Conversational. 3-5 questions total, not an interrogation. The user should have a running cycle within 5 minutes of typing `/flow-start`.
