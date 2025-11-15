---
title: Kitchen Sink
sidebar:
  order: 23
slug: operating-systems/kitchen-sink
prev: true
next: false
---

## Terminology

### Distributed Systems

Multiple networked systems, possibly heterogeneous, working together.

# Synchronization – Chapter 6 Notes

# ## Background

## ### Introduction

When processes run concurrently, they may access shared data.
If this access is not controlled, inconsistent results occur.
This situation is called a race condition.

To maintain correctness, the OS must enforce an ordered way for processes to execute code that accesses shared data.

## ### Race Condition

A race condition appears when multiple processes modify a shared variable simultaneously.

Example:
Two processes using `next_available_pid` during `fork()`
If both read/update simultaneously → same PID assigned twice.

# ## Critical-Section Problem

## ### Definition

Each process contains a critical section (CS)—a part of code where shared data is accessed.

Important structure:

```
entry section
critical section
exit section
remainder section
```

Goal: ensure only one process is in its CS at a time.

## ### Requirements

Any correct solution must satisfy:

Mutual Exclusion
Only one process in the critical section.

Progress
If CS is free, a waiting process must be selected without indefinite delay.

Bounded Waiting
Limit the number of times others can enter CS after a process requests entry.

No assumptions on relative speeds of processes.

# ## Software Solutions

## ### Interrupt Disabling

- Disable interrupts in entry section → no preemption.
- Works on single-CPU only.
- Not scalable for multiprocessors.

## ### Software Solution 1 (turn variable)

Two-process solution using `turn`.

```
while (turn == j);
// critical section
turn = j;
```

Satisfies mutual exclusion.
Fails progress & bounded waiting (one process may force other to wait forever).

## ### Peterson’s Solution

Works for two processes.
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

### Guarantees

- Mutual exclusion
- Progress
- Bounded waiting

### Modern Issue

May fail due to instruction reordering on modern CPUs.

Needs memory barriers to ensure correct ordering.

# ## Hardware Support

## ### Memory Barriers

Instruction that forces all previous memory writes to become visible before continuing.
Needed because weakly-ordered architectures reorder operations.

## ### Hardware Atomic Instructions

### Test-and-Set

Atomic swap of a boolean.

```
while (test_and_set(&lock));   // spin
// critical section
lock = false;
```

Provides mutual exclusion but causes busy waiting.

### Compare-and-Swap

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

## ### Atomic Variables

Built using compare-and-swap.
Example: atomic increment.

```
do {
   temp = v;
} while (temp != compare_and_swap(v, temp, temp+1));
```

# ## Mutex Locks

## ### Definition

Basic lock:

- `acquire()` → enter CS
- `release()` → leave CS

Implemented using hardware atomic instructions.

### Spinlock

Mutex lock that busy-waits.

Suitable only for:

- Very short critical sections
- Multiprocessor systems

# ## Semaphores

## ### Definition

Semaphore S is an integer manipulated using:

```
wait(S)   // P()
signal(S) // V()
```

### Busy-wait version:

```
wait(S):
   while(S <= 0);
   S--;
```

### S types

- Counting semaphore – unbounded integer
- Binary semaphore – 0 or 1 (same as mutex)

## ### Using Semaphores

### Critical section with semaphores:

```
wait(mutex);
CS
signal(mutex);
```

### Synchronizing order of events S1 before S2

```
semaphore synch = 0;

P1: S1; signal(synch);
P2: wait(synch); S2;
```

## ### Correct Implementation Without Busy Waiting

Use waiting queues.

Each semaphore has:

```
value
list (process queue)
```

### wait()

```
S->value--;
if (S->value < 0) {
   add process to S->list;
   block();
}
```

### signal()

```
S->value++;
if (S->value <= 0) {
   remove P from list;
   wakeup(P);
}
```

This prevents busy waiting and is used inside OS kernels.

## ### Problems with Semaphores

- Wrong ordering:
  `signal(mutex)` before `wait(mutex)`
- Double wait
- Missing wait/signal pairs

These errors cause deadlocks or inconsistent states.

# ## Monitors

## ### Definition

A monitor is a high-level synchronization construct.

Features:

- Shared variables accessible only through monitor procedures
- Only one process active in monitor at a time
- Uses condition variables for waiting

## ### Condition Variables

Operations:

- `x.wait()` → process sleeps
- `x.signal()` → wakes one waiting process

Used to coordinate events inside monitors.

## ### Example: S1 before S2 using Monitor

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

# ## Liveness Issues

## ### Deadlock

Two processes waiting indefinitely for each other.

Example:

```
P0: wait(S); wait(Q);
P1: wait(Q); wait(S);
```

Mutual waiting → no progress.

## ### Starvation

A process never gets the resource it needs.

Occurs due to unfair scheduling.

## ### Priority Inversion

Low-priority process holds a lock needed by high-priority process.

### Solution

Priority inheritance → temporarily boost low-priority process’s priority.

# ## Summary

- Synchronization ensures correct access to shared data.
- Critical-section problem demands mutual exclusion, progress, and bounded waiting.
- Software-only solutions (Peterson’s) not reliable on modern architectures.
- Hardware instructions enable atomic lock operations.
- Mutex locks and semaphores provide practical synchronization.
- Monitors offer high-level structured synchronization.
- Liveness issues (deadlock, starvation, priority inversion) must be prevented.

If you want, next I can generate:
• Bounded-buffer solved with semaphores
• Dining philosopher solution
• A single-page formula/cheat sheet

Below are clean, structured lecture-style notes for L07 – Mutual Exclusion, following your required engineering-notes format.
Content is short, direct, exam-ready, and matches your usual OS notes style.

# Mutual Exclusion

What’s this?
This note explains the mutual exclusion problem, its requirements, incorrect solutions, and the final correct solution: Dekker’s Algorithm. Focus is on understanding how to approach exam questions about critical sections.

## Introduction

Mutual exclusion ensures that only one process at a time executes its critical section (CS).
The aim is to prevent undesirable interleavings of operations on shared data.

## The Mutual Exclusion Problem

### Definition

The program of each process has:

- non-critical section (NCS)
- critical section (CS)
- pre-protocol: code executed before entering CS
- post-protocol: code executed after leaving CS

Only basic load/store atomicity is assumed (no hardware locks).

### Requirements

A correct mutual exclusion algorithm must ensure:

Mutual Exclusion
No two processes execute CS at the same time.

No Deadlock
If both processes want to enter CS, at least one will succeed.

No Starvation
A process that starts its pre-protocol must eventually enter CS.

Progress in absence of contention
If only one wants to enter, it must enter immediately (no unnecessary blocking).

A halted process in NCS must not block others.

These form the logical checklist for validating any algorithm.

## Mutual Exclusion for Two Processes

Solutions are built using shared variables in memory.
The slides develop the reasoning through incorrect attempts, revealing typical concurrency failures.

## Attempt 1 – Turn Variable (Strict Alternation)

### Idea

A single shared variable `turn` indicates whose turn it is.

### Properties

- Mutual exclusion: satisfied
- No deadlock: satisfied
- No starvation: satisfied
- Starvation in absence of contention: fails

### Issue

If one process stops in NCS, the other may be permanently blocked (strict alternation).
This violates the “make progress when alone” property.

## Attempt 2 – Flag Variables (Wrong Position)

### Idea

Each process i has `ci`:

- `ci = 0` → wants to enter
- `ci = 1` → not interested

### Problem

The flag is set after checking the other process.
A race occurs:

P1 sees `c2==1` then sets `c1=0`
P2 sees `c1==1` then sets `c2=0`
Both enter CS → mutual exclusion fails.

## Attempt 3 – Flag set at Start of Pre-Protocol

### Idea

Move `ci=0` earlier, before checking the other’s flag.

### Result

- Mutual exclusion: correct
- Deadlock: possible

### Issue

Both processes set their flags to 0 simultaneously → both wait forever → deadlock.

## Correct Solution – Dekker’s Algorithm

### Idea

Combine:

- flags (interest)
- turn variable (tie-breaker)
- backing off if the other also wants to enter CS

If both want CS at same time:

- priority is given to the process whose turn it is
- the other backs off by setting its flag to 1, waits for its turn, then tries again

### Why it works

Dekker satisfies all four requirements:

- mutual exclusion
- no deadlock
- no starvation
- progress in absence of contention

It is the first known software-only mutual exclusion algorithm.

### Behaviour summary

- If both raise flags: check turn
- Process not having the turn withdraws temporarily
- Turn flips on exit from CS
- Guarantees fairness and avoids deadlock

## Key Points Summary

- Mutual exclusion prevents overlapping critical sections.
- Any solution must check mutual exclusion, deadlock freedom, starvation freedom, and progress.
- Attempts 1–3 show typical concurrency pathologies: strict alternation, race conditions, circular waiting.
- Dekker’s Algorithm solves the problem using flags + turn + back-off.
- Exam focus: explain properties, identify violations, write short reasoning about correctness.
