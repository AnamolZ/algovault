package main

import (
	"fmt"
	"sort"
)

func stones(n, a, b int) []int {
	resMap := make(map[int]bool)
	for i := 0; i < n; i++ {
		val := i*b + (n-1-i)*a
		resMap[val] = true
	}

	var res []int
	for val := range resMap {
		res = append(res, val)
	}
	sort.Ints(res)
	return res
}

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
