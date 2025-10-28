---
title: Sampling Distribution of Mean
sidebar:
  order: 10
slug: applied-statistics/sampling-distribution-of-mean
prev: true
next: true
---

Suppose $\mu$ is the population mean and $n$ samples are drawn, each having the mean of $\overline{x}_i$. The values of $x_i$ are the sampling distribution of mean.

Used to estimate population mean $\mu$, and calculate confidence intervals.

### Mean

Average of all sample means $\overline{x}_i$, denoted as $\overline{x}$, is $\mu$.

### Standard Error

Aka. standard deviation (not common though).

```math
\sigma_{\overline{x}} = \frac{\sigma}{\sqrt{n}}
```

Decreases as sample size increases.

## Approx. to Normal Distribution

**If** the below conditions are met:
- The population is normally distributed OR the sample size is large enough.
- The population standard deviation $\sigma$ is known.

**Then**:

```math
\overline{x} \sim N \left(\mu, \frac{\sigma} {\sqrt{n}} \right)
```

:::note

Usually population's standard deviation $\sigma$ is unknown. In such cases, [Student's t-distribution](/applied-statistics/students-t-distribution) is used.

:::
