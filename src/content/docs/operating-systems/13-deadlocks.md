---
title: Deadlocks
sidebar:
  order: 13
slug: operating-systems/deadlocks
prev: true
next: true
---

Occurs when 2 or more processes cannot proceed and wait for each other. Each process is waiting for a resource held by another. No process can continue. Wastes resources and slows down systems.

### Conditions

Four conditions must be true for a deadlock:

1. Mutual exclusion: Only one process can use a resource at a time.
2. Hold and wait: A process holds at least one resource and waits for others.
3. No preemption: Resources cannot be forcibly taken from a process.
4. Circular wait: Processes form a cycle, each waiting for a resource held by the next.

Can be prevented, avoided, detected, or ignored. Prevention breaks one of the four conditions. Avoidance uses algorithms like Banker’s Algorithm to ensure safe resource allocation. Detection finds deadlocks after they happen. Recovery frees resources or kills processes.

### Resource Allocation Graph

System is viewed as a graph. Processes, resources are nodes. Resource requests and assignments are edges. Directed edge from process to resource indicates resource request, from resource to process indicates resource assignment.

Cycles in the resource allocation graph indicate potential deadlocks.

## Types

### Types of Deadlocks

Deadlocks can be classified based on the resources and processes involved:

- Resource Deadlock: The classic form, where processes compete for exclusive access to resources (e.g., files, printers, memory). Each process holds one or more resources and waits for others, resulting in a cycle.

- Communication Deadlock: Occurs when processes wait for messages or signals from each other. For example, two processes each waiting to receive a message from the other, but neither sends.

- Thread Deadlock: In multithreaded applications, threads within the same process can deadlock by waiting for locks or synchronization primitives held by each other.

- Database Deadlock: In database systems, transactions may lock tables or rows and wait for locks held by other transactions, causing a deadlock.

- Distributed Deadlock: In distributed systems, deadlocks can span multiple machines or nodes, making detection and resolution more complex.

Each type of deadlock may require different detection and resolution strategies, depending on the system and resources involved.

## Solutions

Deadlocks can be handled in several ways, depending on system requirements and constraints:

### Prevention

Aims to ensure that at least one of the four necessary conditions for deadlock cannot occur. This can be done by:
- Eliminating mutual exclusion: Making resources sharable whenever possible.
- Eliminating hold and wait: Requiring processes to request all resources at once, or release held resources before requesting new ones.
- Eliminating no preemption: Allowing resources to be forcibly taken from processes.
- Eliminating circular wait: Imposing an ordering on resource requests so cycles cannot form.

### Avoidance

Uses algorithms to ensure the system never enters an unsafe state where deadlock is possible. The most common method is the Banker’s Algorithm.

#### Banker's Algorithm

Checks resource allocation requests and only grants them if they keep the system in a safe state. Maximum credit claim is defined in advance. A _credit limit_ is assigned to each process, which is the maximum amount of resources it can request. If a process requests more resources than its credit limit, the request is denied.

### Detection and Recovery

If deadlocks are allowed to occur, the system must detect them and recover.

Detection involves monitoring resource allocation and process states to identify cycles in the resource allocation graph. Expensive in terms of time and resources. Deadlock-detection algorithm should only be run based on the frequency of deadlocks and the number of processes that will be blocked in a deadlock.

Once a deadlock is detected, recovery can be performed by:
- Terminating one or more processes involved in the deadlock.
- Preempting resources from deadlocked processes.
- Rolling back processes to a safe state.

### Ignoring Deadlocks

Aka. Ostrich method. In some systems, deadlocks are rare and the cost of prevention or detection is high. In these cases, deadlocks may simply be ignored, relying on manual intervention or system restart if they occur.
