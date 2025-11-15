---
title: CPU Scheduling
sidebar:
  order: 14
slug: operating-systems/cpu-scheduling
prev: true
next: true
---

Determines the order in which processes or threads are given access to the processor, aiming to optimize various aspects such as CPU utilization, throughput, turnaround time, waiting time, and response time.

### CPU-I/O Burst Cycle

Process execution consists of a cycle of CPU execution and I/O wait.

### I/O Burst

the period during which a process is performing input/output operations, such as reading from disk, writing to a file, or waiting for user input. During this time, the process is not using the CPU and is typically waiting for the I/O operation to complete.

### CPU Burst

The period when a process is actively executing instructions on the CPU, performing computations or processing data. Processes typically alternate between CPU bursts and I/O bursts throughout their execution.

Usually short bursts occur at a higher frequency and long bursts occur at a lower frequency.

### Context Switch

The act of saving the state of a currently running process and loading the state of the next process to run.

## Scheduler

The component of the operating system responsible for selecting which process runs at any given time.

Occurs when a process:

- switches from running to waiting
- switches from running to ready
- switches from waiting to ready
- terminates

### Types of Schedulers

- Job scheduler: Decides which jobs or processes are admitted to the system for processing. Long-term scheduler.
- CPU scheduler: Decides which of the ready, in-memory processes is to be executed next by the CPU. Short-term scheduler.
- Medium-term scheduler: Handles swapping processes in and out of memory to improve process mix.

## Types of Scheduling

### Nonpreemptive

When scheduling takes place only under circumstances 1 and 4. Once a CPU has been allocated to a process, it continues to use it until completion or by switching to the waiting state. Processes cannot be interrupted.

### Preemptive

When scheduling is not nonpreemptive. Commonly used in general purpose OSes.

## Dispatcher

A module which gives control of the CPU to the process selected by the CPU scheduler.

Handles:

- Switching context
- Switching to user mode
- Jumpting to the proper locatino in the user program to restart that program

### Dispatcher Latency

Time it takes for the dispatcher to stop one process and start another running.

## Scheduling Criteria

- CPU utilization: CPU must be kept as much as posssible. Max is better.
- Throughput: Number of processes that complete their execution per time unit. Max is better.
- Turnaround time: Amount of time to execute a particular process from when it was submitted for execution. Min is better.
- Waiting time: Amount of time a CPU waits. Min is better.
- Response time: Amount of time a CPU waits for a response. Min is better.

## Scheduling Algorithms

Chosen based on the specific goals and requirements of the system, such as fairness, efficiency, and responsiveness.

### First-Come First-Served (FCFS)

Processes are scheduled in the order they arrive. Simple but can lead to long waiting times. Order of arrival determines the turnaround and waiting time.

#### Convoy Effect

Short process behind long process.

### Shortest Job First (SJF)

The process with the shortest estimated CPU burst is scheduled next. Minimizes average waiting time for a given set of processes. Optimal. Can cause starvation.

Length of the next CPU burst must be estimated. Exponential averaging can be used for estimation.

### Shortest Remaining Time First (SRTF)

Preemptive version of SJF.

### Priority Scheduling

Each process is assigned a priority, and the scheduler runs the highest-priority process. Can be preemptive or non-preemptive.

### Round Robin

Each process is assigned a fixed time slice (quantum) in a cyclic order. Good for time-sharing systems.

A longer time quantum in Round Robin scheduling means each process gets more uninterrupted CPU time before being switched out. This reduces the number of context switches, improving overall efficiency. However, if the time quantum is too long, the system may behave more like FCFS, increasing response time for shorter or interactive tasks and potentially making the system less responsive to user input.

### Multilevel Queue Scheduling

Processes are divided into different queues based on priority or type, each with its own scheduling algorithm.

### Multilevel Feedback Queue Scheduling

Similar to multilevel queue but allows processes to move between queues based on their behavior and requirements.

Below is a **single, fully-integrated, extensive note set** covering **ALL IMPORTANT POINTS** from **L09, L10, L11, L12, L13** (CPU Scheduling + Real-time Scheduling).
Written exactly in your Sahithyan-style note format: hierarchical headings, simple English, clear structure, engineering-student friendly.

---

# CPU Scheduling – Complete Notes

_(What’s this?)_
This module summarises the entire CPU scheduling chapter: basic concepts, scheduling criteria, major algorithms, thread scheduling, multiprocessor scheduling, and real-time scheduling. All core points from PDFs L09–L13 are merged here.

---

# ## 1. Basic Concepts of CPU Scheduling

## 1.1 Introduction

CPU scheduling decides which ready process gets CPU next. Effective scheduling increases CPU utilization and system throughput.

### 1.2 CPU–I/O Burst Cycle

- Process execution alternates between **CPU burst** and **I/O burst**.
- Many short CPU bursts, few long bursts (empirical distribution).

### 1.3 CPU Scheduler

Chooses one process from the ready queue and allocates CPU.

Scheduling happens when a process:

1. Running → Waiting
2. Running → Ready
3. Waiting → Ready
4. Terminates

Only (2) and (3) allow choice → where scheduling algorithms differ.

### 1.4 Preemptive vs Nonpreemptive

- **Nonpreemptive**: CPU cannot be taken until process blocks or terminates.
- **Preemptive**: CPU can be interrupted.
- All modern OSs use preemptive scheduling.

### 1.5 Dispatcher

Responsible for context switching, switching to user mode, jumping to program entry.
**Dispatch latency** = time to switch processes.

---

# ## 2. Scheduling Criteria

## 2.1 Introduction

Scheduling algorithms are judged using several measurable criteria.

### 2.2 Key Criteria

- **CPU Utilization** – keep CPU as busy as possible
- **Throughput** – completed processes per second
- **Turnaround Time** – submission → completion
- **Waiting Time** – time spent in ready queue
- **Response Time** – submitted → first response

### 2.3 Optimization Goals

Maximize: CPU utilization, throughput
Minimize: turnaround, waiting, response time

---

# ## 3. Scheduling Algorithms

## 3.1 Introduction

This section explains FCFS, SJF, SRTF, RR, Priority, Multilevel Queue, and Multilevel Feedback Queue.

---

## 3.2 First-Come, First-Served (FCFS)

- Nonpreemptive.
- Simple queue ordering.
- Can lead to **convoy effect**: short jobs wait behind long jobs.

Example: P1=24, P2=3, P3=3
Arrival P1,P2,P3 → Avg waiting = 17 ms
Arrival P2,P3,P1 → Avg waiting = 3 ms

---

## 3.3 Shortest Job First (SJF)

- Choose process with shortest CPU burst.
- **Optimal** for minimum waiting time.
- Nonpreemptive or preemptive (SRTF).
- Problem: Need prediction of next CPU burst.

### Exponential Averaging

Prediction:

```
tn+1 = α tn + (1 – α) tn-1 + ...
```

- α=0 → ignore history
- α=1 → only last value matters

---

## 3.4 Shortest Remaining Time First (SRTF)

- Preemptive version of SJF.
- On new process arrival, compare its burst with remaining burst of current process.
- Gives best average waiting time among preemptive algorithms.

---

## 3.5 Round Robin (RR)

- Quantum **q** (usually 10–100 ms).
- Process gets CPU for max q, then preempted.
- Fair: no process waits more than (n–1)q.

Performance:

- Large q → tends to FCFS
- Small q → too many context switches

---

## 3.6 Priority Scheduling

- Each process has a priority number.
- CPU given to highest priority (lowest integer).
- Can be preemptive or nonpreemptive.
- **Starvation** risk for low-priority processes.
- **Aging** solves starvation by increasing priority over time.

---

## 3.7 Multilevel Queue Scheduling

- Multiple queues for different categories:
  - System processes
  - Interactive
  - Batch
  - Background

- Each queue has fixed priority over others.

---

## 3.8 Multilevel Feedback Queue (MLFQ)

- Processes can move between queues.
- Parameters:
  - number of queues
  - scheduling per queue
  - rules for promotion/demotion
  - when a process enters which queue

- Supports **aging** naturally.

Example:

- Q0: RR, q=8
- Q1: RR, q=16
- Q2: FCFS

If a process uses full quantum without finishing → demoted.

---

# ## 4. Thread Scheduling

## 4.1 Introduction

User-level threads and kernel-level threads complicate scheduling.

### 4.2 Types of Thread Mappings

- Many-to-One
- Many-to-Many (with LWPs)
- One-to-One

### 4.3 Scheduling Scopes

- **PCS (Process Contention Scope)**
  - User-level thread library chooses which thread runs on LWP.
  - Competition occurs within process.

- **SCS (System Contention Scope)**
  - Kernel schedules kernel threads on CPUs.
  - Used by Linux, Windows, Solaris.

### 4.4 Pthreads Scheduling

Supports selecting PCS or SCS (though Linux allows only SCS).

---

# ## 5. Multiprocessor Scheduling

## 5.1 Introduction

Multiple CPUs → more complex scheduling.

### 5.2 SMP (Symmetric Multiprocessing)

- Each CPU self-schedules.
- Shared ready queue or private queues.

### 5.3 Multicore CPUs

- Multiple cores in one chip, low power, improves performance.
- Supports **hardware multithreading**.

### 5.4 Chip Multithreading / Hyper-Threading

- Each core runs multiple hardware threads.
- OS sees multiple logical CPUs.

### 5.5 Load Balancing

- Required to keep CPUs busy.
- **Push migration**: overloaded CPU pushes tasks away.
- **Pull migration**: idle CPU pulls tasks.

### 5.6 Processor Affinity

- Thread tends to run on same CPU to reuse cache.
- **Soft affinity**: OS tries, not guaranteed.
- **Hard affinity**: process specifies allowed CPUs.

### 5.7 NUMA Scheduling

OS should allocate memory close to the CPU executing the thread.

---

# ## 6. Real-Time Scheduling

## 6.1 Introduction

Real-time systems must meet timing constraints.

### 6.2 Types of Real-Time Systems

- **Hard real-time**
  - Missing a deadline = system failure

- **Soft real-time**
  - Occasional deadline misses acceptable

### 6.3 Characteristics

- Embedded
- Reactive
- Concurrent
- Safety-critical
- Must interact with physical environment

---

## 6.4 Real-Time CPU Scheduling

### Event Latency

Time from event occurrence → service. Includes:

1. Interrupt latency
2. Dispatch latency

### Dispatch Latency Phases

- Preemption of kernel-mode task
- Resource release by low-priority process

---

## 6.5 Real-Time Scheduling Algorithms

### **Rate Monotonic Scheduling (RMS)**

- Static priority assignment.
- Shorter period → higher priority.
- Optimal among fixed-priority algorithms.
- Not always schedulable (missed deadlines possible).

### **Earliest Deadline First (EDF)**

- Dynamic priority.
- Earlier deadline → higher priority.
- Optimal for preemptive uniprocessor systems.

### **Proportional Share Scheduling**

- CPU time divided into shares.
- Process with N shares gets N/T CPU time.

---

## 6.6 POSIX Real-Time Classes

- **SCHED_FIFO** – no timeslicing between equal-priority threads.
- **SCHED_RR** – round robin among equal-priority threads.
- **SCHED_OTHER** – default Linux scheduler (CFS).

---

# ## 7. Summary

### Key Takeaways

- CPU scheduling improves utilization and responsiveness.
- SJF/SRTF give optimal waiting but require prediction.
- RR improves fairness.
- Priority scheduling risks starvation; MLFQ solves it.
- Multiprocessor scheduling must consider load balancing and affinity.
- Real-time scheduling focuses on meeting deadlines: RMS (fixed), EDF (dynamic).
- POSIX real-time classes support FIFO and RR behaviour.

---

If you want, the next step can be:

1. A **separate formula sheet** (waiting time, turnaround, RR formulas, utilization tests for RMS).
2. A **100-question exam-style MCQ set** from these notes.
