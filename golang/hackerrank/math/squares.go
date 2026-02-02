package math

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
	"strings"
)

// Squares counts the number of square integers between two given integers a and b.
func Squares(a, b int) int {
	return int(math.Sqrt(float64(b))) - int(math.Sqrt(float64(a-1)))
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineQ, _ := reader.ReadString('\n')
	qCount, _ := strconv.Atoi(strings.TrimSpace(lineQ))

	for i := 0; i < qCount; i++ {
		line, _ := reader.ReadString('\n')
		fields := strings.Fields(line)
		if len(fields) < 2 {
			continue
		}
		a, _ := strconv.Atoi(fields[0])
		b, _ := strconv.Atoi(fields[1])
		fmt.Println(Squares(a, b))
	}
}
