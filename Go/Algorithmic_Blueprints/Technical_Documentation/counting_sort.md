# Counting Sort (Go)

Counting Sort is a non-comparison based sorting algorithm that works by counting the number of objects having distinct key values (kind of hashing). Then doing some arithmetic to calculate the position of each object in the output sequence.

## Complexity
- **Time Complexity**: $O(n + k)$ where $k$ is the range of the input.
- **Space Complexity**: $O(n + k)$

## Implementation Detail
This implementation assumes non-negative integers.

```go
func CountingSort(arr []int) []int {
    // ... count, cumulative sum, and build output ...
}
```
