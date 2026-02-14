package arrays



// AppendAndDelete determines if s can be converted to t in exactly k operations.
func AppendAndDelete(s, t string, k int) string {
	commonLength := 0
	minLen := len(s)
	if len(t) < minLen {
		minLen = len(t)
	}

	for i := 0; i < minLen; i++ {
		if s[i] == t[i] {
			commonLength++
		} else {
			break
		}
	}

	totalLen := len(s) + len(t)
	minMoves := totalLen - (2 * commonLength)

	if k >= totalLen {
		return "Yes"
	} else if k >= minMoves && (k-minMoves)%2 == 0 {
		return "Yes"
	} else {
		return "No"
	}
}
