package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}

func lcm(a, b int) int {
	if a == 0 || b == 0 {
		return 0
	}
	return (a * b) / gcd(a, b)
}

// GetTotalX determines the number of integers that satisfy the 'Between Two Sets' conditions.
func GetTotalX(a []int, b []int) int {
	l := a[0]
	for i := 1; i < len(a); i++ {
		l = lcm(l, a[i])
	}

	g := b[0]
	for i := 1; i < len(b); i++ {
		g = gcd(g, b[i])
	}

	count := 0
	for multiple := l; multiple <= g; multiple += l {
		if g%multiple == 0 {
			count++
		}
	}
	return count
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	fields1 := strings.Fields(line1)
	if len(fields1) < 2 {
		return
	}

	line2, _ := reader.ReadString('\n')
	fields2 := strings.Fields(line2)
	a := make([]int, len(fields2))
	for i, s := range fields2 {
		a[i], _ = strconv.Atoi(s)
	}

	line3, _ := reader.ReadString('\n')
	fields3 := strings.Fields(line3)
	b := make([]int, len(fields3))
	for i, s := range fields3 {
		b[i], _ = strconv.Atoi(s)
	}

	fmt.Println(GetTotalX(a, b))
}
