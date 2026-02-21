package math
import (
	"math"
)








// Squares counts the number of square integers between two given integers a and b.
func Squares(a, b int) int {
	return int(math.Sqrt(float64(b))) - int(math.Sqrt(float64(a-1)))
}
