---
title: RAID
sidebar:
  order: 21
slug: operating-systems/raid
prev: true
next: true
---

Short for Redundant Array of Independent Disks. A setup of multiple disks, combined to form a single logical unit. Data is stored redundantly across disks to improve reliability. Increases mean time to failure.

Protects against individual disk failures. Does not protect against total storage array failure. Data is often automatically replicated between 2 or more storage arrays.

Frequently combined NVRAM to improve write performance.

### Mean Time To Failure

Aka. MTTF. Higher is better.

### Mean Time To Repair

Aka. MTTR. Refers to the average time required to detect, replace, and rebuild a failed disk in a RAID array so the system returns to full redundancy. During this time, the system is vulnerable to additional failures. Lower is better.

### Mean Time Between Failures

Aka. MTBF. Average time between failures of a system. Higher is better.

```math
\text{MTBF} = \text{MTTF} + \text{MTTR}
```

### Hot Spare Disks

Unallocated disks in RAID setup. Usually in a small number. Automatically replaced with a failed disk. Decreases MTTR.

## Techniques

### Stripping

When data is divided into blocks and distributed across multiple disks. Improves read/write speed by allowing parallel access.

### Mirroring

Aka. shadowing. Data is duplicated across multiple disks. If one disk fails, data can be retrieved from the other disk(s).

## RAID Level

Refers to different configurations of RAID. Each with its own method of data distribution and fault tolerance. 6 levels are available.

### RAID 0

Uses striping only. High speed. No redundancy. No fault tolerance.

### RAID 1

Uses mirroring only. Data is duplicated on 2 or more disks. Can survive 1 disk failure. Fast reads. More reliable. 50% usable space.

### RAID 4

Stripping is used for data. A dedicated disk stores parity information.

Usually congestion is caused on the parity disk, which degrades write performance.

### RAID 5

Data and parity are spread across all disks. Can survive 1 disk failure. Good read performance. Moderate write performance because of extra parity calculation. Balance of speed, cost, and fault tolerance.

Used in general-purpose storage.

### RAID 6

Similar to RAID 5 but stores 2 parity blocks per stripe. Can survive 2 disk failures.

Safer than RAID 5. Slower. Costlier. Slightly slower writes because of extra parity math.

Use Case: Large-capacity arrays where rebuild times are long.

### RAID 10

Aka. RAID 1+0. Pairs disks for mirroring, then does striping. Can survive multiple disk fails as long as they are in different  pairs. Very high read/write speed. Best mix of performance and reliability. Expensive.

Used in mission-critical systems.

### RAID 01

Aka. RAID 0+1. Creates a stripe set, then mirrors the set.

:::note

RAID 2, 3, 4 and 0+1 are early experimental versions which are not used now.

:::

## Mean Time To Data Loss

Aka. MTTDL. Depends on MTTF, MTTR and the RAID level.

Suppose $n$ number of disks are used in a RAID array. $F$, $L$ and $R$ are used instead of $\text{MTTF}$, $\text{MTTDL}$ and $\text{MTTR}$ respectively for simplicity.

### For RAID 0

```math
L = \frac{F}{n}
```

### For RAID 1

```math
L = \frac{(F)^2}{2 \cdot R}
```

### For RAID 5

```math
L = \frac{F^2}{n(n+1)\times R}
```

### For RAID 10

```math
L = \frac{F^2}{2n\times R}
```

## Extensions

RAID protects against disk failures, not data corruption.

### Snapshots
Frozen view before changes.

### Replication
Duplicate across sites. Can either be sync or async.

### ZFS

Zettabyte File System (ZFS) from Solaris adds end-to-end data integrity through [checksums](/operating-systems/mass-storage-systems/#checksum) and self-healing (automatically fixes errors when redundancy exists) storage. Can find silent data corruption. Checksums are calculated per block for both data and metadata. Checksums are stored separately. When data is read, checksums are rechecked. 

If the data is corrupted and the system is using mirrored or RAID-Z storage, ZFS can read a good copy from another disk and automatically repair the corrupted block.

ZFS also replaces partitions with dynamic storage pools (aka. _zpools_). Multiple file systems can dynamically share the pool.
