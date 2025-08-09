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
