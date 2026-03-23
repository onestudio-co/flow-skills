# Appendix C: Anti-Pattern Catalog

> *Optional reading. The 7 named failure modes. Recognize them in your team and fix them.*

---

## 1. Conviction Decay

**What it looks like.** The team writes a strong kill condition at G1. By week two, conviction softens. "Maybe 10% was too ambitious. Let's say 5%." By G3, the condition has been revised three times — always downward. Nothing ever gets killed because the bar keeps dropping.

**Why it happens.** Kill conditions are set in the cold light of planning. As the team invests effort, emotional attachment grows. Revising the condition feels reasonable each time — but the cumulative effect is that kills become impossible.

**What to do.** Kill conditions set at G1 are final. The only mechanism for questioning a triggered kill is the 30-minute inspection at G3: was the DATA valid? If the data is valid, the kill stands. Document any revision attempts as Conviction Decay.

---

## 2. Ghost Cycle

**What it looks like.** A cycle exists on the board. It passed G1. But nobody is actively working on it. It hasn't had a G2 Pulse in weeks. It consumes a WIP slot silently.

**Why it happens.** New work arrived. The old cycle wasn't killed — just deprioritized. Nobody wants to formally kill it because "we might come back to it."

**What to do.** Any cycle without activity for one full tempo interval is flagged. The team must either actively work on it this interval or kill it at the next G3. Ghost cycles are WIP waste.

---

## 3. Gate Theatre

**What it looks like.** The team runs G1, G2, G3. Checklists are filled. But nothing changes. Briefs always pass. Pulses never raise concerns. Resolves always continue.

**Why it happens.** The team adopted FLOW's artifacts without its mindset. Gates feel like bureaucracy rather than decision points.

**What to do.** One diagnostic question per gate: "What DECISION did we make?" If the answer is "none," the gate failed. Track gate failure rate — if gates never fail, the evaluator isn't doing their job.

---

## 4. Sunk Cost Override

**What it looks like.** The kill condition triggers. The team says: "But we've invested 3 weeks. We're so close." The 30-minute inspection becomes a renegotiation. The cycle continues.

**Why it happens.** Humans weight losses more than gains. Past effort feels like something that would be "wasted" by killing.

**What to do.** At G3, ask: "Ignore what we've spent. If this were a NEW bet starting today, with ONLY the evidence we have, would you commit a WIP slot?" If no, kill it. Past investment is irrelevant to future decisions.

---

## 5. Mode Bleed

**What it looks like.** A Discovery cycle starts — the team is supposed to be learning. By day three, someone starts building production code. The experiment becomes a feature. The feature ships without a kill condition.

**Why it happens.** Building feels productive. Learning feels slow. When agents compress build time, the temptation multiplies.

**What to do.** Mode transitions require a gate. Discovery ends at G3 with a conscious decision. Any production code written during Discovery is a prototype — disposable by default. If the team wants to keep it, that decision happens at G3.

---

## 6. Zombie Bet

**What it looks like.** A bet has been running for months. Multiple cycles attempted. None produced strong evidence — but none triggered a clean kill either. The bet persists because "the thesis might still be right."

**Why it happens.** Bets are higher on the spine than cycles. Killing a bet feels like admitting a strategic mistake.

**What to do.** At Portfolio Review, apply the bet health check: "How many cycles has this bet consumed? What evidence has it produced?" If 3+ cycles have been killed under the same bet with no pivot, the bet itself is a Zombie. Kill it.

---

## 7. Observation Blindness

**What it looks like.** The team builds and ships. Metrics exist somewhere. But nobody looks at them. Decisions are based on feelings, not data.

**Why it happens.** Observation requires infrastructure, discipline, and patience. Building is easy — especially with agents.

**What to do.** G2 Pulse exists for this. At Pulse, ask: "What does the data say?" If nobody has looked, the Pulse fails. The Cycle Brief must include an observation plan. If it's blank, G1 does not pass.
