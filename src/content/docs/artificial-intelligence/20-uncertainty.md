---
title: Uncertainty
sidebar:
  order: 20
slug: artificial-intelligence/uncertainty
prev: true
next: true
---

In real life systems, AI has to support uncertainty. Probability theory provides a mathematical framework for reasoning under uncertainty.

Required in environments when they are:
- Partially observable
- Stochastic
- Noisy

### Deterministic Reasoning

Assumes perfect information and predictable outcomes.

Not suitable in uncertain domains, because of:
- Impractical to write exhaustive axioms.
- Incomplete knowledge of domain laws.
- Missing evidence about current case.

### Probabilistic Reasoning

Assumes that outcomes have likelihoods.

Probability captures degrees of belief, summarizing uncertainty due to ignorance.


### Approaches
Uncertainty can be approached with either:
- Non-monotonic logic   
  Retractable conclusions (e.g., “Birds can fly” except penguins).
- Probability theory   
  Quantitative model of uncertainty.

## Probability Theory

Revise [Probability](https://s2.sahithyan.dev/methods-of-mathematics/probability/introduction/) basics covered in semester 2.

$\Omega$ is the set of all possible world descriptions. Elements of $\Omega$ are atomic (cannot be broken down).

### Probability Model

Aka. probability space. Defined by sample space $\Omega$ and probability function $P$ which assigns a probability for all elements of $\Omega$.

### Propositions and Events

A **proposition** corresponds to the set of worlds where it is true.
Example:
For dice roll X,
X_is_odd = {1, 3, 5} ⇔ (X=1) ∨ (X=3) ∨ (X=5).
Propositions may combine via Boolean logic.

### Prior Probability

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

### Inference by Enumeration

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

### Conditional Independence

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

### Naïve Bayes Model

Assumes conditional independence of effects given the cause:

```math
P(\text{Cause},\text{Effect}_1,…,\text{Effect}_n)=P(\text{Cause})\prod_i P\left(\text{Effect}_i|\text{Cause}\right)
```

Simplifies computation—parameters grow linearly with n.
Example: P(Cavity|toothache ∧ catch) computed from individual conditional probabilities.
