---
title: RISC-V Architecture
sidebar:
  order: 3
slug: computer-architecture/risc-v-architecture
prev: true
next: false
---

An open-standard ISA based on established RISC principles. Open source. Modular by design. Denoted as <b>RV32I</b> or <b>RV64I</b>, where the numbers represent the bit width of the registers and the address bus. Here only 32-bit instructions are explained.

### Key Characteristics

- Modularity: RISC-V has a small base integer instruction set (RV32I/RV64I) with optional extensions (M for multiplication, F/D for floating-point, etc.)
- Simplicity: Clean design with fixed-length 32-bit instructions (in the base encoding)
- Scalability: Supports various implementation sizes from embedded microcontrollers to high-performance computing

### Memory Addressing

RISC-V uses a load-store architecture where only specific load and store instructions can access memory. All other operations work directly on the registers.

### Extensions

The base RISC-V architecture is designed to be minimal and easy to implement. As not all implementations require integer multiplication, division and other functionality, they are extracted into extensions.

| Extension | Description                         | Instructions Count |
| --------- | ----------------------------------- | ------------------ |
| <b>I</b>  | Base                                | 51                 |
| <b>M</b>  | Integer multiplication and division | 13                 |
| <b>A</b>  | Atomic operations                   | 22                 |
| <b>F</b>  | Single-precision floating-point     | 30                 |
| <b>D</b>  | Double-precision floating-point     | 32                 |
| <b>C</b>  | Compressed instructions (16-bit)    | 36                 |
| <b>G</b>  | Same as <b>MAFD</b>                 | 97                 |
| <b>B</b>  | Bit manipulation                    | ?                  |
| <b>N</b>  | User level interrupts               | ?                  |

Proprietary extensions can also be developed.

Eventhough multiplication and division are not-so-complex from mathematical view, they require more silicon area, and thus more power. That's why the <b>M</b> extension is made.

The `misa` register can be used to query which extensions are implemented in the processor.

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

## Instructions

All instructions are 32 bits wide. All the instructions are encoded in different formats. All instructions have an opcode of 7 bits wide.

### Instruction Types

![Instruction types](./images/risc-v-instruction-types.jpg)

### R-type

Register-register operations. Input is 3 registers.

The instruction format:

| Section  | Width (bits) | Description                              |
| -------- | ------------ | ---------------------------------------- |
| `funct7` | 7 [31:25]    | Operation subtype (e.g., `ADD` vs `SUB`) |
| `rs2`    | 5 [24:20]    | Second source register                   |
| `rs1`    | 5 [19:15]    | First source register                    |
| `funct3` | 3 [14:12]    | Instruction variant                      |
| `rd`     | 5 [11:7]     | Destination register                     |
| `opcode` | 7 [6:0]      | Operation code                           |

### I-type

Immediate operations. Input is 2 registers and an immediate value. Immediate value is 12 bits wide, sign-extended.

| Section     | Width (bits) | Description              |
| ----------- | ------------ | ------------------------ |
| `imm[11:0]` | 12 [31:20]   | Immediate value (signed) |
| `rs1`       | 5 [19:15]    | Source register          |
| `funct3`    | 3 [14:12]    | Instruction variant      |
| `rd`        | 5 [11:7]     | Destination register     |
| `opcode`    | 7 [6:0]      | Operation code           |

### S-type

Store operations, from register to memory.

The instruction format:

| Section     | Width (bits) | Description                          |
| ----------- | ------------ | ------------------------------------ |
| `imm[11:5]` | 7 [31:25]    | Offset bits [11-5]                   |
| `rs2`       | 5 [24:20]    | Register containing the target value |
| `rs1`       | 5 [19:15]    | Register containing the base address |
| `funct3`    | 3 [14:12]    | Instruction variant                  |
| `imm[4:0]`  | 5 [11:7]     | Offset bits [4-0]                    |
| `opcode`    | 7 [6:0]      | Operation code                       |

Immediate value is sign-extended. Used as the offset to the target memory address. Split into 2 parts to make sure the instruction format is aligned as much as possible with other instructions.

As both the instruction size and the address bus size are 32 bits wide, the target memory address cannot be included in 1 instruction. That is why this method is being used. This method also provides the local usage functionality.

### B-type

Conditional branch operations. Similar to jumps, but for temporary jumps.

### U-type

Upper immediate operations.

### J-type

Jump operations. Similar to branch operations, but used for long jumps.
