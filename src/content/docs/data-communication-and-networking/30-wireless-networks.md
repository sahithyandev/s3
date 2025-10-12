---
title: Wireless Networks
sidebar:
  order: 30
slug: data-communication-and-networking/wireless-networks
prev: true
next: true
---

Wireless networks are required when devices are mobile, users are nomadic and temporary connections are needed.


## Challenges

Wireless networks face more challenges compared to wired networks.

- Finding location of nodes
- Services (Addressing, Routing, etc.)
- Path loss, Fading, Interference
- Multipath propagation

### Handoff

Change of attachment from one base station to another.

### Hidden Terminal Problem

When two or more stations are within range of each other but not within range of the base station, they cannot communicate directly.

### Spread spectrum

A technique used in wireless networks to transmit signals over a wider frequency band than the required minimum.

Helps reduce interference, improve resistance to eavesdropping, and enhance reliability in environments with noise and multipath effects.

Common spread spectrum methods include Frequency Hopping Spread Spectrum (FHSS) and Direct Sequence Spread Spectrum (DSSS).

### FHSS

Short for Frequency Hopping Spread Spectrum. A spread spectrum technique that uses a pseudo-random sequence of frequencies to transmit data. The transmitter hops between frequencies at a high rate, making it difficult for an attacker to intercept the signal. Spreading code defines the order of frequencies that are used.

### DSSS

Short for Direct Sequence Spread Spectrum. Each bit in the original signal is represented by multiple bits in the transmitted signal using a _spreading code_.

Spreading code is a pseudo-random sequence of bits.

Data stream is combined with spreading code using XOR at
the sender. Received signal is de-spread by XOR-ing with the same
spreading code.

## Code Division Multiple Access

A multiplexing technique used with spread spectrum.

### Steps

- Take the data signal
- Break each bit into _chips_ according to a fixed pattern called _chipping code_
  - Chipping code a sequence of '1's and '-1's.
  - Specific to each user.
  - Codes must be orthogonal
  - Data signal’s ‘1’ is represented by chipping code as it is and ‘0’ by complement of the code
- Decode the received chip pattern using bit by bit
multiplication with chipping code of relevant sender

## Terminology

### Base Station

A wireless access point that provides connectivity to a wireless network.

### BSS
Short for Basic Service Set. The smallest building block of a WLAN. A set of stations executing same MAC protocol and competing for same shared wireless medium.

### DS

Short for Distribution System. A system used to interconnect a set of BSSs and integrated LANs to create
an extended service set (ESS).

### IBSS

Short for Independent BSS. Aka. ad hoc network. A BSS that forms a self-contained network, and in which no access to a DS is available. No infrastructure to connect to. Nodes themselves provide services. 

## Standard

Standardized by IEEE 802.11. There are many versions of this standard such as IEEE 802.11a, IEEE 802.11b, IEEE 802.11g, IEEE 802.11n, and so on.

### Frame Structure

Frame header includes 4 addresses:
- Address 1: MAC address of the wireless receiving station
- Address 2: MAC address of the wireless transmitting station
- Address 3: MAC address of the (router) interface via which the BSS connects to other networks
- Address 4: for Ad-hoc mode of operation

## Media Access Control

### DFWMAC

Short for Distributed Foundation Wireless MAC.

Optional centralized control is built on top of it.

Uses Distributed Coordination Function (DCF) for
distributed access control and Point Coordination
Function (PCF) for centralized control.

Examples:
- DCF: CSMA/CA (Carrier Sense Multiple Access/Collision Avoidance)
- PCF: Polling by Centralized Polling Master
