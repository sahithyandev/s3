---
title: Instruction Set Architecture
sidebar:
  order: 2
slug: computer-architecture/instruction-set-architecture
prev: true
next: true
---

A layer of abstraction. An interface between a computer's hardware and software.

Defines:
- the set of instructions that a processor can execute, along with the formats of those instructions
- the supported data types, registers, memory addressing modes
- how the processor's resources are accessed and controlled.
## Types
### RISC vs. CISC

ISAs are commonly categorized into 2 main types based on the number of supported instructions.

#### RISC

Short for Reduced Instruction Set Computer.

Features:
- A small set of simple, fixed-length instructions
- Load-store architecture (only load and store instructions access memory)
- More general-purpose registers
- Emphasis on optimization for pipelining
- Simpler decoding logic

Examples:
- ARM (used in most smartphones and tablets)
- MIPS (used in embedded systems and older gaming consoles)
- [RISC-V](/computer-architecture/risc-v-architecture) (an open-source ISA gaining popularity)
- PowerPC (used in older Macs and game consoles)

:::note

RISC-V is gaining popularity for several reasons:

1. Open source & free
2. Modularity and extensibility   
  RISC-V has a small base ISA with optional standard extensions, enabling customization for specific applications while maintaining compatibility.
3. Academic and industry support   
  It originated at UC Berkeley and now has broad backing from companies like Western Digital, NVIDIA, Google, and Alibaba.

4. Suitability for modern needs   
  Its clean-slate design avoids legacy constraints and is well-suited for everything from tiny IoT devices to high-performance computing.

5. Security and transparency   
  The open specification allows for community-reviewed security implementations and avoids proprietary "black box" concerns.

:::

#### CISC

Short for Complex Instruction Set Computer.

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

### Modular vs Incremental

#### Incremental

An ISA is incremental if it adds new instructions and features to an existing ISA without breaking backward compatibility. Features are linearly enabled.

#### Modular

An ISA is modular if it is built as separate, self-contained pieces (modules) that can be combined in different ways. Any combination of modules can be enabled. 

## ISA Families

ISAs with similar characteristics are grouped into families.

The x86 and x64 families prioritized backward compatibility to protect software investments and ensure a smooth upgrade path for users. This led to engineering trade-offs: while the ISA is powerful and flexible, it is also complex and harder to optimize compared to newer, cleaner designs like RISC-V or ARM. The decision to extend rather than replace the ISA allowed the PC ecosystem to evolve without breaking existing applications, which was crucial for widespread adoption.

Today, x86 and x64 remain the standard for desktop and server computing, while RISC architectures dominate mobile and embedded spaces.

### x86

Originated with Intel's 8086 processor in 1978, which introduced a 16-bit instruction set. Over time, the architecture evolved through the 80286, 80386 (which added 32-bit support), and later processors, becoming the dominant ISA for personal computers. The term "x86" refers to the is lineage of processors and their compatible instruction sets.

- History: The original x86 ISA was designed for backward compatibility, allowing newer CPUs to run older software. This led to a complex instruction set with many legacy features.
- Engineering Decisions: The focus was on supporting a wide range of instructions, including those for direct memory access and complex operations, which simplified programming but increased hardware complexity.
- Pros:
  - Extensive software compatibility
  - Rich set of instructions
  - Mature ecosystem
- Cons:
  - Complex decoding logic
  - Limited to 4 GB of addressable memory (32-bit)
  - Legacy baggage makes innovation harder

### x64 

Aka. x86-64. Introduced by AMD in the late 1990s. Can support more memory (16 exabytes theoretically) compared to x86. USes 64-bit registers. Adopted by Intel as "Intel 64".

- Engineering Decisions: Instead of designing a new ISA from scratch, AMD extended the existing x86 architecture to maintain backward compatibility with 32-bit software. This allowed a smooth transition for users and developers.
- Pros:
  - Vastly increased memory addressing capability
  - More general-purpose registers (making code generation more efficient)
  - Improved performance for modern workloads
  - Backward compatibility with 32-bit applications
- Cons:
  - Retains much of the complexity and legacy features of x86
  - Larger instructions and binaries compared to pure 32-bit
  - Still more complex than RISC architectures

### ARM

By ARM Holdings (UK). Used in mobile phones, tablets, embedded devices, Apple M-series Macs. ARMv7 (32-bit), ARMv8+ (64-bit). Follows RISC architecture. Smaller, more power-efficient.

Has subfamilies:
- Cortex-A (application processors)
- Cortex-M (microcontrollers)
- Cortex-R (real-time systems)

### RISC-V

Newer, open-source ISA (anyone can implement it). Gaining traction in research, IoT, and now even mainstream chips. Very modular: base ISA + extensions (M, A, F, D, V, etc.). Competes with ARM in embedded space. More on [RISC-V](/computer-architecture/risc-v-architecture) is explained in detail in its own page.
