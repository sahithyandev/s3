---
title: Knowledge Representation
sidebar:
  order: 17
slug: artificial-intelligence/knowledge-representation
prev: true
next: true
---

Defines how information about the world is stored and structured in knowledge base. Focuses on what knowledge should be represented and how.

Knowledge representation can either be done using propositional logic or first-order logic. Here, first-order logic is assumed.

## Substance

Substance is continuous, divisible.

Can either be:
- Intrinsic: color, density (retain under division).
- Extrinsic: weight, shape (lost when divided).

## Object

Defines a physical entity with properties and relationships. Discrete entities.

### Physical Composition

Objects can be parts of other objects using the relation:

- Transitive   
  $\text{PartOf}(x, y) \land \text{PartOf}(y, z) \implies \text{PartOf}(x, z)$
- Reflexive   
  $\text{PartOf}(x, x)$

### Composite Objects

Objects made of multiple objects.

## Categories

Group of objects. Grouped for reasoning and prediction.
Agents use categories to:

- Infer unseen object properties.
- Predict behavior from category membership.

Relations between a group and its members:
- Membership   
  $\text{B} \in \text{Basketballs}$
- Subclass   
  $\text{Basketballs} \subset \text{Balls}$
- Property inheritance   
  $(x \in \text{Basketballs}) \implies \text{Spherical}(x)$

Relations between 2 groups:
- Disjoint: no shared members   
  $\text{Disjoint({Animals, Vegetables})}$
- Exhaustive decomposition: must belong to one   
  $\text{ExhaustiveDecomposition({Americans, Canadians, Mexicans}, NorthAmericans)}$
- Partition: both disjoint and exhaustive   
  $\text{Partition({Males, Females}, Animals)}$

## Measurements

Objects can have measurable properties. Objects can be ordered by such measures even when non-numeric.

### Quantitative

Numeric objective measurements such as length, weight.

### Qualitative

Non-numeric subjective measurements such as beauty, spiciness.

## Time and Event Calculus

### Basic Terms

- Action: logical term representing activity (e.g., $\text{Turn}(\text{Right}))$
- Fluent: predicate/function varying over time
- Atemporal predicates: permanent truths (e.g., $\text{Gold}(\text{G1})$)

### Event Calculus

Used to model actions over time intervals.

#### Predicates

| Predicate                    | Meaning                            |
| ---------------------------- | ---------------------------------- |
| $\text{T}(f, t)$             | Fluent $f$ true at time $t$        |
| $\text{Happens}(e, i)$       | Event $e$ occurs over interval $i$ |
| $\text{Initiates}(e, f, t)$  | $e$ starts $f$ at time $t$         |
| $\text{Terminates}(e, f, t)$ | $e$ stops $f$ at time $t$          |
| $\text{Clipped}(f, i)$       | $f$ ceases to hold within $i$      |
| $\text{Restored}(f, i)$      | $f$ becomes true within $i$        |

#### Axioms

1. $\text{Happens}(e, (t_1,t_2)) \land \text{Initiates}(e, f, t_1) \land \text{¬Clipped}(f, (t_1,t)) ∧ t_1<t ⇒ T(f, t)$
2. $\text{Happens}(e, (t_1,t_2)) \land \text{Terminates}(e, f, t_1) ∧ ¬\text{Restored}(f, (t_1,t)) ∧ t_1<t ⇒ ¬T(f, t)$

## Processes

Aka. liquid events. Continuous events where any subinterval is also valid:

Suppose $e \in \text{Processes}$ and $t_n$ denotes a timestamp ($t_n \lt t_{n+1}$):

```math
\text{Happens}(e, (t_1,t_4)) \implies \text{Happens}(e, (t_2,t_3))
```

## Intervals

Zero duration intervals are moments. Non-zero duration intervals are extended intervals.

### Allen’s Relations

| Relation               | Definition                                                      |
| ---------------------- | --------------------------------------------------------------- |
| $\text{Meet}(i,j)$     | $\text{End}(i)=\text{Begin}(j)$                                 |
| $\text{Before}(i,j)$   | $\text{End}(i)<\text{Begin}(j)$                                 |
| $\text{During}(i,j)$   | $\text{Begin}(j)<\text{Begin}(i)<\text{End}(i)<\text{End}(j)$   |
| $\text{Overlap}(i,j)$  | $\text{Begin}(i)<\text{Begin}(j)<\text{End}(i)<\text{End}(j)$   |
| $\text{Begins}(i,j)$   | $\text{Begin}(i)=\text{Begin}(j)$                               |
| $\text{Finishes}(i,j)$ | $\text{End}(i)=\text{End}(j)$                                   |
| $\text{Equals}(i,j)$   | $\text{Begin}(i)=\text{Begin}(j) ∧ \text{End}(i)=\text{End}(j)$ |

## Mental Events and Mental Objects

Agents can reason about their own and others’ beliefs.

Knowledge bases now include mental objects (beliefs, intentions, goals).

Relations expressing mental states:

- $\text{Believes}(\text{Lois}, \text{Flies}(\text{Superman}))$
- $\text{Knows}(\text{Lois}, \text{CanFly}(\text{Superman}))$

### Referential Opacity

Substitution inside belief statements may fail:

```math
(\text{Superman} = \text{Clark}) ∧ \text{Knows}(\text{Lois}, \text{CanFly}(\text{Superman}))
```
```math
\neq \text{Knows}(\text{Lois}, \text{CanFly}(\text{Clark}))
```
