
def jumpingOnClouds(c, k):
    """
    Calculates the energy level after completing a circular path on clouds.
    
    Args:
        c (list[int]): An array of integers representing clouds (0 for normal, 1 for thunderhead).
        k (int): The jump distance.
        
    Returns:
        int: The remaining energy after returning to the starting position.
    """
    e = 100
    i = 0

    while True:
        i = (i + k) % len(c)
        e -= 1
        if c[i] == 1:
            e -= 2

        if i == 0:
            break

    return e

def main():
    """
    Handles input and output for the Jumping on the Clouds: Revisited solver.
    Expects n and k followed by the cloud configuration array.
    """
    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    c = list(map(int, input().rstrip().split()))

    if n != len(c):
        raise ValueError("Length of c should be equal to n")

    print(jumpingOnClouds(c, k))

if __name__ == '__main__':
    main()
