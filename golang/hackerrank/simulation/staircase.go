package simulation
import (
	"fmt"
	"strings"
)








// Staircase prints a right-aligned staircase of size n.
func Staircase(n int) {
	for i := 1; i <= n; i++ {
		fmt.Printf("%s%s\n", strings.Repeat(" ", n-i), strings.Repeat("#", i))
	}
}
