package math



// Kangaroo determines if two kangaroos will land at the same location at the same time.
func Kangaroo(x1, v1, x2, v2 int) string {
	if v1 <= v2 {
		return "NO"
	}
	if (x2-x1)%(v1-v2) == 0 {
		return "YES"
	}
	return "NO"
}
