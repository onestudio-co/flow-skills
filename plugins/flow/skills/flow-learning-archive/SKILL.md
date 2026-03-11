---
name: flow-learning-archive
description: >
  Archives completed Flow cycles (killed or merged) into permanent institutional memory.
  Triggered by: "archive this cycle", "what did we learn from", "close out this cycle",
  "archive learnings", "cycle retrospective", "learning archive", "flow-learning-archive",
  "wrap up this cycle".
---

# Flow Learning Archive

## Purpose

When a cycle ends — whether killed (celebrated!) or merged into production — this skill produces the final archive that captures everything learned. It turns cycle endings into reusable knowledge instead of forgotten Slack threads.

Every cycle generates institutional memory. Without deliberate archiving, that memory evaporates. This skill ensures that killed cycles are just as valuable as merged ones, because the learnings persist either way.

## Archive Template

When archiving a cycle, produce a document following this structure:

```markdown
---
doc_type: learning_archive
cycle_id: "<cycle identifier>"
cycle_type: discovery | outcome
final_decision: killed | merged | adjusted
date_started: "<YYYY-MM-DD>"
date_archived: "<YYYY-MM-DD>"
owner: "<name>"
tags: [<searchable tags>]
---

# Archive: <cycle name>

## Summary
**What**: <1-2 sentence description of what this cycle was about>
**Mode**: Discovery / Outcome
**Duration**: <N weeks>
**Final decision**: Killed / Merged / Adjusted

## The Hypothesis/Problem
<Original hypothesis (Discovery) or problem statement (Outcome)>

## What We Did
<Chronological summary of experiments run, shipments made, decisions taken>

1. Week 1: <what happened>
2. Week 2: <what happened>
...

## What We Learned
### Validated
- <belief that was confirmed with evidence>

### Invalidated
- <belief that was disproven with evidence>

### Surprises
- <unexpected findings>

## Evidence Trail
| Artifact | Location |
|----------|----------|
| Discovery Brief / SPEC-Lite | <link> |
| Build Contract | <link> |
| Experiment logs | <link> |
| Kill/Merge notes | <link> |
| Dashboard | <link> |

## Impact
**If killed**: What capacity was freed? What won't be built?
**If merged**: What capability was shipped? What metrics improved?

## Recommendations for Future
- <what to do if this problem resurfaces>
- <what to do differently next time>
- <related hypotheses worth exploring>

## Decision Spine Update
<How does this cycle's conclusion affect the spine? Any upstream changes needed?>
```

## Archive Workflow

Follow these steps when archiving a cycle:

### Step 1: Gather Artifacts
Read the cycle's existing artifacts:
- Discovery Brief (for discovery cycles) or SPEC-Lite (for outcome cycles)
- Build Contract (if the cycle reached build phase)
- Experiment logs and weekly check-in notes
- Kill/Merge decision notes
- Any dashboards or metrics snapshots

### Step 2: Synthesize
Combine all artifacts into the archive template:
- Write a clear summary that someone unfamiliar with the cycle can understand
- Separate learnings into Validated, Invalidated, and Surprises categories
- Be specific about evidence — link to artifacts, quote metrics, reference experiments
- Capture the "why" behind the kill/merge decision, not just the "what"

### Step 3: Tag for Searchability
Assign tags that make this archive discoverable in the future:
- Domain tags (e.g., payments, onboarding, retention)
- Method tags (e.g., A/B-test, user-interview, prototype)
- Outcome tags (e.g., killed, merged, pivoted)
- Problem-space tags (e.g., activation, churn, pricing)

### Step 4: Update Spine Mappings
Check whether the cycle's conclusion affects the Decision Spine:
- If a discovery cycle invalidated a core assumption, flag it
- If a merged cycle changes operational reality, note the update
- If a killed cycle frees capacity, note what becomes possible

### Step 5: Confirm with Owner
Present the draft archive to the cycle owner before finalizing:
- Share the synthesized document
- Ask if any learnings are missing or mischaracterized
- Confirm the tags are accurate and complete
- Only write the final file after owner approval

## Search and Retrieval

When someone asks "what do we know about X?" or "have we tried something like this before?":

1. Search the `archives/` directory by tags, hypotheses, and learnings
2. Surface relevant past cycles with their key findings
3. Highlight whether past approaches were killed or merged, and why
4. Connect historical learnings to the current question

This prevents teams from re-running cycles that already produced clear answers.

## File Conventions

- **Directory**: Store all archives in the `archives/` directory within the relevant track
- **Naming**: `archive-YYYY-MM-DD-<cycle-name>.md` (use the archive date, kebab-case the cycle name)
- **Cross-references**: Link back to all related artifacts (Briefs, Contracts, experiment logs)
- **Immutability**: Once finalized, archives should not be edited — append corrections as addenda if needed
