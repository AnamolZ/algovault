package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// JumpingOnCloudsMin calculates the minimum number of jumps required to reach the last cloud.
func JumpingOnCloudsMin(c []int) int {
	count := 0
	currentIdx := 0
	clength := len(c)

	for currentIdx < clength-1 {
		if currentIdx+2 < clength && c[currentIdx+2] == 0 {
			currentIdx += 2
		} else {
			currentIdx += 1
		}
		count++
	}

	return count
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	fields := strings.Fields(line2)
	c := make([]int, n)
	for i := 0; i < n && i < len(fields); i++ {
		c[i], _ = strconv.Atoi(fields[i])
	}

	fmt.Println(JumpingOnCloudsMin(c))
}
