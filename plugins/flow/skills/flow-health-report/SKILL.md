---
name: flow-health-report
description: >
  Generates a FLOW Health Report — a monthly governance review that detects whether
  the team is actually practicing FLOW or just performing "process theater." Triggered
  by: "flow health", "health report", "monthly review", "are we doing flow right",
  "process theater", "flow metrics", "adoption metrics", "flow-health-report".
---

# FLOW Health Report

Generate a comprehensive monthly FLOW Health Report that measures both adoption
(are we using FLOW?) and execution (are feedback loops tight?). The report must
surface process theater — instances where FLOW rituals are performed but not
practiced with genuine intent.

## Instructions

### 1. Gather Data

Before generating the report, collect information from the user for each metric
category. Ask focused questions to fill in the data. If the user does not have
exact numbers, help them estimate based on what they know.

**Ask for the reporting period:**
- Month and year
- Start and end dates
- Which squads or teams are covered

**Adoption metrics — ask:**
- How many in-progress items exist, and how many have complete spine mappings?
  (Spine compliance = items with valid spine / total in-progress items)
- How many cycles started this month, and how many had a valid Discovery Brief
  or SPEC-Lite + Build Contract on day 1? (Artifact completeness)
- How many weeks had WIP limit violations? How quickly were they resolved?
  (WIP compliance)
- How many weeks did the Kill/Merge ritual occur? In how many were items
  actually killed or merged with evidence-based reasoning? (Kill/Merge adherence)

**Execution metrics — ask:**
- For completed cycles, did the target metric move? By how much?
  (Outcome delta)
- What was the average elapsed time from idea to validated signal (Discovery)
  or from SPEC-Lite to credible metric movement (Outcome)? (Cycle time)
- For completed cycles, what percentage can the team answer "what evidence
  changed our belief?" (Signal quality)
- Net change in long-lived feature flags, service count, and complexity-reducing
  PRs merged? (Complexity reduction index)

**DORA metrics — ask:**
- How often did the team deploy this month? (Deployment frequency)
- Average time from commit to production? (Lead time for changes)
- What percentage of deployments caused incidents or rollbacks?
  (Change failure rate)
- Average time to recover from production incidents? (Time to restore service)

### 2. Detect Process Theater

After gathering metrics, actively probe for red flags. These are the key
process theater indicators to check:

| Red Flag | What It Means | How to Detect |
|----------|---------------|---------------|
| No items killed in 4+ weeks | Kill conditions may not be real — teams are not actually willing to stop work | Ask: "When was the last time something was killed? What triggered it?" |
| All artifacts completed on the same day | Rubber-stamping — documents created retroactively to pass gates | Check artifact creation timestamps vs. cycle start dates |
| Metrics never referenced in decisions | Metrics are decoration, not data — collected but not used | Ask: "Can you point to a decision this month that was changed by a metric?" |
| WIP limits exceeded weekly without leadership discussion | WIP limits exist on paper but are not enforced | Check whether WIP violations triggered any escalation or conversation |
| Spine mappings are copy-paste boilerplate | Spine check is a checkbox, not a thinking tool | Review a sample of spine mappings for unique, specific language |
| Gate reviews completed in under 5 minutes | Gates are rubber-stamped, not genuinely evaluated | Ask about typical gate review duration and what gets debated |
| Same "risks" listed on every SPEC-Lite | Risk identification is performative | Compare risk sections across recent specs |
| Kill conditions are unmeasurable | "If users don't like it" is not a kill condition | Review kill conditions for specificity and measurability |

### 3. Generate the Report

Use the following template. Fill in all values. Use trend arrows (up-arrow,
down-arrow, right-arrow) and status indicators (green check, warning, red X)
based on whether actuals meet targets.

```markdown
# FLOW Health Report — <Month YYYY>

**Period**: <start> to <end>
**Squads covered**: <list>

---

## Adoption Metrics
| Metric | Target | Actual | Trend | Status |
|--------|--------|--------|-------|--------|
| Spine compliance | >90% | <val>% | <trend> | <status> |
| Artifact completeness | >80% | <val>% | <trend> | <status> |
| WIP compliance | 0 violations | <N> violations | <trend> | <status> |
| Kill/Merge adherence | 100% | <val>% | <trend> | <status> |

## Execution Metrics
| Metric | Target | Actual | Trend | Status |
|--------|--------|--------|-------|--------|
| Outcome delta | Positive | <assessment> | <trend> | <status> |
| Cycle time | <N weeks> | <val> | <trend> | <status> |
| Signal quality | >80% | <val>% | <trend> | <status> |
| Complexity reduction | Net negative | <assessment> | <trend> | <status> |

## DORA Metrics
| Metric | Actual | Assessment |
|--------|--------|-----------|
| Deploy frequency | <val> | <assessment> |
| Lead time | <val> | <assessment> |
| Change failure rate | <val>% | <assessment> |
| Time to restore | <val> | <assessment> |

## Process Theater Detector
<List specific instances where FLOW was performed but not practiced. Be blunt.>

Examples of what to flag:
- "Gate O2 passed but SPEC-Lite had all TBDs"
- "Kill/Merge meeting held but no items killed in 4 weeks"
- "Spine mapping present but identical boilerplate on 3 items"
- "Metrics collected but never referenced in any decision"
- "WIP limit exceeded every week with no escalation"

If no process theater is detected, state: "No process theater indicators
detected this period." Do not skip this section.

## Recommendations
1. <specific, actionable improvement tied to a metric or red flag>
2. <specific, actionable improvement tied to a metric or red flag>
3. <additional recommendations as warranted>

Each recommendation must reference the metric or red flag that triggered it.
Generic advice like "improve communication" is not acceptable.

## Template/Gate Defects
<Any FLOW templates, gates, or rituals that need updating based on this
month's experience. If a gate consistently fails to catch problems, or a
template field is always left blank, flag it here for methodology improvement.>

If none, state: "No template or gate defects identified this period."
```

### 4. Score and Summarize

After the full report, provide a one-paragraph executive summary that answers
three questions:

1. **Are we practicing FLOW?** (Adoption verdict: Yes / Partially / No)
2. **Are our feedback loops tight?** (Execution verdict: Yes / Partially / No)
3. **What is the single most important thing to fix this month?**

### 5. Store the Report

Save the completed report to `tracks/flow/decisions.md` using the standard
decision format with:
- **Context**: Monthly FLOW governance review
- **Decision**: Summary of health status and key findings
- **Status**: active

## Metric Definitions Reference

### Adoption Metrics

**Spine compliance rate**
Formula: (in-progress items with complete spine mapping) / (total in-progress items) x 100
Target: >90%
A complete spine mapping means the item traces from Vision through Strategy,
Bet, Initiative, Outcome/Discovery, down to the specific task — with no gaps.

**Artifact completeness**
Formula: (cycles with valid day-1 artifacts) / (total cycles started) x 100
Target: >80%
"Valid" means the Discovery Brief or SPEC-Lite + Build Contract existed before
work began, not created retroactively. Check creation dates.

**WIP compliance**
Measure: Count of weeks where WIP limits were violated, plus average resolution
time per violation.
Target: 0 violations. If violations occur, resolution within 24 hours.

**Kill/Merge cadence adherence**
Formula: (weeks with evidence-based Kill/Merge ritual) / (total weeks) x 100
Target: 100%
"Evidence-based" means at least one item was evaluated against its kill
conditions using actual data, not just a meeting that occurred.

### Execution Metrics

**Outcome delta**
Measure: For each completed Outcome cycle, did the target metric move in the
desired direction? By how much relative to the goal?
Target: Positive movement in >70% of cycles.

**Cycle time**
Measure: Elapsed calendar time from idea to validated signal (Discovery mode)
or from SPEC-Lite approval to credible metric movement (Outcome mode).
Target: Depends on cycle type. Discovery: 1-2 weeks. Outcome: 4-6 weeks.

**Signal quality**
Formula: (cycles where team can cite specific evidence that changed a belief) /
(total completed cycles) x 100
Target: >80%
If the team cannot articulate what they learned, the cycle produced no signal.

**Complexity reduction index**
Measure: Net change in system complexity indicators — long-lived feature flags
removed, services consolidated, complexity-reducing PRs merged minus
complexity-adding changes.
Target: Net negative (complexity decreasing over time).

### DORA Metrics

**Deployment frequency**
How often the team deploys to production. Higher is better (indicates
micro-shipping and small batch sizes aligned with FLOW principles).

**Lead time for changes**
Time from code commit to running in production. Shorter is better.

**Change failure rate**
Percentage of deployments that cause a failure in production (incident,
rollback, hotfix). Lower is better.

**Time to restore service**
How long it takes to recover from a production failure. Shorter is better.
