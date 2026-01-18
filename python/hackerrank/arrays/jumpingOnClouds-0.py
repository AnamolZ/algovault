
def jumpingOnClouds(c):
    """
    Calculates the minimum number of jumps required to reach the last cloud.

    The game starts at cloud 0 and the goal is to reach cloud n-1. A player can 
    jump either 1 or 2 clouds away as long as the destination cloud is 'safe' 
    (represented by 0). 'Thunderhead' clouds (represented by 1) must be avoided.

    Args:
        c (list[int]): A list of binary integers where 0 represents a safe cloud 
            and 1 represents a thunderhead cloud.

    Returns:
        int: The minimum number of jumps needed to complete the game.
    """
    count = 0
    current_idx = 0
    clength = len(c)

    while current_idx < clength - 1:
        if current_idx + 2 < clength and c[current_idx + 2] == 0:
            current_idx += 2
        else:
            current_idx += 1
        count += 1

    return count   

def main():
    """
    Handles input consumption, function execution, and output printing.
    
    Reads the number of clouds and the configuration of clouds from standard input,
    validates the input, and prints the result of jumpingOnClouds.
    """
    n = int(input().strip())

    c = list(map(int, input().rstrip().split()))

    if n != len(c):
        raise ValueError("Length of c should be equal to n")

    print(jumpingOnClouds(c))

if __name__ == '__main__':
    main()