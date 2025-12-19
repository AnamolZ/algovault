
def insertion_sort(arr):
    """
    Sorts a list in ascending order using the Insertion Sort algorithm.

    Args:
        arr (list): A list of comparable elements.

    Returns:
        list: The sorted list.
    """
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key

    return arr


def main():
    try:
        data = [2, 1, 4, 5, 3]

        sorted_data = insertion_sort(data.copy())
        print("Insertion Sort:", sorted_data)

    except Exception as e:
        print("Exception:", e)


if __name__ == "__main__":
    main()
