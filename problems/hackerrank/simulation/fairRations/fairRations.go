package simulation

import "strconv"

/*
FairRations calculates the minimum number of loaves required to ensure everyone has an even number of loaves.
If it's not possible to distribute loaves such that everyone has an even number, it returns "NO".

Args:
    b: An integer slice representing the number of loaves each person currently has.

Returns:
    string: The minimum number of loaves distributed as a string, or "NO" if it's impossible.
*/
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
