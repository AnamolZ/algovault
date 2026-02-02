package simulation

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

// GetMoneySpent finds the maximum amount spent using brute-force.
func GetMoneySpent(k []int, d []int, b int) int {
	maxSpent := -1
	for _, x := range k {
		for _, y := range d {
			if x+y <= b {
				if x+y > maxSpent {
					maxSpent = x + y
				}
			}
		}
	}
	return maxSpent
}

// GetMoneySpentMergeSort finds the maximum amount spent using sorting and two pointers.
func GetMoneySpentMergeSort(k []int, d []int, b int) int {
	sort.Ints(k)
	sort.Slice(d, func(i, j int) bool {
		return d[i] > d[j]
	})

	maxSpent := -1
	i, j := 0, 0
	for i < len(k) && j < len(d) {
		current := k[i] + d[j]
		if current <= b {
			if current > maxSpent {
				maxSpent = current
			}
			i++ // Try more expensive keyboard
		} else {
			j++ // Need cheaper drive
		}
	}
	return maxSpent
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	fields1 := strings.Fields(line1)
	if len(fields1) < 3 {
		return
	}
	b, _ := strconv.Atoi(fields1[0])
	n, _ := strconv.Atoi(fields1[1])
	m, _ := strconv.Atoi(fields1[2])

	line2, _ := reader.ReadString('\n')
	fields2 := strings.Fields(line2)
	k := make([]int, n)
	for i := 0; i < n && i < len(fields2); i++ {
		k[i], _ = strconv.Atoi(fields2[i])
	}

	line3, _ := reader.ReadString('\n')
	fields3 := strings.Fields(line3)
	d := make([]int, m)
	for i := 0; i < m && i < len(fields3); i++ {
		d[i], _ = strconv.Atoi(fields3[i])
	}

	fmt.Println(GetMoneySpent(k, d, b))
	fmt.Println(GetMoneySpentMergeSort(k, d, b))
}
