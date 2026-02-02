package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// GradingStudents rounds student grades according to grading rules.
func GradingStudents(grades []int) []int {
	for i := range grades {
		if grades[i] < 38 {
			continue
		}
		rem := grades[i] % 5
		if rem > 2 {
			grades[i] += 5 - rem
		}
	}
	return grades
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line, _ := reader.ReadString('\n')
	count, _ := strconv.Atoi(strings.TrimSpace(line))

	grades := make([]int, count)
	for i := 0; i < count; i++ {
		gLine, _ := reader.ReadString('\n')
		grades[i], _ = strconv.Atoi(strings.TrimSpace(gLine))
	}

	res := GradingStudents(grades)
	for _, g := range res {
		fmt.Println(g)
	}
}
