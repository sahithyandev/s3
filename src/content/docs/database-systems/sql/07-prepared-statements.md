---
title: Prepared Statements
sidebar:
  order: 7
slug: database-systems/sql/prepared-statements
prev: true
next: true
---

Allow us to define a query template with placeholders for parameters, which can then be executed multiple times with different values. They are supported in most advanced SQL systems and are especially important for performance, security, and maintainability in applications that interact with databases.

## How Prepared Statements Work

1. Preparation: The SQL statement is sent to the database with parameter placeholders (often represented by `?` or named parameters like `:param`). The database parses, compiles, and optimizes the query, creating an execution plan.
2. Execution: The application supplies actual parameter values and executes the prepared statement. The database reuses the precompiled plan, substituting the parameters as needed.

## Benefits

- Performance: Parsing and planning are done only once, so repeated executions are faster, especially for complex queries or in high-throughput environments.
- Security: By separating code from data, prepared statements prevent SQL injection attacks, as parameter values are never interpreted as part of the SQL command.
- Maintainability: Code is cleaner and easier to manage, especially when the same query is executed multiple times with different parameters.

## Example

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
