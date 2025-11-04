---
title: Expectimax
sidebar:
  order: 23
slug: artificial-intelligence/expectimax
prev: true
next: true
---

A decision-making method used in MDP. Extends the idea of a deterministic max by replacing the opponent’s worst-case move with an expected value over possible outcomes.

Expectimax computes the expected utility of each action considering the probabilities, then chooses the action with the highest expected value.

```math
V(s) = \max_{a} \sum_{s'} P(s'|s,a) [R(s,a,s') + \gamma V(s')]
```

Here:

- $s$: current state
- $a$: action
- $s'$: next state
- $P(s'|s,a)$: probability of next state
- $R(s,a,s')$: reward
- $\gamma$: discount factor

### Step-by-Step Idea

For each action $a$ available on state $s$, expected value is calculated using the weighted average of future values. Maximum expected value action is selected.
