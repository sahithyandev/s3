---
title: Boyce-Codd Normal Form
sidebar:
  order: 9
slug: database-systems/boyce-codd-normal-form
prev: true
next: true
---

A relation schema $R$ is in BCNF with respect to a set of functional dependencies $F$, **if** for all functional dependencies in $F^+$ of the form $A \rightarrow B$, at least one of the following conditions holds:
1. $A \rightarrow B$ is trivial
2. $A$ is a superkey for $R$

## Decomposing

Suppose relation $R$ and a non-trivial functional dependency $A \rightarrow B$ cause a violation of BCNF.

$R$ is decomposed into:
- $(A \cup B)$
- $R - (B - A)$

We can decompose $R$ into two relations $R_1$ and $R_2$ such that $R_1$ contains $A$ and $B$, and $R_2$ contains the remaining attributes of $R$. The functional dependencies in $F$ that involve $A$ and $B$ are now in $F_1$ and $F_2$, respectively.

## Dependency preservation

Refers to the property that, after decomposing a relation into two or more relations, it is still possible to enforce all the original functional dependencies by checking them on the individual decomposed relations, without needing to recombine them.

In the context of BCNF, decomposition is often performed to eliminate redundancy and anomalies caused by functional dependencies. However, BCNF decomposition does not always guarantee dependency preservation. That is, some functional dependencies may span across the decomposed relations and cannot be enforced without joining the relations back together.

Ideally, a decomposition should satisfy both BCNF and dependency preservation, but sometimes achieving BCNF requires sacrificing dependency preservation. In such cases, designers must decide whether to prioritize normalization (BCNF) or the ability to enforce all dependencies directly on the decomposed relations.
