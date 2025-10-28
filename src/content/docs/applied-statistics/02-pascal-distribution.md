---
title: Pascal Distribution
sidebar:
  order: 2
slug: applied-statistics/pascal-distribution
prev: true
next: true
---

Aka. negative binomial distribution. Consists of independent bernoulli trials. The experiment is continued until $r$ successes are achieved. Observed variable is the number of total trials ($X$). Denoted by $b^*(x;r,p)$. $ $


```math
P(x) = \binom{x-1}{r-1} p^r (1-p)^{x-r}
```

Here:
- $p$ - probability of success in a single trial
- $r$ - number of successes required

:::note

The binomial distribution models the number of successes in a fixed number of independent trials, while the Pascal distribution models the number of trials needed to achieve a fixed number of successes.
{1-p}
:::

## Mean

$\mu_X$ means the expected number o{1-p}f trials until $r$ successes.

```math
\mu_X = \frac{r}{p}
```

:::note

Suppose $K$ is the number of failures until $r$ successes.

```math
\mu_K = \frac{r(1-p)}p
```

:::

## Variance

```math
V_X = \frac{r(1-p)}{p^2}
```
