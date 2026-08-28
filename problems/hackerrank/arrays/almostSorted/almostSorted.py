
#!/bin/python3

import math
import os
import random
import re
import sys

def almostSorted(arr):
    """
    Determines if an array can be sorted by a single swap or a single reverse operation.
    
    If the array is already sorted, prints "yes".
    If it can be sorted by swapping two elements at indices l and r (1-based), prints "yes" followed by "swap l r".
    If it can be sorted by reversing a sub-segment from indices l to r (1-based), prints "yes" followed by "reverse l r".
    Otherwise, prints "no".
    
    Args:
        arr (list of int): The array of integers to check.
    """
    sorted_arr = sorted(arr)
    if arr == sorted_arr:
        print("yes")
        return

    mismatches = [i for i in range(len(arr)) if arr[i] != sorted_arr[i]]
    l = mismatches[0]
    r = mismatches[-1]

    arr[l], arr[r] = arr[r], arr[l]
    if arr == sorted_arr:
        print("yes")
        print(f"swap {l + 1} {r + 1}")
        return
    arr[l], arr[r] = arr[r], arr[l]

    arr[l:r + 1] = reversed(arr[l:r + 1])
    if arr == sorted_arr:
        print("yes")
        print(f"reverse {l + 1} {r + 1}")
        return

    print("no")

if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    almostSorted(arr)
