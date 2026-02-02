package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// SockMerchant counts matching pairs of socks.
func SockMerchant(ar []int) int {
	b := make(map[int]bool)
	p := 0

	for _, i := range ar {
		if b[i] {
			p++
			delete(b, i)
		} else {
			b[i] = true
		}
	}
	return p
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	n, _ := strconv.Atoi(strings.TrimSpace(line1))

	line2, _ := reader.ReadString('\n')
	fields := strings.Fields(line2)
	ar := make([]int, n)
	for i := 0; i < n && i < len(fields); i++ {
		ar[i], _ = strconv.Atoi(fields[i])
	}

	fmt.Println(SockMerchant(ar))
}
