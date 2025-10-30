---
title: Architecture
sidebar:
  order: 3
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

Different fundamental architectures are available. The choice between these architectures depends on:

- specific application requirements
- performance
- cost
- power consumption
- ease of programming

## Von Neumann Architecture

Proposed by mathematician John von Neumann in the 1940s. Both program instructions and data share the same memory and bus system. Uses a single bus between CPU and memory. Sequential exeuction of instructions. Used commonly on general-purpose computers nowadays.

Advantages:

- Simpler design and lower manufacturing costs
- Flexible memory allocation between program and data
- Easier programming model

Disadvantages:

- Von Neumann Bottleneck
- Memory contention between instruction and data access
- Potential security risks as program instructions can be modified as data

### Von Neumann Bottleneck

Performance limitation as the CPU can't simultaneously access instructions and data. An inevitable disadvantage of Von Neumann architecture.

## Harvard Architecture

Originated from the Harvard Mark I computer. Uses physically separate storage and signal pathways for instructions and data. CPU can access instructions and data simultaneously. Can use different memory technologies optimized for specific purposes. Commonly used in microcontrollers, digital signal processors (DSPs), and many embedded systems where performance and security are critical.

Advantages:

- Eliminates the Von Neumann bottleneck
- Increased performance through parallel access
- Better security as program code is protected from accidental or malicious modification
- Can optimize each memory system for its specific purpose

Disadvantages:

- More complex design and higher manufacturing costs
- Fixed memory allocation between program and data
- More complex programming model

## Modified Harvard Architecture

Many modern processors implement a Modified Harvard Architecture, which maintains separate instruction and data caches (like Harvard) but uses a unified main memory (like Von Neumann). Offers performance benefits of Harvard architecture and flexibility of Von Neumann systems.

Used in many ARM processors, modern x86 processors from Intel and AMD, and digital signal processors (DSPs).
