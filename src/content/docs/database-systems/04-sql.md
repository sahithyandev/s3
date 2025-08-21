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

Each SQL flavor implements the ANSI SQL standard but adds proprietary extensions and features, which can affect portability of SQL code between systems.

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

## Views

A named, virtual table defined by a SQL query. It does not store data itself, but presents data from one or more base tables (or other views) according to its definition. Views encapsulate complex queries, provide abstraction, and can restrict access to sensitive data.

### View Dependencies

Views depend on the underlying base tables (and possibly other views) referenced in their definition. If a base table or dependent view is altered or dropped, the view may become invalid or fail to resolve. Most SQL systems track these dependencies and may prevent destructive changes to base tables if dependent views exist, or mark views as invalid until redefined.

### Processing Algorithms

When a view is referenced in a query, the database must decide how to process it. There are two main algorithms:

- View Expansion (Query Rewriting): The view's definition is substituted into the referencing query, and the resulting query is optimized and executed as if the view did not exist. This is the default for most systems and is called a _virtual view_.
- Materialized View: The view's result set is computed and stored physically, like a table. Subsequent queries read from this stored data, improving performance for expensive aggregations or joins. Materialized views require explicit support and are not standard SQL views.

### Refresh Mechanisms

- Virtual Views: Always reflect the current state of the underlying tables. No refresh is needed; every query recomputes the view.
- Materialized Views: Must be refreshed to stay up-to-date. Refresh can be:
  - Immediate (On Commit): The view is updated whenever the base tables change.
  - Manual (On Demand): The view is refreshed only when explicitly requested.
  - Scheduled: The view is refreshed at regular intervals.

The choice affects consistency and performance. Some systems support _incremental refresh_, updating only changed rows, while others recompute the entire view.

### Materialization

Refers to storing the result of a view physically. Standard SQL views are not materialized; they are recomputed on each access. Materialized views, supported in systems like Oracle, PostgreSQL, and SQL Server, store the result set and can be indexed for fast access. Materialization trades storage and refresh overhead for query performance.

### Summary Table

| Feature           | Standard View   | Materialized View        |
| ----------------- | --------------- | ------------------------ |
| Storage           | None (virtual)  | Physical (table-like)    |
| Data Freshness    | Always current  | May be stale             |
| Performance       | Query-time cost | Fast reads, slow refresh |
| Dependencies      | On base tables  | On base tables           |
| Refresh Mechanism | Not needed      | Manual/auto/scheduled    |
