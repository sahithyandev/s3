---
title: Threads
sidebar:
  order: 8
slug: operating-systems/threads
prev: true
next: true
---

A thread is the basic unit of CPU utilization, consisting of a program counter, a stack, and a set of registers. Threads are sometimes called lightweight processes because they have some of the properties of processes but are more efficient to create and manage.

### Single vs Multi-Threaded Processes

A traditional process has a single thread of control, while a multi-threaded process has multiple threads of control within the same address space.

### Thread Components

Each thread includes:

- Thread ID
- Program counter
- Register set
- Stack

Threads within the same process share:

- Code section
- Data section
- OS resources such as open files and signals

### Benefits of Multithreading

1. **Responsiveness**: Multithreading can allow an application to remain responsive to user input while performing intensive operations.
2. **Resource sharing**: Threads share the memory and resources of the process they belong to, making communication more efficient.
3. **Economy**: Creating and managing threads requires fewer system resources than creating processes.
4. **Scalability**: Multithreaded applications can take advantage of multiprocessor architectures more effectively.

### Thread Models

#### User-Level Threads (ULT)

- Managed by user-level thread libraries (POSIX Pthreads, Win32 threads, Java threads)
- The kernel is not aware of the existence of these threads
- Fast to create and manage, as no kernel intervention is required
- However, if one ULT performs a blocking system call, the entire process blocks

#### Kernel-Level Threads (KLT)

- Supported and managed directly by the operating system
- Creation and management are more expensive than ULTs
- If one thread blocks, another thread can still be scheduled
- Provides true parallelism on multiprocessor systems

#### Hybrid Models

- Combines user-level threads with kernel-level threads
- Multiple user-level threads mapped to a smaller or equal number of kernel threads
- Examples: Many-to-One, One-to-One, Many-to-Many models

### Thread Synchronization

Since threads share resources, synchronization is critical:

1. Race Conditions: Occur when multiple threads access shared data concurrently, with at least one thread modifying the data.
2. Critical Section: A code segment where shared resources are accessed.
3. Mutual Exclusion: Ensuring only one thread executes in the critical section at a time.

#### Synchronization Mechanisms

1. Mutex Locks: Basic synchronization tool ensuring mutual exclusion
2. Semaphores: More sophisticated synchronization constructs that can also manage resource allocation
3. Monitors: High-level synchronization constructs that encapsulate both data and operations
4. Condition Variables: Allow threads to wait for specific conditions to be met

### Thread Scheduling

Scheduling threads introduces new considerations beyond process scheduling:

1. Contention Scope: How threads compete for CPU time
   - Process-contention scope (PCS): Threads compete within the process
   - System-contention scope (SCS): Threads compete system-wide

2. Allocation Domain: Where threads can be scheduled
   - Local scheduling: Threads are bound to specific processors
   - Global scheduling: Threads can be scheduled on any available processor

### Thread Implementation Challenges

1. Thread Local Storage: Providing per-thread data storage
2. Thread Cancellation: Safely terminating threads
3. Signal Handling: Determining which thread should handle signals
4. Thread Pooling: Pre-creating threads to reduce overhead
5. Thread Priority Inversion: Lower priority threads holding resources needed by higher priority threads

### Thread Libraries

1. POSIX Threads (Pthreads): IEEE standard, widely used in UNIX systems
2. Win32 Threads: Native Windows threading API
3. Java Threads: Part of the Java language, with built-in synchronization support

### Emerging Concepts

1. Fibers: User-mode scheduled threads with cooperative multitasking
2. Green Threads: User-level threads scheduled by a virtual machine
3. Coroutines: Computer program components that generalize subroutines for non-preemptive multitasking
