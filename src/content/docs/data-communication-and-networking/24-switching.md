---
title: Switching
sidebar:
  order: 24
slug: data-communication-and-networking/switching
prev: true
next: true
---

A method used in networks to connect a sender to a receiver so that data can travel from source to destination.

Without switching every pair of devices would require a direct connection, which is impractical and inefficient. Switching allows multiple devices to share a single link, which reduces overall cost and complexity.

### Routing

Identifies the route traversed by data to get from source to destination.

## Types of Network

### Unswitched

A network where each device is directly connected to every other device or a common medium. No switching devices are used. When one device transmits data, all devices can _receive_ the message.

Simple design. Low cost. Easy to setup for small networks.

Collisions are highly likely. More devices mean more collisions. Not good in terms of security. Not reliable.

Examples:

- Point-to-point
- Multi-point
- Broadcast

### Switched

Data passes through one or more intermediate nodes between the sender and receiver.

## Types

### Circuit Switching

Establishes a dedicated physical path between sender and receiver for the entire communication session. Requires caller, callee and all intermediate links and nodes to be available at the same time. Once established, circuit capacity must be paid for, whether data is transmitted or not.

Constant, guaranteed bandwidth. Low transmission delay once the connection is established.

Inefficient if data is bursty. Setup time required before data transmission begins. Cannot be optimized while data is being transmitted. Not suitable for computer communications.

Used in human-to-human telephone calls.

#### Space-division switching
 
Each sample takes a different path through the switch, depending on the destination.

Crossbar is an example of space-division switch. Crosspoints can be turned on or off.

#### Time-division switching

Each call is divided into small pieces and each piece is assigned a time-slot. The contents of each time-slot are switched independently.

### Message Switching

Entire message is stored and forwarded at intermediate nodes. Message is sent progressively as each hop becomes available.

End-to-end delivery time cannot be guaranteed. Very long messages can hog buffers and links.

### Packet Switching

Data is divided into smaller units aka. _packets_ and transmitted over the network. Packets are variable-length.

Each packet contains:

- a header to identify the source and destination of the data
- a sequence number that allows the receiver to reassemble the data in the correct order
- data 

Each intermediate nodes switches incoming packet through a link to another node.

No need of dedicated paths. Ideal for bursty data.

Variable delay (aka. jitter) is possible. Packets may arrive out of order.

More flexible than circuit switching. Because it allows multiple devices to share a single link. More efficient than circuit switching. Can handle bursty data more effectively.

#### Virtual Circuit Packet Switching

Establishes a temporary virtual path between sender and receiver. All packets follow the same virtual path. Similar to circuit switching but with less overhead.

Packets are assigned to virtual circuits. Each VC has a virtual circuit identifier. Different VCIs are used in different links. Incoming and outgoing VCIs are managed by intermediate nodes using a table.

#### Datagram Switching

Packets are routed independently. No initial setups or delays.

Destination address of a packet stays the same throughout the transmission. Datagram switch uses a routing table to store destination address and output port.

Adapts to node or link failure during transmission.

Switching each packets is relatively expensive. Packets may arrive out of order.

#### Label Switching

A label is attached to packets, when they arrive at the switch. Each _core switch_ switches the packet based on the label, and then substitutes a new label for the next hop.

### Cell Switching

Similar to packet switching but uses fixed-size cells instead of variable length packets.
