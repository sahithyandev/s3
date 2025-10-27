---
title: Procedures
sidebar:
  order: 18
slug: database-systems/procedures
prev: true
next: true
---


Aka. stored procedure. A named collection of SQL statements and procedural logic that is stored in the database and can be executed as a unit. Used to encapsulate business logic, automate repetitive tasks, and manage complex operations within the database. Not idempotent.

### Key Characteristics

- Named Database Object: Procedures are created and stored in the database with a unique name, allowing them to be invoked multiple times.
- Parameter Support: Procedures can accept parameters, which can be used to pass data in and out of the procedure. Parameters can be of different types: input (`IN`), output (`OUT`), or both (`INOUT`).
- Multiple Statements: Procedures can contain multiple SQL statements, including queries, data modification commands (`INSERT`, `UPDATE`, `DELETE`), control-of-flow statements (`IF`, `WHILE`, `CASE`), and transaction control.
- Side Effects: Procedures can modify database state, such as updating tables, managing transactions, or calling other procedures.
- No Requirement to Return a Value: Unlike functions, procedures are not required to return a value, though they can return data via output parameters or result sets.

### Syntax Example

Here is a basic example of creating and calling a procedure in SQL (syntax may vary by database system):

```sql
-- Creating a procedure (example in MySQL)
CREATE PROCEDURE AddEmployee(
    IN emp_name VARCHAR(100),
    IN emp_salary DECIMAL(10,2)
)
BEGIN
    INSERT INTO employees (name, salary)
    VALUES (emp_name, emp_salary);
END;

-- Calling the procedure
CALL AddEmployee('Alice Smith', 75000.00);
```

### Use Cases

- Batch Operations: Perform a series of related database operations as a single unit.
- Business Logic: Encapsulate complex business rules and data validation within the database.
- Automation: Automate routine tasks such as data imports, exports, or scheduled maintenance.
- Security: Control access to sensitive operations by granting execute permissions on procedures rather than direct table access.

### Advantages

- Performance: Procedures are parsed and compiled by the database, which can improve execution speed for repeated operations.
- Maintainability: Centralizes logic in the database, making it easier to update and manage.
- Security: Reduces direct access to underlying tables and enforces business rules at the database level.

## Comparison with Functions

Functions and procedures are both programmable database objects that encapsulate reusable logic, but they have important differences and similarities:

- Return Value:
  - Function: Always returns a single value (scalar or table). Can be used in SQL expressions (e.g., in `SELECT`, `WHERE`, or `JOIN` clauses).
  - Procedure: May return zero, one, or multiple values via output parameters or result sets, but is not required to return a value. Cannot be used directly in SQL expressions.

- Usage Context:
  - Function: Can be called from within SQL statements.
  - Procedure: Invoked using the `CALL` or `EXEC` statement; typically used for performing actions, complex logic, or batch operations.

- Side Effects:
  - Function: Generally expected to be free of side effects (no data modification), though some systems allow limited changes.
  - Procedure: Can perform data modifications (INSERT, UPDATE, DELETE), transaction control, and other side effects.

- Parameter Types:
  - Function: Accepts only input parameters.
  - Procedure: Can accept input, output, and input/output parameters.

- Transaction Control:
  - Function: Usually cannot start or commit/rollback transactions.
  - Procedure: Can manage transactions (depending on the SQL dialect).

Similarities:
- Both can encapsulate complex logic and promote code reuse.
- Both support parameters (though with different capabilities).
- Both are stored in the database and can be invoked by applications or other SQL code.

:::
