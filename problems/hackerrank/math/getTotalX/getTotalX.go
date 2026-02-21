package math



func gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}

func lcm(a, b int) int {
	if a == 0 || b == 0 {
		return 0
	}
	return (a * b) / gcd(a, b)
}

// GetTotalX determines the number of integers that satisfy the 'Between Two Sets' conditions.
func GetTotalX(a []int, b []int) int {
	l := a[0]
	for i := 1; i < len(a); i++ {
		l = lcm(l, a[i])
	}

	g := b[0]
	for i := 1; i < len(b); i++ {
		g = gcd(g, b[i])
	}

	count := 0
	for multiple := l; multiple <= g; multiple += l {
		if g%multiple == 0 {
			count++
		}
	}
	return count
}
