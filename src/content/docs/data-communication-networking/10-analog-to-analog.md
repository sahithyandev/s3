---
title: Analog To Analog
sidebar:
  order: 10
slug: data-communication-networking/analog-to-analog
prev: true
next: true
---

Analog signals are modulated because:
- Higher frequency gives more efficient transmission.
- Permits frequency division multiplexing.

## Modulations

### AM

Short for Amplitude Modulation. Amplitude of the carrier signal is varied according to information. Frequency of the carrier signal is much greater than the input message signal frequency.

```math
s(t) = A_c (1 + km(t)) \cos(\omega_c t)
```

Here:
- $A_c$: Amplitude of the carrier signal
- $k$: Modulation index
- $m(t)$: Modulation signal
- $\omega_c$: Angular frequency of the carrier signal

The carrier signal would be given by: $c(t) = A_c \cos(\omega_c t)$. $ $

$A_c(1 + km(t))$ is called the envelope of the signal. $ $

### FM

Short for Frequency Modulation. Frequency of the carrier signal is varied according to information.

```math
s(t) = A_c\cos(\omega_c t + \theta(t))
```

Here:
```math
\theta(t) = 2\pi \Delta_f \int_{-\infty}^t m(\tau) \text{d}\tau
```

- $\Delta_p$: Phase modulation index
- $A_c$: Amplitude of the carrier signal
- $m(t)$: Modulation signal
- $\omega_c$: Angular frequency of the carrier signal

### PM

Short for Phase Modulation. Phase of the carrier signal is varied according to information.

```math
s(t) = A_c\cos(\omega_c t + \theta(t))
```

Here:
```math
\theta(t) = \Delta_p m(t)
```

- $\Delta_p$: Phase modulation index
- $A_c$: Amplitude of the carrier signal
- $m(t)$: Modulation signal
- $\omega_c$: Angular frequency of the carrier signal
