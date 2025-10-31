---
title: Uncertainty
sidebar:
  order: 17
slug: artificial-intelligence/uncertainty
prev: true
next: true
---

Artificial intelligence systems must make decisions in environments where information is **incomplete, noisy, or unpredictable**.
Probability theory provides a mathematical framework for reasoning under uncertainty and quantifying degrees of belief.

## 1. Deterministic vs Probabilistic Reasoning

Deterministic reasoning assumes **perfect information** and predictable outcomes.
Example: “If I take my umbrella, I won’t get wet.”
Probabilistic reasoning accepts that outcomes have **likelihoods**, not certainties.
Example: “There is a chance the umbrella might break, or wind may blow rain on me.”

Agents must reason probabilistically because real-world environments are often **partially observable** and **stochastic**.

## 2. Sources of Uncertainty

* Partial observability (limited sensors, missing data)
* Noisy perception (imperfect sensors or reports)
* Uncertain action outcomes (mechanical failures, random events)
* Complexity (hard to model all interactions)

Example: estimating whether leaving 25 minutes before a flight guarantees arrival depends on traffic, accidents, and weather.

## 3. Decision Making Under Uncertainty

A rational agent chooses actions that **maximize expected utility** rather than certainty.
Utility quantifies satisfaction or preference.

Expected utility of an action:
[
EU(a) = \sum_{\text{outcomes}} P(\text{outcome} | a) \times U(\text{outcome})
]

Example:
If
P(A25 on time)=0.04, P(A120 on time)=0.95,
the rational choice depends on how the agent values *waiting time* versus *missing the flight*.

Decision theory = Probability theory + Utility theory.

## 4. Why Logic Alone Fails

Logical reasoning struggles with uncertain domains (e.g., medical diagnosis).
Reasons:

* **Laziness:** impractical to write exhaustive axioms.
* **Theoretical ignorance:** incomplete knowledge of domain laws.
* **Practical ignorance:** missing evidence about current case.

Probability captures **degrees of belief**, summarizing uncertainty due to ignorance.

## 5. Approaches to Uncertainty

* **Default / Non-monotonic logic:** retractable conclusions (e.g., “Birds can fly” except penguins).
* **Probability theory:** quantitative model of uncertainty, e.g.
  P(A25 on time)=0.04 → small likelihood of success.

## 6. Probability Basics

A **sample space (Ω)** is the set of all possible outcomes.
Each **atomic event ω ∈ Ω** is a complete world description.
Example:
If the world contains two Boolean variables A and B,
atomic events are {A ∧ B, ¬A ∧ B, A ∧ ¬B, ¬A ∧ ¬B}.
Probabilities satisfy
[
0 ≤ P(ω) ≤ 1, \quad \sum_{\omega∈Ω} P(ω)=1
]

An **event** A ⊆ Ω has probability
[
P(A)=\sum_{\omega∈A} P(ω)
]
Example: rolling a die
P(roll < 4)=P(1)+P(2)+P(3)=½.

A **probability model** = (Ω, P) with these assignments.

## 7. Random Variables

A random variable X maps outcomes to values in its domain.
Example: X = dice result, Domain(X) = {1,…,6}.
Each value has an induced probability, e.g. P(X = 3)=1/6.

Types:

* Boolean (True/False)
* Discrete (finite categories)
* Continuous (real interval values)

For continuous variables, probabilities are defined by **probability density functions (pdfs)** such that
[
P(a≤X≤b)=\int_a^b f(x),dx
]

## 8. Propositions and Events

A **proposition** corresponds to the set of worlds where it is true.
Example:
For dice roll X,
X_is_odd = {1, 3, 5} ⇔ (X=1) ∨ (X=3) ∨ (X=5).
Propositions may combine via Boolean logic.

## 9. Prior Probability

**Prior probability** represents belief before new evidence.
Example:

```
P(Weather=sunny)=0.7
P(Weather=rain)=0.2
P(Weather=cloudy)=0.08
P(Weather=snow)=0.02
```

These values form a normalized distribution (sum = 1).
A **joint distribution** P(Weather, Cavity) gives probabilities of all combinations of variables.

## 10. Joint Probability Distributions

The joint distribution assigns a probability to every atomic event involving all random variables.
Notation:
[
P(X_1=x_1, X_2=x_2, …, X_n=x_n)
]
For large n, full tables become infeasible → need factorization using independence.

## 11. Marginal Probability

Marginalization sums over unwanted variables:
[
P(X=x)=\sum_y P(X=x, Y=y)
]
It reduces the joint distribution to a subset of variables.

## 12. Conditional Probability

Describes belief in A given B:
[
P(A|B)=\frac{P(A∧B)}{P(B)}
]
Product rule:
[
P(A∧B)=P(A|B)P(B)=P(B|A)P(A)
]
Example:
P(cavity | toothache)=0.8,
P(cavity | toothache ∧ rough_spot)=0.9.

Irrelevant evidence can be dropped, e.g.
P(cavity | toothache ∧ sunny)=P(cavity | toothache).

## 13. Chain Rule

Extends product rule to multiple variables:
[
P(X_1,…,X_n)=P(X_1),P(X_2|X_1),P(X_3|X_1,X_2),…,P(X_n|X_1,…,X_{n-1})
]
Forms the basis for probabilistic inference and Bayesian networks.

## 14. Inference by Enumeration

Given a joint distribution, probability of any proposition φ:
[
P(φ)=\sum_{\omega: \omega\models φ} P(ω)
]
Example:
P(toothache)=0.108+0.012+0.016+0.064=0.2
P(cavity ∨ toothache)=0.28.

Conditional inference uses normalization:
[
P(Cavity|toothache)=αP(Cavity,toothache)
]
where α is a constant ensuring probabilities sum to 1.

In general:
[
P(Y|E=e)=α\sum_h P(Y,E=e,H=h)
]
H = hidden variables. Complexity ≈ O(2ⁿ) for n binary variables.

## 15. Independence

Events A and B are **independent** if
[
P(A,B)=P(A)P(B)
]
or equivalently
P(A|B)=P(A).
Example:
P(Toothache,Catch,Cavity,Weather)=P(Toothache,Catch,Cavity)P(Weather).
Independence greatly reduces the size of joint tables but is rare in complex domains.

## 16. Conditional Independence

A and B are **conditionally independent given C** if
[
P(A,B|C)=P(A|C)P(B|C)
]
Example:
If a person has a cavity, the chance a probe catches doesn’t depend on toothache:
P(catch | toothache, cavity)=P(catch | cavity).
Using chain rule:
[
P(Toothache,Catch,Cavity)=P(Toothache|Cavity)P(Catch|Cavity)P(Cavity)
]
Conditional independence reduces required parameters from exponential to linear in n and is key to efficient probabilistic reasoning.

## 17. Bayes’ Rule

Derived from the product rule:
[
P(A|B)=\frac{P(B|A)P(A)}{P(B)}
]
Used to infer causes from observed effects.
Example:
Let M = meningitis, S = stiff neck:
[
P(M|S)=\frac{P(S|M)P(M)}{P(S)}=\frac{0.8×0.0001}{0.1}=0.0008
]

## 18. Naïve Bayes Model

Assumes conditional independence of effects given the cause:
[
P(Cause,Effect_1,…,Effect_n)=P(Cause)\prod_i P(Effect_i|Cause)
]
Simplifies computation—parameters grow linearly with n.
Example: P(Cavity|toothache ∧ catch) computed from individual conditional probabilities.

## 19. Key Takeaways

* Probability provides a **rigorous framework for uncertain knowledge.**
* The **joint distribution** contains complete information; all queries derive from it.
* **Marginalization** and **conditioning** extract required probabilities.
* **Independence** and **conditional independence** reduce complexity.
* **Bayes’ rule** enables reasoning from effects to causes—core of probabilistic AI.
