package simulation

func ServiceLane(n int, cases [][]int, width []int) []int {
	var result []int

	for _, c := range cases {
		start := c[0]
		end := c[1]

		minWidth := width[start]
		for i := start + 1; i <= end; i++ {
			if width[i] < minWidth {
				minWidth = width[i]
			}
		}
		result = append(result, minWidth)
	}

	return result
}
