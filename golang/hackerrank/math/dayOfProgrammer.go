package math

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// DayOfProgrammer calculates the date of the 256th day of the year for the Russian calendar.
func DayOfProgrammer(y int) string {
	if y == 1918 {
		return "26.09.1918"
	}

	var isLeap bool
	if y < 1918 {
		isLeap = (y%4 == 0)
	} else {
		isLeap = (y%400 == 0) || (y%4 == 0 && y%100 != 0)
	}

	day := "13"
	if isLeap {
		day = "12"
	}
	return fmt.Sprintf("%s.09.%d", day, y)
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	line, _ := reader.ReadString('\n')
	y, _ := strconv.Atoi(strings.TrimSpace(line))
	fmt.Println(DayOfProgrammer(y))
}
