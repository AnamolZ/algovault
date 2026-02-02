package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// LibraryFine calculates the fine for a library book based on return and due dates.
func LibraryFine(d1, m1, y1, d2, m2, y2 int) int {
	if y1 > y2 {
		return 10000
	}
	if y1 == y2 && m1 > m2 {
		return 500 * (m1 - m2)
	}
	if y1 == y2 && m1 == m2 && d1 > d2 {
		return 15 * (d1 - d2)
	}
	return 0
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	fields1 := strings.Fields(line1)
	if len(fields1) < 3 {
		return
	}
	d1, _ := strconv.Atoi(fields1[0])
	m1, _ := strconv.Atoi(fields1[1])
	y1, _ := strconv.Atoi(fields1[2])

	line2, _ := reader.ReadString('\n')
	fields2 := strings.Fields(line2)
	if len(fields2) < 3 {
		return
	}
	d2, _ := strconv.Atoi(fields2[0])
	m2, _ := strconv.Atoi(fields2[1])
	y2, _ := strconv.Atoi(fields2[2])

	fmt.Println(LibraryFine(d1, m1, y1, d2, m2, y2))
}
