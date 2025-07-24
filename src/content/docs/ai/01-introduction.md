---
title: Introduction to AI
sidebar:
  order: 1
  label: Introduction
slug: ai/introduction
prev: false
next: true
---

## Definitions

AI is concerned with understanding and building intelligent entities. Machines that can compute how to act effectively and safely in a wide range of novel situations. 

- Systems that think like humans
- Systems that think rationally
- Systems that act like humans
- Systems that act rationally

### Acting humanly

#### Turing Test

Proposed by Alan Turing in 1950. A method for determining whether a machine exhibits intelligent behavior indistinguishable from that of a human.

A human evaluator interacts with both a machine and a human through a text-based interface, without knowing which is which. If the evaluator cannot reliably distinguish the machine from the human based on their responses, the machine is said to have passed the test.

Pitfalls:
- Mimicking human behavior doesn't imply intelligence.
- Human intelligence is not the only form of intelligence.
- Subjective and can be influenced by the evaluator's biases.
- Does not measure the machine's ability to learn or adapt.
- Does not measure the machine's ability to reason or make decisions.

Major components:
- Natural language processing to communicate in a human language
- Knowledge representation to store what it knows
- Automated reasoning to answer questions and draw new conclusions
- Machine learning to adapt to new circumstances and to detect and extrapolate patterns
- Computer vision to understand and interpret visual information
- Robotics to interact with the physical world

### Thinking humanly

Aka. cognitive modelling approach. Can only be done after we know how exactly humans think. To determine that:
- Introspection: trying to catch our own thoughts as they go by
- psychological experiments: observing a person in action
- brain imaging: observing the brain in action

### Thinking rationally

Aka. laws of thoughts approach. Philosophical way of thinking.

Problems:
- Difficult to transform informal knowledge into formal terms
- Not all activities require logical reasoning
- Computationally intensive

### Acting rationally 

Aka. rational agent approach. Superset of thinking rationally. Can be different from acting humanly, as humans don't always act rationally.

#### Agent

An entity that perceives the environment and acts accordingly. Expected to operate autonomously and adapt to change.

All skills required to pass the Turing test allows the agent to act rationally.

More on agents is explained on [its own page](/ai/agents).

## Foundations

- Philosophy
- Mathematics
- Economics
- Neuroscience

## Terminology

### Artificial Intelligence (AI)
The broad field focused on creating systems that can perform tasks that typically require human intelligence. AI encompasses all approaches to creating intelligent behavior in machines, whether through rule-based systems, machine learning, or other techniques.

### Machine Learning (ML)
A subset of AI. Focuses on developing algorithms that allow computers to learn from and make predictions or decisions based on data. Rather than being explicitly programmed for a task, ML systems improve their performance through experience.

Key characteristics:
- Uses statistical techniques to enable machines to improve with experience
- Requires data to learn patterns
- Makes predictions based on previously observed patterns
- Examples: decision trees, support vector machines, random forests

### Deep Learning (DL)
A specialized subset of machine learning that uses neural networks with many layers (hence "deep"). These deep neural networks can automatically discover representations needed for detection or classification from raw data.

Key characteristics:
- Uses artificial neural networks with multiple hidden layers
- Requires large amounts of data and computing power
- Can automatically extract features from raw data
- Particularly effective for processing unstructured data (images, audio, text)
- Examples: convolutional neural networks (CNNs), recurrent neural networks (RNNs), transformers

### Natural Language Processing (NLP)
The field focused on enabling computers to understand, interpret, and generate human language. Modern NLP often uses machine learning and deep learning approaches.

### Computer Vision
The field focused on enabling computers to derive meaningful information from digital images and videos. Like NLP, modern computer vision heavily relies on machine learning and deep learning.

### Reinforcement Learning
A type of ML where an agent learns to make decisions by taking actions in an environment to maximize some notion of cumulative reward.
