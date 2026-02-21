package math

// CountDigits counts the number of digits in a number using recursion.
func CountDigits(number int) int {
	// Base case: If the number is 0, it has exactly 1 digit
	if number == 0 {
		return 1
	}
	// Recursive step: Remove the last digit and count the remaining digits
	return 1 + CountDigits(number/10)
}
