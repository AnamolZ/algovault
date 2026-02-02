package matrix

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// DiagonalDifference calculates the absolute difference between the sums of a square matrix's diagonals.
func DiagonalDifference(arr [][]int, n int) int {
	primarySum := 0
	secondarySum := 0
	for i := 0; i < n; i++ {
		primarySum += arr[i][i]
		secondarySum += arr[i][n-i-1]
	}
	diff := primarySum - secondarySum
	if diff < 0 {
		return -diff
	}
	return diff
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineN, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(lineN))

	arr := make([][]int, n)
	for i := 0; i < n; i++ {
		line, _ := reader.ReadString('\n')
		fields := strings.Fields(line)
		arr[i] = make([]int, n)
		for j := 0; j < n; j++ {
			arr[i][j], _ = strconv.Atoi(fields[j])
		}
	}

	fmt.Println(DiagonalDifference(arr, n))
}
