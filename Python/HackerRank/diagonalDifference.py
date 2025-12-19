
from typing import List

def diagonalDifference(arr: List[List[int]], n: int) -> int:
    """
    Calculates the absolute difference between the sums of a square matrix's diagonals.

    The function computes:
    1. The primary diagonal sum (left-to-right).
    2. The secondary diagonal sum (right-to-left).
    It then returns the absolute value of their difference.

    Args:
        arr (List[List[int]]): A 2-D square matrix of integers.
        n (int): The number of rows and columns in the matrix.

    Returns:
        int: The absolute difference between the sums of the two diagonals.

    Example:
        Given matrix:
        1 2 3
        4 5 6
        9 8 9
        Primary diagonal: 1 + 5 + 9 = 15.
        Secondary diagonal: 3 + 5 + 9 = 17.
        Absolute difference: |15 - 17| = 2.
    """
    re = 0  # To store secondary diagonal sum
    re_ = 0 # To store primary diagonal sum
    for i in range(n):
        re_ += arr[i][i]           # Primary diagonal: same row and column index
        re += arr[i][n - i - 1]    # Secondary diagonal: row i, column n-i-1
    return abs(re_ - re)

def main():
    """
    Handles input/output for the diagonal difference problem.
    
    Expected Input:
    - First line: Integer n, the size of the square matrix.
    - Next n lines: n space-separated integers representing each row.
    """
    try:
        arr = []
        n = int(input().strip())
        for _ in range(n):
            arr.append(list(map(int, input().rstrip().split())))
        result = diagonalDifference(arr, n)
        print(result)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()