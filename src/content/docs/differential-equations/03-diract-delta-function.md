---
title: Diract Delta Function
sidebar:
  order: 3
slug: differential-equations/diract-delta-function
prev: true
next: false
---

Consider the sequence of functions $\delta_n$ defined as:

```math
\delta_n{(x)} = \begin{cases}
n & \text{if } -\frac{1}{2n} \le x \le \frac{1}{2n} \\
0 & \text{otherwise}
\end{cases}
```

The Dirac delta function is the limit of $\delta_n$ as $n$ approaches infinity.

```math
\delta = \lim_{n \to \infty} \delta_n(x) = \begin{cases}
\infty & \text{if } x = 0 \\
0 & \text{otherwise}
\end{cases}
```

## Properties

```math
\int_{-\infty}^{\infty} \delta(x) \, dx = 1
```

```math
\int_{-\infty}^{\infty} f(x)\delta(x-a) \, dx = f(a)
```

```math
\mathcal{L}\{\delta(t)\} = 1
```

```math
\mathcal{L}\{\delta(t-a)\} = e^{-as}
```
