package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// matrixRotation rotates a 2D matrix of size m x n anti-clockwise by r rotations.
//
// The rotation processes each concentric layer/ring independently:
// 1. Extract elements of the current ring in counter-clockwise order:
//    - Top row (left to right)
//    - Right column (top+1 to bottom-1)
//    - Bottom row (right to left)
//    - Left column (bottom-1 to top+1)
// 2. Compute effective rotations using `r % len(layer)` to eliminate redundant full loops.
// 3. Shift the 1D slice counter-clockwise by `rotation` steps.
// 4. Repopulate the rotated layer back into the original matrix boundaries.
//
// Parameters:
//   - matrix: [][]int representation of the 2D grid
//   - m: number of rows in the matrix
//   - n: number of columns in the matrix
//   - r: number of anti-clockwise rotations
//
// Returns:
//   - [][]int: The rotated matrix
func matrixRotation(matrix [][]int, m, n, r int) [][]int {
	top := 0
	bottom := m - 1
	left := 0
	right := n - 1

	for top < bottom && left < right {
		var layer []int

		// 1. Top row: left -> right
		for j := left; j <= right; j++ {
			layer = append(layer, matrix[top][j])
		}

		// 2. Right column: top+1 -> bottom-1
		for i := top + 1; i < bottom; i++ {
			layer = append(layer, matrix[i][right])
		}

		// 3. Bottom row: right -> left
		for j := right; j >= left; j-- {
			layer = append(layer, matrix[bottom][j])
		}

		// 4. Left column: bottom-1 -> top+1
		for i := bottom - 1; i > top; i-- {
			layer = append(layer, matrix[i][left])
		}

		layerLen := len(layer)
		if layerLen > 0 {
			rot := r % layerLen
			// Counter-clockwise shift by rot positions
			rotatedLayer := make([]int, layerLen)
			copy(rotatedLayer, layer[rot:])
			copy(rotatedLayer[layerLen-rot:], layer[:rot])

			// Repopulate layer back into matrix
			k := 0

			// Top row
			for j := left; j <= right; j++ {
				matrix[top][j] = rotatedLayer[k]
				k++
			}

			// Right column
			for i := top + 1; i < bottom; i++ {
				matrix[i][right] = rotatedLayer[k]
				k++
			}

			// Bottom row
			for j := right; j >= left; j-- {
				matrix[bottom][j] = rotatedLayer[k]
				k++
			}

			// Left column
			for i := bottom - 1; i > top; i-- {
				matrix[i][left] = rotatedLayer[k]
				k++
			}
		}

		// Advance to inner layer
		top++
		bottom--
		left++
		right--
	}

	return matrix
}

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)

	firstLine, _, err := reader.ReadLine()
	if err != nil {
		return
	}

	mnr := strings.Fields(strings.TrimSpace(string(firstLine)))
	if len(mnr) < 3 {
		return
	}

	m, _ := strconv.Atoi(mnr[0])
	n, _ := strconv.Atoi(mnr[1])
	r, _ := strconv.Atoi(mnr[2])

	matrix := make([][]int, m)
	for i := 0; i < m; i++ {
		rowLine, _, err := reader.ReadLine()
		if err != nil {
			return
		}
		rowStr := strings.Fields(strings.TrimSpace(string(rowLine)))
		matrix[i] = make([]int, n)
		for j := 0; j < n; j++ {
			matrix[i][j], _ = strconv.Atoi(rowStr[j])
		}
	}

	result := matrixRotation(matrix, m, n, r)

	writer := bufio.NewWriterSize(os.Stdout, 16*1024*1024)
	defer writer.Flush()

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if j > 0 {
				writer.WriteString(" ")
			}
			writer.WriteString(strconv.Itoa(result[i][j]))
		}
		writer.WriteString("\n")
	}
}
