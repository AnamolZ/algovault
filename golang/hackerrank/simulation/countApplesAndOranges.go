package simulation
import (
	"fmt"
)








// CountApplesAndOranges counts how many apples and oranges land on a house.
func CountApplesAndOranges(s, t, a, b int, apples, oranges []int) {
	appleCount := 0
	for _, x := range apples {
		pos := a + x
		if pos >= s && pos <= t {
			appleCount++
		}
	}

	orangeCount := 0
	for _, y := range oranges {
		pos := b + y
		if pos >= s && pos <= t {
			orangeCount++
		}
	}

	fmt.Println(appleCount)
	fmt.Println(orangeCount)
}
