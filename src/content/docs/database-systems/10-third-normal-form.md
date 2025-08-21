---
title: Third Normal Form
sidebar:
  order: 10
slug: database-systems/third-normal-form
prev: true
next: true
---

A relaxed version of BCNF. Aims to reduce data redundancy and improve data integrity.

A relation $R$ is in third normal form (3NF) **if** for all $\alpha\rightarrow \beta$ in $F^+$, at least one of the following holds:
- $\alpha \rightarrow \beta$ is trivial
- $\alpha$ is a superkey of $R$
- Each attribute $A$ in $\beta-\alpha$ is contained in a candidate key of $R$

If a relation is in BCNF, it is also in 3NF.
