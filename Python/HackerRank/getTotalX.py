
def gcd(arr):
    """
    Compute the Greatest Common Divisor (GCD) of a list of integers.

    Uses the Euclidean algorithm iteratively to reduce the array
    pairwise. An early exit is applied when the GCD becomes 1,
    since no smaller positive GCD is possible.

    Args:
        arr (List[int]): A non-empty list of positive integers.

    Returns:
        int: The GCD of all elements in the list.
    """
    res = arr[0]
    for x in arr[1:]:
        a, b = res, x
        while b:
            a, b = b, a % b
        res = a
        if res == 1:
            return 1
    return res


def LCM(arr):
    """
    Compute the Least Common Multiple (LCM) of a list of integers.

    The LCM is computed pairwise using the mathematical identity:
        LCM(a, b) = (a * b) // GCD(a, b)

    Args:
        arr (List[int]): A non-empty list of positive integers.

    Returns:
        int: The LCM of all elements in the list.
    """
    res = arr[0]
    for x in arr[1:]:
        res = res * x // gcd([res, x])
    return res


def getTotalX(a, b):
    """
    Determine the number of integers that satisfy the 'Between Two Sets' conditions.

    A number x is valid if:
      1. All elements in list `a` divide x.
      2. x divides all elements in list `b`.

    The solution is based on:
      - Computing L = LCM(a)
      - Computing G = GCD(b)
      - Counting how many multiples of L evenly divide G

    Args:
        a (List[int]): First list of integers.
        b (List[int]): Second list of integers.

    Returns:
        int: The count of integers satisfying both conditions.
    """
    L = LCM(a)
    G = gcd(b)

    count = 0
    multiple = L

    while multiple <= G:
        if G % multiple == 0:
            count += 1
        multiple += L

    return count


def main():
    """
    Read input, validate constraints, and print the result for
    the 'Between Two Sets' problem.

    Input format:
        First line: two integers m n
        Second line: m integers (array a)
        Third line: n integers (array b)

    Input Format:
        2 3
        2 4
        16 32 96

    Output:
        3

    Raises:
        ValueError: If input lengths do not match declared sizes.
    """
    try:
        m, n = map(int, input().split())
        n_, m_ = list(map(int, input().split())), list(map(int, input().split()))

        if len(n_) != m or len(m_) != n:
            raise ValueError()

        print(getTotalX(n_, m_))

    except ValueError:
        raise ValueError


if __name__ == '__main__':
    main()
