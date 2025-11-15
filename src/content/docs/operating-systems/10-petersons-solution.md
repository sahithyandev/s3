---
title: Peterson's Solution
sidebar:
  order: 10
slug: operating-systems/petersons-solution
prev: true
next: true
---

A software algorithm for achieving mutual exclusion. Assumes `load` and `store` operations are atomic.

Uses 2 shared variables:
- a `flag` array: to indicate if a process wants to enter the critical section
- a `turn` variable: to indicate whose turn it is to enter

The algorithm works as follows:

- When a process (say, $P_i$) wants to enter the critical section, it first sets its `flag[i]` to `true`. This signals that $P_i$ wants to enter the critical section.
- Next, $P_i$ sets the shared `turn` variable to the index of the other process (if there are more than two processes, $P_i$ sets `turn` to the index of any other process it is contending with). This gives priority to the other process in case both want to enter at the same time.
- $P_i$ then enters a loop where it waits as long as two conditions are true:
    1. The other process's flag is `true` (meaning the other process also wants to enter the critical section).
    2. The `turn` variable is set to the other process (meaning $P_i$ has given priority to the other process).
- $P_i$ will only exit this loop and enter the critical section when either the other process does not want to enter (`flag[j] == false`), or it is $P_i$'s turn (`turn == i`).
- Once inside the critical section, $P_i$ can safely access shared resources.
- When $P_i$ exits the critical section, it sets its `flag[i]` back to `false`, indicating it no longer needs access. This allows the other process to proceed if it is waiting.

This ensures mutual exclusion, progress, and bounded waiting for two processes.

## Problems 

Peterson's solution relies on strict ordering of memory operations and the ability to read and write shared variables atomically. Modern CPUs and compilers may reorder instructions for optimization, breaking the assumptions of the algorithm.

Additionally, on multiprocessor systems, cache coherence and memory barriers are needed to ensure visibility of updates between cores. Without explicit hardware support or memory fences, Peterson's algorithm may not work reliably on modern systems. As a result, hardware-supported primitives like atomic instructions (e.g., test-and-set, compare-and-swap) or specialized synchronization mechanisms are preferred in practice.

## Solution
To make sure Peterson's solution work well on modern computer architecture, memory barriers must be used.

### Memory model

Guarantees about memory that a computer architecture makes to application programs.

May be either:
- Strongly ordered: where a memory modification of one processor is immediately visible to all other processors.
- Weakly ordered: where a memory modification of one processor may not be immediately visible to all other processors.

### Memory Barrier
Aka. memory fence. A CPU instruction that prevents certain type of reorderings of reads and writes. A CPU instruction that forces any change in memory to be propagated to all other processors. Cannot be reordered freely. Memory-accessing instructions cannot be reordered across memory barriers.

When a memory barrier instruction is performed, the system ensures that all loads and stores are completed before any subsequent load or store operations are performed.

Therefore, even if instructions were reordered, the memory barrier ensures that the store operations are completed in memory and visible to other processors before future load or store operations are performed.
