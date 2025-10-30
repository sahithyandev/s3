---
title: I/O Systems
sidebar:
  order: 16
slug: operating-systems/io-systems
prev: true
next: false
---

A subsystem that manages communication between the system and external devices. OS abstracts hardware details, coordinates access, and ensures controlled sharing of I/O resources among users and applications.

### Device Drivers

A small software component that abstracts hardware specifics and provide a uniform device-access interface to the OS. Act as the software interface between the I/O subsystem and hardware devices.

## I/O Hardware

### Port

A connection point through which an I/O device communicates with the CPU. Represents a specific hardware address(es) for a device. Not to be confused with the physical ports such as USB port.

CPU reads/writes data to the port using special instructions (e.g., IN, OUT).

Can either be:

- Serial - one bit at a time (e.g., keyboard, mouse)
- Parallel - multiple bits at a time (e.g., printer)

### Bus

Shared communication path amount system components.

- Data bus: carries actual data.
- Address bus: carries device or memory addresses.
- Control bus: carries control signals (read/write, interrupt, etc.).

Can be system-wide (like PCI, USB) or dedicated to devices.

Example:

- PCI: system-wide; connects CPU, memory, and disk controller.
- USB: system-wide; connects multiple peripherals like a keyboard and webcam.

### Controller

Aka. host adapter. A hardware interface (chip) that controls communication between the CPU/bus and a specific device.

Interprets CPU commands and controls the device’s hardware signals. May include data buffers, control registers, and logic for error handling. Each device has its own controller.

Registers: Used for communication between the driver and device.

- Data-in Register – Holds data from the device.
- Data-out Register – Holds data to send to the device.
- Status Register – Contains device status information.
- Control Register – Receives commands from the driver.

## Communication Mechanisms

3 different mechanisms by which the I/O devices communicate with the system.

### Polling

Aka. busy-wait. CPU repeatedly checks the device’s status register until it becomes ready. Efficient for fast devices; wasteful for slow ones. CPU-driven method.

Steps:

1. Host checks the busy bit until 0.
2. Host sets command-ready bit to start transfer.
3. Controller performs operation and clears bits.

### Interrupts

Devices notify the CPU when ready. A device-driven method. Requires CPU attention.

When an interrupt is received, control is transferred to an Interrupt Service Routine (ISR) via the interrupt vector. OS saves the context and executes the ISR. Once the ISR finishes, the context is stored and continued.

Types:

- Maskable: Can be ignored or delayed.
- Non-maskable: Cannot be ignored.

#### Trap

Aka. Exception. A software-generated interrupt.

### Direct Memory Access

Used by high-speed I/O devices to transfer data directly between I/O device and main memory.
Bypasses CPU for block transfers → improves efficiency.

Steps:

1. OS writes a command block (source, destination, count) into memory.
2. DMA controller takes control of the bus (cycle stealing).
3. Only one interrupt per block (vs. per byte).


## I/O Latency

Total time from interrupt arrival to completion of I/O operation. Higher latency is undesirable.

### Interrupt Latency

Time from interrupt arrival to start of ISR.

## Application I/O Interface

### Device Categories

Block Devices: (e.g., Disk) → Read, Write, Seek; typically use DMA.
Character Devices: (e.g., Keyboard, Mouse) → Get(), Put().
Network Devices: Managed via sockets.

### I/O Methods

| Type                          | Description                                              |
| ----------------------------- | -------------------------------------------------------- |
| Blocking I/O                  | Process waits until operation completes.                 |
| Non-blocking I/O              | Returns immediately; process checks readiness.           |
| Asynchronous I/O              | Process continues execution; notified upon completion.   |
| Vectored I/O (Scatter–Gather) | Single call for multiple I/O buffers to reduce overhead. |

### STREAMS

A full-duplex communication channel (Unix System V).
Consists of:

- STREAM Head: User interface.
- Driver End: Device interface.
- Intermediate Modules: Optional processing layers.

## Kernel I/O Subsystem

### Services

Buffering: Temporary data storage to handle speed/size mismatches.

Double Buffering: Uses two buffers (user & kernel).
Caching: Stores frequently used data for faster access.
Spooling: Queues output for single-access devices (e.g., printers).

### Management

Scheduling: Orders I/O requests (may apply fairness or QoS).
Device Reservation: Allocates exclusive device access; risk of deadlock.
Protection: All I/O instructions are privileged; user I/O via system calls.
Power Management: Controls device power states using techniques like

Component-level control,
Wake locks,
Power collapse (deep sleep).

## I/O Performance

### Factors

CPU time used for drivers and kernel routines.
Context switches due to interrupts.
Data copying overhead.

### Optimization Strategies

Reduce context switches and data copying.
Reduce interrupts via large transfers or intelligent controllers.
Use DMA for block transfers.
Balance CPU, memory, and I/O performance.

## Key Concepts & Formulas

| Concept                | Description                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| I/O Protection         | All I/O instructions are privileged; user access via system calls.                 |
| DMA                    | Transfers data directly between memory and device with one interrupt per block.    |
| Kernel I/O Services    | Buffering (speed mismatch), Caching (performance), Spooling (single-device queue). |
| I/O Hardware Interface | Built using ports, busses, and controllers with device registers.                  |
| System Call Types      | Blocking, Nonblocking, Asynchronous, and Vectored I/O.                             |
