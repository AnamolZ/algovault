package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// FindMax finds the maximum value in a list of integers.
func FindMax(arr []int) int {
	maxN := arr[0]
	for _, x := range arr {
		if x > maxN {
			maxN = x
		}
	}
	return maxN
}

// BirthdayCakeCandles calculates the frequency of the tallest candles.
func BirthdayCakeCandles(arr []int) int {
	maxN := FindMax(arr)
	count := 0
	for _, x := range arr {
		if x == maxN {
			count++
		}
	}
	return count
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	fields := strings.Fields(line2)

	arr := make([]int, n)
	for i := 0; i < n && i < len(fields); i++ {
		arr[i], _ = strconv.Atoi(fields[i])
	}

	fmt.Println(BirthdayCakeCandles(arr))
}
