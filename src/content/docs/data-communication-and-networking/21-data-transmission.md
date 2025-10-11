---
title: Data Transmission
sidebar:
  order: 21
slug: data-communication-and-networking/data-transmission
prev: true
next: true
---

The way in which a bit group is sent from one device to another.

There are 2 transmission modes:
- Parallel
- Serial
  - Synchronous
  - Asynchronous
  - Isochronous
  
## Transmission Modes

### Parallel

Group of bits is sent simultaneously by using a separate line for each bit. Fast. Costly. Thicker wires are required to reduce signal degradation; and cannot be bundled into a single cable. Synchronization is required so the receiver samples the bits correctly.

#### Skew

When bits are not received simultaneously.
### Serial

Group of bits is sent over a single line, one bit a time. Cheap. Reliable. Increases hardware complexity.

#### Asynchronous Serial

Bits are divided into small groups (i.e. bytes) and sent separately. Transmitted when sender has data to send. 

Properties:
- Receiver does not know when to expect data.
- Unpredictable time intervals between transmissions.
- Timing maintained within each group.

Start and stop bit patterns are used to indicate the before and after data. Too much of overhead bits.

Example: keyboard inputs.

#### Synchronous Serial

Group of bits (_frame_) is sent simultaneously by using a single line. Slower than parallel. Cheaper.

Start, stop bit patterns are not used. Synchronization and control bits are included in the frame.

Frame structure varies with protocol. A general example:
- Synchronization bits - helps with timing
- Control bits - manages communication
- Data bits
- Error checking bits
- End-of-frame bits - to indicate the end of a frame

Interval between 2 adjacent frames is not constant.

#### Isochronous Serial

Hybrid of both synchronous and asynchronous. Sends blocks of data asynchronously, in other words the data stream can be transferred at random intervals. Once the start packet is transmitted, the data must be delivered with a guaranteed bandwidth.

Each character starts with a _start bit_ and ends at a _stop bit_. Each character is transmitted with a fixed time interval. High transmission rate like asynchronous.  Has advnatages of serial asynchronous.

Commonly used where data must be delivered within certain time constraints, like streaming video.

### Simplex

One direction of communication. Data can only flow in one direction.

### Half Duplex

Two directions of communication. Data can flow in both directions. Only one way communication at a given point of time.

### Full Duplex

Two directions of communication. Data can flow in both directions simultaneously.
