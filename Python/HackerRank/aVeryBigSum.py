
from typing import List

def aVeryBigSum(a: int, list_b: List[int]) -> int:
    """
    Calculates the sum of elements in an array, handling potentially very large integers.

    In some programming languages, large integers can cause overflow, but Python 
    handles arbitrarily large integers automatically. This function iterates through 
    the list and computes the total sum.

    Args:
        a (int): The number of elements in the array.
        list_b (List[int]): A list of integers to be summed.

    Returns:
        int: The sum of all elements in the array.

    Example:
        Input: a = 5, list_b = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
        Output: 5000000015
    """
    sum_ = 0
    for numbers in range(a):
        sum_ += list_b[numbers]

    return sum_


def main():
    """
    Handles the input/output for the A Very Big Sum challenge.

    Reads the number of elements (n) and the list of integers from standard input,
    then prints the calculated sum.
    """
    try:
        a = int(input().strip())
        line_b = input().strip()

        if not a or not line_b:
            return

        b = list(map(int, line_b.split()))

        result = aVeryBigSum(a, b)
        print(result)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()