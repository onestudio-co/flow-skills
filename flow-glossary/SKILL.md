---
name: flow-glossary
description: >
  Canonical glossary of all FLOW methodology terminology. Use this skill whenever
  someone asks "what does X mean in flow", "flow glossary", "define", "what is a
  kill condition", "what is spine mapping", "flow terminology", "flow-glossary",
  "flow vocabulary", "what does [term] mean", "explain [term] in flow", or needs
  to resolve ambiguity between similar FLOW concepts. Provides definitions,
  variant applicability, examples, and cross-references for every FLOW term.
---

# FLOW Glossary

You are the canonical vocabulary reference for the FLOW methodology. When someone asks what a term means, look it up here and provide the definition, which variant it applies to, a concrete example, and related terms. This glossary prevents vocabulary drift and ensures newcomers and veterans use the same words to mean the same things.

## How to Use This Glossary

1. **Single term lookup**: Find the term in the appropriate category and present its full entry (definition, variant, example, see also).
2. **Browse by category**: List all terms within a requested category (Core Concepts, Artifacts, Gates, Practices, Roles, Metrics, Anti-patterns).
3. **Resolve ambiguity**: When two terms sound similar, present both entries side by side and explain the distinction.

When presenting a term, always use the full entry format. Do not abbreviate or skip fields.

---

## Core Concepts

### FLOW
**Definition**: The methodology for moving from Scrum to the agentic era. FLOW replaces ceremonies with mechanical gates, replaces estimation with kill conditions, and replaces backlogs with a Decision Spine. It operates in two modes (Discovery and Outcome) depending on the team's confidence in the problem space.
**Variant**: Both
**Example**: A team adopts FLOW and replaces sprint planning with spine mapping, retrospectives with Kill/Merge rituals, and story points with outcome deltas.
**See also**: FLOW-Discovery, FLOW-Outcome, Decision Spine

### FLOW-Discovery
**Definition**: The FLOW variant used when the problem itself is uncertain and the goal is learning, not shipping. Teams validate hypotheses through cheap, fast experiments (interviews, landing pages, concierge tests) with tight kill conditions. Discovery cycles are 1-2 weeks.
**Variant**: Discovery
**Example**: A team believes small restaurants struggle with peak-hour orders but has no evidence. They enter FLOW-Discovery, write a Discovery Brief, and run 8 user interviews to test the hypothesis before writing any code.
**See also**: FLOW-Outcome, Discovery Brief, Gate D1, Mode Switch

### FLOW-Outcome
**Definition**: The FLOW variant used when the problem is validated and the team is shipping toward a measurable outcome. Work is structured around SPEC-Lites, Build Contracts, and micro-shipping cadences. Outcome cycles are typically 4-6 weeks with weekly Kill/Merge reviews.
**Variant**: Outcome
**Example**: After validating that checkout abandonment is caused by slow payment processing, a team enters FLOW-Outcome with a SPEC-Lite targeting a 6-point increase in checkout conversion rate within 5 weeks.
**See also**: FLOW-Discovery, SPEC-Lite, Build Contract, Gate O1-O5, Mode Switch

### Decision Spine
**Definition**: The hierarchical traceability structure that connects every task to the organization's vision. Every piece of work must map upward through the spine with no gaps. The spine is the admission control mechanism: if work cannot trace to vision, it does not enter the system.
**Variant**: Both (with different structures per variant)
**Example**: **Outcome Spine**: Task ("Add retry logic to payment API") maps to Experiment ("A/B test retry vs. no-retry") maps to Problem ("Users abandon checkout when payment fails on first attempt") maps to Outcome Metric ("Increase checkout conversion from 22% to 28%") maps to Vision ("Frictionless commerce"). **Discovery Spine**: Task ("Conduct 8 interviews") maps to Experiment ("Problem-discovery interviews with owner-operators") maps to Problem Hypothesis ("We believe peak-hour order overload causes missed orders") maps to Validated Outcome ("Evidence on whether order management is a top-3 pain") maps to Vision ("Every small restaurant captures every revenue opportunity").
**See also**: Hierarchical Traceability, Spine Compliance Rate, Gate O1, Orphan Work

### Decision Spine (Outcome Variant)
**Definition**: The spine structure used in FLOW-Outcome mode: Task to Experiment to Problem to Outcome Metric to Vision. Each level answers a question: what work is being done, what approach is being tested, what validated pain is being solved, what measurable result is being driven, and which strategic goal is being served.
**Variant**: Outcome
**Example**: Task ("Optimize top-5 slow queries") to Experiment ("Index slow queries, A/B test with 10% traffic") to Problem ("Users experience 3+ second load times on dashboard") to Outcome Metric ("Reduce p99 latency by 30%") to Vision ("Platform reliability").
**See also**: Decision Spine (Discovery Variant), Gate O1, Spine Compliance Rate

### Decision Spine (Discovery Variant)
**Definition**: The spine structure used in FLOW-Discovery mode: Task to Experiment to Problem Hypothesis to Validated Outcome to Vision. The key difference from the Outcome spine is that the problem level is a hypothesis (unvalidated) and the metric level is a validated learning outcome rather than a business metric.
**Variant**: Discovery
**Example**: Task ("Write interview script, recruit 8 participants") to Experiment ("Semi-structured problem-discovery interviews") to Problem Hypothesis ("We believe freelancers with variable income experience anxiety about covering fixed expenses") to Validated Outcome ("Evidence on whether expense anxiety is a top-3 pain for freelancers") to Vision ("Financial confidence for independent workers").
**See also**: Decision Spine (Outcome Variant), Gate D1, Discovery Brief

### Mode Switch
**Definition**: The transition from FLOW-Discovery to FLOW-Outcome that occurs when accumulated evidence validates the problem hypothesis. Mode Switch is governed by Gate D3 and requires consistent user demand, repeated usage signals, and clear product direction. After switching, the team creates a SPEC-Lite and Build Contract instead of Discovery Briefs.
**Variant**: Both (it is the bridge between them)
**Example**: After 3 discovery cycles and 24 interviews, 18 of which confirmed peak-hour order management as a top-3 pain, the team passes Gate D3 and switches to Outcome mode. They write a SPEC-Lite targeting a measurable reduction in missed orders.
**See also**: Gate D3, FLOW-Discovery, FLOW-Outcome, Prototype Land

### Hierarchical Traceability
**Definition**: The principle that every piece of work in the system must trace upward through the Decision Spine to the organization's vision, with no gaps or weak links. Traceability is read top-down to understand strategy and bottom-up to justify work. It is enforced mechanically through Gate O1 (Outcome) and Gate D1 (Discovery).
**Variant**: Both
**Example**: During a spine check, a developer traces their task ("Add error handling to upload flow") upward and discovers it maps to an experiment but has no connection to a stated problem. The spine check fails, and the work is blocked until the problem-level mapping is established.
**See also**: Decision Spine, Gate O1, Orphan Work, Spine Compliance Rate

---

## Artifacts

### Discovery Brief
**Definition**: The inception-stage planning artifact for FLOW-Discovery mode, used when the primary risk is building before discovering the right problem. It forces the team to articulate a problem hypothesis, design the cheapest experiment to test it, define a validation signal with a minimum bar, and commit to a kill condition before any work begins. One page maximum.
**Variant**: Discovery
**Example**: A Discovery Brief titled "Peak-Hour Order Overload" contains: Problem Hypothesis ("We believe owner-operators of small restaurants struggle to manage online order volume during peak hours, causing missed orders"), Target User ("Owner-operators of restaurants with under 10 employees"), Experiment Question ("Do at least 5 of 8 owner-operators cite peak-hour order management as a top-3 pain unprompted?"), Validation Signal ("5 of 8 mention it unprompted in interviews"), Kill Condition ("If fewer than 5 of 8 mention it after 2 weeks, archive").
**See also**: SPEC-Lite, Gate D1, Kill Condition, FLOW-Discovery

### SPEC-Lite
**Definition**: The one-page planning artifact for FLOW-Outcome mode. It defines the validated problem, success metric (with baseline and target), constraints, explicit out-of-scope items, and a kill condition. Nothing enters a Build Contract without a complete SPEC-Lite that passes Gate O2. It says "what and why" but never "how."
**Variant**: Outcome
**Example**: A SPEC-Lite titled "Checkout Conversion Improvement" contains: Problem ("Users abandon checkout when payment fails on first attempt — 22% checkout conversion vs. 35% industry benchmark"), Success Metric ("Checkout conversion from 22% to 28% within 5 weeks"), Constraints ("Must not change payment provider; latency budget is 200ms"), Out-of-Scope ("Cart redesign, shipping calculator, post-purchase flow"), Kill Condition ("If conversion does not improve by 2 points after 3 weeks, kill").
**See also**: Discovery Brief, Build Contract, Gate O2, Kill Condition

### Build Contract
**Definition**: The mandatory product-engineering agreement that must exist before any Outcome cycle execution begins. It sits after SPEC-Lite (Gate O2) and before implementation (Gate O3). Both sides make concrete commitments: product commits to scope clarity, decision availability, UX direction, and metric ownership; engineering commits to architecture approach, tech debt boundaries, performance targets, and instrumentation plan. It is an agreement, not a spec.
**Variant**: Outcome
**Example**: A Build Contract for the checkout improvement cycle specifies: Product commits to respond to questions within 4 hours and hold scope; Engineering commits to instrument analytics from day one, ship behind a feature flag with 10% initial rollout, and have a rollback tested before going beyond 25%. Both owners are named and have signed off.
**See also**: SPEC-Lite, Gate O3, Observability, Cadence Agreement

### Experiment Log
**Definition**: The running record of experiments conducted during Discovery cycles, capturing what was tested, what method was used, what was observed, and what was learned. Each entry records the hypothesis tested, experiment type, results, and the decision taken (continue, refine, pivot, or stop). The log provides the evidence trail that feeds Gate D3 (Mode Switch) decisions.
**Variant**: Discovery
**Example**: An Experiment Log entry reads: "Cycle 2 — Wizard of Oz test for order batching. 5 concierge users over 2 weeks. 4 of 5 returned for second use unprompted. Learning: users value automatic batching over manual queue management. Decision: Continue with refined hypothesis on auto-batching UX."
**See also**: Discovery Brief, Discovery Review, Gate D3, Kill Condition

### Kill/Merge Notes
**Definition**: The decision record produced by the weekly Kill/Merge Ritual. For each active Outcome cycle reviewed, the notes capture the metric data, evidence presented, the decision taken (Kill, Merge, Simplify, Continue, or Adjust), and the rationale with specific evidence citations. Kill/Merge Notes are the portfolio-level decision log.
**Variant**: Outcome
**Example**: "Cycle: Search Relevance — Week 4 of 5. Metric: relevance score improved from 0.62 to 0.74, target 0.80. Trend positive. Decision: Continue. Rationale: consistent week-over-week improvement; projected to reach target by week 5 if trend holds. Evidence: dashboard data from search-metrics-v2. Next: monitor impact of marketing push on query volume."
**See also**: Kill/Merge Ritual, Outcome Review, Gate O5

### Outcome Review
**Definition**: The weekly structured review of metric progress for all active Outcome cycles. It focuses on measurable outcome deltas, not activity. The core question is "Did the metric move? If not, why? What do we change?" The Outcome Review feeds directly into the Kill/Merge Ritual with evidence-based recommendations.
**Variant**: Outcome
**Example**: The weekly Outcome Review shows: Checkout conversion moved from 24% to 26% (baseline 22%, target 28%). Trend is positive. This week's shipments: retry logic deployed behind feature flag at 25% rollout. Learning: retry alone accounts for 1.5 of the 2-point gain. Recommendation: Continue and expand rollout to 50%.
**See also**: Kill/Merge Ritual, Kill/Merge Notes, Outcome Delta, Gate O5

---

## Gates

### Gate D1 (Brief Completeness)
**Definition**: The first Discovery gate that asks "Is this Discovery Brief complete enough to design and run an experiment?" It checks that the problem hypothesis uses hypothesis language, the target user is specific enough to recruit, the experiment question is single and answerable, the validation signal has a method and minimum bar using unprompted evidence, and the kill condition has a timeframe, threshold, and next action. All items must pass before an experiment begins.
**Variant**: Discovery
**Example**: A brief states "We believe users want better documentation." Gate D1 fails: hypothesis is too broad (which users?), target user is not recruitable, and the hypothesis is arguably a solution in disguise. The team rewrites to target "new backend developers joining teams with 50+ microservices" and specifies an interview-based experiment with an unprompted mention threshold.
**See also**: Discovery Brief, Gate D2, Kill Condition, Validation Signal

### Gate D2 (Experiment Type Constraint)
**Definition**: The second Discovery gate that ensures the planned experiment is the cheapest and fastest way to test the hypothesis. It prevents premature engineering by checking that cheaper alternatives were considered, no production code is used unless justified, the experiment is reversible and fits within 1-2 weeks, and a decision framework is defined for each possible result.
**Variant**: Discovery
**Example**: A team wants to build a prototype to test whether users need batch order management. Gate D2 challenges: "Could interviews answer this question first? Interviews cost 2 weeks of part-time work; a prototype costs 2 weeks of full-time engineering. If interviews show no demand, the prototype is wasted." The team switches to interviews.
**See also**: Gate D1, Gate D3, Discovery Brief, Experiment Log

### Gate D3 (Mode Switch)
**Definition**: The third and final Discovery gate that governs the transition from Discovery mode to Outcome mode. It checks for consistent user demand (not just anecdotes), repeated usage or engagement, early revenue or commitments, clear product direction, and validated problem hypothesis with evidence. Passing D3 means the team creates a SPEC-Lite and Build Contract as the next step.
**Variant**: Discovery (triggers transition to Outcome)
**Example**: After 3 discovery cycles, the team presents: 18 of 24 interviewees confirmed peak-hour order management as a top-3 pain; 4 of 5 concierge users returned unprompted; 2 asked about pricing. Gate D3 passes. The team writes a SPEC-Lite targeting measurable reduction in missed orders.
**See also**: Mode Switch, Gate D1, Gate D2, SPEC-Lite, Prototype Land

### Gate O1 (Spine Mapping)
**Definition**: The first Outcome gate that prevents orphan work by requiring every task to trace upward through the full Outcome Decision Spine (Task to Experiment to Problem to Outcome Metric to Vision). Each link must be logical and explicit, not assumed. A weak or missing link is a blocker.
**Variant**: Outcome
**Example**: A task "Optimize database queries" passes at the Task and Vision levels but has no experiment defined and the problem is stated as a technical observation rather than a user pain. Gate O1 fails with 2 gaps: missing experiment and vague problem. The team must write a SPEC-Lite before proceeding.
**See also**: Decision Spine, Hierarchical Traceability, Orphan Work, Gate O2

### Gate O2 (SPEC-Lite)
**Definition**: The second Outcome gate that enforces constraints, boundaries, and kill conditions before work proceeds to a Build Contract. It checks that the problem describes a pain (not a solution), the success metric has a baseline and target, at least 2 constraints and 2 out-of-scope items are listed, the kill condition is specific, no unresolved TBDs remain, an owner is assigned, and the document fits on one page.
**Variant**: Outcome
**Example**: A SPEC-Lite lists the success metric as "improve search" with no baseline or target. Gate O2 fails: the metric needs a specific baseline value ("current relevance score: 0.62"), a target ("0.80"), and a measurement method. The team revises before proceeding to the Build Contract.
**See also**: SPEC-Lite, Gate O1, Gate O3, Kill Condition, Scope Creep

### Gate O3 (Build Contract)
**Definition**: The third Outcome gate that prevents execution before product-engineering agreement. It verifies that product commits are specific and actionable, engineering commits include architecture approach and observability, risks are identified with mitigation strategies, a fallback plan exists, feature flag strategy is defined, cadence is agreed, and both owners have signed off. Anti-patterns like "we'll figure out observability later" are automatic failures.
**Variant**: Outcome
**Example**: A Build Contract has product committing to "be available for questions" without specifying response time. Gate O3 fails: the commitment must be specific ("respond within 4 hours; escalation path if unavailable"). The team also adds a concrete observability plan with feature flag name, rollout percentages, and rollback mechanism.
**See also**: Build Contract, Gate O2, Gate O4, Observability

### Gate O4 (Observability)
**Definition**: The fourth Outcome gate that ensures production-grade feedback loops exist when code ships. It checks that analytics events are instrumented, feature flags are configured for progressive rollout, rollback mechanism is tested (not just planned), performance monitoring baseline is established, a dashboard exists, and error tracking covers new code paths. "Configured" means in code and testable, not "on the roadmap."
**Variant**: Outcome
**Example**: A team has instrumented analytics events and set up a feature flag but has never tested the rollback mechanism. Gate O4 fails on the rollback item: "tested" means the flag has been turned off at least once in staging or production and the system was verified to behave correctly. The team tests the rollback before proceeding to broader rollout.
**See also**: Gate O3, Gate O5, Build Contract, Micro-shipping

### Gate O5 (Cycle Decision)
**Definition**: The fifth and final Outcome gate that institutionalizes stopping and simplification as normal operations. At the end of every outcome cycle, the team must make an explicit, evidence-based decision: Kill (hypothesis disproven, free resources), Merge (target met, harden and ship permanently), Continue (positive signal but not yet at threshold), or Adjust (partial signal, change scope or approach). Evidence must be cited; opinions do not count.
**Variant**: Outcome
**Example**: An outcome cycle targeting checkout conversion of 28% ends at week 5 with conversion at 26%. The team reviews the evidence: positive trend, 2 of 3 experiments contributed. Decision: Continue for 2 more weeks with the third experiment adjusted. New kill condition: if conversion does not reach 27% by week 7, kill.
**See also**: Kill/Merge Ritual, Kill/Merge Notes, Outcome Review, Kill Condition

---

## Practices

### Kill Condition
**Definition**: A pre-committed, measurable threshold that triggers stopping work on a cycle. It includes three components: a timeframe (when to evaluate), a metric/threshold (what constitutes failure), and a next action (archive, pivot, or escalate). Kill conditions are set before work begins and are not changed retroactively. They protect teams from sunk-cost thinking.
**Variant**: Both
**Example**: Discovery: "If after 8 interviews over 2 weeks, fewer than 5 mention the problem as a top-3 pain unprompted, archive this hypothesis." Outcome: "If checkout conversion does not improve by 2 points after 3 weeks, kill the cycle and redirect capacity."
**See also**: Gate D1, Gate O2, Gate O5, Kill/Merge Ritual

### Kill/Merge Ritual
**Definition**: The weekly 45-60 minute meeting that reviews all active Outcome cycles and produces one of five decisions for each: Kill, Merge, Simplify, Continue, or Adjust. It is the portfolio-level decision point. Core principles: evidence over opinion, killing is success (freed capacity), no deferral without an evidence-gathering plan, WIP limits are enforced, and all decisions are logged with evidence citations.
**Variant**: Outcome
**Example**: In a Kill/Merge meeting, the team reviews 4 active cycles. One is killed (metric flat for 3 weeks), one is merged (target exceeded with statistical significance), one continues (positive trend, needs 1 more week), and one is adjusted (partial signal suggests narrower scope). Each decision cites specific metric data.
**See also**: Kill/Merge Notes, Outcome Review, Gate O5, WIP Limit

### Discovery Review
**Definition**: The weekly review for teams in FLOW-Discovery mode. It compiles experiment results from the past week and proposes one of four actions for each active Discovery Brief: Continue (hypothesis holding, run another experiment), Refine (adjust the hypothesis based on learnings), Pivot (evidence points to a different problem), or Stop (hypothesis invalidated, archive and move on).
**Variant**: Discovery
**Example**: In a Discovery Review, the team reviews 2 active briefs. Brief A's interview results show 6 of 8 unprompted mentions — Continue with a landing page test next. Brief B's interviews show only 2 of 8 mentions — Stop and archive, but the interviews revealed a different pain (onboarding confusion) worth investigating.
**See also**: Discovery Brief, Experiment Log, Gate D3, Kill Condition

### Outcome Review
**Definition**: The weekly structured review of metric progress for all active Outcome cycles, focused on measurable outcome deltas. Its core question: "Did the metric move? If not, why? What do we change?" The review surfaces what is working, what is not, and what should be stopped or simplified. It feeds directly into the Kill/Merge Ritual.
**Variant**: Outcome
**Example**: The Outcome Review shows that search relevance improved from 0.62 to 0.71 this week (target 0.80). The trend is positive. This week's shipment was a re-ranking algorithm deployed at 10% rollout. Learning: the algorithm improves relevance for long-tail queries but not head queries. Next week: expand rollout to 25% and monitor head query impact.
**See also**: Kill/Merge Ritual, Kill/Merge Notes, Outcome Delta

### Micro-shipping
**Definition**: The practice of shipping small, observable increments to production frequently (daily or every 2 days) rather than batching work into large releases. Each micro-shipment is feature-flagged, instrumented, and reversible. Micro-shipping shortens feedback loops, reduces risk per deployment, and provides continuous metric data for Kill/Merge decisions.
**Variant**: Outcome
**Example**: Instead of building the entire checkout improvement for 4 weeks and deploying at once, the team ships retry logic on day 3 (behind a flag at 10%), error messaging improvements on day 5 (flagged at 10%), and payment fallback on day 8 (flagged at 5%). Each increment is measured independently.
**See also**: Build Contract, Gate O4, DORA Metrics, Two-track Discipline

### WIP Limit
**Definition**: The maximum number of active work items (in-progress Discovery or Outcome cycles) a team can carry simultaneously. Grounded in Little's Law (Lead Time = WIP / Throughput): more WIP with the same throughput means longer lead times for everything. WIP limits are non-negotiable policy. Exceeding them requires explicit leadership approval with a documented exception and review date.
**Variant**: Both
**Example**: A team of 5 has a WIP limit of 4 active cycles. They currently have 4 in progress. A stakeholder asks for a new feature. The team must either kill or pause an active cycle, get a leadership-approved exception, or wait until a current cycle completes.
**See also**: Kill/Merge Ritual, Weekly Portfolio Hygiene, Little's Law

### Exploration Track vs Production Track
**Definition**: The two-track model that separates all work into Exploration (feature-flagged, limited blast radius, learning-oriented) and Production (hardened, fully observable, available to all users). Every new feature starts on the Exploration track. Promotion to Production is an explicit gate, not a gradual drift.
**Variant**: Outcome
**Example**: A new search algorithm ships on the Exploration track behind a feature flag at 10% of users. After 2 weeks of positive signal and passing production readiness checks, it is promoted to the Production track: flag removed, code hardened, monitoring confirmed, documentation updated.
**See also**: Two-track Discipline, Gate O4, Micro-shipping, Production Readiness

### Two-track Discipline
**Definition**: The organizational practice of maintaining strict separation between the Exploration track and the Production track. The discipline requires that: every feature starts in Exploration, promotion to Production is an explicit gate (not a drift), Exploration code runs in production infrastructure but with containment (feature flags), and no feature silently becomes "production" by having its flag left at 100%.
**Variant**: Outcome
**Example**: During Weekly Portfolio Hygiene, the team discovers a feature flag that has been at 100% for 3 weeks without a formal production readiness review. Two-track discipline requires either running the production readiness gate or reverting to a lower rollout percentage until the review happens.
**See also**: Exploration Track vs Production Track, Gate O4, Production Readiness, Weekly Portfolio Hygiene

### Weekly Portfolio Hygiene
**Definition**: The recurring practice of reviewing the overall health of all active work across tracks. It includes WIP compliance checks, spine compliance review, stale cycle detection (zombie cycles that have been "Continue" for too long), feature flag audit (flags at 100% without production readiness), and capacity planning. It is the systemic health check that catches portfolio-level patterns individual cycle reviews miss.
**Variant**: Both
**Example**: During Weekly Portfolio Hygiene, the team finds: WIP is at limit (4 of 4), one cycle has been "Continue" for 6 weeks against a 4-week plan (zombie), and 2 feature flags are at 100% without production readiness. Actions: escalate the zombie cycle to Kill/Merge with a forced decision, and schedule production readiness reviews for both flagged features.
**See also**: WIP Limit, Kill/Merge Ritual, Two-track Discipline, Process Theater

---

## Roles

### EM (CTO+EM Merged)
**Definition**: The engineering leadership role in FLOW that merges the traditional CTO and Engineering Manager responsibilities. The EM owns engineering commitments in Build Contracts, architecture direction, risk visibility, and the observability plan. They are the engineering counterpart to the Fullstacker and co-sign Build Contracts.
**Variant**: Both
**Example**: The EM reviews a Build Contract and commits to: architecture approach (add retry with exponential backoff), tech debt boundaries (hardcode retry count but do not skip tests), instrumentation plan (log every retry attempt with latency), and rollback mechanism (feature flag revert within 5 minutes).
**See also**: Fullstacker, Build Contract, Gate O3

### Fullstacker (PM+PD)
**Definition**: The product leadership role in FLOW that merges the traditional Product Manager and Product Designer responsibilities. The Fullstacker owns the problem definition, success metric, scope boundaries, UX direction, and metric monitoring. They are the product counterpart to the EM and co-sign Build Contracts.
**Variant**: Both
**Example**: The Fullstacker writes the SPEC-Lite, defines the kill condition, commits to responding to engineering questions within 4 hours, provides wireframe-level UX direction, and owns monitoring the checkout conversion metric weekly.
**See also**: EM, SPEC-Lite, Build Contract, Gate O2

### Flow Facilitator
**Definition**: The person who ensures FLOW ceremonies and gates run correctly and on time. They facilitate the Kill/Merge Ritual, enforce time-boxing, ensure every cycle gets a decision (not a deferral), celebrate kills, and protect WIP limits. The Flow Facilitator is a process role, not a decision-making role; they ensure the team follows the methodology, not what the team decides.
**Variant**: Both
**Example**: During a Kill/Merge meeting, the facilitator notices the team has been discussing one cycle for 15 minutes without data. They intervene: "We're past time-box. The evidence is insufficient for a decision. Who will gather the missing data by next week?" They log the action item and move to the next cycle.
**See also**: Kill/Merge Ritual, Discovery Review, Weekly Portfolio Hygiene

### Developer
**Definition**: The implementation role in FLOW responsible for building, shipping, and instrumenting features. Developers work within Build Contract commitments, ship micro-increments behind feature flags, ensure observability from day one, and surface risks early. In FLOW, developers are expected to flag spine breaks and raise concerns about scope creep proactively.
**Variant**: Both
**Example**: A developer working on retry logic ships their first increment on day 3 behind a feature flag, instruments every retry attempt with structured logging, and flags to the EM that the third-party payment API has undocumented rate limits that could affect the approach.
**See also**: EM, Build Contract, Micro-shipping, Gate O4

### QA / Quality Engineering
**Definition**: The quality assurance role in FLOW, focused on verifying that shipped increments meet Build Contract commitments, observability is functional (not just planned), rollback mechanisms actually work, and feature flags behave correctly. QA validates the production readiness checklist and tests edge cases within the defined scope.
**Variant**: Outcome
**Example**: QA tests the rollback mechanism by toggling the feature flag off in staging and verifying the system returns to baseline behavior. They also verify that analytics events fire correctly for both the control and experiment groups during A/B testing.
**See also**: Gate O4, Production Readiness, Build Contract, Two-track Discipline

---

## Metrics

### Outcome Delta
**Definition**: The measurable change in the target metric over an Outcome cycle. It answers the question "Did the metric move?" Positive outcome delta means the intervention is working. Flat or negative delta triggers kill condition evaluation. Activity (features shipped) is irrelevant if the outcome delta is zero.
**Variant**: Outcome
**Example**: Target metric: checkout conversion. Baseline: 22%. Current: 26%. Outcome delta: +4 percentage points. The delta is positive and the team is on track toward the 28% target.
**See also**: Outcome Review, Kill/Merge Ritual, SPEC-Lite, Gate O5

### Cycle Time (Idea to Validated Signal)
**Definition**: The elapsed calendar time from when an idea enters the system to when a validated signal is produced. In Discovery mode, this measures idea to validated learning. In Outcome mode, this measures SPEC-Lite approval to credible metric movement. Shorter cycle times indicate tighter feedback loops. Target: Discovery 1-2 weeks, Outcome 4-6 weeks.
**Variant**: Both
**Example**: A Discovery cycle starts on Monday with a Discovery Brief and ends 9 days later with interview results showing 6 of 8 unprompted mentions. Cycle time: 9 days. An Outcome cycle starts with SPEC-Lite approval and shows credible metric movement after 3 weeks. Cycle time: 3 weeks.
**See also**: DORA Metrics, Micro-shipping, WIP Limit

### Signal Quality
**Definition**: The percentage of completed cycles where the team can cite specific evidence that changed a belief. If the team cannot articulate what they learned, the cycle produced no signal. Signal quality measures whether experiments are genuinely informing decisions or just generating activity. Target: above 80%.
**Variant**: Both
**Example**: Of 5 completed cycles this month, 4 teams can cite specific evidence ("6 of 8 interviewees confirmed the pain unprompted" or "conversion increased 3pp with p<0.05"). Signal quality: 80%. The 5th team says "it felt like it was working" which does not count as a signal.
**See also**: Outcome Delta, Discovery Review, Process Theater

### Complexity Reduction Index
**Definition**: The net change in system complexity indicators over a reporting period. Measured by: long-lived feature flags removed, services consolidated, complexity-reducing PRs merged, minus complexity-adding changes. Target: net negative (complexity decreasing over time). FLOW aims to simplify as a normal operation, not just add.
**Variant**: Outcome
**Example**: This month: 3 feature flags removed, 1 service consolidated, 5 complexity-reducing PRs merged, 2 new services added, 4 new feature flags created. Net: (3 + 1 + 5) - (2 + 4) = +3 net reduction. The index is positive (complexity decreased).
**See also**: Two-track Discipline, Weekly Portfolio Hygiene, Simplify (Kill/Merge decision)

### Spine Compliance Rate
**Definition**: The percentage of in-progress work items that have a complete, valid spine mapping (tracing from task through to vision with no gaps). Measured as: items with valid spine divided by total in-progress items. Target: above 90%. Low compliance indicates orphan work entering the system.
**Variant**: Both
**Example**: A team has 8 in-progress items. 7 have complete spine mappings. 1 task ("fix flaky test") has no experiment, problem, or metric mapping. Spine compliance rate: 87.5%. The team needs to either map the flaky test fix to the spine or remove it from active work.
**See also**: Decision Spine, Gate O1, Orphan Work, Hierarchical Traceability

### Artifact Completeness
**Definition**: The percentage of cycles that had a valid day-1 artifact (Discovery Brief or SPEC-Lite + Build Contract) before work began. "Valid" means the artifact existed before the cycle started, not created retroactively. Target: above 80%. Low completeness indicates teams are skipping planning and backfilling documents to pass gates.
**Variant**: Both
**Example**: 10 cycles started this month. 8 had their Discovery Brief or SPEC-Lite created before the first task was worked on. 2 had specs created after work had already begun. Artifact completeness: 80%.
**See also**: SPEC-Lite, Discovery Brief, Process Theater, Gate D1, Gate O2

### DORA Metrics
**Definition**: The four key metrics from the DevOps Research and Assessment framework, adopted by FLOW to measure engineering delivery health. They complement FLOW's product-level metrics by measuring the engineering pipeline's efficiency and reliability.
**Variant**: Outcome
**Example**: This month's DORA metrics: Deployment frequency: 12 deploys/week (daily micro-shipping working). Lead time: 4 hours from commit to production. Change failure rate: 3% (1 of 35 deploys caused a rollback). Time to restore: 12 minutes average.
**See also**: Micro-shipping, Gate O4, Build Contract

#### Deployment Frequency
**Definition**: How often the team deploys to production. Higher frequency indicates micro-shipping discipline and small batch sizes aligned with FLOW principles.
**Variant**: Outcome
**Example**: A team practicing micro-shipping deploys 3 times per day on average — each deployment is a small, feature-flagged increment.
**See also**: Micro-shipping, Lead Time

#### Lead Time for Changes
**Definition**: The average time from code commit to running in production. Shorter lead times indicate a healthy deployment pipeline with minimal manual gates or queuing.
**Variant**: Outcome
**Example**: A commit is merged at 10:00 AM and is running in production by 2:00 PM. Lead time: 4 hours. The team's target is under 6 hours.
**See also**: Deployment Frequency, Micro-shipping

#### Change Failure Rate
**Definition**: The percentage of deployments that cause a failure in production (incident, rollback, or hotfix required). Lower is better. High change failure rate suggests insufficient testing, observability gaps, or overly large deployments.
**Variant**: Outcome
**Example**: Of 40 deployments this month, 2 required rollbacks. Change failure rate: 5%. The team's target is under 10%.
**See also**: Gate O4, Rollback Mechanism, Time to Restore

#### Time to Restore Service
**Definition**: The average time to recover from a production failure. Shorter is better. FLOW's emphasis on feature flags and tested rollback mechanisms directly reduces time to restore.
**Variant**: Outcome
**Example**: A deployment caused elevated error rates. The team toggled the feature flag off within 8 minutes, restoring service. Time to restore: 8 minutes.
**See also**: Gate O4, Feature Flag, Rollback Mechanism

---

## Anti-patterns

### Orphan Work
**Definition**: Work that does not trace through the full Decision Spine. A task exists but cannot map upward to an experiment, problem, metric, and vision. Orphan work is the primary anti-pattern that Gate O1 prevents. It means the team is doing work without knowing why it matters or how to measure success.
**Variant**: Both
**Example**: A developer picks up a task "Refactor the notification service" from the backlog. During spine check, it maps to no experiment, no problem statement, and no metric. It is orphan work. The team must either connect it to an active cycle's spine or remove it from active work.
**See also**: Gate O1, Decision Spine, Spine Compliance Rate, Hierarchical Traceability

### Process Theater
**Definition**: Going through FLOW motions without genuine substance. FLOW artifacts exist, gates are "passed," rituals are "held," but none of it influences actual decisions. Indicators include: no items killed in 4+ weeks, all artifacts created on the same day (retroactive rubber-stamping), metrics collected but never referenced in decisions, WIP limits exceeded weekly without discussion, and identical boilerplate across spine mappings.
**Variant**: Both
**Example**: A team holds weekly Kill/Merge meetings but has not killed anything in 6 weeks. Every cycle is "Continue." SPEC-Lites have identical risk sections ("low risk"). Gate reviews take under 5 minutes. The team is performing FLOW without practicing it.
**See also**: Signal Quality, Artifact Completeness, Kill/Merge Ritual, Weekly Portfolio Hygiene

### Prototype Land
**Definition**: Staying in FLOW-Discovery mode indefinitely, running experiments without ever accumulating enough confidence to switch to Outcome mode. Teams in Prototype Land keep refining hypotheses, running one more round of interviews, and tweaking prototypes without committing to a measurable outcome. Gate D3 (Mode Switch) is designed to detect and break this pattern.
**Variant**: Discovery
**Example**: A team has been running discovery cycles on the same problem space for 8 weeks across 5 briefs. Each cycle produces "interesting learnings" but the team never commits to a target metric or SPEC-Lite. They are in Prototype Land. Gate D3 should be run to force a mode switch decision or an explicit "this problem space is not worth pursuing."
**See also**: Gate D3, Mode Switch, FLOW-Discovery, Kill Condition

### Scope Creep
**Definition**: Gradual expansion of work beyond the boundaries defined in the SPEC-Lite's out-of-scope list. Scope creep happens when the team adds features, fixes, or improvements that were explicitly excluded but seem "easy" or "related." FLOW prevents scope creep through the SPEC-Lite's mandatory out-of-scope section and the Build Contract's engineering out-of-scope list.
**Variant**: Outcome
**Example**: A SPEC-Lite for checkout improvement explicitly lists "cart redesign" as out-of-scope. During implementation, a developer notices the cart has UX issues and starts fixing them. This is scope creep. The team must either stop the cart work or formally re-scope the SPEC-Lite through a Gate O2 re-check.
**See also**: SPEC-Lite, Build Contract, Gate O2, Kill/Merge Ritual (Adjust decision)

### Solution-First
**Definition**: Building before validating the problem. The team starts with a solution ("We need a dashboard") and works backward to justify it, rather than starting with a validated problem and discovering the right solution. FLOW-Discovery mode exists specifically to prevent this anti-pattern by requiring problem hypothesis validation before any building begins.
**Variant**: Both
**Example**: A stakeholder says "We need an AI chatbot for customer support." A Solution-First team starts building the chatbot. A FLOW team asks: "What problem does this solve? Have customers expressed frustration with current support? What evidence do we have?" They write a Discovery Brief to validate the problem before committing to any solution.
**See also**: FLOW-Discovery, Discovery Brief, Gate D1, Decision Spine

---

## Disambiguation Guide

When two terms are easily confused, use this guide to explain the difference.

### SPEC-Lite vs. Discovery Brief
Both are one-page planning artifacts with kill conditions. **SPEC-Lite** is for Outcome mode (validated problem, measurable metric). **Discovery Brief** is for Discovery mode (unvalidated hypothesis, learning goal). The key question: "Are you validating or shipping?"

### Kill Condition vs. Kill/Merge Ritual
A **Kill Condition** is a pre-set threshold in a document (SPEC-Lite or Discovery Brief). The **Kill/Merge Ritual** is the weekly meeting where kill conditions (among other evidence) are reviewed and decisions are made. The condition is the trigger; the ritual is the decision forum.

### Outcome Delta vs. Success Metric
The **Success Metric** is the target defined in the SPEC-Lite (e.g., "checkout conversion from 22% to 28%"). The **Outcome Delta** is the actual change observed (e.g., "+4 points this week"). The metric is the goal; the delta is the progress.

### Exploration Track vs. Discovery Mode
**Exploration Track** is an infrastructure concept (feature-flagged, limited blast radius code running in production). **Discovery Mode** is a methodology concept (validating hypotheses through experiments). You can be in Discovery mode without an Exploration track (e.g., running interviews). You can be on the Exploration track while in Outcome mode (shipping feature-flagged increments toward a known metric).

### Gate D3 vs. Gate O5
Both are decision gates, but at different stages. **Gate D3** decides whether to leave Discovery and enter Outcome (Mode Switch). **Gate O5** decides the fate of an Outcome cycle at its conclusion (Kill, Merge, Continue, Adjust). D3 transitions between modes; O5 closes an Outcome cycle.

### Spine Compliance Rate vs. Artifact Completeness
**Spine Compliance Rate** measures whether work items map through the Decision Spine (structural traceability). **Artifact Completeness** measures whether the right documents existed before work started (planning discipline). High spine compliance with low artifact completeness means teams trace their work but skip formal planning. High artifact completeness with low spine compliance means teams write documents that do not connect to the spine.

### EM vs. Fullstacker
Both co-own Build Contracts. The **EM** owns engineering commitments (architecture, instrumentation, risk, rollback). The **Fullstacker** owns product commitments (scope, UX direction, metric monitoring, decision availability). They are counterparts, not a hierarchy.

---

## Quick Reference by Category

### All Core Concepts
FLOW, FLOW-Discovery, FLOW-Outcome, Decision Spine, Decision Spine (Outcome Variant), Decision Spine (Discovery Variant), Mode Switch, Hierarchical Traceability

### All Artifacts
Discovery Brief, SPEC-Lite, Build Contract, Experiment Log, Kill/Merge Notes, Outcome Review

### All Gates
Gate D1 (Brief Completeness), Gate D2 (Experiment Type Constraint), Gate D3 (Mode Switch), Gate O1 (Spine Mapping), Gate O2 (SPEC-Lite), Gate O3 (Build Contract), Gate O4 (Observability), Gate O5 (Cycle Decision)

### All Practices
Kill Condition, Kill/Merge Ritual, Discovery Review, Outcome Review, Micro-shipping, WIP Limit, Exploration Track vs Production Track, Two-track Discipline, Weekly Portfolio Hygiene

### All Roles
EM (CTO+EM Merged), Fullstacker (PM+PD), Flow Facilitator, Developer, QA / Quality Engineering

### All Metrics
Outcome Delta, Cycle Time, Signal Quality, Complexity Reduction Index, Spine Compliance Rate, Artifact Completeness, DORA Metrics (Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore Service)

### All Anti-patterns
Orphan Work, Process Theater, Prototype Land, Scope Creep, Solution-First
