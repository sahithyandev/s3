---
title: Indices
sidebar:
  order: 5
slug: database-systems/sql/indices
prev: true
next: true
---

Refer to [Indexing](/database-systems/basics/indexing) before continuing. Primary key is indexed by default.

### Example

```sql
CREATE INDEX idx_employee_name ON Employees (LastName, FirstName);
```

Here:
- `idx_employee_name` is the name of the index.
- `Employees` is the table on which the index is created.
- `LastName` and `FirstName` are the columns included in the index.

This index speeds up queries filtering or sorting by `LastName` and `FirstName`.
