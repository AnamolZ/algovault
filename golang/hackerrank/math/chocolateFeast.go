package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// ChocolateFeast calculates total chocolates eaten.
func ChocolateFeast(n, c, m int) int {
	chocolates := n / c
	wrappers := chocolates
	totalEaten := chocolates

	for wrappers >= m {
		newChocolates := wrappers / m
		totalEaten += newChocolates
		wrappers = (wrappers % m) + newChocolates
	}

	return totalEaten
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	lineT, _ := reader.ReadString('\n')
	tCount, _ := strconv.Atoi(strings.TrimSpace(lineT))

	for i := 0; i < tCount; i++ {
		line, _ := reader.ReadString('\n')
		fields := strings.Fields(line)
		if len(fields) < 3 {
			continue
		}
		n, _ := strconv.Atoi(fields[0])
		c, _ := strconv.Atoi(fields[1])
		m, _ := strconv.Atoi(fields[2])
		fmt.Println(ChocolateFeast(n, c, m))
	}
}
