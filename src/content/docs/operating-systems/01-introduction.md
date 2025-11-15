---
title: Introduction to Operating Systems
sidebar:
  order: 1
  label: Introduction
slug: operating-systems/introduction
prev: false
next: true
---

Operating system is a program that acts as an intermediary between the user and hardware. Works as a resource allocator. Provides a user interface. Provides an abstraction for application software to work. Manages processes, memory, files, and devices. Ensures efficiency, security, and convenience.

### System Bus

Shared communication backbone that connects the CPU, memory, and I/O devices so they can exchange data.

All devices share main memory. Devices use local buffers to store data temporarily.


## 6. Why Applications Are OS-Specific

### 6.1 Reasons

- Different OSes have different system calls.
- Different binary formats and ABIs.

### 6.2 Writing Cross-Platform Apps

- Use JVM, Python, etc.
- Or compile separately for each OS.

### Multiprogramming

A subset of total jobs in system is kept in memory. One job selected and run via job scheduling. When job has to wait (for I/O for example), OS switches to another job.

### Multitasking

Aka. time sharing. A logical extension of Batch systems. the CPU switches jobs very frequently that users can interact with each job while it is running. Response time should be less than a second. Each user has at least one process running. If several jobs ready to run at the same time, they must be scheduled. If processes don’t fit in memory, they must be swapped to and from memory. Virtual memory allows execution of processes not completely in memory.

## Dual Mode

When an OS has 2 modes: user mode and kernal mode. Runs in either one at a time. Mode bit represents the current mode.

Can be switched programmatically. A protection mechanism. Mode bit provided by the hardware is used to store the mode.

### User Mode

Applications run in user mode.

### Kernel Mode

Core of the OS runs in kernal mode. Can execute privileged instructions.

Transition to kernel mode happens via [system calls](/operating-systems/kernal#system-calls).


## Examples

### Minix

Uses a microkernel. Initially properietary. Now free and open source.

### Machintosh

Uses a microkernel. Properietary and owned by Apple.

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
