# /flow-close — End Work

> **Trigger**: User wants to kill, merge, or archive a cycle. "Kill this", "we're done", "ship it", "close this out".
> Routes to G3 Resolve if not already done, then handles archival.

## Step 1 — Identify the Cycle

Read `.flow/cycles/` for active cycles.

**If user names a specific cycle**: Use that one.
**If one active cycle**: Use that one.
**If multiple**: List and ask which to close.
**If no active cycles**: "No active cycles to close. Did you mean to start one with `/flow-start`?"

## Step 2 — Check G3 Status

Has this cycle already been through G3 Resolve?

**If no G3 record exists**: "This cycle hasn't been through G3 Resolve yet. Let's do that now." -> Run the G3 Resolve flow from `/flow-check` Step 4.

**If G3 already completed**: Proceed to archival.

## Step 3 — Require Learning Entry

Before archiving, check if a Learning Entry exists for this cycle.

**If no Learning Entry**: Do NOT proceed to archival. Ask:

"Every cycle teaches something — even a 'this worked as expected' is a learning. What did you learn?"

Prompt with:
- "What did you test?"
- "What did you learn?"
- "What does this mean for future work?"

Write the Learning Entry to `.flow/cycles/[slug]-learning.md`:

```markdown
# Learning Entry
Date: [today]
Cycle: [link to brief]
What we tested: [one sentence]
What we learned: [2-3 sentences]
What this means: [future implications]
```

**If Learning Entry exists**: Proceed.

## Step 4 — Archive

1. Move the Cycle Brief, Kill/Merge Record, and Learning Entry to `.flow/archive/`
2. Update `.flow/cycles/` (remove from active)
3. Confirm: "Cycle archived. WIP slot freed. [Discovery/Outcome] capacity: [N]/[limit]."

## Step 5 — What's Next?

After closing, offer forward momentum:

- If WIP has room: "You have capacity for new work. Want to `/flow-start` something?"
- If other cycles are overdue for Pulse: "[Other cycle] hasn't had a G2 check recently. Want to `/flow-check` it?"
- If no cycles remain: "All clear. Board is empty."

## Tone

Respectful of the closure moment. Killing work is hard — acknowledge the learning, not just the stop. "That cycle produced a Learning Entry that will save future work. Good kill."
