---
title: Ethernet
sidebar:
  order: 20
slug: data-communication-networking/ethernet
prev: true
next: true
---

Introduced in 1973 by Robert Metcalfe in his PhD thesis. Named after _ether_ the imaginary substance. Became the IEEE 802.3 Standard.

Dominant in the industry because:
- cheap
- simple (compared to token LANs, ATMs)
- good performance (10Mbps - 10Gbps)

## Frame structure

Includes:
- preamble
- destination address
- source address
- type/length field
- data/payload
- frame check sequence (FCS)

### Preamble
7 bytes with pattern 10101010 followed by one byte with pattern 10101011. Used to synchronize receiver, sender clock rates.

### Address

6 byte source and destination MAC addresses are included.

### Type

Indicates the higher layer protocol.

Examples: IP, Novell IPX, AppleTalk.

### CRC

To check if there are any errors with the frame. If so, the frame is discarded.
