package arrays



// Birthday counts the number of contiguous segments of length m that sum to d.
func Birthday(n int, s []int, d int, m int) int {
	count := 0
	for i := 0; i <= len(s)-m; i++ {
		if SumArray(s[i:i+m]) == d {
			count++
		}
	}
	return count
}

// SumArray calculates the sum of all integers in a slice.
func SumArray(arr []int) int {
	sumVal := 0
	for _, v := range arr {
		sumVal += v
	}
	return sumVal
}
