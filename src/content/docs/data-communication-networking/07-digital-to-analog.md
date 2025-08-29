---
title: Digital to Analog
sidebar:
  order: 7
slug: data-communication-networking/digital-to-analog
prev: true
next: true
---

## Techniques

Different methods are used to convert digital signals into analog signals.

### Amplitude Shift Keying

Aka. ASK. Values are represented by amplitudes of the carrier signal. Usually 1 amplitude is 0. Easy to implement. Requires relatively low bandwidth.

ASK is relatively inefficient for several reasons:

1. Poor noise immunity - amplitude variations can be easily corrupted by noise
2. Low power efficiency - varying amplitude requires linear amplifiers
3. Limited data rate capability compared to other modulation techniques
4. Reduced transmission range due to signal degradation
5. Less reliable in environments with signal fading or interference

Used over optical fiber.

### Frequency Shift Keying

Aka. FSK. The frequency of the carrier signal is varied to represent binary data. In FSK, different digital values are represented by discrete frequency changes:

- Binary 1: Carrier signal transmitted at one frequency (f₁)
- Binary 0: Carrier signal transmitted at another frequency (f₀)

#### Key Characteristics

1. Noise Resistance: FSK offers better noise immunity than ASK since noise typically affects amplitude more than frequency
2. Reliability: More reliable in noisy environments
3. Bandwidth Requirements: Requires more bandwidth than ASK
4. Applications: Widely used in modems, radio teletype, caller ID, and amateur radio

FSK is commonly used in applications where reliability is more important than bandwidth efficiency.

### BFSK

Short for Binary Frequency Shift Keying. Most common form of FSK. BFSK is a variant of FSK where only two frequencies are used to represent binary data.

Props:
- Simple
- Less susceptible to noise interference compared to ASK
- Allows high frequency 

### Multiple FSK

More than 2 frequencies are used. More bandwidth-efficient. More prone to errors. Each signal element represents more than 1 bit.

### Phase Shift Keying

Aka. PSK or PK. The phase of the carrier signal is varied to represent binary data. In its basic form, PSK uses different phase angles to represent different digital values:

#### Key Characteristics

1. Error Performance: Better error performance than ASK in noisy environments
2. Constant Envelope: Maintains constant amplitude, making it suitable for nonlinear channels
3. Bandwidth Efficiency: More bandwidth-efficient than FSK
4. Applications: Widely used in wireless communications, satellite communications, and digital cellular systems

#### Types of PSK

- Binary PSK (BPSK): Uses two phases (typically 0° and 180°)
- Quadrature PSK (QPSK): 
- 8-PSK, 16-PSK: Higher-order PSK schemes using more phase angles to represent more bits per symbol
- Differential PSK (DPSK): Encodes information in phase changes rather than absolute phases

### Mathematical Representation

The PSK signal can be represented as:

```math
s(t) = A × cos(2πft + θᵢ)
```

Here:
- $s(t)$ is the modulated signal
- $A$ is the amplitude (constant)
- $f$ is the carrier frequency
- $θᵢ$ is the phase angle that varies according to the digital input
- $t$ is time

PSK forms the basis for many advanced modulation schemes used in modern digital communications.

### Binary PSK

Two phases represent two binary digits

### Differential PSK

Phase shifted relative to previous transmission rather
than some reference signal

### Quadrature PSK

Each signal element represents more than 1 bit. Shifts phase by 90 degrees. Can use even more phase shifts.

:::note

For ASK and PSK bandwidth is directly related to bit rate.

FSK bandwidth related to data rate for lower frequencies, but to offset of modulated frequency from carrier at high frequencies.

In the presence of noise, bit error rate of PSK and QPSK are about 3dB superior to ASK and FSK.

:::
