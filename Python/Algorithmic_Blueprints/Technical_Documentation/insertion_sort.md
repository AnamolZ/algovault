
### Insertion Sort — Time Complexity

| Case    | Time Complexity | Why                                                            |
| ------- | --------------- | -------------------------------------------------------------- |
| Best    | O(n)            | Array is already sorted, so no shifting occurs                 |
| Average | O(n²)           | Each element shifts through about half of the sorted portion   |
| Worst   | O(n²)           | Reverse-sorted array causes maximum shifting for every element |

---

> Insertion Sort **adapts to input order**—it is very fast for nearly sorted data (O(n)) but becomes inefficient for large or reverse-ordered arrays, where repeated shifting leads to O(n²) time complexity.

---