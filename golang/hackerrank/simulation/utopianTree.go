package simulation

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
	"strings"
)

// UtopianTree calculates the height of the Utopian Tree after n growth cycles.
func UtopianTree(n int) int {
	if n%2 == 0 {
		return int(math.Pow(2, float64(n/2+1))) - 1
	}
	return int(math.Pow(2, float64((n+1)/2+1))) - 2
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineT, _ := reader.ReadString('\n')
	tCount, _ := strconv.Atoi(strings.TrimSpace(lineT))

	for i := 0; i < tCount; i++ {
		lineN, _ := reader.ReadString('\n')
		n, _ := strconv.Atoi(strings.TrimSpace(lineN))
		fmt.Println(UtopianTree(n))
	}
}
