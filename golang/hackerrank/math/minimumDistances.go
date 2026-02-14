package math



// MinimumDistances finds the minimum distance between any two equal elements.
func MinimumDistances(arr []int) int {
	lastSeen := make(map[int]int)
	minDist := -1

	for idx, val := range arr {
		if prevIdx, found := lastSeen[val]; found {
			dist := idx - prevIdx
			if minDist == -1 || dist < minDist {
				minDist = dist
			}
		}
		lastSeen[val] = idx
	}

	return minDist
}
