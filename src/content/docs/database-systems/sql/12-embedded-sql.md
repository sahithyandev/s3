---
title: Embedded SQL
sidebar:
  order: 12
slug: database-systems/sql/embedded-sql
prev: true
next: false
---

Refers to the practice of incorporating SQL statements directly within the code of a host programming language. Allows applications to interact with a relational database by executing SQL commands as part of the program's logic.

Special syntax or preprocessor directives are used to distinguish SQL statements from the host language code. Typically, the embedded SQL statements are parsed and converted into function calls by a precompiler before the main compilation step of the host language.

Some advantages of embedded SQL include:
- Direct access to database operations from within the application code.
- The ability to use host language variables in SQL statements.
- Improved performance compared to dynamic SQL in some cases, since statements can be precompiled.

Makes code less portable and harder to maintain, as it ties the application closely to a specific database system and its precompiler tools.

Commonly used in enterprise applications where tight integration between application logic and database operations is required.

## External Language Routines

Functions/procedures defined in external languages other than SQL. Can leverage functionality provided by a different language. Can improve performance by offloading computation to a more efficient language.

External language functions/procedures must be defined in the database system. They can be called from within the host language code.

Drawbacks:
- User code is loaded and executed in the address space of the DBMS. Can introduce risks such as corruption and security vulnerabilities.

To address these concerns, certain techniques are employed at the cost of performance. For example, sandboxing techniques can be used to restrict what the external code can do.

Direct execution of external routines within the database system's address space is typically chosen when performance is a higher priority than security.
