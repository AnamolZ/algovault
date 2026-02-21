
def counting_sort(arr):
    """
    Sorts a list of non-negative integers using the Counting Sort algorithm.

    Args:
        arr (list): A list of non-negative integers.

    Returns:
        list: A new sorted list.
    """
    if not arr:
        return arr

    max_val = max(arr)
    count = [0] * (max_val + 1)

    # Count the frequency of each element
    for num in arr:
        count[num] += 1

    # Reconstruct the sorted array
    sorted_arr = []
    for value, freq in enumerate(count):
        sorted_arr.extend([value] * freq)

    return sorted_arr


def main():
    try:
        data = [2, 1, 4, 5, 3]

        sorted_data = counting_sort(data)
        print("Counting Sort:", sorted_data)

    except Exception as e:
        print("Exception:", e)


if __name__ == "__main__":
    main()

