package main

import (
	"fmt"
)

// timeInWords converts a given time (hour and minute) into its words representation.
// For example, 5:00 becomes "five o' clock", 5:15 becomes "quarter past five",
// 5:30 becomes "half past five", and 5:45 becomes "quarter to six".
//
// Parameters:
//   h: an integer representing the hour (1 <= h <= 12)
//   m: an integer representing the minute (0 <= m < 60)
//
// Returns:
//   A string representing the time in words.
func timeInWords(h int32, m int32) string {
	words := []string{
		"zero", "one", "two", "three", "four", "five", "six",
		"seven", "eight", "nine", "ten", "eleven", "twelve",
		"thirteen", "fourteen", "quarter", "sixteen",
		"seventeen", "eighteen", "nineteen", "twenty",
		"twenty one", "twenty two", "twenty three", "twenty four",
		"twenty five", "twenty six", "twenty seven", "twenty eight",
		"twenty nine",
	}

	if m == 0 {
		return fmt.Sprintf("%s o' clock", words[h])
	} else if m == 15 {
		return fmt.Sprintf("quarter past %s", words[h])
	} else if m == 30 {
		return fmt.Sprintf("half past %s", words[h])
	} else if m == 45 {
		nextHour := h + 1
		if h == 12 {
			nextHour = 1
		}
		return fmt.Sprintf("quarter to %s", words[nextHour])
	} else if m < 30 {
		minute := "minutes"
		if m == 1 {
			minute = "minute"
		}
		return fmt.Sprintf("%s %s past %s", words[m], minute, words[h])
	} else {
		rem := 60 - m
		minute := "minutes"
		if rem == 1 {
			minute = "minute"
		}
		nextHour := h + 1
		if h == 12 {
			nextHour = 1
		}
		return fmt.Sprintf("%s %s to %s", words[rem], minute, words[nextHour])
	}
}

func main() {
	var h, m int32
	_, err := fmt.Scan(&h, &m)
	if err == nil {
		fmt.Println(timeInWords(h, m))
	}
}
