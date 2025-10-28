---
title: Chi Square Distribution
sidebar:
  order: 13
slug: applied-statistics/chi-square-distribution
prev: true
next: false
---

The chi-square statistic can be calculated from a sample of size $n$ drawn from a population,
which is normal, using the following equation.

```math
\chi^2 = \frac{(n - 1)s^2}{\sigma^2}
```

When sampling is done for an infinite number of times, and by calculating the chi-square statistic
for each sample, the sampling distribution for the chi-square statistic can be obtained. It is then
called the chi-square distribution.

## Properties

### Mean

The mean is $\mu = \nu$.

### Variance

The variance is $\sigma^2 = 2\nu$.

### Degrees of Freedom

The degrees of freedom is $\nu = n - 1$.

As $\nu$ increases, the chi-square distribution approaches a normal distribution.
