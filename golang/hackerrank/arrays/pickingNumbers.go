package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// PickingNumbers finds the maximum length of a subarray where abs diff <= 1.
func PickingNumbers(a []int) int {
	frequency := make([]int, 101)
	for _, x := range a {
		if x >= 0 && x <= 100 {
			frequency[x]++
		}
	}

	maxCount := 0
	for i := 1; i < 101; i++ {
		sum := frequency[i] + frequency[i-1]
		if sum > maxCount {
			maxCount = sum
		}
	}

	return maxCount
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	s, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	fields := strings.Fields(line2)
	arr := make([]int, s)
	for i := 0; i < s && i < len(fields); i++ {
		arr[i], _ = strconv.Atoi(fields[i])
	}

	fmt.Println(PickingNumbers(arr))
}
