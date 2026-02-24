
def permutationEquation(p):
    """
    Solves the permutation equation by finding the index y such that p(p(y)) == x for each x from 1 to n.
    
    Args:
        p (list[int]): A list of n integers where each integer from 1 to n appears exactly once.
        
    Returns:
        list[int]: A list of integers representing the values of y for each x from 1 to n.
    """
    n = len(p)
    result = []
    for x in range(1, n + 1):
        # Find index where p[i] == x
        p_inv_x = p.index(x) + 1
        # Find index where p[i] == p_inv_x
        p_inv_p_inv_x = p.index(p_inv_x) + 1
        result.append(p_inv_p_inv_x)
    return result

def main():
    """
    Handles input and output for the permutation equation solver.
    Expects the number of elements followed by the space-separated elements of the permutation.
    """
    n = int(input().strip())
    p = list(map(int, input().rstrip().split()))

    if n != len(p):
        raise ValueError("Length of array does not match the value of n")

    print(*permutationEquation(p), sep="\n")

if __name__ == '__main__':
    main()