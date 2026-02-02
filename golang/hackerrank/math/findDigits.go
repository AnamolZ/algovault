package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// FindDigits counts the number of digits in n that are divisors of n.
func FindDigits(n int) int {
	c := 0
	temp := n
	for temp > 0 {
		digit := temp % 10
		if digit != 0 && n%digit == 0 {
			c++
		}
		temp /= 10
	}
	return c
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineT, _ := reader.ReadString('\n')
	tCount, _ := strconv.Atoi(strings.TrimSpace(lineT))

	for i := 0; i < tCount; i++ {
		lineN, _ := reader.ReadString('\n')
		n, _ := strconv.Atoi(strings.TrimSpace(lineN))
		fmt.Println(FindDigits(n))
	}
}
