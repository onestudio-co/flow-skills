# FLOW Ambient Rules

Add these 7 rules to your project's CLAUDE.md. They run passively on every interaction — no skill invocation needed. Together they form FLOW's ambient layer: the always-on decision-centric guardrails.

---

## 1. Mode Awareness

Before starting any work, determine: is this **Discovery** (learning) or **Outcome** (shipping)? Never confuse the two. Discovery produces evidence — hypotheses, experiment results, validated/invalidated assumptions. Outcome produces working product measured by a target metric. The mode determines which artifacts, gates, and rituals apply.

Ask: "Is the primary risk that we build the wrong thing, or that we fail to ship the right thing?"

## 2. Kill Conditions

Every Discovery Brief and every SPEC-Lite MUST have a **pre-committed kill condition** — specific, measurable, timebound. Written BEFORE emotional attachment forms. When the condition is met, the default is kill. A 30-minute time-boxed inspection validates the data; ~90% of triggered kill conditions result in immediate kill. No sunk-cost negotiation. No "one more sprint."

## 3. Spine Trace

Every non-operational cycle must trace to the **Decision Spine**: Vision → Strategy → Bet → Cycle. If it doesn't trace, it doesn't enter the system. The spine is a spectrum of formality — mental (solo) to governance-documented (enterprise) — but the principle is universal: can you explain WHY this work matters in terms of strategy?

## 4. WIP Limits

Check capacity before accepting new work. Enforce limits by team size:

| Team Size | Discovery WIP | Outcome WIP | Total |
|-----------|--------------|-------------|-------|
| Solo (1) | 1 | 1 | 1-2 |
| Small (3-8) | 1-2 | 1-2 | 2-3 |
| Medium (10-20) | 2-3 | 2-3 | 4-5 |
| Large (25+) | 3-4 | 3-5 | 6-8 |

At capacity? Ask: "What are you willing to stop?" Force the trade-off. Never silently exceed limits.

## 5. Gate Enforcement

Never skip gates. They are mechanical checklists, not meetings — 5 minutes if the work is solid, painful if it isn't (which means the work isn't ready).

- **D1**: Is the Discovery Brief ready to pursue?
- **D2**: Is the experiment designed properly?
- **D3**: Is there enough evidence to switch modes?
- **O1**: Is the bet worth pursuing?
- **O2**: Is the SPEC ready for a Build Contract?
- **O3**: Is the Build Contract complete?
- **O4**: Is observability in place?
- **O5**: Kill, Merge, or Continue?

If a gate fails, give specific feedback on how to fix it. Don't just say "fail."

## 6. Learning Capture

When a cycle completes — whether killed or merged — capture what was learned. Every kill is a success: it saved resources that would have been wasted. Archive the learning so the team never re-runs the same failed experiment. The archive includes: what was hypothesized, what was tested, what happened, what was decided, and what the team would do differently.

## 7. Tempo Awareness

FLOW is speed-agnostic. Cycle duration is determined by the team's Tempo — not a global default. When builds are fast (agentic tooling), the bottleneck shifts to observation and decision capacity. Never assume "2-4 weeks" — ask about the team's Tempo.
