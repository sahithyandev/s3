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

## Moment

Numerical measures of the shape of a distribution. Denoted by $\mathbb{E}[X^k]$.

For a variable $X$ with the mean $\mu$:

$k$-th moment about the origin:

```math
\mu'_k = \mathbb{E}[X^k]
```

$k$-th central moment (about the mean):

```math
\mu_k = \mathbb{E}[(X - \mu)^k]
```

### Commonly used ones

- 1st moment about origin - Mean
- 2nd central moment - Variance
- 3rd central moment - Skewness
- 4th central moment - Kurtosis

### Moment Generating Function

A mathematical function which encapsulates all moments of a random variable, into a single function. Defined as:

```math
M_X(t) = \mathbb{E}[e^{tX}]
```

Here

- $X$ is the random variable
- $t$ is the parameter, close to 0 where MGF usually exists
- $e^{tX}$ is the exponential function applied to $tX$
- $\mathbb{E}(e^{tX})$ is the expected value of the transformed distribution
- $M_X(t)$ is the moment generating function

Here exponential function is applied to $tX$, because of its [Taylor series expansion](https://s1.sahithyan.dev/mathematics/real-analysis/taylor-series/#ex). By differentiating the Taylor series expansion, the moments can be obtained.

```math
\mathbb{E}[X^k] = \frac{d^k}{dt^k}M_X(t)\bigg|_{t=0}
```

## Probability Distribution

### Poisson point process

A mathematical model used to describe random points scattered in space or time, where the points occur independently of each other.

Key properties:

- Independence: The number of points in disjoint regions are independent random variables.
- Homogeneity: $\lambda$ is a known constant throughout the space or time interval.

Poisson point processes are fundamental in modeling random arrivals (such as phone calls, radioactive decay events, or raindrops falling) and serve as the basis for more complex stochastic processes.

### Memorylessness

A property of probability distributions. Describes situations where previous failures or elapsed time does not affect future trials or further wait time.

A random variable $X$ is said to be memoryless **if** for all $s, t \geq 0$:

```math
P(X > s + t \mid X > s) = P(X > t)
```

Only the [geometric](/applied-statistics/geometric-distribution/) and [exponential distribution](/applied-statistics/07-exponential-distribution/) are memoryless.
