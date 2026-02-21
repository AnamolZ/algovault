package arrays



// BeautifulTriplets finds the number of beautiful triplets in an array.
func BeautifulTriplets(arr []int, d int) int {
	counts := make(map[int]int)
	for _, v := range arr {
		counts[v]++
	}

	total := 0
	for x, count := range counts {
		if counts[x+d] > 0 && counts[x+2*d] > 0 {
			total += count * counts[x+d] * counts[x+2*d]
		}
	}
	return total
}
