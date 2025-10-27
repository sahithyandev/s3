---
title: Functional Dependencies
sidebar:
  order: 7
slug: database-systems/basics/functional-dependencies
prev: true
next: true
---

A relationship between two sets of attributes in a relational database. Denoted as `X → Y`. A generalization of a _key_. Means that for any two rows in a table, if the values of attributes in set `X` are the same, then the values of attributes in set `Y` must also be the same. In other words, the value of `X` uniquely determines the value of `Y`.

Functional dependencies are fundamental to understanding how data is organized and how redundancy can be minimized. They are used to guide the process of normalization, which helps ensure that the database structure is efficient and free from undesirable anomalies.

Consider a table with attributes `StudentID`, `StudentName`, and `Major`. If each `StudentID` is unique and always refers to the same `StudentName`, then there is a functional dependency:  
`StudentID → StudentName`

Functional dependencies help identify candidate keys and are essential for designing robust relational schemas.

### Trivial

A functional dependency is trivial **if** it is satisfied by all instances of a relation. Of the form $A → B$ where $B \subseteq A$.

## Legal instance

For a relation: An instance of a relation that satisfies all real-world constraints.

If a relation $r$ is legal under set of functional dependencies $F$, it's mentioned as $r$ satisfies $F$.

For a database: an instance of a database in which all the relations are legel.

If a set of functional dependencies $F$ is legal under a relation schema $R$, it's mentioned as $F$ holds on $R$.

## Closure

Suppose a set of functional dependencies $F$. The set of all functional dependencies logically implied by $F$. Superset of $F$. Denoted by $F^+$.

### Armstrong's axioms

Closure of $F$ can be found by repeatedly applying Armstrong's axioms.

- Reflexivity: **If** $\beta \subseteq \alpha$ **then** $\alpha \rightarrow \beta$
- Augmentation: **If** $\alpha \rightarrow \beta$ **then** $\gamma\alpha \rightarrow \gamma\beta$
- Transitivity: **If** $\alpha \rightarrow \beta$ and $\beta \rightarrow \gamma$ **and** $\alpha \rightarrow \gamma$

The above rules are:
- sound - generate functional dependencies that hold
- complete - generate all functional dependencies that hold

Other inferred rules:
- union: **If** $\alpha \rightarrow \beta$ and $\alpha \rightarrow \gamma$ **then** $\alpha \rightarrow \beta\gamma$
- decomposition: **If** $\alpha \rightarrow \beta\gamma$ **then** $\alpha \rightarrow \gamma$ and $\alpha \rightarrow \beta$
- pseudotransitivity: **If** $\alpha \rightarrow \beta$ and $\gamma\beta \rightarrow \delta$ **then** $\alpha\gamma \rightarrow \delta$

## Superkey

$K$ is a superkey for a relation schema $R$ **iff** $K \implies R$.

## Candidate key

$K$ is a candidate for a relation schema $R$ **iff** $K \implies R$ **and** $K$ is minimal.
