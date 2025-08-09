---
title: Amdahl's Law
sidebar:
  order: 8
slug: operating-systems/amdahls-law
prev: true
next: false
---

the overall performance improvement gained by optimizing a single part of a system is limited by the fraction of time that the improved part is actually used.

A formula that shows how much faster a task can be completed when more resources are added to the system.

```math
\text{speedup} = \cfrac{1}{S + \frac{1 - S}{N}}
```

Here:
- $N$ - number of processing cores
- $S$ - serial portion of the task
- $P = 1- S$ - parallel portion of the task

Serial portion of an application has disproportionate effect on performance gained by adding additional cores.

As $N$ increases, the speedup approaches $\frac{1}{S}$.
