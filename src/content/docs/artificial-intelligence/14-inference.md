---
title: Inference
sidebar:
  order: 14
slug: artificial-intelligence/inference
prev: true
next: true
---


The process of deriving new knowledge from existing knowledge. The core of logical agents. Can be computationally expensive.

If $\alpha$ can be inferred from KB using a sound inference algorithm, it is denoted as: $ $
```math
\text{KB} ⊢ \alpha
```

### Sound

When an inference algorithm never derives false conclusions.

### Complete

When an inference algorithm can derive all valid conclusions.

### Monotonicity

When an inference algorithm's results do not invalidate previously entailed conclusions.

## Rules

Logical transformation rules used for inferencing.

- Modus Ponens:   
  From $\alpha ⇒ β$ and $\alpha$, infer $β$.
- And-Elimination:   
  From $(α ∧ β)$, infer $α$ (or $β$).
- Biconditional Elimination:   
  From $(α ⇔ β)$, infer $(α ⇒ β)$ and $(β ⇒ α)$.

## Techniques

### Model Checking

Enumerate all models to verify whether $\alpha$ is true in all models that satisfy KB.

### Theorem Proving

Applies inference rules directly to derive proofs instead of checking every model.

Scales better for large knowledge bases. Produces symbolic proofs instead of exhaustive enumeration.

#### Proof by Resolution

A rule-based inference method suitable for automated theorem proving. Allows fully mechanical proofs and is widely used in logic-based AI systems.

It applies to sentences in Conjunctive Normal Form (CNF). All logical sentences are simplified to a conjunction of disjunctions of literals to achieve CNF.

Resolution rules combines complementary literals to simplify until either no other resolution is possible.
