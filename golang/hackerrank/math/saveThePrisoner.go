package math



// SaveThePrisoner determines which prisoner receives the last candy in a circle.
func SaveThePrisoner(n, m, s int) int {
	return ((s + m - 2) % n) + 1
}
