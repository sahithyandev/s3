---
title: Crows Foot Notation
sidebar:
  order: 8
slug: database-systems/crows-foot-notation
prev: true
next: true
---

One of the ER diagram notations.

## Entity

Entity name is singluar. Represented by a rectangle.

## Attribute

Included inside the entity rectangle.

### Key attribute

Prefixed with an "*".

## Relationship

Represented by a line. Can have 2 indicators on each ends.
- Multiplicity
- Optional/not

### Multiplicity

Refers to maximum number of times that an instance of an entity can be associated with instances in the related entity. Indicated close to the entity rectangle. Indicated by:
- | means 1
- > means many

### Optionality

Refers to the minimum number of times that an instance can be related to others. Indicated next to the multiplicity indicator. Indicated by:
- | means 1
- o means 0
