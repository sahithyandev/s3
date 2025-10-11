---
title: Modulation
sidebar:
  order: 8
slug: data-communication-networking/modulation
prev: true
next: true
---

The process of applying a signal onto a carrier signal.

Modulation is done to enable the transmission of information over long distances and through various media. By converting a low-frequency data signal into a higher-frequency carrier signal, modulation allows signals to:
- travel efficiently
- reduces interference
- share the same transmission medium (multiplexing)

It also helps match the characteristics of the transmission channel, improving reliability and signal quality.

### Carrier signal

A high-frequency continuous signal. Usually sine wave is used. Enables efficient long distance data transmission

### Modulation rate

Rate at which the signal level is changed. Measured in _bauds per second_.

### Mark

A signal element that represents a binary 1.

### Space

A signal element that represents a binary 0.

## Types

### Analog Modulation

- [Amplitude Modulation (AM)](/data-communication-networking/analog-to-analog/#am)
- [Frequency Modulation (FM)](/data-communication-networking/analog-to-analog/#fm)
- [Phase Modulation (PM)](/data-communication-networking/analog-to-analog/#pm)

### Digital Modulation

Used for transmitting digital data. Common digital modulation techniques include:

- [Amplitude Shift Keying (ASK)](/data-communication-networking/digital-to-analog/#amplitude-shift-keying)
- [Frequency Shift Keying (FSK)](/data-communication-networking/digital-to-analog/#frequency-shift-keying)
- [Phase Shift Keying (PSK)](/data-communication-networking/digital-to-analog/#phase-shift-keying)
- [Quadrature Amplitude Modulation (QAM)](/data-communication-networking/modulation/#quadrature-amplitude-modulation)

Each type of modulation has its own advantages and is chosen based on factors like noise resistance, bandwidth efficiency, and complexity.

#### QAM

Combines amplitude and phase modulation to transmit multiple bits per symbol. Logical extension of QPSK. Sends 2 different signals simultaneously on same carrier frequency, phase shifted. Each carrier is ASK modulated. Used on Asymmetric Digital Subscriber Line (ADSL).
