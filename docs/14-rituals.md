> Part V: Operations | [← Previous](13-wip-limits.md) | [Next →](15-production-readiness.md)

# Chapter 13: Rituals & Cadence

> *Panel-reviewed: Meeting #6 (2026-03-19)*
> **Read this**: Flow Coaches (mandatory), PMs, team leads. **Skip if**: Solo founder (keep only weekly self-review).

---

## The Weekly Rhythm

FLOW has four rituals. Not all teams need all four. Use what fits your context and drop what doesn't.

| Ritual | Purpose | Default Cadence | Duration | Who |
|--------|---------|----------------|----------|-----|
| **Intake Review** | Route new work: classify, shape, assign | Daily async or weekly 15 min | 15 min | PM + Tech Lead |
| **Discovery Review** | Check experiment progress across Discovery cycles | Weekly 30 min | 30 min | PM + team |
| **Outcome Review** | Check metric progress across Outcome cycles | Weekly 30 min | 30 min | PM + team |
| **Kill/Merge** | Portfolio decisions: kill, merge, or continue active cycles | End of cycle (or weekly if multiple cycles) | 45 min | PM + team + stakeholders |

### Which Rituals to Keep

| Context | Intake | Discovery Review | Outcome Review | Kill/Merge |
|---------|--------|-----------------|----------------|------------|
| **Solo** | Continuous (mental triage) | When experiments complete | Check metrics daily | Weekly with yourself: "kill or keep?" |
| **Small team** | Daily async or 2x/week | Weekly | Weekly | End of each cycle |
| **Enterprise** | Weekly formal | Bi-weekly | Weekly | Monthly + end of cycle |
| **Agency** | Per-client as requests arrive | Weekly (internal) | Per-client cadence | Per-client cycle end |
| **Hardware** | Weekly | Monthly (long experiments) | Monthly (long cycles) | End of cycle (quarterly-ish) |
| **Government** | Monthly programmatic + weekly project | Monthly | Monthly | Quarterly + end of cycle |

---

## Ritual Anti-Patterns

**Process Theater**: Going through the motions without making decisions. The team presents data, everyone nods, nothing changes. If a ritual doesn't produce DECISIONS, it's a waste.

**Update Meetings in Disguise**: "What did you do yesterday? What will you do today?" That's a standup, not a FLOW ritual. FLOW rituals ask: "What did we LEARN? What should we DECIDE? What should we KILL?"

**The Never-Kill Meeting**: Kill/Merge meetings where "Continue" is always the answer. If your team hasn't killed anything in 3 months, your kill conditions are too generous or your culture punishes killing.

**Calendar-Driven, Not Evidence-Driven**: Running Discovery Review when no experiments have completed. Running Outcome Review when no metrics are available. Skip the ritual if there's nothing to review. Don't meet just because it's Wednesday.

---

## Cross-Team Sync Rituals

When multiple teams work on related cycles (platform + stream-aligned, or multiple squads on one product):

### The Dependency Sync
**Purpose**: Surface and resolve cross-team blockers before they become crises.
**Cadence**: Weekly 15 min (between tech leads of dependent teams).
**Format**: "What do you need from us this week? What's blocked? What changed?"

### The Portfolio Sync
**Purpose**: Leadership-level view of all active cycles across all teams.
**Cadence**: Bi-weekly or monthly (product leadership + team leads).
**Format**: Portfolio Dashboard review. Decisions: rebalance WIP across teams, approve new bets, escalate blockers.

### The Portfolio Dashboard

One row per active bet. Updated weekly (by Flow Coach or AI agent):

| Column | Content |
|--------|---------|
| **Bet Name** | Short name of the bet |
| **Owner** | PM responsible |
| **Mode** | Discovery / Outcome |
| **Cycle Progress** | Uphill / Peak / Downhill |
| **Kill Condition** | The pre-committed condition (abbreviated) |
| **Kill Status** | Not triggered / Approaching / TRIGGERED |
| **Target Metric** | Current value vs. threshold |
| **WIP Impact** | Which team, which WIP slot |
| **Next Decision** | Date of next Kill/Merge or Gate review |

This dashboard is the source of truth for the Portfolio Sync. Leadership reads it before the meeting. The meeting focuses on DECISIONS, not status updates — the dashboard already provides status.

---

## Async Alternatives

Not every ritual needs a meeting. AI agents and async tools can handle the mechanical parts:

**Intake**: An agent classifies incoming requests, checks spine mapping, and routes to the right team. The PM reviews the agent's classification async — approving, reclassifying, or rejecting. The 15-minute meeting becomes a 5-minute async review.

**Discovery/Outcome Review**: An agent compiles experiment results and metric dashboards into a summary. The team reads the summary async. Only DECISIONS require synchronous time — "Should we kill this?" happens in a short huddle, not a full meeting.

**Kill/Merge**: This one stays synchronous. Kill decisions carry emotional weight and political implications. They deserve a real conversation, not an async vote.

**Principle**: Automate the REPORTING. Keep the DECIDING synchronous. The value of FLOW rituals is the decision, not the data presentation.

---

*Next: [Chapter 14 — Production Readiness →](15-production-readiness.md)*
