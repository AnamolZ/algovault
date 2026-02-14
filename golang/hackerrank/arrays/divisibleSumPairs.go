package arrays



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
