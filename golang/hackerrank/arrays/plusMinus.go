package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// PlusMinus calculates and prints the ratios of positive, negative, and zero elements in an array.
func PlusMinus(arr []int, n int) {
	positive := 0
	negative := 0
	zero := 0

	for _, v := range arr {
		if v > 0 {
			positive++
		} else if v < 0 {
			negative++
		} else {
			zero++
		}
	}

	fmt.Printf("%.6f\n", float64(positive)/float64(n))
	fmt.Printf("%.6f\n", float64(negative)/float64(n))
	fmt.Printf("%.6f\n", float64(zero)/float64(n))
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	n, err := strconv.Atoi(strings.TrimSpace(line1))
	if err != nil {
		fmt.Println("Invalid input")
		return
	}

	line2, _ := reader.ReadString('\n')
	fields := strings.Fields(line2)
	arr := make([]int, n)
	for i := 0; i < n && i < len(fields); i++ {
		arr[i], _ = strconv.Atoi(fields[i])
	}

	PlusMinus(arr, n)
}
