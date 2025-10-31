---
title: Searching Problem
sidebar:
  order: 9
slug: artificial-intelligence/searching-problem
prev: true
next: true
---

## Terminology

### Initial state

The state that the agent starts in.

### Actions

The finite set of actions that can be executed in a state $𝑠$. Denoted by $\text{Action}(𝑠)$. Each action is said to be _applicable_ in 𝑠.

### Transition model

Describes what each action does. $\text{Result}(s, a)$ returns the state that results from doing action $𝑎$
in state $𝑠$.

### State space

Combination of initial state, actions, and transitions model. Usually denoted by a graph.

### Action cost function

Numeric cost of applying action $a$ in state $s$ to reach state $s'$. Denoted by $\text{ActionCost}(s, a, s')$.

### Path

A sequence of states connected by a sequence of actions.

### Goal test

Determines if a given state is a goal state. Multiple goal states can exist.

### Path cost

Numerical cost of a path. The sum of the costs of the actions in the path.

### Solution

A path from initial state to a goal state.

### Optimal solution

A solution with the lowest path cost.

## Measuring performance

### Completeness

Whether the algorithm is guaranteed to find a solution if one exists, and to correctly report failure if none exists.

### Cost Optimality

Aka. optimality or admissibility. Whether the algorithm finds a solution with the lowest possible path cost among all solutions.

### Time Complexity

How long the algorithm takes to find a solution. Can be quantified in actual time (seconds) or more abstractly by the number of states and actions considered during the search.

### Space Complexity

How much memory is required to perform the search.
