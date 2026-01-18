# Merge Sort (Go)

Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.

## Complexity
- **Time Complexity**: $O(n \log n)$
- **Space Complexity**: $O(n)$

## Implementation Detail
The Go implementation uses recursion to divide the array and a helper function to merge the sorted sub-arrays.

```go
func MergeSort(arr []int) []int {
    // ... division logic ...
}

func merge(left, right []int) []int {
    // ... merging logic ...
}
```
