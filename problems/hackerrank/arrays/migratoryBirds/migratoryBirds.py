def migratoryBirds(arr):
    """
    Determines the bird type that is most frequently sighted. 
    If multiple types have the same highest frequency, returns the smallest type number.

    Parameters
    ----------
    arr : list of int
        A list of integers representing the types of birds sighted. 
        Each integer corresponds to a bird type.

    Returns
    -------
    int
        The type number of the most frequently sighted bird. 
        If multiple types share the highest frequency, the smallest type number is returned.

    Example
    -------
    >>> migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])
    3
    """
    ar_dit = {}
    for i in arr:
        if i in ar_dit:
            ar_dit[i] += 1
        else:
            ar_dit[i] = 1
    mc = max(ar_dit.values())
    return min([x for x, c in ar_dit.items() if c == mc])


def main():
    """
    Main function to run the migratoryBirds program. 

    It reads input from the user:
    - The first line should be an integer representing the number of birds sighted.
    - The second line should contain space-separated integers representing bird types.

    Validates the input:
    - Ensures the number of bird types matches the specified size.
    - Ensures the number of bird sightings is within the range [5, 2*10^5].

    Prints the type of the most frequently sighted bird.
    """
    isize = int(input())
    arr = list(map(int, input().rstrip().split()))

    if len(arr) != isize:
        raise ValueError("The number of values does not match the specified size n")

    if isize < 5 or isize > 2 * 10**5:
        raise ValueError("The number of values exceeds the allowed limit")

    print(migratoryBirds(arr))


if __name__ == '__main__':
    main()
