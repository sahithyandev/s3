---
title: Planning
sidebar:
  order: 16
slug: artificial-intelligence/planning
prev: true
next: true
---

Planning is the process of finding a **sequence of actions** that transforms the current state of the world into one where the goal is achieved. It distinguishes *deliberative agents* (which plan) from purely *reactive agents* that respond immediately to stimuli.

## 1. Importance of Planning

Planning enables intelligent agents to reason about *what to do and when*.
Example: deciding how to prepare for a weekend or schedule a robot’s tasks.
Benjamin Franklin: *“If you fail to plan, you plan to fail.”*

Applications include

* Mobile robots and logistics scheduling
* Virtual agents and workflow management
* Hubble telescope operation planning
* Automated test-case generation in software engineering

## 2. Characteristics of Classical Planning

Planning assumes a **deterministic, fully observable, static, and discrete environment.**
Static → world changes only when the agent acts.
Goal: compute an ordered set of actions to move from the **initial state** to the **goal state.**

Example problem
Goal: have a birthday party
Initial state: at home, flour available, butter and sugar missing
Actions: invite friends, buy ingredients, make cake

## 3. Elements of a Planning Problem

A planning problem must specify

* Representation of world states
* The initial state
* A goal description
* A set of possible actions and their effects
  The solution is a plan (sequence of actions) that achieves the goal.

## 4. Requirements for a Planning System

* A formal language to represent states, goals, and actions
* An algorithm to search for valid plans
* Logical structure enabling efficient reasoning about actions

## 5. Language of Planning Problems

The language must be expressive enough to describe various domains yet simple enough for efficient algorithms.
The standard for classical planning is **PDDL (Planning Domain Definition Language).**

### 5.1 State Representation

* Conjunction of ground atomic fluents (facts).
* May be propositional or first-order.
  Example

```
At(Plane1, Sydney) ∧ At(Plane2, Perth)
```

Rules

* Ground literals only (no variables).
* Function-free terms.
* Closed-world assumption: anything not stated is false.
* Unique-name assumption: distinct symbols mean different objects.

### 5.2 Goal Representation

A partially specified state.
Example

```
Goal: At(Plane1, Melbourne)
```

A state satisfies a goal if it includes all atoms of the goal.
Example
State (Rich ∧ Famous ∧ Happy) satisfies goal (Rich ∧ Famous).

### 5.3 Action Representation

Each action schema contains

* **Preconditions:** conditions that must be true to execute the action.
* **Effects:** facts added or removed after execution.

Example

```
Action Fly(p, from, to)
PRECOND: At(p, from) ∧ Plane(p) ∧ Airport(from) ∧ Airport(to)
EFFECT: ¬At(p, from) ∧ At(p, to)
```

Notes

* Parameters listed in parentheses.
* Effects can be separated into *add list* and *delete list*.
* Only mentioned literals change (frame assumption).

## 6. PDDL Semantics

An action is **applicable** if its preconditions are satisfied in the current state.
Example
State:

```
At(P1, JFK) ∧ At(P2, SFO) ∧ Plane(P1) ∧ Plane(P2)
∧ Airport(JFK) ∧ Airport(SFO)
```

Substitution `{p/P1, from/JFK, to/SFO}` satisfies the Fly action’s preconditions.
Executing the action removes negative literals (At(p, from)) and adds positive ones (At(p, to)).

## 7. Extensions: ADL (Action Description Language)

STRIPS was limited in expressiveness, so **ADL** introduced typed parameters and inequality.
Example

```
Action Fly(p:Plane, from:Airport, to:Airport)
PRECOND: At(p, from) ∧ (from ≠ to)
EFFECT: ¬At(p, from) ∧ At(p, to)
```

ADL supports richer conditions while keeping STRIPS-like structure.

## 8. Example Domains

* **Air Cargo:** transporting packages using aircraft between airports.
* **Spare Tire:** replacing a flat tire with the spare using logical actions.

## 9. Planning Algorithms

Two major approaches: **state-space search** and **plan-space (partial-order) search.**

### 9.1 State-Space Search

* Nodes: world states
* Edges: actions
* Path: a plan
  Search can proceed
* **Forward (progression)** – from initial state to goal
* **Backward (regression)** – from goal back to initial state

#### Forward State-Space Search

* Start at initial state.
* Expand all actions whose preconditions hold.
* Apply effects to generate successor states.
* Test whether the goal is satisfied.
* Each action typically has cost 1.

Forward search is

* *Sound*: every returned plan is valid.
* *Complete*: if a solution exists, at least one search path finds it.
  Challenge: large branching factor and irrelevant actions → use heuristics.

#### Common Algorithms

Breadth-first, Depth-first, Greedy, and A* search.
Loop checking avoids revisiting identical or subset states.

#### Example: Blocks World

Objects: cube-shaped blocks on a table.
Predicates:

```
Holding(a), handEmpty, onTable(a), on(a,b), clear(a)
```

Actions:

```
Pickup(a), Putdown(a), Stack(a,b), Unstack(a,b)
```

Goal: build stacks in specified order.
Forward search explores all possible stacking/unstacking sequences.

### 9.2 Heuristics in Planning

Heuristics estimate how far a state is from the goal.
Types

* **Domain-specific:** manually designed for the domain.
* **Domain-independent:** automatically computed from problem description (e.g., count unmatched goal facts).
  Used in algorithms such as **A*** for efficiency.
  Two objectives of heuristic selection:
* Find a solution quickly.
* Find the optimal (lowest-cost) plan.

### 9.3 Backward State-Space Search

Also called **regression planning.**
Starts from the goal, finds actions that can produce part of it.
An action is relevant if

* It achieves at least one goal literal, and
* It does not delete any goal literal.

New subgoal set (inverse transition):

```
γ⁻¹(g,a) = (g – effects(a)) ∪ precond(a)
```

Backward search avoids irrelevant actions but may still face large branching factors.
Optimization techniques include *lifting* and the *STRIPS algorithm*.

## 10. Plan-Space Search

Instead of searching among world states, plan-space methods (e.g., **Partial-Order Planning**) search among partially ordered plans — refining them until all preconditions are satisfied. This reduces unnecessary sequencing constraints and improves flexibility.

## 11. Summary

Planning in AI determines sequences of actions that achieve goals in deterministic, discrete worlds.
Formalisms like **PDDL** and **ADL** define states, goals, and actions precisely.
Search-based algorithms (forward, backward, or partial-order) generate valid action sequences, often guided by heuristics to manage complexity.
Classical planning remains a foundation for modern automated reasoning, robotics, and intelligent agents.
