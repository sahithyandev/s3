---
title: Programming Models
sidebar:
  order: 17
slug: computer-architecture/programming-models
prev: true
next: true
---

- Definition: A programming model defines how instructions are executed by a computer system and how processes or tasks are managed.
- Key Concepts:
  - Single Program: A simple, linear flow of instructions executed by a processor.
  - Branching: Introduces decision points, allowing different instructions to be executed based on conditions.
  - Sub-routines/Function Calls: Enables modularization of code for better readability and reusability.
  - Interrupt-Driven Programs: Programs that respond to external signals through interrupts, requiring an Interrupt Service Routine (ISR).
  - Context Switch: The processor's ability to switch between different processes or threads.

### Multi-threaded and Multi-core Programming

- Multi-threaded Programs: Programs that execute multiple threads of control within a single program, improving efficiency and performance.
- Memory Safety: Ensuring that a program does not access unauthorized memory regions, preventing data corruption and system crashes.
- Multi-core Programming:
  - Homogeneous Multi-core Processors: Multiple identical cores, requiring synchronization and load balancing for optimal performance.
  - Heterogeneous Systems (GPU-CPU Co-processing): Combining CPUs and GPUs for parallel processing, offering significant performance improvements for specific workloads (e.g., graphics rendering, machine learning).
  - System On Chip (SoC): An integrated circuit that combines all components of a computer system into a single chip, often used in embedded systems and mobile devices.
  - Virtualization Architectures: Supports multiple virtual machines (VMs) running on the same hardware, enabling efficient resource sharing and isolation.

### Memory Safety

- What is Memory Safety?: Refers to mechanisms that prevent a program from accessing memory regions that it is not authorized to access.
- Issues:
  - Unauthorized access can corrupt programs and tamper with data.

- Protection: Managed by the operating system through techniques like virtual memory and page protection.
- Virtual Memory: Virtual memory provides an abstraction of physical memory, allowing programs to use more memory than is physically available by swapping data between RAM and disk storage.

### Memory Segmentation and Paging (Virtual Memory)

- Segmentation: Divides memory into segments based on logical divisions (e.g., code, data, stack).
- Paging: Divides memory into fixed-size pages, improving memory management and allocation.
  - Advantages:
    - Efficient memory use.
    - Security (each program can be isolated from others by mapping to different virtual pages).

- Caching Mechanism: Used between main memory and hard disk to speed up access and improve system performance.
- Security Mechanism: Helps prevent unauthorized memory access, ensuring program integrity.

### Kernel and System Management

- Role of the Kernel: The kernel is the core component of an operating system that manages system resources and facilitates communication between hardware and software.
- System On Chip (SoC) Designs: In SoC architectures, the kernel manages the integration of processors, memory, and peripherals on a single chip.
