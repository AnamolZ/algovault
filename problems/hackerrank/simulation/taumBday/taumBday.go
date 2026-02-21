package simulation



// TaumBday calculates the minimum cost of purchasing gifts.
func TaumBday(b, w, bc, wc, z int64) int64 {
	effectiveBC := bc
	if wc+z < bc {
		effectiveBC = wc + z
	}

	effectiveWC := wc
	if bc+z < wc {
		effectiveWC = bc + z
	}

	return b*effectiveBC + w*effectiveWC
}
