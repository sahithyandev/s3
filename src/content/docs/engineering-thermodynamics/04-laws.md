---
title: Laws of Thermodynamics
sidebar:
  order: 4
slug: engineering-thermodynamics/laws
prev: true
next: true
---

Empirical laws that explain the behavior of thermodynamic systems.

## 0th Law

**If** 2 systems: A, B are in thermal equilibrium **then**:

- They both have the same _temperature_
- Any system C in thermal equilibrium with A is also in thermal equilibrium with B

**If** 2 systems have the same temperature, **then** they are in thermal equilibrium.

[1st](/engineering-thermodynamics/1st-law) and [2nd](/engineering-thermodynamics/2nd-law) laws are explained in detail in the next pages.

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
