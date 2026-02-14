package simulation
import (
	"sort"
)








// BiggerIsGreater finds the smallest lexicographically greater string.
func BiggerIsGreater(word string) string {
	chars := []rune(word)
	n := len(chars)
	pivot := -1

	for i := n - 1; i > 0; i-- {
		if chars[i] > chars[i-1] {
			pivot = i - 1
			break
		}
	}

	if pivot == -1 {
		return "no answer"
	}

	swapIdx := -1
	for j := n - 1; j > pivot; j-- {
		if chars[j] > chars[pivot] {
			swapIdx = j
			break
		}
	}

	chars[pivot], chars[swapIdx] = chars[swapIdx], chars[pivot]

	// Sort suffix
	suffix := chars[pivot+1:]
	sort.Slice(suffix, func(i, j int) bool {
		return suffix[i] < suffix[j]
	})

	return string(chars)
}
