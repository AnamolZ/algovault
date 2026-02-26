import sys

def stones(n, a, b):
    """
    Calculates all possible values of the last stone after n stones.
    
    Manasa reaches the n-th stone by taking n-1 steps. Each step
    can be of length 'a' or 'b'. This function finds all unique
    possible values of the final stone.
    
    Args:
        n (int): Total number of stones.
        a (int): Possible step length 1.
        b (int): Possible step length 2.
        
    Returns:
        list: Sorted list of unique possible values for the n-th stone.
    """
    # Mathematical Model: If we take 'i' steps of type 'b', 
    # we must take '(n - 1 - i)' steps of type 'a'.
    # We use a set to automatically handle cases where a == b.
    res = {(i * b + (n - 1 - i) * a) for i in range(n)}
    return sorted(res)

def main():
    """
    Main execution block to handle input/output for HackerRank.
    Reads the number of test cases and parameters for each case.
    """
    it = iter(map(int, sys.stdin.read().split()))
    try:
        t = next(it)
        for _ in range(t):
            n, a, b = next(it), next(it), next(it)
            print(*stones(n, a, b))
    except StopIteration:
        pass

if __name__ == "__main__":
    main()