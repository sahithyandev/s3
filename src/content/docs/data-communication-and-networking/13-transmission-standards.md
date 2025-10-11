---
title: Transmission Standards
sidebar:
  order: 13
slug: data-communication-networking/transmission-standards
prev: true
next: true
---

Defines how data is transmitted between devices, from the physical perspective.

Important becase:
- Interoperability: Standards ensure equipment from various vendors can work together seamlessly
- Performance Predictability: Engineers can design systems with known performance characteristics
- Troubleshooting: Standardization simplifies diagnostics and problem resolution
- Scalability: Standards enable networks to grow without compatibility issues
- Cost Efficiency: Standardized components typically cost less than proprietary solutions

### Common Transmission Media Standards

#### Copper-based Standards
- Cat5e/Cat6/Cat6A: TIA/EIA-568 standards for twisted pair cabling that define performance parameters like maximum length (100m), bandwidth (1Gbps to 10Gbps), and crosstalk limits
- RG-6/RG-59: Coaxial cable standards used in cable television and some network applications

#### Fiber Optic Standards
- OM3/OM4/OM5: Multimode fiber standards optimized for different wavelengths and distances
- OS1/OS2: Single-mode fiber standards for long-distance transmission up to 10km or more
- G.652/G.655: ITU-T standards that define optical fiber characteristics for telecommunications

#### Wireless Standards
- IEEE 802.11ac/ax/be: Wi-Fi standards defining frequencies, modulation schemes, and protocols
- Bluetooth (IEEE 802.15.1): Short-range wireless standard for personal area networks
- 5G NR (New Radio): 3GPP standard for cellular networks with enhanced data rates and lower latency

## IEEE 802

A crucial family of specifications for local area networks (LANs) and metropolitan area networks (MANs). Developed and maintained by IEEE. Ensure compatibility and interoperability across network devices and technologies.

### Specific IEEE 802 Standards

- IEEE 802.1: Covers higher-level interface standards, including bridging, network management, and security protocols
- IEEE 802.3 (Ethernet): Defines wired Ethernet technology, from physical media specifications to frame formats and access methods
  - Includes variants like 10BASE-T, 100BASE-TX, 1000BASE-T, and modern 10/40/100 Gigabit Ethernet
- IEEE 802.11 (Wi-Fi): Specifies wireless LAN protocols across various frequency bands
  - Encompasses popular versions like 802.11n, 802.11ac, 802.11ax (Wi-Fi 6), and emerging 802.11be (Wi-Fi 7)
- IEEE 802.15: Covers wireless personal area networks (WPANs)
  - 802.15.1 formed the basis for Bluetooth
  - 802.15.4 underpins technologies like ZigBee and Thread
- IEEE 802.16 (WiMAX): Defines broadband wireless access for metropolitan area networks

### Structure of IEEE 802 Standards

Each IEEE 802 standard typically addresses specific layers of the OSI model:
- Physical Layer (Layer 1): Defines electrical, mechanical, and procedural interfaces
- Data Link Layer (Layer 2): Split into two sublayers:
  - Media Access Control (MAC): Controls how devices gain access to the medium
  - Logical Link Control (LLC): Handles flow control and error checking
