---
title: Attribute Sets
sidebar:
  order: 11
slug: database-systems/attribute-sets
prev: true
next: false
---

## Closure

Given a set of attributes $X$ and a set of functional dependencies $F$, the closure of $X$ with respect to $F$, denoted $X^+$, is the set of all attributes that are functionally determined by $X$ according to $F$. Formally:

```math
X^+ = \bigcup_{i=0}^{\infty} X_i
```

where $X_0 = X$ and $X_{i+1} = X_i \cup \{ \beta \mid \alpha \rightarrow \beta \in F$ and $\alpha \subseteq X_i \}$.

### Algorithm

```py
def attribute_closure(attributes, fds):
    """
    Compute the closure of a set of attributes with respect to a set of functional dependencies.

    :param attributes: set of attribute strings, e.g. {'A', 'B'}
    :param fds: list of tuples (lhs, rhs), where lhs and rhs are sets of attributes
                e.g. [({'A'}, {'B'}), ({'B'}, {'C'})]
    :return: set of attributes in the closure
    """
    closure = set(attributes)
    changed = True
    while changed:
        changed = False
        for lhs, rhs in fds:
            if lhs.issubset(closure) and not rhs.issubset(closure):
                closure.update(rhs)
                changed = True
    return closure
```
