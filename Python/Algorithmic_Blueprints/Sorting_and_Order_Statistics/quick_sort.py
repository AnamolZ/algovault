
def quick_sort(arr):
    """
    Sorts a list in ascending order using the Quick Sort algorithm.

    Args:
        arr (list): A list of comparable elements.

    Returns:
        list: A new sorted list.
    """
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]

    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)


def main():
    try:
        data = [2, 1, 4, 5, 3]

        sorted_data = quick_sort(data)
        print("Quick Sort:", sorted_data)

    except Exception as e:
        print("Exception:", e)


if __name__ == "__main__":
    main()
