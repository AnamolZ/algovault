# Heap Sort (Go)

Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It's similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements.

## Complexity
- **Time Complexity**: $O(n \log n)$
- **Space Complexity**: $O(1)$

## Implementation Detail
The Go implementation builds a max-heap and then repeatedly extracts the max element.

```go
func HeapSort(arr []int) {
    // ... heapify and sort ...
}
```
