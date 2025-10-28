---
title: Integrity Constraints
sidebar:
  order: 5
slug: database-systems/sql/integrity-constraints
prev: true
next: true
---

Integrity constraints are rules enforced by the database to ensure data validity and consistency. They prevent invalid or inconsistent data and capture business rules.

- Primary key: uniquely identifies a row and cannot be NULL.
- Foreign key: enforces referential integrity between tables.
- Unique: ensures column values are unique.
- Not null: disallows NULL values in a column.
- Check: enforces custom conditions or ranges on values.

## Common Integrity Constraints

### PRIMARY KEY

Declare the primary key of the relation. If multiple columns are used, they are declared as a composite primary key.

### NOT NULL

Declare an attributes to be not null. Applied to primary keys automatically.

### UNIQUE

Declare a column or set of columns to be unique. Can be null.

### CHECK

Enforce custom conditions or ranges on values. All kinds of `WHERE` predicates are allowed with `CHECK`. Can refer multiple columns of a single table. Cannot reference other rows or other tables.

### DEFAULT

Specify a default value for a column.

### Referential Integrity

Enforce referential integrity between tables. Foreign keys must reference existing primary keys.
