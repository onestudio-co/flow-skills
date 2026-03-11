---
name: flow-kill-merge-notes
description: >
  Capture the structured record of Kill/Merge/Continue decisions after the weekly ritual. Use this
  skill whenever someone needs to document what was decided in a Kill/Merge meeting, record cycle
  decisions with evidence, archive killed or merged work, or create a permanent log of portfolio
  decisions. Trigger on phrases like "capture the decision", "log the kill merge", "document what
  we decided", "kill merge notes", "archive this decision", "what did we decide", "record the
  meeting outcome", "log the kill", "log the merge", "save the decision", "decision record",
  "meeting notes from kill merge", "flow-kill-merge-notes", or any variation of asking to
  document decisions made during or after a Kill/Merge ritual.
---

# Flow Kill/Merge Notes Skill

You turn weekly Kill/Merge decisions into permanent, searchable institutional memory. Decisions made in the Kill/Merge ritual are high-value organizational knowledge — they encode what worked, what didn't, what was learned, and why capacity was reallocated. Without a structured record, this knowledge evaporates after the meeting. Your job is to ensure it never does.

## Purpose

The Kill/Merge Agenda skill prepares the meeting. This skill captures what happened. Together, they form a closed loop: prepare with evidence, decide in the meeting, record the decisions permanently.

Institutional memory from Kill/Merge decisions serves three functions:

1. **Accountability**: Decisions are traceable. Anyone can look back and see what was decided, on what evidence, and by whom.
2. **Learning**: Patterns emerge over time. Teams that record learnings from killed cycles avoid repeating the same mistakes. Teams that don't will run the same failed experiment twice.
3. **Capacity tracking**: A clear record of what was killed or merged makes WIP changes visible and auditable. Freed capacity is real — but only if it's tracked.

---

## Template

Generate the notes document in this exact format.

```markdown
---
doc_type: kill_merge_notes
date: "<YYYY-MM-DD>"
meeting_type: kill_merge | discovery_review
facilitator: "<name>"
---

# Kill/Merge Notes — <YYYY-MM-DD>

## Decisions Made

### <Cycle/Item Name>
**Decision**: Kill / Merge / Continue / Adjust / Simplify
**Evidence cited**:
- <specific data point>
- <specific data point>

**Rationale**: <2-3 sentences explaining WHY this decision was made, grounded in the cited evidence>

**What was learned**:
- <key learning 1>
- <key learning 2>

**If Killed:**
- Resources freed: <what capacity is now available>
- Archived to: <location>
- Resulting simplification: <what gets simpler as a result>

**If Merged:**
- Hardening plan: <what needs to happen for production>
- Ship as: <capability name>
- Production readiness: <date/status>

**If Continue:**
- Next experiment: <what's planned>
- New evidence needed: <what will we look for>
- Updated kill condition: <if changed>

**If Adjust:**
- What changed: <scope, target, approach>
- New kill condition: <updated>
- Reason for adjustment: <evidence>

**If Simplify:**
- What gets removed: <complexity being cut>
- Expected impact: <what improves>

---

### <Next item>
...

---

## WIP Impact
- Items killed this week: <N> (freed capacity: <description>)
- Items merged this week: <N>
- Net WIP change: <+/- N>
- Current WIP: <N> of <limit>

## Action Items
- [ ] <action> — owner: <name> — due: <date>
```

---

## Workflow

Follow these steps when the user asks to capture Kill/Merge decisions.

### Step 1: Determine the Source

Ask the user how the decisions are arriving:

- **Live capture during meeting**: The user will feed you decisions one at a time as the meeting progresses. Capture each one and compile the full document at the end.
- **Post-meeting summary**: The user has notes or memory from a completed meeting and wants to formalize the record. Gather all decisions, then produce the document.
- **From the agenda**: The Kill/Merge Agenda was already generated (possibly by the `flow-kill-merge-agenda` skill). The user is now filling in the decisions that were made for each cycle on the agenda.

### Step 2: Gather Decision Details

For each cycle or item discussed, collect:

| Field | Required? | Quality Standard |
|-------|-----------|------------------|
| Cycle/item name | Yes | Must match the name used in the SPEC-Lite or agenda |
| Decision (Kill/Merge/Continue/Adjust/Simplify) | Yes | Exactly one of the five options |
| Evidence cited | Yes | Must be specific data points, not feelings or opinions |
| Rationale | Yes | 2-3 sentences grounded in the cited evidence |
| What was learned | Yes | Must be concrete and actionable, not generic |
| Decision-specific details | Yes | The relevant "If Killed/Merged/etc." section |

If the user provides vague evidence, push back:

- "We felt it wasn't working" is not acceptable. Ask: "What specific metric or observation showed it wasn't working?"
- "The team agreed it was good" is not acceptable. Ask: "What data did the team base that agreement on?"
- "It's been too long" is not acceptable. Ask: "How many weeks into the cycle are you, and what does the kill condition say?"

### Step 3: Gather WIP Impact

After all decisions are captured, compile the WIP summary:

- Count items killed and describe what capacity was freed
- Count items merged
- Calculate net WIP change
- State current WIP against the limit

### Step 4: Capture Action Items

Every decision generates at least one action item. Common patterns:

| Decision | Typical Action Items |
|----------|---------------------|
| Kill | Archive materials, reassign team members, update backlog, communicate decision |
| Merge | Create hardening tasks, schedule production readiness review, update documentation |
| Continue | Define next experiment, set up measurement for next week, assign evidence collection |
| Adjust | Update SPEC-Lite with new scope/target, revise kill condition, communicate changes |
| Simplify | Identify components to remove, plan removal, update SPEC-Lite |

Every action item must have an owner and a due date. If the user doesn't provide these, ask explicitly.

### Step 5: Produce the Document

Assemble the full document using the template above. Include only the decision-specific section that applies (e.g., if a cycle was killed, include the "If Killed" section but omit "If Merged", "If Continue", etc.).

### Step 6: Store the Document

Ask the user their preference for storage:

- **Per-meeting files**: Create `kill-merge-YYYY-MM-DD.md` in the appropriate directory
- **Running log**: Append to an existing log file

Default recommendation: per-meeting files, stored in a `kill-merge-notes/` directory within the relevant track, or in a central `decisions/` directory if cycles span multiple tracks.

---

## File Conventions

- **Directory**: Store in `decisions/` or `kill-merge-notes/` directory within the relevant track
- **Naming**: `kill-merge-YYYY-MM-DD.md`
- **One file per meeting**: Each Kill/Merge ritual gets its own file
- **Cross-track meetings**: If the meeting reviewed cycles from multiple tracks, store the notes in a shared location (e.g., `tracks/one-studio/kill-merge-notes/` if One Studio is the primary track) and add cross-references to affected tracks' `decisions.md`

---

## Quality Standards

These standards are non-negotiable. The value of Kill/Merge notes comes from their rigor. Weak notes are worse than no notes because they create a false sense of institutional memory.

### Evidence Standards

- **Every decision must cite specific evidence.** No exceptions. If a decision was made without evidence, record that fact explicitly: "Decision made without quantitative evidence. Rationale was based on [qualitative observation]."
- **"We felt it wasn't working" is not acceptable.** Translate feelings into observable data. "The team observed that after 3 weeks, zero users had completed the target action despite 200 reaching the entry point" — that is evidence.
- **Metrics must include numbers.** "The metric improved" is vague. "Conversion increased from 12% to 18% over 2 weeks across 400 sessions" is evidence.

### Learning Standards

- **Learnings must be concrete, not generic.** "We learned that users don't like complex flows" is too vague. "We learned that adding a third step to onboarding drops completion from 45% to 12%, suggesting the 2-step version is the maximum viable complexity for this audience" is concrete.
- **Learnings should be transferable.** Write them so that someone who wasn't in the meeting can apply the insight to future work.
- **Negative learnings are valuable.** "We learned that email reminders do not measurably affect re-engagement for this user segment" prevents the team from trying the same thing again.

### Action Item Standards

- **Every action item must have an owner.** "Someone should archive this" is not an action item. "Ali archives the experiment materials to `/archive/cycle-name/` by Friday" is.
- **Every action item must have a due date.** Open-ended action items don't get done.
- **Action items must be verifiable.** "Think about next steps" is not verifiable. "Draft a revised SPEC-Lite for the adjusted cycle" is.

---

## Integration with HQ

When operating inside the HQ system:

- **Update decisions.md**: After producing the Kill/Merge notes file, also add a summary entry to the relevant track's `decisions.md` using the standard HQ decision format. This ensures decisions appear in dashboards and reviews.
- **Update tasks.md**: For killed cycles, move related tasks to Completed with a note referencing the Kill/Merge decision. For merged cycles, add production hardening tasks to Active. For adjusted cycles, update existing task descriptions.
- **Cross-reference**: If the Kill/Merge notes file lives outside a track directory, add a pointer in the track's `decisions.md`: "See kill-merge-YYYY-MM-DD.md for full details."

---

## Integration with Other FLOW Skills

- **Kill/Merge Agenda** (`flow-kill-merge-agenda`): The agenda is the input; these notes are the output. The agenda proposes recommendations; these notes record the actual decisions.
- **SPEC-Lite** (`spec-lite`): Decisions reference the SPEC-Lite's kill conditions, metrics, and targets. When a cycle is adjusted, the SPEC-Lite should be updated to reflect the new scope or kill condition.
- **Build Contract** (`flow-build-contract`): When a cycle is merged, the next step is creating or activating a Build Contract for production hardening.
- **Production Readiness** (`flow-production-readiness`): Merged cycles move toward a production readiness review. The merge decision in the notes should include the hardening plan that feeds into this review.
- **Intake** (`flow-intake`): When a cycle is killed and WIP capacity is freed, the intake skill handles routing queued work into the opened slot.

---

## Example Notes

### Kill Decision Example

```markdown
### User Onboarding v2
**Decision**: Kill
**Evidence cited**:
- Onboarding completion rate: 6% after 3 weeks (baseline: 8%, target: 25%)
- Metric moved in the wrong direction despite 2 iteration cycles
- Kill condition from SPEC-Lite: "Kill if completion rate < 10% after 2 weeks" — condition met at week 2, confirmed at week 3

**Rationale**: The fundamental assumption that a simplified 3-step onboarding flow would increase completion has been invalidated. After two iterations targeting different friction points (step 2 form length, step 3 confirmation UX), the completion rate declined rather than improved. The evidence suggests the problem is not flow complexity but user motivation at the entry point, which is outside this cycle's scope.

**What was learned**:
- Reducing steps does not improve completion when the root cause is low entry motivation
- Users who reach step 2 complete at 80% — the drop-off is between awareness and step 1, not within the flow
- Future onboarding work should target the activation trigger, not the onboarding mechanics

**If Killed:**
- Resources freed: 1 engineer (Nora), 0.5 designer (Lina) — available for reassignment
- Archived to: /archive/onboarding-v2/
- Resulting simplification: Remove the experimental onboarding variant from the feature flag system, reducing flag count from 12 to 11
```

### Merge Decision Example

```markdown
### Smart Search Relevance
**Decision**: Merge
**Evidence cited**:
- Search relevance score: 0.84 (baseline: 0.62, target: 0.80)
- Sustained above target for 2 consecutive weeks
- User satisfaction survey: search-related complaints dropped from 23% to 8% of feedback
- Zero-result rate decreased from 15% to 4%

**Rationale**: The target metric has been exceeded and sustained over two measurement periods. Both quantitative (relevance score, zero-result rate) and qualitative (user satisfaction) indicators confirm the improvement. The experiment is conclusive — the new search algorithm delivers meaningfully better results.

**What was learned**:
- Synonym expansion contributed ~60% of the relevance improvement; the remaining 40% came from reranking
- The reranking model performs well at current query volume but should be load-tested before production release
- Users notice search quality improvements quickly — complaint reduction appeared within 3 days of deployment

**If Merged:**
- Hardening plan: Load test reranking model at 3x current query volume, add monitoring for relevance score regression, document rollback procedure
- Ship as: Smart Search v2
- Production readiness: Target 2026-03-25 pending load test results
```

---

## Common Pitfalls

- **Skipping learnings for "Continue" decisions**: Even when a cycle continues, there are learnings from the week. What did the data show? What surprised you? Capture it.
- **Vague action items**: "Follow up on this" is not an action item. Be specific about what, who, and when.
- **Missing WIP impact**: Every Kill/Merge meeting changes WIP. Even if all decisions are "Continue", the WIP section should confirm that WIP is unchanged and within limits.
- **Not updating other HQ files**: The Kill/Merge notes are the detailed record, but `decisions.md` and `tasks.md` in the relevant tracks must also be updated to keep the system consistent.
- **Recording decisions without evidence**: If a decision was genuinely made on gut feeling, record that honestly rather than fabricating evidence after the fact. Then flag it as a process improvement item: "This decision lacked quantitative evidence. Action: ensure instrumentation is in place before the next cycle."
