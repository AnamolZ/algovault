package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// AcmTeam finds the maximum topics known by a two-person team and the number of such teams.
func AcmTeam(topicStrings []string, numberOfTopics int) (int, int) {
	// In Go, big.Int can handle arbitrary length bitmasks, but let's see if
	// we can use uint64 if topics <= 64, otherwise we might need a more general approach.
	// However, HackerRank topics can be up to 500. So we need a way to count set bits in binary strings.

	n := len(topicStrings)
	maxTopicsKnown := 0
	maxTeamsCount := 0

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			topicsKnownCount := 0
			for k := 0; k < numberOfTopics; k++ {
				if topicStrings[i][k] == '1' || topicStrings[j][k] == '1' {
					topicsKnownCount++
				}
			}

			if topicsKnownCount > maxTopicsKnown {
				maxTopicsKnown = topicsKnownCount
				maxTeamsCount = 1
			} else if topicsKnownCount == maxTopicsKnown {
				maxTeamsCount++
			}
		}
	}

	return maxTopicsKnown, maxTeamsCount
}

// Optimized version for long binary strings could use bitsets,
// but for "same as python" and simplicity, we'll keep the logic direct.

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	fields := strings.Fields(line1)
	if len(fields) < 2 {
		return
	}
	n, _ := strconv.Atoi(fields[0])
	m, _ := strconv.Atoi(fields[1])

	topicStrings := make([]string, n)
	for i := 0; i < n; i++ {
		topicStrings[i], _ = reader.ReadString('\n')
		topicStrings[i] = strings.TrimSpace(topicStrings[i])
	}

	res1, res2 := AcmTeam(topicStrings, m)
	fmt.Println(res1)
	fmt.Println(res2)
}
