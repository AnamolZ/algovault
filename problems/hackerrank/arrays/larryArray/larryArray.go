package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
)

// larrysArray determines whether the given array can be sorted by rotating
// any 3 consecutive elements. This operation preserves the parity of the
// number of inversions. Thus, the array can be sorted if and only if the
// number of inversions is even.
//
// Args:
//     A ([]int32): An array of integers.
//
// Returns:
//     string: "YES" if the array can be sorted, otherwise "NO".
func larrysArray(A []int32) string {
	inversions := 0
	n := len(A)

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			if A[i] > A[j] {
				inversions++
			}
		}
	}

	if inversions%2 == 0 {
		return "YES"
	}
	return "NO"
}

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)

	stdout, err := os.Create(os.Getenv("OUTPUT_PATH"))
	checkError(err)

	defer stdout.Close()

	writer := bufio.NewWriterSize(stdout, 16*1024*1024)

	tTemp, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
	checkError(err)
	t := int32(tTemp)

	for tItr := 0; tItr < int(t); tItr++ {
		nTemp, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
		checkError(err)
		_ = int32(nTemp)

		ATemp := strings.Split(strings.TrimSpace(readLine(reader)), " ")

		var A []int32

		for i := 0; i < len(ATemp); i++ {
			AItemTemp, err := strconv.ParseInt(ATemp[i], 10, 64)
			checkError(err)
			AItem := int32(AItemTemp)
			A = append(A, AItem)
		}

		result := larrysArray(A)

		fmt.Fprintf(writer, "%s\n", result)
	}

	writer.Flush()
}

func readLine(reader *bufio.Reader) string {
	str, _, err := reader.ReadLine()
	if err == io.EOF {
		return ""
	}

	return strings.TrimRight(string(str), "\r\n")
}

func checkError(err error) {
	if err != nil {
		panic(err)
	}
}
