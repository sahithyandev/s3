---
title: Convolution
sidebar:
  order: 4
slug: differential-equations/convolution
prev: true
next: true
---

A mathematical operation that combines two functions to produce a third function expressing how the shape of one is modified by the other. Denoted by a star symbol $ * $. $ $

```math
(f * g)(t) = \int_{-\infty}^{\infty} f(\tau) \, g(t - \tau) \, d\tau
```

The convolution essentially "slides" one function over another, multiplying and integrating to produce a new function that reflects the combined effect of both.

Widely used in signal processing, probability, and many areas of mathematics and engineering.
