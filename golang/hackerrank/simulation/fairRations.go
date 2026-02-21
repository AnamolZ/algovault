package simulation

import "strconv"

func FairRations(b []int) string {
	count := 0
	for i := 0; i < len(b); i++ {
		if i == len(b)-1 {
			if b[i]%2 != 0 {
				return "NO"
			}
		} else if b[i]%2 != 0 {
			b[i]++
			b[i+1]++
			count += 2
		}
	}
	return strconv.Itoa(count)
}
