---
title: Data Models
sidebar:
  order: 2
slug: database-systems/data-models
prev: true
next: true
---

A collection of tools for describing data, relationships, and constraints.

## Examples
### Relational model

Data is organized into tables and relationships.

### Entity-Relationship Model

Data is organized into entities with attributes and relationships. Used only in the design phase. Used to implement relational model.

#### Entity

Represents an object or concept that can be uniquely identified. Described by a set of attributes.

#### Attribute

Represents a characteristic or property of an entity.

#### Relationship

Represents the association between 2 entities.

### Object-Relational Model

Extends relational model by adding object-oriented features. Attributes can be complex.
- User defined types
- Inherited subtypes
- Inherited tables
- Complex attributes such as arrays and sets

### Semistructured Model

Represents data that does not conform to a rigid schema but has some organizational structure. Examples include XML and JSON formats, which use tags or key-value pairs to indicate data hierarchy and relationships.

### Document-oriented model

Data is organized into documents with fields and values.

### Network model

Data is organized into nodes and links, similar to a graph.

### Hierarchical model

Data is organized into parent-child relationships.
