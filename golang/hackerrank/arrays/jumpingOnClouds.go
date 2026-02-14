package arrays



// JumpingOnClouds calculates energy level after completing a circular path.
func JumpingOnClouds(c []int, k int) int {
	e := 100
	i := 0
	n := len(c)

	for {
		i = (i + k) % n
		e--
		if c[i] == 1 {
			e -= 2
		}

		if i == 0 {
			break
		}
	}

	return e
}
