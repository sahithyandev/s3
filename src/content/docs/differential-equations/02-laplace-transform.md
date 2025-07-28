---
title: Laplace Transform
sidebar:
  order: 2
slug: differential-equations/laplace-transform
prev: true
next: true
---

The process of converting a function of real variable $t$ into a complex variable $s$.

```math
F(s) = \mathcal{L}\{ f(t) \} = \int_{0}^{\infty} e^{-st} f(t) \,\text{d}t
```

## Important formulas

For $n\ge 0$. $ $

```math
\mathcal{L} \{ t^n \} = \frac{n!}{s^{n+1}}
```

```math
\mathcal{L} \{ e^{at} \} = \frac{1}{s-a}
```

```math
\mathcal{L} \{ \sin (at) \} = \frac{a}{s^2 + a^2}
```

```math
\mathcal{L} \{ \cos (at) \} = \frac{s}{s^2 + a^2}
```


```math
\mathcal{L} \{ \sinh (at) \} = \frac{a}{s^2 - a^2}
```

```math
\mathcal{L} \{ \cosh (at) \} = \frac{s}{s^2 - a^2}
```

## Properties

### Linearity

```math
\mathcal{L} \{ cf(t) + g(t) \} = c\mathcal{L}\{ f(t) \} + \mathcal{L} \{ g(t) \}
```

### Shiting

Suppose $F(s)$ is the Laplace transform of $f$, where $s \gt \alpha$.

```math
\mathcal{L} \{ e^{at} f(t) \} = F(s-a)
```

For $s \gt \alpha + a$. $ $

### Time scaling

```math
\mathcal{L} \{ f(\alpha t) \} = \frac{1}{\alpha} F\left(\frac{s}{\alpha}\right)
```

### Transform with t

```math
\mathcal{L} \{ t^n f(t) \} = (-1)^n \frac{\text{d}^n}{\text{d}s^n} {F(s)}
```

```math
\mathcal{L} \{ \frac{1}{t} f(t) \} = \int_s^\infty F(x)\,\text{d}x
```

### Time shifting

```math
\mathcal{L}\{ u(t-a)f(t - a) \} = e^{-as}F(s)
```

Here $u$ is the unit step function. $ $

## Derivatives and Integrals

Suppose $F(s)$ is the Laplace transform of $f(t)$.

### Derivative

```math
\mathcal{L} \{ f'(t) \} = s\mathcal{L} \{ f(t) \} - f(0)
```

```math
\mathcal{L} \{ f''(t) \} = s^2\mathcal{L} \{ f(t) \} - sf(0) - f'(0)
```

```math
\mathcal{L} \{ f^{(n)}(t) \} = s^n\mathcal{L} \{ f(t) \} - \sum_{k=0}^{n-1} s^k f^{n - 1 - k}(0)
```

### Integral

```math
\mathcal{L} \left{ \int_0^t f(x) \,\text{d}x \right} = \frac{1}{s} F(s)
```

Provided that $s \neq 0$. $ $

## Inverse Laplace transform

Reverse of Laplace transform.

```math
\mathcal{L}\{ f(t) \} = F(s) \implies \mathcal{L}^{-1} \{ F(s) \} = f(t) 
```

## For periodic functions

Suppose $f(t)$ is a periodic function with period $T$. **If** the laplace transform of $f(t)$ exists **then**:

```math
\mathcal{L}\{ f(t) \} = \frac{1}{1 - e^{-sT}} \int_0^T e^{-st} f(t) \,\text{d}t
```
