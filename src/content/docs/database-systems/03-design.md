---
title: Design
sidebar:
  order: 3
slug: database-systems/design
prev: true
next: true
---

Process of designing a database's structure.

### Logical design
Deciding on the database schema. Affected by business decisions and computer science considerations.

### Physical design

Deciding on the physical layout of the database.

## Design approaches

[Entity-Relationship Model](/database-systems/data-models/#entity-relationship-model) is used widely.

### Normalization theory

Normalization is a systematic approach to decomposing tables to eliminate data redundancy and undesirable characteristics like Insertion, Update and Deletion anomalies. The process of normalization involves organizing data to minimize redundancy by dividing larger tables into smaller ones and defining relationships between them.

The theory was introduced by Edgar F. Codd in 1970 and involves several normal forms:

- First Normal Form (1NF): Eliminates repeating groups by ensuring each column contains atomic values
- Second Normal Form (2NF): Removes partial dependencies on a composite key
- Third Normal Form (3NF): Eliminates transitive dependencies
- Boyce-Codd Normal Form (BCNF): A stronger version of 3NF
- Fourth Normal Form (4NF): Deals with multi-valued dependencies
- Fifth Normal Form (5NF): Addresses join dependencies

Properly normalized databases reduce data redundancy, improve data integrity, and optimize database performance for specific operations.

:::note

Edgar F. Codd is called "the father of relational databases".

:::

## Database Engine

### Storage manager

A module that provides the interface between the low-level data stored in the database, and queries submitted to the system. Does efficient storage and retrieval of data.

### Query processor

A module that manages execution of queries. Parses, translates, and optimizes queries. Cost of different versions of the algoriths are calculated and lowest-cost-query is run by the engine.

The cost calculation depends critically on statistical information about relations, data distribution. 

### Transaction manager

Manages transactions. Ensures that the database remains consistent despite system failures and concurrent access.

### Concurrency manager

Manages concurrent access to the database. Ensures that multiple transactions can access the database simultaneously without interfering with each other.

## Architecture

Architecture of a database system is influenced by the underlying computer system.

Examples:
- Centralized
- Client-server
- Parallel
- Distributed
