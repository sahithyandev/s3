---
title: Micro Architecture
sidebar:
  order: 15
slug: computer-architecture/micro-architecture
prev: true
next: true
---

Defines how instructions are executed in hardware—timing, data paths, and control logic.

### Limits of Performance

Modern processors are near physical and design limits. Performance now depends more on architecture efficiency than transistor count.

Main Factors Affecting Limits:

- Multi-level caches (L1 → L4)
- Wide SIMD units (e.g., 512-bit FPUs)
- Deep pipelines (15+ stages)
- Branch prediction and speculative execution
- Out-of-order execution
- Multithreading and multiprocessing

Beyond a point, more hardware does not guarantee speed; efficiency and specialization matter.

### Design Questions

- Fastest and slowest instruction cycle counts?
- Why does each instruction take specific time?
- What limits the clock cycle period?

### Principles

- Critical Path Reduction:   
  Split long logic paths into smaller stages.
- Common Case Optimization:   
  Focus on frequently executed operations.
- Bottleneck Elimination:   
  Remove slow elements that block throughput.

## Single or Multi cycle

Processors can either be single-cycle or multi-cycle.

### Single-cycle

All instructions finish in one clock cycle; must match slowest operation.

Need to adjust to the slowest stage.

### Multi-cycle

Each instruction uses as many cycles as needed. Efficient resource use.

## Programmable Control Unit

Programmed by the processor manufacturer.

Microcode acts as firmware controlling datapath behavior.

Has 3 components.

### Microinstruction

Encodes control signals that control the datapath and help determine the
next state.

### Control Store

Memory that holds microinstructions.

### Microsequencer

Determines the address of the next microinstruction.

## Microprogramming

Translate complex CPU operations into sequences of microinstructions.

Pros:

- Easier hardware design.
- Flexible and updateable via microcode.

Cons:

- High power and complexity (CISC tendency).
- Vendor-dependent optimization.
- Compiler may not fully exploit ISA features.


## Performance Equation

```math
\text{CPU Time} = \text{Instruction Count}\times \text{CPI} \times \text{Clock Cycle Time}
```

Here:

- CPI - Cycles Per Instruction   
  $\text{CPI} = \text{Total CPU cycles} / \text{Instruction count}$
- IPC Instructions Per Cycle   
  $\text{IPC) = 1 / \text{CPI}$

Performance can be improved by:

- Reducing instruction count (better compiler)
- Lowering CPI (efficient microarchitecture)
- Reducing clock cycle time (faster hardware)

## Performance Measurement and Benchmarking

- Compare processors using different kinds of benchmarks.
- Performance is domain-specific.
- Requirements evolve over time and depend on target devices.
