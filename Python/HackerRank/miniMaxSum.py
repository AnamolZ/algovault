
from typing import List, Tuple

def sorting(arr: List[int]) -> List[int]:
    """
    Sorts a list of integers in ascending order using a recursive
    quicksort-like approach.

    Args:
        arr (List[int]): The list of integers to be sorted.

    Returns:
        List[int]: A new list containing the sorted integers in ascending order.
    """
    if len(arr) <= 1:
        return arr
    
    pivot_index = len(arr) // 2
    pivot = arr[pivot_index]
    
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return sorting(left) + middle + sorting(right)

def miniMaxSum(arr: List[int]) -> Tuple[int, int]:
    """
    Calculates the minimum and maximum values that can be calculated by 
    summing exactly four of the five integers in the array.

    The function sorts the input and then computes:
    - Minimum sum: The sum of the first four (smallest) elements.
    - Maximum sum: The sum of the last four (largest) elements.

    Args:
        arr (List[int]): A list containing 5 positive integers.

    Returns:
        Tuple[int, int]: A tuple containing (min_sum, max_sum).

    Example:
        Input: [1, 3, 5, 7, 9]
        Output: (16, 24)
        Explanation: 
        Minimum sum: 1 + 3 + 5 + 7 = 16
        Maximum sum: 3 + 5 + 7 + 9 = 24

    Constraints:
        - 1 <= arr[i] <= 10^9
    """
    arr = sorting(arr)
    max_n = 0
    min_n = 0
    for i in range(4):
        max_n += arr[5 - i - 1]
        min_n += arr[i]
    return min_n, max_n

def main():
    """
    Main execution block that reads input and prints results in the required format.

    Expects a single line of five space-separated integers from standard input.
    Prints the resulting minimum and maximum sums as two space-separated integers.

    Example Input:
        1 2 3 4 5
    Example Output:
        10 14
    """
    try:
        arr = list(map(int, input().rstrip().split()))
        # Prints two space-separated long integers
        print(*miniMaxSum(arr))
    except Exception as e:
        print("Exception: ", e)

if __name__ == "__main__":
    main()