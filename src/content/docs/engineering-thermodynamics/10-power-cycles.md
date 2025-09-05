---
title: Power Cycles
sidebar:
  order: 10
slug: engineering-thermodynamics/power-cycles
prev: true
next: false
---

2 major application domains of engineering thermodynamics:

- power generation  
  thermal power generation such as coal power plants, nuclear power plants, natural gas power plants, geothermal solar thermal and combined heating and power applications (CHP systems).
- refrigeration amd heat pumps  
  From simple domestic level refrigerator or air conditioner to a large scale industrial refrigeration systems and AC systems. Heat pumps also vary from small domestic scale heat pumps to very large scale industrial heat pumps.

### CHP system

Short for Combined Heat and Power systems. Power and heat are produced simultaneously.

Examples:

- Gasoline or diesel engines
- Jet propulsion systems

that heat may be for process heating or it could be for district heating. In addition to these electrical power generation applications, we can't generation systems like internal combustion engines.

These are considered as heat engines because they convert heat into work. They are operating in thermodynamic cycles.

## Power cycle

The thermodynamic cycles that modeled the operation of these power generation applications.

2 types:

- Vapor power cycle
- Gas power cycle

Practically very complex. Assumptions are made to simplify the analysis. Carnot cycle is the perfect theoretical cycle, which is the upper limit for operation. Ideal thermodynamic cycle lies in between the practical and the Carnot cycle and it is much closer to the practical operation.

### Vapor power cycle

Aka. steam power cycle. Energy of a vapor is converted to mechanical work output.

The working fluid experiences phase transition between liquid and gas. Used in steam power plants.

Highly pressurized and high temperature steam is the most common working fluid.

#### Rankine cycle

Basis for all large scale steam power plants. Named after William John Rankine. Also an ideal case.

When compared with the Carnot cycle:

- Consumes more heat
- Produces more work output
- Less efficient

Heat transfer is not entirely isothermal: latent heat transfer is also there. Less efficient

The Carnot cycle cannot be used in steam power cycles. Because:

- Stopping the condensation process at a specific point is practically difficult or rather impossible task.  
  There is a particular dryness fraction associated with the stopping state. Stopping the condensation process to have that percentage of saturated vapor and that percentage of saturated liquid is a very difficult process.
- 2-phase compression is difficult.  
  During this compression process there is a greater chance for the liquid phase and the vapor phase to separate. Therefore the compressor has to compress a 2-phase solution and that is not that easy. Also, since vapor is highly compressible, the work input required for the compressor is also quite high.

Rankine power cycle overcomes these issues by allowing the condensation process to go down to the saturated liquid point, or in other words: allowing full condensation.

#### Superheat

One kind of solution to increase the efficiency in Rankine cycle. The method of increasing the average temperature where the heat transfer takes place.

Also helps to produce more work by absorbing more heat. Still the efficiency is less than the Carnot cycle efficiency.

Causes the steam at the turbine exit to be drier. This is a very important practical requirement because if water droplets are allowed through the turbine, it leads to failure of turbine blades. Aka. water droplet erosion.

#### Water droplet erosion

The continuous impact of water droplets onto the surface of the blade at high speeds causing impact pressure leads to cracking of the grain structure of the blade material.

Practiclly, the exit turbine has to have a dryness fraction which is greater than 0.9 to avoid water droplet erosion.

#### Thermal efficiency


```math
\text{Thermal efficiency} = \frac{\text{Net work output}}{\text{Heat input}}
```

#### Heat rate

Inverse of thermal efficiency. Technically unitless, but BTU/kWh is used; the amount of heat required to produce 1 kilowatt hour of work output. BTU is short for British Thermal Units.

```math
1\,\text{kWh} = 3412 \text{BTU}
```

Common term among turbine suppliers to compare different steam turbine cycle.


#### Specific steam consumption
Flow rate of steam per kilowatt hour of work produced. Determines the sizing of the power plants.

```math
\text{Specific steam consumption} = \frac{Net work}{Gross work}
```

```math
\text{Net work} = \text{Work produced by turbine} - \text{Work input for compressor}
```

```math
\text{Gross work} = \text{Work produced by turbine}
```

#### Efficiency ratio

```math
\text{Efficiency ratio} = \frac{\text{Actual efficiency}}{\text{Rankine efficiency}}
```

#### Isentrophic efficiency

For compressors:
```math
\frac{\text{Isentropic work input}}{/\text{Actual work input}}
```

Actual work input is higher than isentropic work input.

For compressors:
```math
\frac{\text{Actual work output}}{/\text{Isentropic work output}}
```

Isentropic work output is bigger.

### Gas power cycle

The working fluid is in the gaseous phase.

Used in gas turbines, IC engines and jet propulsion.
