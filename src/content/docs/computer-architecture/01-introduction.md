---
title: Introduction to Computer Architecture
sidebar:
  order: 1
  label: Introduction
slug: computer-architecture/introduction
prev: false
next: true
---

Computer architecture is the design and organization of a computer system. It involves the conceptual structure and functional behavior of a computer system at a level that can be used to understand how the computer works.

## CPU

Can be categorized into 2 based on cycles per instructions (CPI).

### Single Cycle CPU

Each instruction executes completely in one clock cycle. Slowest instruction defines the clock cycle's duration. Simpler instructions causes waste of time, as they finish earlier. Not scalable as introducing more or complex instructions causes longer clock cycles.

### Multi Cycle CPU

Different instructions take different number of clock cycles to execute. Instructions are split into multiple stages, each stage taking one clock cycle.

Slowest step of all the instructions defines the clock cycle's duration. Wasted time due to simple instruction waiting is less compared to single cycle CPU. 

Allows for more complex instructions to be executed in parallel.

## Microprocessor vs Microcontroller

A microprocessor is a CPU on a single chip. Has a larger instruction set. Has more registers.

A microcontroller is a small _computer_ on a single chip. Includes a CPU, ROM, SRAM and other peripherals. Self-contained. Consumes less power. Has small memory.

## Assembling

Transforms a single source code file into machine code. Leaves placeholders for external symbols. Produces an object file.

## Linking

Transforms multiple object files into a single executable file. Resolves external symbols.
