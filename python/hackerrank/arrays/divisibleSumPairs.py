
from collections import Counter

def divisibleSumPairs(ar, k):
    """
    Counts the number of pairs (i, j) in the array `ar` such that i < j 
    and the sum of ar[i] + ar[j] is divisible by `k`.

    Parameters:
    ----------
    ar : list of int
        A list of integers.
    k : int
        The divisor for checking divisibility of the sum. Must be >= 1.

    Returns:
    -------
    int
        The number of pairs whose sum is divisible by `k`.

    Example:
    --------
    Input: 6 5 ar = [1, 2, 3, 4, 5, 6]

    Output: 3
    """
    rbkt = [x % k for x in ar]
    cnt = Counter(rbkt)

    res = cnt[0] * (cnt[0] - 1) // 2

    for i in range(1, (k // 2) + 1):
        if i == k - i:
            res += cnt[i] * (cnt[i] - 1) // 2
        else:
            res += cnt[i] * cnt[k - i]

    return res

def main():
    """
    Handles user input for the array size, divisor, and elements.
    Validates input and prints the result of divisibleSumPairs.
    
    Raises:
    ------
    ValueError
        If the number of input values does not match `n` or if `k` is out of range.
    """
    try:
        n, k = map(int, input().rstrip().split())
        ar = list(map(int, input().rstrip().split()))

        if len(ar) != n:
            raise ValueError("The number of values exceeds the allowed limit n")

        if k < 1 or k > 100:
            raise ValueError("The value of k is out of allowed range")

        print(divisibleSumPairs(ar, k))
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    main()
