package arrays



// SimpleArraySum calculates the sum of all integers in a given array.
func SimpleArraySum(arCount int, ar []int) int {
	res := ar[0]
	for i := 1; i < arCount; i++ {
		res += ar[i]
	}
	return res
}
