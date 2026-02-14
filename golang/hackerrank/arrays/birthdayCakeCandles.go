package arrays



// FindMax finds the maximum value in a list of integers.
func FindMax(arr []int) int {
	maxN := arr[0]
	for _, x := range arr {
		if x > maxN {
			maxN = x
		}
	}
	return maxN
}

// BirthdayCakeCandles calculates the frequency of the tallest candles.
func BirthdayCakeCandles(arr []int) int {
	maxN := FindMax(arr)
	count := 0
	for _, x := range arr {
		if x == maxN {
			count++
		}
	}
	return count
}
