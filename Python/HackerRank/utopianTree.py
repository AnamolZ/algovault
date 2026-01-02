
def utopianTree(n):
    """
    Calculates the height of the Utopian Tree after n growth cycles.
    
    Args:
        n (int): The number of cycles to simulate.
        
    Returns:
        int: The resulting height of the tree.
    """
    height = 1
    for cycle in range(1, n + 1):
        if cycle % 2 == 1:
            height *= 2
        else:
            height += 1
    return height

def utopianTree(n):
    """
    Calculates the height of the Utopian Tree after n growth cycles using a formula.

    Args:
        n (int): The number of cycles to simulate.

    Returns:
        int: The resulting height of the tree.
    """
    if n % 2 == 0:
        return int(2**(n // 2 + 1) - 1)
    else:
        return int(2**((n + 1) // 2 + 1) - 2)

def main():
    """
    Main entry point for reading test cases and printing Utopian Tree heights.
    """
    try:
        t_input = input().strip()
        if not t_input:
            return
        t = int(t_input)
        for _ in range(t):
            n_input = input().strip()
            if n_input:
                n = int(n_input)
                print(utopianTree(n))
    except (EOFError, ValueError):
        pass

if __name__ == '__main__':
    main()