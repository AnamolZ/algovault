
def beautifulDays(i, j, k):
    """
    Counts the number of beautiful days in a range.

    A day is beautiful if the absolute difference between the day number and 
    its reverse is evenly divisible by k.

    Args:
        i (int): The starting day number.
        j (int): The ending day number.
        k (int): The divisor.

    Returns:
        int: The number of beautiful days in the range [i, j].
    """
    c = 0
    for i in range(i, j + 1):
        if (i - int(str(i)[::-1])) % k == 0:
            c += 1
    return c

def main():
    """
    Reads range and divisor from stdin and prints the count of beautiful days.
    """
    i, j, k = map(int, input().split())
    print(beautifulDays(i, j, k))

if __name__ == '__main__':
    main()