package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// DivisibleSumPairs counts pairs (i, j) where i < j and (ar[i] + ar[j]) % k == 0.
func DivisibleSumPairs(ar []int, k int) int {
	cnt := make(map[int]int)
	for _, x := range ar {
		cnt[x%k]++
	}

	res := cnt[0] * (cnt[0] - 1) / 2

	for i := 1; i <= k/2; i++ {
		if i == k-i {
			res += cnt[i] * (cnt[i] - 1) / 2
		} else {
			res += cnt[i] * cnt[k-i]
		}
	}

	return res
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	line1, _ := reader.ReadString('\n')
	fieldsNK := strings.Fields(line1)
	if len(fieldsNK) < 2 {
		return
	}
	n, _ := strconv.Atoi(fieldsNK[0])
	k, _ := strconv.Atoi(fieldsNK[1])

	line2, _ := reader.ReadString('\n')
	fieldsAr := strings.Fields(line2)
	ar := make([]int, n)
	for i := 0; i < n && i < len(fieldsAr); i++ {
		ar[i], _ = strconv.Atoi(fieldsAr[i])
	}

	fmt.Println(DivisibleSumPairs(ar, k))
}
