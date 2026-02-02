package simulation

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// CountingValleys counts the number of valleys in a hike.
func CountingValleys(p string) int {
	level := 0
	valleys := 0
	for _, step := range p {
		if step == 'U' {
			level++
			if level == 0 {
				valleys++
			}
		} else if step == 'D' {
			level--
		}
	}
	return valleys
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	p := strings.TrimSpace(line2)

	if len(p) != n {
		// Handle mismatch if necessary, or just proceed
	}

	fmt.Println(CountingValleys(p))
}
