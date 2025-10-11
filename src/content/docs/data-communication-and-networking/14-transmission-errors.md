---
title: Transmission Errors
sidebar:
  order: 14
slug: data-communication-and-networking/transmission-errors
prev: true
next: true
---

When data is transmitted as a signal, due to various factors, the signal gets distorted or corrupted. It leads to errors in the received data, which can cause problems in communication systems. The errors must be detected and corrected.

In OSI model, the error detection and correction is done at the transport and data link layers. In the Internet model, the error detection and correction is done at the network layer. In this module, error detection and correction in data link layer is focused more.

## Noise

Always present in real life. Can be caused by various factors such as electromagnetic interference, thermal noise, and atmospheric noise.

### White Noise

Aka. thermal noise, gaussian noise. Continuous, random noise spread evenly across all frequencies. A type of random noise that has equal intensity at different frequencies, giving it a constant power spectral density. Relatively constant. Can be reduced by using higher signal power or better shielding. If gets too strong, can disrupt the communication.

### Impulse Noise

Sudden, short-duration spikes in the signal. One of the most disruptive forms of noise. Random spikes of power that can destroy one or more bits of information. Difficult to remove from an analog signal because it may be hard to distinguish from the original signal. Can damage more bits if the bits are closer together or transmitted at a faster rate.

### Crosstalk

Unwanted coupling between two different signal paths. Relatively constant and can be reduced with proper measures.

### Echo

A delayed repetition of the original signal. The reflective feedback of a transmitted signal as the signal moves through a medium. Most often occurs on coaxial cable. If bad enough, it could interfere with original signal. Relatively constant. Can be significantly reduced.

### Jitter

Variability in the timing of received signal elements (bits, packets, or clock pulses). The result of small timing irregularities during the transmission of digital signals. Occurs when a digital signal is repeated over and over. If serious enough, jitter forces systems to slow down their transmission. Can be reduced using shielding.

### Delay distortion

Occurs because the velocity of propagation of a signal through a medium varies with the frequency of the signal. Can be reduced using equalizers.

### Attenuation

The reduction in signal strength as it travels through a medium. If the signal gets too weak, the receiver can't detect the bits. Can be reduced using less lossy mediums, or amplifiers.

### Distortion

As signal travels, it become distorted (changes shape). Successive bits may merge, making reception difficult.

### Interference

Unwanted signal from outside sources. Often intermittent, difficult to diagnose.
