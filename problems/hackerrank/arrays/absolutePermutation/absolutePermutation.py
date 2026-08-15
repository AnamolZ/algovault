#!/bin/python3

import math
import os
import random
import re
import sys

def absolutePermutation(n,k):
    """
    Finds the lexicographically smallest absolute permutation.
    
    An absolute permutation is a permutation P of the integers [1, n] such that 
    |P[i] - i| = k for all i in [1, n] (where i is 1-indexed).
    
    Args:
        n (int): The upper bound of natural numbers to consider, inclusive.
        k (int): The target absolute difference between each element and its 1-based index.
        
    Returns:
        list: The lexicographically smallest absolute permutation if one exists, otherwise [-1].
    """
    natural_number = list(range(1, n+1))

    if k == 0:
        return list(range(1, n + 1))

    if n % (2 * k) != 0:
        return [-1]

    shifted_number = []

    for i in range(1, n + 1, 2 * k):
        shifted_number.extend(range(i + k, i + 2 * k))
        shifted_number.extend(range(i, i + k))

    abs_diff = [abs(i - j) for i, j in zip(natural_number, shifted_number)]
    return shifted_number if all(i == k for i in abs_diff) else -1

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        first_multiple_input = input().rstrip().split()

        n = int(first_multiple_input[0])

        k = int(first_multiple_input[1])

        result = absolutePermutation(n, k)

        fptr.write(' '.join(map(str, result)))
        fptr.write('\n')

    fptr.close()