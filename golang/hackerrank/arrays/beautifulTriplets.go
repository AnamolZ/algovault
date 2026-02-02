package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// BeautifulTriplets finds the number of beautiful triplets in an array.
func BeautifulTriplets(arr []int, d int) int {
	counts := make(map[int]int)
	for _, v := range arr {
		counts[v]++
	}

	total := 0
	for x, count := range counts {
		if counts[x+d] > 0 && counts[x+2*d] > 0 {
			total += count * counts[x+d] * counts[x+2*d]
		}
	}
	return total
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	fields1 := strings.Fields(line1)
	if len(fields1) < 2 {
		return
	}
	n, _ := strconv.Atoi(fields1[0])
	d, _ := strconv.Atoi(fields1[1])

	line2, _ := reader.ReadString('\n')
	fields2 := strings.Fields(line2)
	arr := make([]int, n)
	for i := 0; i < n && i < len(fields2); i++ {
		arr[i], _ = strconv.Atoi(fields2[i])
	}

	fmt.Println(BeautifulTriplets(arr, d))
}
