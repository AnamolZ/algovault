package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// MarksCal calculates the average marks for a student.
func MarksCal(m map[string][]float64, q string) string {
	marks := m[q]
	var sum float64
	for _, val := range marks {
		sum += val
	}
	return fmt.Sprintf("%.2f", sum/3.0)
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))

	m := make(map[string][]float64)
	for i := 0; i < n; i++ {
		line, _ := reader.ReadString('\n')
		fields := strings.Fields(line)
		name := fields[0]
		scores := make([]float64, 3)
		for j := 0; j < 3; j++ {
			scores[j], _ = strconv.ParseFloat(fields[j+1], 64)
		}
		m[name] = scores
	}

	qLine, _ := reader.ReadString('\n')
	q := strings.TrimSpace(qLine)
	fmt.Println(MarksCal(m, q))
}
