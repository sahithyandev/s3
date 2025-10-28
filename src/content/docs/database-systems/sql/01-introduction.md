---
title: Introduction to SQL
sidebar:
  order: 1
  label: Introduction
slug: database-systems/sql/introduction
prev: false
next: true
---

A declarative [DML](/database-systems/introduction/#data-modelling-language) and [DDL](/database-systems/introduction/#data-definition-language). Case insensitive. Became the industry standard in the 1980s.

Query planner decides on the most efficient way to execute a query.

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

Each SQL flavor implements the ANSI SQL standard but adds proprietary extensions and features, which can affect portability of SQL code between systems. The syntax and capabilities of functions vary between SQL dialects.

## Data Types

SQL supports several built-in data types as well as user-defined data types.

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
  
Users can define additional data types using [`CREATE TYPE`](/database-systesm/sql-commands#create-type).

### Domains

Allow defining custom data types with constraints. They are useful for enforcing business rules and improving code readability.

## Table Modifications

### ADD COLUMN vs DROP COLUMN

Most early database systems allowed adding new columns but not dropping existing ones.  

Adding a column is a non-destructive change. The DBMS appends metadata for the new column, which can be quickly done. And treats missing values in old rows as `NULL` or default. Backward compatibility is maintained when a new column is added.

Dropping a column is destructive. It requires rewriting every record to remove stored bytes and update file formats. The table must be locked during this process. Backward compatibility will be lost if another database object depends on the dropped column. This introduces potential data loss, or errors.

However modern database systems support dropping columns. They do this safely by combining metadata indirection, lazy cleanup, and background table rewriting. These mechanisms make column removal efficient and non-destructive.

#### Metadata Indirection

The column would be marked as "deleted" in metadata. Queries and new writes simply ignore the dropped column.

#### Lazy Cleanup

Instead of removing the data instantly, the process is deferred. Avoids long table locks. Preserves transactional safety.

#### Background Table Rewriting

Modern engines maintain system catalogs that track all dependencies. To ensure a consistent schema, when dropping a column:
- The DBMS checks for dependent objects.
- Either rejects the operation or performs a cascade delete of references.  

## Joins

To combine columns from more than 1 relations based on related columns.

- `INNER JOIN`: Returns records that have matching values in both tables.
- `LEFT (OUTER) JOIN`: Returns all records from the left table and matched records from the right table.
- `RIGHT (OUTER) JOIN`: Returns all records from the right table and matched records from the left table.
- `FULL (OUTER) JOIN`: Returns all records when there's a match in either the left or right table.
- `CROSS JOIN`: Returns the Cartesian product of two tables.
- `NATURAL JOIN`: Returns the intersection of two tables based on common column names. Not recommended due to ambiguity and potential performance issues.

## SQL Queries

Can be nested, but have performance implications.

## Nested Subquery

A nested subquery is a query inside another query. Allows one SQL statement to use the result of another as input, enabling complex filtering and comparison logic. Cannot use outer row values.

A subquery (inner query) is enclosed in parentheses and used within:
- `WHERE`
- `FROM`
- `HAVING`
- `SELECT`

Subquery executes first. Its result is passed to the outer query. The outer query then applies filters or joins based on that result.

### Single-Row Subquery

Returns one value. Used with comparison operators.

```sql
SELECT name
FROM student
WHERE total_credits = (
    SELECT MAX(total_credits)
    FROM student
);
```

### Multiple-Row Subquery

Returns multiple values. Used with operators like `IN`, `ANY`, `ALL`.

```sql
SELECT name
FROM student
WHERE dept_name IN (
    SELECT dept_name
    FROM department
    WHERE building = 'Watson'
);
```

### Multiple-Column Subquery

Returns multiple columns per row. Compared using tuple notation.

```sql
SELECT name
FROM instructor
WHERE (dept_name, salary) IN (
    SELECT dept_name, salary
    FROM instructor
    WHERE salary > 90000
);
```

### Nested in FROM Clause

Subquery acts as a temporary table (derived relation).

```sql
SELECT dept_name, avg_sal
FROM (
    SELECT dept_name, AVG(salary) AS avg_sal
    FROM instructor
    GROUP BY dept_name
) AS dept_avg
WHERE avg_sal > 80000;
```

## Correlated Subquery

A subquery which is dependent on outer row values. Runs once for each row. Has performance pitfalls. Can often be replaced by JOIN for efficiency.
