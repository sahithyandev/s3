---
title: Thermal Analysis
sidebar:
  order: 13
slug: engineering-thermodynamics/thermal-analysis
prev: true
next: false
---

## Terminology

#### Thermal efficiency

```math
\text{Thermal efficiency} = \frac{\text{Net work output}}{\text{Heat input}}
```

### Heat rate

Inverse of thermal efficiency. Technically unitless, but BTU/kWh is used; the amount of heat required to produce 1 kilowatt hour of work output. BTU is short for British Thermal Units.

```math
1\,\text{kWh} = 3412 \text{BTU}
```

Common term among turbine suppliers to compare different steam turbine cycle.

### Specific steam consumption
Flow rate of steam per kilowatt hour of work produced. Determines the sizing of the power plants.

```math
\text{Specific steam consumption} = \frac{\text{Net work}}{\text{Gross work}}
```

```math
\text{Net work} = \text{Work produced by turbine} - \text{Work input for compressor}
```

```math
\text{Gross work} = \text{Work produced by turbine}
```

### Efficiency ratio

```math
\text{Efficiency ratio} = \frac{\text{Actual efficiency}}{\text{Rankine efficiency}}
```

### Isentrophic efficiency

#### For compressors
```math
\frac{\text{Isentropic work input}}{\text{Actual work input}}
```

Actual work input is higher than isentropic work input.

#### For turbine
```math
\frac{\text{Actual work output}}{\text{Isentropic work output}}
```

Isentropic work output is bigger.
