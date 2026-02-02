package math

import "fmt"

// PrintNTo1 prints numbers from N to 1 using recursion.
func PrintNTo1(n int) {
	// Base condition: If n is greater than 0, continue the recursion
	if n > 0 {
		// Print the current value of n before making the recursive call
		fmt.Println(n)

		// Recursive call: Call the same function with (n-1)
		PrintNTo1(n - 1)
	}
}
