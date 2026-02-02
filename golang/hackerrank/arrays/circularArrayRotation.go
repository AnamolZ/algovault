package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// CircularArrayRotation performs circular rotation and answers queries.
func CircularArrayRotation(a []int, k int, queries []int) []int {
	n := len(a)
	k %= n

	// r = a[-k:] + a[:-k]
	r := make([]int, n)
	copy(r, a[n-k:])
	copy(r[k:], a[:n-k])

	result := make([]int, len(queries))
	for i, q := range queries {
		result[i] = r[q]
	}
	return result
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	fields1 := strings.Fields(line1)
	if len(fields1) < 3 {
		return
	}
	n, _ := strconv.Atoi(fields1[0])
	k, _ := strconv.Atoi(fields1[1])
	qCount, _ := strconv.Atoi(fields1[2])

	line2, _ := reader.ReadString('\n')
	fields2 := strings.Fields(line2)
	a := make([]int, n)
	for i := 0; i < n && i < len(fields2); i++ {
		a[i], _ = strconv.Atoi(fields2[i])
	}

	queries := make([]int, qCount)
	for i := 0; i < qCount; i++ {
		line, _ := reader.ReadString('\n')
		queries[i], _ = strconv.Atoi(strings.TrimSpace(line))
	}

	res := CircularArrayRotation(a, k, queries)
	for _, v := range res {
		fmt.Println(v)
	}
}
