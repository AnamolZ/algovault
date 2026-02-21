package math



// AVeryBigSum calculates the sum of elements in an array, handling potentially very large integers.
func AVeryBigSum(a int, listB []int64) int64 {
	var sum int64
	for i := 0; i < a; i++ {
		sum += listB[i]
	}
	return sum
}
