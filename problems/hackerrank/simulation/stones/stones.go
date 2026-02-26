package main

import (
	"fmt"
	"sort"
)

// stones calculates all unique possible values of the last stone after n steps.
// Manasa reaches the n-th stone by taking (n-1) steps, each of length a or b.
func stones(n, a, b int) []int {
	// Use a map to store unique values, handling cases where a == b.
	resMap := make(map[int]bool)
	for i := 0; i < n; i++ {
		// Value = (number of b steps * b) + (remaining a steps * a)
		val := i*b + (n-1-i)*a
		resMap[val] = true
	}

	// Extract unique keys from the map.
	var res []int
	for val := range resMap {
		res = append(res, val)
	}

	// Sort results in non-decreasing order.
	sort.Ints(res)
	return res
}

// main handles input/output for HackerRank test cases.
func main() {
	var t int
	fmt.Scan(&t)

	for i := 0; i < t; i++ {
		var n, a, b int
		fmt.Scan(&n, &a, &b)

		result := stones(n, a, b)
		for j, val := range result {
			fmt.Print(val)
			if j < len(result)-1 {
				fmt.Print(" ")
			}
		}
		fmt.Println()
	}
}
