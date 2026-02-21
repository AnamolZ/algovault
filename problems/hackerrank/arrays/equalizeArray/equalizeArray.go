package arrays



// EqualizeArray finds the minimum number of elements to delete to make all elements equal.
func EqualizeArray(arr []int) int {
	if len(arr) == 0 {
		return 0
	}
	counts := make(map[int]int)
	maxFreq := 0
	for _, v := range arr {
		counts[v]++
		if counts[v] > maxFreq {
			maxFreq = counts[v]
		}
	}
	return len(arr) - maxFreq
}
