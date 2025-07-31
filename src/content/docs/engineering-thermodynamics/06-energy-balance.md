---
title: Energy Balance
sidebar:
  order: 6
slug: engineering-thermodynamics/energy-balance
prev: true
next: true
---

Based on [the 1st law](/engineering-thermodynamics/laws/1st-law), more specific equations are derived on a case by case basis.

### Transient state

When a thermodynamic system is changing with time.

### Steady state

When a thermodynamic system stays constant with time. Net energy change in the system is zero.

## For closed systems

```math
\text{Net energy transfer to the system} = \text{Net increase in system's total energy}
Q - W = \Delta E_{\text{sys}}
```

## For open systems

Total specific energy of a flow system:
```math
\theta = h + \frac{1}{2}C^2 + gz
```

Here:
- $\theta$ - total specific energy
- $h = u + P\neu$ - enthalpy
- $u$ - specific internal energy
- $P\neu$ - specific flow work 
- $C$ - velocity of the flow
- $g$ - gravatitaional acceleration
- $z$ - elevation of the flow system

```math
Q - W + m_{\text{in}}\theta_{\text{in}} - m_{\text{out}}\theta_{\text{out}} = \Delta E_{\text{sys}}
```

Here:
- $Q$ - heat transfer
- $W$ - work transfer
- $m_{\text{in}}$ - mass flow rate of the inlet
- $\theta_{\text{in}}$ - total specific energy of the inlet
- $m_{\text{out}}$ - mass flow rate of the outlet
- $\theta_{\text{out}}$ - total specific energy of the outlet
- $\Delta E_{\text{sys}}$ - change in total energy of the system

### Steady flow energy equation (SFEE)

```math
q - w = (h_e - h_i + \frac{1}{2}(C_e^2 - C_i^2) + g(z_e - z_i))
```

Here:
- $q$ - specific heat transfer
- $w$ - specific work transfer
- $h_e, h_i$ - specific enthalpy at the outlet and inlet
- $C_e, C_i$ - flow velocity at the outlet and inlet
- $g$ - gravitational acceleration
- $z_e,z_i$ - elevation at the outlet and inlet
