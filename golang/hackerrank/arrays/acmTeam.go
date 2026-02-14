package arrays







// AcmTeam finds the maximum topics known by a two-person team and the number of such teams.
func AcmTeam(topicStrings []string, numberOfTopics int) (int, int) {
	// In Go, big.Int can handle arbitrary length bitmasks, but let's see if
	// we can use uint64 if topics <= 64, otherwise we might need a more general approach.
	// However, HackerRank topics can be up to 500. So we need a way to count set bits in binary strings.

	n := len(topicStrings)
	maxTopicsKnown := 0
	maxTeamsCount := 0

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			topicsKnownCount := 0
			for k := 0; k < numberOfTopics; k++ {
				if topicStrings[i][k] == '1' || topicStrings[j][k] == '1' {
					topicsKnownCount++
				}
			}

			if topicsKnownCount > maxTopicsKnown {
				maxTopicsKnown = topicsKnownCount
				maxTeamsCount = 1
			} else if topicsKnownCount == maxTopicsKnown {
				maxTeamsCount++
			}
		}
	}

	return maxTopicsKnown, maxTeamsCount
}
