package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// SolveMeFirst computes the sum of two integers.
func SolveMeFirst(a, b int) int {
	return a + b
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineA, _ := reader.ReadString('\n')
	a, _ := strconv.Atoi(strings.TrimSpace(lineA))
	lineB, _ := reader.ReadString('\n')
	b, _ := strconv.Atoi(strings.TrimSpace(lineB))
	fmt.Println(SolveMeFirst(a, b))
}
