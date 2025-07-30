---
title: Kernel
sidebar:
  order: 2
---

The one program running at all times on the computer. Core of an OS.

## Different architectures



### Monolithic

The entire operating system runs in kernel space. All system services, device drivers, file systems, and memory management operate at the privileged kernel level.

Pros:
- Better performance due to direct function calls between components
- Simpler design conceptually
- No message passing overhead between components
- Direct hardware access for all system components

Cons:
- Less stability - a bug in any driver can crash the entire system
- Larger memory footprint
- More complex codebase to maintain
- Security concerns because of full privileges for the whole code
- More difficult to extend without recompilation

Examples:
- Linux
- Traditional UNIX systems
- MS-DOS

### Microkernel

Only the most basic services run in kernel space, while most system services operate in user space as separate processes. The kernel handles only essential functions like inter-process communication (IPC), basic memory management, and CPU scheduling.

Pros:
- Better stability - a driver crash doesn't bring down the entire system
- More secure because less code runs with full privileges
- Easier to extend and maintain
- More modular design
- Better isolation between components

Cons:
- Performance overhead due to frequent context switching
- More complex design from a communication perspective
- Message passing between components adds latency
- May be more difficult to implement efficiently
- Potential for higher resource usage due to multiple processes

Examples:
- MINIX
- QNX
- L4 kernel family

### Hybrid Kernel

Combines elements of both monolithic and microkernel designs. Some services run in kernel space for performance. Others run in user space for better stability and security. This approach attempts to balance the advantages of both architectures.

Pros:
- Better performance than pure microkernels
- More stable than pure monolithic kernels
- Flexibility in determining what runs in kernel vs user space
- Good compromise between security and performance
- Can be tailored to specific system requirements

Cons:
- More complex design decisions about what belongs in kernel space
- May still suffer from some stability issues with kernel components
- Potential inconsistency in system architecture
- Can be harder to maintain clear boundaries between subsystems
- May inherit drawbacks from both approaches if poorly implemented

Example:
- Windows (NT kernel is technically a hybrid but leans heavily monolithic)
