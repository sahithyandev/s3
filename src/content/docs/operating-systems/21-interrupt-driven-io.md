---
title: Interrupt-Driven I/O
sidebar:
  order: 21
---

Devices notify the CPU when ready. A device-driven method. Requires CPU attention.

When an interrupt is received, control is transferred to an Interrupt Service Routine (ISR) via the interrupt vector. OS saves the context and executes the ISR. Once the ISR finishes, the context is stored and resumed.

Types:

- Maskable: Can be ignored or delayed.
- Non-maskable: Cannot be ignored.

## Interrupt

Signal to CPU indicating an event. Caused by hardware or software.

### Hardware Interrupt

Interrupt caused by an I/O device.

### Trap

Aka. Exception. A software-generated interrupt.
Usually caused by an error or a user request.


## Interrupt Vector

A memory address or a table of addresses that the processor uses to locate the appropriate Interrupt Service Routine (ISR) for a given interrupt. Each type of interrupt has its own unique vector, allowing the system to respond correctly to different sources of interrupts.

## Interrupt Service Routine

Aka. ISR, interrupt handler. When an interrupt occurs, the processor temporarily pauses its current execution, saves the context, and transfers control to ISR. The event is processed by the ISR. Once that's done, the processor resumes its previous activity.

## Timer

A programmable hardware component that generates interrupts at specific time intervals. Used to measure time. The OS sets the timer to trigger an interrupt after every $n$ clock cycles.
