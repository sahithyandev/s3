---
title: Confidence Interval
sidebar:
  order: 15
slug: applied-statistics/confidence-interval
prev: true
next: false
---

An interval, with a certain level of confidence (specified in percentage), in which the true population parameter is likely to lie. Calculated based on sample data. Quantifies uncertainty in estimation.

A confidence interval at level $1 − \alpha$ means that if you repeatedly sampled and built intervals, about $(1 − \alpha) \times 100%$ of them would contain the true parameter. Usually 90%, 95%, 99% are used.

## Formula

When $\sigma$ is known: $ $

```math
\bar{X} \pm Z_{\alpha/2} \frac{\sigma}{\sqrt{n}}
```

When $\sigma$ is unknown (t-distribution is used): $ $

```math
\bar{X} \pm t_{\alpha/2,, n-1} \frac{s}{\sqrt{n}}
```

## Properties

- As sample size (n) increases, confidence interval becomes narrower
- Higher confidence level and higher population variance causes wider confidence interval

## Standard Errors

| Parameter               | Standard Error                                                 |
| ----------------------- | -------------------------------------------------------------- |
| $\bar{x}$               | $\frac{s}{\sqrt{n}}$                                           |
| $\bar{p}$               | $\frac{1}{\sqrt{n}} \sqrt{ p(1-p) }$                           |
| $\bar{x_1} - \bar{x_2}$ | $\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}$                 |
| $\bar{p_1} - \bar{p_2}$ | $\sqrt{\frac{p_1 (1 - p_1)}{n_1} + \frac{p_2 (1 - p_2)}{n_2}}$ |
