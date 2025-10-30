---
title: Cache
sidebar:
  order: 8
slug: computer-architecture/cache
prev: true
next: true
---

Small amount of memory, ranging from a few KBs to MBs. Built using SRAM. Slower than registers but faster than main memory. Used to store frequently accessed data. A transparent speedup mechanism; performance increases even though the program instructions remain unchanged.

### Cache block

Minimum unit of data that is transferred between cache and main memory. Tagged with memory address. Searched in parallel. A cache block stores data, tag for the memory address and some other metadata.

Multiple blocks are moved between levels in cache hierarchy.

### Hit ratio

Fraction of memory accesses found in cache.

### Hit time

Time to access a block in cache.

### Cache miss

When required item is not found in cache.

3 types:

- Compulsory: 1st access to a block
- Capacity: when no space left in cache
- Conflict (collision): when space is left, but multiple blocks compete for the same set

### Miss ratio

Fraction of memory accesses not found in cache.

### Miss penalty

Time to bring a block from memory plus deliver it to processor.

:::note

```math
\text{Avg. memory access time} = \text{Hit time} + \text{Miss rate} \times \text{Miss penalty}
```

:::

## Cache Organization

Memory is divided into _blocks_ (aka. _lines_) to be stored in cache.

### Memory address split

A memory address is split into tag, index, and offset.

- Offset  
  Selects the word within a block. If block size is 64 bytes, least significant 6 bits are used to address each word.
- Index  
  Denotes the set. If the total number of sets are $2^n$, then $n$ bits are used here.
- Tag  
  Identifies which memory block is stored in the set's line. Remnant bits are after offset and index.

### Cache Entry Table

A small table is used to record cache entries. The table stores:

- tag
- index
- valid bit (1 bit)

## Associativity

Defines how memory blocks are mapped into cache locations. Directly impacts miss rate, complexity, and speed.

### Direct-Mapped

Each memory block maps to exactly one cache line. Mapping is simpler. 

```math
\text{Index} = \text{Block address} \mod \text{Number of lines}
```

Simple implementation. Faster. High risk for conflict misses.

Used in embedded and high-speed systems where simplicity and speed outweigh flexibility.

### Fully Associative

A memory block can go anywhere in the cache.

No fixed mapping. All cache lines are searched for a match. Minimum conflict misses. Complex hardware. Slower and more expensive to implement.

Used in small caches (like TLBs) where flexibility is more important than access speed.

### N-Set-Associative

Balanced version between the above 2. Each set contains $N$ lines. A memory block maps to exactly one set; but can be placed in any line within that set. Reduces conflict misses with moderate hardware cost. Lines within a set is searched in parallel.

## Replacement Policy

When all lines in a set are full, one must be replaced. Common policies:

- LRU (Least Recently Used) – replace the least recently accessed line.
- Random – randomly choose a line.
- FIFO – replace the oldest line in the set.

## Cache Levels

Modern processors use a multi-level cache hierarchy.

### L1 Cache

The fastest and smallest cache. Located within each CPU core. Divided into L1 Instruction (I-cache) and L1 Data (D-cache). Supplies the CPU with immediate access to the most frequently used instructions and data. Size ranges from 16 KB to 128 KB. Access latency is typically 1-5 cycles.

### L2 Cache

Acts as an intermediate buffer between L1 and L3 or main memory. Larger and slower than L1. Usually private to each core in modern processors. Size ranges from 256 KB to 2 MB. Access latency is typically 5-15 cycles.

### L3 Cache

Larger and slower. Often shared among all cores on a CPU chip. Acts as a global buffer before main memory. Implemented off-core but on the same die (on-chip shared cache). Size ranges from 4 MB to 64 MB. Access latency is typically 20-50 cycles.

## Increasing Cache Performance

Cache capacity can be increased to a certain extent. Predicting and prefetching can improve performance. Fully associative cache avoids conflicts and improve hit rate.
