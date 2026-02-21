package arrays

/*
JumpingOnClouds calculates the minimum number of jumps required to traverse a cloud array from the start to the end.
It follows the rules: jump 2 if possible, otherwise jump 1, avoiding thunderclouds (marked as 1).

Args:
    c: A slice of integers representing the cloud array (0 for safe, 1 for thunder).

Returns:
    int: The minimum number of jumps required to reach the end.
*/
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
