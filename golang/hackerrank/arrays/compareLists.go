package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// CompareLists compares two triplets of ratings and awards points based on category values.
func CompareLists(listA []int, listB []int) (int, int) {
	scoreA := 0
	scoreB := 0

	// Using the length of the shorter list or just 3 as per the challenge
	n := len(listA)
	if len(listB) < n {
		n = len(listB)
	}

	for i := 0; i < n; i++ {
		if listA[i] > listB[i] {
			scoreA++
		} else if listB[i] > listA[i] {
			scoreB++
		}
	}

	return scoreA, scoreB
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	lineA, _ := reader.ReadString('\n')
	lineB, _ := reader.ReadString('\n')

	fieldsA := strings.Fields(lineA)
	fieldsB := strings.Fields(lineB)

	if len(fieldsA) == 0 || len(fieldsB) == 0 {
		return
	}

	a := make([]int, len(fieldsA))
	for i, s := range fieldsA {
		a[i], _ = strconv.Atoi(s)
	}

	b := make([]int, len(fieldsB))
	for i, s := range fieldsB {
		b[i], _ = strconv.Atoi(s)
	}

	resA, resB := CompareLists(a, b)
	fmt.Printf("%d %d\n", resA, resB)
}
