---
title: Instruction Level Parallelism
sidebar:
  order: 13
slug: computer-architecture/instruction-level-parallelism
prev: true
next: true
---

- Pipelining became a standard technique in 1985, allowing overlapping execution of instructions.
- Exploits Instruction-Level Parallelism (ILP) by executing multiple instructions simultaneously.
- Two approaches to exploit ILP:
  1. Hardware-based dynamic approaches: Used in servers and desktop processors.
  2. Compiler-based static approaches: Common in scientific applications, less successful outside this scope.

### Key Concepts of ILP

#### Goal of ILP

- Maximize CPI (Cycles per Instruction) by optimizing pipeline stages.

  Formula:
  [
  \text{Pipeline CPI} = \text{Ideal Pipeline CPI} + \text{Structural Stalls} + \text{Data Hazard Stalls} + \text{Control Stalls}
  ]

- Basic blocks (3-6 instructions) can be parallelized, but optimizing across branches is essential.

### Data Dependence

- Loop-Level Parallelism:
  - Can be optimized using loop unrolling (static or dynamic) and SIMD (vector processors/GPU).

- Data Dependency:
  - Instruction j depends on instruction i if j uses the result of i.
  - Transitive dependencies: If i → j and j → k, then i → k.

- Pipeline and Stalls:
  - Data dependencies introduce potential hazards, causing pipeline stalls.

### Name Dependence

- Antidependence: Instruction j writes to a register or memory location that instruction i reads.
  - This requires ordering (i before j).

- Output Dependence: Both instructions i and j write to the same location.
  - Requires ordering between i and j.

- Solution: Register renaming to avoid conflicts in instruction reordering.

### Types of Hazards

1. Data Hazards:
   - RAW (Read After Write): A read instruction depends on the write of a previous instruction.
   - WAW (Write After Write): Two write instructions conflict.
   - WAR (Write After Read): A write instruction conflicts with a read.

2. Control Dependence:
   - Control dependence exists when an instruction's execution depends on the result of a branch.

### Compiler Techniques for Exposing ILP

1. Pipeline Scheduling:
   - Separate dependent instructions with the pipeline latency of the source instruction.

2. Pipeline Stalls:
   - Stalls are introduced when a dependent instruction is not ready for execution, leading to delays.

### Optimization Techniques

#### Loop Unrolling

- Unroll loops to increase parallelism by reducing dependency overhead.

  Example: Unroll by a factor of 4:

  ```assembly
  Loop:
    fld f0, 0(x1)
    fadd.d f4, f0, f2
    fsd f4, 0(x1)
    fld f6, -8(x1)
    fadd.d f8, f6, f2
    fsd f8, -8(x1)
    ...
    addi x1, x1, -32
    bne x1, x2, Loop
  ```

#### Pipeline Scheduling for Unrolled Loops

- The loop schedule is re-optimized to reduce the number of cycles required per element.

### Branch Prediction

- 2-bit Predictor:
  - Predicts if a branch is taken or not.
  - Adjusts the prediction if wrong twice consecutively.

- Tournament Predictor:
  - Combines multiple predictors to choose the best one based on branch history.

- Branch-Target Buffer:
  - Improves branch prediction by storing target addresses.

### Dynamic Scheduling and Tomasulo’s Algorithm

- Dynamic Scheduling:
  - Out-of-order execution and completion of instructions to reduce stalls.
  - Tomasulo’s Algorithm: Renames registers, buffers operands, and issues instructions out of order.

  Steps:
  1. Issue: Fetch instruction and assign to reservation station.
  2. Execute: Execute when operands are available.
  3. Write Result: Write result to the common data bus.

- Register Renaming:
  - To avoid name dependences (antidependence and output dependence), registers are renamed dynamically.

### Speculation and Recovery

- Hardware-Based Speculation:
  - Instructions are executed based on predicted execution paths.
  - Commit: Instruction results are committed only if predictions are correct.

- Reorder Buffer (ROB):
  - Holds instruction results until they are ready to be committed.
  - Issue: Allocate reservation stations (RS) and read operands.
  - Execute: Perform execution once operands are ready.
  - Commit: Commit results after execution completes.

### VLIW (Very Long Instruction Word)

- VLIW Processors:
  - Package multiple independent operations into one instruction.
  - Advantages: Higher throughput, especially when parallelism exists in code.
  - Disadvantages: Statically finding parallelism and code size overhead.

### Advanced Techniques for Instruction Delivery

- Integrated Instruction Fetch Unit:
  - Combines branch prediction, instruction prefetching, and memory buffering to optimize instruction delivery.

- Return Address Predictor:
  - Specifically used to optimize function return addresses in branch prediction.

### Energy Efficiency

- Speculation and energy efficiency: Only beneficial when speculation leads to significant performance improvements.

### Fallacies and Pitfalls

1. Processor Performance:
   - Faster clock ≠ Faster performance: Pentium 4 had a higher clock but lower performance compared to more efficient designs like the i7.

2. ILP Misconceptions:
   - There is not always a large amount of ILP available, even with advanced techniques.
