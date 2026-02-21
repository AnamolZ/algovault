package simulation



// AngryProfessor determines if a class is cancelled based on arrival times.
func AngryProfessor(k int, a []int) string {
	onTime := 0
	for _, x := range a {
		if x <= 0 {
			onTime++
		}
	}
	if onTime >= k {
		return "NO"
	}
	return "YES"
}
