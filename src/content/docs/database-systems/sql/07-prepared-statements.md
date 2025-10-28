---
title: Prepared Statements
sidebar:
  order: 7
slug: database-systems/sql/prepared-statements
prev: true
next: true
---

Allows to define a query template with placeholders for parameters. It can be executed multiple times with different values for the placeholders. Crucial for performance, security, and maintainability in applications.

```sql
PREPARE get_employee (int) AS
  SELECT first_name, last_name FROM employees WHERE employee_id = $1;

EXECUTE get_employee(101);
```

- Performance  
  Parsing and planning are done only once, so repeated executions are faster, especially for complex queries or in high-throughput environments.
- Security  
  By separating code from data, prepared statements prevent SQL injection attacks, as parameter values are never interpreted as part of the SQL command.
- Maintainability  
  Code is cleaner and easier to manage, especially when the same query is executed multiple times with different parameters.

Can either be session-local or server-side persistent.

Session local:
- Stored only in memory
- Exist only for a single connection (until it's open) or explicitly `DEALLOCATE`d
- Does not persist after disconnect, or a database restart
- Not shared with other users or sessions

Server-side persistents are the functions, procedures, transactions, and views. Not technically prepared statements.

### How it works

The SQL statement is sent to the database with parameter placeholders. The placeholders are either `?` or named parameters like `:param`.

The database parses, compiles, and optimizes the query, creating an execution plan.

2. Execution: The application supplies actual parameter values and executes the prepared statement. The database reuses the precompiled plan, substituting the parameters as needed.
