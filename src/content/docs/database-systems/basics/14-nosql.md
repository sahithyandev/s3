---
title: NoSQL
sidebar:
  order: 14
slug: database-systems/basics/nosql
prev: true
next: false
---

# NoSQL — a practical overview for engineering undergraduates

NoSQL ("not only SQL") is an umbrella term for databases that depart from the traditional relational (table-based) model. They are designed to handle large volumes of data, high request rates, distributed architectures, flexible schemas, or specialized data models (e.g., graphs). NoSQL systems trade off certain relational features to gain scalability, performance, or simplicity for particular workloads.

## Main types of NoSQL databases
- Key‑Value stores
  - Data: simple key → opaque value (often a binary blob or JSON).
  - Use cases: caches, session stores, simple lookups.
  - Examples: Redis, Amazon DynamoDB (in key‑value mode).
- Document stores
  - Data: JSON-like documents (fields can vary by document); queryable by fields.
  - Use cases: content management, user profiles, event storage.
  - Examples: MongoDB, Couchbase.
- Column-family (wide-column) stores
  - Data: rows with dynamic columns grouped into column families; optimized for large write/read throughput.
  - Use cases: time series, telemetry, big data tables.
  - Examples: Apache Cassandra, HBase.
- Graph databases
  - Data: nodes and edges with properties; optimized for traversals and relationships.
  - Use cases: social networks, recommendation engines, fraud detection.
  - Examples: Neo4j, JanusGraph.

## Key concepts and trade-offs
- Schema flexibility: Documents/rows can have different fields; good for evolving data models without migrations.
- Distribution & partitioning:
  - Sharding (partitioning) is common: data split across nodes by key.
  - Replication copies data for availability and reads.
- CAP theorem (strongly relevant):
  - In the presence of network partitions, a distributed system can provide either Consistency (C) or Availability (A), but not both. Most NoSQL systems let you tune where you fall on the C/A spectrum.
- Consistency models:
  - Strong consistency: reads reflect latest writes.
  - Eventual consistency: replicas converge over time; reads may be stale.
  - Many NoSQL systems offer tunable consistency (e.g., read/write quorum settings).
- Transactions:
  - Full multi-row, multi-collection ACID transactions are less common (some systems add limited transactional guarantees).
  - Expect weaker transactional semantics by default (single-key atomicity is common).
- BASE vs ACID:
  - BASE: Basically Available, Soft state, Eventual consistency — a common design philosophy for many NoSQL systems.
  - ACID: Atomicity, Consistency, Isolation, Durability — typical for RDBMS.

## How NoSQL differs from relational databases
- Structure: No fixed schema (flexible) vs fixed schema with joins/normalized design.
- Joins: NoSQL often avoids or discourages joins; denormalization is common.
- Scaling: NoSQL systems are typically designed for horizontal scaling (add machines) rather than vertical scaling.
- Querying: Query capabilities vary widely — some support rich queries and indexes, others are very simple key lookups.

## When to choose NoSQL
- High scalability needs: very large datasets or high throughput where horizontal scaling is required.
- Flexible schema: rapidly changing data models or heterogeneous records.
- Specialized relationships: graph DBs for complex joins/traversals by relationships.
- Low-latency, high-concurrency workloads: caching and fast lookups (key‑value stores).
- Use cases where eventual consistency is acceptable.

When not to choose NoSQL
- You need complex multi-row transactions and strong, immediate consistency across many entities.
- Your data is highly relational and normalized with lots of ad‑hoc queries that join many tables — RDBMS might be simpler.

## Practical design tips
- Model around access patterns: design data layout for the queries you actually need (read-heavy vs write-heavy).
- Denormalize when it reduces expensive cross-node operations; accept data duplication to improve latency.
- Choose partition keys carefully to avoid hotspots (skewed load on a shard).
- Use indexes sparingly — they speed reads but slow writes and increase storage.
- Understand failure modes: test how the system behaves on node loss or network partitions.
- Tune replication and consistency: pick the smallest latency you can tolerate for correctness.
- Backups and restore strategies differ from RDBMS — ensure consistent snapshots when needed.

## Small examples (pseudo)
- Key-value (get/set)
```
SET session:1234 "{...}"
GET session:1234
```
- Document query (JSON)
```
db.users.find({ "email": "alice@example.com" })
```
- Graph traversal
```
MATCH (a:Person {name:"Alice"})-[:FRIEND]->(b) RETURN b
```

## Common NoSQL systems (quick reference)
- Redis — in-memory key-value, great for caching & pub/sub.
- MongoDB — document store, flexible queries and indexes.
- Cassandra — distributed wide-column, tuned for writes and availability.
- Neo4j — native graph DB with performant traversals.

## Final advice
NoSQL is not a single technology but a set of design choices and trade-offs. Learn your data access patterns, understand the consistency and failure semantics of the system you pick, and design your schema to match the queries you'll run. For many projects a hybrid approach works: relational databases for transactional core data, and NoSQL for scale, caching, or specialized workloads.
