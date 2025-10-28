---
title: Commands
sidebar:
  order: 2
slug: database-systems/sql/commands
prev: true
next: true
---


Conventionally, used in capitalized forms.

SQL commands can be categorized into DDL and DML features. Results of DML commands are relations.

## CREATE

The `CREATE` statement is used to create database objects like tables, views, functions, procedures, user-defined types, and triggers. Feature of DDL.

### CREATE TABLE

```sql
CREATE TABLE employees (
  employee_id INT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  hire_date DATE,
  salary DECIMAL(10,2),
  department_id INT,
  manager_id INT,
  PRIMARY KEY (employee_id),
  FOREIGN KEY (department_id) REFERENCES departments(department_id),
  FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);
```

Integrity constraints can also be defined while creating a table.

### CREATE TYPE

Can either be defined using a built-in type or similar to a relation.

```sql
CREATE TYPE Dollar AS DECIMAL(10,2) FINAL;

CREATE TYPE Address AS (
    street VARCHAR(50),
    city   VARCHAR(30),
    zip    CHAR(6)
) NOT FINAL;
```

If `FINAL` modifier is defined, the type cannot be inherited by other types. `NOT FINAL` is the default.

## DROP

The `DROP` statement removes database objects. Feature of DDL.

```sql
DROP TABLE employees;
```

## ALTER

The `ALTER` statement modifies existing database objects. Feature of DDL.

```sql
ALTER TABLE employees ADD email VARCHAR(100);
```

Columns and integrity constraints can be added, modified, or dropped.

Most DBMS systems did not allow dropping columns, as explained in [the previous section](/database-systems/sql/introduction/#add-column-vs-drop-column).

## SELECT

Retrieves data from one or more tables. Feature of DML.

```sql
SELECT first_name, last_name 
FROM employees 
WHERE salary > 50000
ORDER BY last_name;
```

"*" will fetch all the columns. But have performance impacts on large tables. Post-processing can be done on the selected fields as well, although generally not recommended.

### DISTINCT

A modifier used in SELECT. Retrieves rows with unique values only. Applies to all columns combined.

## AS

Allows renaming a relation or a attribute name. Optional. Can be used with `SELECT`, `FROM`, `JOIN`, and `ORDER BY` clauses.

The aliased names cannot be used in WHERE, GROUP BY, HAVING clauses, per the standard.

## ORDER BY

```sql
ORDER BY attribute_name [ASC or DESC]
```

Specifies the order in which to sort the result set. Feature of DML. If neither `ASC` nor `DESC` is specified, the order is ascending.

If the value is `NULL`, by default, they can either show up at first or last (implementation-dependent). This behavior can be controlled using the `NULLS FIRST` or `NULLS LAST` modifiers.

```sql
ORDER BY column NULLS FIRST
```

When 2 values are equal, the SQL standard specifies that their relative order is undefined, and it's implementation-dependent.

Can have multiple attributes. When multiple attributes are specified, the sorting is done in the order of the attributes.

If ORDER BY is not specified, the order of the result set is undefined, and random.

## LIMIT

Specifies the maximum number of rows to return. Feature of DML. No limits by default. If used without `ORDER BY`, the result is non-deterministic. 

## FROM

Specifies the table(s) from which to retrieve data. Feature of DML.

```sql
SELECT *
FROM employees
```

If multiple tables are specified, considers the cartesian product of the tables.

## INSERT

The `INSERT` statement adds new records. Feature of DML.

```sql
INSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)
VALUES (1, 'John', 'Doe', '2023-01-15', 65000);
```

## UPDATE

The `UPDATE` statement modifies existing records. Feature of DML.

```sql
UPDATE employees
SET salary = 70000
WHERE employee_id = 1;
```

## DELETE

Removes 0 or more records. Feature of DML.

```sql
DELETE FROM employees
WHERE employee_id = 1;
```

If `WHERE` predicate is not specified, all records will be deleted.

## TRUNCATE

Drops and recreates the specified table. Feature of DDL. Faster compared to running `DELETE` on all rows. Skips DELETE triggers.

```sql
TRUNCATE TABLE employees;
```

## WHERE

Specifies the condition for any type of queries. Can have many conditions separated by logical operators `AND`, `OR`, `NOT`.

```sql
SELECT *
FROM employees
WHERE salary > 70000;
```

## GROUP BY

Specifies the grouping criteria for [aggregate functions](#aggregate-functions). Feature of DML.

```sql
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id;
```

All non-aggregated values specified in the SELECT clause must appear in the GROUP BY clause. 

## HAVING

Specifies a condition for a group of rows. Feature of DML. Used with `GROUP BY` to filter groups based on aggregate functions.

Examples:

```sql
-- Find departments with an average salary greater than $60,000
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 60000;
```

:::note[Difference between WHERE and HAVING]

`WHERE` is used to filter rows before aggregation. `HAVING` is used to filter groups after aggregation.

:::

## JOIN

### INNER JOIN

Combines rows from two or more tables based on a related column between them.

```sql
SELECT employees.first_name, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id;
```

### LEFT (OUTER) JOIN

```sql
SELECT employees.first_name, departments.department_name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.department_id;
```

### RIGHT (OUTER) JOIN

```sql
SELECT employees.first_name, departments.department_name
FROM employees
RIGHT JOIN departments ON employees.department_id = departments.department_id;
```

### FULL (OUTER) JOIN

```sql
SELECT employees.first_name, departments.department_name
FROM employees
FULL JOIN departments ON employees.department_id = departments.department_id;
```

Not supported in all SQL dialects, especially MySQL. In that case, `UNION` should be used to combine the results of `LEFT JOIN` and `RIGHT JOIN` to achieve the same result.

### CROSS JOIN

```sql
SELECT employees.first_name, departments.department_name
FROM employees
CROSS JOIN departments;
```

## WHERE Predicates

### =, <, >, <>

These values can be used in the WHERE clause to filter rows based on specific conditions.

:::note

`NULL` doesn't work with `=`. `IS` comparator works with `NULL`.

:::

### LIKE

Specifies a pattern for pattern matching with wildcard characters. Feature of DML.

- `%` represents zero, one, or multiple characters
- `_` represents a single character

Examples:

```sql
-- Find all employees whose last name starts with 'S'
SELECT * FROM employees WHERE last_name LIKE 'S%';

-- Find all employees whose first name ends with 'a'
SELECT * FROM employees WHERE first_name LIKE '%a';

-- Find all employees with 'th' anywhere in their last name
SELECT * FROM employees WHERE last_name LIKE '%th%';

-- Find all products with exactly 5 characters in the product code
SELECT * FROM products WHERE product_code LIKE '_____';

-- Find all employees with 'e' as the second letter in their first name
SELECT * FROM employees WHERE first_name LIKE '_e%';
```

Some database systems also support escape characters and additional options like ILIKE (case-insensitive LIKE in PostgreSQL).

### BETWEEN

Specifies a range for numeric or date values. Feature of DML.

- `BETWEEN` includes the boundary values
- `NOT BETWEEN` excludes the boundary values

Examples:

```sql
-- Find all employees with salaries between $50,000 and $70,000
SELECT * FROM employees WHERE salary BETWEEN 50000 AND 70000;

-- Find all employees with salaries not between $50,000 and $70,000
SELECT * FROM employees WHERE salary NOT BETWEEN 50000 AND 70000;
```
