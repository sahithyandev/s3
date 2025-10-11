---
title: Encoding & Decoding
sidebar:
  order: 5
slug: data-communication-and-networking/encoding-decoding
prev: true
next: true
---

Encoding is the process of taking a signal and converting it into a form that can be transmitted over a communication medium.

Data can either be analog or digital. Signals can either be analog or digital. Encoding must be done between the 2 types, thus 4 variations. For this module, [digital data to digital signals](/data-communication-networking/digital-to-digital) is focused most.

## Terms

### Polar

One logic state represented by positive voltage and other by negative voltage.

### Unipolar

All signal elements have the same sign.

### Length of a bit

Aka. duration of a bit. Time taken for transmitter to emit a bit. Larger the bit length, lesser the data rate but convenient for the devices. If the bit length is too short, it might be difficult for the receiver to detect the signal elements accurately.

### Baseband

For digital signals: entire medium carries only one data signal at a time. Example: ethernet.

For analog signals: original frequency range of an analog signal before it is modulated.

### Broadband

Any type of signal transmission technique that carries two or more different data in separate channels.

## Encoding Types

### Level encoding

Data is represented in voltage levels. Less reliable due to noise and interference.

### Differential encoding

Data is represented by changes rather than levels. More reliable detection. More complicated than level encoding.

Examples:

- [NRZ-I](/data-communication-networking/digital-to-digital#nrz-i)

### Bipolar encoding

A return-to-zero type encoding. 2 non-zero levels and zero level are used. Standard bipolar encodings are designed to be DC-balanced.

Examples:
- [Bipolar-AMI](/data-communication-networking/digital-to-digital#bipolar-ami)

#### Bipolar violation

A violation of the bipolar encoding. Where 2 pulses of the same polarity occur without an intervening pulse of the opposite polarity. Indicates an error in transmission.

### Biphase encoding

Uses transitions to represent bits. Combines clock and data. Fixes synchronization issues due to prolonged constant voltages.

Pros:
- Self-clocking
- No DC component
- Error detection using absent mandatory transition

Cons:
- At least 1 transition per bit (possibly 2)
- Requires more bandwidth
- Maximum modulation is 2 times of NRZ

Examples:
- [Manchester](/data-communication-networking/digital-to-digital#manchester)
- [Differential Manchester](/data-communication-networking/digital-to-digital#differential-manchester)
