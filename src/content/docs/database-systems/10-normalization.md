---
title: Normalization
sidebar:
  order: 10
slug: database-systems/normalization
prev: true
next: true
---

A systematic approach to decide whether a particular relation is in good form. And it is also used to decompose tables to eliminate data redundancy and undesirable characteristics like Insertion, Update and Deletion anomalies. The process of normalization involves organizing data to minimize redundancy by dividing larger tables into smaller ones and defining relationships between them.

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

#### First Normal Form (1NF)

A domain is said to be atomic if its elements are considered to be indivisible.

A relation schema $R$ is in 1NF if the domains of all attributes of $R$ are atomic. Non-atomic values cause data redundancy. All relations are assumed to be in 1NF.
