---
title: Bayesian Network
sidebar:
  order: 21
slug: artificial-intelligence/bayesian-network
prev: true
next: true
---

A graphical model that represents the probabilistic relationships among a set of random variables. Uses a directed acyclic graph.

Provides a compact and intuitive representation of joint probability distributions using conditional independence and causal structure.

### Node

Represents a random variable.

Each node has a local [CPD](#local-conditional-probability-distribution).

The overall joint probability of all variables is:

```math
P(X_1, X_2, \ldots, X_n) = \prod_{i=1}^{n} P(X_i | \text{Parents}(X_i))
```

### Edge

Directed links. A link from node $X$ to node $Y$ means that $X$ has a direct influence on $Y$.

### Local Conditional Probability Distribution

Aka. CPD. A function defining the probability of a variable given its parents.

For a node $X_i$ with parents $\text{Parents}(X_i)$, the CPD is:

```math
P(X_i \,|\, \text{Parents}(X_i))
```

Specifies the relationship between a node and its parent nodes. Can be continuous or discrete. For discrete variables: represented using conditional probability table (CPT).

A CPT for a boolean variable $X_i$ with $k$ boolean parents has $2^k$ entries.

## Joint Probability Distribution

Aka. JPD. The full joint probability for all variables in the network is the product of local conditional probabilities:

Example:

```math
P(B, E, A, J, M) = P(B) \cdot P(E) \cdot P(A|B,E) \cdot P(J|A) \cdot P(M|A)
```

Here:

- $P(B), P(E)$ is used because $B, E$ has no parents.
- $P(A|B,E)$ because $A$ depends on both $B$ and $E$.
- $P(J|A), P(M|A)$ because $J, M$ depend only on $A$.

This decomposition avoids the need to represent all combinations explicitly.

## Inference

The goal is computing probabilities of interest given evidence.

### By Enumeration

```math
P(B|J,M) = \alpha \sum_E \sum_A P(B, E, A, J, M)
```

where $\alpha$ is a normalization constant ensuring probabilities sum to 1.

This method sums over hidden (unobserved) variables to find the posterior probability.

## Conditional Independence

### Patterns

| Relationship Type | Structure   | Independence Property             |
| ----------------- | ----------- | --------------------------------- |
| Common cause      | $X ← Y → Z$ | $X$ and $Z$ independent given $Y$ |
| Common effect     | $X → Y ← Z$ | $X$ and $Z$ dependent given $Y$   |
| Causal chain      | $X → Y → Z$ | $X$ and $Z$ independent given $Y$ |

### Structure

- Children are conditionally independent of ancestors given parents.
- Siblings are conditionally independent given their common parent.
- Parents are generally not conditionally independent given a child.

## Compactness and Efficiency

If every node has at most $k$ parents, total storage = $O(n \cdot 2^k)$.
This is linear in n, compared to $O(2^n)$ for the full joint distribution.

More compact than full joint tables.

## Constructing a Bayesian Network

- Choose variables relevant to the domain.
- Decide an ordering of variables (causes before effects preferred).
- For each variable $X_i$:
  - Add a node for $X_i$.
  - Select minimal parents ensuring conditional independence.
  - Define the CPT for $X_i$.
