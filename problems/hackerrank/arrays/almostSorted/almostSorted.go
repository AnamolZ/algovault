package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

// almostSorted determines whether an array can be sorted by a single swap or a single reverse operation.
// 
// If the array is already sorted, it prints "yes".
// If it can be sorted by swapping two elements at indices l and r (1-based), it prints "yes" followed by "swap l r".
// If it can be sorted by reversing a sub-segment from indices l to r (1-based), it prints "yes" followed by "reverse l r".
// Otherwise, it prints "no".
func almostSorted(arr []int) {
	n := len(arr)
	sortedArr := make([]int, n)
	copy(sortedArr, arr)
	sort.Ints(sortedArr)

	// Check if already sorted
	isSorted := true
	for i := 0; i < n; i++ {
		if arr[i] != sortedArr[i] {
			isSorted = false
			break
		}
	}
	if isSorted {
		fmt.Println("yes")
		return
	}

	// Find mismatches
	var mismatches []int
	for i := 0; i < n; i++ {
		if arr[i] != sortedArr[i] {
			mismatches = append(mismatches, i)
		}
	}

	l := mismatches[0]
	r := mismatches[len(mismatches)-1]

	// Check swap
	arr[l], arr[r] = arr[r], arr[l]
	isSorted = true
	for i := 0; i < n; i++ {
		if arr[i] != sortedArr[i] {
			isSorted = false
			break
		}
	}
	if isSorted {
		fmt.Println("yes")
		fmt.Printf("swap %d %d\n", l+1, r+1)
		return
	}
	
	// Revert swap
	arr[l], arr[r] = arr[r], arr[l]

	// Check reverse
	// Reverse the segment
	for i, j := l, r; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}

	isSorted = true
	for i := 0; i < n; i++ {
		if arr[i] != sortedArr[i] {
			isSorted = false
			break
		}
	}
	if isSorted {
		fmt.Println("yes")
		fmt.Printf("reverse %d %d\n", l+1, r+1)
		return
	}

	fmt.Println("no")
}

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 16 * 1024 * 1024)

	nTemp, _, err := reader.ReadLine()
	if err != nil {
		return
	}
	n, err := strconv.ParseInt(strings.TrimSpace(string(nTemp)), 10, 64)
	if err != nil {
		return
	}

	arrTemp, _, err := reader.ReadLine()
	if err != nil {
		return
	}
	arrStr := strings.Split(strings.TrimSpace(string(arrTemp)), " ")

	var arr []int
	for i := 0; i < int(n); i++ {
		arrItemTemp, err := strconv.ParseInt(arrStr[i], 10, 64)
		if err != nil {
			return
		}
		arr = append(arr, int(arrItemTemp))
	}

	almostSorted(arr)
}
