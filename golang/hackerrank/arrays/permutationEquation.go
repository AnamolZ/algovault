package arrays



// PermutationEquation finds the index of the index of each value.
func PermutationEquation(p []int) []int {
	n := len(p)
	// Create a value-to-index map for faster lookup (since values are 1-based)
	pos := make(map[int]int)
	for i, v := range p {
		pos[v] = i + 1
	}

	result := make([]int, n)
	for x := 1; x <= n; x++ {
		// We want to find y such that p(p(y)) = x
		// Which means p(y) = pos[x]
		// So y = pos[pos[x]]
		result[x-1] = pos[pos[x]]
	}
	return result
}
