---
title: Permanent Storage
sidebar:
  order: 9
slug: computer-architecture/permanent-storage
prev: true
next: true
---

Retains data even when power is off. Can either be magnetic, solid-state, or optical media.

## Hard Disk Drives (HDD)

Magnetic. Cost per GB is low.

### Platter

A circular disk coated with magnetic material. Data can be corrupted if exposed to high temperatures or magnetic fields or shocks.

### Spindle

Holds and rotates platters at high speed. Typically 5400–15000 RPM.

### Read/Write Heads

Float above each platter surface. Magnetize spots to represent bits.

### Actuator Arm

Moves the heads radially to position them over the correct track.

### Tracks

Circular paths on the platter surface where data is stored. Centered around the spindle.

### Sectors

Circular segments within tracks. Each sector contains a header and data payload.

### Seek Time

Time to move the head to the correct track. Typical: 3–10 ms.

### Rotational Latency

Time for the desired sector to rotate under the head.

```math
\text{Average} = \frac{1}{2} \times \text{rotation period}
```

### Transfer Time

Time to read/write the bits once head is in position. Depends on data rate.

### Total access time

Typically 5–15 ms for random access.

```math
\text{Total access time} = \text{Seek} + \text{Rotational} + \text{Transfer}
```

## Solid State Drives (SSD)

Built using NAND flash memory (arrays of floating-gate transistors). No moving parts; purely electronic read/write operations. Data organized into pages (~4 KB). Pages are grouped into blocks (~256 pages).

Extremely low latency (tens of µs). High throughput via parallel memory channels. Limited write cycles (wear leveling required). Instant random access. Shock-resistant and silent. Lower power consumption. High durability.

Cost per GB higher than HDD. Limited write endurance (mitigated by controller algorithms).

## Optical Storage

Very low cost per GB. Access time is typically 100–200 ms. High durability, ideal for distribution or archiving.

- Capacities:
  - CD: ~700 MB
  - DVD: 4.7–8.5 GB
  - Blu-ray: 25–50 GB

Uses laser reflection on a spiral track embedded in a polycarbonate disc. Data encoded as pits (non-reflective) and lands (reflective). Track forms a continuous spiral from the disc center outward.
