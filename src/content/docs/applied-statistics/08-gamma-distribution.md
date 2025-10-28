---
title: Gamma Distribution
sidebar:
  order: 8
slug: applied-statistics/gamma-distribution
prev: true
next: true
---

Used to model the total waiting time until multiple events occur. Denoted by $\text{Gamma}(\alpha, \beta)$, where $\alpha > 0$, $\beta > 0$. Has the probably density function:

```math
f(x;\alpha,\beta) = \begin{cases}
\displaystyle \frac{x^{\alpha - 1}}{\beta^\alpha \Gamma(\alpha)} \exp\left( \frac{-x}{\beta} \right) &;\; \text{for } x > 0 \\
\displaystyle 0 &;\; \text{otherwise}
\end{cases}
```

Here $\Gamma$ is the [gamma function](https://s1.sahithyan.dev/mathematics/riemann-integration/gamma-function). A short revision on gamma function is included below.

### Gamma function

```math
\tau(x) = \int_0^\infty y^{x - 1} e^{-y} \, \text{d}y \;\;\; \text{for } x > 0
```

Recursive. Relates to the factorial function, for integer values.

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

```math
\text{Gamma}\left(1, \frac{1}{\lambda}\right) \equiv \text{Exp}(\lambda)
```

### Relation with Chi-Squared Distribution

```math
\text{Gamma}\left(\frac{k}{2}, \frac{1}{2}\right) \equiv \chi^2(k)
```

### Relation with Normal Distribution

**If** $X \sim N(\mu, \sigma^2)$ **then**: $ $

```math
\frac{Z^2}{2} \sim \text{Gamma}\left(\frac{1}{2}\right)
```
