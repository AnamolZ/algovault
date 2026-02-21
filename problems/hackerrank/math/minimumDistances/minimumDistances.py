
"""
Minimum Distances solution for HackerRank.
Given an array, find the minimum distance between any two equal elements in the array.
If no such elements exist, return -1.
"""

def minimumDistances(arr):
    """
    Finds the minimum distance between any two identical elements in an array.

    Args:
        arr (list[int]): An array of integers.

    Returns:
        int: The minimum distance, or -1 if no duplicates exist.
    """
    last_seen = {}
    min_dist = float('inf')

    for idx, value in enumerate(arr):
        if value in last_seen:
            distance = idx - last_seen[value]
            if distance < min_dist:
                min_dist = distance

        last_seen[value] = idx

    return min_dist if min_dist != float('inf') else -1

def main():
    n = int(input().strip())

    a = list(map(int, input().rstrip().split()))
    
    if n != len(a):
        raise ValueError("The length of a should be equal to n")

    print(minimumDistances(a))

if __name__ == "__main__":
    main()