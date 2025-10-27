---
title: Sampling Distribution
sidebar:
  order: 9
slug: applied-statistics/sampling-distribution
prev: true
next: true
---

A probability distribution of a statistic. Obtained from a large number of samples drawn from a specific population. A distribution that results when the following process is repeated:
1. A random sample of size $n$ is fetched from a population of size $N$
2. A statistic (i.e. mean or some portion or variance) is calculated for that sample
3. The frequency distribution of the statistic is plotted

Depends on:
- Size of the population $N$
- Size of a sample $n$
- Sampling method

### Variability

Measured by its variance or standard deviation. Depends on:
- Total number of observations
- Number of observations in a sample
- Selection of the samples

:::note

If $N$ is much larger than $n$, then $\frac{n}{N}$ is fairly small and the sampling distribution has
roughly the same sampling error, irrespective of whether sampling is done with or
without replacement.

If the sampling is done without replacement, and the sample represents a significant portion of the population, the sampling error will be smaller.

:::


## Central Limit Theorem

Aka. CLT. States that a sampling distribution will be normal or nearly normal given the sample size is _large enough_. As a rule of thumb, 30 is considered large enough.

There are other cases where the CLT can be applied.
- The population is normally distributed
- The sampling distribution is symmetric, unimodal, without outliers and the sample size is 15 or less.
- The sampling distribution is moderately skewed, unimodal, without outliers and the sample size is between 16 and 40.
- The sample is greater than 40, without outliers.

## Sampling Distribution of Mean

Suppose $\mu$ is the population mean and $\sigma$ is the population standard deviation.

**If** the below conditions are met:
- The population is normally distributed OR the sample size is large enough.
- The population standard deviation is known.

**Then**:

```math
\overline{x} \sim N \left(\mu, \frac{\sigma} {\sqrt{n}} \right)
```

## Sampling Distribution of Proportion

Suppose in a population of size $N$ all possible samples of size $n$ are drawn and the sampling distribution of the success proportion is calculated. Let $p$ be the population proportion of successes.

**If** the below conditions are met:
- The sample size is large enough.
- The population proportion is known.

**Then**:
```math
\overline{p} \sim N \left(p,\frac{p(1-q)}{n} \right)
```
