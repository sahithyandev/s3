---
title: Reinforcement Learning
sidebar:
  order: 23
slug: artificial-intelligence/reinforcement-learning
prev: true
next: false
---

The process of _learning_ to maximize expected rewards by trial and error. Feedback is given in the form of _rewards_. Agent's utility is defined by the reward function. All learning is based on observed samples of outcomes.

Builds on MDPs. Here, transition function and reward function are unknown.

### Components

- State $s \in S$
- Action $a \in A(s)$
- Transition model $T(s,a,s’)$ – unknown
- Reward $R(s,a,s’)$ – unknown
- Policy $\pi(s)$: action rule

## Model-Based Learning

Based on observations through multiple episodes, the agent learns the $T$ and $R$ functions.

Steps:
- Collect counts of $(s,a,s’)$ and rewards.
- Estimate $T, R$.
- Run planning on learned model.

## Model-Free Learning

An agent learns directly from its interactions with the environment.

### Passive RL

An agent observes another agent's actions and rewards. And learns from the observed outcomes.

### Active RL

An agent takes actions and receives rewards. And learns from the outcomes.

**Model-Free**

* Don’t learn T,R explicitly.
* Learn values (V or Q) directly from samples.
* Suited when environment is large or partially unknown.

## Passive Reinforcement Learning (Policy Evaluation)

**Given:** a fixed policy π(s).
**Goal:** learn Vπ(s) without T,R.
Agent follows π and observes transitions.

### Direct Evaluation

* For each visited s, record total discounted return G from that episode.
* Average all G values → Vπ(s).
* Simple but slow; each state learned independently.

### Sample-Based Evaluation

* Idea: use samples of outcomes s’ to approximate expectations in Bellman update.
* But can’t “rewind” to resample → inefficient.

### Temporal-Difference (TD) Learning

* Update V(s) after every transition:
  V(s) ← V(s) + α [ r + γ V(s’) − V(s) ]
* Learns incrementally; combines sampling + dynamic programming idea.
* **α:** learning rate; **γ:** discount factor.
* Works without T,R and learns faster than direct evaluation.

**Key Points**

* TD(0) ≈ sampled Bellman update.
* Larger α → faster but noisier learning.
* Decreasing α → convergent average.

## Active Reinforcement Learning

**Goal:** learn **optimal policy** π* without knowing T,R.
Now agent **chooses actions** itself.

**Challenge:** *Exploration vs. Exploitation*

* Explore → try new actions to discover rewards.
* Exploit → use best-known action for high return.
  Balancing both is essential.

## Q-Learning (Model-Free Control)

**Idea:** learn Q*(s,a) directly using sample updates.

**Update Rule**
Q(s,a) ← Q(s,a) + α [ r + γ maxₐ′ Q(s’,a′) − Q(s,a) ]

**Properties**

* Converges to optimal Q* even with suboptimal actions (off-policy).
* Needs:

  * Enough exploration (e.g., ε-greedy).
  * Gradually reduced α.
* In limit → yields optimal policy: π*(s) = argmaxₐ Q(s,a).

## Summary Table

| Concept     | Known?       | Learns       | Key Update / Idea      |
| ----------- | ------------ | ------------ | ---------------------- |
| Model-Based | Learns T,R   | Optimal V, π | Estimate T,R → run VI  |
| Direct Eval | Policy fixed | Vπ           | Average returns        |
| TD Learning | Policy fixed | Vπ           | V ← V + α[r+γV′−V]     |
| Q-Learning  | No model     | Q*, π*       | Q ← Q + α[r+γmax Q′−Q] |

### Practical Applications

* **Games (Atari, Chess):** learn optimal moves by simulation.
* **Robotics:** learn control without full physics model.
* **Autonomous driving:** balance exploration safely.

### Common Pitfalls

* Too high α → oscillations.
* No exploration → stuck in suboptimal policy.
* Premature convergence if α drops too soon.
