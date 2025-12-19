import math
import os
import random
import re
import sys

def simpleArraySum(ar_count, ar):
    """
    Calculates the sum of all integers in a given array.

    Args:
        ar_count (int): The number of elements in the array 'ar'.
        ar (list[int]): A list of integers to be summed.

    Returns:
        int: The arithmetic sum of the elements in 'ar'.

    Example:
        >>> simpleArraySum(6, [1, 2, 3, 4, 10, 11])
        31

    Constraints:
        0 < n, ar[i] <= 1000
    """
    res = ar[0]
    for i in range(1, ar_count):
        res += ar[i]
    return res

if __name__ == '__main__':
    # Standard HackerRank boilerplate for output handling
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # Input format: First line is n (size), second line is space-separated integers
    ar_count = int(input().strip())
    ar = list(map(int, input().rstrip().split()))

    result = simpleArraySum(ar_count, ar)

    fptr.write(str(result) + '\n')
    fptr.close()