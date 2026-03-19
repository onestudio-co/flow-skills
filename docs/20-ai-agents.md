> Part VI: Adoption | [← Previous](19-organizational-change.md) | [Next →](21-anti-patterns.md)

# Chapter 19: FLOW with AI Agents

> *Panel-reviewed: Meeting #7 (2026-03-19)*
> **Read this**: Teams using AI tools. **Optional** — FLOW works without AI agents. **Skip if**: No AI tooling available.

---

## How Agents Change the Methodology

FLOW works without AI agents. Every concept, artifact, and gate can be executed by humans with sticky notes and spreadsheets.

But agents transform FLOW from a methodology that teams follow into a methodology that **runs itself** — with humans making the decisions that matter and agents handling the mechanics that don't.

This chapter is **tool-agnostic**. It describes capability patterns, not specific products. Any agent that can read, classify, check, and report can fill these roles.

---

## Capability Patterns

### 1. Intake Classification Agent
**What it does**: Reads an incoming request (email, Slack message, Jira ticket, conversation note) and classifies it:
- Discovery or Outcome?
- Which bet does it trace to on the spine?
- Which team should handle it?
- Is there WIP capacity?

**Human role**: PM reviews the classification. Approves, adjusts, or rejects. The agent proposes; the human decides.

**Value**: Reduces intake from a 15-minute meeting to a 2-minute review. The agent has already read the request, checked the spine, and drafted a classification before the PM looks at it.

### 2. Gate Checker Agent
**What it does**: Evaluates a Discovery Brief or SPEC-Lite against the gate checklist (D1, D2, O1, O2, etc.) and flags missing or weak items.
- "This Brief has no kill condition. D1 fails."
- "This SPEC's kill condition says 'if users don't like it' — that's too vague. Suggest: 'if fewer than X users complete Y action within Z days.'"
- "This experiment design uses production code when a mockup could answer the question. Gate D2 flags: cheaper experiment may be possible."

**Human role**: The team writes the artifacts. The agent checks quality BEFORE the team reviews. Reduces review time and catches obvious gaps.

### 3. Experiment Design Agent
**What it does**: Given a hypothesis, proposes the cheapest valid experiment:
- Searches the Learning Archive for similar hypotheses already tested
- Suggests experiment types from the menu ([Chapter 6](07-experiments.md)) ranked by cost
- Drafts an experiment plan with success signal and kill condition

**Human role**: PM and Designer review the proposal. Accept, modify, or design their own. The agent provides a starting point.

### 4. Cycle Status Agent
**What it does**: Compiles a status snapshot for all active cycles:
- Discovery cycles: experiment status, evidence collected, days remaining
- Outcome cycles: target metric current value vs. threshold, adoption rate, kill condition status
- WIP counts: current vs. limit, per team and portfolio

**Human role**: PM reads the snapshot before rituals. Identifies what needs attention without manually checking dashboards.

### 5. Kill/Merge Evidence Agent
**What it does**: Before a Kill/Merge meeting, compiles the evidence package:
- Current target metric value vs. threshold
- Kill condition status (triggered / not triggered)
- Adoption curve (trend direction)
- Comparison to similar past cycles from the Learning Archive

**Human role**: PM presents the evidence. Team discusses. Humans make the Kill/Merge decision. The agent compiles; humans decide.

### 6. Learning Archive Agent
**What it does**: After a kill or merge decision, the agent:
- Drafts the Learning Archive entry
- Tags it with hypothesis, bet, strategy, and outcome
- Makes it searchable for future teams
- Flags if a similar hypothesis has been attempted before

**Human role**: PM reviews and edits the draft. Adds qualitative insights the agent can't capture ("the real reason this failed was the VP changed priorities mid-cycle").

---

## What Agents Can Do vs. What Humans Must Do

| Activity | Agent Can | Human Must |
|----------|-----------|------------|
| Classify incoming work | ✅ Propose classification | Approve/override |
| Check gate checklists | ✅ Flag missing items | Judge quality and context |
| Suggest experiments | ✅ Propose cheapest valid | Design the right one for this specific context |
| Compile metrics | ✅ Gather and format data | Interpret what the data means |
| Draft Learning Archive entries | ✅ Structure and tag | Add qualitative insight |
| **Make kill decisions** | ❌ Never | ✅ Always — killing requires judgment about context, politics, and strategy |
| **Set strategy** | ❌ Never | ✅ Always — vision and strategy are human leadership acts |
| **Judge product quality** | ❌ Never | ✅ Always — "is this good?" requires human taste and domain expertise |
| **Negotiate with stakeholders** | ❌ Never | ✅ Always — politics, relationships, trust |

The line is clear: **agents handle mechanics. Humans handle judgment.** An agent can tell you the kill condition was triggered. A human decides whether to pull the trigger.

---

## The Human-Agent Collaboration Model

Think of the agent as a **chief of staff**, not a decision-maker:
- Prepares the briefing (status, evidence, options)
- Handles the paperwork (classification, logging, archiving)
- Flags anomalies ("WIP is over limit," "this brief has no kill condition")
- Remembers everything (Learning Archive, past experiments, historical cycles)

The PM makes the calls. The engineer builds the system. The designer crafts the experience. The Flow Coach facilitates the rituals. The agent makes all of them faster by handling the information work.

---

## Building a FLOW-Aware Agent

If you're implementing your own FLOW agent, here's the capability reference:

| Capability | Input | Output | Complexity |
|-----------|-------|--------|------------|
| Intake Classification | Raw request text | Mode (Discovery/Outcome), spine mapping, team assignment | Medium |
| Gate Check | Artifact (Brief/SPEC) + checklist | Pass/fail per item, suggestions for weak items | Low |
| Experiment Suggestion | Hypothesis text | Ranked experiment options with cost estimates | Medium |
| Cycle Status | Active cycles data + metrics | Dashboard summary with flags | Low |
| Evidence Compilation | Metrics data + kill conditions | Pre-formatted Kill/Merge evidence package | Low |
| Archive Management | Decision records | Tagged, searchable Learning Archive entries | Low |
| WIP Enforcement | Active cycle counts + limits | Over/under capacity alert | Low |

Start with Gate Check and Cycle Status — they're the easiest to implement and provide immediate value. Add Intake Classification once you have enough historical data for the agent to learn your team's patterns.

---

*Sidebars:*

*Solo: AI agents are your team. As a solo founder, you wear every hat. An agent can be your Flow Coach — "You have 3 active experiments. Your WIP limit is 2. What are you willing to stop?" It can be your gate checker — "Your Brief has no kill condition. What metric would prove you wrong?" The agent doesn't replace your judgment. It replaces the team members who would normally challenge your assumptions.*

*Enterprise: AI governance and trust. In enterprise environments, agents must be transparent (show their reasoning), auditable (log all classifications), and overridable (humans can always override). Don't give agents authority to kill cycles or approve gates — keep them in advisory mode. The value is speed and consistency, not autonomy.*

---

*Next: [Chapter 20 — Anti-Patterns Catalog →](21-anti-patterns.md)*
