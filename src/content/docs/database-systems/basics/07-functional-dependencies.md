---
title: Functional Dependencies
sidebar:
  order: 7
slug: database-systems/basics/functional-dependencies
prev: true
next: true
---

Describes a relationship between attributes in a relation. Defines if one set of attributes can determine another.

If attribute set $X$ determines attribute set $Y$, it's denoted as $X → Y$. Which means, for any two tuples in a relation, if their $X$ values are the same, their $Y$ values must also be the same.

Here:
- X is called the determinant
- Y is called the dependent

A functional dependency represents a constraint on valid data. All candidate keys of a relation are determinants (they functionally determine every attribute).

### Usage
Functional dependencies are basis of normalization. Helps find redundancy, anomalies.

Functional dependencies help identify candidate keys and are essential for designing robust relational schemas.

### Trivial

A functional dependency is trivial **if** it is satisfied by all instances of a relation. Of the form $A \rightarrow B$ where $B \subseteq A$.

## Legal instance

For a relation: An instance of a relation that satisfies all real-world constraints.

If a relation $r$ is legal under set of functional dependencies $F$, it's mentioned as $r$ satisfies $F$.

For a database: an instance of a database in which all the relations are legel.

If a set of functional dependencies $F$ is legal under a relation schema $R$, it's mentioned as $F$ holds on $R$.

## Armstrong's axioms

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

## Closure

### Closure of Functional Dependencies

Suppose $F$ is a set of functional dependencies.

Closure of $F$, denoted as $F^+$, is the complete set of all functional dependencies that can be logically inferred from $F$. Armstrong’s axioms are repeatedly applied to compute $F^+$.

$F^+$ can be computed by:

#### Step-by-step procedure

1. Initialize $F^+$ = F
2. For each functional dependency of $F^+$, apply Armstrong’s axioms:
  - Reflexivity
  - Augmentation
  - Transitivity
3. Add each new functional dependency to $F^+$.
4. Continue applying rules until no new dependencies appear


## Canonical Cover

For a set of functional dependencies $F$, its canonical cover is the minimal set of functional dependencies equivalent to $F$, having no redundant dependencies or redundant parts of dependencies.
