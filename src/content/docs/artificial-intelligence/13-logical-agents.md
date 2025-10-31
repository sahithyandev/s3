---
title: Logical Agents
sidebar:
  order: 13
slug: artificial-intelligence/logical-agents
prev: true
next: true
---

Computational entities that make decisions and take actions based on formal logic.


Unlike agents that rely solely on simple rules or direct mappings from perceptions to actions, logical agents use a knowledge base composed of logical sentences to represent information about the world. This knowledge base is typically expressed in a formal language, such as propositional logic or first-order logic, which allows the agent to reason about complex relationships and infer new facts.

At the core of a logical agent is the process of inference. The agent receives percepts from its environment, which it encodes as logical statements and adds to its knowledge base. Using inference mechanisms—such as modus ponens, resolution, or forward and backward chaining—the agent can deduce new information that is not explicitly stated in its percepts. This ability to derive implicit knowledge is what distinguishes logical agents from simpler types.

A logical agent operates in three main phases:

1. **Knowledge Representation:** The agent must represent facts, rules, and relationships about the world in a formal logical language. This includes both static knowledge (unchanging facts) and dynamic knowledge (facts that change over time).

2. **Inference:** The agent applies logical inference rules to its knowledge base to derive new conclusions. For example, if the agent knows "All humans are mortal" and "Socrates is a human," it can infer "Socrates is mortal."

3. **Decision Making:** Based on the conclusions drawn from inference, the agent selects actions that achieve its goals. The agent may use goal-based reasoning, planning, or utility-based approaches, but the foundation is always the logical manipulation of its knowledge base.

Logical agents must also handle uncertainty and incomplete information. While classical logic is deterministic, real-world environments are often noisy and ambiguous. To address this, logical agents may incorporate probabilistic reasoning or non-monotonic logic, allowing them to revise beliefs and make plausible assumptions when necessary.

The power of logical agents lies in their generality and flexibility. Because their reasoning is based on formal logic, they can adapt to new situations by updating their knowledge base and applying inference to novel problems. However, this expressiveness comes at a computational cost: inference in rich logical languages can be computationally expensive, and managing large knowledge bases efficiently is a significant challenge.

In summary, logical agents are distinguished by their use of formal logic to represent knowledge, infer new information, and make decisions. Their deep reasoning capabilities enable them to operate in complex, dynamic environments, but also require sophisticated algorithms to manage inference and knowledge representation.
