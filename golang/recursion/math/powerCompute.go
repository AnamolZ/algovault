package math

// PowerCompute computes power of a number a^b recursively using optimized divide & conquer (exponentiation by squaring).
func PowerCompute(number, power int) int {
	// Base case: If the exponent is 0, the result is 1
	if power == 0 {
		return 1
	}
	// If the exponent is even, compute half power and square it
	if power%2 == 0 {
		half := PowerCompute(number, power/2)
		return half * half
	}
	// If the exponent is odd, compute half of (power-1), square it, and multiply by base number
	half := PowerCompute(number, (power-1)/2)
	return number * half * half
}
