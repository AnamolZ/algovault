package matrix



// DiagonalDifference calculates the absolute difference between the sums of a square matrix's diagonals.
func DiagonalDifference(arr [][]int, n int) int {
	primarySum := 0
	secondarySum := 0
	for i := 0; i < n; i++ {
		primarySum += arr[i][i]
		secondarySum += arr[i][n-i-1]
	}
	diff := primarySum - secondarySum
	if diff < 0 {
		return -diff
	}
	return diff
}
