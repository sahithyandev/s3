---
title: 2nd Law
sidebar:
  order: 7
slug: engineering-thermodynamics/2nd-law
prev: true
next: true
---

Heat will not spontaneously flow from a colder body to a hotter body. Entropy of an isolated system not in equilibrium will tend to increase over time, approaching a maximum value at equilibrium.

This law establishes the concept of entropy (S) as a measure of the disorder or randomness in a system. It implies that natural processes tend to move toward states of higher entropy.

## Thermal Reservoir

Aka. heat reservoir. A body that can either absorb or release heat at constant temperature. Isothermal heat transfer device.

- If absorbing: it is a heat sink.
- If releasing: it is a heat source.

## Kelvin-Planck Statement

It is impossible for any device that operates on a cycle to exchange heat with a single reservoir and produce a net amount of work. Explains the operational constraints of a heat engine.

## Carnot Principle

The efficiency of a reversible heat engine operating between two thermal reservoirs is always greater than the
the efficiency of an irreversible heat engine operating between the same reservoirs.

### Carnot Heat Engine

Reversible heat engines are also known as Carnot engines.

All carnot engines working with the same two thermal reservoirs have the same efficiency.

### Carnot Cycle

Has 4 elements. All processes are reversible.

- through the boiler: isothermal heat addition
- through the turbine: adiabatic expansion
- through the condenser: isothermal heat rejection
- through the pump: adiabatic compression

:::note

Reversible adiabatic processes are isentropic.

:::

### Heat pumps & Refrigerators

Transfers heat from a cooler body to a hotter body, with the aid of work input. Reversed heat machines. Air conditioners work similarly to refrigerators.

| Machine      | Objective                                                               |
| ------------ | ----------------------------------------------------------------------- |
| Heat Pump    | Heat up an environment by pumping heat into the concerned environment.  |
| Refrigerator | Cool an environment by pumping heat out from the concerned environment. |

## Clausius Statement

It is impossible to construct a system which will transfer heat from a cooler body to a hotter body without work being done on the system by surrounding.

Establishes the operational constraints of heat pumps and refrigerators.

### Coefficient of Performance

When analyzing the performance of heat pumps and refrigerators, the Coefficient of Performance is used instead of efficiency. COP is always greater than or equal to 1.

```math
\text{COP}_\text{HP} = \frac{Q_{\text{H}}}{W_\text{in}} = \frac{1}{1 - \frac{Q_L}{Q_H}}
```

```math
\text{COP}_\text{REF} = \frac{Q_{\text{L}}}{W_\text{in}} = \frac{1}{\frac{Q_H}{Q_L} - 1}
```

:::note

For a reversible heat engine:
```math
\frac{Q_H}{Q_L} = \frac{T_H}{T_L}
```

Here $T_H$ and $T_L$ are the temperatures of the hot and cold reservoirs in Kelvin.

:::

## Entropy Formula

For a reversible process:

```math
\Delta S = \frac{\delta Q}{T}
```

Where:

- ΔS is the change in entropy
- δQ is the heat transfer
- T is the absolute temperature

For irreversible processes, entropy always increases:

```math
\Delta S > \frac{\delta Q}{T}
```

## Implications

- Heat engines cannot be 100% efficient
- Refrigerators and heat pumps require work input
- All spontaneous processes are irreversible
- Perfect order is unattainable
