# /flow-start — Begin New Work

> **Trigger**: User wants to start a new cycle. "I want to work on X", "new idea", "start a cycle".
> Walks through intake -> classification -> Cycle Brief creation in one conversational flow.

## Prerequisites

- `.flow/` must exist (if not, route to `/flow` for setup)
- Check WIP: if at capacity, say so. "You're at [N]/[N] WIP. To start this, what are you willing to stop?" If user identifies something to kill, run `/flow-close` on it first.

## Step 1 — Understand the Work

Ask: **"What are you trying to do?"**

Listen for the answer. Don't ask more than necessary. One question at a time.

## Step 2 — Classify Mode

Based on the user's description, determine:

> "Is the primary risk that you build the wrong thing, or that you fail to ship the right thing?"

- High uncertainty, unvalidated problem -> **Discovery**
- Known problem, need to execute -> **Outcome**
- Not sure -> **Discovery** (when in doubt, learn first)

Tell the user which mode and why. One sentence. Move on.

## Step 3 — Build the Cycle Brief

### For Discovery, ask (3 questions max):

1. "What's your hypothesis? What do you believe is true?" -> Hypothesis
2. "What would convince you this is NOT true?" -> Kill condition
3. "What's the cheapest way to test this?" -> Experiment design

Guide toward the experiment hierarchy: conversation > prototype > concierge > production code. Push for cheapest valid option.

### For Outcome, ask (3-5 questions):

1. "What problem are you solving? What evidence do you have?" -> Problem + validation
2. "How will you measure success? What metric?" -> Target metric
3. "What would make you stop?" -> Kill condition
4. "What's IN scope and what's OUT?" -> Scope + non-goals
5. "How will you collect the metric data?" -> Observation plan

## Step 4 — Write the Cycle Brief

Create a file in `.flow/cycles/` named `YYYY-MM-DD-[slug].md` using the Cycle Brief template:

```markdown
# Cycle Brief: [Name]
Date: [today]
Mode: [Discovery / Outcome]
Bet: [spine trace — which bet does this serve?]
Tempo: [from config]

## Hypothesis / Problem
[from Step 3]

## Kill Condition
[from Step 3 — specific, measurable, timebound]

## Experiment / Scope
[from Step 3]

## Observation Plan
[from Step 3 or prompted]

## Evidence
[empty — updated during cycle]
```

## Step 5 — G1 Commit

Run the G1 checklist:

- [ ] Hypothesis/problem stated clearly
- [ ] Kill condition is specific, measurable, timebound
- [ ] Experiment/scope is defined
- [ ] Spine trace exists (even informal)
- [ ] WIP capacity confirmed

If all pass: "G1 Commit passed. Cycle is active. Good luck — run `/flow-check` when you want a pulse."

If any fail: Tell the user what's missing. Help them fix it. Don't block with jargon — just say what's needed.

## Tone

Conversational. 3-5 questions total, not an interrogation. The user should have a running cycle within 5 minutes of typing `/flow-start`.
