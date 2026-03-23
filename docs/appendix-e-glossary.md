# Appendix E: Glossary

> *~15 terms, 1-2 sentences each. The shared vocabulary of FLOW v3.*

---

**Bet** — A specific hypothesis the team is investing in, sitting between Strategy and Cycle on the Decision Spine. Named "Bet" to signal intellectual honesty: we might be wrong.

**Commit (G1)** — The first gate. The team reviews the Cycle Brief and decides: is this bet worth a WIP slot? Checks that the hypothesis is testable, the kill condition is measurable, and the observation plan exists.

**Cycle** — A bounded unit of work with a clear start (G1 Commit), midpoint check (G2 Pulse), and end (G3 Resolve). Every cycle is either Discovery or Outcome. Every cycle traces to a bet on the spine.

**Cycle Brief** — The single planning artifact. Contains: what, hypothesis, kill condition, observation plan. Outcome cycles add scope and target metric.

**Decision Spine** — The traceability chain: Vision -> Strategy -> Bet -> Cycle. Every piece of work traces upward. If it can't trace, it shouldn't enter.

**Discovery Mode** — One of two modes. Used when the primary risk is building the wrong thing. The goal is learning. Output is evidence, not code.

**Gate** — A decision checkpoint. FLOW v3 has three: G1 Commit (enter), G2 Pulse (check), G3 Resolve (exit). Gates are where decisions happen.

**Kill Condition** — A pre-committed definition of failure, written BEFORE work begins. When triggered, the default is kill. The only override is a 30-minute data inspection at G3 Resolve.

**Kill/Merge Record** — The artifact produced at G3 Resolve. Documents the decision (kill, merge, or continue), the evidence, and the rationale.

**Learning Entry** — The artifact produced after every completed cycle. Captures: what we learned, what surprised us, what's transferable. Institutional memory that compounds.

**Mode** — Discovery or Outcome. The mode determines what you're optimizing for (learning vs. shipping), which Cycle Brief fields matter, and how to interpret the kill condition.

**Outcome Mode** — One of two modes. Used when the primary risk is failing to ship the right thing. The goal is a working product measured by a target metric.

**Pulse (G2)** — The second gate. A mid-cycle health check. Is the observation plan working? Is data being collected? Are there blockers?

**Resolve (G3)** — The third and final gate. The kill/merge decision. Three outcomes: Kill (stop, learn), Merge (ship), Continue (extend — maximum twice). Evidence-driven.

**Tempo** — The team's natural rhythm of build-observe-decide. A config value: cycle length in days. Discovered, not assigned.

**WIP Limit** — Maximum concurrent cycles. Prevents context switching and quality erosion. Set per mode (Discovery limit, Outcome limit) in the FLOW Configuration.
