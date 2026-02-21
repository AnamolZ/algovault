package math



// PageCount calculates the minimum page turns needed to reach page p in a book of n pages.
func PageCount(n, p int) int {
	fromFront := p / 2
	fromBack := n/2 - p/2
	if fromFront < fromBack {
		return fromFront
	}
	return fromBack
}
