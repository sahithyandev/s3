---
title: Agent Program
sidebar:
  order: 6
slug: artificial-intelligence/agent-program
prev: true
next: true
---

An implementation of agent function. Maps percepts to actions. Can be considered as the _brain_ of the agent.

## Types

### Reflex agents

Takes actions based on the current percept, and not the percept history.

### Simple reflex agents

Actions depends only on the current percept, not the history. Simplest type. A predefined set of conditions-actions rules are used to select an action for the current percept. Has limited intelligence. Works best in a fully observable environment. Does not work in many situations, especially dynamic ones.

### Model-based reflex agents

Maintains an internal state which depends on the percept history. A simple reflex agent with memory. Plans the immediate action based on the current state and action.

Requires 2 kind of models:

- Transition model   
  how the environment changes based on the current state and action; both independent and dependent on the action.
- Sensor model   
  how the environment is reflected in percepts.
  
Indirectly uses the percept history to take actions. The model is like a _compressed_ internal state.

:::note

Most effective way to handle partial observability is to maintain an internal state, which depends on the percept sequence.

:::

### Goal-based agents

Takes actions to achieve a goal, by considering the future consequences. A model-based agent that work towards a goal. Plans ahead of the immediate action. Boolean evaluation of the goal.

More flexible than reflex agents. Among all the possible actions, the agent will take the action which is most likely help itself to achieve the goal. Uses [searching](/artificial-intelligence/searching) or planning to decide.

### Utility-based agents

Takes actions to achieve a goal in the _best_ way possible. Numeric evaluation of the path.

A generalization and improvement over goal-based agents. Used where goals are inadequate. Can handle scenarios where there are conflicting goals or multiple goals with different priorities. Instead of just determining whether a state achieves a goal or not, utility-based agents calculate the utility of each possible action, and takes the best one.

#### Utility function

Maps a state or a sequence of states onto a real number.

#### Happiness

Aka. satisfiction. The returned value of the utility function. Means how good the action is.

## Environmental state representation

### Atomic

State is represented as a single, indivisible entity. Similar to a black box. No internal state.

### Factored

State is represented as a set of variables. Each variable can be in one of several states.

### Structured

State is represented as a set of objects, and relationships.
