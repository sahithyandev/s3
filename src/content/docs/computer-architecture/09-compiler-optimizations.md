---
title: Compiler Optimizations
sidebar:
  order: 9
slug: computer-architecture/compiler-optimizations
prev: true
next: true
---

A compiler’s primary task is to translate high-level programming language code , which is
human readable, into machine code suitable for execution on a specific architecture. But
given the vast array of possible translations, there's often room for improvement in the
translated code. This is where optimization steps in.
In this lab we will be exploring 3 such optimization techniques.
01. Compiler Optimization flags
Compiler optimization flags are command-line options provided by compilers to
control the optimization process of transforming source code into machine code.
These flags instruct the compiler on how aggressively it should optimise, and in what
manner, to potentially achieve better runtime performance, reduced code size, or a
balance between the two.
When using a compiler, such as gcc, a developer can specify different levels and types
of optimizations using these flags. For example:
-O0: No optimization. This level compiles the fastest and generates the most
straightforward, albeit often least performant, machine code.(default)
-O1: Basic optimization. This level reduces code size and execution time
without taking an excessive amount of compilation time.
-O2: Further optimization. It includes almost all recommended optimizations
that do not involve a space-speed trade-off.
-O3: Full optimization. This applies even more optimizations, including those
that might increase the size of the generated code in pursuit of faster
execution.
-Os: Optimise for size. This prioritises reducing the code size over execution
speed.

02. Instruction Compression
In many modern architectures, including RISC (Reduced Instruction Set Computing)
designs, there's often a fixed instruction length, ensuring simplicity in fetching and
decoding operations. However, not all instructions need the full width provided,
leading to potential inefficiencies in memory usage.
Instruction compression aims to address this by:
● Identifying Common Patterns: By analysing frequently used
instruction sequences or patterns, these can be represented in a
compressed form.
● Variable-length Encoding: Instead of having a fixed length for every
instruction, compressed instructions might use variable-length
encoding, where frequent instructions are represented using fewer bits.
● Decompression Mechanism: For execution, compressed instructions
need to be decompressed. This decompression happens either in
hardware (before the instruction is executed) or via specialised
software routines.

03. Instruction level optimization
Instruction-level optimization refers to the process of enhancing the efficiency and
performance of individual instructions in a program, often within the context of a
particular instruction set architecture (ISA). These optimizations are crucial because
they directly impact the speed, power consumption, and overall efficiency of code
execution on a hardware platform.
There are multiple techniques we can use to improve performance using instruction
level optimization. Below are a few such techniques.
● Loop Unrolling
This optimization increases the loop body's size by replicating its content
multiple times, reducing the overhead of loop control.
Ex: For a simple loop iterating four times to add elements of two arrays,
instead of checking the loop condition four times, loop unrolling can make it
so the condition is checked once, and the addition operation is executed four
times consecutively.
● Function Inlining
Function inlining involves replacing a function call with the actual body of the
function, thereby eliminating the overhead associated with the call. In other
words, instead of jumping to a different location in memory each time the
function is called, the instructions are directly present at the call site.
● Precompute values
Precomputing involves evaluating expressions during the compilation process
and replacing them with their computed results in the generated code. This is
especially beneficial when dealing with invariant values inside loops or
frequently called functions.
