package matrix

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// FormingMagicSquare determines the minimum cost to convert a 3x3 matrix into a magic square.
func FormingMagicSquare(magicSquares [][][3]int, matrix [3][3]int) int {
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

func main() {
	magicSquares := [][][3]int{
		{{2, 7, 6}, {9, 5, 1}, {4, 3, 8}},
		{{2, 9, 4}, {7, 5, 3}, {6, 1, 8}},
		{{4, 3, 8}, {9, 5, 1}, {2, 7, 6}},
		{{4, 9, 2}, {3, 5, 7}, {8, 1, 6}},
		{{6, 1, 8}, {7, 5, 3}, {2, 9, 4}},
		{{6, 7, 2}, {1, 5, 9}, {8, 3, 4}},
		{{8, 1, 6}, {3, 5, 7}, {4, 9, 2}},
		{{8, 3, 4}, {1, 5, 9}, {6, 7, 2}},
	}

	reader := bufio.NewReader(os.Stdin)
	var matrix [3][3]int
	for i := 0; i < 3; i++ {
		line, _ := reader.ReadString('\n')
		fields := strings.Fields(line)
		for j := 0; j < 3; j++ {
			matrix[i][j], _ = strconv.Atoi(fields[j])
		}
	}

	fmt.Println(FormingMagicSquare(magicSquares, matrix))
}
