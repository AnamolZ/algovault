package math



// ChocolateFeast calculates total chocolates eaten.
func ChocolateFeast(n, c, m int) int {
	chocolates := n / c
	wrappers := chocolates
	totalEaten := chocolates

	for wrappers >= m {
		newChocolates := wrappers / m
		totalEaten += newChocolates
		wrappers = (wrappers % m) + newChocolates
	}

	return totalEaten
}
