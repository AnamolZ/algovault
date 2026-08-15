package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
)

// absolutePermutation finds the lexicographically smallest absolute permutation.
func absolutePermutation(n int32, k int32) []int32 {
	if k == 0 {
		var result []int32
		for i := int32(1); i <= n; i++ {
			result = append(result, i)
		}
		return result
	}

	if n%(2*k) != 0 {
		return []int32{-1}
	}

	var result []int32
	for i := int32(1); i <= n; i += 2 * k {
		for j := i + k; j < i+2*k; j++ {
			result = append(result, j)
		}
		for j := i; j < i+k; j++ {
			result = append(result, j)
		}
	}

	return result
}

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)

	stdout, err := os.Create(os.Getenv("OUTPUT_PATH"))
	if err != nil {
		panic(err)
	}
	defer stdout.Close()

	writer := bufio.NewWriterSize(stdout, 16*1024*1024)

	tTemp, err, _ := readLine(reader)
	if err != nil {
		panic(err)
	}
	t, err := strconv.ParseInt(strings.TrimSpace(tTemp), 10, 64)
	if err != nil {
		panic(err)
	}

	for tItr := 0; tItr < int(t); tItr++ {
		firstMultipleInputTemp, err, _ := readLine(reader)
		if err != nil {
			panic(err)
		}
		firstMultipleInput := strings.Split(strings.TrimSpace(firstMultipleInputTemp), " ")

		nTemp, err := strconv.ParseInt(firstMultipleInput[0], 10, 64)
		if err != nil {
			panic(err)
		}
		n := int32(nTemp)

		kTemp, err := strconv.ParseInt(firstMultipleInput[1], 10, 64)
		if err != nil {
			panic(err)
		}
		k := int32(kTemp)

		result := absolutePermutation(n, k)

		for i, resultItem := range result {
			fmt.Fprintf(writer, "%d", resultItem)

			if i != len(result)-1 {
				fmt.Fprintf(writer, " ")
			}
		}

		fmt.Fprintf(writer, "\n")
	}

	writer.Flush()
}

func readLine(reader *bufio.Reader) (string, error, bool) {
	line, err := reader.ReadString('\n')
	if err == io.EOF {
		return line, nil, false
	}
	if err != nil {
		return "", err, false
	}
	return strings.TrimRight(line, "\r\n"), nil, true
}
