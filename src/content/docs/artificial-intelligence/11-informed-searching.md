---
title: Informed Searching
sidebar:
  order: 11
slug: artificial-intelligence/informed-searching
prev: true
next: true
---

Uses domain-specific hints about the location of goals. The hint comes in a heuristic function.

### Heuristic Function

Estimates the cost of the cheapest path from the state at node $n$ to a goal state. Denoted by $h(n)$. $ $

Used to guide the search algorithm towards promising paths, making search more efficient than uninformed methods.

Examples:

- In route finding: Straight-line distance to destination
- In 8-puzzle: Number of misplaced tiles or Manhattan distance

#### Admissible

When a heuristic function never overestimates the true cost to reach the goal.

#### Consistent/Monotonic

$h$ is consistent **iff**:

```math
h(n) \leq c(n, a, n') + h(n')
```

Here:
- $h(n)$ is the heuristic of a node $n$
- $h(n')$ is the heuristic of a node $n'$ 
- $n'$ is the successor node of $n$ after applying action $a$
- $c(n, a, n')$ is the cost of the action $a$ from node $n$ to node $n'$.

:::note

Every consistent heuristic function is admissible.

:::

## Algorithms

### Best-First Search

A general search approach that prioritizes nodes based on an evaluation function. At each step, it selects the most promising node from the frontier according to some measure.

The frontier is typically implemented as a priority queue ordered by the evaluation function value.

#### Evaluation Function

Denoted by $f(n)$. Used to determine which nodes to expand next. Assigns a numeric value to each node representing its _promise_ or _desirability_. Exact details depends on the best-first search variant.

### Greedy Best-First Search

Uses the heuristic function $h(n)$ as the evaluation function. $f(n) = h(n)$. $ $ Not complete, can lead to dead ends or infinite loops. Not optimal. Efficient.

```python
def greedy_best_first_search(start, goal_test, successors, heuristic):
    """
    Args:
        start: The initial state.
        goal_test: Function(state) -> bool, returns True if state is a goal.
        successors: Function(state) -> list of (action, next_state).
        heuristic: Function(state) -> estimated cost to goal.

    Returns:
        path: List of (action, state) from start to goal, or None if no path found.
    """
    frontier = PriorityQueue()
    frontier.put((heuristic(start), start, []))
    explored = set()

    while not frontier.empty():
        h, state, path = frontier.get()

        if goal_test(state):
            return path + [(None, state)]

        if state in explored:
            continue
        explored.add(state)

        for action, next_state in successors(state):
            if next_state not in explored:
                frontier.put((heuristic(next_state), next_state, path + [(action, state)]))

    return None
```

### A\* Search

Most widely known form of best-first search that uses an evaluation function $f(n) = g(n) + h(n)$ where:

- $f(n)$ - evaluation function
- $g(n)$ - cost so far to reach node $n$ from the start state
- $h(n)$ - estimated cost from $n$ to the goal

Combines the benefits of Dijkstra's algorithm (which considers path cost) and greedy best-first search (which uses a heuristic). It expands nodes in order of their $f(n)$ values, maintaining completeness while being more efficient than uniform-cost search.

Optimal when $h(n)$ is admissible. If $h(n)$ is also consistent (satisfies triangle inequality), A* becomes even more efficient as it never needs to reopen closed nodes.

Combines $h(n)$ with the actual cost $g(n)$ to reach node $n$. Explores the node that appears to be closest to the goal while considering the actual cost.

Complete and optimal given an admissible heuristic $h(n)$. $ $

```python
import heapq

def a_star_search(start, goal_test, successors, heuristic):
    """
    Generic A* search algorithm.

    Args:
        start: The initial state.
        goal_test: Function(state) -> bool, returns True if state is a goal.
        successors: Function(state) -> list of (action, next_state, cost).
        heuristic: Function(state) -> estimated cost to goal.

    Returns:
        path: List of (action, state) from start to goal, or None if no path found.
    """
    frontier = []
    heapq.heappush(frontier, (heuristic(start), 0, start, []))
    explored = {}

    while frontier:
        f, g, state, path = heapq.heappop(frontier)

        if goal_test(state):
            return path + [(None, state)]

        if state in explored and explored[state] <= g:
            continue
        explored[state] = g

        for action, next_state, cost in successors(state):
            new_g = g + cost
            new_f = new_g + heuristic(next_state)
            heapq.heappush(frontier, (new_f, new_g, next_state, path + [(action, state)]))

    return None
```

### Bidirectional A\* Search

More efficient than A\* search.

### Beam Search

Puts a limit on the size of the frontier. Not complete. Not optimal.

## Comparison

| Algorithm         | Completeness        | Optimality              | Time Complexity           | Space Complexity          |
| ----------------- | ------------------- | ----------------------- | ------------------------- | ------------------------- |
| Greedy Best-First | No                  | No                      | O(b^m) worst              | O(b^m) worst              |
| A\* Search        | Yes                 | Depends                 | O(b^d) exponential        | O(b^d) stores all nodes   |
| Bidirectional A\* | Yes                 | Yes (with consistent h) | O(b^(d/2))                | O(b^(d/2))                |
| Beam Search       | No (discards paths) | No                      | O(b·k) where k=beam width | O(k) linear in beam width |

Where:

- b = branching factor
- d = depth of the shallowest goal
- m = maximum depth of the search tree

## Performance of Heuristic Search

Depends on the quality of the heuristic function. A good heuristic can significantly reduce the search space and time. A poor heuristic can lead to inefficient search.

A good heuristic function can be constructed by:
- Relaxing the problem definition
-  Storing precomputed solution costs for subproblems in a pattern database
- Defining landmarks
- Learning from the experience with the problem class

### Heuristics from Relaxed Problems

A relaxed problem is a problem with fewer restrictions. The cost of an optimal solution to a relaxed problem is an
admissible heuristic for the original problem.

### Heuristics from Pattern Databases

Solution cost of a subproblem can also be used as an admissible heuristic for the original problem.

Pattern database stores these exact solution costs for every possible subproblem instance.
