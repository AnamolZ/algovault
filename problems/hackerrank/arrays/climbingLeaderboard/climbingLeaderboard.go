package arrays
import (
	"sort"
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
