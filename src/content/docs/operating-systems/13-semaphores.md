---
title: Semaphores
sidebar:
  order: 13
slug: operating-systems/semaphores
prev: true
next: true
---

A variable used to control access to a resource. Can allow a certain number of threads to access a resource. More on this in [semaphores](/operating-systems/semaphores).

2 main types:
- Counting semaphore: can take any integer value. initial value must be non-negative.
- Binary semaphore or mutex semaphore: can be 0 or 1 (like a lock).

Supports 2 operations (atomic):
- wait (also called P or down): decreases the value. If the value is less than zero, the process waits.
- signal (also called V or up): increases the value. If there are waiting processes, one is allowed to proceed.

Does not enforce fairness. Improper use can cause deadlock or starvation.

Often used in operating systems for process synchronization.

Example use:
- Protecting access to shared data.
- Managing limited resources (like printers).

## Mutual Exclusion with Semaphores

Can be implemented using a binary semaphore. The semaphore is initialized to 1, indicating that the critical section is available.

When a thread wants to enter the critical section, it performs the `wait` operation on the semaphore. If the value is 1, it is decremented to 0 and the thread enters the critical section. If the value is 0, the thread is blocked until the semaphore is signaled.

After leaving the critical section, the thread performs the `signal` operation, incrementing the semaphore back to 1 and allowing another waiting thread to enter.

This ensures that only one thread can be in the critical section at any time, preventing race conditions.

**Example pseudocode:**

```
semaphore mutex = 1

// Thread code
wait(mutex)
// critical section
signal(mutex)
```

If multiple threads attempt to enter the critical section simultaneously, only one will succeed; the others will wait until the semaphore is signaled. This mechanism provides mutual exclusion.



### Dining Philosophers Problem

Describes a scenario where several philosophers sit around a table, each alternating between thinking and eating. There is a fork between each pair of philosophers, and each philosopher needs both the left and right fork to eat. The challenge is to design a protocol so that:

- No two neighboring philosophers try to eat at the same time (they can't).
- No philosopher starves.
- Indefinite waiting is prevented.

Semaphores or other synchronization mechanisms are used to manage access to the forks.

### Readers-Writers Problem

Involves a shared resource that can be read by multiple readers simultaneously, but must be written by only one writer at a time. The challenge is to:

- Allow multiple readers to access the resource at the same time.
- Ensure that writers have exclusive access (no readers or other writers) when writing.
- Prevent starvation of either readers or writers.

Semaphores are used to coordinate access, often with additional logic to prioritize readers or writers depending on the requirements.

### Sleeping Barber Problem

Models a barber shop with one barber, a waiting room with a limited number of chairs, and customers who arrive at random times. The challenge is to:

- Ensure the barber sleeps when there are no customers.
- Wake the barber when a customer arrives.
- Customers either wait if there are empty chairs, or leave if the waiting room is full.
- Synchronize access so that the barber serves one customer at a time.

Semaphores are used to manage the number of waiting customers and to synchronize the barber and customer actions.
