package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
)

func cavityMap(grid []string) []string {
    n := len(grid)
    if n < 3 {
        return grid
    }

    result := make([][]rune, n)
    for i := range grid {
        result[i] = []rune(grid[i])
    }

    for i := 1; i < n-1; i++ {
        for j := 1; j < n-1; j++ {
            cell := grid[i][j]
            if cell > grid[i-1][j] && cell > grid[i+1][j] && cell > grid[i][j-1] && cell > grid[i][j+1] {
                result[i][j] = 'X'
            }
        }
    }

    output := make([]string, n)
    for i := range result {
        output[i] = string(result[i])
    }
    return output
}

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
