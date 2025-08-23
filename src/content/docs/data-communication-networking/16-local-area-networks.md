---
title: Local Area Networks
sidebar:
  order: 16
slug: data-communication-networking/local-area-networks
prev: true
next: true
---

### Network 

A network is a group of interconnected devices that communicate and share resources with each other.

## Network Topologies

Devices (or stations) can be connected in different ways to form a network. Each has its own advantages and disadvantages. The appropriate topology must be chosen based on the requirements such as:
- cost
- reliablity
- expandability
- performance

### Bus Topology

All devices are connected to a single cable, known as bus. The bus acts as a shared communication channel. Supports full duplex communication. Simple and easy to implement. Can be difficult to troubleshoot and maintain.

Stations _tap_ into the bus. Terminators absorb reflections and prevent signal degradation.

### Tree Topology

An extension to the bus topology. Devices are connected to a bus. There will be multiple buses, each with its own terminator. All buses will connect to the headend.

:::note

In bus and tree topologies, there are 2 problems:
- Indicating whom the communication is intended to
- When to access the shared medium

And they are solved by:
- Data sent as frames with control information in header
– Media access control protocols

:::

### Ring Topology

A set of repeaters joined with point-to-point links in a closed loop. Unidirectional transmission by repeaters. Each station is attached to the network at a repeater.

Data transmitted as frames. Destination recognizes and reads data. Removed at source after full circulation.

### Star Topology

One station is a logical communication center. Works as broadcast (hub) or frame-switching device (switch). All communication passes through the central station.
