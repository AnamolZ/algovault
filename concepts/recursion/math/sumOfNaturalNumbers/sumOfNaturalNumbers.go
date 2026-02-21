package math

// SumNaturalNumbers finds the sum of all natural numbers up to n using recursion.
func SumNaturalNumbers(n int) int {
	// Base case: If n is 0, return 0 as the sum of natural numbers up to 0 is 0
	if n == 0 {
		return 0
	}

	// Recursive case: The sum of numbers up to n is n plus the sum of numbers up to (n-1)
	return n + SumNaturalNumbers(n-1)
}
