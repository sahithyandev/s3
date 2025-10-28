---
title: Transaction
sidebar:
  order: 4
slug: database-systems/sql/transaction
prev: true
next: true
---

Allows grouping multiple SQL statements into a single unit of work. Transactions ensure that all statements succeed or fail together, maintaining data consistency.

Only DML queries can be ROLLBACK within a transaction. DDL queries are auto-committed.

Usually, each SQL statement is committed automatically. Auto commits can be disabled using the `SET AUTOCOMMIT OFF` statement.
