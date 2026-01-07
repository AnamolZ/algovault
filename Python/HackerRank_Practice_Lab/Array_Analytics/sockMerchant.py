
def sockMerchant(ar: list[int]) -> int:
    """
    Counts the number of matching pairs of socks in the given list.

    Parameters
    ----------
    ar : list[int]
        A list of integers representing sock colors.

    Returns
    -------
    int
        The total number of matching pairs in the list.

    Example
    -------
    >>> sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]) >>> 3
    """
    b = set()
    p = 0

    for i in ar:
        if i in b:
            p += 1
            b.discard(i)
        else:
            b.add(i)
    return p


def main():
    """
    Main function that handles user input and outputs the number of sock pairs.

    Prompts the user to input:
    1. The number of socks (integer).
    2. A space-separated list of sock colors.

    Validates the input and prints the number of matching pairs.
    
    Raises
    ------
    ValueError
        If the input is not valid integers or the number of socks does not match
        the length of the list.
    """
    try:
        n = int(input())
        ar = list(map(int, input().rstrip().split()))

        if len(ar) != n:
            raise ValueError(f"Expected {n} numbers, but got {len(ar)}")
    
        print(sockMerchant(ar))

    except ValueError:
        raise ValueError("Must be integers")

if __name__ == "__main__":
    main()