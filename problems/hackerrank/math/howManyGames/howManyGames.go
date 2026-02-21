package math



// HowManyGames calculates the total number of games that can be purchased.
func HowManyGames(p, d, m, s int) int {
	count := 0
	for s >= p {
		s -= p
		count++
		p -= d
		if p < m {
			p = m
		}
	}
	return count
}
