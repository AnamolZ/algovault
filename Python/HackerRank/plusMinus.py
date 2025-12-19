
from xml.dom import IndexSizeErr
from typing import List

def plusMinus(arr: List[int], n: int) -> int:
    """
    Calculates and prints the ratios of positive, negative, and zero elements 
    in an array relative to its total size.

    Each ratio is printed on a new line. According to the problem constraints, 
    the output should ideally be formatted to 6 decimal places.

    Args:
        arr (List[int]): An array of integers.
        n (int): The size of the array.

    Example:
        Input: arr = [1, 1, 0, -1, -1], n = 5
        Output:
            0.400000
            0.400000
            0.200000
    """
    positive = 0 
    negative = 0
    zero = 0

    for i in arr:
        if i > 0:
            positive += 1
        elif i < 0:
            negative += 1
        else:
            zero += 1

    # Note: To match the 6-decimal requirement exactly, 
    # you could use f"{val:.6f}"
    print(positive/n, '\n', negative/n, '\n', zero/n)

def main():
    """
    Main execution block to handle input and error cases for the plusMinus challenge.

    Reads the array size (n) and the space-separated integers, validates 
    the input length, and calls the plusMinus function.
    """
    try:
        n = int(input().strip())
        arr = [0]*n
        for i, val in enumerate(map(int, input().strip().split())):
            arr[i] = val
        if len(arr) != n:
            raise IndexSizeErr
        plusMinus(arr, n)
    except IndexSizeErr:
        print("Index out of range")
    except ValueError:
        print("Invalid input")
    except Exception as e:
        print(e)
        
if __name__ == "__main__":
    main()