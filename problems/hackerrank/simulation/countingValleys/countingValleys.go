package simulation



// CountingValleys counts the number of valleys in a hike.
func CountingValleys(p string) int {
	level := 0
	valleys := 0
	for _, step := range p {
		if step == 'U' {
			level++
			if level == 0 {
				valleys++
			}
		} else if step == 'D' {
			level--
		}
	}
	return valleys
}
