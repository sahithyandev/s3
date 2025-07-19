---
title: Laws of Thermodynamics
sidebar:
  order: 4
---

Empirical laws that explain the behavior of thermodynamic systems.

## 0th Law

**If** 2 systems: A, B are in thermal equilibrium **then**:

- They both have the same _temperature_
- Any system C in thermal equilibrium with A is also in thermal equilibrium with B

**If** 2 systems have the same temperature, **then** they are in thermal equilibrium.

## 1st Law

Energy can neither be created or destroyed. Energy can only converted from one form to another. Aka. Law of Conservation of Energy.

Originally observed for closed systems undergoing thermodynamic cycles. Originally observed by James Joule. And expressed as:

> When a system (closed) undergoes a thermodynamic cycle, sum of the net heat supplied to the system from its surrounding and the net work input to the system from its surroundings must equal 0

```math
\sum Q + \sum W = 0
```

### Sign convention

Any sign convention must be mentioned clearly in the context of the analysis. And the final answers must not use the sign.

For $Q$: $ $
- Positive - Heat supplied to the system
- Negative - Heat rejected by the system to its surroundings

For $W$: $ $
- Positive - Work done by the system
- Negative - Work done on the system

### Corollary 1

There exists a property of a closed system that a change in that property is equal to the sum of the net heat transfer and the work transfer during a state change. And this property is called _the internal energy_.

```math
\Delta U = \Delta Q + \Delta W
```

Can be mathematically proven by contradiction using 1st law.

### Corollary 2

The internal energy of a isolated system remain unchanged.

### Corollary 3

Perpetual motion machines of the first kind are impossible.

A perpetual motion of first kind is a machine that continuously produce work without any heat input while undergoing a thermodynamic cycle.

## 2nd Law

Heat will not spontaneously flow from a colder body to a hotter body. Entropy of an isolated system not in equilibrium will tend to increase over time, approaching a maximum value at equilibrium.

This law establishes the concept of entropy (S) as a measure of the disorder or randomness in a system. It implies that natural processes tend to move toward states of higher entropy.

### Kelvin-Planck Statement

It is impossible to construct a device that, operating in a cycle, will produce no effect other than the extraction of heat from a single reservoir and the performance of an equivalent amount of work.

### Clausius Statement

It is impossible to construct a device that, operating in a cycle, will produce no effect other than the transfer of heat from a cooler body to a hotter body.

### Entropy Formula

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

### Implications

- Heat engines cannot be 100% efficient
- Refrigerators and heat pumps require work input
- All spontaneous processes are irreversible
- Perfect order is unattainable

## 3rd Law

As the absolute temperature approaches zero, the entropy of a perfect crystal approaches a constant minimum value. For a perfect crystal, this minimum entropy is zero when the temperature is exactly absolute zero (0 K).

This law establishes that it is impossible to reach absolute zero in a finite number of steps or processes. As a system approaches absolute zero, it becomes increasingly difficult to remove additional heat.

### Mathematical Form

```math
\lim_{T \to 0} S = S_0
```

Where:
- S is the entropy of the system
- S₀ is the minimum entropy value (typically zero for perfect crystals)
- T is the absolute temperature

More of an interest in statistical mechanics; and not much in engineering.
