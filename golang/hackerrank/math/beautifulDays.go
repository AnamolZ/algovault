package math



// BeautifulDays counts the number of beautiful days in a range.
func BeautifulDays(i, j, k int) int {
	count := 0
	for d := i; d <= j; d++ {
		diff := d - reverseInt(d)
		if diff < 0 {
			diff = -diff
		}
		if diff%k == 0 {
			count++
		}
	}
	return count
}

func reverseInt(n int) int {
	res := 0
	for n > 0 {
		res = res*10 + n%10
		n /= 10
	}
	return res
}
