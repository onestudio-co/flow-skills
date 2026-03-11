---
name: flow-experiment-design
description: >
  Designs the smallest, cheapest, fastest experiment to validate or invalidate a hypothesis.
  Triggered when the user wants to test an assumption, validate a problem or solution,
  or figure out the right experiment for learning. Enforces the FLOW principle that
  production code is the most expensive validation method and should be a last resort.
  Trigger phrases: "design an experiment", "how should we test", "validate this",
  "smallest experiment", "cheapest way to learn", "experiment before engineering",
  "flow-experiment-design", "what experiment should we run".
---

# Flow Experiment Design

## Core Principle

**Experiment before engineering** (Gate D2).

The goal is validated learning, not shipping code. Production code is the most expensive
validation method and should be treated as a last resort. Before writing any code, exhaust
cheaper ways to answer the question. Every experiment must have a clear hypothesis, a
measurable signal, and a decision framework that dictates what happens with the result.

## Experiment Type Ladder

Ordered by cost and speed. Always start from the top and only move down when a cheaper
option cannot answer the question.

| # | Type | Time | Cost | Best for | Signal quality |
|---|------|------|------|----------|----------------|
| 1 | Desk research / data analysis | Hours | Free | Checking if data already exists | Medium |
| 2 | User interviews (5-8 people) | 1 week | Low | Problem validation, understanding context | High for qualitative |
| 3 | Landing page / smoke test | 2-3 days | Low | Demand validation | Medium-High |
| 4 | Survey | 3-5 days | Low | Quantifying known patterns | Medium (beware bias) |
| 5 | Concierge / Wizard of Oz | 1-2 weeks | Medium | Solution validation without code | High |
| 6 | Clickable prototype | 1 week | Medium | UX validation, flow testing | Medium-High |
| 7 | Instrumented spike / throwaway code | 1-2 weeks | Medium-High | Technical feasibility | High for technical |
| 8 | A/B test with production code | 2-4 weeks | High | Measuring behavioral change | Highest |

## Selection Workflow

Walk through these questions in order to pick the right experiment type:

### 1. What are you trying to learn?

| Learning goal | Start with |
|---------------|------------|
| Does the problem exist? | Interviews (#2) or desk research (#1) |
| Does the solution work? | Concierge (#5) or clickable prototype (#6) |
| Will users adopt it? | Landing page (#3) or smoke test (#3) |
| Will a metric move? | A/B test (#8), but only after problem is validated |
| Is it technically feasible? | Instrumented spike (#7) |

### 2. What is your confidence level in the problem?

- **Low confidence** (assumption-stage) --> Interviews or desk research. Do NOT skip to building.
- **Medium confidence** (some signal, not enough) --> Survey to quantify, or landing page to measure demand.
- **High confidence** (validated problem, exploring solutions) --> Prototype, concierge, or A/B test.

### 3. What data already exists?

Before designing any new experiment, check:
- Analytics / product metrics (do we already have signal?)
- Customer support tickets (are people already complaining about this?)
- Competitor analysis (has someone else validated this?)
- Internal research or past experiments

If data already exists, start with desk research (#1) and only design a new experiment if
the existing data is insufficient.

### 4. What is the time budget?

| Available time | Recommended types |
|----------------|-------------------|
| < 1 week | Desk research, interviews (3-5 rapid), landing page |
| 1-2 weeks | Full interview round, survey, clickable prototype, concierge |
| 2-4 weeks | Instrumented spike, A/B test |

### 5. Always recommend the CHEAPEST option that can answer the question.

If the user suggests a more expensive experiment type, challenge it:
- "Could we answer this with interviews instead of building a prototype?"
- "Do we need an A/B test, or would a landing page give us enough signal?"
- "What would change your mind without writing any code?"

## Experiment Design Template

When designing an experiment, produce output in this format:

```markdown
## Experiment: <title>

**Hypothesis**: <what we believe>
**Question**: <what this experiment answers>
**Type**: <from the ladder>
**Duration**: <timeframe>
**Sample size**: <how many participants/data points>

### Setup
<What needs to happen before the experiment runs>

### Execution
<Step-by-step what happens during the experiment>

### Measurement
| Signal | Method | Minimum bar |
|--------|--------|-------------|
| <what> | <how> | <threshold> |

### Kill condition
<When to stop early -- e.g., zero signups after 50 visits, 3/5 interviewees say "no">

### Decision framework
- If signal ABOVE bar --> <next step>
- If signal BELOW bar --> <next step>
- If inconclusive --> <next step>
```

Every field is mandatory. If the user cannot articulate the hypothesis, help them form one
before proceeding. If there is no decision framework, ask: "What will you DO with the result?"

## Sample Size Guidance

| Experiment type | Minimum sample | Notes |
|-----------------|---------------|-------|
| User interviews | 5-8 for pattern detection, 12-15 for saturation | Stop when you hear the same themes repeated |
| Landing page / smoke test | ~100 visits minimum for conversion signal | Depends on expected conversion rate; lower rate needs more traffic |
| Survey | 30+ for basic quantification | 100+ for segment comparisons |
| Concierge / Wizard of Oz | 5-10 users through the full flow | Focus on depth over breadth |
| Clickable prototype | 5-8 usability sessions | Diminishing returns after 8 |
| A/B test | Use statistical significance calculators | Minimum 2 weeks runtime to capture weekly cycles |

When in doubt, more is better -- but do not let perfect sample size delay learning. A
directional signal from 5 interviews beats no signal from a 6-month study.

## Anti-Patterns to Flag

When reviewing a proposed experiment, watch for these mistakes and redirect:

### 1. A/B testing an unvalidated problem
**Symptom**: "Let's run an A/B test to see if users want X."
**Problem**: A/B tests measure behavioral differences, not whether the problem exists.
**Redirect**: "The problem isn't validated yet. Let's run 5-8 interviews first to confirm
users actually experience this pain point. Then we can A/B test solutions."

### 2. Building an MVP when a landing page would suffice
**Symptom**: "Let's build a minimal version and see if people use it."
**Problem**: Even a minimal build is weeks of work. A landing page takes days.
**Redirect**: "What if we put up a landing page describing the solution and measure
sign-up intent? If nobody clicks 'Get early access,' we save weeks of building."

### 3. No decision framework
**Symptom**: Experiment is designed but there is no "what happens next" section.
**Problem**: Without a decision framework, results get rationalized to fit the preferred outcome.
**Redirect**: "Before we run this -- what will you DO with the result? What number makes
you go forward? What number makes you stop?"

### 4. Insufficient sample size
**Symptom**: "We talked to 2 people and they liked it."
**Problem**: 2-3 data points are anecdotes, not evidence.
**Redirect**: "That's a promising early signal, but we need 5-8 interviews minimum to
detect patterns. Can we schedule 3-5 more conversations this week?"

### 5. Solution-first thinking
**Symptom**: "We should test this feature" without articulating the problem.
**Problem**: Testing a solution without a validated problem leads to building things nobody needs.
**Redirect**: "What problem does this feature solve? Let's validate that the problem
exists and matters before we test solutions."

### 6. Experiment scope creep
**Symptom**: "While we're at it, let's also test X, Y, and Z."
**Problem**: Multi-variable experiments are hard to interpret and slow to run.
**Redirect**: "Let's test one thing at a time. What's the single most important question
to answer first?"

## Process Checklist

Before finalizing any experiment design, verify:

- [ ] Hypothesis is falsifiable (it can be proven wrong)
- [ ] A cheaper experiment type was considered and ruled out with reasoning
- [ ] Sample size is sufficient for the experiment type
- [ ] Measurement signals are concrete and observable (not "users like it")
- [ ] Minimum bar / threshold is defined before the experiment runs (not after)
- [ ] Kill condition exists to prevent wasting time on a dead end
- [ ] Decision framework specifies concrete next steps for all outcomes
- [ ] Timeline is realistic given the team's capacity
- [ ] The experiment answers ONE clear question
