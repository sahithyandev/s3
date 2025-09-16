---
title: IP Addressing
sidebar:
  order: 24
slug: data-communication-networking/ip-addressing
prev: true
next: false
---

IP is a 32 bit address that is used to uniquely identify a device on a network. Composed of four octets, each ranging from 0 to 255, separated by periods. For example, 192.168.0.1 is a valid IP address.

:::note[IPv4 and IPv6]

For this module, whenever IP is mentioned it refers to IPv4. 

There is also another version of IP which is IPv6. A 128-bit address. Composed of eight groups of four hexadecimal digits, separated by colons. For example, 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid IPv6 address.

:::

If a router, or a PC has multiple interfaces, each interface will have its own IP address.

## Subnet

Short for subnetworks. Devices within a subnet can communicate with each other directly without the need for a router.

Used to divide a network into smaller networks.

### Fixed Length Subnet Mask (FLSM)

A method of dividing an IP network into subnets where each subnet is of equal size and uses the same subnet mask. All subnets have the same host capacity.

Easier for network planning. But sometimes less efficient.

### Variable Length Subnet Mask (VLSM)

Allows a network to be divided into subnets of different sizes, each with its own subnet mask. Enables more efficient use of IP address space.

Managed by carefully planning the network, starting with the largest required subnets and working down to the smallest, ensuring that address ranges do not overlap.

### CIDR

Short for Classless Inter-Domain Routing. A method of allocating IP addresses that allows for more efficient use of IP addresses.

IP address is divided into 2 parts:
- subnet part: same for all devices in the subnet
- host part: different for each host

#### Address format

$ 192.168.12.0/24 $

Here the ending 24 defines the length of subnet part.


### Network Address

First address of the subnet. Can be assigned to a device, but not recommended as a best practice.

$ 192.168.12.0 $

### Broadcast Address

Last address of the subnet. Cannot be assigned to a device. If assigned, the network communication will malfunction.

$ 192.168.12.255 $

## IANA

Short for Internet Assigned Numbers Authority. Responsible for assigning IP addresses and other network-related resources.

### Private IP Blocks

Reserved for private networks. Globally non-routable. Not unique. Only unique within a private network.

| Class   | CIDR Notation      | Start IP       | End IP         |
|---------|--------------------|----------------|----------------|
| Class A | 10.0.0.0/8         | 10.0.0.0       | 10.255.255.255 |
| Class B | 172.16.0.0/12      | 172.16.0.0     | 172.31.255.255 |
| Class C | 192.168.0.0/16     | 192.168.0.0    | 192.168.255.255|
