---
title: Attribute Sets
sidebar:
  order: 8
slug: database-systems/basics/attribute-sets
prev: true
next: true
---

A set of attributes.

## Closure

Suppose $X$ is an attribute set and $F$ is a set of functional dependencies.

Closure of $X$ under a set of functional dependencies $F$, is the set of all attributes functionally determined by $X$ using the dependencies in $F$. Denoted as $X^+$,  

### Algorithm

$X^+$ can be computed by:

1. Start with $X^+ = X$.  
2. For each dependency $Y \rightarrow Z$ in $F$:  
   If $Y \subseteq X^+$, then add $Z$ to $X^+$.  
3. Repeat until no new attributes can be added.

If $X^+$ includes all attributes of $R$, then $X$ is a superkey of $R$.

Can be used to test if a given functional dependency holds.

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
