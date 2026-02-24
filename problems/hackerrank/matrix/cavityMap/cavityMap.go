// Package main provides a solution for the Cavity Map problem on HackerRank.
// It identifies cells in a grid that are strictly greater than their four immediate neighbors.
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

// cavityMap identifies cavities in an n x n grid of digits.
// A cavity is a non-border cell that is strictly greater than its four neighbors.
// Cavities are replaced with the character 'X'.
func cavityMap(grid []string) []string {
	n := len(grid)
	if n < 3 {
		return grid
	}

	// result holds the modified grid. We use rune slices for mutability.
	result := make([][]rune, n)
	for i := range grid {
		result[i] = []rune(grid[i])
	}

	// Iterate through the inner grid (excluding borders)
	for i := 1; i < n-1; i++ {
		for j := 1; j < n-1; j++ {
			cell := grid[i][j]
			// Check if current cell is greater than all four adjacent neighbors
			if cell > grid[i-1][j] && cell > grid[i+1][j] && cell > grid[i][j-1] && cell > grid[i][j+1] {
				result[i][j] = 'X'
			}
		}
	}

	// Convert rune slices back into strings
	output := make([]string, n)
	for i := range result {
		output[i] = string(result[i])
	}
	return output
}

// main reads the grid dimension and content from standard input and prints the result.
func main() {
	scanner := bufio.NewScanner(os.Stdin)

	if !scanner.Scan() {
		return
	}
	n, _ := strconv.Atoi(scanner.Text())

	grid := make([]string, n)
	for i := 0; i < n; i++ {
		if scanner.Scan() {
			grid[i] = scanner.Text()
		}
	}

	result := cavityMap(grid)
	for _, row := range result {
		fmt.Println(row)
	}
}
