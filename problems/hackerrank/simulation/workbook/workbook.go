package simulation

/*
Workbook calculates the number of special problems in Lisa's workbook.
A problem is considered "special" if its index (within a chapter)
is the same as the page number it's located on.

Args:
    n: The number of chapters.
    k: The maximum number of problems per page.
    arr: An integer array where arr[i] denotes the number of problems in the (i+1)-th chapter.

Returns:
    int: The total number of special problems in the workbook.
*/
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
