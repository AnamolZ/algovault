package arrays



// MigratoryBirds determines the bird type that is most frequently sighted.
func MigratoryBirds(arr []int) int {
	arMap := make(map[int]int)
	for _, v := range arr {
		arMap[v]++
	}

	maxCount := 0
	for _, count := range arMap {
		if count > maxCount {
			maxCount = count
		}
	}

	result := -1
	for birdType, count := range arMap {
		if count == maxCount {
			if result == -1 || birdType < result {
				result = birdType
			}
		}
	}

	return result
}
