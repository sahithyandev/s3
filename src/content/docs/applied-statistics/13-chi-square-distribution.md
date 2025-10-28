---
title: Chi-Square Distribution
sidebar:
  order: 13
slug: applied-statistics/chi-square-distribution
prev: true
next: true
---

Suppose a sample of size $n$ is drawn from a normal population. The chi-square statistic can be calculated using:

```math
\chi^2 = \frac{\nu s^2}{\sigma^2}
```

Here:
- $\nu$ - degrees of freedom
- $s^2$ - sample variance
- $\sigma^2$ - population variance

When sampling is done for an infinite number of times, and by calculating the chi-square statistic
for each sample, the sampling distribution for the chi-square statistic can be obtained. It is then
called the chi-square distribution.

### Uses

- To model how sum of sample variances behave

## Properties

- Skewed for $\nu < 3$
- Always positive

### Degrees of Freedom

Usually, the degrees of freedom is $\nu = n - 1$. $ $

As $\nu$ increases, the chi-square distribution approaches a normal distribution.

### Mean

The mean is $\mu = \nu$. $ $

### Variance

The variance is $\sigma^2 = 2\nu$. $ $
