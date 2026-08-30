package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

// activityNotifications calculates the total number of notifications sent for fraudulent activity.
//
// A notification is issued when a client's expenditure for a day is greater than or equal to
// 2x the median spending of a trailing window of `d` days.
//
// Because the maximum possible expenditure is bounded (0 <= expenditure[i] <= 200), we maintain
// a sliding window frequency table of size 201 (Counting Sort approach). This enables computing
// the median in O(MAX_VAL) = O(1) time per day and sliding the window in O(1) time.
//
// Args:
//
//	expenditure ([]int32): Daily expenditure records.
//	d (int32): Number of trailing days to calculate median.
//
// Returns:
//
//	int32: Total number of notifications generated.
func activityNotifications(expenditure []int32, d int32) int32 {
	freq := make([]int32, 201)
	var notifications int32 = 0

	for i := int32(0); i < d; i++ {
		freq[expenditure[i]]++
	}

	getTwiceMedian := func() int32 {
		var count int32 = 0

		if d%2 != 0 {
			target := d/2 + 1
			for val := int32(0); val <= 200; val++ {
				count += freq[val]
				if count >= target {
					return val * 2
				}
			}
		} else {
			target1 := d / 2
			target2 := target1 + 1
			first := int32(-1)

			for val := int32(0); val <= 200; val++ {
				count += freq[val]
				if first == -1 && count >= target1 {
					first = val
				}
				if count >= target2 {
					return first + val
				}
			}
		}
		return 0
	}

	n := int32(len(expenditure))
	for i := d; i < n; i++ {
		if expenditure[i] >= getTwiceMedian() {
			notifications++
		}

		freq[expenditure[i-d]]--
		freq[expenditure[i]]++
	}

	return notifications
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Split(bufio.ScanWords)

	if !scanner.Scan() {
		return
	}
	n64, _ := strconv.ParseInt(scanner.Text(), 10, 32)
	n := int32(n64)

	if !scanner.Scan() {
		return
	}
	d64, _ := strconv.ParseInt(scanner.Text(), 10, 32)
	d := int32(d64)

	expenditure := make([]int32, n)
	for i := int32(0); i < n; i++ {
		scanner.Scan()
		val, _ := strconv.ParseInt(scanner.Text(), 10, 32)
		expenditure[i] = int32(val)
	}

	result := activityNotifications(expenditure, d)
	fmt.Println(result)
}
