
def kaprekarNumbers(p, q):
    """
    Finds and prints all modified Kaprekar numbers in the range [p, q] inclusive.
    
    A modified Kaprekar number is a positive integer n such that when it is squared, 
    the sum of the two parts of the square (where the right part has the same number 
    of digits as n) equals n.
    
    Args:
        p (int): The lower integer limit.
        q (int): The upper integer limit.
        
    Returns:
        None: Prints the Kaprekar numbers as a space-separated string, or 
              "INVALID RANGE" if none are found.
    """
    results = []
    for n in range(p, q + 1):
        d = len(str(n))
        square, divisor = n * n, 10**d
        
        right, left = square % divisor, square // divisor
        
        if left + right == n:
            results.append(n)
            
    if results:
        print(*(results))
    else:
        print("INVALID RANGE")

def main():
    try:
        p = int(input().strip())
        q = int(input().strip())
        kaprekarNumbers(p, q)
    except EOFError:
        pass

if __name__ == '__main__':
    main()