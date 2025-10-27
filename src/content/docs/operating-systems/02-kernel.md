---
title: Kernel
sidebar:
  order: 2
slug: operating-systems/kernel
prev: true
next: true
---

The one program running at all times on the computer. Core of an OS.

## Different architectures

### Monolithic

The entire operating system runs in kernel space. All system services, device drivers, file systems, and memory management operate at the privileged kernel level.

Pros:
- Better performance due to direct function calls between components
- Simpler design conceptually
- No message passing overhead between components
- Direct hardware access for all system components

Cons:
- Less stability - a bug in any driver can crash the entire system
- Larger memory footprint
- More complex codebase to maintain
- Security concerns because of full privileges for the whole code
- More difficult to extend without recompilation

Examples:
- Linux
- Traditional UNIX systems
- MS-DOS

### Microkernel

Only the most basic services run in kernel space, while most system services operate in user space as separate processes. The kernel handles only essential functions like inter-process communication (IPC), basic memory management, and CPU scheduling.

Pros:
- Better stability - a driver crash doesn't bring down the entire system
- More secure because less code runs with full privileges
- Easier to extend and maintain
- More modular design
- Better isolation between components

Cons:
- Performance overhead due to frequent context switching
- More complex design from a communication perspective
- Message passing between components adds latency
- May be more difficult to implement efficiently
- Potential for higher resource usage due to multiple processes

Examples:
- MINIX
- QNX
- L4 kernel family

### Hybrid Kernel

Combines elements of both monolithic and microkernel designs. Some services run in kernel space for performance. Others run in user space for better stability and security. This approach attempts to balance the advantages of both architectures.

Pros:
- Better performance than pure microkernels
- More stable than pure monolithic kernels
- Flexibility in determining what runs in kernel vs user space
- Good compromise between security and performance
- Can be tailored to specific system requirements

Cons:
- More complex design decisions about what belongs in kernel space
- May still suffer from some stability issues with kernel components
- Potential inconsistency in system architecture
- Can be harder to maintain clear boundaries between subsystems
- May inherit drawbacks from both approaches if poorly implemented

Example:
- Windows (NT kernel is technically a hybrid but leans heavily monolithic)

### Layered

Operating system is split into $N$ layers. Bottom layer (layer 0) is the hardware. Top layer (layer $N-1$) is the user interface. Each layer is designed to use only the layer below it.

## Loadable Kernel Module

A piece of code that can be loaded into the kernel at runtime, rather than being compiled into the kernel binary itself. LKMs allow the operating system to extend or modify kernel functionality without rebooting or recompiling the entire kernel. This modular approach makes it easier to add support for new hardware, filesystems, or other features as needed.

LKMs are commonly used for:
- Device drivers: Adding support for new hardware devices (e.g., network cards, USB devices) without changing the core kernel.
- Filesystem modules: Supporting new or experimental filesystems (e.g., ext4, NTFS, XFS) by loading the appropriate module.
- Network protocols: Adding new networking capabilities or protocols.
- Security modules: Implementing additional security features, such as SELinux or AppArmor.

Examples:
- On Linux, device drivers for graphics cards (such as NVIDIA or AMD) are often distributed as LKMs, allowing users to install or update drivers without recompiling the kernel.
- The `aufs` and `overlayfs` filesystems are provided as LKMs to enable advanced container storage features.
- The `ip_tables` module in Linux provides firewall functionality and can be loaded or unloaded as needed.
- On FreeBSD, filesystems like ZFS are implemented as loadable kernel modules.
- In Windows, many drivers (such as those for printers, USB devices, or network adapters) are loaded as kernel modules (called "kernel-mode drivers") at runtime.
