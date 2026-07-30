package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

// happyLadybugs determines whether all the ladybugs on the board can be made happy.
// A ladybug is happy if there is at least one other ladybug of the same color adjacent to it.
// If there is at least one empty space ('_'), we can rearrange the ladybugs arbitrarily.
//
// Args:
//
//	b (string): A string representing the board, where '_' is an empty space and
//	            uppercase English letters represent colors of ladybugs.
//
// Returns:
//
//	string: "YES" if all ladybugs can be made happy, otherwise "NO".
func happyLadybugs(b string) string {
	counts := make(map[rune]int)
	for _, char := range b {
		counts[char]++
	}

	for char, count := range counts {
		if char != '_' && count == 1 {
			return "NO"
		}
	}

	if counts['_'] == 0 {
		n := len(b)
		for i := 0; i < n; i++ {
			happy := false
			if i > 0 && b[i] == b[i-1] {
				happy = true
			}
			if i < n-1 && b[i] == b[i+1] {
				happy = true
			}
			if !happy {
				return "NO"
			}
		}
	}

	return "YES"
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Split(bufio.ScanWords)

	if !scanner.Scan() {
		return
	}
	g, _ := strconv.Atoi(scanner.Text())

	for gItr := 0; gItr < g; gItr++ {
		scanner.Scan()
		// n, _ := strconv.Atoi(scanner.Text())

		scanner.Scan()
		b := scanner.Text()

		result := happyLadybugs(b)
		fmt.Println(result)
	}
}
