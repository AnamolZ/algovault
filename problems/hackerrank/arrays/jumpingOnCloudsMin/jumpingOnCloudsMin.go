package arrays



// JumpingOnCloudsMin calculates the minimum number of jumps required to reach the last cloud.
func JumpingOnCloudsMin(c []int) int {
	count := 0
	currentIdx := 0
	clength := len(c)

	for currentIdx < clength-1 {
		if currentIdx+2 < clength && c[currentIdx+2] == 0 {
			currentIdx += 2
		} else {
			currentIdx += 1
		}
		count++
	}

	return count
}
