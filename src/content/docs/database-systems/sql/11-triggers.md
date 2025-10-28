---
title: Triggers
sidebar:
  order: 11
slug: database-systems/sql/triggers
prev: true
next: true
---

A special type of stored procedure. Automatically executed in response to modifications on a particular table or view. Commonly used to enforce business rules, maintain audit trails, or automatically update related data.

Can be set to fire before or after events such as `INSERT`, `UPDATE`, or `DELETE` operations.

```sql
CREATE TRIGGER log_update
AFTER UPDATE ON employees
FOR EACH ROW
INSERT INTO audit_log(employee_id, action, changed_at)
VALUES (NEW.id, 'update', NOW());
```

Can access both the old version and the new version of the row being modified. Can be modified to fire on modifications to specific attributes. By default, invoked for each row modification. Can be set to run for multiple rows at a time.

## When not to use

In old DBMS, triggers were used to replicate data, maintain summary data, Modern DBMS support provide these functionalities.

Triggers could cause unintended invocations which might degrade performance.
