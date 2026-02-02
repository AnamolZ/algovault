package simulation

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// BreakingRecords tracks how many times the highest and lowest score records are broken.
func BreakingRecords(scores []int) (int, int) {
	if len(scores) == 0 {
		return 0, 0
	}
	maxScore := scores[0]
	minScore := scores[0]
	maxCount := 0
	minCount := 0

	for i := 1; i < len(scores); i++ {
		if scores[i] > maxScore {
			maxScore = scores[i]
			maxCount++
		} else if scores[i] < minScore {
			minScore = scores[i]
			minCount++
		}
	}
	return maxCount, minCount
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	fields := strings.Fields(line2)
	scores := make([]int, n)
	for i := 0; i < n && i < len(fields); i++ {
		scores[i], _ = strconv.Atoi(fields[i])
	}

	maxC, minC := BreakingRecords(scores)
	fmt.Printf("%d %d\n", maxC, minC)
}
