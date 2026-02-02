package math

import (
	"bufio"
	"fmt"
	"math/big"
	"os"
	"strconv"
	"strings"
)

// ExtraLongFactorials calculates the factorial of a large integer 'n'.
func ExtraLongFactorials(n int64) *big.Int {
	res := big.NewInt(1)
	for i := int64(2); i <= n; i++ {
		res.Mul(res, big.NewInt(i))
	}
	return res
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line, _ := reader.ReadString('\n')
	n, _ := strconv.ParseInt(strings.TrimSpace(line), 10, 64)
	fmt.Println(ExtraLongFactorials(n))
}
