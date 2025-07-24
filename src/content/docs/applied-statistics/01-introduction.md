---
title: Introduction to Applied Statistics
sidebar:
  order: 1
  label: Introduction
slug: applied-statistics/introduction
prev: false
next: true
---

A continuation of [2nd semester's Statistics section](https://s2.sahithyan.dev/methods-of-mathematics/statistics/introduction/). Revise uniform, binomial, poisson distributions.

## Pascal distribution

Aka. negative binomial distribution. Consists of independent bernoulli trials. The experiment is continued until $r$ successes are achieved. Observed variable is the number of total trials ($X$). Denoted by $b^*(x;r,p)$. $ $

```math
P(x) = \binom{x-1}{r-1} p^r (1-p)^{x-r}
```

Here:
- $p$ - probability of success in a single trial
- $r$ - number of successes required

### Mean

```math
\mu_X = \frac{r}{p}
```

:::note

Suppose $R$ is the number of successes before the experiment results in $k$ failures.
```math
\mu_R = \frac{kp}{1-p}
```

:::

### Variance

```math
V_x = \frac{r(1-p)}{p^2}
```

## Geometric distribution

A special case of the negative binomial distribution, where $r=1$. Denoted by $g^*(x;p)$.

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
