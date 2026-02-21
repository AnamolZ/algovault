package simulation

/*
ServiceLane computes the maximum vehicle width that can pass through each segment of the service lane.
For each test case, it finds the minimum width between the given entry and exit indices inclusive.

Args:
    n: The length of the freeway.
    cases: A 2D integer slice where each element represents a testcase with [start, end] indices.
    width: An integer slice capturing the width of the service lane at each segment.

Returns:
    []int: A slice where each element represents the maximum vehicle width for each test case.
*/
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
