from typing import List

def findMax(arr: List[int]) -> int:
    """
    Finds the maximum value in a list of integers using a linear scan.

    Args:
        arr (List[int]): A list of integers to be searched.

    Returns:
        int: The highest integer value found in the list.
    """
    max_n = arr[0]
    for x in arr:
        if x > max_n:
            max_n = x
    return max_n

def birthdayCakeCandles(arr: List[int]) -> int:
    """
    Calculates the frequency of the tallest candles in the list.

    This function first identifies the maximum height using findMax and then
    iterates through the list to count how many candles match that height.

    Args:
        arr (List[int]): A list of integers representing candle heights.

    Returns:
        int: The count of candles that have the maximum height.

    Example:
        birthdayCakeCandles([4, 4, 1, 3])
        response: 2
        # The maximum height is 4, and it occurs twice.
    """
    max_n = findMax(arr)
    count = 0
    for x in arr:
        if x == max_n:
            count += 1
    return count

def main():
    """
    Reads input from the console, validates the data, and prints the 
    result of the birthdayCakeCandles function.

    Expected Input:
        - Line 1: Integer n (number of candles)
        - Line 2: n space-separated integers (candle heights)
    """
    try:
        number = int(input().strip())
        arr = [0] * number
        for idx, num in enumerate(list(map(int, input().rstrip().split()))):
            arr[idx] = num
        if len(arr) != number:
            raise Exception("Array length does not match the number of elements")
        print(birthdayCakeCandles(arr))
    except Exception as e:
        print("Exception: ", e)
        
if __name__ == "__main__":
    main()