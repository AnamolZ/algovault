import numpy as np

def bonAppetit(bill: list[int], k: int, b: int):
    """
    Determines if a restaurant bill was split fairly between two people.

    The logic calculates the total cost of all items except for the item at index k,
    which one person did not consume. It then compares the actual amount charged (b)
    to the calculated fair share.

    Args:
        bill (list[int]): A list of integers representing the cost of each item ordered.
        k (int): The zero-based index of the item that was not shared.
        b (int): The amount of money that was charged for the share of the bill.

    Returns:
        Union[str, int]: Returns "Bon Appetit" if the person was charged the correct amount.
                         Otherwise, returns the integer amount that must be refunded.
    """
    if isinstance(k, int) and 0 <= k < len(bill):
        ar_sum = sum_(bill[:k] + bill[k+1:])
        anna_share = ar_sum // 2
        
        if anna_share == b:
            return "Bon Appetit"
        else:
            return b - anna_share

def sum_(ar: list[int]) -> int:
    """
    Calculates the sum of all elements in a provided list of integers.

    Args:
        ar (list[int]): The list of integers to be summed.

    Returns:
        int: The resulting total sum of the array elements.
    """
    return int(np.sum(ar))

def main():
    """
    Processes input data and prints the result of the bill division calculation.

    Data Constraints handled:
    - 2 <= n <= 10^5 (Number of items)
    - 0 <= k < n (Index of item not eaten)
    - 0 <= bill[i] <= 10^4 (Cost of an item)
    - 0 <= b <= sum of bill (Amount charged)
    """
    try:
        line1 = input().rstrip().split()
        if not line1:
            return
        n, k = map(int, line1)
        
        bill = list(map(int, input().rstrip().split()))
        b = int(input().strip())

        if len(bill) != n:
            raise ValueError("Length of bill list does not match n")

        print(bonAppetit(bill, k, b))

    except ValueError:
        raise ValueError("Invalid input")

if __name__ == '__main__':
    main()