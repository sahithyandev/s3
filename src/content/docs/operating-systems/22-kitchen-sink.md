---
title: Kitchen Sink
sidebar:
  order: 21
slug: operating-systems/kitchen-sink
prev: true
next: false
---

## Protection

Controlling access of system resources to processes and users.

## Security

Protecting against internal and external. Uses user IDs, group IDs, access control mechanisms, and privilege escalation.

## Virtualization

Allows multiple guest OSes to run on top of a host OS. Achieved using a Virtual Machine Manager (VMM). Enables testing, isolation, and server consolidation.

## Emulation

Allows running binaries compiled for different CPU architectures on the host's CPU.

## Distributed Systems

Multiple networked systems, possibly heterogeneous, working together.

---

## 5. Operating-System Operations

### 5.1 System Boot

- **Bootstrap program** runs at power-on.
- Loads the kernel into memory.
- Starts system services (daemons).

## 8. File-System Management

### 8.1 File Abstraction

- OS gives a logical view of storage using **files**.
- Directories group files.

### 8.2 OS Responsibilities

- Create, delete files and directories.
- Allow file access and manipulation.
- Manage storage mapping.
- Maintain backups.

## 11. I/O Subsystem

Responsibilities:

- Buffering, caching, spooling.
- Provide uniform interface to hardware.
- Implement device drivers.

### 1.2 Services for Users

- **User Interface (UI)**
  CLI, GUI, touch-based, or batch. Allows interaction with the OS.

- **Program Execution**
  Load → run → terminate a program. Handles normal and abnormal exits.

- **I/O Operations**
  Provides access to I/O devices and files.

- **File-System Manipulation**
  Operations such as create, delete, open, close, read, write, search, list, change permissions.

- **Communication**
  - **Message passing:** Data exchanged via OS-managed messages.
  - **Shared memory:** Processes share a memory region.

- **Error Detection**
  Detects errors in CPU, memory, I/O devices, or user programs. Ensures consistent operation.

### 1.3 Services for System Efficiency

- **Resource Allocation**
  CPU scheduling, memory allocation, file access, device management.

- **Logging (Accounting)**
  Tracks resource usage.

- **Protection and Security**
  Controls access rights, ensures processes do not interfere, uses authentication.

### 1.4 Summary

Services ensure usability, performance, and safety of the system.

## 4. System Services (System Programs)

### 4.2 Categories

- **File Management** – Copy, rename, dump, list.
- **Status Information** – Date/time, memory, users, logs.
- **Program Development Tools** – Compilers, assemblers, debuggers.
- **Program Execution Tools** – Loaders, linkers.
- **Communication Tools** – Remote login, email, file transfer.
- **Background Services** – Daemons/services (disk check, scheduler).
- **Application Programs** – User-level programs.

## 5. Linkers and Loaders

Transforms code into an executable and loads it for execution.

### 5.2 Process

- Compiler → Object File
- **Linker** combines object files + libraries → Executable
- **Loader** places executable into memory, relocates addresses, starts execution
- Modern OS uses **dynamic linking** (DLLs, shared libraries).


## 9. Building and Booting an OS

### 9.1 Booting Process

- System powers on → starts execution at fixed memory location.
- **Bootstrap loader (BIOS/UEFI)** loads OS kernel.
- GRUB allows multi-kernel boot options.
- Kernel loads into memory and starts running.

## 10. Operating System Debugging and Performance

### 10.1 Debugging

- Uses logs, core dumps, crash dumps.

### 10.2 Performance Tuning

- Remove bottlenecks.
- Tools: `top`, Task Manager.

### 10.3 Tracing

- `strace`, `gdb`, `perf`, `tcpdump`.

### 10.4 BPF/BCC Tools

- Kernel-level tracing and debugging.

## Key Points (Quick Exam Revision)

- OS services → UI, execution, I/O, file, comm., error detection.
- System calls provide interface between user programs and kernel.
- OS structures → monolithic, layered, microkernel, modular, hybrid.
- Booting uses BIOS/UEFI + bootstrap loader + kernel.
- Linker + loader turn code into executable and run it.
- Debugging uses logs, traces, core dumps.

## 1. Operating System Services

### 1.1 Introduction

An operating system provides an environment where programs can run. Its services support both the user and the system itself.

### 1.2 Services for Users

- **User Interface (UI)**
  CLI, GUI, touch-based, or batch. Allows interaction with the OS.

- **Program Execution**
  Load → run → terminate a program. Handles normal and abnormal exits.

- **I/O Operations**
  Provides access to I/O devices and files.

- **File-System Manipulation**
  Operations such as create, delete, open, close, read, write, search, list, change permissions.

- **Communication**
  - **Message passing:** Data exchanged via OS-managed messages.
  - **Shared memory:** Processes share a memory region.

- **Error Detection**
  Detects errors in CPU, memory, I/O devices, or user programs. Ensures consistent operation.

### 1.3 Services for System Efficiency

- **Resource Allocation**
  CPU scheduling, memory allocation, file access, device management.

- **Logging (Accounting)**
  Tracks resource usage.

- **Protection and Security**
  Controls access rights, ensures processes do not interfere, uses authentication.

### 1.4 Summary

Services ensure usability, performance, and safety of the system.

---

## 4. System Services (System Programs)

### 4.1 Introduction

System programs provide a convenient environment for development and execution.

### 4.2 Categories

- **File Management** – Copy, rename, dump, list.
- **Status Information** – Date/time, memory, users, logs.
- **Program Development Tools** – Compilers, assemblers, debuggers.
- **Program Execution Tools** – Loaders, linkers.
- **Communication Tools** – Remote login, email, file transfer.
- **Background Services** – Daemons/services (disk check, scheduler).
- **Application Programs** – User-level programs.

---

## 5. Linkers and Loaders

### 5.1 Introduction

Transforms code into an executable and loads it for execution.

### 5.2 Process

- Compiler → Object File
- **Linker** combines object files + libraries → Executable
- **Loader** places executable into memory, relocates addresses, starts execution
- Modern OS uses **dynamic linking** (DLLs, shared libraries).

---

## 6. Why Applications Are OS-Specific

### 6.1 Reasons

- Different OSes have different system calls.
- Different binary formats and ABIs.

### 6.2 Writing Cross-Platform Apps

- Use JVM, Python, etc.
- Or compile separately for each OS.

---

## 7. Design and Implementation of OS

### 7.1 Goals

- **User goals** – easy to use, fast, safe.
- **System goals** – easy to design, maintain, reliable.

### 7.2 Policy vs Mechanism

- **Policy:** what to do (e.g., interrupt every 100 ms).
- **Mechanism:** how to do it (timer hardware).
- Separation allows flexibility.

### 7.3 Implementation Languages

- Kernel → C and assembly.
- System programs → C, C++, scripting languages.

## 9. Building and Booting an OS

### 9.1 Booting Process

- System powers on → starts execution at fixed memory location.
- **Bootstrap loader (BIOS/UEFI)** loads OS kernel.
- GRUB allows multi-kernel boot options.
- Kernel loads into memory and starts running.

## 10. Operating System Debugging and Performance

### 10.1 Debugging

- Uses logs, core dumps, crash dumps.

### 10.2 Performance Tuning

- Remove bottlenecks.
- Tools: `top`, Task Manager.

### 10.3 Tracing

- `strace`, `gdb`, `perf`, `tcpdump`.

### 10.4 BPF/BCC Tools

- Kernel-level tracing and debugging.

---

## Key Points (Quick Exam Revision)

- OS services → UI, execution, I/O, file, comm., error detection.
- System calls provide interface between user programs and kernel.
- OS structures → monolithic, layered, microkernel, modular, hybrid.
- Booting uses BIOS/UEFI + bootstrap loader + kernel.
- Linker + loader turn code into executable and run it.
- Debugging uses logs, traces, core dumps.

# **Synchronization – Chapter 6 Notes**

# **## 1. Background**

## **### 1.1 Introduction**

When processes run concurrently, they may access shared data.
If this access is not controlled, inconsistent results occur.
This situation is called a **race condition**.

To maintain correctness, the OS must enforce an ordered way for processes to execute code that accesses shared data.

---

## **### 1.2 Race Condition**

A race condition appears when multiple processes modify a shared variable simultaneously.

Example:
Two processes using `next_available_pid` during `fork()`
If both read/update simultaneously → same PID assigned twice.

---

# **## 2. Critical-Section Problem**

## **### 2.1 Definition**

Each process contains a **critical section (CS)**—a part of code where shared data is accessed.

Important structure:

```
entry section
critical section
exit section
remainder section
```

Goal: ensure **only one process** is in its CS at a time.

---

## **### 2.2 Requirements**

Any correct solution must satisfy:

1. **Mutual Exclusion**
   Only one process in the critical section.

2. **Progress**
   If CS is free, a waiting process must be selected without indefinite delay.

3. **Bounded Waiting**
   Limit the number of times others can enter CS after a process requests entry.

No assumptions on relative speeds of processes.

---

# **## 3. Software Solutions**

## **### 3.1 Interrupt Disabling**

- Disable interrupts in entry section → no preemption.
- Works on single-CPU only.
- Not scalable for multiprocessors.

---

## **### 3.2 Software Solution 1 (turn variable)**

Two-process solution using `turn`.

```
while (turn == j);
// critical section
turn = j;
```

Satisfies mutual exclusion.
Fails progress & bounded waiting (one process may force other to wait forever).

---

## **### 3.3 Peterson’s Solution**

Works for **two processes**.
Shared variables:

```
int turn;
boolean flag[2];
```

Algorithm for Pi:

```
flag[i] = true;
turn = j;
while(flag[j] && turn == j);   // waiting

// critical section

flag[i] = false;
```

### **Guarantees**

- Mutual exclusion
- Progress
- Bounded waiting

### **Modern Issue**

May fail due to **instruction reordering** on modern CPUs.

Needs **memory barriers** to ensure correct ordering.

---

# **## 4. Hardware Support**

## **### 4.1 Memory Barriers**

Instruction that forces all previous memory writes to become visible before continuing.
Needed because weakly-ordered architectures reorder operations.

---

## **### 4.2 Hardware Atomic Instructions**

### **Test-and-Set**

Atomic swap of a boolean.

```
while (test_and_set(&lock));   // spin
// critical section
lock = false;
```

Provides mutual exclusion but causes **busy waiting**.

---

### **Compare-and-Swap**

```
compare_and_swap(value, expected, new)
```

Used for lock acquisition:

```
while(compare_and_swap(&lock, 0, 1) != 0);
// critical section
lock = 0;
```

Faster than test-and-set.
Still spins.

---

## **### 4.3 Atomic Variables**

Built using compare-and-swap.
Example: atomic increment.

```
do {
   temp = *v;
} while (temp != compare_and_swap(v, temp, temp+1));
```

---

# **## 5. Mutex Locks**

## **### 5.1 Definition**

Basic lock:

- `acquire()` → enter CS
- `release()` → leave CS

Implemented using hardware atomic instructions.

### **Spinlock**

Mutex lock that busy-waits.

Suitable only for:

- Very short critical sections
- Multiprocessor systems

---

# **## 6. Semaphores**

## **### 6.1 Definition**

Semaphore S is an integer manipulated using:

```
wait(S)   // P()
signal(S) // V()
```

### **Busy-wait version:**

```
wait(S):
   while(S <= 0);
   S--;
```

### **S types**

- **Counting semaphore** – unbounded integer
- **Binary semaphore** – 0 or 1 (same as mutex)

---

## **### 6.2 Using Semaphores**

### **Critical section with semaphores:**

```
wait(mutex);
CS
signal(mutex);
```

### **Synchronizing order of events S1 before S2**

```
semaphore synch = 0;

P1: S1; signal(synch);
P2: wait(synch); S2;
```

---

## **### 6.3 Correct Implementation Without Busy Waiting**

Use **waiting queues**.

Each semaphore has:

```
value
list (process queue)
```

### **wait()**

```
S->value--;
if (S->value < 0) {
   add process to S->list;
   block();
}
```

### **signal()**

```
S->value++;
if (S->value <= 0) {
   remove P from list;
   wakeup(P);
}
```

This prevents busy waiting and is used inside OS kernels.

---

## **### 6.4 Problems with Semaphores**

- Wrong ordering:
  `signal(mutex)` before `wait(mutex)`
- Double wait
- Missing wait/signal pairs

These errors cause deadlocks or inconsistent states.

---

# **## 7. Monitors**

## **### 7.1 Definition**

A monitor is a **high-level synchronization construct**.

Features:

- Shared variables accessible only through monitor procedures
- **Only one process** active in monitor at a time
- Uses **condition variables** for waiting

---

## **### 7.2 Condition Variables**

Operations:

- `x.wait()` → process sleeps
- `x.signal()` → wakes one waiting process

Used to coordinate events inside monitors.

---

## **### 7.3 Example: S1 before S2 using Monitor**

```
monitor M {
    boolean done = false;
    condition x;

    procedure F1() {
        S1;
        done = true;
        x.signal();
    }

    procedure F2() {
        if (!done)
            x.wait();
        S2;
    }
}
```

---

# **## 8. Liveness Issues**

## **### 8.1 Deadlock**

Two processes waiting indefinitely for each other.

Example:

```
P0: wait(S); wait(Q);
P1: wait(Q); wait(S);
```

Mutual waiting → no progress.

---

## **### 8.2 Starvation**

A process never gets the resource it needs.

Occurs due to unfair scheduling.

---

## **### 8.3 Priority Inversion**

Low-priority process holds a lock needed by high-priority process.

### **Solution**

Priority inheritance → temporarily boost low-priority process’s priority.

---

# **## Summary**

- Synchronization ensures correct access to shared data.
- Critical-section problem demands mutual exclusion, progress, and bounded waiting.
- Software-only solutions (Peterson’s) not reliable on modern architectures.
- Hardware instructions enable atomic lock operations.
- Mutex locks and semaphores provide practical synchronization.
- Monitors offer high-level structured synchronization.
- Liveness issues (deadlock, starvation, priority inversion) must be prevented.

---

If you want, next I can generate:
**• Bounded-buffer solved with semaphores**
**• Dining philosopher solution**
**• A single-page formula/cheat sheet**

Below are clean, structured lecture-style notes for **L07 – Mutual Exclusion**, following your required engineering-notes format.
Content is short, direct, exam-ready, and matches your usual OS notes style.

---

# Mutual Exclusion

**What’s this?**
This note explains the mutual exclusion problem, its requirements, incorrect solutions, and the final correct solution: **Dekker’s Algorithm**. Focus is on understanding how to approach exam questions about critical sections.

---

## 1. Introduction

Mutual exclusion ensures that **only one process at a time** executes its **critical section (CS)**.
The aim is to prevent undesirable interleavings of operations on shared data.

---

## 2. The Mutual Exclusion Problem

### 2.1 Definition

The program of each process has:

- **non-critical section (NCS)**
- **critical section (CS)**
- **pre-protocol**: code executed before entering CS
- **post-protocol**: code executed after leaving CS

Only basic load/store atomicity is assumed (no hardware locks).

### 2.2 Requirements

A correct mutual exclusion algorithm must ensure:

1. **Mutual Exclusion**
   No two processes execute CS at the same time.

2. **No Deadlock**
   If both processes want to enter CS, at least one will succeed.

3. **No Starvation**
   A process that starts its pre-protocol must eventually enter CS.

4. **Progress in absence of contention**
   If only one wants to enter, it must enter immediately (no unnecessary blocking).

5. **A halted process in NCS must not block others.**

These form the logical checklist for validating any algorithm.

---

## 3. Mutual Exclusion for Two Processes

Solutions are built using shared variables in memory.
The slides develop the reasoning through **incorrect attempts**, revealing typical concurrency failures.

---

## 4. Attempt 1 – Turn Variable (Strict Alternation)

### 4.1 Idea

A single shared variable `turn` indicates whose turn it is.

### 4.2 Properties

- Mutual exclusion: **satisfied**
- No deadlock: **satisfied**
- No starvation: **satisfied**
- Starvation in absence of contention: **fails**

### 4.3 Issue

If one process stops in NCS, the other may be permanently blocked (strict alternation).
This violates the “make progress when alone” property.

---

## 5. Attempt 2 – Flag Variables (Wrong Position)

### 5.1 Idea

Each process i has `ci`:

- `ci = 0` → wants to enter
- `ci = 1` → not interested

### 5.2 Problem

The flag is set **after** checking the other process.
A race occurs:

P1 sees `c2==1` then sets `c1=0`
P2 sees `c1==1` then sets `c2=0`
Both enter CS → **mutual exclusion fails**.

---

## 6. Attempt 3 – Flag set at Start of Pre-Protocol

### 6.1 Idea

Move `ci=0` earlier, before checking the other’s flag.

### 6.2 Result

- Mutual exclusion: **correct**
- Deadlock: **possible**

### 6.3 Issue

Both processes set their flags to 0 simultaneously → both wait forever → **deadlock**.

---

## 7. Correct Solution – **Dekker’s Algorithm**

### 7.1 Idea

Combine:

- **flags (interest)**
- **turn variable (tie-breaker)**
- **backing off** if the other also wants to enter CS

If both want CS at same time:

- priority is given to the process whose **turn** it is
- the other backs off by setting its flag to 1, waits for its turn, then tries again

### 7.2 Why it works

Dekker satisfies **all four requirements**:

- mutual exclusion
- no deadlock
- no starvation
- progress in absence of contention

It is the **first known software-only** mutual exclusion algorithm.

### 7.3 Behaviour summary

- If both raise flags: check turn
- Process not having the turn withdraws temporarily
- Turn flips on exit from CS
- Guarantees fairness and avoids deadlock

## 8. Key Points Summary

- Mutual exclusion prevents overlapping critical sections.
- Any solution must check mutual exclusion, deadlock freedom, starvation freedom, and progress.
- Attempts 1–3 show typical concurrency pathologies: strict alternation, race conditions, circular waiting.
- Dekker’s Algorithm solves the problem using **flags + turn + back-off**.
- Exam focus: explain properties, identify violations, write short reasoning about correctness.
