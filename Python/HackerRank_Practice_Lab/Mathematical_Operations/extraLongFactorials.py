
def extraLongFactorials(n):
    """
    Calculates the factorial of a large integer 'n'.

    Python handles arbitrarily large integers by default, allowing for 
    the calculation of factorials for large values of 'n'.

    Args:
        n (int): The integer to calculate the factorial for.

    Returns:
        int: The factorial of 'n'.
    """

    if n == 1:
        return 1
    return n * extraLongFactorials(n - 1)

def main():
    """
    Main entry point for the script.
    Reads an integer from input and prints its factorial using extraLongFactorials.
    """

    n = int(input().strip())
    print(extraLongFactorials(n))

if __name__ == '__main__':
    main()