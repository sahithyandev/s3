---
title: Transmission Impairments
sidebar:
  order: 12
slug: data-communication-and-networking/transmission-impairments
prev: true
next: true
---

## Free space loss

Attenuation due to spread of the signal over large area.

```math
\text{Free space loss} = \frac{P_t}{P_r} = \frac{(4\pi f d)^2}{c^2}
```

Here:
- $P_t$: Power at transmission
- $P_r$: Power at reception
- $f$: Frequency of the signal
- $d$: Distance between attennas
- $c$: Speed of light in vacuum

```math
L_{\text{DB}} = 10 \log_{10} \left(\frac{(4\pi f d)^2}{c^2}\right)
```

## Multipath interference

When multiple copies of the signal reach the receiver with different delays. Caused because of reflection from obstacles.

In microwave, signal may refract and also go through curve paths so that it will reflect from ground.
