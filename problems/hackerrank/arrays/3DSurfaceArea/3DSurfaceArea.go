package main

import (
	"fmt"
)

// surfaceArea calculates the 3D surface area of a toy geometry described by a 2D grid.
// It takes a 2D slice of integers representing the height of cubes in each cell,
// and returns the total 3D surface area of the shape.
func surfaceArea(A [][]int) int {
	H := len(A)
	if H == 0 {
		return 0
	}
	W := len(A[0])

	area := 2 * H * W

	for i := 0; i < H; i++ {
		for j := 0; j < W; j++ {
			h := A[i][j]

			// Up
			up := 0
			if i > 0 {
				up = A[i-1][j]
			}
			if h > up {
				area += h - up
			}

			// Down
			down := 0
			if i < H-1 {
				down = A[i+1][j]
			}
			if h > down {
				area += h - down
			}

			// Left
			left := 0
			if j > 0 {
				left = A[i][j-1]
			}
			if h > left {
				area += h - left
			}

			// Right
			right := 0
			if j < W-1 {
				right = A[i][j+1]
			}
			if h > right {
				area += h - right
			}
		}
	}

	return area
}

func main() {
	var H, W int
	_, err := fmt.Scan(&H, &W)
	if err != nil {
		return
	}

	A := make([][]int, H)
	for i := 0; i < H; i++ {
		A[i] = make([]int, W)
		for j := 0; j < W; j++ {
			fmt.Scan(&A[i][j])
		}
	}

	result := surfaceArea(A)
	fmt.Println(result)
}
