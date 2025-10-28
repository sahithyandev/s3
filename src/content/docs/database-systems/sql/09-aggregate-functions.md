---
title: Aggregate Functions
sidebar:
  order: 9
slug: database-systems/sql/aggregate-functions
prev: true
next: true
---

Aggregate functions perform calculations on a set of values and return a single value. Used with `GROUP BY` to summarize data.

If all values in the aggregated field are `NULL`:
- `COUNT(*)` returns total number of rows
- `COUNT` returns 0
- Otherwise, `NULL` is returned

Otherwise, `NULL` values are ignored for all aggregate functions other than `COUNT`.

## COUNT

Counts the number of rows in a table:

```sql
SELECT COUNT(*) AS total_employees
FROM employees;
```

## SUM

Calculates the sum of a numeric column:

```sql
SELECT SUM(salary) AS total_salary
FROM employees;
```

## AVG

Calculates the average of a numeric column:

```sql
SELECT AVG(salary) AS avg_salary
FROM employees;
```

## MIN

Finds the minimum value in a column:

```sql
SELECT MIN(salary) AS min_salary
FROM employees;
```

## MAX

Finds the maximum value in a column:

```sql
SELECT MAX(salary) AS max_salary
FROM employees;
```

:::note

All aggregate operations except `COUNT(*)` ignore tuples with `NULL` values on the aggregated field. When all values in the aggregated field are `NULL`, the result is `NULL`.

:::

## Windowing

A concept used with aggregating functions. Not a aggregate function.

A window is a subset of rows defined relative to the current row. Aggregate functions can be calculated inside each window.

```sql
<function>() OVER (
    PARTITION BY <columns>
    ORDER BY <columns>
    ROWS BETWEEN <start> AND <end>
)
```

## RANK

Used with ORDER BY.

```sql
SELECT id, RANK() OVER (ORDER BY gpa desc) as overall_rank 
FROM student_grades
```

Leaves gaps when 2 different rows have the same value for the ranked column.

## DENSE RANK

Similar to RANK but does not leave gaps.
