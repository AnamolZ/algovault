package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// Kangaroo determines if two kangaroos will land at the same location at the same time.
func Kangaroo(x1, v1, x2, v2 int) string {
	if v1 <= v2 {
		return "NO"
	}
	if (x2-x1)%(v1-v2) == 0 {
		return "YES"
	}
	return "NO"
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line, _ := reader.ReadString('\n')
	fields := strings.Fields(line)
	if len(fields) < 4 {
		return
	}
	x1, _ := strconv.Atoi(fields[0])
	v1, _ := strconv.Atoi(fields[1])
	x2, _ := strconv.Atoi(fields[2])
	v2, _ := strconv.Atoi(fields[3])
	fmt.Println(Kangaroo(x1, v1, x2, v2))
}
