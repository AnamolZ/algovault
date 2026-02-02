package arrays

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

// ClimbingLeaderboard calculates the player's rank after each game using Dense Ranking.
func ClimbingLeaderboard(ranked []int, player []int) []int {
	// Get unique ranked scores and sort them descending
	uniqueMap := make(map[int]bool)
	for _, r := range ranked {
		uniqueMap[r] = true
	}
	var uniqueRanked []int
	for k := range uniqueMap {
		uniqueRanked = append(uniqueRanked, k)
	}
	sort.Slice(uniqueRanked, func(i, j int) bool {
		return uniqueRanked[i] > uniqueRanked[j]
	})

	results := make([]int, 0, len(player))
	i := len(uniqueRanked) - 1

	for _, score := range player {
		for i >= 0 && score >= uniqueRanked[i] {
			i--
		}

		if i < 0 {
			results = append(results, 1)
		} else {
			results = append(results, i+2)
		}
	}

	return results
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	fieldsRanked := strings.Fields(line2)
	ranked := make([]int, n)
	for i := 0; i < n && i < len(fieldsRanked); i++ {
		ranked[i], _ = strconv.Atoi(fieldsRanked[i])
	}

	line3, _ := reader.ReadString('\n')
	m, _ := strconv.Atoi(strings.TrimSpace(line3))

	line4, _ := reader.ReadString('\n')
	fieldsPlayer := strings.Fields(line4)
	player := make([]int, m)
	for i := 0; i < m && i < len(fieldsPlayer); i++ {
		player[i], _ = strconv.Atoi(fieldsPlayer[i])
	}

	ranks := ClimbingLeaderboard(ranked, player)
	for _, r := range ranks {
		fmt.Println(r)
	}
}
