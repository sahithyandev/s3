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
