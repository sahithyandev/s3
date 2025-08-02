---
title: Agents
sidebar:
  order: 2
slug: artificial-intelligence/agents
prev: true
next: true
---

Anything that can perceive the environment using sensors and act upon it using actuators.

### Percept sequence
The complete history of everything an agent has perceived.

### Agent function 
Maps an agent's percept sequence to an action.

### Agent program
An implementation of agent function. Maps percepts to actions. Can be considered as the _brain_ of the agent. Dicussed more in depth in [the coming section](/artificial-intelligence/agent-program).

### Agent architecture

The computing device with physical sensors and actuators on which the agent program runs.

An agent program's effectiveness is measured through a [performance measure](/ai/performance-measure). An agent is the combination of the agent program and the agent architecture.

### Autonomous

When an agent's actions depend more on its experience compared to the built-in knowledge.

## Rational agent

An agent that acts as to achieve the best outcome when there is uncertainty. Built to do the _right_ think. The _right_ think is the objective that is provided to the agent.

Perfect rationality is not feasible in complex environments because of the computational demands. Limited rationality is aimed in that case.

The right thing to do at a given time depends on:
- performance measure
- percept sequence
- agent's understanding of the environment
- the possible actions by the agent

### Definition

For each possible percept sequence, a rational should select an action, to maximize the performance measure, given the evidence provided by the percept sequence and its built-in knowledge.
