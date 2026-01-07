
| Case    | Time Complexity | Why                                                            |
| ------- | --------------- | -------------------------------------------------------------- |
| Best    | O(n log n)      | Pivot divides array evenly at each step                        |
| Average | O(n log n)      | Random pivot usually splits array reasonably well              |
| Worst   | O(n²)           | Pivot is always smallest or largest, causing unbalanced splits |

---

> Quick Sort is generally faster than Merge Sort in practice due to **in-place partitioning** and lower constant factors, but in the worst case it can degrade to O(n²).
---