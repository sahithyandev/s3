---
title: Digital to Analog Encoding
sidebar:
  order: 7
slug: data-communication-networking/digital-to-analog
prev: true
next: true
---

## Amplitude Shift Keying

Aka. ASK. Values are represented by amplitudes of the carrier signal. Usually 1 amplitude is 0. Easy to implement. Requires relatively low bandwidth.

ASK is relatively inefficient for several reasons:

1. Poor noise immunity - amplitude variations can be easily corrupted by noise
2. Low power efficiency - varying amplitude requires linear amplifiers
3. Limited data rate capability compared to other modulation techniques
4. Reduced transmission range due to signal degradation
5. Less reliable in environments with signal fading or interference

Used over optical fiber.

## Frequency Shift Keying

Aka. FSK. The frequency of the carrier signal is varied to represent binary data. In FSK, different digital values are represented by discrete frequency changes:

- Binary 1: Carrier signal transmitted at one frequency (f₁)
- Binary 0: Carrier signal transmitted at another frequency (f₀)

Characteristics:

- Noise Resistance   
  FSK offers better noise immunity than ASK since noise typically affects amplitude more than frequency
- More reliable in noisy environments
- Requires more bandwidth than ASK

Commonly used in applications where reliability is more important than bandwidth efficiency.
Widely used in modems, radio teletype, caller ID, and amateur radio.

### BFSK

Short for Binary Frequency Shift Keying. Most common form of FSK. BFSK is a variant of FSK where only two frequencies are used to represent binary data.

Props:
- Simple
- Less susceptible to noise interference compared to ASK
- Allows high frequency 

### Multiple FSK

More than 2 frequencies are used. More bandwidth-efficient. More prone to errors. Each signal element represents more than 1 bit.

## Phase Shift Keying

Aka. PSK or PK. The phase of the carrier signal is varied to represent binary data. In its basic form, PSK uses different phase angles to represent different digital values:

Characteristics:

- Error Performance: Better error performance than ASK in noisy environments
- Constant Envelope: Maintains constant amplitude, making it suitable for nonlinear channels
- More bandwidth-efficient than FSK

Widely used in wireless communications, satellite communications, and digital cellular systems.

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

Two phases represent two binary digits. Typically 0° and 180° are used.

### Differential PSK

Phase shifted relative to previous transmission rather than some reference signal.

### Quadrature PSK

Each signal element represents more than 1 bit. Shifts phase by 90 degrees. Can use even more phase shifts. Named as 8-PSK, 16-PSK, etc based on the number of phase shifts.


## Comparison

For ASK and PSK, bandwidth is directly related to bit rate.

FSK bandwidth related to data rate for lower frequencies, but to offset of modulated frequency from carrier at high frequencies.

### Noise performance

In the presence of noise, bit error rate of PSK and QPSK are about 3dB superior to ASK and FSK.
