---
title: Synchronization
sidebar:
  order: 10
slug: operating-systems/synchronization
prev: true
next: true
---

A way to control how threads and processes access shared resources. In a multithreaded operating system, many threads can run at the same time. Many processes can run concurrently. These threads often need to read or write shared data. If two threads change the same data at once, errors can happen. This is called a race condition.

To prevent race conditions, operating systems use synchronization techniques. 

Sometimes, threads need to wait for each other to finish tasks. Condition variables help with this. A thread can sleep until another thread signals that it is safe to continue.

Synchronization is important for safety. Without it, programs can crash or give wrong results. It also helps with fairness. Threads get a chance to use resources without being blocked forever.

However, too much synchronization can slow down a system. Threads may spend a lot of time waiting. This is called contention. Good design tries to balance safety and speed.

## The Critical Section Problem

The _critical section_ is the part of code that modifies shared resources.

The challenge of ensuring that when multiple threads access shared data, only one thread executes the critical section at a time, to prevent data corruption and race conditions.

Each process must ask permission to enter critical section at the _entry section_ and may exit at the _exit section_. Rest of the code is called _remainder section_.

### Requirements for solution

- Mutual exclusion: Only one thread/process can execute the critical section at a time.
- Progress: If a thread is waiting to enter the critical section, it should eventually be granted access.
- Bounded waiting: A bound exists on the number of times that other processes are allowed to enter their critical sections even another one is waiting for access.

## Mutual Exclusion Problem

Only one thread/process must be allowed to enter its critical section at a time.

To achieve mutual exclusion, a set of additional instructions must be inserted before entering (_pre-protocol_) and exitting (_post-protocol_) the critical section.

A process/thread may halt in its non-critical section. It may not halt during the execution of the above-mentioned protocols or the critical section.

The program must not [deadlock](https://s2.sahithyan.dev/program-construction/basics/concurrency/#deadlock) or [starve](https://s2.sahithyan.dev/program-construction/basics/concurrency/#thread-starvation).

[Dekker's Algorithm](/operating-systems/dekkers-algorithm) is one solution to the mutual exclusion problem.

### Contention

The number of threads compete to access the same shared resource at the same time. When many threads are waiting for access, the system spends more time managing these waits instead of doing useful work. High contention can reduce performance and scalability, as threads may be blocked frequently, leading to longer response times and lower throughput. Reducing contention is important for efficient parallel programs, and can be achieved by minimizing shared resources, using finer-grained locks, or designing algorithms that allow more concurrent access.

## Prevention mechanisms

### Lock

A common method. A lock makes sure only one thread can use a resource at a time. Other threads must wait until the lock is released.

### Semaphore

A variable used to control access to a resource. Can allow a certain number of threads to access a resource. More on this in [semaphores](/operating-systems/semaphores).


### Mutex

Similar to locks. They are used to protect critical sections of code. Only one thread can hold a mutex at a time.
