
from collections import Counter

def non_divisible_subset(k, s):
    """
    Calculates the size of the largest subset of 's' such that the sum of 
    any two integers in the subset is not divisible by 'k'.

    Args:
        k (int): The integer divisor.
        s (list[int]): An array of integers.

    Returns:
        int: The size of the maximum non-divisible subset.
    """
    remainder_count = Counter(x % k for x in s)
    result = 0

    if remainder_count[0] > 0:
        result += 1

    for r in range(1, (k // 2) + 1):
        if r == k - r:
            if remainder_count[r] > 0:
                result += 1
        else:
            result += max(remainder_count[r], remainder_count[k - r])

    return result

def main():
    """
    Reads input from stdin, parses the values, and prints the result of 
    the non_divisible_subset function.
    """
    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    k = int(first_multiple_input[1])

    s = list(map(int, input().rstrip().split()))

    if n != len(s):
        raise ValueError("The length of s should be equal to n")

    print(non_divisible_subset(k, s))

if __name__ == "__main__":
    main()