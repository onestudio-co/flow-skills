---
name: flow-build-contract
description: >
  Creates a Build Contract document when the user mentions "build contract",
  "engineering contract", "product-engineering agreement", "before we start building",
  "observability plan", "how will we ship this", "flow-build-contract", or "gate O3".
  The Build Contract is the mandatory product-engineering agreement that must exist
  before any Outcome cycle execution begins, sitting after SPEC-Lite (Gate O2) and
  before implementation (Gate O3).
---

# Flow Build Contract

## What is a Build Contract?

A Build Contract is the mandatory product-engineering agreement that must exist before any Outcome cycle execution begins. It sits after SPEC-Lite (Gate O2) and before implementation (Gate O3).

It is an **agreement, not a spec** — both sides have obligations:

- **Product commits to**: clarity on intent, boundaries, and success criteria. Product is responsible for being available for decisions, holding scope, providing UX direction, and owning the success metric.
- **Engineering commits to**: architecture direction, risk visibility, cadence, and observability plan. Engineering is responsible for surfacing risks early, shipping incrementally, instrumenting from day one, and having a rollback strategy.

The Build Contract exists because good outcomes require both sides to be explicit about what they will and will not do during a cycle. Vague commitments lead to scope creep, missed risks, and unobservable features.

## Relationship to SPEC-Lite

The Build Contract should **reference** the SPEC-Lite but **NOT duplicate** it:

- **SPEC-Lite** says "what and why" — the problem, the hypothesis, the success metric, the scope boundaries.
- **Build Contract** says "how we'll work together to deliver it safely" — the commitments, the cadence, the observability plan, the fallback strategy.

If the Build Contract just copy-pastes the SPEC-Lite content, it has failed its purpose. The contract adds the engineering-side commitments and the mutual working agreement that the SPEC-Lite intentionally does not cover.

## Template

When creating a Build Contract, use this structure:

### YAML Frontmatter

```yaml
---
doc_type: build_contract
status: draft | agreed | active | completed
spec_lite_ref: "<link to SPEC-Lite>"
owner_product: "<Fullstacker name>"
owner_engineering: "<EM name>"
cycle_id: "<outcome cycle identifier>"
cadence: "daily micro-ship | 2-day | weekly"
created: "<YYYY-MM-DD>"
agreed: "<YYYY-MM-DD>"
---
```

### Sections

#### 1. Product Commits

What product is committing to for this cycle:

- **Scope boundaries**: What is explicitly in and out of scope (reference SPEC-Lite, do not duplicate)
- **Decision availability**: How quickly product will respond to questions, and escalation path if unavailable
- **UX direction**: Level of design fidelity provided (wireframe, mockup, spec, or "engineering discretion within these guardrails")
- **Metric ownership**: Who monitors the success metric, what constitutes "good enough" signal, decision timeline for go/no-go after launch

#### 2. Engineering Commits

What engineering is committing to for this cycle:

- **Architecture approach**: High-level technical direction (not detailed design — just enough to surface big risks)
- **Tech debt boundaries**: What tech debt is acceptable for this cycle and what is not (e.g., "we will hardcode X but will not skip tests")
- **Performance targets**: Specific, measurable performance expectations (latency, throughput, error rate thresholds)
- **Instrumentation plan**: What will be instrumented from day one — logging, metrics, traces, analytics events

#### 3. Risks & Trade-offs

- **Known risks**: Specific, concrete risks (technical, product, operational) — not "none"
- **Mitigation strategies**: What will be done to reduce each risk
- **Fallback plan**: What happens if the primary approach does not work — the specific pivot or rollback action

#### 4. Observability Plan

- **Feature flag strategy**: How the feature will be gated (flag name, rollout %, who controls it)
- **Rollback mechanism**: How to revert if something goes wrong, and how quickly
- **Analytics events**: Specific events to instrument for measuring the success metric
- **Dashboard requirements**: What monitoring dashboards are needed and who builds them
- **Performance monitoring**: What alerts or thresholds trigger investigation

#### 5. Cadence Agreement

- **Shipping cadence**: How often increments ship (daily micro-ship, 2-day, weekly)
- **Review checkpoints**: When and how product and engineering sync (async, standup, demo)
- **Escalation triggers**: When to escalate beyond the two owners (e.g., "if blocked for >4 hours, escalate to X")

#### 6. Out-of-Scope (Engineering)

Technical improvements that are tempting but not part of this cycle. List them explicitly so they do not creep in:

- Refactors that would be nice but are not needed for this outcome
- Adjacent system improvements
- Performance optimizations beyond the stated targets

#### 7. Kill/Adjust Triggers

Engineering-side conditions that warrant stopping or adjusting the cycle:

- "If implementation requires >N service changes, re-scope"
- "If latency impact exceeds X ms, pause and reassess architecture"
- "If dependency Y is not available by date Z, switch to fallback approach"
- "If estimated remaining work exceeds the cycle timebox by >50%, trigger re-scope conversation"

## Gate O3 Checklist

Before marking the Build Contract as `agreed` and proceeding to implementation, verify:

- [ ] **Product commits are specific, not vague** — no "product will be available" without defining response time
- [ ] **Engineering commits include observability from day 1** — instrumentation plan is concrete, not deferred
- [ ] **Risks section has actual risks, not "none"** — every cycle has risks; if none are listed, the team has not thought hard enough
- [ ] **Fallback plan exists** — there is a specific action if the primary approach fails
- [ ] **Feature flag strategy defined** — flag name, rollout plan, and who controls it
- [ ] **Rollback mechanism defined** — how to revert and how quickly
- [ ] **Cadence agreed** — both sides know the shipping rhythm and review schedule
- [ ] **Both owners named and have agreed** — product owner and engineering owner are explicit, and both have signed off

## Anti-patterns

These are automatic failures at Gate O3:

| Anti-pattern | Why it fails |
|---|---|
| "We'll figure out observability later" | Observability is not optional. If you cannot observe it, you cannot know if it worked. |
| No fallback plan | Every approach can fail. No fallback means you are betting the cycle on a single path with no exit. |
| Product commits are just the SPEC-Lite copy-pasted | The Build Contract adds mutual working agreements. Copy-pasting means product has not thought about their operational commitments. |
| Engineering commits are vague ("we'll build it well") | Vague commits are not commits. Engineering must be specific about approach, boundaries, and instrumentation. |
| Missing rollback strategy | Shipping without a rollback plan means any issue requires an emergency response instead of a planned revert. |
| No kill/adjust triggers | Without explicit conditions for stopping, teams push through problems instead of re-scoping early. |
| Risks section says "none" or "low risk" | This signals lack of analysis, not lack of risk. |

## Instructions for the Agent

When the user asks to create a Build Contract:

1. Ask which track and outcome cycle this is for.
2. Ask for the SPEC-Lite reference (link or title).
3. Ask who the product owner and engineering owner are.
4. Ask about the preferred shipping cadence.
5. Generate the Build Contract using the template above, with `status: draft`.
6. Walk through each section with the user, filling in specifics.
7. Run the Gate O3 checklist before marking as `agreed`.
8. Save the document in the appropriate track location.
9. If any checklist item fails, flag it and ask the user to address it before agreeing.
