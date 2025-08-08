---
title: Geometric Distribution
sidebar:
  order: 3
slug: applied-statistics/geometric-distribution
prev: true
next: true
---

A special case of the [negative binomial distribution](/applied-statistics/pascal-distribution/), where $r=1$. Denoted by $g^*(x;p)$. [Memoryless](/applied-statistics/introduction/#memorylessness).

```math
P(x) = p(1-p)^{x-1}
```

Here:
- $p$ - probability of success in a single trial

### Mean

```math
\mu_X = \frac{1}{p}
```

### Variance

```math
V_x = \frac{1-p}{p^2}
```
