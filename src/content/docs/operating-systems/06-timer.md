---
title: Timer
sidebar:
  order: 6
slug: operating-systems/timer
prev: true
next: true
---

A hardware device or a software mechanism that generates interrupts at specified intervals. Crucial for managing how long a process or program can use the CPU, ensuring that no single process monopolizes system resources.

Timers are used by the operating system to:
• Enforce time-sharing among processes by preempting running processes after a set time slice.
• Prevent infinite loops or runaway processes from hogging the CPU.
• Schedule future events, such as waking up a process after a delay or triggering periodic tasks.

Typically, the timer is programmed by the operating system (using privileged instructions) to count down from a specified value. When the timer reaches zero, it generates an interrupt, allowing the OS to regain control, perform context switches, or take corrective action if a process has exceeded its allotted time.
