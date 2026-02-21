package simulation
import (
	"math"
)








// UtopianTree calculates the height of the Utopian Tree after n growth cycles.
func UtopianTree(n int) int {
	if n%2 == 0 {
		return int(math.Pow(2, float64(n/2+1))) - 1
	}
	return int(math.Pow(2, float64((n+1)/2+1))) - 2
}
