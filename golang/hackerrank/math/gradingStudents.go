package math



// GradingStudents rounds student grades according to grading rules.
func GradingStudents(grades []int) []int {
	for i := range grades {
		if grades[i] < 38 {
			continue
		}
		rem := grades[i] % 5
		if rem > 2 {
			grades[i] += 5 - rem
		}
	}
	return grades
}
