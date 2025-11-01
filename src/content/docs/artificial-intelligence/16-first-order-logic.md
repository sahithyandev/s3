---
title: First Order Logic
sidebar:
  order: 16
slug: artificial-intelligence/first-order-logic
prev: true
next: true
---

Extends propositional logic by introducing objects, relations, and quantifiers. Allows agents to reason about individuals and their properties instead of treating statements as atomic facts.

## Ontological Engineering

Defines the concepts and relationships that form an agent’s view of the world.
It answers two questions:

- Can we represent everything in the world?
- Is it necessary to represent everything?

In practice, agents use general ontologies for broad concepts (e.g., PhysicalObject) and fill in specific details later.

### Ontology

Study of being, existence, and relationships among entities.

In AI, ontology provides structured categories (concepts, properties, relations).

- Upper ontology: general entities (e.g., Object, Event, Time).
- Domain ontology: specific entities (e.g., Car, Engine, DriveEvent).

## Model

A model gives meaning to symbols.

- Relations  
  Sets of tuples that describe connections among objects. Ex. $\text{Married} = {(\text{John}, \text{Mary}), (\text{Mary}, \text{John})}$.

### Objects

An entity in the world. Either constants or variables.

### Domain

Set of all objects.

### Term

Expression that refers to an object.

### Relation

Connects objects to express properties or relationships.

### Function

A special relation. Maps input objects to another single object.

A total function is a function which is defined for all possible inputs.

### Predicate

A relation that returns a boolean value.

### Equality

A special predicate indicating two objects are identical.

### Quantifiers

Allows statements about groups of objects.

- Universal Quantifier ($\forall$): states that a property holds for all objects.
- Existential Quantifier ($\exists$): states that a property holds for at least one object

### Connective

Logical operators to combine statements.
