---
title: Triggers
sidebar:
  order: 17
slug: database-systems/triggers
prev: true
next: true
---

A special type of stored procedure that is automatically executed, or "triggered," in response to modifications on a particular table or view. Triggers are commonly used to enforce business rules, maintain audit trails, or automatically update related data.

Can be set to fire before or after events such as `INSERT`, `UPDATE`, or `DELETE` operations.

Example:

```sql
CREATE TRIGGER log_update
AFTER UPDATE ON employees
FOR EACH ROW
INSERT INTO audit_log(employee_id, action, changed_at)
VALUES (NEW.id, 'update', NOW());
```

In this example, whenever a row in the `employees` table is updated, a new entry is added to the `audit_log` table.

Can access both the old version and the new version of the row being modified. Can be modified to fire on modifications to specific attributes. Can be set to run for multiple rows at a time.
