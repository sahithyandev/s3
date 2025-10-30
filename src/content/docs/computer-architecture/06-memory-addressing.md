---
title: Memory Addressing
sidebar:
  order: 6
slug: computer-architecture/memory-addressing
prev: true
next: true
---

There are 3 memory addressing modes in assembly language.

### Direct Memory Addressing

Instruction contains the actual memory address. Memory location is accessed without any intermediate calculations.

Example:
```asm
MOV AX, [1000]  ; Load the value at memory address 1000 into register AX
```

Efficient for accessing fixed memory locations but lacks flexibility when working with dynamic data structures.

### Indirect Memory Addressing

Uses a register that contains the memory address. Provides more flexibility compared to direct addressing.

Example:
```asm
MOV BX, 1000    ; Put address 1000 in register BX
MOV AX, [BX]    ; Load the value at the address contained in BX into AX
```

Allows for working with dynamic data structures and implementing concepts like pointers.

### Displacement Memory Addressing

Combines direct and indirect addressing. Adds a fixed offset to a base memory address stored in a register.

Example:
```asm
MOV BX, 1000       ; Base address in BX
MOV AX, [BX + 20]  ; Access memory at address (1000 + 20)
```

Useful for:
- Writing position-independent code and efficiently accessing structured data.
- Accessing array elements   
  `BX` points to the array base and the displacement is the offset of a specific element
- Working with data structures   
  `BX` points to the structure base and the displacement accesses specific fields
- Implementing stack frames in function calls   
  `BX` points to the stack frame and displacements access local variables and parameters

:::tip

I have created a [short note on Addressing Modes in RISC-V](/notes/Addressing%20Modes%20RISC-V.pdf) for quick reference.

:::
