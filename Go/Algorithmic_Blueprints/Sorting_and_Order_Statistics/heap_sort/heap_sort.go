package main

import "fmt"

// HeapSort sorts an array of integers using the heap sort algorithm.
func HeapSort(arr []int) {
	n := len(arr)

	// Build heap (rearrange array)
	for i := n/2 - 1; i >= 0; i-- {
		heapify(arr, n, i)
	}

	// One by one extract an element from heap
	for i := n - 1; i > 0; i-- {
		// Move current root to end
		arr[0], arr[i] = arr[i], arr[0]

		// call max heapify on the reduced heap
		heapify(arr, i, 0)
	}
}

func heapify(arr []int, n, i int) {
	largest := i
	l := 2*i + 1
	r := 2*i + 2

	if l < n && arr[l] > arr[largest] {
		largest = l
	}

	if r < n && arr[r] > arr[largest] {
		largest = r
	}

	if largest != i {
		arr[i], arr[largest] = arr[largest], arr[i]
		heapify(arr, n, largest)
	}
}

func main() {
	sample := []int{12, 11, 13, 5, 6, 7}
	fmt.Println("Original array:", sample)
	HeapSort(sample)
	fmt.Println("Sorted array:  ", sample)
}
