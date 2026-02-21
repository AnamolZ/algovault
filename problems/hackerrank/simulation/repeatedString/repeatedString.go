package simulation



// RepeatedString counts 'a' occurrences in truncated repeated string.
func RepeatedString(s string, n int64) int64 {
	if s == "" {
		return 0
	}

	countA := int64(0)
	for i := 0; i < len(s); i++ {
		if s[i] == 'a' {
			countA++
		}
	}

	fullSets := n / int64(len(s))
	remainder := n % int64(len(s))

	totalA := fullSets * countA
	for i := 0; i < int(remainder); i++ {
		if s[i] == 'a' {
			totalA++
		}
	}

	return totalA
}
