---
title: Markov Decision Process
sidebar:
  order: 21
slug: artificial-intelligence/mcp
prev: true
next: true
---

### Stochastic Domain

An environment in which outcomes are governed by probabilistic rules rather than being fully deterministic.

The result of an agent's action is not always predictable; instead, each action can lead to multiple possible outcomes, each with a certain probability. This uncertainty requires agents to reason about the likelihood of different future states and to make decisions that account for risk and variability.

Stochastic domains are commonly modeled using frameworks like Markov Decision Processes (MDPs), which explicitly represent the probabilities of transitions between states.

### Transition function

The transition function describes the probability of moving from one state to another given an action. Transition function is denoted using $T(s,a,s')$. The probability is denoted as $P(s'|s,a)$. Here:
- $s$ is the current state
- $a$ is the action taken
- $s'$ is the next state

## MDP

Short for Markov Decision Process. Defines a stochastic control problem. Denoted by $M=(S,A,T,R)$.

Here:
- $S$ is the set of states
- $A$ is the set of actions
- $T: S \times A \times S \rightarrow \mathbb{R}_{\ge 0}$ is the transition function
- $R: S \times A \rightarrow \mathbb{R}_{\ge 0}$ is the reward function

The objective is to maximize the sum of future rewards. A policy will be calculated to determine how to act.

_Markov_ means the future states depends only on the current state and action; not on the history of states.

### Reward function

Assigns a numerical value to each state-action pair, indicating the immediate reward received by the agent when transitioning from a state $s$ to a state $s'$ while taking action $a$. Reward function is denoted using $R(s,a,s')$. The reward is denoted as $R(s,a,s')$. Here:
- $s$ is the current state
- $a$ is the action taken
- $s'$ is the next state

### Policy

A function that maps states to actions. It determines the action to be taken in each state. Denoted using $\pi(s)$. Here:
- $s$ is the current state

An optimal policy is a policy that maximizes the expected sum of future rewards. It is denoted using $\pi^*(s)$. An explicit policy defines a reflex agent.

### Discounting rewards

It's reasonable to prefer rewards sooner. A solution for incorporating discounting rewards is to use a discount factor $\gamma \in [0,1]$ that reduces the importance of future rewards. The discounted reward is denoted as $G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$. Here:
- $t$ is the current time step
- $R_{t+k+1}$ is the reward received at time step $t+k+1$
