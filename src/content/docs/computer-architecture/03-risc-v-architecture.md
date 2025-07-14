---
title: RISC-V Architecture
sidebar:
  order: 3
slug: computer-architecture/risc-v-architecture
prev: true
next: false
---

An open-standard ISA based on established RISC principles. Open source.

### Key Characteristics

- Modularity: RISC-V has a small base integer instruction set (RV32I/RV64I) with optional extensions (M for multiplication, F/D for floating-point, etc.)
- Simplicity: Clean design with fixed-length 32-bit instructions (in the base encoding)
- Scalability: Supports various implementation sizes from embedded microcontrollers to high-performance computing

### Instruction Format Types

RISC-V uses several instruction formats:

- R-type: Register-register operations
- I-type: Immediate and load operations
- S-type: Store operations
- B-type: Branch operations
- U-type: Upper immediate operations
- J-type: Jump operations

### Memory Addressing

RISC-V uses a load-store architecture where only specific load and store instructions can access memory. All other operations work directly on the registers.

### Extensions

Common extensions include:

- M: Integer multiplication and division
- A: Atomic operations
- F: Single-precision floating-point
- D: Double-precision floating-point
- C: Compressed instructions (16-bit)

### Register Conventions

Has 32 registers. Each register is numbered from x0 to x31. Each one also has an assigned name.

| Register  | ABI Name | Description                      |
| --------- | -------- | -------------------------------- |
| `x0`      | `zero`   | Hardwired to 0                   |
| `x1`      | `ra`     | Return address                   |
| `x2`      | `sp`     | Stack pointer                    |
| `x3`      | `gp`     | Global pointer                   |
| `x4`      | `tp`     | Thread pointer                   |
| `x5-x7`   | `t0-t2`  | Temporaries                      |
| `x8`      | `s0/fp`  | Saved register/frame pointer     |
| `x9`      | `s1`     | Saved register                   |
| `x10-x11` | `a0-a1`  | Function arguments/return values |
| `x12-x17` | `a2-a7`  | Function arguments               |
| `x18-x27` | `s2-s11` | Saved registers                  |
| `x28-x31` | `t3-t6`  | Temporaries                      |
