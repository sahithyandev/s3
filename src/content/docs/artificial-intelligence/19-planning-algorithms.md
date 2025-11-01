---
title: Planning Algorithms
sidebar:
  order: 19
slug: artificial-intelligence/planning-algorithms
prev: true
next: true
---

Based on a planning model (defined using a planning language), algorithms search for valid paths from initial state to goal state.

### Branching Factor

Number of applicable plans that don’t progress towards goal.

## State-Space Search

Searches for a path in the state space, which is represented as a graph.

- Nodes: states
- Edges: actions
- Path: a plan

Searching can either be:
- Forward (progression) – from initial state to goal
- Backward (regression) – from goal back to initial state

### Forward State-Space Search

Aka. Progression Planning. Start at initial state. Expand all actions whose preconditions hold. Apply effects to generate successor states. Test whether the goal is satisfied. Sound and complete.

Each action typically has cost 1.

Easy to implement, closer to real-life execution. Might explore many irrelevant states.

Large branching factor and irrelevant actions are the challenges. Solved by using heuristics.

Example: BFS, DFS, Best-First Search, Greedy Search.

### Backward State-Space Search

Aka. Regression planning. Starts from the goal. Works backward by finding actions that could have produced that goal. Continues until initial goal is reached.

An action is relevant **if**:

- It achieves at least one goal literal, and
- It does not delete any goal literal.

Avoids irrelevant actions. Can be complex when actions are conditional or complex. Otherwise search space is smaller.

Optimization techniques include lifting and the STRIPS algorithm.
