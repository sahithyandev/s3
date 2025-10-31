---
title: Domain Specific Architectures
sidebar:
  order: 17
slug: computer-architecture/domain-specific-architectures
prev: true
next: false
---

Custom hardware designs optimized for a specific class of applications. Flexibility is traded for higher performance and energy efficiency in a given domain.

General-purpose CPUs reached performance limits despite [Moore’s Law](https://en.wikipedia.org/wiki/Moore%27s_law). Even more performance improvements can be achieved using dedicated hardware designs for the given domain. However, designing a new silicon chip costs a significant amount of time and money.

Examples:
- GPUs
- Neural / Tensor Processing Units (NPUs, TPUs)
- Crypto co-processors
- Image / Vision accelerators

## Design Guidelines

- Use on-chip memories to reduce data movement.
- Invest in arithmetic units or on-chip memory rather than control logic.
- Choose parallelism that best fits the domain (SIMD, systolic array, etc.).
- Use the most suitable data precision.
- Support a domain-specific programming language or API (TensorFlow, Halide).

## 4. Deep Neural Network Architectures

### Multi-Layer Perceptron (MLP)

* Each neuron computes a weighted sum and activation.
* Number of operations per layer = 2 × input_dim × output_dim.

### Convolutional Neural Network (CNN)

* Layers extract hierarchical features (edges → corners → shapes → objects).
* High computation and weight reuse.
* Core operations: matrix–matrix multiply, convolution, ReLU, sigmoid, tanh.

### Recurrent Neural Network (RNN)

* Used for sequence data; recurrent connections across time steps.
* Many matrix–vector multiplies per cell; operations/weight ≈ 2.



## 5. Tensor Processing Unit (TPU)

* Google’s ASIC for neural networks.
* 256×256 8-bit matrix-multiply unit.
* Uses large on-chip memory and acts as a PCIe co-processor.
* Instruction set includes:

  * Read/Write host memory
  * Read weights
  * Matrix multiply / convolution
  * Activation functions

### Design Approach

* Dedicated memories (24 MiB buffer).
* Many arithmetic units (250× vs CPU).
* Exploits 2D SIMD parallelism.
* 8-bit integers.
* Programmed via TensorFlow.



## 6. Microsoft Catapult

* FPGA-based accelerator for CNNs and search ranking.
* Connected in a 6×8 torus network.
* Uses Verilog RTL; 3926 ALUs, 5 MiB memory.
* Parallelism types:

  * 2D SIMD for CNN
  * MISD for search ranking.
* Uses both 8-bit integers and 64-bit floating point.



## 7. Intel Crest

* DNN training accelerator.
* 16-bit fixed-point arithmetic.
* Works on 32×32 matrix blocks.
* Uses SRAM + high-bandwidth HBM2 memory.



## 8. Google Pixel Visual Core

* Image processing and vision accelerator.
* Performs stencil operations for imaging.
* Uses Halide (DSL) → compiled to virtual and physical ISAs.
* Optimized for energy and 2D access patterns.
* Each core: 128+64 MiB memory, 16×16 2D array processing elements, 2D SIMD & VLIW.
* Uses 8- and 16-bit integers.



## 9. Common DSA Principles

| Principle                  | Example                                |
| -- | -- |
| Dedicated memory           | TPU (unified buffer), Visual Core SRAM |
| Domain-matched parallelism | 2D SIMD, systolic arrays               |
| Reduced data precision     | 8- or 16-bit fixed-point               |
| Domain language            | TensorFlow, Halide                     |
| Arithmetic-focused design  | Many ALUs vs small control             |



## 10. Fallacies and Pitfalls

* Designing custom chips costs >$100M.
* Performance counters added too late.
* Wrong DNN task selection can waste effort.
* Metrics like IPS may not capture full performance.
* Ignoring past architectural lessons leads to repeat mistakes.



### Summary

Domain-specific architectures focus on **targeted acceleration** — trading flexibility for efficiency.
They rely on **parallelism, reduced precision, and specialized memory**.
Examples like **TPU, Catapult, and Visual Core** show how tailoring architecture to a domain gives major gains in speed and energy efficiency.
