---
title: SQL Commands
sidebar:
  order: 6
slug: database-systems/sql-commands
prev: true
next: true
---


Conventionally, used in capitalized forms.

### CREATE

The `CREATE` statement is used to create database objects like tables. Feature of DDL.

```sql
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  hire_date DATE,
  salary DECIMAL(10,2),
  department_id INT,
  manager_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id),
  FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);
```

### DROP

The `DROP` statement removes database objects. Feature of DDL.

```sql
DROP TABLE employees;
```

### ALTER

The `ALTER` statement modifies existing database objects. Feature of DDL.

```sql
ALTER TABLE employees ADD email VARCHAR(100);
```

### SELECT

The `SELECT` statement retrieves data from one or more tables. Feature of DML.

```sql
SELECT first_name, last_name 
FROM employees 
WHERE salary > 50000
ORDER BY last_name;
```

"*" will fetch all the columns. But have performance impacts on large tables. Post-processing can be done on the selected fields as well, although generally not recommended.

### AS

Allows renaming a relation or a attribute name.

### ORDER BY

Specifies the order in which to sort the result set. Feature of DML. Ascending by default. Can have multiple attributes.

### LIMIT

Specifies the maximum number of rows to return. Feature of DML. No limits by default.

### HAVING

Specifies a condition for a group of rows. Feature of DML. `HAVING` is used with `GROUP BY` to filter groups based on aggregate functions.

Examples:

```sql
-- Find departments with an average salary greater than $60,000
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 60000;
```

### FROM

Specifies the table(s) from which to retrieve data. Feature of DML.

```sql
SELECT *
FROM employees
```

If multiple tables are specified, considers the cartesian product of the tables.

### INSERT

The `INSERT` statement adds new records. Feature of DML.

```sql
INSERT INTO employees (employee_id, first_name, last_name, hire_date, salary)
VALUES (1, 'John', 'Doe', '2023-01-15', 65000);
```

### UPDATE

The `UPDATE` statement modifies existing records. Feature of DML.

```sql
UPDATE employees
SET salary = 70000
WHERE employee_id = 1;
```

### DELETE

The `DELETE` statement removes records. Feature of DML.

```sql
DELETE FROM employees
WHERE employee_id = 1;
```

:::note

All results of SQL DML features are also relations.

:::

### WHERE

Specifies the condition for any type of queries. Can have many conditions separated by logical operators `AND`, `OR`, `NOT`.

```sql
SELECT *
FROM employees
WHERE salary > 70000;
```

## WHERE Predicates

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

## Aggregate Functions

Aggregate functions perform calculations on a set of values and return a single value. They are often used with `GROUP BY` to summarize data.

### COUNT

Counts the number of rows in a table:

```sql
SELECT COUNT(*) AS total_employees
FROM employees;
```

### SUM

Calculates the sum of a numeric column:

```sql
SELECT SUM(salary) AS total_salary
FROM employees;
```

### AVG

Calculates the average of a numeric column:

```sql
SELECT AVG(salary) AS avg_salary
FROM employees;
```

### MIN

Finds the minimum value in a column:

```sql
SELECT MIN(salary) AS min_salary
FROM employees;
```

### MAX

Finds the maximum value in a column:

```sql
SELECT MAX(salary) AS max_salary
FROM employees;
```

:::note

All aggregate operations except `COUNT(*)` ignore tuples with `NULL` values on the aggregated field. When all values in the aggregated field are `NULL`, the result is `NULL`.

:::
