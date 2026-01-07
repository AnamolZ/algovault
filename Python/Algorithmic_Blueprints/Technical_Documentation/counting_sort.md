
### Counting Sort — Time Complexity

| Case    | Time Complexity | Why                                                                 |
| ------- | --------------- | ------------------------------------------------------------------- |
| Best    | O(n + k)        | Counts elements once and rebuilds array in linear passes            |
| Average | O(n + k)        | Runtime depends on input size `n` and value range `k`               |
| Worst   | O(n + k)        | All values must be counted and rewritten regardless of distribution |

> where **n** = number of elements
> and **k** = maximum value in the array (`max(arr)`)

---

> Counting Sort **does not rely on comparisons**. Its performance depends on the range of input values rather than input order, making it extremely fast when `k` is small—but impractical when the value range is very large.

---