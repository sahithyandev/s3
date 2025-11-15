---
title: Dekker's Algorithm
sidebar:
  order: 11
slug: operating-systems/dekkers-algorithm
prev: true
next: true
---

A classical solution to the mutual exclusion problem, specifically designed for two processes. One of the first algorithms to allow two processes to share a single-use resource without conflict, using only shared memory and without relying on special atomic instructions.

## Shared Variables

Dekker's algorithm uses two shared variables:
- `flag[0]` and `flag[1]`: Boolean flags indicating if process $P_0$ or $P_1$ wants to enter the critical section.
- `turn`: An integer variable indicating whose turn it is to enter the critical section.

## Algorithm Steps

For each process $P_i$ (where $i$ is 0 or 1):

1. Express Intent to Enter:
   - Set `flag[i] = true` to indicate that $P_i$ wants to enter the critical section.

2. Check Other Process:
   - While `flag[j]` (where $j$ is the other process) is true:
     - If `turn != i`, set `flag[i] = false` and wait until `turn == i`.
     - Once `turn == i`, set `flag[i] = true` again and repeat the check.

3. Enter Critical Section:
   - When the loop exits, $P_i$ can safely enter the critical section.

4. Exit Critical Section:
   - Set `turn = j` to give the other process a chance.
   - Set `flag[i] = false` to indicate $P_i$ is leaving the critical section.

## Pseudocode

For process $P_i$ ($i = 0 \text{ or } 1, j = 1 - i$):

```c
// Entry section
flag[i] = true;
while (flag[j]) {
    if (turn != i) {
        flag[i] = false;
        while (turn != i) {
            // busy wait
        }
        flag[i] = true;
    }
}
// Critical section
// ... (access shared resource)
// Exit section
turn = j;
flag[i] = false;
```

## How It Works

- Mutual Exclusion: Both processes cannot be in the critical section simultaneously because at least one will be forced to wait if both want to enter.
- Progress: If only one process wants to enter, it will not be blocked.
- Bounded Waiting: The `turn` variable ensures that if both processes want to enter, they alternate access, preventing starvation.

## Key Features

- No Special Instructions: Dekker's algorithm works with only simple reads and writes to shared variables.
- Busy Waiting: The algorithm uses busy waiting (spinlocks), which can be inefficient on single-processor systems.
- Historical Importance: Dekker's algorithm was a foundational step in the development of concurrent programming and inspired later algorithms like Peterson's algorithm.

## Limitations

- Only works for two processes.
- Not suitable for modern multiprocessor systems due to cache coherence and memory consistency issues.
- Busy waiting can waste CPU cycles.
