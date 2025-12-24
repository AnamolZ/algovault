from logging import exception


def birthday(n: int, s: list[int], d: int, m: int) -> int:
    """
    Count the number of contiguous segments of length `m` in the list `s`
    whose elements sum to `d`.

    This function checks every possible subarray of length `m` and
    increments the count when the sum of its elements equals `d`.

    Args:
        n (int): Total number of elements in the list `s`.
        s (list[int]): List of integers representing chocolate squares.
        d (int): Target sum (Ron’s birth day).
        m (int): Length of the segment (Ron’s birth month).

    Returns:
        int: Number of valid contiguous segments whose sum equals `d`.
    """
    count = 0
    for i in range(len(s)):
        if sumArray(s[i:i + m]) == d:
            count += 1
    return count


def sumArray(arr: list[int], sum_: int = 0) -> int:
    """
    Calculate the sum of all integers in a list.

    Args:
        arr (list[int]): List of integers to sum.
        sum_ (int, optional): Initial sum value. Defaults to 0.

    Returns:
        int: Sum of all elements in the list.
    """
    for i in arr:
        sum_ += i
    return sum_


def main() -> None:
    """
    Read input values, validate them, and print the result of the
    birthday chocolate calculation.

    Raises:
        ValueError: If input constraints for `n`, `d`, or `m` are violated.

    Example:
        >>> birthday(5, [1, 2, 1, 3, 2], 3, 2)
        2
    """
    try:
        n = int(input())
        s = list(map(int, input().rstrip().split()))
        d, m = map(int, input().rstrip().split())

        if len(s) != n:
            raise ValueError("The number of values exceeds the allowed limit n")

        if d < 1 or d > 31:
            raise ValueError("The number of values exceeds the allowed limit d")

        if m < 1 or m > 12:
            raise ValueError("The number of values exceeds the allowed limit m")

        print(birthday(n, s, d, m))
    except Exception as e:
        return exception(e)


if __name__ == '__main__':
    main()