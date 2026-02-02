package simulation

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// CountApplesAndOranges counts how many apples and oranges land on a house.
func CountApplesAndOranges(s, t, a, b int, apples, oranges []int) {
	appleCount := 0
	for _, x := range apples {
		pos := a + x
		if pos >= s && pos <= t {
			appleCount++
		}
	}

	orangeCount := 0
	for _, y := range oranges {
		pos := b + y
		if pos >= s && pos <= t {
			orangeCount++
		}
	}

	fmt.Println(appleCount)
	fmt.Println(orangeCount)
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	fields1 := strings.Fields(line1)
	s, _ := strconv.Atoi(fields1[0])
	t, _ := strconv.Atoi(fields1[1])

	line2, _ := reader.ReadString('\n')
	fields2 := strings.Fields(line2)
	a, _ := strconv.Atoi(fields2[0])
	b, _ := strconv.Atoi(fields2[1])

	line3, _ := reader.ReadString('\n')
	fields3 := strings.Fields(line3)
	m, _ := strconv.Atoi(fields3[0])
	n, _ := strconv.Atoi(fields3[1])

	line4, _ := reader.ReadString('\n')
	fields4 := strings.Fields(line4)
	apples := make([]int, m)
	for i := 0; i < m && i < len(fields4); i++ {
		apples[i], _ = strconv.Atoi(fields4[i])
	}

	line5, _ := reader.ReadString('\n')
	fields5 := strings.Fields(line5)
	oranges := make([]int, n)
	for i := 0; i < n && i < len(fields5); i++ {
		oranges[i], _ = strconv.Atoi(fields5[i])
	}

	CountApplesAndOranges(s, t, a, b, apples, oranges)
}
