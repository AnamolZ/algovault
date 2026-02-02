package simulation

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strings"
)

// Encryption encrypts a string using a grid-based encryption method.
func Encryption(text string) string {
	s := strings.ReplaceAll(text, " ", "")
	n := len(s)
	cols := int(math.Ceil(math.Sqrt(float64(n))))

	var result []string
	for c := 0; c < cols; c++ {
		var encryptedWord strings.Builder
		for i := c; i < n; i += cols {
			encryptedWord.WriteByte(s[i])
		}
		result = append(result, encryptedWord.String())
	}

	return strings.Join(result, " ")
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	s, _ := reader.ReadString('\n')
	s = strings.TrimSpace(s)
	fmt.Println(Encryption(s))
}
