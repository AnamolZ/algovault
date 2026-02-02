package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// NonDivisibleSubset calculates the size of the largest subset where sum of any two is not divisible by k.
func NonDivisibleSubset(k int, s []int) int {
	remainderCount := make(map[int]int)
	for _, x := range s {
		remainderCount[x%k]++
	}

	result := 0
	if remainderCount[0] > 0 {
		result += 1
	}

	for r := 1; r <= k/2; r++ {
		if r == k-r {
			if remainderCount[r] > 0 {
				result += 1
			}
		} else {
			c1 := remainderCount[r]
			c2 := remainderCount[k-r]
			if c1 > c2 {
				result += c1
			} else {
				result += c2
			}
		}
	}

	return result
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	fields1 := strings.Fields(line1)
	if len(fields1) < 2 {
		return
	}
	k, _ := strconv.Atoi(fields1[1])

	line2, _ := reader.ReadString('\n')
	fields2 := strings.Fields(line2)
	s := make([]int, len(fields2))
	for i, valStr := range fields2 {
		s[i], _ = strconv.Atoi(valStr)
	}

	fmt.Println(NonDivisibleSubset(k, s))
}
