package simulation

import (
	"sort"
)

/*
FlatlandSpaceStations calculates the maximum distance from any city to its nearest space station.

Args:

	n: The number of cities.
	m: The number of space stations.
	c: An integer slice of the indices of cities that have a space station.

Returns:

	int: The maximum distance any city is from a space station.
*/
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
