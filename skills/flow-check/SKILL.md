# /flow-check — Evaluate Progress

> **Trigger**: User wants to check on a cycle, run a gate, review progress, or reconcile untracked work.
> Handles G2 Pulse, G3 Resolve, and reconciliation in one skill.

## Step 1 — Identify What to Check

Read `.flow/cycles/` for active cycles.

**If no active cycles**: "No active cycles found. Want to start one with `/flow-start`?"

**If one active cycle**: Check that one. No need to ask which.

**If multiple active cycles**: List them and ask which to check. Or if the user named one, use that.

## Step 2 — Determine Gate Type

Based on context:

- **Cycle is mid-way through tempo** -> G2 Pulse
- **Cycle has reached end of tempo** -> G3 Resolve
- **User says "gate", "review", "kill", "merge"** -> G3 Resolve
- **User says "pulse", "check", "how's it going"** -> G2 Pulse
- **User says "reconcile" or "untracked work"** -> Reconciliation mode (Step 5)

## Step 3 — G2 Pulse

Ask three questions:

1. **"What does the data say so far?"**
   - If user has data -> Evaluate against kill condition. Is it trending toward trigger?
   - If user has no data -> Flag: "No observation data yet. Is the experiment running? Is instrumentation in place?"

2. **"Is anything blocking progress or observation?"**
   - Blockers -> Suggest action or escalation
   - No blockers -> Move on

3. **"Are we still testing the original hypothesis, or has scope shifted?"**
   - Scope shifted -> Flag Mode Bleed risk. "The Cycle Brief says X, but you're describing Y. Want to update the brief or refocus?"
   - On track -> Confirm and close

**Output**: Update the Evidence section of the Cycle Brief with any new data. Note the Pulse date.

"Pulse complete. Cycle looks [healthy/concerning/at risk]. [Specific observation]. Next check: [when]."

## Step 4 — G3 Resolve

This is the kill/merge decision. Walk through it:

### 4a. Present Evidence

Read the Cycle Brief's Evidence section + kill condition. Summarize:
- Kill condition status: triggered / not triggered / approaching
- Data maturity: enough to decide?
- Key observations

### 4b. Make the Decision

Ask: "Based on this evidence, the decision is: **Kill**, **Merge**, or **Continue**?"

**If Kill:**
- If kill condition triggered: validate with 30-minute inspection logic. "Is the data valid? Any external factors that invalidated the observation?"
- Write Kill/Merge Record to `.flow/cycles/[slug]-record.md`
- Prompt for Learning Entry
- Mark cycle as closed
- "Cycle killed. WIP slot freed. Learning captured."

**If Merge:**
- Confirm target metric was hit
- Ask: "What's the maintenance cost of keeping this?"
- Write Kill/Merge Record
- Prompt for Learning Entry
- Mark cycle as closed
- "Cycle merged. Feature is live. Learning captured."

**If Continue:**
- Check: is this continue #1 or #2? If #2, warn: "This is the last continue. Next G3 must be Kill or Merge."
- Require: revised kill condition + new deadline
- Update Cycle Brief with revisions
- "Cycle extended. Revised kill condition set. Next G3: [date]."

### 4c. Write Artifacts

**Kill/Merge Record:**
```markdown
# Kill/Merge Record
Cycle: [link]
Date: [today]
Decision: [Kill / Merge / Continue #N]
Evidence: [summary]
Rationale: [why]
```

**Learning Entry:**
```markdown
# Learning Entry
Date: [today]
Cycle: [link]
What we tested: [one sentence]
What we learned: [2-3 sentences]
What this means: [future implications]
```

## Step 5 — Reconciliation Mode

When the user says "reconcile" or asks about untracked work:

1. Scan recent work (git log, task files, session history) for work that shipped without a cycle
2. For each item, classify:
   - **Dismiss**: Operational, one-time, no validation needed
   - **Acknowledge**: Clearly working, no retroactive cycle needed
   - **Activate**: Shipped but unvalidated — needs a retroactive Cycle Brief with kill condition
3. For Activated items: create lightweight Cycle Briefs and add to active cycles (respecting WIP)
4. Note: "Reconciliation is a safety net, not a workflow. If you're reconciling often, your intake needs work."

## Tone

Evidence-first. At G3, present data before asking for decisions. Never soften a kill recommendation. If the kill condition triggered and the data is valid, say so plainly.
