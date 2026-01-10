
from typing import List

def cut_sticks_bruteforce(sticks: List[int]) -> List[int]:
    """
    Simulates the stick-cutting process step by step (brute-force approach).

    At each step, the smallest stick length is removed from all sticks,
    and sticks of zero or negative length are discarded.

    Time Complexity: O(n²)
    """
    remaining = sticks.copy()
    cuts = []

    while remaining:
        cuts.append(len(remaining))
        shortest = min(remaining)
        remaining = [length - shortest for length in remaining if length > shortest]

    return cuts

def cutTheSticks(sticks: List[int]) -> List[int]:
    """
    Computes the number of sticks remaining after each cut using sorting.

    Time Complexity: O(n log n)
    """
    if not sticks:
        return []

    sorted_sticks = sorted(sticks)
    n = len(sorted_sticks)
    cuts = [n]

    for i in range(1, n):
        if sorted_sticks[i] != sorted_sticks[i - 1]:
            cuts.append(n - i)

    return cuts

def main():
    """
    Reads input, validates it, and prints results
    using both optimized and brute-force solutions.
    """
    stick_count = int(input().strip())
    sticks = list(map(int, input().strip().split()))

    if stick_count != len(sticks):
        raise ValueError("Stick count does not match the number of provided lengths.")

    print(*cutTheSticks(sticks))
    print(*cut_sticks_bruteforce(sticks))

if __name__ == '__main__':
    main()
