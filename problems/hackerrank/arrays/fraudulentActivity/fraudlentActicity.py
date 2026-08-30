#!/bin/python3

import math
import os
import random
import re
import sys
import statistics

def activityNotifications(expenditure, d):
    """
    Counts the number of fraud notifications sent to a client.

    A notification is sent on day `i` (where `i >= d`) if the expenditure on day `i`
    is greater than or equal to 2 * median of the trailing `d` days' expenditures.
    
    Since expenditures are integers between 0 and 200, a sliding window frequency
    array (counting sort approach) is used to find the median in O(1) (O(MAX_VAL))
    time per day instead of re-sorting the window in O(d log d).

    Args:
        expenditure (list of int): Daily expenditure amounts (0 <= expenditure[i] <= 200).
        d (int): Number of trailing days to consider for computing the median.

    Returns:
        int: Total number of notifications sent.
    """
    freq = [0] * 201
    notifications = 0

    for x in expenditure[:d]:
        freq[x] += 1

    def twice_median():
        count = 0

        if d % 2:
            target = d // 2 + 1

            for value in range(201):
                count += freq[value]

                if count >= target:
                    return value * 2

        else:
            target1 = d // 2
            target2 = target1 + 1
            first = None

            for value in range(201):
                count += freq[value]

                if first is None and count >= target1:
                    first = value

                if count >= target2:
                    return first + value

    for i in range(d, len(expenditure)):
        if expenditure[i] >= twice_median():
            notifications += 1

        freq[expenditure[i - d]] -= 1
        freq[expenditure[i]] += 1

    return notifications

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    d = int(first_multiple_input[1])

    expenditure = list(map(int, input().rstrip().split()))

    result = activityNotifications(expenditure, d)

    fptr.write(str(result) + '\n')

    fptr.close()