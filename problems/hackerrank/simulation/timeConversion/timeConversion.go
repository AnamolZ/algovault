package simulation
import (
	"fmt"
	"strconv"
	"strings"
)








// TimeConversion converts 12-hour format to 24-hour format.
func TimeConversion(s string) string {
	suffix := s[len(s)-2:]
	timePart := s[:len(s)-2]
	parts := strings.Split(timePart, ":")
	hh, _ := strconv.Atoi(parts[0])

	if suffix == "PM" {
		if hh != 12 {
			hh += 12
		}
	} else { // AM
		if hh == 12 {
			hh = 0
		}
	}

	return fmt.Sprintf("%02d:%s:%s", hh, parts[1], parts[2])
}
