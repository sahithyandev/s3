---
title: IP Addressing
sidebar:
  order: 26
slug: data-communication-and-networking/ip-addressing
prev: true
next: true
---

If a router, or a PC has multiple interfaces, each interface will have its own IP address.

## Methods

### Fixed Length Subnet Mask (FLSM)

A method of dividing an IP network into subnets where each subnet is of equal size and uses the same subnet mask. All subnets have the same host capacity.

Easier for network planning. But sometimes less efficient.

### Variable Length Subnet Mask (VLSM)

Allows a network to be divided into subnets of different sizes, each with its own subnet mask. Enables more efficient use of IP address space.

Managed by carefully planning the network, starting with the largest required subnets and working down to the smallest, ensuring that address ranges do not overlap.

### Classfull Addressing

An obsolete method. Network and host part of the IP address are divided based on fixed classes.

| Class | Starting Bits | Address Range               | Default Subnet Mask | Network Bits | Host Bits | No. of Networks | Hosts per Network |
| ----- | ------------- | --------------------------- | ------------------- | ------------ | --------- | --------------- | ----------------- |
| A     | 0             | 1.0.0.0 – 126.255.255.255   | 255.0.0.0           | 8            | 24        | 128             | 16,777,214        |
| B     | 10            | 128.0.0.0 – 191.255.255.255 | 255.255.0.0         | 16           | 16        | 16,384          | 65,534            |
| C     | 110           | 192.0.0.0 – 223.255.255.255 | 255.255.255.0       | 24           | 8         | 2,097,152       | 254               |
| D     | 1110          | 224.0.0.0 – 239.255.255.255 | —                   | —            | —         | —               | Multicasting      |
| E     | 1111          | 240.0.0.0 – 255.255.255.255 | —                   | —            | —         | —               | Experimental      |

### CIDR

Short for Classless Inter-Domain Routing. A method of allocating IP addresses that allows for more efficient use of IP addresses.

IP address is divided into 2 parts:

- subnet part: same for all devices in the subnet
- host part: different for each host

### Address format

<span class="font-mono">192.168.12.0/24</span>

Here the ending 24 defines the length of subnet part.
