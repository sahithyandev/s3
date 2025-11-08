---
title: Pipeline Hazards
sidebar:
  order: 11
slug: computer-architecture/pipeline-hazards
prev: true
next: true
---

Situations preventing next instruction from executing in designated clock cycle. Causes the pipeline to [stall](/computer-architecture/pipelining#pipeline-stall).

3 types.

## Structural hazard

When 2 different instructions require the same hardware resource(s) simultaneously.

Occur primarily in special purpose functional units that are less frequently used (such as floating point
divide or other complex long running instructions). Not a major performance factor, assuming programmers are aware of the lower throughput of these instructions.

One occurence is when both instruction fetch and data access need the same memory. Can be solved by using a separate memory for instruction fetch and data access.

## Data hazard

When next instruction depends on the result of the current instruction during overlap.

Suppose when unpipelined, instruction $i$ runs before $j$ and both use the same register.

3 types:

- Read after write (RAW)  
  $j$ must read only after $i$ writes. Stall is required to resolve.
- Write after read (WAR)  
  $j$ writes only after $i$ reads. Impossible in 5-stage pipeline. Occurs when instructions are reordered. Can be solved by renaming registers.
- Write after write (WAW)  
  $j$ writes only after $i$ writes. Impossible in 5-stage pipeline. Occurs when instructions are reordered.
  
:::note

Read after read (RAR) is not a hazard because read operation is idempotent.

:::

### Register Half-Cycle Timing

A solution to data hazards by reading from registers only in the first half of a clock cycle, and writing to registers only in the second half of a clock cycle.

### Forwarding

Aka. bypassing or short-circuiting. An alternate solution to stalling for data hazards. The result is forwarded directly from the stage where it becomes available (mostly EX or MEM) to the stage that needs it.

Cannot handle all data hazards. For load instruction, forwarding alone isn't enough and causes 1-cycle stall.

### Pipeline interlock

Detects a hazard and stalls the pipeline until the hazard is resolved.

## Control hazard

Aka. branch hazard. When the outcome of a branch/jump instruction is unknown yet. Causes more performance loss compared to data hazards. 4 solutions are commonly used.

### Taken branch

When a branch changes the PC to its target address. Otherwise _untaken branch_.

### Freeze

Simplest scheme to handle branch hazards. The process of holding execution in the pipeline until the branch destination is known. Waits for 2 cycles per branch.

Implementation is simple in terms of hardware and software. Branch penalty is constant, cannot be lessened with software optimization.

Used when no predictions.

### Flush

Speculatively fetches next instruction as it normally would. Discards the fetched instructions if they are not needed. Kind of similar to freeze.

Branch penalty is constant, cannot be lessened with software optimization.

Used when a misprediction is made (with any branch prediction policy).

### Assume untaken

Treat all branches are untaken. Fetches next instruction placed sequentially. No branch penalty for untaken branches. If the branch is taken, 2 cycle branch penalty.

Processor state must remain unchanged until the actual branching outcome is known. If the prediction is wrong, the pipeline is flushed and restarted. Results in a 1 cycle penalty when the branch is taken.

More performant. Slightly more complex.

### Assume taken

Treat all branches are taken. Requires an early adder and immediate decoder in ID. No branch penalty for taken branches. If the branch is not taken, 1 or 2 cycles branch penalty.

:::note

In either assume taken or untaken, the order of instructions can be rearranged to match the hardware's choice.

:::

### Delayed branch

Branch outcome is only known after the EX step. Delayed branch technique is used to run instruction(s) before the EX step, whether the branch is taken or not. Mostly a single instruction delay is used. If longer branch penalty is there, other techniques are used. Compiler is responsible for filling the delay slot with a useful instruction, or a nop.

Useful for short and simple pipelines. Implementation becomes too complex when dynamic branch prediction is there. Heavily used in early RISC-V processors; not anymore.
