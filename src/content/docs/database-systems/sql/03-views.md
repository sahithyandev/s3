---
title: Views
sidebar:
  order: 3
slug: database-systems/sql/views
prev: true
next: true
---

A named, virtual relation or table defined by a SQL query. It does not store data itself, but presents data from one or more base tables (or other views) according to its definition. Views encapsulate complex queries, provide abstraction, and can restrict access to sensitive data.

Always reflect the current state of the underlying tables. No refresh is needed; every query recomputes the view.

## View Dependencies

Views depend on the underlying base tables (and possibly other views) referenced in their definition. If a base table or dependent view is altered or dropped, the view may become invalid or fail to resolve. Most SQL systems track these dependencies and may prevent destructive changes to base tables if dependent views exist, or mark views as invalid until redefined.

### Recursive

Used to represent hierarchical relationships within a database, such as organizational charts or family trees.

```sql
CREATE VIEW OrgChart(emp_id, manager_id) AS
    -- Base case
    SELECT emp_id, manager_id
    FROM Employee
  UNION ALL
    -- Recursive case (view calls itself)
    SELECT e.emp_id, o.manager_id
    FROM Employee e
    JOIN OrgChart o ON e.manager_id = o.emp_id;
```

## Processing Algorithms

When a view is referenced in a query, the database must decide how to process it. There are two main algorithms:

The view's definition is substituted into the referencing query, and the resulting query is optimized and executed as if the view did not exist. This is the default for most systems and is called a _virtual view_.

## Updatable Views

When insert, update, and delete operations are allowed on a view. The changes will be automatically synced with the underlying base table.

### When a view is updatable

A view is updatable **iff** the DBMS can trace each row in the view back to a single row in a single base table. The view must represent a direct mapping to the base data, without ambiguity or derived values.

A view becomes non-updatable if it includes any of:
- Joins (rows come from multiple tables)
- Aggregates (`SUM`, `AVG`, etc.)
- DISTINCT or GROUP BY
- Set operations (`UNION`, `INTERSECT`)
- Expressions (e.g., `salary  0.1`)

Some DBMSs allow defining `INSTEAD OF` triggers for non-updatable views. `INSERT`, `UPDATE`, or `DELETE` can be manually defined them to ensure the view affects the base tables.

## Materialization

Refers to storing the result of a view physically. Standard SQL views are not materialized; they are recomputed on each access. Can be indexed. Trades storage and refresh overhead for query performance.

Supported in Oracle, PostgreSQL, and SQL Server. Not supported in MySQL.

### Comparison with Standard Views

| Feature           | Standard View   | Materialized View        |
| ----------------- | --------------- | ------------------------ |
| Storage           | None (virtual)  | Physical (table-like)    |
| Data Freshness    | Always current  | May be stale             |
| Performance       | Query-time cost | Fast reads, slow refresh |
| Dependencies      | On base tables  | On base tables           |
| Refresh Mechanism | Not needed      | Manual/auto/scheduled    |

### Refresh Mechanisms

Materialized views must be refreshed to stay up-to-date.

Refresh can be:
- Immediate (On Commit): The view is updated whenever the base tables change.
- Manual (On Demand): The view is refreshed only when explicitly requested.
- Scheduled: The view is refreshed at regular intervals.
