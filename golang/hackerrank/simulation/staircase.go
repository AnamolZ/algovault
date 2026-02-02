package simulation

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// Staircase prints a right-aligned staircase of size n.
func Staircase(n int) {
	for i := 1; i <= n; i++ {
		fmt.Printf("%s%s\n", strings.Repeat(" ", n-i), strings.Repeat("#", i))
	}
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line))
	Staircase(n)
}
