---
title: Views
sidebar:
  order: 14
slug: database-systems/views
prev: true
next: true
---

A named, virtual table defined by a SQL query. It does not store data itself, but presents data from one or more base tables (or other views) according to its definition. Views encapsulate complex queries, provide abstraction, and can restrict access to sensitive data.

## View Dependencies

Views depend on the underlying base tables (and possibly other views) referenced in their definition. If a base table or dependent view is altered or dropped, the view may become invalid or fail to resolve. Most SQL systems track these dependencies and may prevent destructive changes to base tables if dependent views exist, or mark views as invalid until redefined.

## Processing Algorithms

When a view is referenced in a query, the database must decide how to process it. There are two main algorithms:

- View Expansion (Query Rewriting): The view's definition is substituted into the referencing query, and the resulting query is optimized and executed as if the view did not exist. This is the default for most systems and is called a _virtual view_.
- Materialized View: The view's result set is computed and stored physically, like a table. Subsequent queries read from this stored data, improving performance for expensive aggregations or joins. Materialized views require explicit support and are not standard SQL views.

## Refresh Mechanisms

- Virtual Views: Always reflect the current state of the underlying tables. No refresh is needed; every query recomputes the view.
- Materialized Views: Must be refreshed to stay up-to-date. Refresh can be:
  - Immediate (On Commit): The view is updated whenever the base tables change.
  - Manual (On Demand): The view is refreshed only when explicitly requested.
  - Scheduled: The view is refreshed at regular intervals.

The choice affects consistency and performance. Some systems support _incremental refresh_, updating only changed rows, while others recompute the entire view.

## Materialization

Refers to storing the result of a view physically. Standard SQL views are not materialized; they are recomputed on each access. Materialized views, supported in systems like Oracle, PostgreSQL, and SQL Server, store the result set and can be indexed for fast access. Materialization trades storage and refresh overhead for query performance.

## Summary

| Feature           | Standard View   | Materialized View        |
| ----------------- | --------------- | ------------------------ |
| Storage           | None (virtual)  | Physical (table-like)    |
| Data Freshness    | Always current  | May be stale             |
| Performance       | Query-time cost | Fast reads, slow refresh |
| Dependencies      | On base tables  | On base tables           |
| Refresh Mechanism | Not needed      | Manual/auto/scheduled    |
