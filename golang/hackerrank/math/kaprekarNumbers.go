package math

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
	"strings"
)

// KaprekarNumbers finds and prints all modified Kaprekar numbers in the range [p, q].
func KaprekarNumbers(p, q int) {
	var results []int
	for n := p; n <= q; n++ {
		d := len(strconv.Itoa(n))
		square := int64(n) * int64(n)
		divisor := int64(math.Pow(10, float64(d)))

		right := square % divisor
		left := square / divisor

		if left+right == int64(n) {
			results = append(results, n)
		}
	}

	if len(results) > 0 {
		for i, v := range results {
			fmt.Print(v)
			if i < len(results)-1 {
				fmt.Print(" ")
			}
		}
		fmt.Println()
	} else {
		fmt.Println("INVALID RANGE")
	}
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineP, _ := reader.ReadString('\n')
	p, _ := strconv.Atoi(strings.TrimSpace(lineP))
	lineQ, _ := reader.ReadString('\n')
	q, _ := strconv.Atoi(strings.TrimSpace(lineQ))
	KaprekarNumbers(p, q)
}
