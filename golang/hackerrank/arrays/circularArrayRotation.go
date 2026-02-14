package arrays



// CircularArrayRotation performs circular rotation and answers queries.
func CircularArrayRotation(a []int, k int, queries []int) []int {
	n := len(a)
	k %= n

	// r = a[-k:] + a[:-k]
	r := make([]int, n)
	copy(r, a[n-k:])
	copy(r[k:], a[:n-k])

	result := make([]int, len(queries))
	for i, q := range queries {
		result[i] = r[q]
	}
	return result
}
