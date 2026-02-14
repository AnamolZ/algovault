package simulation



// GetTotalAttackableSquares calculates the total squares a queen can attack.
func GetTotalAttackableSquares(n, k, rQ, cQ int, obstacles [][]int) int {
	maxRange := map[string]int{
		"north":      n - rQ,
		"south":      rQ - 1,
		"west":       cQ - 1,
		"east":       n - cQ,
		"north_west": min(n-rQ, cQ-1),
		"north_east": min(n-rQ, n-cQ),
		"south_west": min(rQ-1, cQ-1),
		"south_east": min(rQ-1, n-cQ),
	}

	for _, obs := range obstacles {
		obsR, obsC := obs[0], obs[1]
		if obsC == cQ {
			if obsR > rQ {
				maxRange["north"] = min(maxRange["north"], obsR-rQ-1)
			} else {
				maxRange["south"] = min(maxRange["south"], rQ-obsR-1)
			}
		} else if obsR == rQ {
			if obsC > cQ {
				maxRange["east"] = min(maxRange["east"], obsC-cQ-1)
			} else {
				maxRange["west"] = min(maxRange["west"], cQ-obsC-1)
			}
		} else if abs(obsR-rQ) == abs(obsC-cQ) {
			rowDiff := obsR - rQ
			colDiff := obsC - cQ
			if rowDiff > 0 && colDiff < 0 {
				maxRange["north_west"] = min(maxRange["north_west"], rowDiff-1)
			} else if rowDiff > 0 && colDiff > 0 {
				maxRange["north_east"] = min(maxRange["north_east"], rowDiff-1)
			} else if rowDiff < 0 && colDiff < 0 {
				maxRange["south_west"] = min(maxRange["south_west"], abs(rowDiff)-1)
			} else if rowDiff < 0 && colDiff > 0 {
				maxRange["south_east"] = min(maxRange["south_east"], abs(rowDiff)-1)
			}
		}
	}

	total := 0
	for _, v := range maxRange {
		total += v
	}
	return total
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
