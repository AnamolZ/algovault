package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// MigratoryBirds determines the bird type that is most frequently sighted.
func MigratoryBirds(arr []int) int {
	arMap := make(map[int]int)
	for _, v := range arr {
		arMap[v]++
	}

	maxCount := 0
	for _, count := range arMap {
		if count > maxCount {
			maxCount = count
		}
	}

	result := -1
	for birdType, count := range arMap {
		if count == maxCount {
			if result == -1 || birdType < result {
				result = birdType
			}
		}
	}

	return result
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	isize, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	fields := strings.Fields(line2)
	arr := make([]int, isize)
	for i := 0; i < isize && i < len(fields); i++ {
		arr[i], _ = strconv.Atoi(fields[i])
	}

	fmt.Println(MigratoryBirds(arr))
}
