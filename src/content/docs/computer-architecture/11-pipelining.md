---
title: Pipelining
sidebar:
  order: 11
slug: computer-architecture/pipelining
prev: true
next: true
---

A technique to improve CPU performance. Execution of multiple instructions are overlapped the execution of multiple instructions, instead of processing each instruction sequentially from start to finish.

The CPU divides instruction execution into several stages. Each stage is handled by a different part of the processor, allowing multiple instructions to be in different stages of execution at the same time.

Increases instruction throughput. Slightly increases the execution time of each instruction due to increased overhead (caused by pipeline register delays, clock skew). Introduces challenges (hazards) which must be managed to maintain correct program execution.

## Terminology

### Clock skew

Maximum delay between when the clock arrives at any 2 registers.

### Pipe

The sequence of stages through which instructions pass during execution in a pipelined processor.

Instructions move from one stage to the next in a streamlined fashion. The pipe enables multiple instructions to be processed simultaneously, with each instruction at a different stage, thereby increasing overall throughput and efficiency.

### Pipe stage

Aka. pipe segment. A specific part of the pipeline that performs a particular function, such as fetching, decoding, executing, or writing back results. Stages are connected sequentially.

### Depth of pipeline

The number of stages in the pipeline.

### Balanced pipeline

All the pipeline stages have the same duration.

### Throughput

Number of instructions coming out of the pipe per unit time.

### Processor cycle

Time required between moving an instruction one step down the pipeline.
Depends on slowest stage.

Clock cycle cannot be smaller than the sum of clock skew and latch overhead.

### Time per instruction

Denoted by TPI.

```math
\text{TPI}_{\text{pipelined}} =
\frac{\text{TPI}_{\text{unpipelined}}}{\text{N}}
```

Here $N$ is the number of pipeline stages.

### Speedup

```math
\text{Speedup} =
\frac{\text{TPI}_{\text{unpipelined}}}{\text{TPI}_{\text{pipelined}}}
```

For a balanced pipeline:

```math
\text{Speedup} = \text{Number of pipeline stages}
```

### Pipeline Stall

When an instruction need delaying during a hazard. One stalled instruction causes all instructions after it to stall. Instructions issued earlier than the stalled one must continue to clear the stall. No new instructions fetched during stall. Causes performance degradation.

### Pipeline register

A register placed between two stages of a CPU pipeline.

## Issues

- One instruction can be dependent on the result of another instruction(s).

### Solutions

- Use separate instruction and data memories with separate caches.
- Registers could be used instead of memory, for fast read and write.
- Pipeline registers can be used between successive stages to handle dependencies.  
  They are named as `IF/ID`, `ID/EX`, `EX/MEM`, `MEM/WB` denoting the stages they are between.

## Hazards

Situations preventing next instruction from executing in designated clock cycle. Causes the pipeline to [stall](/computer-architecture/pipelining#pipeline-stall).

3 types.

### Structural hazard

When 2 different instructions require the same hardware resource(s) simultaneously.

Occur primarily in special purpose functional units that are less frequently used (such as floating point
divide or other complex long running instructions). Not a major performance factor, assuming programmers are aware of the lower throughput of these instructions.

### Data hazard

When next instruction depends on the result of the current instruction during overlap. Suppose when unpipelined, instruction `i` runs before `j` and both use the same register.

3 types:

- Read after write (RAW)  
  `j` must read only after `i` writes. Stall is required to resolve.
- Write after read (WAR)  
  `j` writes only after `i` reads. Impossible in 5-stage pipeline. Occurs when instructions are reordered. Can be solved by renaming registers.
- Write after write (WAW)  
  `j` writes only after `i` writes. Impossible in 5-stage pipeline. Occurs when instructions are reordered.

:::note

Read after read (RAR) is not a hazard because read operation is idempotent.

:::

#### Forwarding

Aka. bypassing or short-circuiting. An alternate solution to stalling for data hazards. The result is forwarded directly from the stage where it becomes available (mostly EX or MEM) to the stage that needs it.

Cannot handle all data hazards. For load instruction, forwarding alone isn't enough and causes 1-cycle stall.

#### Pipeline interlock

To preserve the correct execution pattern. Detects a hazard and stalls the pipeline until the hazard is resolved.

### Control hazard

Aka. branch hazard. When the outcome of a branch/jump instruction is unknown yet. Causes more performance loss compared to data hazards. 4 solutions are commonly used.

#### Taken branch

When a branch changes the PC to its target address. Otherwise _untaken branch_.

#### Freeze

Simplest scheme to handle branch hazards. The process of holding execution in the pipeline until the branch destination is known. Waits for 2 cycles per branch.

Implementation is simple in terms of hardware and software. Branch penalty is constant, cannot be lessened with software optimization.

Used when no predictions.

#### Flush

Speculatively fetches next instruction as it normally would. Discards the fetched instructions if they are not needed. Kind of similar to freeze.

Branch penalty is constant, cannot be lessened with software optimization.

Used when a misprediction is made (with any branch prediction policy).

#### Assume untaken

Treat all branches are untaken. Fetches next instruction placed sequentially. No branch penalty for untaken branches. If the branch is taken, 2 cycle branch penalty.

Processor state must remain unchanged until the actual branching outcome is known. If the prediction is wrong, the pipeline is flushed and restarted. Results in a 1 cycle penalty when the branch is taken.

More performant. Slightly more complex.

#### Assume taken

Treat all branches are taken. Requires an early adder and immediate decoder in ID. No branch penalty for taken branches. If the branch is not taken, 1 or 2 cycles branch penalty.

:::note

In either assume taken or untaken, the order of instructions can be rearranged to match the hardware's choice.

:::

#### Delayed branch

Branch outcome is only known after the EX step. Delayed branch technique is used to run instruction(s) before the EX step, whether the branch is taken or not. Mostly a single instruction delay is used. If longer branch penalty is there, other techniques are used. Compiler is responsible for filling the delay slot with a useful instruction, or a nop.

Useful for short and simple pipelines. Implementation becomes too complex when dynamic branch prediction is there. Heavily used in early RISC-V processors; not anymore.
