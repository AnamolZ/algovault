package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// Sorting sorts a list of integers in ascending order using a recursive quicksort-like approach.
func Sorting(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	pivot := arr[len(arr)/2]
	var left, middle, right []int

	for _, x := range arr {
		if x < pivot {
			left = append(left, x)
		} else if x == pivot {
			middle = append(middle, x)
		} else {
			right = append(right, x)
		}
	}

	result := append(Sorting(left), middle...)
	result = append(result, Sorting(right)...)
	return result
}

// MiniMaxSum calculates the minimum and maximum sums of four out of five integers.
func MiniMaxSum(arr []int) (int64, int64) {
	sorted := Sorting(arr)
	var minSum, maxSum int64

	for i := 0; i < 4; i++ {
		minSum += int64(sorted[i])
		maxSum += int64(sorted[len(sorted)-1-i])
	}
	return minSum, maxSum
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line, _ := reader.ReadString('\n')
	fields := strings.Fields(line)

	arr := make([]int, len(fields))
	for i, s := range fields {
		arr[i], _ = strconv.Atoi(s)
	}

	minVal, maxVal := MiniMaxSum(arr)
	fmt.Printf("%d %d\n", minVal, maxVal)
}
