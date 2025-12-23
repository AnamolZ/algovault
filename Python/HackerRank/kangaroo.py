import sys

def kangaroo(x1, v1, x2, v2):
    """
    Determines if two kangaroos will land at the same location at the same time.

    The first kangaroo starts at location x1 and moves v1 meters per jump.
    The second kangaroo starts at location x2 and moves v2 meters per jump.
    
    Based on problem constraints, it is assumed that x1 < x2 initially.

    Parameters:
    x1 (int): Starting position of kangaroo 1
    v1 (int): Jump distance (rate) of kangaroo 1
    x2 (int): Starting position of kangaroo 2
    v2 (int): Jump distance (rate) of kangaroo 2

    Returns:
    str: 'YES' if they meet at the same location at the same time, otherwise 'NO'.
    """
    if v1 <= v2:
        return 'NO'
    
    if (x2 - x1) % (v1 - v2) == 0:
        return 'YES'
    
    return 'NO'

def main():
    """
    Reads four space-separated integers from stdin and prints the result.
    """
    try:
        user_input = sys.stdin.readline().rstrip().split()
        
        print(kangaroo(int(user_input[0]), int(user_input[1]), int(user_input[2]), int(user_input[3])))
        
    except (ValueError, IndexError):
        pass

if __name__ == '__main__':
    main()