package arrays



// SockMerchant counts matching pairs of socks.
func SockMerchant(ar []int) int {
	b := make(map[int]bool)
	p := 0

	for _, i := range ar {
		if b[i] {
			p++
			delete(b, i)
		} else {
			b[i] = true
		}
	}
	return p
}
