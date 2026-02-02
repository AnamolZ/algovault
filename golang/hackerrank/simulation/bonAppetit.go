package simulation

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
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

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	fields1 := strings.Fields(line1)
	if len(fields1) < 2 {
		return
	}
	k, _ := strconv.Atoi(fields1[1])

	line2, _ := reader.ReadString('\n')
	fields2 := strings.Fields(line2)
	bill := make([]int, len(fields2))
	for i, s := range fields2 {
		bill[i], _ = strconv.Atoi(s)
	}

	line3, _ := reader.ReadString('\n')
	b, _ := strconv.Atoi(strings.TrimSpace(line3))

	BonAppetit(bill, k, b)
}
