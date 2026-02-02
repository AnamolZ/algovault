package simulation

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// DesignerPdfViewer calculates the area of the rectangle highlighting the word.
func DesignerPdfViewer(h []int, w string) int {
	maxH := 0
	for _, char := range w {
		idx := char - 'a'
		if h[idx] > maxH {
			maxH = h[idx]
		}
	}
	return maxH * len(w)
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line1, _ := reader.ReadString('\n')
	fields := strings.Fields(line1)
	h := make([]int, 26)
	for i := 0; i < 26 && i < len(fields); i++ {
		h[i], _ = strconv.Atoi(fields[i])
	}

	line2, _ := reader.ReadString('\n')
	w := strings.TrimSpace(line2)

	fmt.Println(DesignerPdfViewer(h, w))
}
