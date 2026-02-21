package math
import (
	"fmt"
)








// MarksCal calculates the average marks for a student.
func MarksCal(m map[string][]float64, q string) string {
	marks := m[q]
	var sum float64
	for _, val := range marks {
		sum += val
	}
	return fmt.Sprintf("%.2f", sum/3.0)
}
