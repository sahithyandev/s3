---
title: Memory Organization
sidebar:
  order: 7
slug: computer-architecture/memory-organization
prev: true
next: true
---

Memory is very slow compared to CPU. To bridge the performance gap, a memory hierarchy is used.

## Principle of Locality

Explains why programs tend to access a small portion of memory repeatedly within short time intervals. It forms the theoretical basis for cache memory design and memory hierarchy optimization.

[Caching](/computer-architecture/cache) is based on this principle.

### Temporal Locality

Refers to the tendency of a program to reuse recently accessed data or instructions. If a memory location is referenced once, it is likely to be referenced again soon.

Example: Loop counters or variables in iterative constructs.

Practical effects:

- Caches keep recently accessed blocks.
- Speeds up execution for repeated accesses within short intervals.

### Spatial Locality

Refers to the tendency to access memory addresses near recently accessed ones. Once a memory location is accessed, nearby locations are likely accessed soon.

Example: Sequential instruction execution or array traversal.

Practical effects:

- Memory fetched in blocks.
- Hardware prefetching takes advantage of predictable address proximity.

## Inclusion Property

Often (not 100% of the tiem) data in lower levels of hierarchy are a superset of higher level memories.

## Impact of Memory Hierarchy

- Affect many aspects of a computer
  - How OS manages memory & IO
  - How compilers generate codes
  - How applications use the computers
- Programs spend more time on memory access
- Need to know exact hierarchy for optimizing

## Memory Technologies

Different technologies are used to optimize for speed, density, and cost. Dominant semiconductor memory types are Static RAM (SRAM) and Dynamic RAM (DRAM).

### SRAM

Each bit is stored using a flip-flop. Data is retained as long as power is supplied.

High speed. Low physical bit density. High cost per bit. Low power usage during access. High standby power usage.

Used in CPU caches (L1–L3) and register files inside processors.

### DRAM – Dynamic Random Access Memory

Each bit is built using a capacitor and a transistor. Refreshing is needed to maintain the data; otherwise the data will be lost. Refresh timeout is typically around 100 ms.

High physical bit density, low cost per bit. High power usage during access. Low standby power usage.

Used in main memory (DDR4, DDR5) and graphics memory (GDDR, HBM).

### Comparison Table

| Feature        | SRAM                        | DRAM                       |
| -------------- | --------------------------- | -------------------------- |
| Storage cell   | 4–6 transistors (flip-flop) | 1 transistor + 1 capacitor |
| Refresh needed | No                          | Yes                        |
| Speed          | Very fast (1–5 ns)          | Slower (30–100 ns)         |
| Density        | Low                         | High                       |
| Cost per bit   | High                        | Low                        |
| Typical use    | Cache memory                | Main memory                |
