---
title: ER Diagram
sidebar:
  order: 7
slug: database-systems/er-diagram
prev: true
next: true
---

## Entity

An object or concept used to store information. Represented by a rectangle.

### Attribute

Represents a characteristic or property of an entity. Represented by an oval. Entity and Attribute are connected with a line.

#### Attribute value

A particular value of the attribute.

#### Attribute domain

Set of possible values for an attribute.

#### Simple Attribute

Atomic. Cannot be further divided into smaller parts. Represented by a single-lined ovals.

#### Composite Attribute

When an attribute consists of 2 or more components. Each component may or may not be atomic. Each combination is denoted by an oval. Connected to the composite attribute with a line.

#### Multi-valued Attribute

Can have 1 or more values. When an attribute can have multiple values. Represented by a double-lined oval. Connected to the entity with a line.

#### Derived Attribute

Computed from other attributes. Represented by a dashed-lined oval connected to an entity with a dashed line.

#### Key Attribute

1 or more attribute(s) that can uniquely identify an entity instance. Can be composite.

## Relationship

### Relationship type

A set of associations between entity types.


### Relationship instance

Ordered pair of 2 specific entities that are associated together. Usually drawn in a way that is read from left to right.

### Relationship with attributes

Relationships can have attributes, which cannot be associated with a single entity.

### Recursive Relationship

When the same entity participates in a relationship more than once. Two separate lines are used, each labelled with a different role, to represent the relationship.

### Strong relationship

An entity is called strong if the existence of that attribute does not depend on other entity types.

### Weak relationship

When an entity is not strong.

## Cardinality

Number of instances of an entity type that can be associated with a relationship instance.

### One-to-One

When only one instance of an entity type can be associated with the relationship.

### One-to-Many

When the relationship between X, Y can have multiple instances of X associated with a single instance of Y, but Y is only associated with one instance of X.

### Many-to-Many

When the relationship between X, Y can have multiple instances of X associated with a single instance of Y, and vice versa.
