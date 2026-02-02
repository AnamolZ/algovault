package matrix

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

// OrganizingContainers determines if it is possible to organize containers.
func OrganizingContainers(container [][]int) string {
	n := len(container)
	rowSums := make([]int, n)
	colSums := make([]int, n)

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			rowSums[i] += container[i][j]
			colSums[j] += container[i][j]
		}
	}

	sort.Ints(rowSums)
	sort.Ints(colSums)

	for i := 0; i < n; i++ {
		if rowSums[i] != colSums[i] {
			return "Impossible"
		}
	}

	return "Possible"
}

// OrganizingContainersCounter uses frequency map approach.
func OrganizingContainersCounter(container [][]int) string {
	n := len(container)
	rowSums := make([]int, n)
	colSums := make([]int, n)

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			rowSums[i] += container[i][j]
			colSums[j] += container[i][j]
		}
	}

	rowCounts := make(map[int]int)
	colCounts := make(map[int]int)

	for i := 0; i < n; i++ {
		rowCounts[rowSums[i]]++
		colCounts[colSums[i]]++
	}

	if len(rowCounts) != len(colCounts) {
		return "Impossible"
	}

	for k, v := range rowCounts {
		if colCounts[k] != v {
			return "Impossible"
		}
	}

	return "Possible"
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineQ, _ := reader.ReadString('\n')
	q, _ := strconv.Atoi(strings.TrimSpace(lineQ))

	for i := 0; i < q; i++ {
		lineN, _ := reader.ReadString('\n')
		n, _ := strconv.Atoi(strings.TrimSpace(lineN))

		container := make([][]int, n)
		for r := 0; r < n; r++ {
			line, _ := reader.ReadString('\n')
			fields := strings.Fields(line)
			container[r] = make([]int, n)
			for c := 0; c < n; c++ {
				container[r][c], _ = strconv.Atoi(fields[c])
			}
		}

		fmt.Println(OrganizingContainers(container))
		fmt.Println(OrganizingContainersCounter(container))
	}
}
