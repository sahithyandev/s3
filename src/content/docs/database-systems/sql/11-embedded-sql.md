---
title: Embedded Sql
sidebar:
  order: 11
slug: database-systems/sql/embedded-sql
prev: true
next: false
---

Refers to the practice of incorporating SQL statements directly within the code of a host programming language. This allows applications to interact with a relational database by executing SQL commands as part of the program's logic.

When using embedded SQL, special syntax or preprocessor directives are used to distinguish SQL statements from the host language code. Typically, the embedded SQL statements are parsed and converted into function calls by a precompiler before the main compilation step of the host language.

For example, in C, embedded SQL statements are often enclosed between EXEC SQL and a semicolon:

```c
EXEC SQL SELECT first_name, last_name INTO :fname, :lname FROM employees WHERE employee_id = :emp_id;
```

Here host variables are prefixed with a colon.

The typical workflow for embedded SQL involves:
- Writing source code with embedded SQL statements.
- Running a precompiler that processes the embedded SQL and generates code in the host language, replacing SQL statements with appropriate function calls.
- Compiling the resulting code with the standard compiler for the host language.

Embedded SQL is commonly used in enterprise applications where tight integration between application logic and database operations is required. It provides a way to perform complex database interactions while leveraging the features and performance of compiled languages.

Some advantages of embedded SQL include:
- Direct access to database operations from within the application code.
- The ability to use host language variables in SQL statements.
- Improved performance compared to dynamic SQL in some cases, since statements can be precompiled.

However, embedded SQL can make code less portable and harder to maintain, as it ties the application closely to a specific database system and its precompiler tools.

## External Language Routines

Functions/procedures defined in external languages other than SQL. Can be useful when you need to leverage functionality provided by a different language or when you want to improve performance by offloading computation to a more efficient language.

External language functions/procedures must be defined in the database system. They can be called from within the host language code.

Drawbacks:
- User code is loaded and executed in the address space of the DBMS. Can introduce risks such as corruption and security vulnerabilities.

To address these concerns, some database systems provide alternatives that improve security, sometimes at the cost of performance. For example, sandboxing techniques can be used to restrict what the external code can do, or the routines can be executed in a separate process that does not have direct access to the database system's memory.

Direct execution of external routines within the database system's address space is typically chosen when performance is a higher priority than security.
