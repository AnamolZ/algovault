
### Heap Sort — Time Complexity

| Case    | Time Complexity | Why                                                      |
| ------- | --------------- | -------------------------------------------------------- |
| Best    | O(n log n)      | Building heap is O(n), each extraction requires heapify  |
| Average | O(n log n)      | Heap operations dominate regardless of input order       |
| Worst   | O(n log n)      | Heap height is log n, repeated n times during extraction |

---

> Heap Sort **always takes O(n log n)**, regardless of input order, because heap construction and re-heapification follow fixed structural rules—unlike Quick Sort, which can degrade to O(n²) in the worst case.

---