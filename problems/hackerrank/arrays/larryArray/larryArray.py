#!/bin/python3

import math
import os
import random
import re
import sys

def larrysArray(A):
    """
    Determines if the array can be sorted by rotating any 3 consecutive elements.
    This operation preserves the parity of the number of inversions.
    
    Args:
        A (list[int]): An array of integers.
        
    Returns:
        str: "YES" if the array can be sorted, otherwise "NO".
    """
    inversions = 0
    n = len(A)
    
    for i in range(n):
        for j in range(i + 1, n):
            if A[i] > A[j]:
                inversions += 1

    return "YES" if inversions % 2 == 0 else "NO"

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        A = list(map(int, input().rstrip().split()))

        result = larrysArray(A)

        fptr.write(result + '\n')

    fptr.close()
