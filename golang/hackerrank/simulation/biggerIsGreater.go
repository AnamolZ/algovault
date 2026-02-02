package simulation

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

// BiggerIsGreater finds the smallest lexicographically greater string.
func BiggerIsGreater(word string) string {
	chars := []rune(word)
	n := len(chars)
	pivot := -1

	for i := n - 1; i > 0; i-- {
		if chars[i] > chars[i-1] {
			pivot = i - 1
			break
		}
	}

	if pivot == -1 {
		return "no answer"
	}

	swapIdx := -1
	for j := n - 1; j > pivot; j-- {
		if chars[j] > chars[pivot] {
			swapIdx = j
			break
		}
	}

	chars[pivot], chars[swapIdx] = chars[swapIdx], chars[pivot]

	// Sort suffix
	suffix := chars[pivot+1:]
	sort.Slice(suffix, func(i, j int) bool {
		return suffix[i] < suffix[j]
	})

	return string(chars)
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineT, _ := reader.ReadString('\n')
	tCount, _ := strconv.Atoi(strings.TrimSpace(lineT))

	for i := 0; i < tCount; i++ {
		word, _ := reader.ReadString('\n')
		fmt.Println(BiggerIsGreater(strings.TrimSpace(word)))
	}
}
