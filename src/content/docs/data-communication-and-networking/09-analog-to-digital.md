---
title: Analog to Digital Encoding
sidebar:
  order: 9
slug: data-communication-networking/analog-to-digital
prev: true
next: true
---

Analog data is converted to digital data and then digital signal.

## Digitization

Conversion of analog data into digital data.

### PCM

Short for Pulse Code Modulation.

Done in 3 steps.

#### Sampling

Analog signal is measured at regular intervals. Must be sampled at $2f$ frequency where $f$ is the highest signal frequency, as [Nyquist theorem](/data-communication-network/signals#nyquist-theorem) says.

#### Quantization

Each sample is approximated to the nearest value of the finite set of $2^n$ levels. Represented by $n$ bits. The approximation is called quantization error.

If the set of levels are placed linearly, low amplitude signals might get very low precision. To fix that:

- non-linear quantization can be used. Here, the levels are placed logarithmically. Reduces overall signal distortion.
- companding can be used. Companding means compression + expanding. Used to reduce effects of quantization noise especially in low-amplitude parts.

#### Encoding

Each quantized sample is converted to a binary number.

### Delta Modulation

Analog input is approximated by a staircase function. The value is increased or decreased at each sample interval based on the difference between the current sample and the previous sample, which is the delta.
