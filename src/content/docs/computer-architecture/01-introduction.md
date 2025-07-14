---
title: Introduction to Computer Architecture
sidebar:
  order: 1
  label: Introduction
slug: computer-architecture/introduction
prev: false
next: true
---

Computer architecture is the design and organization of a computer system. It involves the conceptual structure and functional behavior of a computer system at a level that can be used to understand how the computer works.

## Instruction Set Architecture (ISA)

An instruction set architecture (ISA) is the interface between a computer's hardware and its software. It defines the set of instructions that a processor can execute, along with the formats of those instructions, the supported data types, registers, memory addressing modes, and how the processor's resources are accessed and controlled.

The instruction set serves as a contract between hardware and software, allowing software developers to write programs without needing to understand the intricate details of the underlying hardware implementation.

### RISC vs. CISC

Instruction set architectures are commonly categorized into two main types based on the number of supported instructions.

#### RISC (Reduced Instruction Set Computer)

Features:
- A small set of simple, fixed-length instructions
- Load-store architecture (only load and store instructions access memory)
- More general-purpose registers
- Emphasis on optimization for pipelining
- Simpler decoding logic

Examples:
- ARM (used in most smartphones and tablets)
- MIPS (used in embedded systems and older gaming consoles)
- RISC-V (an open-source ISA gaining popularity)
- PowerPC (used in older Macs and game consoles)

:::note

RISC-V is gaining popularity for several reasons:

1. **Open source nature**: Unlike proprietary ISAs, RISC-V is completely open and royalty-free, allowing anyone to implement it without licensing fees.

2. **Modularity and extensibility**: RISC-V has a small base ISA with optional standard extensions, enabling customization for specific applications while maintaining compatibility.

3. **Academic and industry support**: It originated at UC Berkeley and now has broad backing from companies like Western Digital, NVIDIA, Google, and Alibaba.

4. **Suitability for modern needs**: Its clean-slate design avoids legacy constraints and is well-suited for everything from tiny IoT devices to high-performance computing.

5. **Security and transparency**: The open specification allows for community-reviewed security implementations and avoids proprietary "black box" concerns.

:::

#### CISC (Complex Instruction Set Computer)

Features:
- Many specialized, variable-length instructions
- Instructions that can perform complex operations in a single step
- Memory-to-memory operations
- Fewer registers but more addressing modes
- More complex decoding logic

Examples of CISC architectures:
- x86 and x86-64 (used in most desktop and laptop computers)
- VAX (historically important)
- Motorola 68000 series (used in early Macs and Amigas)
