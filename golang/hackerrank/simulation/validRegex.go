package simulation

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"
)

// ValidRegex checks if a string is a valid regex pattern.
func ValidRegex(pattern string) bool {
	invalidSequences := []string{"**", "++", "??", "*+", "+*", "?*"}
	for _, seq := range invalidSequences {
		if strings.Contains(pattern, seq) {
			return false
		}
	}
	_, err := regexp.Compile(pattern)
	return err == nil
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineN, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(lineN))

	for i := 0; i < n; i++ {
		pattern, _ := reader.ReadString('\n')
		pattern = strings.TrimSpace(pattern)
		fmt.Println(ValidRegex(pattern))
	}
}
