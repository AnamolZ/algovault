package simulation

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// AngryProfessor determines if a class is cancelled based on arrival times.
func AngryProfessor(k int, a []int) string {
	onTime := 0
	for _, x := range a {
		if x <= 0 {
			onTime++
		}
	}
	if onTime >= k {
		return "NO"
	}
	return "YES"
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineT, _ := reader.ReadString('\n')
	tCount, _ := strconv.Atoi(strings.TrimSpace(lineT))

	for i := 0; i < tCount; i++ {
		lineNK, _ := reader.ReadString('\n')
		fieldsNK := strings.Fields(lineNK)
		if len(fieldsNK) < 2 {
			continue
		}
		k, _ := strconv.Atoi(fieldsNK[1])

		lineA, _ := reader.ReadString('\n')
		fieldsA := strings.Fields(lineA)
		a := make([]int, len(fieldsA))
		for j, valStr := range fieldsA {
			a[j], _ = strconv.Atoi(valStr)
		}

		fmt.Println(AngryProfessor(k, a))
	}
}
