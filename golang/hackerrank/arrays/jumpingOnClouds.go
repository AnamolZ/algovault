package arrays

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// JumpingOnClouds calculates energy level after completing a circular path.
func JumpingOnClouds(c []int, k int) int {
	e := 100
	i := 0
	n := len(c)

	for {
		i = (i + k) % n
		e--
		if c[i] == 1 {
			e -= 2
		}

		if i == 0 {
			break
		}
	}

	return e
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
	fieldsC := strings.Fields(line2)
	c := make([]int, n)
	for i := 0; i < n && i < len(fieldsC); i++ {
		c[i], _ = strconv.Atoi(fieldsC[i])
	}

	fmt.Println(JumpingOnClouds(c, k))
}
