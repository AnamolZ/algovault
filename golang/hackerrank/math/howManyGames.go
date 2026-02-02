package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// HowManyGames calculates the total number of games that can be purchased.
func HowManyGames(p, d, m, s int) int {
	count := 0
	for s >= p {
		s -= p
		count++
		p -= d
		if p < m {
			p = m
		}
	}
	return count
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line, _ := reader.ReadString('\n')
	fields := strings.Fields(line)
	if len(fields) < 4 {
		return
	}
	p, _ := strconv.Atoi(fields[0])
	d, _ := strconv.Atoi(fields[1])
	m, _ := strconv.Atoi(fields[2])
	s, _ := strconv.Atoi(fields[3])

	fmt.Println(HowManyGames(p, d, m, s))
}
