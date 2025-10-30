---
title: Virtual Memory
sidebar:
  order: 10
slug: computer-architecture/virtual-memory
prev: true
next: true
---

Allows programs to use a large, continuous memory space independent of the actual physical memory available.

Advantages are:
- Enables programs larger than physical memory.
- Provides memory protection between processes.
- Simplifies memory allocation for the OS.
- Enables efficient memory sharing between processes.

Each process is given its own virtual address space. CPU generates virtual addresses, which are translated to physical addresses. Only the active parts of a program reside in physical RAM; the rest stays on disk (swap space).
 
### Memory Management Unit 

Aka. MMU. Translates virtual addresses to physical addresses. A hardware component. 

## Address Translation

The process of translating virtual addresses to physical addresses. Handled by MMU with help of paging.

## Paging

Physical memory is divided into fixed-size _frames_.

Physical memory address is composed of:
- Frame number   
  Index into physical memory
- Offset   
  Location within the frame

Virtual memory is divided into fixed-size _pages_. Page size is typically 4 KB or 8 KB.

Virtual memory address is composed of:
- Page number   
  Index into page table
- Page offset   
  Location within the page

Advantages:
- Eliminates external fragmentation.   
- Simplifies memory management from the perspective of OS.

Disadvantage:
- Page tables can be large; require optimization (e.g., multi-level paging).

### Page Table

Maps virtual page numbers to physical frame numbers. Each entry includes a valid bit, a reference bit, a dirt bit, and physical frame number. Virtual page number is the index of the page table.

Page table quickly becomes very huge. Multi-level paging is used to reduce the size of the page table.

Multi-level paging is involves dividing the page table into multiple levels, with each level containing a smaller number of entries. This reduces the size of the page table and improves performance.

### Page Table Register

A register that holds the base address of the page table.

### Page Faults

Occurs when a page referenced by the CPU is not in physical memory. Must be handled by the OS.

Handling steps:

1. CPU traps to OS.
2. OS loads the required page from disk to RAM.
3. Updates page table.
4. Restarts the instruction.

Adds major delay due to disk latency (in ms). Higher frequency of page faults degrades performance significantly.

## TLB

Aka. Translation Lookaside Buffer. A small cache inside the MMU that stores recent page table entries. Greatly reduces address translation time.

On a TLB hit, address translation done in one cycle. Otherwise, page table is looked up.

## Virtual Memory and Disk

The disk area used for paging is called swap space or pagefile. Pages are swapped in and out. OS manages the swapping process.
