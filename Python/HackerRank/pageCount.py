
def pageCount(n: int, p: int) -> int:
    """
    Calculate the minimum number of page turns required to reach a given page.

    The function determines whether it is faster to turn pages from the
    front of the book or from the back, and returns the smaller number
    of page turns.

    Args:
        n (int): The total number of pages in the book.
        p (int): The target page number.

    Returns:
        int: The minimum number of page turns needed to reach page p.
    """
    return min(p // 2, n // 2 - p // 2)


def main():
    """
    Read input values, compute the minimum page turns, and print the result.

    The function reads two integers from standard input:
    - the total number of pages in the book
    - the target page number

    It then calls pageCount() and prints the result.
    """
    n, p = int(input()), int(input())
    print(pageCount(n, p))


if __name__ == "__main__":
    main()