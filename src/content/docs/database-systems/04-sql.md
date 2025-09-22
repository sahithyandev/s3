---
title: SQL
sidebar:
  order: 4
slug: database-systems/sql
prev: true
next: true
---

A declarative [DML](/database-systems/introduction/#data-modelling-language) and [DDL](/database-systems/introduction/#data-definition-language). Case insensitive.

## Flavors and Versions

SQL has several implementations with varying features and syntax:

- MySQL: Popular open-source database system, currently owned by Oracle
  - Major versions: 5.7, 8.0

- PostgreSQL: Advanced open-source object-relational database
  - Major versions: 11, 12, 13, 14, 15, 16

- Microsoft SQL Server: Microsoft's enterprise database system
  - Major versions: 2016, 2019, 2022

- Oracle Database: Enterprise database system by Oracle Corporation
  - Major versions: 12c, 19c, 21c

- SQLite: Self-contained, serverless database engine
  - Lightweight, embedded solution

- MariaDB: Community-developed fork of MySQL

Each SQL flavor implements the ANSI SQL standard but adds proprietary extensions and features, which can affect portability of SQL code between systems. The syntax and capabilities of functions vary between SQL dialects (e.g., PostgreSQL, SQL Server, Oracle, MySQL).

## Things

A relational database has a set of relations, views, indexes, and constraints.

### Relation

Aka. table. A set of tuples with a fixed number of attributes and a fixed domain for each attribute.

### View

Aka. virtual relation. Any relation that is not of the conceptual model but is made visible to a user.

## Data Types

SQL supports several data types that can be used to define the type of data that can be stored in a database table column:

- Numeric Types:
  - `INTEGER` / `INT`: Whole numbers without decimal places
  - `DECIMAL(p,s)` / `NUMERIC(p,s)`: Exact numeric values with specified precision
  - `FLOAT` / `REAL`: Approximate numeric values
  - `SMALLINT` / `BIGINT`: Smaller and larger integer values

- String Types:
  - `CHAR(n)`: Fixed-length character strings
  - `VARCHAR(n)`: Variable-length character strings
  - `TEXT`: Large variable-length character strings

- Date and Time Types:
  - `DATE`: Stores date values (YYYY-MM-DD)
  - `TIME`: Stores time values (HH:MM:SS)
  - `TIMESTAMP`: Stores date and time values
  - `DATETIME`: Similar to TIMESTAMP

- Boolean Type:
  - `BOOLEAN`: Stores TRUE, FALSE, or NULL values

- Binary Types:
  - `BLOB`: Binary Large Object for storing binary data
  - `BINARY` / `VARBINARY`: Fixed and variable-length binary data

## Joins

To combine rows from two or more relations based on related columns.

### INNER JOIN

Returns records that have matching values in both tables:

```sql
SELECT employees.first_name, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id;
```

### LEFT JOIN (LEFT OUTER JOIN)

Returns all records from the left table and matched records from the right table:

```sql
SELECT employees.first_name, departments.department_name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.department_id;
```

### RIGHT JOIN (RIGHT OUTER JOIN)

Returns all records from the right table and matched records from the left table:

```sql
SELECT employees.first_name, departments.department_name
FROM employees
RIGHT JOIN departments ON employees.department_id = departments.department_id;
```

### FULL JOIN (FULL OUTER JOIN)

Returns all records when there's a match in either the left or right table:

```sql
SELECT employees.first_name, departments.department_name
FROM employees
FULL JOIN departments ON employees.department_id = departments.department_id;
```

Not supported in all SQL dialects, especially MySQL. In that case, `UNION` should be used to combine the results of `LEFT JOIN` and `RIGHT JOIN` to achieve the same result.

### CROSS JOIN

Returns the Cartesian product of two tables:

```sql
SELECT employees.first_name, departments.department_name
FROM employees
CROSS JOIN departments;
```

## SQL Queries

Can be nested, but have performance implications.

## Prepared statements

Allow us to define a query template with placeholders for parameters, which can then be executed multiple times with different values. They are supported in most advanced SQL systems and are especially important for performance, security, and maintainability in applications that interact with databases.

### How Prepared Statements Work

1. Preparation: The SQL statement is sent to the database with parameter placeholders (often represented by `?` or named parameters like `:param`). The database parses, compiles, and optimizes the query, creating an execution plan.
2. Execution: The application supplies actual parameter values and executes the prepared statement. The database reuses the precompiled plan, substituting the parameters as needed.

### Benefits

- Performance: Parsing and planning are done only once, so repeated executions are faster, especially for complex queries or in high-throughput environments.
- Security: By separating code from data, prepared statements prevent SQL injection attacks, as parameter values are never interpreted as part of the SQL command.
- Maintainability: Code is cleaner and easier to manage, especially when the same query is executed multiple times with different parameters.

### Example

In SQL (syntax varies by system):

```sql
-- Prepare the statement (syntax for PostgreSQL)
PREPARE get_employee (int) AS
  SELECT first_name, last_name FROM employees WHERE employee_id = $1;

-- Execute the prepared statement with a parameter
EXECUTE get_employee(101);
```

In application code (e.g., Python with `psycopg2`):

```python
cursor.execute("PREPARE get_employee (int) AS SELECT first_name, last_name FROM employees WHERE employee_id = $1;")
cursor.execute("EXECUTE get_employee(%s);", (101,))
```

Or, using parameterized queries (common in most libraries):

```python
cursor.execute("SELECT first_name, last_name FROM employees WHERE employee_id = %s;", (101,))
```

### Notes

- The exact syntax for prepared statements varies between SQL dialects and client libraries.
- Some systems (like MySQL and PostgreSQL) support server-side prepared statements, while others may only support client-side emulation.
- Prepared statements are especially useful in web applications and APIs where user input is involved.

## Embedded SQL

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
