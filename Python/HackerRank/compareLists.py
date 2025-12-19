from itertools import zip_longest
from typing import List, Tuple


def compareLists(list_a: List[int], list_b: List[int]) -> Tuple[int, int]:
    """
    Compares two triplets of ratings and awards points based on category values.

    The comparison logic is as follows:
    - If list_a[i] > list_b[i], Alice receives 1 point.
    - If list_a[i] < list_b[i], Bob receives 1 point.
    - If list_a[i] == list_b[i], neither person receives a point.

    Args:
        list_a (List[int]): Alice's challenge ratings (clarity, originality, difficulty).
        list_b (List[int]): Bob's challenge ratings (clarity, originality, difficulty).

    Returns:
        Tuple[int, int]: A tuple containing (Alice's total score, Bob's total score).

    Example:
        >>> compareLists([1, 2, 3], [3, 2, 1])
        (1, 1)
        # Category 1: 1 < 3 (Bob +1)
        # Category 2: 2 == 2 (No points)
        # Category 3: 3 > 1 (Alice +1)
    """
    score_a = 0
    score_b = 0

    for val_a, val_b in zip_longest(list_a, list_b, fillvalue=0):
        if val_a > val_b:
            score_a += 1
        elif val_b > val_a:
            score_b += 1

    return score_a, score_b


def main():
    """
    Handles standard input and output for the Compare the Triplets challenge.

    Expects two lines of input, each containing three space-separated integers.
    Prints the resulting comparison points as two space-separated integers.
    """
    try:
        line_a = input().strip()
        line_b = input().strip()

        if not line_a or not line_b:
            return

        a = list(map(int, line_a.split()))
        b = list(map(int, line_b.split()))

        result = compareLists(a, b)
        print(*result)
    except EOFError:
        pass


if __name__ == "__main__":
    main()