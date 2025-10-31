---
title: First Order Logic
sidebar:
  order: 15
slug: artificial-intelligence/first-order-logic
prev: true
next: true
---

First-Order Logic extends propositional logic by introducing **objects, relations, and quantifiers** that represent real-world entities and their relationships.
It allows agents to reason about individuals and their properties instead of treating statements as atomic facts.

---

## 1. Objects, Relations, and Functions

### Concept

FOL resembles natural language — it deals with **objects** and **relations** among them.

| Element        | Example                 | Description                          |
| -------------- | ----------------------- | ------------------------------------ |
| Object         | John, Red, Ball         | Entity in the world                  |
| Unary Relation | Round(Ball)             | Property of a single object          |
| n-ary Relation | Married(John, Mary)     | Relation between multiple objects    |
| Function       | Father(Mike), Plus(2,3) | Maps input objects to another object |

A function is a **special relation** that always returns one value (total function).

---

## 2. Ontological Commitment

### Meaning

Refers to **what the logic assumes about the world**.

| Logic              | Assumption                                     |
| ------------------ | ---------------------------------------------- |
| Propositional      | Facts are true or false                        |
| First-Order        | Objects exist, and relations hold between them |
| Temporal Logic     | Facts depend on time                           |
| Higher-Order Logic | Relations and functions are also objects       |

Higher-order logic is more expressive but more complex to reason with.

---

## 3. Epistemological Commitment

Describes **what kinds of knowledge states** a logic system can express about facts — such as knowing, believing, or being uncertain about a statement.

---

## 4. Models in FOL

### Definition

A **model** gives meaning to symbols.

* **Domain:** the set of all objects (domain elements).
* **Relations:** sets of tuples that describe connections among objects.
* **Functions:** mappings between domain elements; must be total.

```
Domain: {John, Mary}
Relation: Married = {(John, Mary), (Mary, John)}
Function: Father(William) = Charles
```

---

## 5. Symbols in FOL

| Symbol Type       | Example         | Purpose                 |
| ----------------- | --------------- | ----------------------- |
| Constants         | Richard, John   | Specific objects        |
| Predicate symbols | Brother, OnHead | Relations               |
| Function symbols  | LeftLeg         | Maps objects to objects |
| Variables         | x, y, a         | Placeholders            |
| Connectives       | ∧, ∨, ⇒, ⇔      | Logical structure       |
| Quantifiers       | ∀, ∃            | Scope over variables    |

Arity (number of arguments) must be defined for each predicate or function.

---

## 6. Interpretations

Interpretations define **how symbols refer to real-world entities**:

* Constants → specific objects
  (Richard → Richard the Lionheart)
* Predicates → relations
  (Brother → brotherhood relation)
* Functions → mappings
  (LeftLeg → left leg function)

Truth is evaluated across all possible models and interpretations.

---

## 7. Syntax of FOL

### Basic Elements

```
Constants: Dan, UoM, 5
Predicates: Brother, >
Functions: Sqrt, Length
Variables: x, y
Connectives: ⇒, ∧, ∨, ⇔
Equality: =
Quantifiers: ∀, ∃
```

### Term

Expression that refers to an object:

```
John
LeftLeg(John)
LeftLeg(x)
```

### Atomic Sentence

```
Predicate(Term, …)
Term = Term
```

### Complex Sentence

Formed using connectives or quantifiers:

```
Brother(Richard, John) ∧ King(John)
¬King(Richard) ⇒ King(John)
∀x At(x,UoM) ⇒ Smart(x)
```

---

## 8. Quantifiers

Quantifiers allow statements about groups of objects instead of individuals.

| Type        | Symbol | Meaning        |
| ----------- | ------ | -------------- |
| Universal   | ∀      | “For all”      |
| Existential | ∃      | “There exists” |

---

### Universal Quantification

Form:

```
∀x P(x)
```

Example:
Everyone at UoM is smart.

```
∀x At(x,UoM) ⇒ Smart(x)
```

True if *P(x)* is true for every object in the model.
Equivalent to conjunction of instances:

```
At(Dan,UoM)⇒Smart(Dan) ∧ At(Richard,UoM)⇒Smart(Richard)
```

---

### Existential Quantification

Form:

```
∃x P(x)
```

Example:
Someone at UoM is smart.

```
∃x At(x,UoM) ∧ Smart(x)
```

True if *P(x)* is true for **at least one** object.
Equivalent to disjunction of instances:

```
At(Dan,UoM)∧Smart(Dan) ∨ At(Richard,UoM)∧Smart(Richard)
```

---

## 9. Properties of Quantifiers

| Property                                | Example                   | Meaning         |
| --------------------------------------- | ------------------------- | --------------- |
| Order of same quantifier doesn’t matter | ∀x∀y ≡ ∀y∀x ; ∃x∃y ≡ ∃y∃x | interchangeable |
| Mixed order changes meaning             | ∃x∀y ≠ ∀y∃x               | changes scope   |

### Example

```
∃x∀y Loves(x,y)  → someone loves everyone
∀y∃x Loves(x,y)  → everyone is loved by someone
```

### Quantifier Duality

```
∀x Likes(x,IceCream) ≡ ¬∃x ¬Likes(x,IceCream)
∃x Likes(x,Broccoli) ≡ ¬∀x ¬Likes(x,Broccoli)
```

---

## 10. De Morgan’s Rules for Quantifiers

* Universal quantifier behaves like a **conjunction**
* Existential quantifier behaves like a **disjunction**

---

## 11. Equality

### Definition

`term1 = term2` is true if both refer to the **same object**.

Example:

```
∃x,y Brother(x,Richard) ∧ Brother(y,Richard) ∧ ¬(x=y)
```

means there are two different brothers of Richard.

---

## 12. Using First-Order Logic in Knowledge Bases

### Assertions (TELL)

Used to add facts:

```
TELL(KB, King(John))
TELL(KB, ∀x King(x) ⇒ Person(x))
```

### Queries (ASK)

Used to retrieve or infer facts:

```
ASK(KB, King(John))
ASK(KB, ∃x Person(x))
```

Answers can be truth values or variable bindings.

---

## 13. Example: Royal Kinship Domain

### Given Facts

* Elizabeth is the mother of Charles
* Charles is the father of William
* William is the husband of Kate
* Grandmother = mother of one’s parent

### Predicates

* Unary: Male, Female
* Binary: Parent, Child, Spouse, Husband, Wife, Sibling, etc.
* Functions: Mother, Father

---

## 14. Sample Axioms

| Description              | Formula                                  |
| ------------------------ | ---------------------------------------- |
| Mother is female parent  | ∀m,c Mother(c)=m ⇔ Female(m)∧Parent(m,c) |
| Husband is male spouse   | ∀w,h Husband(h,w) ⇔ Male(h)∧Spouse(h,w)  |
| Male and female disjoint | ∀x Male(x) ⇔ ¬Female(x)                  |
| Parent–Child inverse     | ∀p,c Parent(p,c) ⇔ Child(c,p)            |

### Facts and Theorems

```
Male(Harry)
∀x,y Sibling(x,y) ⇔ ¬(x=y) ∧ ∃p Parent(p,x)∧Parent(p,y)
```

Sibling symmetry:

```
Sibling(x,y) ⇔ Sibling(y,x)
```

---

## 15. Summary

| Concept              | Description                                              |
| -------------------- | -------------------------------------------------------- |
| FOL vs Propositional | FOL introduces objects, relations, quantifiers           |
| Quantifiers          | ∀ (for all), ∃ (there exists)                            |
| Syntax               | Constants, variables, predicates, functions, connectives |
| Semantics            | Defined by models and interpretations                    |
| Application          | Knowledge bases, inference, rule definition              |

---

### Key Insight

First-Order Logic bridges natural language and symbolic reasoning.
It forms the foundation for **knowledge representation, inference engines, and AI reasoning systems**.
