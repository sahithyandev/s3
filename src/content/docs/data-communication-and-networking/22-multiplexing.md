---
title: Multiplexing
sidebar:
  order: 22
slug: data-communication-networking/multiplexing
prev: true
next: true
---

A technique used to send multiple signals over a single communication channel. Allows several data streams to share the same transmission medium. Increases efficiency and reduces costs. 

Multiplexing is used because:
- Most devices require fairly small bandwidth
- Single link is cost effective compared to having multiple links
- In wired medium, per kbps cost is lower for higher bandwidth

3 types:
- Time Division Multiplexing (TDM): Each signal gets a time slot.
- Frequency Division Multiplexing (FDM): Each signal uses a different frequency.
- Wavelength Division Multiplexing (WDM): Used in fiber optics, each signal uses a different wavelength.

## Frequency Division Multiplexing

Aka. FDM. Bandwidth is divided into multiple frequency ranges. Each frequency range is assigned to a signal. Minor gaps (aka. guard bands) are left in between to avoid interference. Idle signals cause a frequency range to be blank, which is wasted.

Issues in FDM:
- Crosstalk - interference between signals
- Intermodulation noise: amplifiers' nonlinear effects could cause interference.
- Limited number of signals that can be multiplexed

### FDM Process

A link's bandwidth is divided into multiple frequency ranges. Each frequency range is assigned to a signal. Guard bands are left in between to avoid interference.

Each different signal is modulated onto a carrier, sent through band-limiting filters. Composite signal is sent through the link. At the receiver's side band-pass filters are used to separate the signals. Demodulation is done and appropriate signals are sent to the appropriate destinations.

## Wavelength Division Multiplexing

Aka. WDM. Used in optical fibre. Similar to FDM.

Several sources generate a laser beam of different wavelengths. Optical amplifiers are used to amplify light signals of all wavelengths.

## Synchronous Time Division Multiplexing

Aka. Synchronous TDM.  Multiple signals can be carried on a single link by interleaving portions of each signal in time. The interleaving can be done at the bit level, or in blocks of bytes or larger quantities. Idle signals go blank, which is wasted. 

Assumes all sources run at the same data rate. But practical scenarios cause mismatched data rates, which breaks synchronization. Can handle sources of different data rates, by assigning multiple time slots to fast sources.

Possible only when achievable data rate of the medium is higher than the signals' data rate.

:::note

Named _synchronous_ not because it is related to synchronous transmission, but because the time slots are preassigned to sources and are fixed.

:::

### TDM Process

Data from each source is temporarily stored in source-specific buffers (typically one bit or one character). The buffers are scanned sequentially. Bits/characters from each buffer are combined to form a composite digital data stream, which is sent through the medium.

At the receiver, the stream is demultiplexed by separating the bits/characters according to their time slots and delivered to the appropriate destination signals.

### TDM Link Control

When an output device cannot accept data, TDM does not stop transmitting. Instead, the affected channel's time slots becomes empty. Other channels are not affected. Error handling is done on each channel separately. Protocols like High-Level Data Link Control (HDLC) are used to handle flow and error control.

### TDM Framing

An identifiable bit pattern (which is unlikely to occur on a data channel) is used to mark a frame boundary.

### Pulse Stuffing

A solution to avoid breaking synchronization in TDM between the source and receipent. Stuff bits (extra dummy bits) are added to slower sources.

## Statistical Time Division Multiplexing

Aka. Statistical TDM. In synchronous TDM, many time slots are wasted because of idle time. This is fixed in statistical TDM by dynamically allocating time slots on demand. Supports more devices than synchronous TDM. Typically, uses HDLC protocol.

Input buffers are scanned repeatedly. Once a frame is filled, the frame is transmitted. Receiver distributes the slots of data on to appropriate destinations.

### HDLC Frame

Contains:
- start, end bit patterns (flags)
- Destination address
- Control bits
