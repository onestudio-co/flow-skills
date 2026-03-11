---
name: flow-spec-lite
description: >
  Create, validate, update, and gate-check SPEC-Lite and Discovery Brief documents — the one-page
  planning artifacts from the FLOW methodology. Use this skill whenever the user mentions "spec-lite",
  "spec lite", "SPEC", "flow spec", "discovery brief", "brief", or asks to write a
  problem/scope/kill-condition document for a feature, initiative, experiment, or outcome cycle.
  Also trigger when the user wants to check if a spec is "gate ready", validate a spec's completeness,
  prepare a spec for a Build Contract, or convert a Discovery Brief into a SPEC-Lite. Even if the user
  just says "write a spec for this feature", "scope this work", "define this experiment", or "I need
  to validate a hypothesis", this skill applies — it's the go-to for any structured pre-work document
  in the FLOW methodology.
---

# SPEC-Lite Skill

You manage the one-page planning artifacts from the FLOW methodology. There are two variants depending on which FLOW mode the team is in:

| | **SPEC-Lite** (Outcome mode) | **Discovery Brief** (Discovery mode) |
|---|---|---|
| **When** | Known problem space, iterating toward measurable outcomes | New product/market, unclear demand, validating hypotheses |
| **Purpose** | Define what to build and how to measure success | Define what to learn and how to validate a hypothesis |
| **Sections** | Problem, Success Metric, Constraints, Out-of-Scope, Kill Condition | Problem Hypothesis, Target User, Experiment Question, Validation Signal, Kill Condition |
| **Gate** | Gate O2 → then Build Contract | Gate D1 → then experiment design |
| **Spine** | Vision → Outcome Metrics → Problems → Experiments → Tasks | Vision → Problem Hypotheses → Experiments → Validated Outcomes → Tasks |

Both artifacts share the same philosophy: one page max, mandatory kill condition, and nothing enters development without one.

## Critical: stay at the planning level

These are planning artifacts, not implementation specs. They define the *what* and *why* — never the *how*.

- **Do NOT** include existing code details (component names, hooks, database columns, file paths). That belongs in the Build Contract or implementation tickets.
- **Do NOT** explore the codebase to inform the spec. The SPEC-Lite is about the user problem and the measurable outcome, not about what's already built.
- **Do NOT** describe technical approach, architecture, or implementation steps. The experiment field in the spine should be one line ("A/B test with feature flag"), not a technical design.
- **Keep it to one page.** If a section is getting long, you're probably leaking implementation detail. The Problem section should be 2-4 sentences. Constraints are bullet points. Out-of-scope items are one line each. If you find yourself writing paragraphs, step back and ask: "Is this about the problem or about the solution?"

## Choosing the right variant

When a user asks you to create a spec, determine which variant they need:

- **Discovery Brief** if: the problem itself is uncertain, they're exploring whether users even have this pain, they say things like "we think...", "we want to test whether...", "we're not sure if...", or the work is about learning rather than shipping.
- **SPEC-Lite** if: the problem is validated, they know what metric to move, they're planning an outcome cycle, or they say things like "we need to build...", "improve X metric", "reduce latency".

If it's ambiguous, ask: "Are you trying to **validate whether this is the right problem** (Discovery Brief) or **ship a solution to a known problem** (SPEC-Lite)?" This one question resolves 90% of cases.

## Operations

| Command | What it does |
|---------|-------------|
| **Create** | Draft a new SPEC-Lite or Discovery Brief from the user's description |
| **Validate** | Check an existing document for completeness and quality |
| **Update** | Modify specific sections of an existing document |
| **Gate Check** | Evaluate readiness for the next stage (Gate O2 for SPEC-Lite, Gate D1 for Discovery Brief) |
| **Convert** | Upgrade a Discovery Brief into a SPEC-Lite when transitioning from Discovery → Outcome mode |

## File conventions

- **Location**: Store files in `specs/` at the project root. Create the directory if it doesn't exist.
- **Naming**: Use kebab-case filenames: `specs/user-onboarding-flow.md`, `specs/discovery-search-hypothesis.md`
- **Format**: Default to Markdown with YAML frontmatter. If the user prefers plain Markdown (no frontmatter), adapt accordingly. Check existing files in `specs/` for the project's convention.

---

## SPEC-Lite (Outcome Mode)

A SPEC-Lite forces clarity before execution by answering: *What problem? How will we measure success? What are the boundaries? What's excluded? When do we stop?*

Every SPEC-Lite must map upward through the Outcome Decision Spine:
```
Task → Experiment → Problem → Outcome Metric → Vision
```

### Template (YAML frontmatter)

```markdown
---
doc_type: spec_lite
variant: flow_outcome
status: draft
owner: "<person or role>"
cycle_id: "<outcome cycle identifier>"
problem: "<one-line problem statement>"
success_metric: "<metric — baseline → target>"
kill_condition: "<when to stop>"
created: "<YYYY-MM-DD>"
last_reviewed: "<YYYY-MM-DD>"
spine:
  vision: "<what vision this serves>"
  outcome_metric: "<which outcome metric>"
  problem: "<which problem>"
  experiment: "<experiment approach>"
---

# <Initiative Title>

## Problem

<2-4 sentences describing the problem. Be specific: who experiences it, when, and what's the
impact. Avoid solution language — this is about the pain, not the fix.>

## Success Metric

| Metric | Baseline | Target |
|--------|----------|--------|
| <metric name> | <current value> | <target value> |

<How this will be measured and what data source is authoritative.>

## Constraints

- <Non-negotiable technical, business, or regulatory boundary>
- <Performance requirement, compatibility need, etc.>
- <Time constraint if relevant>

## Out of Scope

- <Thing that's explicitly NOT included, even if related>
- <Adjacent feature that might seem natural but isn't part of this>
- <Future enhancement that's deferred>

## Kill Condition

<Specific, measurable condition under which this work stops. Must include a timeframe and a
threshold. Example: "If after 2 weeks the activation rate hasn't moved above 5%, kill this
experiment and archive learnings.">
```

### Template (plain Markdown)

```markdown
# <Initiative Title>

> **Variant**: SPEC-Lite (Outcome) | **Status**: draft | **Owner**: <name> | **Created**: <date>

## Problem
...
```

### Writing guidance for SPEC-Lite sections

- **Problem**: Describe the user/business pain, not a solution. "Users abandon checkout because the address form requires 12 fields" beats "We need a shorter form." If the user gives you a solution, work backward to the underlying problem.
- **Success Metric**: Must have a baseline and a target. If the baseline is unknown, mark it `[TBD — measure before cycle starts]` and flag it as a gate blocker. Having 1-2 TBDs with a clear measurement plan is acceptable in a draft; having *all* TBDs means you haven't done enough research to write a spec yet.
- **Constraints**: Non-negotiable hard limits only. Performance thresholds, regulatory requirements, compatibility needs. Not preferences.
- **Out of Scope**: Things that are tempting to add but excluded from this cycle. Be explicit — ambiguity here causes mid-sprint debates.
- **Kill Condition**: The most important and most commonly under-specified section. Require a timeframe and a measurable threshold. "If it doesn't work" is never acceptable. "If after 2 weeks of A/B testing conversion hasn't improved by at least 2pp, stop" is.

---

## Discovery Brief (Discovery Mode)

A Discovery Brief forces hypothesis clarity before experimentation by answering: *What do we think the problem is? Who has it? What question will our experiment answer? What signal tells us we're right or wrong? When do we stop?*

Every Discovery Brief maps to the Discovery Decision Spine:
```
Task → Experiment → Problem Hypothesis → Validated Outcome → Vision
```

### Template (YAML frontmatter)

```markdown
---
doc_type: discovery_brief
variant: flow_discovery
status: draft
owner: "<person or role>"
cycle_id: "<discovery cycle identifier>"
hypothesis: "<one-line problem hypothesis>"
target_user: "<who we think has this problem>"
validation_signal: "<what evidence would confirm/deny>"
kill_condition: "<when to stop>"
created: "<YYYY-MM-DD>"
last_reviewed: "<YYYY-MM-DD>"
spine:
  vision: "<what vision this serves>"
  problem_hypothesis: "<the hypothesis we're testing>"
  experiment: "<experiment approach>"
---

# <Hypothesis Title>

## Problem Hypothesis

<2-4 sentences framing the assumed problem. Use hypothesis language: "We believe that [target users]
experience [problem] when [context], which causes [impact]." Be honest about what you know vs.
what you're assuming.>

## Target User

<Who specifically experiences this problem? Not "all users" — a specific segment, persona, or
cohort. The narrower, the faster you can validate.>

## Experiment Question

<The single question this discovery cycle will answer. Frame it as a yes/no or measurable question:
"Do enterprise users (>50 seats) actually need SSO, or is it a procurement checkbox?"
"Will users engage with in-app tips, or do they ignore them?">

## Validation Signal

<What evidence would convince you the hypothesis is true or false? Be specific about the signal
type and minimum bar:>

| Signal | Method | Minimum bar |
|--------|--------|-------------|
| <what you'll observe> | <how: interviews, prototype test, analytics, landing page> | <threshold: "5 of 8 interviewees mention X unprompted"> |

<The validation method should be the cheapest/fastest way to learn. Prefer interviews, landing
pages, concierge tests, and prototypes over production code — production code is usually the
slowest and most expensive validation method.>

## Kill Condition

<When to stop pursuing this hypothesis. Discovery cycles are short (1-2 weeks), so kill conditions
should match. Example: "If after 8 user interviews none mention search as a top-3 pain point,
archive this hypothesis and move to the next.">
```

### Template (plain Markdown)

```markdown
# <Hypothesis Title>

> **Variant**: Discovery Brief | **Status**: draft | **Owner**: <name> | **Created**: <date>

## Problem Hypothesis
...
```

### Writing guidance for Discovery Brief sections

- **Problem Hypothesis**: Frame as a belief, not a fact. "We believe..." is the right opener. If the user states the problem as certain fact but there's no validation data, gently reframe it as a hypothesis.
- **Target User**: Push for specificity. "Enterprise users" is too broad. "Enterprise users with >50 seats who went through procurement" is testable.
- **Experiment Question**: One question per brief. If they have multiple questions, suggest multiple discovery cycles or prioritize the riskiest assumption.
- **Validation Signal**: The bar matters as much as the signal. "Users say they want it" is weak. "5 of 8 users mention this unprompted when asked about their top frustrations" is strong. Encourage experiment types that are cheap and fast — interviews, landing pages, concierge tests, prototypes — not production code.
- **Kill Condition**: Discovery cycles are 1-2 weeks, so kill conditions should be tight. "If after 1 week of interviews we can't find the signal, pivot or stop."

---

## Validation

When asked to validate either variant, check against the appropriate criteria.

### SPEC-Lite required fields

- [ ] Problem statement describes a pain, not a solution
- [ ] Success metric has both baseline and target values
- [ ] At least 2 constraints listed
- [ ] At least 2 out-of-scope items listed
- [ ] Kill condition is specific and measurable (timeframe + threshold)
- [ ] If using frontmatter: `variant: flow_outcome` and all YAML fields present

### Discovery Brief required fields

- [ ] Problem hypothesis uses hypothesis language ("we believe...")
- [ ] Target user is specific (not "all users" or "everyone")
- [ ] Experiment question is a single, answerable question
- [ ] Validation signal has a method AND a minimum bar / threshold
- [ ] Kill condition includes timeframe (1-2 weeks typical for discovery)
- [ ] If using frontmatter: `variant: flow_discovery` and all YAML fields present

### Quality checks (both variants)

- [ ] The right variant was chosen (discovery vs outcome)
- [ ] Decision Spine mapping is complete and coherent
- [ ] Kill condition could be evaluated in a weekly review with available data
- [ ] Document fits on one page (conceptually — not a hard line count, but it should be concise)

### Validation report format

```
## Validation: <title> (<variant>)

**Overall**: PASS / FAIL (N issues)

### Required Fields
✅ Problem hypothesis — clear, uses hypothesis framing
❌ Validation signal — missing minimum bar
✅ Target user — specific segment identified
⚠️  Kill condition — has timeframe but no specific threshold
...

### Quality
⚠️  Spine mapping — missing "vision" link
✅ Variant selection — Discovery Brief is correct for this stage

### Fixes needed
1. Add minimum evidence bar to validation signal
2. Make kill condition more specific: what metric, what threshold?
3. Fill in spine.vision field
```

---

## Gate Checks

### Gate O2 (SPEC-Lite → Build Contract)

Gate O2 asks: "Is this SPEC-Lite complete enough to proceed to a Build Contract?"

**All validation checks must pass, PLUS:**
1. Spine mapping is complete and coherent through all levels
2. Success metric is instrumented or instrument-able with existing tooling
3. Kill condition is reviewable in the next weekly Kill/Merge meeting
4. No TBDs remain — all placeholder values resolved
5. Owner is assigned

### Gate D1 (Discovery Brief → Experiment)

Gate D1 asks: "Is this Discovery Brief complete enough to design and run an experiment?"

**All validation checks must pass, PLUS:**
1. Spine mapping traces to Vision
2. Experiment is the cheapest/fastest way to test the hypothesis (not premature engineering)
3. Validation signal can be collected within the discovery cycle timeframe
4. Kill condition can be evaluated at the weekly Discovery Review
5. Owner is assigned

### Gate report format

```
## Gate <O2|D1> Check: <title>

**Verdict**: READY / NOT READY

| Criterion | Status | Notes |
|-----------|--------|-------|
| All required fields | ✅ | — |
| Quality checks pass | ✅ | — |
| Spine mapping complete | ✅ | Maps to "Platform Reliability" vision |
| <variant-specific criterion> | ⚠️ | <details> |
| No TBDs | ❌ | Baseline still TBD |
| Owner assigned | ✅ | @ahmad |

**Blockers:**
1. <specific actionable fix>
2. <specific actionable fix>

**Recommendation**: <concise next step>
```

---

## Converting Discovery Brief → SPEC-Lite

When the team transitions from Discovery to Outcome mode (signals: consistent user demand, repeated usage, early revenue, clear product direction), a validated Discovery Brief gets upgraded into a SPEC-Lite.

**Conversion mapping:**

| Discovery Brief | → | SPEC-Lite |
|----------------|---|-----------|
| Problem Hypothesis (now validated) | → | Problem (stated as fact, with evidence) |
| Validation Signal results | → | Success Metric baseline |
| (new) | → | Success Metric target |
| (new) | → | Constraints |
| (new) | → | Out of Scope |
| Kill Condition (update for outcome context) | → | Kill Condition (metric-based, longer timeframe) |

When converting:
1. Read the existing Discovery Brief
2. Carry over what was validated — the problem hypothesis becomes a problem statement backed by evidence
3. Use the validation signal results as the baseline for the success metric
4. Ask the user for: target metric value, constraints, out-of-scope items, and updated kill condition
5. Generate the SPEC-Lite with a `converted_from` block in the frontmatter to preserve lineage:

```yaml
converted_from:
  doc_type: discovery_brief
  cycle_id: "<original discovery cycle id>"
  validation_result: "<what was validated and how — e.g., '6 of 8 confirmed, threshold was 5'>"
```

This traceability matters — it connects the outcome work back to the evidence that justified starting it.

---

## Updating

When updating, read the existing file first. Apply only the requested changes. After editing, run a quick validation to confirm the change didn't break completeness (e.g., changing the success metric might invalidate the kill condition).

## Tips for common situations

- **User gives a Jira ticket or feature request**: Extract the problem, draft the appropriate variant, note what's missing. Feature requests are usually solutions — find the underlying problem.
- **"Just scope this quickly"**: Draft all sections with your best guess, mark unknowns as `[TBD]`, flag them. Speed is fine, but every section must exist.
- **Multiple initiatives in one request**: Suggest splitting into separate documents. Each should target a single hypothesis (Discovery) or measurable outcome (Outcome).
- **User resists kill conditions**: Kill conditions protect the team from sunk-cost thinking. They're pre-commitments to evidence-based decisions, not predictions of failure. Suggest a generous threshold if they're uncomfortable.
- **Wrong variant chosen**: If you notice someone wrote a SPEC-Lite but the problem is actually unvalidated, suggest switching to a Discovery Brief first. Shipping a solution to an unvalidated problem is the most expensive way to learn.
