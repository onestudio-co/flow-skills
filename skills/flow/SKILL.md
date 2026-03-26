# /flow — FLOW Entry Point

> **Trigger**: User says anything FLOW-related, or just types `/flow`.
> This is the single entry point. Context-aware — it figures out what you need.

## Step 1 — First-Time Detection

Check if `.flow/` directory exists in the current project root.

**If `.flow/` does NOT exist**: Initialize FLOW for this project.

1. Create `.flow/` directory with `config.yaml` and `cycles/` subdirectory
2. Ask three setup questions:
   - "How long are your typical cycles? (days)" -> Sets tempo
   - "How many things can your team observe at once?" -> Sets WIP limits
   - "Discovery or Outcome work mostly?" -> Sets initial mode guidance
3. Write `.flow/config.yaml` with the answers (include `version: 3`)
4. Confirm: "FLOW is set up. Type `/flow` anytime to see your status, or `/flow-start` to begin a cycle."

**If `.flow/` exists**: Check for v2 markers first (Step 1b), then continue to Step 2.

## Step 1b — v2 Detection & Upgrade

Scan for v2 markers:
- `config.yaml` missing `version: 3` or has old keys (maturity, profile names)
- `.flow/cycles/` files referencing D1, D2, D3, O1-O5, SPEC-Lite
- Old skill references (`/flow-intake`, `/flow-gate`, `/flow-observe`)

**If v2 markers found**:

```
⚠️  FLOW v2 detected — v3 is the current version.

v3 simplified FLOW from 8 gates to 3, 21 concepts to 7.
Key changes:
  D1-D3, O1-O5 → G1 Commit, G2 Pulse, G3 Resolve
  SPEC-Lite → Cycle Brief
  Maturity levels → removed

Would you like to upgrade? I'll:
  1. Add version: 3 to your config
  2. Rename cycle files to v3 format
  3. Log the migration as a Learning Entry

All changes are shown before applying. Your old files are preserved in .flow/archive/v2/.
```

If user agrees, batch-migrate:
1. Back up `.flow/` to `.flow/archive/v2/`
2. Rewrite `config.yaml` with v3 schema (tempo as number, WIP limits, version: 3)
3. For each cycle file: rename D1-D3/O1-O5 references to G1/G2/G3, rename SPEC-Lite to Cycle Brief
4. Write a Learning Entry documenting the migration
5. Show diff summary of all changes

If user declines, continue with a warning banner on all subsequent `/flow` output.

## Step 2 — Read Current State

1. Read `.flow/config.yaml` for tempo, WIP limits, ritual cadence
2. Scan `.flow/cycles/` for active cycle documents (Cycle Briefs with no G3 Resolve record)
3. Count active cycles vs. WIP limits

## Step 3 — Show Status & Suggest

Present a concise dashboard:

```
FLOW Status — [Project Name]
Tempo: [X] days | WIP: [active]/[limit] Discovery, [active]/[limit] Outcome

Active Cycles:
- [Cycle name] — [mode] — Day [X] of [Y] — [status note]
- [Cycle name] — [mode] — Day [X] of [Y] — [status note]

Suggested action: [context-dependent suggestion]
```

**Suggestion logic:**
- Cycle at end of tempo? -> "Gate check due — want to run `/flow-check`?"
- No active cycles + WIP available? -> "Ready for new work — `/flow-start` to begin a cycle."
- All WIP slots full? -> "At capacity. To start something new, something must stop."
- Cycle with no G2 Pulse in >50% of tempo? -> "Pulse check overdue on [cycle] — run `/flow-check`?"

## Step 4 — Handle Direct Requests

If the user's message contains a clear intent, route directly:

| User says | Route to |
|-----------|----------|
| "start", "new", "begin", "I want to work on" | `/flow-start` |
| "check", "gate", "review", "how's it going", "pulse" | `/flow-check` |
| "kill", "stop", "done", "merge", "ship", "close" | `/flow-close` |
| "help", "coach", "what should I", "teach me", "how does" | `/flow-coach` |
| "upgrade", "migrate", "v2" | Step 1b (upgrade flow) |

If intent is ambiguous, show the status dashboard and offer options.

## Tone

Direct. No jargon unless the user uses it. One observation, one suggestion. Respect the user's time.
