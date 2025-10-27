---
title: Introduction to Operating Systems
sidebar:
  order: 1
  label: Introduction
slug: operating-systems/introduction
prev: false
next: true
---

A program that acts as an intermediary between a user of a computer and the computer hardware. Works as a resource allocator. Provides an interface for application software to work. Manages processes, memory, files, and devices.

### System programs

Ships with an OS, but not part of the kernal.

### Dual-mode

The operating system runs on either kernal or user mode. Can be switched programmatically. Mode bit provided by the hardware is used to store the mode.

### System call

Aka. syscall. An interface that allows user-level programs to request services from the operating system kernel. Runs in kernal mode. Provides a controlled entry point into the kernel. Essential for maintaining security and stability of the system by mediating access to hardware resources.

Common categories of system calls include:

- Process control (create, terminate, wait, allocate memory)
- File management (create, open, close, read, write files)
- Device management (request/release devices, read/write to devices)
- Information maintenance (get/set time, system data)
- Communication (create/delete connections, send/receive messages)
- Protection (set/get permissions)

When a user program performs a system call, it places the system call arguments in predefined registers (or sometimes the user stack), then executes a special instruction (like syscall or int 0x80) to switch to kernel mode. The kernel then copies the arguments to the kernel stack as needed.

As system calls are different between different operating systems, they are not interchangeable. That's why application programs are platform-specific.

### Application Binary Interface

Aka. ABI. Defines the low-level interface between an application program and the operating system or hardware. Specifies details such as data type sizes, memory layout, calling conventions, and system call mechanisms. The ABI ensures that compiled programs can run correctly on a given system, regardless of the compiler used, as long as they target the same ABI.

An ABI includes:

- How functions are called (calling conventions)
- How arguments are passed (registers or stack)
- How return values are delivered
- Binary format of executable files
- System call numbers and invocation methods
- Alignment and padding of data structures

A stable ABI allows software compiled at different times, with different tools to work together on the same platform.

:::note[ABI vs ISA]

ISA: Defines the set of machine instructions that a processor can execute, along with the hardware-level details such as registers, instruction formats, and addressing modes. A specification for the CPU itself, describing how software can control the hardware.

ABI: Builds on top of the ISA. Defines how compiled programs interact with the operating system and hardware at the binary level. It includes calling conventions, system call mechanisms, data type sizes, and binary formats. The ABI ensures that binaries produced by different compilers or languages can run on the same system and interact correctly.

:::

## Goals

- Execute user programs and make solving user problems easier
- Make the computer system convenient to use
- Use the computer hardware in an efficient manner

### Bootstrap program

Simple code to initialize the system, load the kernel.

### System daemon

A background process that is launched during system startup or after the kernel is loaded. Runs independently of user sessions. Provide essential services required for the operating system to function smoothly.

Examples are processes that handle logging, scheduling tasks, managing network connections, and responding to hardware events.

Names of system daemons are usually suffixed by "d", such as `sshd`, `cron`, or `systemd`.

### Multiprogramming

A subset of total jobs in system is kept in memory. One job selected and run via job scheduling. When job has to wait (for I/O for example), OS switches to another job.

### Multitasking

Aka. time sharing. A logical extension of Batch systems. the CPU switches jobs very frequently that users can interact with each job while it is running. Response time should be less than a second. Each user has at least one process running. If several jobs ready to run at the same time, they must be scheduled. If processes don’t fit in memory, they must be swapped to and from memory. Virtual memory allows execution of processes not completely in memory.
