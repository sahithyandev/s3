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

One of the fundamental memory addressing modes. The instruction contains the actual memory address where the data is stored. The processor directly accesses the specified memory location without any intermediate calculations.

For example, in a typical assembly instruction using direct addressing:
```asm
MOV AX, [1000]  ; Load the value at memory address 1000 into register AX
```

Efficient for accessing fixed memory locations but lacks flexibility when working with dynamic data structures.

### Indirect Memory Addressing

Uses a register that contains the address of the data, rather than specifying the address directly in the instruction. This adds a layer of indirection that provides more flexibility.

For example:
```asm
MOV BX, 1000    ; Put address 1000 in register BX
MOV AX, [BX]    ; Load the value at the address contained in BX into AX
```

In this case, the processor first reads the address from register BX, then accesses that memory location. This allows for working with dynamic data structures and implementing concepts like pointers.

### Displacement Memory Addressing

Displacement (or based) addressing combines direct and indirect addressing. It adds a fixed offset (displacement) to a base address stored in a register.

For example:
```asm
MOV BX, 1000       ; Base address in BX
MOV AX, [BX + 20]  ; Access memory at address (1000 + 20)
```

Useful for:
- Accessing array elements (where BX points to the array base and the displacement is the offset of a specific element)
- Working with data structures (where BX points to the structure base and the displacement accesses specific fields)
- Implementing stack frames in function calls (where the base register points to the stack frame and displacements access local variables and parameters)

Displacement addressing makes it easier to write position-independent code and efficiently access structured data.
