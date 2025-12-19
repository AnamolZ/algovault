
from typing import List

def countApplesAndOranges(
    s: int, t: int,
    a: int, b: int,
    ac: List[int], oc: List[int]
) -> List[int]:
    """
    Counts how many apples and oranges land on a house.

    The house is located between points `s` and `t` (inclusive).
    Apples fall from point `a`, oranges fall from point `b`.
    Each value in `ac` and `oc` represents the distance a fruit
    falls from its tree.

    Args:
        s (int): Start position of the house.
        t (int): End position of the house.
        a (int): Position of the apple tree.
        b (int): Position of the orange tree.
        ac (List[int]): Distances each apple falls from the apple tree.
        oc (List[int]): Distances each orange falls from the orange tree.

    Returns:
        List[int]: A list containing:
            - number of apples that land on the house
            - number of oranges that land on the house
    """
    apple_count = sum(1 for x in ac if s <= a + x <= t)
    orange_count = sum(1 for x in oc if s <= b + x <= t)

    return [apple_count, orange_count]


def main() -> None:
    """
    Reads input from standard input, computes the number of apples
    and oranges that land on the house, and prints the results.

    Output is printed as two lines:
    - first line: number of apples
    - second line: number of oranges
    """
    s, t = map(int, input().split())
    a, b = map(int, input().split())
    m, n = map(int, input().split())

    ac = list(map(int, input().split()))
    oc = list(map(int, input().split()))

    print(*countApplesAndOranges(s, t, a, b, ac, oc), sep="\n")


if __name__ == "__main__":
    main()
