package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// AppendAndDelete determines if s can be converted to t in exactly k operations.
func AppendAndDelete(s, t string, k int) string {
	commonLength := 0
	minLen := len(s)
	if len(t) < minLen {
		minLen = len(t)
	}

	for i := 0; i < minLen; i++ {
		if s[i] == t[i] {
			commonLength++
		} else {
			break
		}
	}

	totalLen := len(s) + len(t)
	minMoves := totalLen - (2 * commonLength)

	if k >= totalLen {
		return "Yes"
	} else if k >= minMoves && (k-minMoves)%2 == 0 {
		return "Yes"
	} else {
		return "No"
	}
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	s, _ := reader.ReadString('\n')
	s = strings.TrimSpace(s)

	t, _ := reader.ReadString('\n')
	t = strings.TrimSpace(t)

	lineK, _ := reader.ReadString('\n')
	k, _ := strconv.Atoi(strings.TrimSpace(lineK))

	fmt.Println(AppendAndDelete(s, t, k))
}
