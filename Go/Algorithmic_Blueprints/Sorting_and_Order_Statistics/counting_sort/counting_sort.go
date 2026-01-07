package main

import (
	"fmt"
)

// CountingSort sorts an array of integers using the counting sort algorithm.
// Note: This implementation assumes integers are within a reasonable range (0 to max).
func CountingSort(arr []int) []int {
	if len(arr) == 0 {
		return arr
	}

	max := arr[0]
	for _, v := range arr {
		if v > max {
			max = v
		}
	}

	count := make([]int, max+1)
	for _, v := range arr {
		count[v]++
	}

	for i := 1; i <= max; i++ {
		count[i] += count[i-1]
	}

	output := make([]int, len(arr))
	for i := len(arr) - 1; i >= 0; i-- {
		output[count[arr[i]]-1] = arr[i]
		count[arr[i]]--
	}

	return output
}

func main() {
	sample := []int{4, 2, 2, 8, 3, 3, 1}
	fmt.Println("Original array:", sample)
	sorted := CountingSort(sample)
	fmt.Println("Sorted array:  ", sorted)
}
