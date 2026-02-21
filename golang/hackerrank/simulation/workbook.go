package simulation

func Workbook(n int, k int, arr []int) int {
	page := 1
	special := 0

	for _, problems := range arr {
		numPages := (problems + k - 1) / k

		for p := 0; p < numPages; p++ {
			start := p*k + 1
			end := start + k - 1
			if problems < end {
				end = problems
			}

			if start <= page && page <= end {
				special++
			}

			page++
		}
	}

	return special
}
