---
title: Uninformed Searching
sidebar:
  order: 10
slug: artificial-intelligence/uninformed-searching
prev: true
next: true
---

Methods for exploring state spaces without using domain-specific knowledge about the problem. Aka. blind search.

These algorithms only know how to generate successor states and recognize goal states, but don't have information about how close they are to a solution.

## Algorithms

### Uniform cost search

Expands the node with the lowest path cost. Optimal for general action costs.

### Depth-first Search

Not complete, but complete for finite state space. Not optimal, returns the first solution it finds.

### Iterative deepening depth-first search

Calls DFS with increasing depth limits, until a solution is found. Complete when full cycle checking is done. Optimal for unit action costs. Time complexity comparable to BFS. Space complexity is linear.

### Depth-limited DFS

A version of DFS with a depth limit $l$. Keeps DFS from wandering off into infinite paths. $ $

Not complete. For lower $l$, it may not find a solution. Not cost optimal, returns the first solution it finds.

### Breadth-first Search

Expands the shallowest nodes first.

### Bidirectional Search

Expands 2 frontiers, both around the initial state and the goal, stopping when the two frontiers meet.

## Comparison

| Algorithm           | Complete?            | Optimal?                        | Time Complexity | Space Complexity |
| ------------------- | -------------------- | ------------------------------- | --------------- | ---------------- |
| BFS                 | Yes (if b is finite) | Yes (**iff** costs are uniform) | $O(b^d)$        | $O(b^d)$         |
| Uniform Cost        | Yes (if b is finite) | Yes                             | $O(b^{1+C/ε})$  | $O(b^{1+C/ε})$   |
| DFS                 | No\*                 | No                              | $O(b^m)$        | $O(bm)$          |
| Depth-limited       | No                   | No                              | $O(b^l)$        | $O(bl)$          |
| Iterative Deepening | Yes                  | Yes (if costs are uniform)      | $O(b^d)$        | $O(bd)$          |
| Bidirectional       | Yes                  | Yes (if costs are uniform)      | $O(b^{d/2})$    | $O(b^{d/2})$     |

\*Yes for finite state spaces.

Here:

- $b$ is the branching factor
- $d$ is the depth of the shallowest solution
- $m$ is the maximum depth of the state space
- $l$ is the depth limit
- $C$ is the cost of the optimal solution
- $ε$ is the minimum action cost
