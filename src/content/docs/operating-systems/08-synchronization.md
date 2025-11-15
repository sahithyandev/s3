---
title: Synchronization
sidebar:
  order: 8
slug: operating-systems/synchronization
prev: true
next: true
---

A way to control how threads and processes access shared resources. In a multithreaded operating system, many threads can run at the same time. Many processes can run concurrently. These threads often need to read or write shared data. If two threads change the same data at once, errors can happen. This is called a race condition.

To prevent race conditions, operating systems use synchronization techniques. 

Sometimes, threads need to wait for each other to finish tasks. Condition variables help with this. A thread can sleep until another thread signals that it is safe to continue.

Synchronization is important for safety. Without it, programs can crash or give wrong results. It also helps with fairness. Threads get a chance to use resources without being blocked forever.

However, too much synchronization can slow down a system. Threads may spend a lot of time waiting. This is called contention. Good design tries to balance safety and speed.

## Bounded Buffer Problem

Aka. Producer-Consumer problem.

Models two types of processes which has a shared buffer:
- producers - generate data and place it into a buffer
- consumers - take data from the buffer.

The challenge is to ensure that:
- Producers do not add data when the buffer is full.
- Consumers do not remove data when the buffer is empty.
- Access to the buffer is synchronized so that producers and consumers do not interfere with each other.

Semaphores are used to track the number of filled and empty slots in the buffer, and to ensure mutual exclusion when accessing the buffer.

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

### Interrupt-based

By turning off interrupts before accessing a shared resource and turning them back on after accessing it. This prevents other threads from interrupting the current thread while it is accessing the shared resource. Simple and effective. But not scalable, for more than 1 CPUs. Starvation is possible.

### Peterson's Algorithm

A software level solution. Explained on [Peterson's Algorithm](/operating-systems/petersons-algorithm) on its own page.

### Lock

A common method. A lock makes sure only one thread can use a resource at a time. Other threads must wait until the lock is released.

### Semaphore

A variable used to control access to a resource. Can allow a certain number of threads to access a resource. More on this in [semaphores](/operating-systems/semaphores).

### Mutex

Similar to locks. They are used to protect critical sections of code. Only one thread can hold a mutex at a time.

:::note

Critical-Section problem can be solved using hardware support as well.

:::

### Hardware instructions

Special hardware instructions that allow us to either test-and-modify the content of a word, or to swap the contents of two words atomically. Uses a shared variable, which is initialized to be `false`.

- Test-and-Set instruction   
- Compare-and-Swap instruction   
  
#### test_and_set

Atomic. Returns the old value of the word. Set the value of passed parameter to `true`. Commonly used for implementing locks. Reads a memory location and simultaneously sets it to 1, returning the old value.

```c
/**
 * Atomic.
 */
bool test_and_set(bool *lock) {
    bool old = *lock;
    *lock = true;   // set lock
    return old;     // return previous value
}
```

Used in spinlocks.

```c
while (test_and_set(&lock)) {
    // busy wait
}
// critical section
lock = false; // release lock
```

If `lock` was false (free), it becomes `true` and the process enters. If it was true, the process keeps spinning until available.

Simple, widely supported. Causes busy waiting (spins), and may lead to high contention.

#### compare_and_swap

More powerful than `test_and_set`. Atomic. Returns the original value of the word. If the passed parameter is equal to expected value, set the value of passed parameter to `new_value`.

It compares the contents of a memory location with an expected value, and if they match, it swaps in a new value. Otherwise, it leaves the location unchanged.

```c
bool compare_and_swap(int *addr, int expected, int new_val) {
    if (*addr == expected) {
        *addr = new_val;
        return true;    // successful update
    }
    return false;       // update failed
}
```

Used in lock-free algorithms (queues, stacks, counters). More complex, requires retries if multiple threads compete.

Example: Implementing a lock:

```c
while (!compare_and_swap(&lock, 0, 1)) {
    // busy wait
}
// critical section
lock = 0; // release lock
```

### Atomic variables

The `increment()` function can be implemented as follows:

```sh
void increment(atomic_int *v){
    int temp;
    do {
        temp = *v;
    }
    while (temp != (compare_and_swap(v,temp,temp+1));
}
```

#### Mutex 

The `mutex_lock()` function can be implemented as follows:

```sh
void mutex_lock(mutex_t *m) {
    while (!compare_and_swap(&m->state, 0, 1)) {
        // busy wait
    }
}

void mutex_unlock(mutex_t *m) {
    m->state = 0;
}
```
