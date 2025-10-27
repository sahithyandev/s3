---
title: Functions
sidebar:
  order: 17
slug: database-systems/functions
prev: true
next: true
---

A stored database object. Encapsulates a sequence of SQL statements and returns a single value (either a scalar value or, in some systems, a table). Used to perform calculations, manipulate data, or encapsulate reusable logic that can be invoked from within SQL queries. Idempotent. Cannot be called 

### Characteristics of SQL Functions

- Return Value: Every function returns a value. This can be a simple data type (like `INTEGER`, `VARCHAR`, or `DATE`) or, in some systems, a table (table-valued function).
- Usage: Functions can be called anywhere an expression of their return type is allowed, such as in `SELECT` lists, `WHERE` clauses, `JOIN` conditions, or even inside other functions.
- Parameters: Functions accept input parameters, which are used within the function body to perform operations.
- Side Effects: By convention and in many SQL dialects, functions are expected to be free of side effects (i.e., they do not modify database state). Some systems enforce this, while others allow limited modifications.
- Determinism: Functions are often deterministic (given the same input, they return the same output), which allows the query optimizer to make certain assumptions.

### Types of Functions

- Scalar Functions: Return a single value
- Table-Valued Functions: Return a table that can be used like a regular table in queries (supported in SQL Server, PostgreSQL, and others).
- Built-in Functions: For string manipulation (`UPPER`, `LOWER`, `CONCAT`), math (`ABS`, `ROUND`), date/time (`NOW`, `DATEADD`), and more.
- User-Defined Functions: Created by DB users to encapsulate custom logic.

### Examples

Scalar functions in PostgreSQL:

```sql
CREATE FUNCTION get_full_name(first_name TEXT, last_name TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN first_name || ' ' || last_name;
END;
$$ LANGUAGE plpgsql;
```

Usage:

```sql
SELECT get_full_name('Alice', 'Smith'); -- Returns 'Alice Smith'
```

Or in a query:

```sql
SELECT get_full_name(first_name, last_name) AS full_name
FROM employees;
```

Table-Valued Function (SQL Server):

```sql
CREATE FUNCTION get_employees_by_department(@dept_id INT)
RETURNS TABLE
AS
RETURN (
  SELECT employee_id, first_name, last_name
  FROM employees
  WHERE department_id = @dept_id
);
```

Usage:

```sql
SELECT * FROM get_employees_by_department(10);
```


### Notes

- Some systems restrict what can be done inside a function (e.g., no transaction control or data modification).
- Functions help promote code reuse, abstraction, and maintainability in SQL codebases.
