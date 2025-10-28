---
title: Big Data
sidebar:
  order: 14
slug: database-systems/basics/big-data
prev: true
next: true
---

Refers to datasets that are large, fast-changing, or varied enough that traditional, single-node relational database systems become impractical or inefficient.

## Key characteristics
- Volume: very large size (terabytes → petabytes+).
- Velocity: high ingest/update rates and need for low-latency ingestion or real-time processing.
- Variety: structured, semi-structured, and unstructured data (logs, JSON, images, time series).
- Veracity: data quality and trustworthiness issues at scale.
- Value: extracting meaningful analytics or driving applications from the data.

## How big-data needs differ from traditional DBMS
- Single-node RDBMS target ACID OLTP workloads with normalized schemas and strong consistency. Big data often requires distributed storage, denormalization, and relaxed consistency for scale.
- Schema-on-write (classic RDBMS) vs schema-on-read (data lakes, many big-data systems) — the latter delays structuring until query time.
- Workload mix shifts: large-scale analytical queries (OLAP), batch aggregations, and streaming computations are prominent alongside high-throughput OLTP.

## Storage and system architectures
- Distributed file systems and object stores (HDFS, S3) provide scalable, fault-tolerant storage for large datasets.
- Distributed databases and engines:
  - NoSQL: key-value (Redis, Dynamo), document (MongoDB, Couchbase), wide-column (Cassandra, HBase), graph (Neo4j, JanusGraph).
  - NewSQL: distributed SQL engines that attempt to provide SQL semantics with scale (CockroachDB, Spanner).
  - Analytical warehouses / cloud data platforms: Redshift, BigQuery, Snowflake.
- Data lakes combine raw storage with compute engines layered on top; catalogs and metadata services (Glue, Hive Metastore) provide schema and discovery.

## Data processing patterns
- Batch processing: MapReduce, Spark, Hive — optimized for high-throughput, long-running analytics.
- Stream processing: Kafka, Flink, Spark Streaming — for low-latency, continuous computation on event streams.
- OLTP vs OLAP separation: systems are often specialized (operational databases for transactions, analytical stores for reporting), or use hybrid approaches (HTAP).

## Consistency, availability, partitioning
- CAP trade-offs: distributed systems often pick between strong consistency and availability/partition tolerance; many big-data systems use eventual consistency (BASE) for write scalability.
- Sharding/partitioning: data is partitioned by key (range, hash) to scale horizontally; good partitioning is critical to avoid hotspots.
- Replication: provides fault tolerance and read scale; synchronous vs asynchronous replication influences latency and consistency.

## Performance techniques and considerations
- Data locality: move compute to where data resides to reduce network I/O.
- Columnar storage and compression: columnar formats (Parquet, ORC) improve analytic query performance and reduce I/O.
- Vectorized and distributed query execution: runtime optimizations (predicate pushdown, projection pruning, vectorized processing) speed queries at scale.
- Join strategies: broadcast vs shuffle joins; data skew mitigation is often necessary.
- Indexing and secondary indexes: useful but can be expensive at scale—tradeoffs between write cost and read speed.

## Querying and interfaces
- SQL remains central for analytics: SQL-on-Hadoop engines (Hive, Presto/Trino, Impala) and cloud warehouses provide familiar query interfaces over big data.
- APIs and specialized query models: document queries, graph traversal, time-series queries, and key-value lookups for application needs.

## Data lifecycle, governance, and operational concerns
- Ingestion: high-throughput ingestion pipelines (Kafka, Kinesis) and ETL/ELT patterns; streaming vs batch arrival.
- Data lakes vs curated warehouses: raw lakes for diverse data; curated warehouses for cleaned, modeled data.
- Metadata, catalogs, lineage, and governance: essential for discoverability, quality, and compliance.
- Monitoring, capacity planning, and cost control: cloud costs, I/O costs, and compute scaling must be managed.

## Design and best practices
- Choose storage and engine based on workload (OLTP vs OLAP vs streaming).
- Partition by a key that aligns with query patterns to reduce cross-partition traffic.
- Use columnar formats for analytics and compress data.
- Denormalize where appropriate to avoid expensive distributed joins.
- Balance consistency and availability according to application requirements.
- Maintain catalogs, enforce schema evolution policies, and automate data quality checks.

## Examples
- Time-series telemetry: often stored in specialized TSDBs or wide-column stores with time-based partitions; streaming ingestion and downsampling are typical.
- Clickstream analytics: ingested via Kafka, stored in object storage as Parquet, processed in batch/stream by Spark/Flink, queried via Presto or a data warehouse.
- User profile store for online service: a distributed key-value/document store (low-latency reads) possibly with eventual consistency and background reconciliation.
