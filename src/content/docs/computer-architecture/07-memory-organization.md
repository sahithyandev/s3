---
title: Memory Organization
sidebar:
  order: 7
slug: computer-architecture/memory-organization
prev: true
next: true
---

Memory is very slow compared to CPU. To bridge the performance gap between the 2, a memory hierarchy which includes, different levels of memory is used.

## Cache

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
- Capacity: limited cache capacity force blocks to be removed from a cache & later retrieved
- Conflict (collision)– multiple blocks compete for the same set/block

### Miss ratio

Fraction of memory accesses not found in cache.

### Miss penalty

Time to bring a block from memory plus deliver it to processor.

:::note

```math
\text{Average memory access time} = \text{Hit time} + \text{Miss rate} \times \text{Miss penalty}
```

:::
