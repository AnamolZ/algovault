package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
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

func main() {
	reader := bufio.NewReader(os.Stdin)
	line, _ := reader.ReadString('\n')
	qCount, _ := strconv.Atoi(strings.TrimSpace(line))

	queries := make([][]int, qCount)
	for i := 0; i < qCount; i++ {
		qLine, _ := reader.ReadString('\n')
		fields := strings.Fields(qLine)
		queries[i] = make([]int, 3)
		for j := 0; j < 3; j++ {
			queries[i][j], _ = strconv.Atoi(fields[j])
		}
	}

	CatAndMouse(queries)
}
