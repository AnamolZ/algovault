package arrays
import (
	"fmt"
)








// PlusMinus calculates and prints the ratios of positive, negative, and zero elements in an array.
func PlusMinus(arr []int, n int) {
	positive := 0
	negative := 0
	zero := 0

	for _, v := range arr {
		if v > 0 {
			positive++
		} else if v < 0 {
			negative++
		} else {
			zero++
		}
	}

	fmt.Printf("%.6f\n", float64(positive)/float64(n))
	fmt.Printf("%.6f\n", float64(negative)/float64(n))
	fmt.Printf("%.6f\n", float64(zero)/float64(n))
}
