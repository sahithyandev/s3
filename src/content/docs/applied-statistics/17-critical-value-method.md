---
title: Critical Value Method
sidebar:
  order: 17
slug: applied-statistics/critical-value-method
prev: true
next: true
---

A traditional way of making a hypothesis-testing decision. Computed test statistic is compared with the critical value obtained from a statistical table.

Used when:
- a fixed significance level ($\alpha$) is chosen.
- standard distributions are used.

Appropriate for both one-tailed and two-tailed tests.

## For Two-Tailed Tests

Suppose:

- $H_0$: $\mu = \mu_0$
- $H_1$: $\mu \neq \mu_0$  

Reject $H_0$ **if** $\left\lvert z \right\rvert \gt z_{\alpha/2}$.

## For Right-Tailed Tests

Suppose:

- $H_0$: $\mu \leq \mu_0$
- $H_1$: $\mu \gt \mu_0$

Reject $H_0$ **if** $z \gt z_{\alpha}$.

## For Left-Tailed Tests

Suppose:

- $H_0$: $\mu \geq \mu_0$
- $H_1$: $\mu \lt \mu_0$

Reject $H_0$ **if** $z \lt -z_{\alpha}$.
