---
name: flow-discovery-brief
description: >
  Create deep, high-quality Discovery Brief documents for FLOW-Discovery mode — the inception-stage
  artifact when the primary risk is building before discovering the right problem. Use this skill
  when the user says "discovery brief", "hypothesis", "validate a problem", "do users actually",
  "test whether", "we think users", "inception", "problem discovery", "flow-discovery-brief",
  or describes a situation where the problem itself is uncertain and the goal is learning, not
  shipping. This is the dedicated, deep-guidance version focused exclusively on Discovery Briefs
  with enhanced hypothesis framing, experiment design options, and validation signal quality.
---

# Flow Discovery Brief Skill

You create Discovery Brief documents for FLOW-Discovery mode. A Discovery Brief is the inception-stage planning artifact used when the primary risk is **building before discovering the right problem**. It forces the team to articulate what they believe, design the cheapest experiment to test that belief, and commit to a kill condition before spending engineering time.

This skill is the dedicated, deep version focused exclusively on Discovery Briefs. It provides enhanced guidance for hypothesis framing, experiment design selection, and validation signal quality that goes beyond what a general spec skill offers.

---

## When to Use Discovery Mode (Not Outcome)

Use a Discovery Brief — not a SPEC-Lite — when any of these conditions are true:

| Signal | Example |
|--------|---------|
| New product, new market | "We want to enter the SMB accounting space" |
| Unclear demand | "We think restaurants might need better order management" |
| Problem itself is uncertain | "Users might be frustrated by X, but we haven't talked to any" |
| Hypothesis language | "We think...", "We want to test whether...", "We're not sure if..." |
| No validated evidence | No interviews, no analytics, no signal that users have this pain |
| Learning is the goal | The next step is an experiment, not a feature |

**Do NOT use a Discovery Brief when:**
- The problem is validated with evidence (use SPEC-Lite / Outcome mode)
- You know the metric to move and have a baseline (use SPEC-Lite)
- The user says "build", "ship", "improve X metric" (use SPEC-Lite)

**Disambiguation question** (when unsure): "Are you trying to **validate whether this is the right problem** or **ship a solution to a known problem**?" If the answer is validate, use this skill.

---

## Discovery Decision Spine

Every Discovery Brief must trace through the Discovery Decision Spine. This spine ensures that the smallest task connects upward to the biggest vision, and that every level is explicit:

```
Vision
  └─ Problem Hypotheses
       └─ Experiments
            └─ Validated Outcomes
                 └─ Tasks
```

Read the spine top-down to understand strategy, bottom-up to justify work:

| Level | Question it answers | Example |
|-------|-------------------|---------|
| **Vision** | What future are we working toward? | "Every small restaurant captures every revenue opportunity" |
| **Problem Hypotheses** | What do we believe the problem is? | "Peak-hour order overload causes missed orders for small restaurants" |
| **Experiments** | How will we test that belief? | "8 problem-discovery interviews with owner-operators" |
| **Validated Outcomes** | What did we learn? | "6 of 8 confirmed; peak-hour order mgmt is a top-3 pain" |
| **Tasks** | What work do we do this cycle? | "Recruit 8 interviewees, write interview script, conduct and synthesize" |

The spine must be coherent: each level should logically connect to the one above and below it. If you cannot draw a straight line from Task to Vision, something is misaligned.

---

## Discovery Brief Template

### YAML Frontmatter Version

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

<The single question this discovery cycle will answer. Frame it as a yes/no or measurable question.>

## Validation Signal

<What evidence would convince you the hypothesis is true or false? Be specific about the signal
type and minimum bar:>

| Signal | Method | Minimum bar |
|--------|--------|-------------|
| <what you'll observe> | <how: interviews, prototype test, analytics, landing page> | <threshold: "5 of 8 interviewees mention X unprompted"> |

## Kill Condition

<When to stop pursuing this hypothesis. Discovery cycles are short (1-2 weeks), so kill conditions
should match.>
```

### Plain Markdown Version

```markdown
# <Hypothesis Title>

> **Variant**: Discovery Brief | **Status**: draft | **Owner**: <name> | **Created**: <date>

## Problem Hypothesis
...

## Target User
...

## Experiment Question
...

## Validation Signal
...

## Kill Condition
...
```

---

## Enhanced Hypothesis Framing Guide

The hypothesis is the foundation of a Discovery Brief. A weak hypothesis produces a wasted experiment. A strong hypothesis is specific, falsifiable, and focused on the problem — never the solution.

### Hypothesis Structure

Use this template:

> "We believe that **[target users]** experience **[problem]** when **[context]**, which causes **[impact]**."

Each component must be present:

| Component | What it does | Test for quality |
|-----------|-------------|-----------------|
| **Target users** | Narrows who we are studying | Could you recruit these people? If not, too vague. |
| **Problem** | States the pain or friction | Is it a problem or a solution in disguise? |
| **Context** | Specifies when/where the problem occurs | Does it identify the trigger situation? |
| **Impact** | Describes the consequence | Is the impact meaningful enough to justify solving? |

### Common Mistakes

| Mistake | Why it fails | Fix |
|---------|-------------|-----|
| **Stating a solution as a hypothesis** | You skip the problem and jump to building | Strip the solution, find the pain underneath |
| **Being too broad** | Untestable — you cannot interview "everyone" | Narrow the user segment and context |
| **Confusing symptoms with root causes** | You validate a symptom but miss the real problem | Ask "why does this happen?" until you reach the cause |
| **Stating facts as hypotheses** | If you already know it is true, there is nothing to discover | Reserve hypothesis language for genuine unknowns |

### Good vs. Bad Hypothesis Examples

**Example 1: Restaurant Order Management**

- BAD: "Restaurants need a better order management dashboard."
  - Why bad: This is a solution ("dashboard"), not a problem. It assumes both the problem and the fix.
- GOOD: "We believe that owner-operators of small restaurants (under 10 employees) struggle to manage the volume of incoming online orders during peak hours, which causes them to miss orders and lose customers."
  - Why good: Specific user, specific problem, specific context (peak hours), specific impact (missed orders, lost customers). Testable via interviews.

**Example 2: Developer Onboarding**

- BAD: "Developers want better documentation."
  - Why bad: Too broad (which developers? documentation for what?), and "want" is not evidence of a pain.
- GOOD: "We believe that new backend developers joining teams with >50 microservices experience significant confusion during their first two weeks because there is no map of service dependencies, which causes them to average 3+ days to ship their first fix."
  - Why good: Specific persona (new backend devs), specific context (large microservice codebase, first two weeks), measurable impact (3+ days to first fix).

**Example 3: Personal Finance**

- BAD: "Users are bad at budgeting and need help."
  - Why bad: "All users" is untestable; "need help" is a solution premise, not a problem observation.
- GOOD: "We believe that freelancers with variable monthly income experience anxiety about whether they can cover next month's fixed expenses, which causes them to either overspend in good months or restrict spending unnecessarily in normal months."
  - Why good: Specific segment (freelancers with variable income), emotional and behavioral impact, specific enough to test in 5-8 interviews.

**Example 4: Team Communication**

- BAD: "Teams have too many meetings."
  - Why bad: Symptom, not a root cause. Why do they have too many meetings?
- GOOD: "We believe that product managers in remote-first teams with 3+ time zones schedule redundant sync meetings because async status updates are scattered across Slack, email, and project tools, which causes them to spend 8+ hours per week in meetings that could be async."
  - Why good: Goes past the symptom (too many meetings) to the root cause (fragmented async updates). Specific trigger, specific impact (8+ hours/week), specific enough to validate.

---

## Experiment Type Recommendations

Choose the cheapest, fastest experiment that can answer your hypothesis. The list below is ordered from least expensive to most expensive. Default to the top of the list and only move down when a cheaper option genuinely cannot answer the question.

### 1. User Interviews (Recommended Default)

**Cost**: Low | **Speed**: 1-2 weeks | **Best for**: Problem discovery, understanding context

- Recruit 5-8 people from the target segment
- 30 minutes each, semi-structured
- Lead with open-ended questions ("Walk me through your worst day at work") before narrowing
- Look for unprompted mentions of the problem
- Record and synthesize; pattern-match across interviews

**When to use**: Almost always your first experiment in discovery. Interviews surface problems you did not anticipate, give you the user's language, and cost almost nothing.

**Minimum bar guidance**: 5 of 8 interviewees mention the problem as a top-3 pain unprompted. If 3 or fewer mention it, the problem is not a priority for this segment.

**Kill condition example**: "If after 8 interviews fewer than 5 owners mention peak-hour order management as a top-3 pain point unprompted, archive this hypothesis."

### 2. Landing Page / Smoke Test

**Cost**: Low | **Speed**: 1-2 weeks setup + 1-2 weeks data | **Best for**: Demand validation, willingness to act

- Create a simple page describing the problem and a promise to solve it
- Measure sign-ups, email captures, or waitlist joins
- Drive traffic via targeted ads, communities, or direct outreach
- No product needed — you are testing whether people care enough to act

**When to use**: After interviews suggest a problem exists, and you want to quantify demand before building.

**Minimum bar guidance**: Conversion rate above 5% from targeted traffic (not viral/broad traffic). Below 3% strongly suggests insufficient demand.

**Kill condition example**: "If after 2 weeks and 500 targeted visitors, fewer than 25 sign up for the waitlist (5%), archive this hypothesis."

### 3. Concierge / Wizard of Oz

**Cost**: Medium (time-intensive) | **Speed**: 1-3 weeks | **Best for**: Testing whether users value a solution before building it

- Deliver the experience manually, with a human playing the role of the product
- The user thinks they are getting a product experience; behind the scenes, you do it by hand
- Measures willingness to use, frequency, and satisfaction

**When to use**: When you need to validate not just the problem but whether users would engage with a solution pattern, without building the actual system.

**Minimum bar guidance**: 3 of 5 test users complete the flow AND return for a second use unprompted. One-time curiosity does not count.

**Kill condition example**: "If after 5 concierge users over 2 weeks, fewer than 3 return for a second use without prompting, archive this approach."

### 4. Prototype / Clickable Mockup

**Cost**: Medium | **Speed**: 1-2 weeks to build + 1 week to test | **Best for**: Usability validation, concept testing

- Build a non-functional (or minimally functional) prototype in Figma, a no-code tool, or a quick code scaffold
- Put it in front of 5-8 target users and observe behavior
- Measure task completion, confusion points, and stated intent to use

**When to use**: When the experiment question is about whether users understand and would use a specific experience pattern. Not for problem discovery — the problem should already be partially validated.

**Minimum bar guidance**: 6 of 8 users complete the primary task without help AND say they would use this in their real workflow.

**Kill condition example**: "If fewer than 5 of 8 users can complete the core task without assistance, the concept needs rethinking."

### 5. Analytics Deep-Dive

**Cost**: Low (if data exists) | **Speed**: Days | **Best for**: Quantifying suspected problems in existing products

- Query existing analytics, logs, or databases for behavioral evidence
- Look for drop-off points, error rates, rage clicks, support ticket patterns
- Quantify the problem's scope and frequency

**When to use**: Only when you have an existing product with meaningful usage data. Not applicable for new products or new markets.

**Minimum bar guidance**: The problem affects at least 10% of the relevant user segment, or causes measurable business impact (revenue loss, churn correlation, support cost).

**Kill condition example**: "If analytics show fewer than 5% of users encounter this flow, or the drop-off rate is below 15%, the problem is not large enough to prioritize."

### 6. A/B Test

**Cost**: High (requires production code) | **Speed**: 2-4 weeks minimum | **Best for**: Measuring solution impact with statistical rigor

- Deploy two variants to real users and measure the difference
- Requires sufficient traffic for statistical significance
- Requires production-quality code for both variants

**When to use**: Last resort in discovery. A/B tests are expensive, slow, and usually test solutions, not problems. Use only when you have validated the problem via cheaper methods and need to compare two specific solution approaches. In most discovery contexts, you should not be here yet.

**Minimum bar guidance**: Statistically significant result (p < 0.05) with a meaningful effect size (context-dependent; define before running).

**Kill condition example**: "If after 3 weeks the test has not reached significance, or the effect size is below the minimum meaningful threshold, stop the test."

---

## Validation Signal Quality Guide

The validation signal is what separates rigorous discovery from wishful thinking. A weak signal gives you false confidence; a strong signal gives you genuine evidence to act on.

### Strong Signals vs. Weak Signals

| Weak Signal | Why it is weak | Strong Signal | Why it is strong |
|-------------|---------------|---------------|-----------------|
| "Users said they like the idea" | Politeness bias; saying "yes" costs nothing | "5 of 8 users described this exact problem unprompted when asked about frustrations" | Unprompted = genuine salience, not social desirability |
| "100 people visited the landing page" | Traffic is not intent | "7% of visitors signed up for the waitlist with their work email" | Action (signing up) with a real identifier (work email) shows commitment |
| "Positive survey responses" | Surveys measure opinions, not behavior | "3 of 5 concierge users returned for a second session without being asked" | Repeat behavior is the strongest signal of real value |
| "Users said they would pay for this" | Hypothetical willingness is unreliable | "2 of 5 users asked how to buy / when it launches without being prompted" | Unprompted purchase intent is a strong signal |
| "The NPS score was 8+" | NPS measures sentiment, not problem severity | "Users ranked this as their #1 or #2 pain in a forced-rank exercise" | Forced ranking eliminates the "everything is important" problem |
| "Lots of social media engagement" | Engagement is not evidence of a problem worth solving | "12 people in the target segment DMed asking for early access" | Proactive outreach = genuine demand |

### Minimum Bar Guidance Per Experiment Type

| Experiment | Minimum bar | Rationale |
|-----------|------------|-----------|
| User interviews (8 people) | 5 of 8 mention the problem unprompted as top-3 pain | Majority unprompted signal; fewer than 5 means it is not a priority |
| Landing page (500 visitors) | 5%+ conversion to sign-up/waitlist | Below 3% = insufficient demand for this positioning |
| Concierge (5 users) | 3 of 5 return for a second use unprompted | One-time curiosity does not validate ongoing value |
| Prototype test (8 users) | 6 of 8 complete core task unassisted + state intent to use | If users cannot complete the task, the concept fails |
| Analytics deep-dive | 10%+ of segment affected OR measurable business impact | Below 10% is a niche problem; may not justify investment |
| A/B test | Statistically significant + meaningful effect size | Significance without meaningful effect = noise |

### Unprompted vs. Prompted Evidence

This distinction is critical. Prompted evidence is dramatically weaker than unprompted evidence.

| | Unprompted | Prompted |
|---|-----------|---------|
| **Definition** | The user raises the topic themselves, without being asked about it | The user responds to a direct question about the topic |
| **Example** | "What frustrates you most about your workflow?" → user mentions order management | "Do you have trouble managing orders during peak hours?" → user says yes |
| **Signal strength** | Strong — the problem is top-of-mind and salient | Weak — humans tend to agree with direct questions (acquiescence bias) |
| **How to get it** | Open-ended questions, "walk me through" prompts, forced ranking without mentioning the target topic | Direct questions, yes/no questions, leading questions |
| **Rule of thumb** | Count unprompted mentions as full evidence | Count prompted mentions as half evidence at best; do not rely on prompted-only signals |

**Interview design implication**: Always start with open-ended questions. Reserve direct questions about your hypothesis for the end of the interview. If nobody mentions the problem in the open-ended section, the direct question data is suspect.

---

## Kill Condition Guidance for Discovery

Kill conditions in discovery are different from kill conditions in outcome/build cycles. Discovery cycles are short (1-2 weeks), the goal is learning (not shipping), and the cost of continuing a dead-end hypothesis is not just time but also the opportunity cost of not testing a better hypothesis.

### Principles

1. **Discovery cycles are 1-2 weeks.** Kill conditions must match. A 4-week kill condition in discovery means you are probably building, not discovering.
2. **Kill conditions should be tight.** In discovery, false negatives are cheaper than false positives. It is better to kill a marginally true hypothesis and revisit later than to spend 3 months building on weak evidence.
3. **Every kill condition needs three components**: a timeframe, a metric/threshold, and a next action (archive, pivot, or escalate).
4. **"Archive" is not "delete."** When a hypothesis is killed, document what was learned. The learnings often point to the next hypothesis.

### Kill Condition Examples Per Experiment Type

| Experiment | Kill condition example |
|-----------|----------------------|
| **User interviews** | "If after 8 interviews over 2 weeks, fewer than 5 mention [problem] as a top-3 pain unprompted, archive this hypothesis and document what they mentioned instead." |
| **Landing page** | "If after 2 weeks and 500 targeted visitors, sign-up rate is below 3%, archive this positioning. Review sign-up copy and traffic source before deciding whether to reframe or move on." |
| **Concierge** | "If after 5 concierge users over 2 weeks, fewer than 3 return for a second use unprompted, archive this solution approach. Review whether the problem is valid but the approach is wrong." |
| **Prototype test** | "If fewer than 5 of 8 users can complete the core task without assistance, stop testing this concept. Synthesize confusion points and decide whether to redesign or pivot." |
| **Analytics deep-dive** | "If the data shows fewer than 5% of the segment encounters this flow, or drop-off is below 10%, deprioritize this problem. Document the actual numbers for future reference." |
| **A/B test** | "If after 3 weeks the test has not reached statistical significance with a minimum detectable effect of [X], stop the test and accept the null hypothesis for now." |

### What Happens After a Kill

When a kill condition fires:

1. **Document what was learned** — not just "it failed," but what the data actually showed and what it implies
2. **Document what users actually said/did** — this often contains the seed of the next hypothesis
3. **Archive the brief** — change status to `killed` in frontmatter, add a `## Post-Mortem` section
4. **Decide next action**: pivot (reframe the hypothesis based on learnings), explore adjacent (test a different hypothesis from the same domain), or move on (this space does not have a worthwhile problem)

---

## Gate D1 Checklist

Gate D1 asks: **"Is this Discovery Brief complete enough to design and run an experiment?"**

A brief that passes Gate D1 means the team can start recruiting participants, building prototypes, or setting up landing pages immediately — no further clarification needed.

### Required Fields

- [ ] **Problem hypothesis** uses hypothesis language ("We believe that...")
- [ ] **Problem hypothesis** includes all four components: target users, problem, context, impact
- [ ] **Problem hypothesis** is about a problem, not a solution in disguise
- [ ] **Target user** is specific enough to recruit (could you find 8 of these people this week?)
- [ ] **Experiment question** is a single, answerable question (not compound)
- [ ] **Experiment question** can be answered within the cycle timeframe (1-2 weeks)
- [ ] **Validation signal** has at least one row with method AND minimum bar
- [ ] **Validation signal** minimum bar uses unprompted evidence as the primary measure
- [ ] **Kill condition** includes a timeframe (1-2 weeks for discovery)
- [ ] **Kill condition** includes a specific, measurable threshold
- [ ] **Kill condition** includes a next action (archive, pivot, or escalate)

### Quality Checks

- [ ] **Spine mapping** is complete and traces from Task through to Vision
- [ ] **Spine is coherent** — each level logically connects to the level above
- [ ] **Experiment is the cheapest/fastest** way to test this hypothesis (not premature engineering)
- [ ] **Validation signal can be collected** within the cycle timeframe
- [ ] **Kill condition can be evaluated** at the weekly Discovery Review
- [ ] **Owner is assigned** (not TBD)
- [ ] **Document fits on one page** conceptually (concise, no implementation detail)

### Readiness Criteria

All required fields must pass AND all quality checks must pass. If any item fails, the brief is NOT READY and must be revised before an experiment begins.

### Gate D1 Report Format

```
## Gate D1 Check: <Hypothesis Title>

**Verdict**: READY / NOT READY

| Criterion | Status | Notes |
|-----------|--------|-------|
| Hypothesis uses proper framing | ... | ... |
| Hypothesis is about a problem, not a solution | ... | ... |
| Target user is recruitable | ... | ... |
| Experiment question is single and answerable | ... | ... |
| Validation signal has method + minimum bar | ... | ... |
| Signal uses unprompted evidence | ... | ... |
| Kill condition has timeframe + threshold + next action | ... | ... |
| Spine mapping complete and coherent | ... | ... |
| Experiment is cheapest/fastest option | ... | ... |
| Owner assigned | ... | ... |

**Blockers:**
1. <specific actionable fix>
2. <specific actionable fix>

**Recommendation**: <concise next step>
```

---

## Output Format

When creating a Discovery Brief, produce two outputs:

### Output 1: The Discovery Brief

The full document using the YAML frontmatter template above, with all sections completed based on the user's input and your guided clarification.

### Output 2: Reviewer Checklist Version

A compact checklist version that a reviewer (tech lead, PM, or stakeholder) can use to quickly evaluate the brief:

```markdown
## Reviewer Checklist: <Hypothesis Title>

**Author**: <owner> | **Date**: <created> | **Cycle**: <cycle_id>

### Hypothesis
> <one-line hypothesis from frontmatter>

- [ ] Is the problem real (not a solution in disguise)?
- [ ] Is the target user specific enough to recruit this week?
- [ ] Does the hypothesis include context (when/where the problem occurs)?
- [ ] Is the impact meaningful enough to justify an experiment?

### Experiment Design
> <experiment approach from spine>

- [ ] Is this the cheapest/fastest way to test the hypothesis?
- [ ] Can the experiment run within 1-2 weeks?
- [ ] Is the experiment question a single, answerable question?

### Validation
> <validation signal from frontmatter>

- [ ] Is the minimum bar specific and measurable?
- [ ] Does the signal rely on unprompted evidence?
- [ ] Could you evaluate this signal at a weekly review?

### Kill Condition
> <kill condition from frontmatter>

- [ ] Does it include a timeframe (1-2 weeks)?
- [ ] Does it include a measurable threshold?
- [ ] Does it specify what happens next (archive/pivot/escalate)?

### Spine Coherence
- [ ] Can you trace a logical line from Task to Vision?

**Reviewer verdict**: APPROVE / REVISE (list concerns below)
```

---

## File Conventions

- **Location**: Store files in `specs/` at the project root. Create the directory if it doesn't exist.
- **Naming**: Use kebab-case with a `discovery-` prefix: `specs/discovery-peak-hour-orders.md`
- **Format**: Default to Markdown with YAML frontmatter. Check existing files in `specs/` for the project's convention and adapt if needed.

---

## Interaction Protocol

When a user triggers this skill:

1. **Listen** to what they describe. Identify the core belief or question they want to test.
2. **Confirm Discovery mode** — if it sounds like they already know the problem and want to build, suggest SPEC-Lite instead.
3. **Ask 1-3 targeted questions** to fill gaps:
   - "Who specifically experiences this problem? Can you describe the person?"
   - "What is the riskiest assumption — what would change your mind?"
   - "Have you talked to any users about this yet?"
4. **Draft the brief** using the template, filling in all sections.
5. **Run a Gate D1 self-check** and flag any issues before presenting.
6. **Present both outputs**: the full Discovery Brief and the Reviewer Checklist.
7. **Suggest the experiment type** from the recommendations list, explaining why that type is the best fit for this hypothesis.

---

## Critical Reminders

- **Stay at the planning level.** Discovery Briefs define what to learn, not how to build. No code, no architecture, no implementation details.
- **One hypothesis per brief.** If the user has multiple hypotheses, suggest multiple briefs or help them prioritize the riskiest assumption first.
- **Cheap and fast wins.** Always default to the cheapest experiment that can answer the question. If the user jumps to A/B testing or building a prototype, ask whether interviews could answer the question first.
- **Unprompted > prompted.** Always design validation signals around unprompted evidence. If the only evidence is prompted, flag it as weak.
- **Kill conditions are commitments.** They are not predictions of failure — they are pre-commitments to evidence-based decisions that protect the team from sunk-cost thinking.
