---
title: Student's t Distribution
sidebar:
  order: 10
slug: applied-statistics/students-t-distribution
prev: true
next: true
---

A continuous sampling distribution. 

Suppose samples of size $n$ are taken from a population $N(\mu, \sigma^2)$. Let $\bar{x}$ is the sample mean and $s$ is the sample standard deviation, then the t-statistic (given below) follows a t-distribution:

```math
t = \frac{\bar{x} - \mu}{s / \sqrt{n}}
```

First described by William Sealy Gosset under the pseudonym "Student" in 1908.

Used to make inferences about means when sample sizes are small and the population standard deviation is unknown.

Most commonly used in the following scenarios:
- Estimating the Mean: When you want to estimate the mean of a population based on a small sample and the population standard deviation is unknown.
- Hypothesis Testing: In t-tests (such as one-sample, two-sample, and paired t-tests) to determine if there is a significant difference between means.
- Confidence Intervals: To construct confidence intervals for the mean when the sample size is small.

## Definition

Mathematically, the t distribution is defined by the following probability density function (PDF):

```math
f(t) = \frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\,\Gamma\left(\frac{\nu}{2}\right)} \left(1 + \frac{t^2}{\nu}\right)^{-\frac{\nu+1}{2}}
```

where:
- $t$ is the value of the random variable,
- $\nu$ is the degrees of freedom (typically, $\nu = n - 1$ for a sample of size $n$),
- $\Gamma$ is the gamma function.

Usually, the above equation is not used as it is computationally intensive.

## Properties

- Bell shaped
- Symmetric about zero
- Heavier Tails   
  Compared to the normal distribution. This means it is more prone to producing values that fall far from its mean.
  
### Degrees of Freedom   

Number of independent observations in a set of data.

The shape of the t distribution depends on the degrees of freedom. As the degrees of freedom increase, the t distribution approaches the normal distribution.
  
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


## Relationship to the Normal Distribution

As the sample size increases (and thus the degrees of freedom increase), the t distribution becomes increasingly similar to the standard normal distribution. For large degrees of freedom (typically $\nu > 30$), the difference between the t and normal distributions becomes negligible.
