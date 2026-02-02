package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// EqualizeArray finds the minimum number of elements to delete to make all elements equal.
func EqualizeArray(arr []int) int {
	if len(arr) == 0 {
		return 0
	}
	counts := make(map[int]int)
	maxFreq := 0
	for _, v := range arr {
		counts[v]++
		if counts[v] > maxFreq {
			maxFreq = counts[v]
		}
	}
	return len(arr) - maxFreq
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

	fmt.Println(EqualizeArray(arr))
}
