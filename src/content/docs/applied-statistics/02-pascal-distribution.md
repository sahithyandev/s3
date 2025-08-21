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

:::

## Mean

```math
\mu_X = \frac{r}{p}
```

:::note

Suppose $R$ is the number of successes before the experiment results in $k$ failures.
```math
\mu_R = \frac{kp}{1-p}
```

Here $p$ is the probability of a success in a single trial. $ $

:::

## Variance

```math
V_x = \frac{r(1-p)}{p^2}
```
