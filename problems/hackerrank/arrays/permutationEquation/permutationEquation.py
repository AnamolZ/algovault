
def permutationEquation(a):
    """
    Solves the permutation equation by finding the index of the index of each value.
    
    Args:
        a (list[int]): A list of n integers where each integer from 1 to n appears exactly once.
        
    Returns:
        list[int]: A list of integers representing the values of y for each x from 1 to n.
    """
    return [a.index(a.index(a.index(i) + 1) + 1) + 1 for i in a]

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