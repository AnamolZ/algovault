package simulation
import (
	"regexp"
	"strings"
)








// ValidRegex checks if a string is a valid regex pattern.
func ValidRegex(pattern string) bool {
	invalidSequences := []string{"**", "++", "??", "*+", "+*", "?*"}
	for _, seq := range invalidSequences {
		if strings.Contains(pattern, seq) {
			return false
		}
	}
	_, err := regexp.Compile(pattern)
	return err == nil
}
