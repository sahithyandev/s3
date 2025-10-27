---
title: Design
sidebar:
  order: 6
slug: database-systems/design
prev: true
next: true
---

Process of designing a database's structure.

### Physical design

Deciding on the physical layout of the database.

### Logical design

Deciding on the database schema. Affected by business decisions and computer science considerations.

This module focuses on the logical design.

## Design approaches

[Entity-Relationship Model](/database-systems/data-models/#entity-relationship-model) is used widely.

### Normalization

A technique used to ensure the quality of a database design. Explained briefly in [Normalization](/database-systems/normalization).

## Architecture

Architecture of a database system is influenced by the underlying computer system.

Examples:
- Centralized
- Client-server
- Parallel
- Distributed

## Decomposition

The process of breaking down a large table into smaller, more manageable tables based on functional dependencies. Helps reduce redundancy and improve data integrity. But not always good or required.

### Lossy Decomposition

Occurs when a table is decomposed into smaller tables, but some information is lost in the process. This can happen if the decomposition does not preserve all functional dependencies.

### Lossless Decomposition

Ensures that all functional dependencies are preserved during the decomposition process. This is achieved by ensuring that each functional dependency is preserved in at least one of the resulting tables. Preferred type.
