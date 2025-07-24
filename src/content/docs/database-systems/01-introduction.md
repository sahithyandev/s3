---
title: Introduction to Database Systems
sidebar:
  order: 1
  label: Introduction
slug: database-systems/introduction
prev: false
next: true
---

A database system is a system of interconnected data, a set of programs to access the data, an environment that is both convenient and efficient to use. Very mission critical. Can be small or very large. The data can be stored in memory or disk or both.

### Drawbacks of using fs-based DB

- Cannot explicitly specify relationships   
  The data have to be saved redundantly. And that causes inconsistency.
- Cannot explicitly specify constraints    
  The constraints like primary key, positive value, would have to be enforced manually, inside the DBMS system.
- Limited security features    
  File systems offer file-level, basic access controls but lack the granular security features such as role-based access control, row-level security, or encryption capabilities.
- Scalability challenges   
  File systems don't handle large-scale data well. As data grows, performance degrades rapidly.
- Concurrent access issues   
  Multiple users or processes attempting to read or write the same file can lead to data corruption, inconsistencies, or deadlocks.
- Limited Querying Capabilities
  File systems do not have the robust querying mechanisms found in database management systems. Users must implement their own search algorithms and indexing structures, which are often less efficient and more error-prone.
- Concurrency Issues
  File systems have limited support for concurrent access. Multiple users or processes attempting to read or write the same file can lead to data corruption, inconsistencies, or deadlocks.
- Lack of ACID Properties
  File systems don't inherently provide Atomicity, Consistency, Isolation, and Durability (ACID) properties. Transactions can be interrupted, leading to partial updates and inconsistent states.
- No Data Integrity Constraints
  File systems cannot enforce constraints like primary keys, foreign keys, or check constraints, which are essential for maintaining data integrity.

## Levels of Abstraction

### Physical Level

Describes how a record is stored on the disk. Independent of the hardware.

### Logical Level

Describes the data, relationships and the constraints. Logical structure of the database is called the _schema_.

- Physical schema: The physical structure of the database, including the layout of data on disk.
- Logical schema: The logical structure of the database, including the design of tables, indexes, and constraints.

Actual content of the database, including all the data is called the _instance_.

### View Level

Describes how data is presented to the user.

## Terminology

### Physical Data Independence

The ability to modify the physical schema without affecting the logical structure.

### Transaction

A collection of operations that performs a single logical function in a database application.

### Data Manipulation Language

A language for accessing and manipulating the data in the database. Aka. query language.

2 classes:
- Procedural: user specifies what data is required and how to retrieve it
- Non-procedural or Declarative: user specifies what data is required without the steps

[SQL](/database-systems/sql) is the most used one.

### Data Definition Language

A language for defining the structure of the database.

2 classes:
- Procedural: user specifies what data is required and how to retrieve it
- Non-procedural or Declarative: user specifies what data is required without the steps

SQL is the most used one, declarative.

#### Data dictionary

DDL compiler generates a set of table templates stored in data directory. Contains a lot of metadata.
- Database schema
- Constraints
- Referential integrity
- Authorization

## History

- SQL became the industry standard in the 1980s.
