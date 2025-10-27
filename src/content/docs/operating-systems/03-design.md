---
title: Design
sidebar:
  order: 2
---


### Policy

Defines what needs to be done. 

### Mechanism

Defines how something is done at the low-level implementation.


Examples:

- CPU Scheduling
  - Mechanism: The context-switch routine that saves/restores registers.
  - Policy: Which process to run next (FCFS, Round Robin, Priority).
- Memory Management
  - Mechanism: Page table structures, page replacement hooks.
  - Policy: Which page replacement strategy (LRU, FIFO).
- I/O
  - Mechanism: Device driver interface to queues requests.
  - Policy: Which request to serve first (SCAN, SSTF).-

## Examples

### Minix

Uses a microkernel.

### Mach

Uses a microkernel.

### Windows

Uses a hybrid kernel. Mostly monolithic for performance. Windows keeps drivers, file systems, networking, and the graphics subsystem in kernel mode for performance.

The microkernel idea is reflected in the HAL, the small NT Kernel core, and user-mode subsystems. But the rest (I/O, drivers, GUI) is kept in kernel space, making it a hybrid.

### Android

Developed by Open Handset Alliance (mostly Google). Open Source.


Based on Linux kernel but modified:
- Provides process, memory, device-driver management
- Adds power management

Apps are written in Kotlin (previously Java) and Android API. The class files are compiled to Java bytecode and then translated to `.dex` bytecode, which stands for Dalvik Executable. Android previously used Dalvik Virtual Machine. Dalvik used JIT compilation. For performance and DX reasons, Android moved to Android Runtime (ART). Android Runtime (ART) is an ahead-of-time (AOT) compiler that compiles `.dex` files to `.oat` files.

Native libraries include frameworks for web browser (webkit), database (SQLite), multimedia, smaller libc.
