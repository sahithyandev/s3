---
title: IEEE Standards
sidebar:
  order: 19
slug: data-communication-networking/ieee-standards
prev: true
next: true
---

[The IEEE](https://www.ieee.org/) defines several standards for networks under IEEE 802 family. These standards specify protocols, and technologies for local area networks (LANs) and metropolitan area networks (MANs), ensuring interoperability and reliable communication.

### For Wired Networks

<div class="table-1fr-auto">

| Standard    | Description                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| IEEE 802.1  | Standards for network bridging, management, and security                           |
| IEEE 802.2  | Logical Link Control (LLC) for LAN protocols                                       |
| IEEE 802.3  | Ethernet standard for wired LANs, including physical and data-link layer protocols |
| IEEE 802.5  | Token Ring LAN standard                                                            |
| IEEE 802.9  | Integrated voice and data networks over LANs                                       |
| IEEE 802.17 | Resilient Packet Ring for high-speed MANs                                          |

</div>

### For Wireless Networks

The IEEE 802 family also includes standards for wireless networking, which define protocols for wireless local area networks (WLANs) and personal area networks (PANs).


<div class="table-1fr-auto">

| Standard    | Description                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| IEEE 802.11 | Wi-Fi standard for wireless LANs. Includes amendments such as 802.11a/b/g/n/ac/ax, each improving speed, range, and reliability.                       |
| IEEE 802.15 | Standards for wireless personal area networks (WPANs), including Bluetooth (802.15.1), Zigbee (802.15.4), and other short-range wireless technologies. |
| IEEE 802.16 | WiMAX standard for broadband wireless MANs.                                                                                                            |
| IEEE 802.20 | Mobile Broadband Wireless Access (MBWA) standard for high-speed mobile data services.                                                                  |

</div>

## IEEE 802 Reference Model

An alternative (or simplified) model to OSI model.

Layers:
- Logical Link Control (LLC) Layer
- Medium Access Control (MAC) Layer
- Physical Layer
  - Transmission media and topology comes under the physical layer. Handles signal encoding/decoding. Generates and removes preample signals for synchronization. 

Combination of the 1st and 2nd layers is the data link layer in OSI model. Upper layers (network layer and above) are not in the scope of IEEE 802.

The data link layer is separated into 2 layers: LLC and MAC. Reason is to provide a clear separation between the logical and physical aspects of data transmission.

### MAC Layer

Handles how devices share the medium.

### LLC Layer

Provides a uniform interface to the Network Layer regardless of the medium.

## Transmission data format

### MAC Frame

Data transmitted in the MAC layer. A frame includes:
- MAC header
- LLC protocol data unit
- MAC trailer

### LLC Protocol Data Unit (PDU)

Data transmitted in the LLC layer. Includes:
- LLC header
- IP datagram

### IP Datagram

Data transmitted in the network layer. Includes:
- IP header
- TCP segment

### TCP Segment

Data transmitted in the transport layer. Includes:
- TCP header
- Application data
