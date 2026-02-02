package math

// GCD calculates the Greatest Common Divisor (GCD) using recursion (Euclidean Algorithm).
func GCD(stNumber, ndNumber int) int {
	// Base case: If the second number is 0, the GCD is the first number
	if ndNumber == 0 {
		return stNumber
	}
	// Recursive step: Calculate the remainder (modulo) and recurse with swapped values
	remainder := stNumber % ndNumber
	return GCD(ndNumber, remainder)
}
