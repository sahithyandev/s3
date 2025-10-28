---
title: Indices
sidebar:
  order: 6
slug: database-systems/sql/indices
prev: true
next: true
---

Data structures used to improve query performance by allowing faster retrieval of data from a database table. Defined on a column or a set of columns in a table.

Primary key is indexed by default in most cases.

Improves query performance at the cost of additional storage usage. Must be updated when the data changes.

### Implementation

Indices are implemented commonly using:
- B-tree
- Hash table
- Bitmap index
- R-tree
