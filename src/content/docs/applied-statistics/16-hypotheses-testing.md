---
title: Hypotheses Testing
sidebar:
  order: 16
slug: applied-statistics/hypotheses-testing
prev: true
next: true
---

A hypotheses is an intelligent educated guess or assumption about a population parameter, which may or may not be true. Not yet proven.

Hypotheses testing, evaluates if a hypothese can be rejected.

## Hypotheses

### Null Hypothesis

A statement that says the sample observations result purely from chance. Denoted by $H_0$.

Believed to be true unless rejected with enough evidence.

### Alternative Hypothesis

A statement that says the sample observations occur because of some non-random cause. Denoted by $H_1$ or $H_a$.

True when null hypotheses is rejected.

### Relation between Null and Alternative Hypothesis

The null and alternative hypothesis are complementary, and mutually exclusive.

## Terminology

### Rejected Region

Aka. critical region. Consist of all values of the test statistic values for which $H_0$ is rejected.

### Accepted Region

Consist of all values of the test statistic values for which $H_0$ is not rejected.

### Critical Value

A value that separates the rejected region from the accepted region.

### Test Statistic

A numerical value used to determine whether to reject $H_0$. Calculated from the sample data. $ $

If the test statistic falls within the critical region, $H_0$ is rejected. if the test statistic falls within the accepted region, $H_0$ is not rejected.

If population standard deviation $\sigma$ is known:

```math
Z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}} \equiv N(0,1)
```

If population standard deviation $\sigma$ is unknown:

```math
t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} \equiv t_{n-1}
```

## Decision Errors

### Type I Error

When $H_1$ is true, but rejected. Probability of Type I error is called the significance level and is denoted by $\alpha$.

```math
P(\text{Type I Error}) = \alpha = P(\text{Reject } H_0 | H_0 \text{ is true})
```

If not defined, $\alpha=0.05$ is used.

### Type II Error

When $H_0$ is false, but not rejected. Denoted by $\beta$.

```math
P(\text{Type II Error}) = \beta = P(\text{Not Reject } H_0 | H_0 \text{ is false})
```

### Power of the Test

The probability of correctly rejecting $H_0$ when it is false. Equal to $1-\beta$.

:::note

For a fixed sample size, a decrease in the probability of one error will usually result in an increase in the probability of the other error.

Increasing sample size will decrease the probability of both kind of errors.

:::


## Types of Significance Tests

Defines where the rejection region lies in a probability distribution. Depends on $H_1$.

### Two-Tailed Test

Used when testing for any difference, without direction. The critical region is split into 2 tails on either ends.
are identical and
### Right-Tailed Test

Used when testing if the parameter is greater than the claimed value. Rejection region lies entirely in the right tail of the distribution.

### Left-Tailed Test

Used when testing if the parameter is less than the claimed value. Rejection region lies entirely in the left tail of the distribution.


### Choosing the Correct Test

| Alt. Hypothesis ($H_1$) | Tail Type    | Rejection Condition                |
| ----------------------- | ------------ | ---------------------------------- |
| $\mu \neq \mu_0$        | Two-tailed   | $\lvert z \rvert \gt z_{\alpha/2}$ |
| $\mu \gt \mu_0$         | Right-tailed | $z \gt z_{\alpha}$                 |
| $\mu \lt \mu_0$         | Left-tailed  | $z \lt -z_{\alpha}$                |

## Decision Methods

Either [critical value method](/applied-statistics/critical-value-method) or [p-value method](/applied-statistics/p-value-method) can be used. Both produce the same results.
