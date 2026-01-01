
def pickingNumbers(a):
    """
    Determines the maximum length of a subarray where the absolute difference
    between any two elements is less than or equal to 1.

    The function counts the frequency of each number and finds the maximum
    sum of frequencies of two adjacent values.

    Args:
        a (list[int]): A list of integers where each value is in the range 0 to 100.

    Returns:
        int: The maximum length of a valid subarray.
    """
    frequency = [0] * 101
    for x in a:
        frequency[x] += 1
    
    max_count = 0
    for i in range(1, 101):
        max_count = max(max_count, frequency[i] + frequency[i - 1])
        
    return max_count


def main():
    """
    Reads input from standard input, validates it, and prints the result
    of the pickingNumbers function.

    Input Format:
        - An integer representing the number of elements.
        - A space-separated list of integers.

    Raises:
        ValueError: If the number of elements does not match the list length.
    """
    s = int(input())
    arr = list(map(int, input().rstrip().split()))

    if s != len(arr):
        raise ValueError

    print(pickingNumbers(arr))


if __name__ == "__main__":
    main()