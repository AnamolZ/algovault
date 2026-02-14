package arrays



// PickingNumbers finds the maximum length of a subarray where abs diff <= 1.
func PickingNumbers(a []int) int {
	frequency := make([]int, 101)
	for _, x := range a {
		if x >= 0 && x <= 100 {
			frequency[x]++
		}
	}

	maxCount := 0
	for i := 1; i < 101; i++ {
		sum := frequency[i] + frequency[i-1]
		if sum > maxCount {
			maxCount = sum
		}
	}

	return maxCount
}
