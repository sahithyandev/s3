---
title: Introduction to Database Systems
sidebar:
  order: 1
  label: Introduction
slug: database-systems/introduction
prev: false
next: true
---

A database is a collection of data.

A database system is an extension of a database, with a set of programs to add, access, and modify the data. Very mission critical. The data can be stored in memory or disk or both.

### Drawbacks of using fs-based DB

- Cannot explicitly specify relationships   
  The data have to be saved redundantly which causes inconsistency.
- Cannot explicitly specify constraints    
  The constraints like primary key, positive value, would have to be enforced manually, inside the DBMS system.
- Limited security features    
  Only file-level basic access controls are available. Granular security features such as role-based access control, row-level security, or encryption capabilities are missing.
- Scalability challenges   
  Doesn't handle large-scale data well. As data grows, performance degrades rapidly.
- Concurrent access issues   
  Multiple users or processes attempting to read or write the same file can lead to data corruption, inconsistencies, or deadlocks.
- Limited Querying Capabilities
  Do not have the robust querying mechanisms found in database management systems. Users must implement their own search algorithms and indexing structures, which are often less efficient and more error-prone.
- Concurrency Issues
  File systems have limited support for concurrent access. Multiple users or processes attempting to read or write the same file can lead to data corruption, inconsistencies, or deadlocks.
- Lack of ACID Properties
  Doesn't inherently provide Atomicity, Consistency, Isolation, and Durability (ACID) properties. Transactions can be interrupted, leading to partial updates and inconsistent states.
  
A DBMS solves all the above problems.

## Levels of Abstraction

### Physical Level

Describes how data is stored on the disk. Independent of the hardware.

The layout of the data on disk is called physical schema.

### Logical Level

Describes the data, relationships and the constraints. The logical structure of the database, including the design of tables, indexes, and constraints is called _schema_.

Actual content of the database, including all the data is called the _instance_.

### View Level

Describes how data is presented to the user.

## Terminology

### Instance

The actual content of the database at a particular point in time, including all the data.

### Physical Data Independence

The ability to modify the physical schema without affecting the logical structure.

### Transaction

A collection of operations that performs a single logical function in a database application. Used for ACID.

### Data Definition Language

A language to define the structure of the database. 2 types.

#### Procedural

Specifies what data is required and how to retrieve it.

#### Non-procedural

Aka. declarative. Specifies what data is required without the steps.

### Data Manipulation Language

Aka. query language. A language to access and manipulate the data in the database.

2 classes:
- Procedural: user specifies what data is required and how to retrieve it
- Non-procedural or Declarative: user specifies what data is required without the steps

#### Data dictionary

DDL compiler generates a set of table templates stored in data directory. Contains a lot of metadata.
- Database schema
- Constraints
- Referential integrity
- Authorization

## Database Engine

A DBMS contains many core components. 

### Storage manager

Handles the storage and retrieval of data. Ensures efficiency, consistency at the physical level.

### Query processor

Handles execution of queries. Parses, and translates queries to relational algebra. Optimizes the generated expression and creates an execution plan. Execution engine runs the plan and returns the results.

The optimizer uses statistical information about relations and data distribution to calculate the cost. Different versions of the query is evaluated for cost. Lowest-cost-query is returned.

### Transaction manager

Manages transactions. Ensures that the database remains consistent despite system failures and concurrent access.

### Concurrency manager

Manages concurrent access to the database. Ensures that multiple transactions can access the database simultaneously without interfering with each other.
