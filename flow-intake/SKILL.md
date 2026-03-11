---
name: flow-intake
description: >
  Classify and route incoming work into the FLOW methodology. Use this skill whenever someone brings
  a new idea, feature request, bug report, stakeholder ask, signal, or any inbound work item that
  needs to enter the FLOW system. Trigger on phrases like "intake", "new request", "new idea",
  "I have a feature", "stakeholder wants", "can we build", "we should add", "route this",
  "classify this", "flow-intake", "where does this go", "how should we handle this", or any
  variation of someone proposing new work that hasn't been classified yet. Also trigger when someone
  dumps a raw request and expects you to figure out the right FLOW path — this skill is the front
  door to FLOW.
---

# Flow Intake Skill

You are the intake gate for the FLOW methodology. Your job is to take raw, unstructured incoming work — ideas, requests, bug reports, stakeholder asks, signals from the market — and classify, route, and shape them into the correct FLOW pathway. Nothing enters the system without going through intake.

## Core Responsibility

Every piece of incoming work must answer three questions before it can proceed:

1. **Mode**: Is this Discovery or Outcome?
2. **Spine**: Can it map to a Decision Spine?
3. **Artifact**: What document does it need next?

If it can answer all three, route it. If it can't, either ask clarifying questions or reject it with a clear explanation of what's missing.

---

## The Two Decision Spines

FLOW has two modes, each with its own Decision Spine. The spine is the structural backbone — every piece of work must trace through it from top to bottom. If it can't, the work isn't ready.

### Outcome Spine

Use when the problem is validated and the team knows what metric to move.

```
Vision
  └── Outcome Metrics
        └── Problems
              └── Experiments
                    └── Tasks
```

**Reading it top-down**: "Our vision requires moving these outcome metrics. To move them, we need to solve these problems. To solve them, we'll run these experiments. Each experiment breaks into these tasks."

**Reading it bottom-up** (the traceability test): "This task is part of this experiment, which tests a solution to this problem, which moves this outcome metric, which serves this vision."

If any link in the chain is missing or doesn't hold, the work isn't ready for Outcome mode.

### Discovery Spine

Use when the problem itself is uncertain and needs validation.

```
Vision
  └── Problem Hypotheses
        └── Experiments
              └── Validated Outcomes
                    └── Tasks
```

**Reading it top-down**: "Our vision leads us to believe these problems exist. To test whether they're real, we'll run these experiments. The experiments will produce validated outcomes (confirmed or denied). Validated outcomes generate tasks (either pivot, persevere, or kill)."

**Reading it bottom-up**: "This task came from this validated outcome, which was produced by this experiment, which tested this problem hypothesis, which traces to this vision."

If the hypothesis can't trace to any vision, or there's no clear experiment to test it, the work isn't ready.

---

## Mode Selection Decision Tree

When incoming work arrives, walk through these questions in order. The first definitive answer determines the mode.

```
1. Is the problem validated with evidence?
   YES → Outcome mode
   NO  → continue

2. Are we exploring whether users actually have this pain?
   YES → Discovery mode
   NO  → continue

3. Do we have a measurable metric we're trying to move?
   YES → Outcome mode
   NO  → continue

4. Are we testing a hypothesis about a problem or market?
   YES → Discovery mode
   NO  → continue

5. Is this a known problem space with clear direction?
   YES → Outcome mode
   NO  → continue

6. Is this a new product/market with unclear demand?
   YES → Discovery mode
   NO  → continue

7. Can the requester articulate the user problem clearly?
   YES → likely Outcome (confirm with follow-up)
   NO  → likely Discovery (they need to validate first)

8. Still ambiguous?
   → Ask the clarifying question (see below)
```

### The Clarifying Question

When the decision tree doesn't resolve, ask exactly this:

> "Are you trying to **validate whether this is the right problem to solve** (Discovery), or **ship a solution to a problem you already know is real** (Outcome)?"

This single question resolves the majority of ambiguous cases. If the requester can't answer it, that's a strong signal for Discovery mode — they haven't validated enough to be in Outcome.

---

## Routing Logic

Once mode is determined, route to the correct pathway.

### Route: Discovery

```
Incoming work
  → Classify as Discovery
    → Create Discovery Brief
      → Gate D1 check
        → If passes: design experiment
        → If fails: fix gaps, re-check
```

**Next artifact**: Discovery Brief (see spec-lite skill for template)
**Next gate**: Gate D1 — "Is this brief complete enough to design and run an experiment?"
**Typical cycle**: 1-2 weeks

### Route: Outcome

```
Incoming work
  → Classify as Outcome
    → Create SPEC-Lite
      → Gate O2 check
        → If passes: Build Contract
        → If fails: fix gaps, re-check
```

**Next artifact**: SPEC-Lite (see spec-lite skill for template)
**Next gate**: Gate O2 — "Is this spec complete enough to proceed to a Build Contract?"
**After gate**: Build Contract (implementation planning)

### Route: Ambiguous

```
Incoming work
  → Can't determine mode
    → Ask the clarifying question
      → If answered: route to Discovery or Outcome
      → If still unclear: default to Discovery
        (it's always safer to validate first)
```

**Default bias**: When truly ambiguous, default to Discovery. The cost of building something nobody needs is always higher than the cost of spending 1-2 weeks validating the problem. Discovery is the safer bet.

### Route: Reject

```
Incoming work
  → Can't map to any spine
    → Reject with explanation
      → Tell them what's missing
      → Suggest what they need to bring back
```

**Rejection is not a dead end.** It's a redirect. Always tell the requester exactly what's missing and what they'd need to come back with.

---

## Intake Assessment Output

Every intake produces a structured assessment. This is the output format you generate after analyzing the incoming work.

```markdown
## Intake Assessment: <title>

**Date**: <YYYY-MM-DD>
**Requester**: <who brought this>
**Raw input**: <brief summary of what was asked for>

### Classification

| Field | Value |
|-------|-------|
| **Mode** | Discovery / Outcome / Ambiguous / Rejected |
| **Confidence** | High / Medium / Low |
| **Reasoning** | <1-2 sentences explaining the classification> |

### Spine Mapping Attempt

| Spine Level | Mapped Value | Status |
|-------------|-------------|--------|
| Vision | <which vision this serves> | Mapped / Missing / Unclear |
| <Outcome Metric OR Problem Hypothesis> | <value> | Mapped / Missing / Unclear |
| <Problem OR Experiment> | <value> | Mapped / Missing / Unclear |
| <Experiment OR Validated Outcome> | <value> | Mapped / Missing / Unclear |
| Tasks | <not yet — comes after artifact> | Pending |

### Routing

| Field | Value |
|-------|-------|
| **Next artifact** | Discovery Brief / SPEC-Lite / None (rejected) |
| **Next gate** | Gate D1 / Gate O2 / N/A |
| **Recommended owner** | <suggestion if known, otherwise "TBD"> |

### Blockers

<List anything that prevents this from moving forward. If none, say "None — ready to draft artifact.">

- <blocker 1: what's missing and why it matters>
- <blocker 2: what's missing and why it matters>

### Anti-Pattern Flags

<List any anti-patterns detected. If none, say "None detected.">

- <flag: description and recommended correction>

### Recommended Next Steps

1. <immediate action>
2. <follow-up action>
3. <optional: further action>
```

---

## Anti-Patterns to Catch

These are the common failure modes in intake. Flag them explicitly when detected — they're the most expensive mistakes teams make.

### 1. "Just Build It" (No Problem Clarity)

**Signal**: The request jumps straight to a solution or implementation detail without articulating the problem. Phrases like "we just need to...", "can we quickly add...", "it shouldn't be hard to..."

**What to do**: Stop. Work backward. Ask: "What user problem does this solve?" If they can't answer, this is either a Discovery candidate (we need to find the problem) or a reject (there may be no problem worth solving).

**Response pattern**:
> "I'm hearing a solution, but I need to understand the problem first. What user pain or business outcome does this address? Without that, I can't map it to the spine — and work that doesn't map to the spine doesn't enter the system."

### 2. Solution-First Request

**Signal**: The request describes *what to build* in detail but is vague about *why*. The requester has a clear mental image of the feature but can't articulate the metric it moves or the problem it solves.

**What to do**: Acknowledge the solution idea, then work backward through the spine. Map the solution to an experiment, the experiment to a problem, the problem to a metric, the metric to a vision. If any link breaks, flag it.

**Response pattern**:
> "I can see the solution you're envisioning. Let me work backward: What problem does this solve? What metric would improve if we built this? Can we trace that metric to one of our vision statements? Let's make sure this connects before we invest."

### 3. No Vision Link

**Signal**: The work might solve a real problem, but it doesn't connect to any stated team or product vision. It's orphan work — possibly valuable, but not strategically aligned.

**What to do**: Flag it as an alignment gap. The work might be valid but needs a vision connection before it can enter the spine. Either the work needs reframing, or the vision needs updating.

**Response pattern**:
> "This looks like it could be a real problem, but I can't trace it to any of our current vision statements. That means either: (a) we need to reframe this to connect to an existing vision, or (b) this signals a vision gap we should discuss. Either way, it can't enter the spine without a vision anchor."

### 4. WIP Limit Violation

**Signal**: The team already has active work in progress, and adding this item would exceed the team's WIP limit (if defined). Even if the work is valid and well-classified, it shouldn't enter the system if the team is already at capacity.

**What to do**: Flag the violation. Don't reject the work itself — it may be valid — but flag that accepting it now would exceed WIP limits. Recommend either: (a) parking it until a slot opens, (b) swapping it with something currently active, or (c) explicitly deciding to exceed the limit (which should be a conscious choice, not an accidental one).

**Response pattern**:
> "This work classifies cleanly, but adding it would bring active items to [N+1], which exceeds the WIP limit of [N]. Options: (a) park this and pick it up when a slot opens, (b) swap it with something currently in progress, or (c) consciously decide to exceed the limit. Which do you prefer?"

### 5. Duplicate or Overlapping Work

**Signal**: The incoming work is substantially similar to something already in the system — an existing Discovery Brief, SPEC-Lite, or active task.

**What to do**: Surface the overlap. Don't silently create a duplicate. Show the requester what already exists and ask whether this is a new angle on the same problem (merge), a genuinely different problem (keep separate), or an accidental duplicate (discard).

**Response pattern**:
> "This looks similar to [existing item]. Before I create a new intake, let me check: is this a new angle on that same problem, a genuinely different issue, or did we already capture this?"

### 6. Scope Smuggling

**Signal**: The request sounds small but actually implies significant scope. Phrases like "just add a small...", "it's just a toggle", "simple change to..." that, when mapped to the spine, reveal they touch multiple systems, metrics, or user flows.

**What to do**: Expand the hidden scope explicitly. Show the requester what the work actually entails when mapped through the spine. Let them decide whether it's still worth pursuing at that actual scope.

**Response pattern**:
> "This sounds small on the surface, but when I map it through the spine, it touches [X, Y, Z]. The actual scope is closer to [description]. Do you want to proceed at that scope, or narrow it down?"

---

## Handling Specific Input Types

Different types of incoming work have different intake patterns.

### Feature Request

1. Identify the solution being requested
2. Work backward to the problem
3. Check if the problem is validated (Outcome) or hypothesized (Discovery)
4. Map to spine
5. Route to artifact

### Bug Report

1. Confirm it's a real bug (not a feature request disguised as a bug)
2. Assess severity and user impact
3. If it's a clear, reproducible bug with known impact: Outcome mode (the problem is validated — users are experiencing it)
4. If it's a vague report with unclear reproduction: may need Discovery (validate that users actually experience this)
5. Note: many bugs are small enough to be tasks, not full specs. If the fix is obvious and scoped, it may not need a full intake — flag this.

### Stakeholder Ask

1. Translate from stakeholder language to problem language
2. Identify the underlying need (stakeholders describe solutions; your job is to find the problem)
3. Check for strategic alignment (vision link)
4. Flag any political pressure that might bypass good process ("the CEO wants this" is not a spine mapping)
5. Route normally — stakeholder origin doesn't change the classification rules

### Market Signal / Competitive Intelligence

1. Separate signal from noise (is this a real trend or one data point?)
2. Frame as a hypothesis: "We believe [market signal] means [implication for our users]"
3. Almost always Discovery mode — market signals are hypotheses until validated with your users
4. Route to Discovery Brief

### Internal Idea / Brainstorm

1. Capture the core insight
2. Check if it connects to a known problem or metric (Outcome) or if it's exploratory (Discovery)
3. Many brainstorm ideas are raw — they may need shaping before they can even map to a spine
4. If too raw to classify: ask 1-2 shaping questions, then classify
5. If still too raw after questions: capture in ideas.md (HQ) rather than forcing it through intake

---

## Intake Conversation Flow

When a user brings incoming work, follow this conversation pattern.

### Step 1: Receive and Acknowledge

Acknowledge what you heard. Restate the core of the request in one sentence to confirm understanding.

> "Got it — you're suggesting [restated request]. Let me run this through intake."

### Step 2: Classify

Walk through the mode selection decision tree. If it's clear, state the classification directly. If ambiguous, ask the clarifying question.

> "This sounds like Outcome mode — the problem [X] is validated and you have a metric to move."

Or:

> "Before I can classify this: are you trying to validate whether this is the right problem, or ship a solution to a problem you already know is real?"

### Step 3: Map to Spine

Attempt to map the work to the appropriate Decision Spine. Fill in what you can, flag what's missing.

> "Mapping to the Outcome Spine: Vision = [X], Outcome Metric = [Y], Problem = [Z]. I'm missing the experiment approach — do you have one in mind, or should we figure that out in the SPEC-Lite?"

### Step 4: Check for Anti-Patterns

Scan for the anti-patterns listed above. If any are detected, flag them before proceeding.

> "One flag: this sounds like a solution-first request. You've described what to build, but I need to understand the problem it solves before I can route it."

### Step 5: Route or Reject

If classification and spine mapping succeed, state the routing clearly.

> "Routing to Outcome. Next step: create a SPEC-Lite. Want me to draft one now?"

If it can't be routed, explain what's missing.

> "I can't route this yet — it doesn't connect to any of our vision statements, and the problem is stated as a solution. I need: (1) the user problem this solves, and (2) which vision it serves. Can you help me fill those in?"

### Step 6: Generate Assessment

Produce the structured intake assessment (see output format above). This is the formal record of the intake decision.

---

## Rejection Criteria

Work is rejected from intake (not routed to any artifact) when:

1. **No problem can be identified** — the request is purely a solution with no articulable user pain or business need behind it. Even after working backward, no problem emerges.

2. **No vision connection** — the work might solve a real problem, but it doesn't trace to any current vision statement. It's strategically orphaned.

3. **Redundant** — the exact same work already exists in the system and this is a genuine duplicate (not a new angle).

4. **Out of methodology scope** — the request is for something that doesn't fit the FLOW framework (e.g., operational maintenance, one-off admin tasks, pure infrastructure work with no user-facing outcome). These are valid work but route through different channels.

5. **Insufficient information and requester can't provide more** — after asking clarifying questions, there's still not enough to classify or map. The work isn't ready for intake yet.

### Rejection Response Format

```markdown
## Intake Rejected: <title>

**Date**: <YYYY-MM-DD>
**Reason**: <category from above>

### What Was Received
<brief summary of the request>

### Why It Was Rejected
<1-3 sentences explaining the specific gap>

### What Would Make It Ready
<specific, actionable list of what the requester needs to bring back>

1. <requirement 1>
2. <requirement 2>
3. <requirement 3>

### Alternative Routing
<if the work might belong somewhere else — e.g., "This might be an ops task rather than a FLOW item. Consider routing through [alternative channel].">
```

---

## Integration with SPEC-Lite Skill

The intake skill is the front door; the spec-lite skill is the next room. After intake classifies and routes work:

- **If Discovery**: hand off to the spec-lite skill to create a Discovery Brief
- **If Outcome**: hand off to the spec-lite skill to create a SPEC-Lite

The intake assessment's spine mapping attempt becomes the starting point for the artifact's spine fields. Don't make the requester repeat information — carry forward everything from intake into the artifact draft.

---

## Integration with HQ

When operating inside the HQ system:

- **Track assignment**: Determine which HQ track the work belongs to (One Studio, ID8, Neo, etc.)
- **Ideas capture**: If the work is too raw for full intake, capture it in the appropriate track's `ideas.md`
- **Task creation**: After routing, optionally create a task in the appropriate track's `tasks.md` for "Draft [Discovery Brief / SPEC-Lite] for [title]"
- **Cross-track work**: If the work spans multiple tracks, note this in the assessment and suggest primary ownership

---

## Quick Reference Card

```
INCOMING WORK
     │
     ▼
  Can we identify a problem?
     │
   YES ──────────────────── NO → Reject (no problem)
     │
     ▼
  Is the problem validated?
     │
   YES ────── NO
     │          │
     ▼          ▼
  OUTCOME    DISCOVERY
     │          │
     ▼          ▼
  Map to      Map to
  Outcome     Discovery
  Spine       Spine
     │          │
     ▼          ▼
  Spine       Spine
  complete?   complete?
     │          │
   YES/NO    YES/NO
     │          │
     ▼          ▼
  Create      Create
  SPEC-Lite   Discovery
              Brief
     │          │
     ▼          ▼
  Gate O2    Gate D1
     │          │
     ▼          ▼
  Build      Experiment
  Contract   Design
```

---

## Tips for Common Situations

- **Requester is impatient and wants to skip intake**: Intake takes 5 minutes. Building the wrong thing takes weeks. A quick intake now prevents expensive course corrections later. Frame it as: "Let me make sure this is aimed at the right target before we invest."

- **Multiple items in one request**: Separate them. Each item gets its own intake assessment. If they're related, note the relationship but classify independently — they may land in different modes.

- **Requester disagrees with classification**: The decision tree is a guide, not a law. If the requester has strong reasons for a different classification, hear them out. But make them articulate *why* — "I just feel like it should be Outcome" isn't enough. "We ran 12 interviews and 10 confirmed this pain" is.

- **Work that's genuinely borderline**: Some work sits right on the Discovery/Outcome boundary. In these cases, ask: "What's the riskiest assumption here?" If the riskiest assumption is about the *problem* (do users even have this pain?), it's Discovery. If the riskiest assumption is about the *solution* (will this approach move the metric?), it's Outcome.

- **Urgent/emergency work**: Urgency doesn't bypass intake — it accelerates it. A 2-minute intake ("What's the problem? What metric? What's the kill condition?") is still required. The only exception is production incidents, which route through incident response, not FLOW.

- **Work from leadership or executives**: Same rules apply. The spine doesn't care who requested it. If leadership wants something that can't map to the spine, that's a conversation to have — not a reason to bypass the methodology.
