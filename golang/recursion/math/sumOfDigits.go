package math

// SumDigits calculates the sum of digits of a number.
func SumDigits(n int) int {
	// Base condition: If n is 0, return 0 as there are no more digits to process
	if n == 0 {
		return 0
	}

	// Extract the last digit of n by calculating the remainder when dividing by 10
	m := n % 10

	// Remove the last digit from n by performing integer division by 10
	n = n / 10

	// Recursive case: Add the extracted digit to the sum of digits from the remaining number
	return m + SumDigits(n)
}
