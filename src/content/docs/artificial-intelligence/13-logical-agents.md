---
title: Logical Agents
sidebar:
  order: 13
slug: artificial-intelligence/logical-agents
prev: true
next: true
---


Agents that reason about the world using formal logic. Maintains an internal representation of the world. Infers new facts from known facts. Acts based on reasoning rather than fixed behavior.

## Logic Fundamentals

Logic provides a formal language for representing and reasoning about facts.

### Logical Sentence

A statement that can be either true or false. Used to represent facts, rules, and relationships about the world. Typically expressed in a formal language such as propositional logic or [first-order logic](/artificial-intelligence/first-order-logic). The language is called the knowledge representation language.

#### Tautology

A sentence which is true in all models.

#### Satisfiable

A sentence is satisfiable **if** it's true in at least one model.

### Syntax

Specifies how valid sentences are formed.

### Semantics

Defines how to interpret sentences in different models.

If sentence $s$ is true in model $m$, $m$ is a model of $s$ or $m$ satisfies $s$.

The set of all models that satisfy $s$ is $M(s)$.

### Logical Equivalence

Two sentences $\alpha$ and $\beta$ are logically equivalent **if** they are true in exactly the same models.

```math
\alpha ≡ \beta \iff M(\alpha) = M(\beta)
```

### Logical Entailment

A sentence $\alpha$ entails $\beta$ **iff** $M(\alpha) \subset M(\beta)$.

### Grounding

Connecting logical sentences in KB to real-world facts. If the KB correctly represents the world, then any conclusion drawn by a sound inference process must also be true in the real world.

## Knowledge Base

A collection of logical sentences. Used to infer new knowledge.

The agent interacts with the KB through two operations:

- `TELL(KB, sentence)`: Add new information.
- `ASK(KB, query)`: Retrieve or infer information.

Can be huge, complex, and dynamic.

### Knowledge

Information that helps achieve goals efficiently.

Two knowledge types:

- Procedural   
  “How to” information. Actions or methods.
- Declarative   
  “What is” information. Facts and relationships.

### Ontology Commitment

Refers to what the logic assumes about the world.

Higher-order logic is more ontological but more complex to reason with.

## Epistemological Commitment

Describes what kinds of knowledge states a logic system can express about facts.
