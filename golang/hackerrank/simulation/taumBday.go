package simulation

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// TaumBday calculates the minimum cost of purchasing gifts.
func TaumBday(b, w, bc, wc, z int64) int64 {
	effectiveBC := bc
	if wc+z < bc {
		effectiveBC = wc + z
	}

	effectiveWC := wc
	if bc+z < wc {
		effectiveWC = bc + z
	}

	return b*effectiveBC + w*effectiveWC
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	lineT, _ := reader.ReadString('\n')
	tCount, _ := strconv.Atoi(strings.TrimSpace(lineT))

	for i := 0; i < tCount; i++ {
		line1, _ := reader.ReadString('\n')
		fields1 := strings.Fields(line1)
		b, _ := strconv.ParseInt(fields1[0], 10, 64)
		w, _ := strconv.ParseInt(fields1[1], 10, 64)

		line2, _ := reader.ReadString('\n')
		fields2 := strings.Fields(line2)
		bc, _ := strconv.ParseInt(fields2[0], 10, 64)
		wc, _ := strconv.ParseInt(fields2[1], 10, 64)
		z, _ := strconv.ParseInt(fields2[2], 10, 64)

		fmt.Println(TaumBday(b, w, bc, wc, z))
	}
}
