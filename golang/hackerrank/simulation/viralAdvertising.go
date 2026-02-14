package simulation



// ViralAdvertising calculates cumulative likes for a campaign.
func ViralAdvertising(n int) int {
	shared := 5
	cumulativeLikes := 0

	for i := 0; i < n; i++ {
		liked := shared / 2
		cumulativeLikes += liked
		shared = liked * 3
	}

	return cumulativeLikes
}
