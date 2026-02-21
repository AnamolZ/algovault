package arrays

func JumpingOnClouds(c []int) int {
	count := 0
	currentIdx := 0
	cLength := len(c)

	for currentIdx < cLength-1 {
		if currentIdx+2 < cLength && c[currentIdx+2] == 0 {
			currentIdx += 2
		} else {
			currentIdx++
		}
		count++
	}

	return count
}
