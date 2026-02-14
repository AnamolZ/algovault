package arrays



// CompareLists compares two triplets of ratings and awards points based on category values.
func CompareLists(listA []int, listB []int) (int, int) {
	scoreA := 0
	scoreB := 0

	// Using the length of the shorter list or just 3 as per the challenge
	n := len(listA)
	if len(listB) < n {
		n = len(listB)
	}

	for i := 0; i < n; i++ {
		if listA[i] > listB[i] {
			scoreA++
		} else if listB[i] > listA[i] {
			scoreB++
		}
	}

	return scoreA, scoreB
}
