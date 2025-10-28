---
title: Decomposition
sidebar:
  order: 9
slug: database-systems/basics/decomposition
prev: true
next: true
---

The process of breaking down a large table into smaller, more manageable tables based on functional dependencies. Helps reduce redundancy and improve data integrity. But not always good or required.

### Lossy Decomposition

Occurs when a table is decomposed into smaller tables, but some information is lost in the process. This can happen if the decomposition does not preserve all functional dependencies.

### Lossless Decomposition

Ensures that all functional dependencies are preserved during the decomposition process. This is achieved by ensuring that each functional dependency is preserved in at least one of the resulting tables. Preferred type.

### Lossless-Join Decomposition

A decomposition of $R$ into $R_1$ and $R_2$ is lossless join **if** at least one of the following dependencies is in $F^+$:
- $R_1 \cap R_2 \rightarrow R_1$
- $R_1 \cap R_2 \rightarrow R_2$

## Dependency preservation

Suppose a relation $R$ (satisfying $F$) is decomposed into $R_1, R_2, \ldots, R_n$. Let $F_i$ be the set of functional dependencies which include only attributes in $R_i$.

The decomposition is dependency preserving **if**:

```math
(F_1 \cup F_2 \cup \ldots F_n) = F^+
```

Means that all the functional dependencies from the original relation can still be enforced by checking them locally on the decomposed relations, without having to recombine (join) the tables.

If not, checking for violation of functional dependencies will require recombining the tables, which is expensive.


### Testing

To check if a dependency $\alpha \rightarrow \beta$ is preserved in a decomposition:

- Start with $\text{result} = \alpha$
- For each $R_i$ in the decomposition:
  - $t = (\text{result} \cap R_i)^+ \cap R_i$
  - $\text{result} = \text{result} \cup t$
- If $\text{result} \supseteq \beta$, then $\alpha \rightarrow \beta$ is preserved.

Here, attribute closure is computed with respect to $F$.

The above test is applied on all functional dependencies in $F$. Takes polynomial time.
