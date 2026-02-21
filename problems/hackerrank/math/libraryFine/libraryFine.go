package math



// LibraryFine calculates the fine for a library book based on return and due dates.
func LibraryFine(d1, m1, y1, d2, m2, y2 int) int {
	if y1 > y2 {
		return 10000
	}
	if y1 == y2 && m1 > m2 {
		return 500 * (m1 - m2)
	}
	if y1 == y2 && m1 == m2 && d1 > d2 {
		return 15 * (d1 - d2)
	}
	return 0
}
