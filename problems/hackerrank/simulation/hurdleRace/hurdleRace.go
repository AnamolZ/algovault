package simulation



// HurdleRace calculates the minimum doses of potion needed.
func HurdleRace(k int, h []int) int {
	if len(h) == 0 {
		return 0
	}
	maxH := h[0]
	for _, val := range h {
		if val > maxH {
			maxH = val
		}
	}
	if maxH > k {
		return maxH - k
	}
	return 0
}
