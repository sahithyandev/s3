---
title: Transmission Media
sidebar:
  order: 11
slug: data-communication-and-networking/transmission-media
prev: true
next: true
---

### Characteristics

- Cost    
  A dependent factor. More material used, more cost.
- Data Rate
- Bandwidth   
  higher bandwidth gives higher data rate
- Transmission impairments
  eg. Attenuation, dispersion, reflection
- Interference
  - Causes: electric motors, lightning strikes, other wires, spark
- Number of receivers in guided media    
  more receivers introduces more attenuation

## Guided

Aka. wired. Uses metals or fibre optics.
- Metals
  - Twisted pair
  - Coaxial cable
- Optical fiber

### Twisted pair

Based on copper or alloys. 4 pairs of wires are there.
- Straight copper act as antennas and pick extraneous signals.
- Insulated copper wires are twisted. To reduce interference (crosstalk).

Distance causes attenuation.

2 types:
- UTP: Unshielded twisted pair   
  Suffers from external EM interference.
- STP: Shielded twisted pair    
  Includes metal braid to reduce interference. More expensive, harder to handle.

### Coaxial cable

Has a central core, a dieletric insulator, metallic shield and a plastic jacket. Metallic shield protects from external EM interference.

Can tranmit signals in either:
- Baseband mode: single stream of data
- Broadband mode: multiple signals over multiple channels

Mostly analog signals.

### Optical fiber 

Made with plastic or glass. Signal is transmitted using light's total internal reflection. Allows long distance transmission. Protects from electrical noise. Large capacity. High transmission rate. Less resistive. Very thin compared to the above 2.

Short, rapid light pulses are emitted at different angles. Finite number of angles are possible. Each angle defines a path.

3 types:
- Single mode fiber   
  Core diameter is reduced so that only one mode of light can propagate.
- Multimode step-index fiber
- Multimode graded-index fiber

:::note

International and intercontinental communication, the internet is built on big optical fiber cables laid on the sea beds.

:::

## Unguided

Aka. wireless.

### Microwave
Highly directional.

2 types:
- Terrestial    
  Used for long haul telecommunications and short point-to-point links. requires fewer repeaters but line of sight. uses a parabolic dish to focus a narrow beam onto a receiver antenna. higher frequencies give higher data rates. main source of loss is attenuation.

- Satellite   
  A relay station. receives on one frequency, amplifies or repeats signal and transmits on another frequency. typically requires geo-stationary orbit. Used in television, long distance telephone, private business networks, global positioning.

### Radio waves

Can be omnidirectional if the antenna supports it. Line of sight is required. Suffers from multipath interference.

### Infrared waves

Highly directional. Blocked by physical obstacles. Used in tv remotes, IRD port.

## Antenna

Electrical conductor used to radiate or collect electromagnetic energy. Same antenna can be used for both transmission and reception.

### Isotropic antenna

An ideal one. A point in space that radiates equally in all directions.

### Radiation pattern

power radiated in all directions in a non-uniform manner.

### Antenna gain

Measure of directionality. Measured in decibels (dB).

```math
\text{Gain} = 10 \log_{10} \left( \frac{\text{Power output in a given direction}}{\text{Power output by an isotropic antenna}} \right)
```

## Wireless Propagation

### Ground wave

Propagated by waves which follow earth's curvature. Used for low and medium frequency waves.

Propogate despite obstacles due to:
- Diffraction
- Currents induced due to waves on surface

### Sky wave

Propagated by waves which bounce off the ionoshere. Used for high frequency waves.

:::note

Neither refraction nor ground wave propagation is not possible for high frequency waves above 30 MHz.

:::

### Line of sight

Propagation of waves in a straight line. Effective line of sight is required, which depends on bending and refraction by the atmosphere. Used for high frequency waves over 30 MHz. Used for short distances, as signal loss increases with distance. Atmospheric conditions can also affect signal quality, such as rain, fog, and humidity. Receiver may not be able to receive signal if it is obstructed or the wave refracted away.
