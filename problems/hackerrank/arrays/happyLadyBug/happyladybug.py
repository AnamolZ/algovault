#!/bin/python3

import math
import os
import random
import re
import sys
from collections import Counter

def happyLadybugs(b):
    """
    Determines whether all the ladybugs on the board can be made happy.
    A ladybug is happy if there is at least one other ladybug of the same color adjacent to it.
    If there is at least one empty space ('_'), we can rearrange the ladybugs arbitrarily.
    
    Args:
        b (str): A string representing the board, where '_' is an empty space and 
                 uppercase English letters represent colors of ladybugs.
                 
    Returns:
        str: "YES" if all ladybugs can be made happy, otherwise "NO".
    """
    counts = Counter(b)
    
    # If there's a color with exactly 1 ladybug, it can never be happy
    for char, count in counts.items():
        if char != '_' and count == 1:
            return "NO"
            
    # If there are no empty cells, we must check if they are already happy
    if counts.get('_', 0) == 0:
        n = len(b)
        for i in range(n):
            if i > 0 and b[i] == b[i-1]:
                continue
            if i < n - 1 and b[i] == b[i+1]:
                continue
            return "NO"
            
    return "YES"

if __name__ == '__main__':
    if 'OUTPUT_PATH' in os.environ:
        fptr = open(os.environ['OUTPUT_PATH'], 'w')
    else:
        fptr = sys.stdout

    g = int(input().strip())

    for g_itr in range(g):
        n = int(input().strip())

        b = input()

        result = happyLadybugs(b)

        fptr.write(result + '\n')

    if 'OUTPUT_PATH' in os.environ:
        fptr.close()
