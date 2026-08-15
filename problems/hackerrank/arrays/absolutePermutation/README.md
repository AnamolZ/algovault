# Absolute Permutation

## Problem Description
We define $P$ to be a permutation of the first $n$ natural numbers in the range $[1, n]$. Let $pos[i]$ denote the value at position $i$ in permutation $P$ using 1-based indexing.

$P$ is considered to be an **absolute permutation** if $|pos[i] - i| = k$ holds true for every $i \in [1, n]$.

Given $n$ and $k$, print the lexicographically smallest absolute permutation $P$. If no absolute permutation exists, print `-1`.

## Explanation

For an absolute permutation to exist, every index $i$ must map to a value $v$ such that $|v - i| = k$. This implies $v = i - k$ or $v = i + k$.

To find the lexicographically smallest absolute permutation:
1. If $k = 0$, the permutation is simply $P[i] = i$.
2. For $k > 0$, we swap elements in blocks of size $k$. The elements $[1, k]$ must be swapped with $[k+1, 2k]$ to satisfy the absolute difference $k$. This means the elements are processed in chunks of size $2k$.
3. Therefore, $n$ must be perfectly divisible by $2k$. If $n \pmod{2k} \neq 0$, no such permutation is possible and we return `-1`.
4. If it is possible, we construct the permutation by iterating in chunks of $2k$ and adding the upper half $[i+k, i+2k-1]$ followed by the lower half $[i, i+k-1]$.

## Implementations
- [Python 3](absolutePermutation.py): Includes the logic to shift numbers and validate the resulting array.
- [Go](absolutePermutation.go): Fast and efficient implementation checking constraints prior to building the result array.
