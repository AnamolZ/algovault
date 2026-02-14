package simulation



// BreakingRecords tracks how many times the highest and lowest score records are broken.
func BreakingRecords(scores []int) (int, int) {
	if len(scores) == 0 {
		return 0, 0
	}
	maxScore := scores[0]
	minScore := scores[0]
	maxCount := 0
	minCount := 0

	for i := 1; i < len(scores); i++ {
		if scores[i] > maxScore {
			maxScore = scores[i]
			maxCount++
		} else if scores[i] < minScore {
			minScore = scores[i]
			minCount++
		}
	}
	return maxCount, minCount
}
