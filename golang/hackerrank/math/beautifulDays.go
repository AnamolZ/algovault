package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// BeautifulDays counts the number of beautiful days in a range.
func BeautifulDays(i, j, k int) int {
	count := 0
	for d := i; d <= j; d++ {
		diff := d - reverseInt(d)
		if diff < 0 {
			diff = -diff
		}
		if diff%k == 0 {
			count++
		}
	}
	return count
}

func reverseInt(n int) int {
	res := 0
	for n > 0 {
		res = res*10 + n%10
		n /= 10
	}
	return res
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line, _ := reader.ReadString('\n')
	fields := strings.Fields(line)
	if len(fields) < 3 {
		return
	}
	i, _ := strconv.Atoi(fields[0])
	j, _ := strconv.Atoi(fields[1])
	k, _ := strconv.Atoi(fields[2])

	fmt.Println(BeautifulDays(i, j, k))
}
