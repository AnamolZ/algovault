package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// PageCount calculates the minimum page turns needed to reach page p in a book of n pages.
func PageCount(n, p int) int {
	fromFront := p / 2
	fromBack := n/2 - p/2
	if fromFront < fromBack {
		return fromFront
	}
	return fromBack
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))
	line2, _ := reader.ReadString('\n')
	p, _ := strconv.Atoi(strings.TrimSpace(line2))
	fmt.Println(PageCount(n, p))
}
