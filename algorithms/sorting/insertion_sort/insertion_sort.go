package main

import "fmt"

// InsertionSort sorts an array of integers using the insertion sort algorithm.
func InsertionSort(arr []int) {
	n := len(arr)
	for i := 1; i < n; i++ {
		key := arr[i]
		j := i - 1
		// Move elements of arr[0..i-1] that are greater than key
		// to one position ahead of their current position
		for j >= 0 && arr[j] > key {
			arr[j+1] = arr[j]
			j = j - 1
		}
		arr[j+1] = key
	}
}

func main() {
	sample := []int{64, 34, 25, 12, 22, 11, 90}
	fmt.Println("Original array:", sample)
	InsertionSort(sample)
	fmt.Println("Sorted array:  ", sample)
}
