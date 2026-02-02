package simulation

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// RepeatedString counts 'a' occurrences in truncated repeated string.
func RepeatedString(s string, n int64) int64 {
	if s == "" {
		return 0
	}

	countA := int64(0)
	for i := 0; i < len(s); i++ {
		if s[i] == 'a' {
			countA++
		}
	}

	fullSets := n / int64(len(s))
	remainder := n % int64(len(s))

	totalA := fullSets * countA
	for i := 0; i < int(remainder); i++ {
		if s[i] == 'a' {
			totalA++
		}
	}

	return totalA
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	s, _ := reader.ReadString('\n')
	s = strings.TrimSpace(s)

	lineN, _ := reader.ReadString('\n')
	n, _ := strconv.ParseInt(strings.TrimSpace(lineN), 10, 64)

	fmt.Println(RepeatedString(s, n))
}
