package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// SaveThePrisoner determines which prisoner receives the last candy in a circle.
func SaveThePrisoner(n, m, s int) int {
	return ((s + m - 2) % n) + 1
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineT, _ := reader.ReadString('\n')
	tCount, _ := strconv.Atoi(strings.TrimSpace(lineT))

	for i := 0; i < tCount; i++ {
		line, _ := reader.ReadString('\n')
		fields := strings.Fields(line)
		if len(fields) < 3 {
			continue
		}
		n, _ := strconv.Atoi(fields[0])
		m, _ := strconv.Atoi(fields[1])
		s, _ := strconv.Atoi(fields[2])
		fmt.Println(SaveThePrisoner(n, m, s))
	}
}
