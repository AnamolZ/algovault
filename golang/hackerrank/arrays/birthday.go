package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// Birthday counts the number of contiguous segments of length m that sum to d.
func Birthday(n int, s []int, d int, m int) int {
	count := 0
	for i := 0; i <= len(s)-m; i++ {
		if SumArray(s[i:i+m]) == d {
			count++
		}
	}
	return count
}

// SumArray calculates the sum of all integers in a slice.
func SumArray(arr []int) int {
	sumVal := 0
	for _, v := range arr {
		sumVal += v
	}
	return sumVal
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	fieldsS := strings.Fields(line2)
	s := make([]int, n)
	for i := 0; i < n && i < len(fieldsS); i++ {
		s[i], _ = strconv.Atoi(fieldsS[i])
	}

	line3, _ := reader.ReadString('\n')
	fieldsDM := strings.Fields(line3)
	if len(fieldsDM) < 2 {
		return
	}
	d, _ := strconv.Atoi(fieldsDM[0])
	m, _ := strconv.Atoi(fieldsDM[1])

	fmt.Println(Birthday(n, s, d, m))
}
