# FLOW Gate — Quality Checkpoint

> **Trigger**: Time to validate an artifact, check readiness, or make a kill/merge decision. Any mention of "gate", "D1", "O3", "is this ready?", or "should we kill this?"
> **Reference**: Chapter 5 (D1), Chapter 6 (D2), Chapter 7 (D3), Chapter 8 (O1, O2), Chapter 9 (O3), Chapter 10 (O4), Chapter 11 (O5)

## What This Skill Does

Runs the appropriate quality checkpoint for the current stage of work. Gates are FLOW's mechanism for preventing waste — they ensure quality BEFORE the team invests time and money.

> **Coaching note for newcomers**: Gates are not bureaucratic hurdles. They're quality filters. A Discovery Brief with a vague hypothesis wastes experiment time. A SPEC-Lite without non-goals invites scope creep. A Build Contract without observability means you can't evaluate the outcome. Gates catch these problems early — when they're cheap to fix.

## Step 1 — Detect the Right Gate

Determine which gate to run based on context. Ask if unclear:

| Gate | Stage | Question It Answers |
|------|-------|---------------------|
| **D1** | Discovery Brief written | "Is this brief ready to pursue?" |
| **D2** | Experiment designed | "Is this experiment well-designed?" |
| **D3** | Experiment completed | "Is there enough evidence to switch to Outcome?" |
| **O1** | Bet proposed | "Is this bet worth pursuing?" |
| **O2** | SPEC-Lite written | "Is the SPEC ready for a Build Contract?" |
| **O3** | Build Contract drafted | "Is the engineering plan solid?" |
| **O4** | Build in progress | "Is observability in place?" |
| **O5** | Cycle complete | "Kill, Merge, or Continue?" |

If the user says "check a gate" without specifying: "Which artifact are you checking? A Discovery Brief (D1), an experiment (D2), experiment results (D3), a bet (O1), a SPEC (O2), a Build Contract (O3), observability (O4), or making a kill/merge decision (O5)?"

## Step 2 — Run the Checklist

### Gate D1 — Discovery Brief Ready (Ch 5)
- [ ] **Problem is specific.** Not "users are unhappy" but "[segment] experiences [problem] — evidence: [source]."
- [ ] **Hypothesis is falsifiable.** There exists a realistic outcome that would DISPROVE it.
- [ ] **Experiment is designed.** Team knows what they'll do, who they'll talk to, what they'll measure.
- [ ] **Experiment is cheapest valid option.** Considered conversations before prototypes.
- [ ] **Kill condition is pre-committed.** Written before experiment starts. Specific. Measurable.
- [ ] **Build duration estimated?** Team has an estimate for how long the build phase will take. This informs tempo and SPEC level selection.
- [ ] **Success signal is defined** (full brief only). Team knows what "validated" looks like.
- [ ] **Spine traces.** Hypothesis connects to an active bet on the Decision Spine.

### Gate D2 — Experiment Design Ready (Ch 6)
- [ ] **Experiment answers the hypothesis.** Clear logical connection between method and question.
- [ ] **Cheapest valid option.** Cheaper alternatives have been considered and ruled out.
- [ ] **Sample is appropriate.** Representative users, not friends and family.
- [ ] **Duration is defined.** Start date and end date. No open-ended experiments.
- [ ] **Kill condition is specific and measurable.** "If fewer than 3 of 10 complete..." not "if they don't like it."
- [ ] **Permission is secured** (if needed). Regulatory, ethical, or organizational approvals.
- [ ] **Log is set up.** Where results will be recorded and who's responsible.

### Gate D3 — Evidence Sufficient to Switch Modes (Ch 7)
- [ ] **Kill condition evaluated.** Was it triggered? If yes → 30-min inspection (is the condition valid?).
- [ ] **Evidence is documented.** Experiment Log has raw results AND interpretation.
- [ ] **Decision is justified.** One of five outcomes selected with reasoning:
  - **Continue**: Evidence promising but incomplete. NEW experiment designed (not "keep doing the same thing").
  - **Refine**: Direction right, hypothesis needs adjustment. Revised Brief written.
  - **Pivot**: Problem real, approach wrong. NEW Discovery Brief for new direction.
  - **Stop**: Hypothesis invalidated. Archive learnings. Free WIP slot.
  - **Escalate**: Beyond team's mandate. Escalate to leadership with evidence.
- [ ] **If switching to Outcome**: enough evidence to write a SPEC-Lite with confidence.
- [ ] **Learnings archived.** Whether killed or advancing, the institutional memory is updated.

### Gate O1 — Bet Worth Pursuing (Ch 8)
- [ ] **Discovery evidence exists.** Problem validated, not assumed. (Exception: well-understood from prior experience — document source.)
- [ ] **Bet traces on the spine.** Vision → Strategy → Bet → this cycle.
- [ ] **WIP capacity exists.** Team can take this on without exceeding limits (Ch 12).
- [ ] **Approach is defined.** Solution direction is clear (not detailed design — just direction).
- [ ] **Stakeholder alignment.** People who need to support this are aware and aligned.

### Gate O2 — SPEC Ready for Build Contract (Ch 8)
- [ ] **Problem references evidence.** Not "we think users want this."
- [ ] **Scope is bounded.** Clear boundaries, concrete deliverable.
- [ ] **Target metric is measurable.** Can be instrumented before building.
- [ ] **Kill condition is pre-committed.** Specific threshold, specific timeframe.
- [ ] **Non-goals documented.** At least 3 explicit non-goals. (For **Micro-SPECs**: non-goals are optional if scope is self-evident from the 3-line format.)
- [ ] **SPEC fits on one page.** If longer, over-specifying.
- [ ] **Micro-SPEC accepted for small-scope work.** If build duration < 1 day and scope is narrow, a Micro-SPEC (Problem, Hypothesis, Kill Condition) is sufficient. Full SPEC-Lite is not required for sub-day cycles.

### Gate O3 — Build Contract Complete (Ch 9)
- [ ] **Scope matches SPEC-Lite.** No scope additions without updating the SPEC.
- [ ] **Observability plan defined.** Team knows what metrics to track and how.
- [ ] **Rollout strategy defined.** Feature flags, blast radius, rollback plan.
- [ ] **Definition of done is explicit.** PM and engineering agree on what "done" means.
- [ ] **PM and engineering have both signed off.** The Contract is a mutual agreement.

### Gate O4 — Observability in Place (Ch 10)
- [ ] **Metrics are instrumented.** Target metric from SPEC-Lite is measurable in production.
- [ ] **Dashboard exists.** Team can see metrics without manual queries.
- [ ] **Kill condition is monitorable.** The team will KNOW when the condition triggers.
- [ ] **Alerts are configured** (if applicable). Automated notification when thresholds are crossed.
- [ ] **Comprehension Review completed** (for agent-built features). If an AI agent or automated tool generated the code, at least one team member must be able to explain the implementation logic. Code that humans cannot explain is unmonitorable tech debt. Ask: "Can someone on the team walk through what this code does and why?"

### Gate O5 — Kill, Merge, or Continue (Ch 11)
- [ ] **Observation Floor met.** Minimum observation window for the metric type has elapsed (see Metric Maturity Table in `/flow-spec`). If not met, flag: making a decision now risks false negatives.
- [ ] **Evidence reviewed.** Target metric data, user feedback, technical performance.
- [ ] **Kill condition evaluated.** Was it triggered? If yes → 30-min inspection.
- [ ] **Decision is one of three**: Kill (stop + archive), Merge (ship to production), Continue (extend with justification).
- [ ] **If Kill**: Learnings archived. WIP slot freed. Celebrated (killing is the methodology WORKING).
- [ ] **If Merge**: Production readiness verified (Ch 14). Feature flags removed. Monitoring in place.
- [ ] **If Continue**: Justified with specific evidence. New, shorter deadline set. Beware zombie cycles.
- [ ] **Decision record created.** Date, gate, evidence reviewed, decision, reasoning. Include `observation_floor_met` and `cycle_phase_at_decision`.

## Step 3 — Produce the Gate Review Record

For every gate check, produce an auditable record:

```markdown
## Gate Review — [Gate ID]
**Date**: YYYY-MM-DD
**Artifact**: [What was reviewed]
**Reviewer**: [Who ran the gate]

### Items Checked
| # | Item | Result | Notes |
|---|------|--------|-------|
| 1 | [Item] | PASS/FAIL | [Specific feedback] |

### Overall Result
**PASS** / **FAIL** (requires all items to pass)

### Actions Required
- [If any items failed: specific guidance on how to fix]

### Next Step
[What happens next based on the result]
```

## Step 4 — Chain Based on Result

| Gate | If PASS | If FAIL |
|------|---------|---------|
| D1 | → `/flow-experiment` | Revise brief, re-run D1 |
| D2 | → Run the experiment | Revise experiment design, re-run D2 |
| D3 | → `/flow-spec` (if Outcome) or new experiment (if Continue) | Gather more evidence or revise hypothesis |
| O1 | → `/flow-spec` | Re-evaluate the bet or gather more evidence |
| O2 | → Build Contract (Ch 9) | Revise SPEC, re-run O2 |
| O3 | → Start building | Revise contract, re-run O3 |
| O4 | → Continue execution | Instrument metrics before proceeding |
| O5 (Kill) | → Archive + free WIP | — |
| O5 (Merge) | → Production readiness (Ch 14) | — |
| O5 (Continue) | → New deadline + justification | — |

---

## Manual Mode Checklist

If running a gate check without this skill:

- [ ] Identify which gate applies (D1-D3 for Discovery, O1-O5 for Outcome)
- [ ] Pull up the relevant checklist from the appropriate chapter
- [ ] Evaluate each item: PASS or FAIL with specific feedback
- [ ] If any item fails: provide actionable fix guidance (don't just say "fail")
- [ ] Produce a gate review record (date, items, result, actions)
- [ ] Route to the next step based on the result
- [ ] If O5 Kill → archive learnings, free WIP, celebrate
- [ ] If O5 Merge → verify production readiness (Ch 14)
- [ ] If O5 Continue → require justification and shorter deadline (beware zombies)
