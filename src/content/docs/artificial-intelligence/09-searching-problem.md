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

Possible actions of the agent. Given a state $𝑠$,
$\text{Action}(𝑠)$ returns a finite set of actions that can be executed in
𝑠. We say that each of these actions is applicable in 𝑠.

### Transition model

Describes what each action does. $\text{Result}(s, a)$ returns the state that results from doing action $𝑎$
in state $𝑠$.

### State space

Combination of initial state, actions, and transitions model. Usually denoted by a graph.

### Action cost function

Numeric cost of applying action A in state S to reach state S'. Denoted by $\text{ActionCost}(S, A, S')$.

### Path

A sequence of states connected by a sequence of actions.

### Goal test

Determines if a given state is a goal state. Goal is defined by a property that applies to many states.

### Path cost

Numerical cost of a path. The sum of the costs of the actions in the path.

### Solution

A path from initial state to a goal state.

### Optimal solution

The solution with the lowest path cost.

## Measuring performance

- Completeness: Is the algorithm guaranteed to find a solution when there is one, and to correctly report failure when there is not?
- Cost optimality: Does it find a solution with the lowest path cost of all
solutions? Also referred to as admissibility or optimality.
- Time complexity: How long does it take to find a solution? Can be measured in seconds, or more abstractly by the number of states and
actions considered.
- Space complexity: How much memory is needed to perform the
search?
