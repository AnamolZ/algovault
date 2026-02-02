package simulation

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// HurdleRace calculates the minimum doses of potion needed.
func HurdleRace(k int, h []int) int {
	if len(h) == 0 {
		return 0
	}
	maxH := h[0]
	for _, val := range h {
		if val > maxH {
			maxH = val
		}
	}
	if maxH > k {
		return maxH - k
	}
	return 0
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	fields1 := strings.Fields(line1)
	if len(fields1) < 2 {
		return
	}
	k, _ := strconv.Atoi(fields1[1])

	line2, _ := reader.ReadString('\n')
	fields2 := strings.Fields(line2)
	h := make([]int, len(fields2))
	for i, s := range fields2 {
		h[i], _ = strconv.Atoi(s)
	}

	fmt.Println(HurdleRace(k, h))
}
