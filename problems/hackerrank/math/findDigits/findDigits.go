package math



// FindDigits counts the number of digits in n that are divisors of n.
func FindDigits(n int) int {
	c := 0
	temp := n
	for temp > 0 {
		digit := temp % 10
		if digit != 0 && n%digit == 0 {
			c++
		}
		temp /= 10
	}
	return c
}
