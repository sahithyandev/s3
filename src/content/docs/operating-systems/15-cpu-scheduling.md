---
title: CPU Scheduling
sidebar:
  order: 13
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
