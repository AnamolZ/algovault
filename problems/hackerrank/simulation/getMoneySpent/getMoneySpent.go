package simulation
import (
	"sort"
)








// GetMoneySpent finds the maximum amount spent using brute-force.
func GetMoneySpent(k []int, d []int, b int) int {
	maxSpent := -1
	for _, x := range k {
		for _, y := range d {
			if x+y <= b {
				if x+y > maxSpent {
					maxSpent = x + y
				}
			}
		}
	}
	return maxSpent
}

// GetMoneySpentMergeSort finds the maximum amount spent using sorting and two pointers.
func GetMoneySpentMergeSort(k []int, d []int, b int) int {
	sort.Ints(k)
	sort.Slice(d, func(i, j int) bool {
		return d[i] > d[j]
	})

	maxSpent := -1
	i, j := 0, 0
	for i < len(k) && j < len(d) {
		current := k[i] + d[j]
		if current <= b {
			if current > maxSpent {
				maxSpent = current
			}
			i++ // Try more expensive keyboard
		} else {
			j++ // Need cheaper drive
		}
	}
	return maxSpent
}
