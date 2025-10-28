---
title: Student's t Distribution
sidebar:
  order: 12
slug: applied-statistics/students-t-distribution
prev: true
next: true
---

A continuous sampling distribution. Used to estimate population mean of a population with unknown population standard deviation using a small sample. First described by William Sealy Gosset under the pseudonym "Student" in 1908.

Suppose a sample of size $n$ is taken from a population $N(\mu, \sigma^2)$. It's mean is $\bar{x}$ and standard deviation is $s$. The $t$-statistic is given by:

```math
t_{n-1} = \frac{\bar{x} - \mu}{s / \sqrt{n}}
```

Here, $t_{n-1}$ represents the t-statistic with $n-1$ degrees of freedom.

## Properties

- Symmetric about 0
- Bell-shaped
- Heavier Tails   
  Compared to the normal distribution. This means it is more prone to producing values that fall far from its mean.
  
### Degrees of Freedom

Usually $n-1$, where $n$ is the sample size. Denoted by $\nu$.

As degrees of freedom increase:
- Curve becomes narrower
- Approaches the standard normal distribution.
  
### Mean

For $\nu > 1$, the mean is $0$.

### Variance

For $\nu > 2$: $ $

```math
\frac{\nu}{\nu - 2}
```

### Test statistic

```math
t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}
```

## Definition

Mathematically, the t distribution is defined by the following probability density function (PDF):

```math
f(t) = \frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\,\Gamma\left(\frac{\nu}{2}\right)} \left(1 + \frac{t^2}{\nu}\right)^{-\frac{\nu+1}{2}}
```

where:
- $t$ is the value of the random variable,
- $\nu$ is the degrees of freedom (typically, $\nu = n - 1$ for a sample of size $n$),
- $\Gamma$ is the gamma function.

:::note
The above equation is not used as it is computationally intensive.
:::

## Relationship to the Normal Distribution

For large degrees of freedom (typically $\nu > 30$), the t distribution and normal distributions becomes indistinguishable.

## Uses

Used to make inferences about means when sample sizes are small and the population standard deviation is unknown.

Most commonly used in the following scenarios:
- Estimating the Mean: When you want to estimate the mean of a population based on a small sample and the population standard deviation is unknown.
- Hypothesis Testing: In t-tests (such as one-sample, two-sample, and paired t-tests) to determine if there is a significant difference between means.
- Confidence Intervals: To construct confidence intervals for the mean when the sample size is small.
