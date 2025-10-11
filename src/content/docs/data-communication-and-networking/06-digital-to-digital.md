---
title: Digital to Digital Encoding
sidebar:
  order: 6
slug: data-communication-and-networking/digital-to-digital
prev: true
next: true
---

### Multilevel Binary

Encoding more than 1 bit per 1 symbol. Achieved through having more than 2 voltage levels. The word is not implying 2 levels; it's used as it is used in digital communication. Can carry more bits per symbol. Requires more signal power (approx. $3\text{dB}$, or $2\text{x}$).

### Scrambling

The process of replacing the constant voltage levels with a filling sequence. To prevent the receiver from detecting the signal incorrectly.

#### Filling sequence

A bit sequence to replace a sequence of constant voltage level. Must produce enough transitions to sync. Must be recognized by the receiver, and replaced with original. Has same length as original.

## Schemes

- Non-Return to Zero-Level (NRZ-L)
- Non-Return to Zero Inverted (NRZI)
- Bipolar -AMI
- Pseudoternary
- Manchester
- Differential Manchester
- B8ZS
- HDB3

### NRZ-L

Short for Non-Return to Zero-Level. Two different voltage levels: 1 and 0. Either can be higher. Either can be positive or negative. Usually one is positive and the other is negative. Voltage is constant during bit interval.

### NRZ-I

Short for Non-Return to Zero-Inverted. A differential encoding scheme. Constant voltage during bit interval, similar to NRZ-L. Transition at start of a bit denotes a binary 1. No transition denotes a binary 0.

:::note[Pros & Cons of NRZ]

NRZ is used in magnetic recording. Not often used for signal transmission.

- Pros
  - Easy to implement
  - Efficient use of bandwidth (as there are no extra transitions)
- Cons
  - No built-in error detection
  - DC component won't be transmitted
  - Receiver may lose timing due to lack of transitions

:::

:::note

For the same error rate, NRZ is more power efficient compared to multilevel binary.

:::


### Bipolar-AMI

Short for Alternate Mark Inversion. Most common [bipolar encoding scheme](/data-communication-networking/encoding-decoding#biploar-encoding). 0 is represented by 0. 1 is represented by non-zero level, with alternating polarity.

Pros:
- No DC component
- No loss of sync due to long sequences of 1s
- Uses less bandwidth compared to Manchester
- Can detect errors ([bipolar violation](/data-communication-networking/encoding-decoding#biploar-violation))

Cons:
- Long sequence of 0s can cause loss of sync
- More complex compared to NRZ.
- Limited error detection (not all errors can be detected)

### Pseudoternary

Opposite of AMI. No advantage or disadvantage compared to AMI.

### Manchester

Aka. Phase encoding, or PE. A [biphase encoding scheme](/data-communication-networking/encoding-decoding#biphase-encoding). Each bit is represented by a transition at the middle part of the bit period.
- Low to high: 1
- High to low: 0

2 types of transitions:
- mid-bit transition   
  Always present. Carries data and works as a clock signal.
- start of the bit transition   
  Only present when consecutive bits are the same. Works as a timing cue.

Used by IEEE 802.3 which defines the physical and data-link layer's media access control of ethernet.

### Differential Manchester

Aka. Differential Phase encoding, or DPE. A [biphase encoding scheme](/data-communication-networking/encoding-decoding#biphase-encoding) and a [differential encoding scheme](/data-communication-networking/encoding-decoding#differential-encoding). Midbit transition is used for clocking. Non-midbit transitions denote the data. Transition at the start of a bit is 0. No transition means 1. 

Used by IEEE 802.5 which is used to build local area networks.

### B8ZS

[Bipolar](/data-communication-networking/encoding-decoding#bipolar-encoding) with 8-zero substitution. Based on [Bipolar-AMI](/data-communication-networking/digital-to-digital#bipolar-ami). Used to prevent long sequence of zeros in bipolar-AMI signals. Replaces 8 consecutive zeros with a special sequence that intentionally includes 2 bipolar violations.

**If** the octet is full of zeros and:
- Last voltage pulse preceding was +ve **then** encode as 000+-0-+
- Last voltage pulse preceding was -ve **then** encode as 000-+0+-

The intentional violations are placed to make sure the replacement is detected correctly. They don't mess up error detection because the specific 2 violations couple doesn't occur because of noise.

### HDB3

High Density Bipolar 3-level encoding. Similar to [B8ZS](/data-communication-networking/digital-to-digital#b8zs). Replaces 4 consecutive zeros with patterns containing a non-zero pulse, to maintain synchronization. The exact pattern depends on the number of pulses in the last substitution, to keep it DC-balanced. 

The substitution pattern includes:
- a violation pulse
- (optional) a balancing pulse
