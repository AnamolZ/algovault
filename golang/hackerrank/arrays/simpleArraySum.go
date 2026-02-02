package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// SimpleArraySum calculates the sum of all integers in a given array.
func SimpleArraySum(arCount int, ar []int) int {
	res := ar[0]
	for i := 1; i < arCount; i++ {
		res += ar[i]
	}
	return res
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	// Read arCount
	input, _ := reader.ReadString('\n')
	arCount, _ := strconv.Atoi(strings.TrimSpace(input))

	// Read ar
	arrInput, _ := reader.ReadString('\n')
	arrStr := strings.Fields(arrInput)
	ar := make([]int, arCount)
	for i := 0; i < arCount; i++ {
		ar[i], _ = strconv.Atoi(arrStr[i])
	}

	result := SimpleArraySum(arCount, ar)

	// In Go, writing to OUTPUT_PATH if it exists
	outputPath := os.Getenv("OUTPUT_PATH")
	if outputPath != "" {
		f, _ := os.Create(outputPath)
		defer f.Close()
		fmt.Fprintf(f, "%d\n", result)
	} else {
		fmt.Println(result)
	}
}
