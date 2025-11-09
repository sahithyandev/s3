---
title: Compiler Optimizations
sidebar:
  order: 14
slug: computer-architecture/compiler-optimizations
prev: true
next: true
---

Optimization techniques are employed to improve the translated code in terms of performance.

## Compiler Optimization flags

Command-line options provided by compilers to control the optimization process of transforming source code into machine code. These flags instruct the compiler on how aggressively it should optimise, and in what manner, to potentially achieve better runtime performance, reduced code size, or a balance between the two.

For example, `gcc` provides a variety of optimization flags that can be used to control the optimization process. Some of the most commonly used flags include:

- <span class="font-mono">O0</span>: No optimization. Default. Fastest. Generates the most straightforward, often least performant, machine code.
- <span class="font-mono">O1</span>: Basic optimization. Reduces code size, execution time. Does not take an excessive amount of compilation time.
- <span class="font-mono">O2</span>: Further optimization. Includes almost all recommended optimizations that do not involve a space-speed trade-off.
- <span class="font-mono">O3</span>: Full optimization. Including those that might increase the generated code size.
- <span class="font-mono">Os</span>: Optimise for size. Prioritises reducing the code size over execution speed.

## Instruction Compression

In many modern architectures, including RISC designs, there's often a fixed instruction length, ensuring simplicity in fetching and decoding operations. However, not all instructions need the full width provided, leading to potential inefficiencies in memory usage.

Instruction compression aims to address this by:

- Identifying Common Patterns  
  By analysing frequently used instruction sequences or patterns, these can be represented in a compressed form.
- Variable-length Encoding  
  Instead of having a fixed length for every instruction, compressed instructions might use variable-length encoding, where frequent instructions are represented using fewer bits.
- Decompression Mechanism  
  For execution, compressed instructions need to be decompressed. This decompression happens either in hardware (before the instruction is executed) or via specialised software routines.

## Instruction level optimization

The process of enhancing the efficiency and performance of individual instructions in a program, often within the context of a particular ISA. Directly impacts the speed, power consumption, and overall efficiency of code execution on a hardware platform.

Multiple techniques can be used for this.

### Loop Unrolling

The process of increasing the loop body's size by replicating its content multiple times, reducing the overhead of loop control.

Example: For a simple loop iterating four times to add elements of two arrays, instead of checking the loop condition four times, loop unrolling can make it so the condition is checked once, and the addition operation is executed four times consecutively.

### Function Inlining

The process of replacing a function call with the actual body of the function, thereby eliminating the overhead associated with the call. Instead of jumping to a different location in memory each time the function is called, the instructions are directly placed at the call site.

Avoids the overhead of function calling. Causes duplicated code, and bigger executable file.

### Precompute values

Precomputing involves evaluating expressions during the compilation process and replacing them with their computed results in the generated code. This is especially beneficial when dealing with invariant values inside loops or frequently called functions.

### Strip Mining

A technique used to optimize loops by dividing them into smaller, more manageable chunks. Large loops are divided into smaller loops, each of which operates on a smaller subset of data. Improves cache locality and reduce the number of iterations required to complete the loop.
