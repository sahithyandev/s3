---
title: Knowledge Representation
sidebar:
  order: 14
slug: artificial-intelligence/knowledge-representation
prev: true
next: true
---


Knowledge Representation (KR) defines **how information about the world is stored and structured** inside an intelligent agent’s knowledge base. It focuses on *what* knowledge should be represented, not just *how*.

---

## 1. Ontological Engineering

### Introduction

Ontological engineering defines the **concepts and relationships** that form an agent’s view of the world.
It answers two questions:

* Can we represent everything in the world?
* Is it necessary to represent everything?

In practice, agents use **general ontologies** for broad concepts (e.g., PhysicalObject) and fill in specific details later.

### Definition

*Ontology* (in philosophy): study of being, existence, and relationships among entities.
In AI, ontology provides structured categories (concepts, properties, relations).

### Example

* Upper ontology: general entities (e.g., Object, Event, Time).
* Domain ontology: specific entities (e.g., Car, Engine, DriveEvent).

---

## 2. Categories and Objects

### Concept

Objects are grouped into **categories** for reasoning and prediction.
Agents use categories to:

* Infer unseen object properties.
* Predict behavior from category membership.

### Representation in FOL

```
Basketball(b)
Member(b, Basketballs)
```

### Inheritance

```
Food → Fruit → Apple
```

Subclass relations form a **taxonomy** — a hierarchy for classification.

### FOL Rules

* Membership: BB9 ∈ Basketballs
* Subclass: Basketballs ⊂ Balls
* Property inheritance:
  (x ∈ Basketballs) ⇒ Spherical(x)

### Recognition Rule

```
Orange(x) ∧ Round(x) ∧ Diameter(x)=9.5 ∧ x∈Balls ⇒ x∈Basketballs
```

### Relations

* **Disjoint:** no shared members
  Disjoint({Animals, Vegetables})
* **Exhaustive decomposition:** must belong to one
  ExhaustiveDecomposition({Americans, Canadians, Mexicans}, NorthAmericans)
* **Partition:** both disjoint and exhaustive
  Partition({Males, Females}, Animals)

---

## 3. Physical Composition

### Definition

Objects can be **parts of other objects** using the relation:

```
PartOf(Bucharest, Romania)
PartOf(Romania, EasternEurope)
```

### Properties

* **Transitive:** PartOf(x, y) ∧ PartOf(y, z) ⇒ PartOf(x, z)
* **Reflexive:** PartOf(x, x)

### Composite Objects

Defined by their structure:

```
Biped(a) ⇒ ∃l1, l2, b [Leg(l1) ∧ Leg(l2) ∧ Body(b) ∧
PartOf(l1,a) ∧ PartOf(l2,a) ∧ PartOf(b,a) ∧ l1≠l2]
```

---

## 4. Measurements

### Concept

Objects can have measurable properties — height, mass, cost, etc.

### Representation

```
Length(L1)=Inches(1.5)=Centimeters(3.81)
```

### Quantitative vs Qualitative

* Quantitative measures: numeric (length, weight).
* Qualitative measures: subjective (beauty, spiciness).

Objects can be **ordered** by such measures even when non-numeric.

---

## 5. Substances and Objects

### Distinction

* **Substance (mass noun):** continuous, divisible (e.g., butter).
* **Object (count noun):** discrete entity (e.g., cat).

### Rule

```
b∈Butter ∧ PartOf(p,b) ⇒ p∈Butter
```

### Properties

* **Intrinsic:** color, density (retain under division).
* **Extrinsic:** weight, shape (lost when divided).

### Hierarchy

Stuff → Substance → Object → Thing

---

## 6. Time and Event Calculus

### Basic Terms

* **Action:** logical term representing activity (e.g., Turn(Right))
* **Fluent:** predicate/function varying over time
* **Atemporal predicates:** permanent truths (e.g., Gold(G1))

### Event Calculus

Used to model actions over **time intervals**.

#### Predicates

| Predicate           | Meaning                        |
| ------------------- | ------------------------------ |
| T(f, t)             | Fluent f true at time t        |
| Happens(e, i)       | Event e occurs over interval i |
| Initiates(e, f, t)  | e starts f at time t           |
| Terminates(e, f, t) | e stops f at time t            |
| Clipped(f, i)       | f ceases to hold within i      |
| Restored(f, i)      | f becomes true within i        |

#### Example

```
T(At(Shiva, Colombo), t)
E1 ∈ Flyings(Shiva, Colombo, Jaffna)
```

#### Axioms

1. Happens(e, (t1,t2)) ∧ Initiates(e, f, t1) ∧ ¬Clipped(f, (t1,t)) ∧ t1<t ⇒ T(f, t)
2. Happens(e, (t1,t2)) ∧ Terminates(e, f, t1) ∧ ¬Restored(f, (t1,t)) ∧ t1<t ⇒ ¬T(f, t)

---

## 7. Processes

Continuous (liquid) events where **any subinterval** is also valid:

```
(e ∈ Processes) ∧ Happens(e, (t1,t4)) ∧ (t1<t2<t3<t4) ⇒ Happens(e, (t2,t3))
```

Example: boiling, raining, breathing.

---

## 8. Intervals

### Types

* **Moments:** zero duration.
* **Extended intervals:** nonzero duration.

  ```
  i∈Moments ⇔ Duration(i)=Seconds(0)
  ```

### Functions

* Time(moment)
* Begin(interval)
* End(interval)
* Duration = End − Begin

### Allen’s Relations

| Relation      | Definition                        |
| ------------- | --------------------------------- |
| Meet(i,j)     | End(i)=Begin(j)                   |
| Before(i,j)   | End(i)<Begin(j)                   |
| During(i,j)   | Begin(j)<Begin(i)<End(i)<End(j)   |
| Overlap(i,j)  | Begin(i)<Begin(j)<End(i)<End(j)   |
| Begins(i,j)   | Begin(i)=Begin(j)                 |
| Finishes(i,j) | End(i)=End(j)                     |
| Equals(i,j)   | Begin(i)=Begin(j) ∧ End(i)=End(j) |

---

## 9. Mental Events and Mental Objects

### Concept

Agents can **reason about their own and others’ beliefs**.
Knowledge bases now include **mental objects** (beliefs, intentions, goals).

### Propositional Attitudes

Relations expressing mental states:

```
Believes(Lois, Flies(Superman))
Knows(Lois, CanFly(Superman))
```

### Referential Opacity

Substitution inside belief statements may fail:

```
(Superman = Clark) ∧ Knows(Lois, CanFly(Superman))
≠ Knows(Lois, CanFly(Clark))
```

Transparent examples:

```
2 + 2 = 4
4 < 5 ⇒ 2 + 2 < 5
```

---

## Summary

| Concept               | Description                                   |
| --------------------- | --------------------------------------------- |
| Ontology              | Defines categories and relations of existence |
| Categories & Objects  | Organize entities for reasoning               |
| Physical Composition  | Models part–whole relationships               |
| Measurements          | Quantify properties                           |
| Substances            | Continuous matter (mass nouns)                |
| Time & Event Calculus | Logical model of temporal reasoning           |
| Processes             | Continuous events                             |
| Intervals             | Temporal relations between events             |
| Mental Objects        | Represent beliefs and intentions              |

---

### Key Insight

Knowledge representation moves from **syntactic storage (symbols)** to **semantic understanding (relations, actions, and beliefs)**.
An intelligent agent’s reasoning power depends heavily on the richness and consistency of its ontology.
