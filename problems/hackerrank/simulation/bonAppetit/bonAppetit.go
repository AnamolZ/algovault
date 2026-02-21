package simulation
import (
	"fmt"
)








// BonAppetit determines if a restaurant bill was split fairly.
func BonAppetit(bill []int, k int, b int) {
	arSum := 0
	for i, val := range bill {
		if i != k {
			arSum += val
		}
	}
	annaShare := arSum / 2

	if annaShare == b {
		fmt.Println("Bon Appetit")
	} else {
		fmt.Println(b - annaShare)
	}
}
