package simulation

import (
	"sort"
)

func FlatlandSpaceStations(n int, m int, c []int) int {
	sort.Ints(c)

	maxDist := c[0]
	lastDist := (n - 1) - c[m-1]

	if lastDist > maxDist {
		maxDist = lastDist
	}

	for i := 1; i < m; i++ {
		dist := (c[i] - c[i-1]) / 2
		if dist > maxDist {
			maxDist = dist
		}
	}

	return maxDist
}
