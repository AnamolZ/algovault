# Insertion Sort (Go)

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## Complexity
- **Time Complexity**: $O(n^2)$
- **Space Complexity**: $O(1)$

## Implementation Detail
The Go implementation uses a standard iterative approach with an in-place sort.

```go
func InsertionSort(arr []int) {
    n := len(arr)
    for i := 1; i < n; i++ {
        key := arr[i]
        j := i - 1
        for j >= 0 && arr[j] > key {
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = key
    }
}
```
