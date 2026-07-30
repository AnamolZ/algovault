package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

// gridSearch finds if a given 2D pattern (pGrid) exists within a larger 2D grid (gGrid).
// It searches for an exact match of the pattern matrix inside the larger grid.
//
// Args:
//
//	gGrid ([]string): The larger grid represented as a slice of strings.
//	pGrid ([]string): The smaller pattern grid to search for.
//
// Returns:
//
//	string: "YES" if the pattern is found, "NO" otherwise.
func gridSearch(gGrid []string, pGrid []string) string {
	gRows := len(gGrid)
	gCols := len(gGrid[0])
	pRows := len(pGrid)
	pCols := len(pGrid[0])

	for i := 0; i <= gRows-pRows; i++ {
		for j := 0; j <= gCols-pCols; j++ {
			match := true
			for k := 0; k < pRows; k++ {
				if gGrid[i+k][j:j+pCols] != pGrid[k] {
					match = false
					break
				}
			}
			if match {
				return "YES"
			}
		}
	}
	return "NO"
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Split(bufio.ScanWords)

	if !scanner.Scan() {
		return
	}
	t, _ := strconv.Atoi(scanner.Text())

	for tItr := 0; tItr < t; tItr++ {
		scanner.Scan()
		r, _ := strconv.Atoi(scanner.Text())
		scanner.Scan()

		var gGrid []string
		for i := 0; i < r; i++ {
			scanner.Scan()
			gGrid = append(gGrid, scanner.Text())
		}

		scanner.Scan()
		r2, _ := strconv.Atoi(scanner.Text())
		scanner.Scan()

		var pGrid []string
		for i := 0; i < r2; i++ {
			scanner.Scan()
			pGrid = append(pGrid, scanner.Text())
		}

		result := gridSearch(gGrid, pGrid)
		fmt.Println(result)
	}
}
