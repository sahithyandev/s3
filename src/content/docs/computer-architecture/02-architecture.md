---
title: Architecture
sidebar:
  order: 2
slug: computer-architecture/architecture
prev: true
next: true
---

Computer architecture defines how a computer system is designed and what components it includes.

## Properties

- Length of microprocessors’ data word
- Speed of instruction execution
- Instruction set – x86, ARM, SPARC, PIC, RISCV
- CPU architecture – RISC vs. CISC
- Size of direct addressable memory
- Number & types of registers
- Support circuits for performance
- Compatibility with existing software & hardware development systems – IBM System/370

## Fundamental Architectural Models

### Von Neumann Architecture

The Von Neumann Architecture, proposed by mathematician John von Neumann in the 1940s, features a design where both program instructions and data share the same memory and bus system.

#### Key Characteristics:

- **Shared Memory Space**: Instructions and data are stored in the same memory unit
- **Single Bus System**: One communication pathway between CPU and memory
- **Sequential Processing**: Instructions are executed one after another
- **Stored Program Concept**: Programs are stored in memory alongside data

#### Advantages:
- Simpler design and lower manufacturing costs
- Flexible memory allocation between program and data
- Easier programming model

#### Disadvantages:
- **Von Neumann Bottleneck**: Performance limitation as the CPU can't simultaneously access instructions and data
- Memory contention between instruction and data access
- Potential security risks as program instructions can be modified as data

Most general-purpose computers today (including personal computers and servers) follow the Von Neumann architecture.

### Harvard Architecture

Originated from the Harvard Mark I computer. Employs physically separate storage and signal pathways for instructions and data.

#### Key Characteristics:

- **Separate Memory Units**: Different memory spaces for instructions and data
- **Dual Bus System**: Separate buses for instruction and data memory
- **Parallel Access**: CPU can access instructions and data simultaneously
- **Specialized Memory Types**: Can use different memory technologies optimized for specific purposes

#### Advantages:
- Eliminates the Von Neumann bottleneck
- Increased performance through parallel access
- Better security as program code is protected from accidental or malicious modification
- Can optimize each memory system for its specific purpose

#### Disadvantages:
- More complex design and higher manufacturing costs
- Fixed memory allocation between program and data
- More complex programming model

Harvard architecture is commonly found in microcontrollers, digital signal processors (DSPs), and many embedded systems where performance and security are critical.

### Modified Harvard Architecture

Many modern processors implement a Modified Harvard Architecture, which maintains separate instruction and data caches (like Harvard) but uses a unified main memory (like Von Neumann). This hybrid approach offers the performance benefits of Harvard architecture while maintaining the flexibility of Von Neumann systems.

Examples include many ARM processors, modern x86 processors from Intel and AMD, and digital signal processors (DSPs).

The choice between these architectures depends on specific application requirements, balancing factors like performance, cost, power consumption, and ease of programming.
