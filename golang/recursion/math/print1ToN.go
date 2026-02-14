package math
import (
	"fmt"
)








// Print1ToN prints numbers from 1 to N using recursion.
func Print1ToN(n int) {
	// Base condition: if n is greater than 0, keep calling the function
	if n > 0 {
		// Recursive call: call the same function with (n-1)
		Print1ToN(n - 1)

		// Once the recursion starts returning (unwinding),
		// print the current value of n.
		fmt.Println(n)
	}
}
