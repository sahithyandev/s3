---
title: F Distribution
sidebar:
  order: 14
slug: applied-statistics/f-distribution
prev: true
next: true
---

Suppose 2 independent populations (of sizes $N_1$ and $N_2$) are given. And samples of sizes $n_1$ and $n_2$ are taken from each population.

F statistic can be computed using:

```math
F = \cfrac{ \chi_1^2 / \nu_1 }{ \chi_2^2 / \nu_2 }  = \frac{ s_1^2 }{ s_2^2 }\cdot \frac{\sigma_1 ^2}{\sigma_2 ^2}
```

### Uses

- To compare variance of 2 different independent samples

## Properties

### Degrees of Freedom

If sample size is $n$, then the degrees of freedom for the F distribution are $n_1 - 1$ and $n_2 - 1$.

### F

```math
F_{\nu_1, \nu_2, \alpha} = \frac{1}{F_{\nu_2, \nu_1, 1 - \alpha}}
```
