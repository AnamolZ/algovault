package math

// Factorial calculates the factorial of a number n using recursion.
func Factorial(n int) int {
	// Base condition: If n is 0 or 1, return 1 as factorial of 0 and 1 is 1
	if n == 0 || n == 1 {
		return 1
	}

	// Recursive case: Calculate the factorial by multiplying n with the factorial of (n-1)
	return n * Factorial(n-1)
}
