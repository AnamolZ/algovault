
def merge_sort(arr):
    """
    Sorts a list in ascending order using the Merge Sort algorithm.

    Args:
        arr (list): A list of comparable elements.

    Returns:
        list: A new sorted list.
    """
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])

    return merge(left_half, right_half)


def merge(left, right):
    """
    Merges two sorted lists into a single sorted list.

    Args:
        left (list): First sorted list.
        right (list): Second sorted list.

    Returns:
        list: A merged sorted list.
    """
    merged = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1

    merged.extend(left[i:])
    merged.extend(right[j:])

    return merged


def main():
    try:
        data = [2, 1, 4, 5, 3]

        sorted_data = merge_sort(data)
        print("Merge Sort:", sorted_data)

    except Exception as e:
        print("Exception:", e)


if __name__ == "__main__":
    main()
