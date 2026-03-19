# FLOW Experiment — Design the Cheapest Valid Test

> **Trigger**: A Discovery Brief has passed Gate D1. Now design the specific experiment to test the hypothesis.
> **Reference**: Chapter 6 (Experiments), Chapter 7 (Discovery Decisions)

## The Core Principle

> **Always choose the cheapest experiment that can validly answer your question.**

Production code is the most expensive way to learn something. A conversation is usually the cheapest. The right experiment depends on what you're trying to learn, not on a prescribed sequence.

### Collapsed Mode — When Building IS the Experiment

When build cost approaches zero (agentic tooling, no-code platforms, existing infrastructure), the experiment hierarchy collapses. If building a working prototype takes less time than designing a mockup, **building IS the experiment**. Don't force artificial cheapness when the "expensive" option is actually cheaper.

> **Key signal**: If your team can ship a functional version in hours using AI-assisted development, skip the mockup/wireframe/prototype stages and go straight to a limited build. The build IS your cheapest valid test. Log it with `execution_leverage: high` to track this pattern.

## Step 1 — Review the Hypothesis

Read the Discovery Brief. Extract:
- The specific hypothesis being tested
- The kill condition (already pre-committed)
- The success signal (what validated looks like)

Ask: "What specific question does this experiment need to answer?"

> **Coaching note for newcomers**: An experiment is not "let's try it and see." It's a structured test with a specific question, a defined method, and a pre-committed kill condition. Without a kill condition, it's an activity, not an experiment.

## Step 2 — Check the Learning Archive

Before designing a new experiment, search for prior related work:
- Check `tracks/*/ideas.md` and `tracks/*/decisions.md` for past learnings
- Check project files in `projects/` for prior Discovery cycles
- Ask: "Has anyone tested something similar before?"

> **Coaching note**: Standing on previous evidence is more efficient than re-running tests. The Learning Archive (Ch 11) exists to prevent duplicate experiments. Even partial results from a related hypothesis can inform your design.

## Step 3 — Show the Experiment Menu

Present the options ordered by typical cost, with context-specific recommendations:

### Software / Digital Products

| Type | Cost | Duration | Best For |
|------|------|----------|----------|
| **Conversation** | $0 | Hours | Validating whether a problem exists |
| **Desk Research** | $0 | Hours-days | Quantifying a known problem with existing data |
| **Mockup / Wireframe** | $0-500 | Hours-days | Testing if users understand a concept |
| **Clickable Prototype** | $500-2K | Days-week | Usability testing, flow validation |
| **Concierge** | $0-1K | Days-weeks | Validating value — YOU are the product |
| **Wizard of Oz** | $1K-5K | Weeks | Full UX testing with human backend |
| **Limited Build / MVP** | $5K-50K | Weeks-months | Retention, real behavior, willingness to pay |

### Hardware / Physical Products

| Type | Cost | Duration | Best For |
|------|------|----------|----------|
| **Conversation** | $0 | Hours | Problem validation |
| **Desk Research** | $0 | Days | Market sizing, competitor analysis |
| **Digital Mockup / CAD** | $200-500 | Days | Stakeholder alignment |
| **Simulation / Analysis** | $500-2K | Days-weeks | Technical feasibility without physical build |
| **Functional Prototype** | $3K-10K | 4-12 weeks | Real-world performance testing |
| **Field Pilot** | $10K-50K | Months | User adoption in actual environment |

### Agency / Client Work

| Type | Client Cost | Duration | Best For |
|------|-------------|----------|----------|
| **Stakeholder Interview** | $1K-3K | Days | Understanding real requirements |
| **Competitive Analysis** | $2K-5K | Week | Market positioning |
| **Clickable Prototype** | $3K-8K | 1-2 weeks | Client buy-in, user testing |
| **Limited Build** | $15K-50K | 2-6 weeks | Market validation |

Recommend the cheapest valid option. Ask: "Could a conversation answer this before we build anything?"

## Step 4 — Design the Specific Experiment

Guide through these questions:

1. **What specific question are you answering?** Not "is this a good idea?" but "will nurses use a shift-swap button during a shift?"

2. **Who are you testing with?** Representative users, not friends and family (unless that IS your audience). Define the sample.

3. **How long will it run?** Set a start date and end date. Open-ended experiments are activities, not experiments.

4. **What will you measure?** Define the specific metrics BEFORE starting. Connect to the kill condition.

5. **What permission do you need?** In regulated environments, ethics review, data privacy, or regulatory sandbox authorization may be required. If permission is denied, redesign with synthetic data — don't abandon the hypothesis.

6. **Where will you log results?** Set up the Experiment Log entry template now.

> **Coaching note — common anti-patterns** (Ch 6):
> - Building when you should be talking
> - Testing solutions before validating problems
> - Experiments with no kill condition
> - Choosing the experiment you WANT to build, not the one you NEED to run

## Step 5 — Produce the Experiment Design

```markdown
## Experiment Design — [Title]
**Date**: YYYY-MM-DD
**Discovery Brief**: [Reference]
**Experiment type**: [From menu]
**Estimated cost**: [Time + money]
**Duration**: [Start → End]
**Build duration**: [Expected time to build/create the experiment — e.g., "2 hours", "3 days", "2 weeks"]
**Execution leverage**: [none | low | medium | high] — how much agentic/AI tooling accelerates this experiment (high = build cost near-zero, collapsed mode applies)

### Question
[Specific question this answers]

### Method
[What you'll do, step by step]

### Sample
[Who, how many, how recruited]

### Metrics
[What you'll measure — connected to kill condition]

### Kill Condition
[Copied from Discovery Brief]

### Permission Required
[Yes/No — if yes, status]

### Log Location
[Where results will be recorded]
```

## Step 6 — Run Gate D2

Before spending time and money, validate the experiment design:

### D2 Checklist
- [ ] The experiment answers the hypothesis (clear logical connection)
- [ ] It's the cheapest valid option (cheaper alternatives considered)
- [ ] Sample is appropriate (representative users, not convenience sample)
- [ ] Duration is defined (start date and end date)
- [ ] Kill condition is specific and measurable
- [ ] Permission is secured (if needed)
- [ ] The log is set up (where and who records results)

If any item fails, give specific guidance on how to fix it.

## Step 7 — Chain to Next Skill

> "Experiment design passes D2. Run the experiment. When it completes, run `/flow-gate` to check D3 — that's where you'll decide: Continue, Refine, Pivot, Stop, or Escalate."

## Hardware Sidebar

> **Cost warning**: Hardware experiments at the prototype level ($3K-10K) and above are significant investments. Before committing, verify that conversation and desk research experiments have been exhausted. A $200 CAD render can sometimes answer what a $5K functional prototype would. Timelines are also longer — plan for 4-12 weeks for functional prototypes, months for field pilots.

## Solo Sidebar

> **Experiments you can run alone in a weekend**: 5 customer conversations ($0, 2 hours), landing page smoke test ($50, 1 day), concierge delivery to 3 users ($0, 1 weekend), competitor teardown analysis ($0, half day). You don't need a team or budget to validate a hypothesis.

---

## Manual Mode Checklist

If designing an experiment without this skill:

- [ ] Review the hypothesis from the Discovery Brief
- [ ] Check Learning Archive for prior related experiments
- [ ] Choose experiment type from the menu (cheapest valid option)
- [ ] Define the specific question being answered
- [ ] Define the sample (who, how many)
- [ ] Set start and end dates (no open-ended experiments)
- [ ] Define metrics connected to the kill condition
- [ ] Check if permission is required (regulated environments)
- [ ] Set up the Experiment Log entry
- [ ] Run Gate D2 checklist (Ch 6)
- [ ] If D2 passes → run the experiment → then run Gate D3
- [ ] If D2 fails → revise design and re-check
