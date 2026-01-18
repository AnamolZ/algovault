# Quick Sort (Go)

Quick Sort is an efficient, comparison-based, divide and conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

## Complexity
- **Time Complexity**: Average $O(n \log n)$, Worst $O(n^2)$
- **Space Complexity**: $O(\log n)$ (stack space)

## Implementation Detail
The Go implementation uses the Lomuto partition scheme.

```go
func QuickSort(arr []int, low, high int) {
    // ... partition and recurse ...
}
```
