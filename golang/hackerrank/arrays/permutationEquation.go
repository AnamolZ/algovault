package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// PermutationEquation finds the index of the index of each value.
func PermutationEquation(p []int) []int {
	n := len(p)
	// Create a value-to-index map for faster lookup (since values are 1-based)
	pos := make(map[int]int)
	for i, v := range p {
		pos[v] = i + 1
	}

	result := make([]int, n)
	for x := 1; x <= n; x++ {
		// We want to find y such that p(p(y)) = x
		// Which means p(y) = pos[x]
		// So y = pos[pos[x]]
		result[x-1] = pos[pos[x]]
	}
	return result
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	fields := strings.Fields(line2)
	p := make([]int, n)
	for i := 0; i < n && i < len(fields); i++ {
		p[i], _ = strconv.Atoi(fields[i])
	}

	res := PermutationEquation(p)
	for _, v := range res {
		fmt.Println(v)
	}
}
