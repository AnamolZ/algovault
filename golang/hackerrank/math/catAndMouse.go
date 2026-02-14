package math
import (
	"fmt"
)








// CatAndMouse determines which cat reaches the mouse first for each query.
func CatAndMouse(queries [][]int) {
	for _, q := range queries {
		catA := abs(q[0] - q[2])
		catB := abs(q[1] - q[2])

		if catA < catB {
			fmt.Println("Cat A")
		} else if catB < catA {
			fmt.Println("Cat B")
		} else {
			fmt.Println("Mouse C")
		}
	}
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
