
from collections import Counter

def equalizeArray(arr):
    """
    Finds the minimum number of elements to delete to make all elements in the array equal.
    
    The function identifies the most frequent element in the array and calculates
    the number of deletions needed by subtracting the frequency of that element 
    from the total number of elements.

    Args:
        arr (list[int]): An array of integers.

    Returns:
        int: The minimum number of deletions required.
    """
    if not arr: return 0
    counts = Counter(arr)
    return len(arr) - counts[max(counts, key=counts.get)]

def main():
    """
    Main entry point for the script.
    
    Reads the array size and elements from standard input, validates the input length,
    and prints the result of `equalizeArray`.
    """
    n = int(input().strip())
    arr = list(map(int, input().rstrip().split()))

    if n != len(arr):
        raise ValueError(
            f"Invalid input: expected {n} elements, got {len(arr)}"
        )

    print(equalizeArray(arr))

if __name__ == '__main__':
    main()