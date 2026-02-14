package matrix

// FormingMagicSquare determines the minimum cost to convert a 3x3 matrix into a magic square.
func FormingMagicSquare(magicSquares [][3][3]int, matrix [3][3]int) int {
	minCost := -1

	for _, sq := range magicSquares {
		cost := CalculateCost(sq, matrix)
		if minCost == -1 || cost < minCost {
			minCost = cost
		}
	}

	return minCost
}

// CalculateCost calculates the transformation cost between a magic square and an input matrix.
func CalculateCost(sq [3][3]int, matrix [3][3]int) int {
	totalCost := 0
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			diff := sq[i][j] - matrix[i][j]
			if diff < 0 {
				totalCost += -diff
			} else {
				totalCost += diff
			}
		}
	}
	return totalCost
}
