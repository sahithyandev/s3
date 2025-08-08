---
title: Gamma Distribution
sidebar:
  order: 8
slug: applied-statistics/gamma-distribution
prev: true
next: false
---

Denoted by $\text{Gamma}(\alpha, \beta)$, where $\alpha > 0$, $\beta > 0$. Has the probably density function:

```math
f(x;\alpha,\beta) = \begin{cases}
kx^{\alpha - 1} \exp\left( \frac{-x}{\beta} \right) & \text{for } x > 0 \\
0 & \text{otherwise}
\end{cases}
```

Here $\alpha > 0$, $\beta > 0$ and:

```math
k = \frac{1}{\beta^\alpha \tau(\alpha)}
```

Here $\tau$ is the gamma function.

Used to model the total waiting time until multiple events occur.

## Gamma function

Resulted in when evaluating $k$ for the above distribution.

```math
\tau(x) = \int_0^\infty y^{x - 1} e^{-y} \, \text{d}y \;\; \text{For } x > 0
```

Gamma function is recursive. Relates to the factorial function, for integer values.

```math
\tau(x) = (x - 1)!
```

$\tau(1) = 1$ and $\tau(0.5) = \sqrt{\pi}$.

## Properties
### Mean

```math
\mu = \alpha \beta
```

### Variance

```math
\sigma^2 = \alpha \beta^2
```

### Relation with Exponential Distribution

When $\alpha = 1$ and $\beta=\frac{1}{\lambda}$, the gamma distribution reduces to the exponential distribution.

```math
\text{Gamma}(1, \frac{1}{\lambda}) \equiv \text{Exp}(\lambda)
```
