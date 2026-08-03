#!/bin/python3
# Without Library

import os

def strangeCounter(t):
    """
    Finds the value at time t for the strange counter.
    
    Args:
        t (int): The time at which to find the counter value.
        
    Returns:
        int: The value of the counter at time t.
    """
    cycle = 3
    while t > cycle:
        t -= cycle
        cycle <<= 1
    return cycle - t + 1

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    result = strangeCounter(t)

    fptr.write(str(result) + '\n')

    fptr.close()


#!/bin/python3
# With Library

import os
from math import log2

def strangeCounter(t):
    """
    Finds the value at time t for the strange counter using log2.
    
    Args:
        t (int): The time at which to find the counter value.
        
    Returns:
        int: The value of the counter at time t.
    """
    k = int(log2((t + 2) / 3))
    return (3 << k) - (t - ((3 << k) - 2))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    result = strangeCounter(t)

    fptr.write(str(result) + '\n')

    fptr.close()