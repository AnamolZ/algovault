package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// bomberMan simulates the Bomberman game over n seconds.
func bomberMan(n int32, grid []string) []string {
	r := len(grid)
	c := len(grid[0])

	if n == 1 {
		return grid
	}

	if n%2 == 0 {
		var fullGrid []string
		row := strings.Repeat("O", c)
		for i := 0; i < r; i++ {
			fullGrid = append(fullGrid, row)
		}
		return fullGrid
	}

	detonate := func(g []string) []string {
		newGrid := make([][]rune, r)
		for i := range newGrid {
			newGrid[i] = make([]rune, c)
			for j := range newGrid[i] {
				newGrid[i][j] = 'O'
			}
		}

		for i := 0; i < r; i++ {
			for j := 0; j < c; j++ {
				if g[i][j] == 'O' {
					newGrid[i][j] = '.'
					if i > 0 {
						newGrid[i-1][j] = '.'
					}
					if i < r-1 {
						newGrid[i+1][j] = '.'
					}
					if j > 0 {
						newGrid[i][j-1] = '.'
					}
					if j < c-1 {
						newGrid[i][j+1] = '.'
					}
				}
			}
		}

		var res []string
		for i := 0; i < r; i++ {
			res = append(res, string(newGrid[i]))
		}
		return res
	}

	grid3 := detonate(grid)
	if n%4 == 3 {
		return grid3
	}
	grid5 := detonate(grid3)
	return grid5
}

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)

	firstMultipleInput := strings.Split(strings.TrimSpace(readLine(reader)), " ")

	rTemp, err := strconv.ParseInt(firstMultipleInput[0], 10, 64)
	checkError(err)
	r := int32(rTemp)

	cTemp, err := strconv.ParseInt(firstMultipleInput[1], 10, 64)
	checkError(err)
	_ = int32(cTemp)

	nTemp, err := strconv.ParseInt(firstMultipleInput[2], 10, 64)
	checkError(err)
	n := int32(nTemp)

	var grid []string

	for i := 0; i < int(r); i++ {
		gridItem := readLine(reader)
		grid = append(grid, gridItem)
	}

	result := bomberMan(n, grid)

	for i, rowItem := range result {
		fmt.Printf("%s", rowItem)
		if i != len(result)-1 {
			fmt.Printf("\n")
		}
	}
	fmt.Printf("\n")
}

func readLine(reader *bufio.Reader) string {
	str, _, err := reader.ReadLine()
	if err == nil {
		return string(str)
	}
	return ""
}

func checkError(err error) {
	if err != nil {
		panic(err)
	}
}
