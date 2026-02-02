package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// MinimumDistances finds the minimum distance between any two equal elements.
func MinimumDistances(arr []int) int {
	lastSeen := make(map[int]int)
	minDist := -1

	for idx, val := range arr {
		if prevIdx, found := lastSeen[val]; found {
			dist := idx - prevIdx
			if minDist == -1 || dist < minDist {
				minDist = dist
			}
		}
		lastSeen[val] = idx
	}

	return minDist
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	fields := strings.Fields(line2)
	arr := make([]int, n)
	for i := 0; i < n && i < len(fields); i++ {
		arr[i], _ = strconv.Atoi(fields[i])
	}

	fmt.Println(MinimumDistances(arr))
}
