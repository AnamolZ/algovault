
def staircase(n: int):
    """
    Prints a right-aligned staircase of size n using # symbols and spaces.

    The staircase has a base and height equal to n. Each line is composed 
    of (n - i - 1) spaces followed by (i + 1) '#' symbols, ensuring the 
    last line has no leading spaces.

    Args:
        n (int): An integer denoting the size of the staircase.

    Example:
        Input: n = 4
        Output:
           #
          ##
         ###
        ####
    
    Constraints:
        0 < n <= 100
    """
    for i in range(n):
        # Calculate spaces and symbols for right-alignment
        print(" "*(n-i-1) + "#"*(i+1))

def main():
    """
    Main execution block to read the staircase size from standard input.

    Reads a single integer n and calls the staircase function to print 
    the formatted pattern.
    """
    try:
        # Read n from standard input and remove any extra whitespace
        n = int(input().strip())
        staircase(n)
    except Exception as e:
        print(e)
        
if __name__ == "__main__":
    main()