
import heapq

def heap_sort_using_heapq(arr):
    """
    Sorts a list in ascending order using Python's built-in heapq module.

    Args:
        arr (list): A list of comparable elements.

    Returns:
        list: A new sorted list.
    """
    heap = arr.copy()
    heapq.heapify(heap)
    return [heapq.heappop(heap) for _ in range(len(heap))]


def heapify(arr, n, i):
    """
    Maintains the max-heap property for a subtree rooted at index i.

    Args:
        arr (list): The list representing the heap.
        n (int): Size of the heap.
        i (int): Index of the root element.
    """
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)


def heap_sort(arr):
    """
    Sorts a list in ascending order using the Heap Sort algorithm.

    Args:
        arr (list): A list of comparable elements.

    Returns:
        list: The sorted list.
    """
    n = len(arr)

    # Build a max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)

    return arr


def main():
    try:
        data = [2, 1, 4, 5, 3]

        sorted_with_heapq = heap_sort_using_heapq(data)
        sorted_with_manual = heap_sort(data.copy())

        print("Heapq Sort:", sorted_with_heapq)
        print("Manual Heap Sort:", sorted_with_manual)

    except Exception as e:
        print("Exception:", e)


if __name__ == "__main__":
    main()
