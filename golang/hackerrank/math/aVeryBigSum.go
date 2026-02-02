package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// AVeryBigSum calculates the sum of elements in an array, handling potentially very large integers.
func AVeryBigSum(a int, listB []int64) int64 {
	var sum int64
	for i := 0; i < a; i++ {
		sum += listB[i]
	}
	return sum
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	lineA, _ := reader.ReadString('\n')
	a, _ := strconv.Atoi(strings.TrimSpace(lineA))

	lineB, _ := reader.ReadString('\n')
	fieldsB := strings.Fields(lineB)
	b := make([]int64, a)
	for i := 0; i < a && i < len(fieldsB); i++ {
		b[i], _ = strconv.ParseInt(fieldsB[i], 10, 64)
	}

	result := AVeryBigSum(a, b)
	fmt.Println(result)
}
