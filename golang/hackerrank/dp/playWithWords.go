package dp
import (
	"fmt"
)








// Solve calculates the maximum product of lengths of two non-overlapping palindromic subsequences.
func Solve() {
	s := "eeegeeksforskeeggeeks"
	n := len(s)

	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
	}

	for i := n - 1; i >= 0; i-- {
		dp[i][i] = 1
		for j := i + 1; j < n; j++ {
			if s[i] == s[j] {
				dp[i][j] = dp[i+1][j-1] + 2
			} else {
				dp[i][j] = max(dp[i+1][j], dp[i][j-1])
			}
		}
	}

	maxProduct := 0
	for i := 0; i < n-1; i++ {
		product := dp[0][i] * dp[i+1][n-1]
		if product > maxProduct {
			maxProduct = product
		}
	}

	fmt.Println(maxProduct)
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
