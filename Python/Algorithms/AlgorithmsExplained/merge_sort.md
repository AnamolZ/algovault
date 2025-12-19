
| Case    | Time Complexity | Why                                               |
| ------- | --------------- | ------------------------------------------------- |
| Best    | O(n log n)      | Even if array is sorted, it still splits & merges |
| Average | O(n log n)      | Normal case                                       |
| Worst   | O(n log n)      | Maximum comparisons while merging                 |

---

> Merge sort **always takes O(n log n)**, unlike Quick Sort, which can degrade to O(n²) in worst case.
---