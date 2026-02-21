package arrays
import (
	"sort"
)








// CutTheSticks computes the number of sticks remaining after each cut using sorting.
func CutTheSticks(sticks []int) []int {
	if len(sticks) == 0 {
		return []int{}
	}

	sortedSticks := make([]int, len(sticks))
	copy(sortedSticks, sticks)
	sort.Ints(sortedSticks)

	n := len(sortedSticks)
	cuts := []int{n}

	for i := 1; i < n; i++ {
		if sortedSticks[i] != sortedSticks[i-1] {
			cuts = append(cuts, n-i)
		}
	}

	return cuts
}

// CutSticksBruteforce simulates the stick-cutting process (brute-force).
func CutSticksBruteforce(sticks []int) []int {
	remaining := make([]int, len(sticks))
	copy(remaining, sticks)
	var cuts []int

	for len(remaining) > 0 {
		cuts = append(cuts, len(remaining))
		shortest := remaining[0]
		for _, v := range remaining {
			if v < shortest {
				shortest = v
			}
		}

		var nextRemaining []int
		for _, v := range remaining {
			if v > shortest {
				nextRemaining = append(nextRemaining, v-shortest)
			}
		}
		remaining = nextRemaining
	}

	return cuts
}
