---
title: Layered Architecture
sidebar:
  order: 2
slug: data-communication-networking/layered-architecture
prev: true
next: true
---

Functionality of communication through the network is split into separate layers.

### Advantages

- Simplified Design  
  Each layer handles specific functions, making the system easier to design and manage.
- Modularity  
  Layers are independent; changes in one layer don’t affect others.
- Interoperability  
  Standardized interfaces allow different systems and vendors to work together.
- Ease of Troubleshooting  
  Problems can be isolated to specific layers.
- Flexibility  
  New technologies can be implemented in one layer without redesigning the whole system.
- Scalability  
  Easier to scale or upgrade systems layer by layer.

## OSI Model

Short for Open Systems Interconnection Model. A conceptual framework used to describe how data is transmitted over a network. Consists of 7 layers, each responsible for a specific function in the communication process.

### Application Layer

Provide network-based services to applications. Protocols used by the applications come under the application layer.

Examples:
- File transfer (FTP)
- Email (SMTP)
- Web browsing (HTTP)
- Voice over IP (VoIP)
- Real-time communication (WebRTC)

### Presentation Layer
Prepares data for transmission, and the application layer. Translates the data from and to a standard format.

Handles:
- Formatting
- Encryption
- Compression

Usually in real systems, not implemented as a separate layer:
- Data formatting, encryption and compression are usually handled, and required at the application layer.
- Integrated protocols handle presentation tasks without requiring a separate layer.

Examples:
- JPEG (Joint Photographic Experts Group)
- MPEG (Moving Picture Experts Group)
- ASCII (American Standard Code for Information Interchange)

### Session Layer

Provide a means of controlling the dialogue between two users (applications).

Handles:
- Session management: starts and ends communication sessions
- Dialog control (full vs half duplex): who can send data and when. prevents data collisions. ensures proper ordering of data packets.
- Token management
- Synchronization: manages the timing of data transmission to ensure that data is transmitted at the right time.
- Recovery management

Not often implemented separately in real systems, because it is usually integrated into the transport layer or application layer. Modern applications handle sessions by their own standards.

Examples:
- HTTP (Hypertext Transfer Protocol)
- FTP (File Transfer Protocol)

### Transport Layer

Transmits semgents between 2 hosts. A host is a device that is running applications and using transport protocols to send or receive data over a network.

Handles:
- Connection establishment and termination
- Multiplexing and demultiplexing   
  Allows multiple applications to share a single connection using different ports.
- Segmentation and reassembly   
  Breaks larger data into smaller segments, and reassembles them at the destination
- Error detection and correction   
  Detects errors in data transmission and corrects them.
- Flow control   
  Manages the data transfer rate to prevent congestion and ensure reliable delivery.
- Congestion control

Examples:
- TCP (Transmission Control Protocol)
- UDP (User Datagram Protocol)

### Network Layer

Transmits packets (aka. datagrams) across different networks from source to destination.

Handles:

- Logical addressing: which machine to send the packet to
- Routing: how to reach the destination efficiently
- Datagram encapsulation

Examples:
- IPv4 (Internet Protocol version 4)
- IPv6 (Internet Protocol version 6)
- ICMP (Internet Control Message Protocol)
- MPLS (Multiprotocol Label Switching)

### Data Link Layer

Transmits _frames_ with headers, control and addres information. Provides reliable, error-free transmission across a single link (single medium), in the same network.

Handles:

- data framing: dividing a data stream into manageable chunks
- error detection and correction
- flow control   
  Manages frame flow rate to prevent overflow
- addressing and routing

#### Media Access Control (MAC)

A unique hardware identifier to a network interface card (NIC). Usually a 48-bit identifier. Used for uniquely identifying devices on a network. Can be spoofed in the software level for security purposes.

A method used to control how devices share and access the communication medium. Each device in a local network has a unique MAC address.

### Physical Layer

Transmits a raw string of bits over a physical medium. Can either be wired or wireless.

Handles:
- Bit rate: how fast the bits are sent
- Encoding
- Signaling
