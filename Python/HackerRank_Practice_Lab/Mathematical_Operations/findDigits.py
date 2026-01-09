
def findDigits(n):
    """
    Counts the number of digits in the integer 'n' that are divisors of 'n'.

    A digit is a divisor if 'n % digit == 0'. Digits equal to 0 are ignored.

    Args:
        n (int): The integer to analyze.

    Returns:
        int: The number of digits in 'n' that are divisors of 'n'.
    """
    n_str = str(n)
    c = 0
    
    for i in n_str:
        digit = int(i)
        
        if digit != 0 and n % digit == 0:
            c += 1
    return c

def main():
    """
    Main entry point for the script.
    Reads the number of test cases and processes each using findDigits.
    """
    t = int(input().strip())

    for t_itr in range(t):
        
        n = int(input().strip())
        print(findDigits(n))

if __name__ == '__main__':
    main()