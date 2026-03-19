> Part VII: Reference | [← Previous](20-ai-agents.md) | [Next →](22-glossary.md)

# Chapter 20: Anti-Patterns Catalog

> *Panel-reviewed: Meeting #8 (2026-03-19)*
> **Read this**: Everyone, especially Flow Coaches. Recognize these patterns in your team and fix them.

---

## How to Use This Catalog

Each anti-pattern follows a structure: **Name** → **What it looks like** → **Why it happens** → **What to do about it**. If your team recognizes themselves in any of these, that's not a failure — it's self-awareness. The fix is always actionable.

---

## 1. Process Theater
**What it looks like**: The team fills out Discovery Briefs, runs "experiments," holds rituals — but nothing changes. Briefs are filed and forgotten. Experiments confirm what the team already decided to build. Kill/Merge meetings always result in "Continue."

**Why it happens**: The team adopted FLOW's artifacts without adopting its mindset. They're performing process, not making decisions.

**What to do**: The Flow Coach asks one question at every ritual: "What DECISION did we make today?" If the answer is "none," the ritual failed. Cancel the next one until there's something to decide.

---

## 2. Discovery Avoidance
**What it looks like**: Every new item gets classified as Outcome. "We already know what to build." The team writes SPEC-Lites for features they've never validated. Discovery mode is technically available but never used.

**Why it happens**: Building feels productive. Learning feels slow. Engineers want to code, PMs want to ship, stakeholders want deliverables. Discovery feels like delay.

**What to do**: Track the ratio of Discovery to Outcome classifications. If it's less than 20% Discovery, the team is probably building before understanding. Challenge: "What evidence do we have that users want this? None? That's a Discovery Brief, not a SPEC-Lite."

---

## 3. Zombie Cycles
**What it looks like**: Cycles that have been "in progress" for months. Nobody actively works on them, but they haven't been killed. They sit on the board, consuming a WIP slot, occasionally getting "one more sprint" of effort.

**Why it happens**: Killing is emotionally hard. The team invested time and effort. The stakeholder who requested it is still around. Nobody wants to be the one to pull the plug.

**What to do**: WIP limits force the conversation. "We're at capacity. To start this new bet, which of these zombies are you willing to kill?" Also: institute a "maximum continue" rule — a cycle can be continued at most twice ([Chapter 11](12-outcome-decisions.md)). After two continues, it's Kill or Merge. No third extension.

---

## 4. Scope Creep by Consensus
**What it looks like**: "While we're at it, could we also add...?" Each addition is small. The team agrees because each one seems reasonable. After 4 weeks, the scope is 3x the original SPEC-Lite.

**Why it happens**: Individual additions feel cheap. Nobody tracks the cumulative impact. The Non-Goals field is either absent or not enforced.

**What to do**: Enforce Non-Goals ruthlessly. Every "could we also" request is checked against Non-Goals. If it's listed there: "That's a non-goal for this cycle. File it as a new intake item ([Chapter 4](05-intake.md))." If Non-Goals are empty, the SPEC-Lite doesn't pass O2.

---

## 5. WIP Inflation
**What it looks like**: The team starts new work without killing old work. The WIP count grows: 3 → 5 → 8. "Everything is important." Everything is in progress. Nothing is finishing.

**Why it happens**: Starting is easier than stopping. New requests come with urgency and enthusiasm. Old work comes with fatigue and uncertainty.

**What to do**: Hard WIP limits. No exceptions. "We're at 5 of 5. You want to start this? What dies?" The Flow Coach owns this enforcement. If leadership demands an exception, document it as a WIP override ([Chapter 18](19-organizational-change.md)).

---

## 6. Gate Skipping
**What it looks like**: "We don't have time for gate checks. Let's just start building." The team writes a Brief but skips D1. They write a SPEC but skip O2. They build without a Contract (O3 skipped). They ship without observability (O4 skipped).

**Why it happens**: Under pressure, process feels like overhead. "We already know this is right." Pressure comes from deadlines, stakeholders, or the team's own impatience.

**What to do**: Gates are not optional. The Flow Coach blocks work that hasn't passed the relevant gate. "This SPEC has no kill condition. O2 doesn't pass. We're not starting until it does." If leadership overrides, document the gate skip and track outcomes — gate-skipped features typically have lower adoption and higher waste.

---

## 7. Metric Gaming
**What it looks like**: The team chooses metrics that always look green. "We'll measure page views" (guaranteed to be non-zero). Kill conditions are set at impossibly low thresholds. Success is declared on vanity metrics that don't reflect actual value.

**Why it happens**: The team is optimizing for the appearance of success, not actual success. Often driven by a culture that punishes failure ([Chapter 18](19-organizational-change.md)).

**What to do**: Target metrics must be reviewed at Gate O2. The Flow Coach (or a peer PM) challenges: "Is this metric actually meaningful? Would you change direction based on this number?" If not, it's the wrong metric. Kill conditions should be set at thresholds that would ACTUALLY cause the team to stop — not at levels that can never be reached.

---

## 8. The Infinite Discovery
**What it looks like**: "We need more data." The team runs experiment after experiment without ever transitioning to Outcome mode. Discovery feels safe because you're always "learning" without the risk of building something that fails.

**Why it happens**: Discovery avoids the accountability of shipping. Learning is intellectually satisfying. Building is scary because it can fail publicly.

**What to do**: Time-box Discovery cycles. Maximum 4 weeks per Discovery cycle. If 3 experiments over 4 weeks haven't produced enough evidence to pass Gate D3, it's either: (a) the hypothesis is too vague (refine it), (b) the evidence will never be sufficient (accept uncertainty and move to Outcome), or (c) the team is avoiding the transition (call it out).

---

## 9. Strategic Mapping Theater
**What it looks like**: Every piece of work traces to the spine — on paper. But the mappings are reverse-engineered to justify work that's already decided. "This CEO pet project maps to 'customer excellence'." Technically true, meaninglessly broad.

**Why it happens**: Spine mapping becomes a justification exercise when the culture rewards starting work and punishes questioning it. People learn to write mappings that pass admission control without genuine strategic alignment.

**What to do**: The spine check should be SPECIFIC. Not "this maps to customer excellence" but "this maps to Bet: 'Nurses will adopt scheduling if we reduce clicks by 50%' under Strategy: 'Win Hospital X renewal.'" If the mapping is a vague strategic pillar, it's theater. Push for the specific bet.

---

## 10. The Solo Hero Discovery
**What it looks like**: One person (usually the PM or founder) runs Discovery alone. They design experiments, interpret results, and decide to transition to Outcome without the team's input. The team finds out they're building something when the SPEC appears.

**Why it happens**: Speed. It's faster for one person to think than for a team to discuss. But it breaks the shared understanding that makes Outcome execution smooth.

**What to do**: Discovery artifacts (Briefs, Experiment Logs) must be shared with the team — even in small teams. The minimum: share the Brief at D1, share experiment results at the Discovery Review, make the D3 decision collaboratively. Solo founders are exempt (they ARE the team), but any team of 2+ must involve the team.

---

## 11. Kill Condition Renegotiation
**What it looks like**: The kill condition triggers. The team says: "But wait, maybe the metric was wrong. Let's revise the condition and extend." The revision always makes the condition easier to meet. The cycle continues indefinitely.

**Why it happens**: Sunk cost. Emotional attachment. Fear of looking like the team that "failed."

**What to do**: The 30-minute inspection ([Chapter 1](01-why-flow.md)) is the ONLY mechanism for questioning a triggered kill condition. The inspection evaluates whether the DATA was valid, not whether the team WANTS to continue. If the data is valid, the kill stands. If renegotiation happens outside the inspection framework, the Flow Coach flags it as this anti-pattern.

---

*Next: [Chapter 21 — Glossary →](22-glossary.md)*
