
def jumpingOnCloudsMin(c):
    """
    Calculates the minimum number of jumps required to reach the last cloud.

    The player starts at the first cloud (index 0) and goal is to reach the last 
    cloud (index n-1). The player can jump either 1 or 2 clouds at a time, 
    but must only land on safe clouds (represented by 0).

    Args:
        c (list[int]): A list of clouds where 0 is safe and 1 is a thunderhead.

    Returns:
        int: The minimum number of jumps required.

    Example:
        Input: [0, 0, 1, 0, 0, 1, 0]
        Output: 4
    """
    count = 0
    current_idx = 0
    clength = len(c)

    while current_idx < clength - 1:
        # Check if a jump of 2 is possible and lands on a safe cloud
        if current_idx + 2 < clength and c[current_idx + 2] == 0:
            current_idx += 2
        else:
            current_idx += 1
        count += 1

    return count

def main():
    """
    Handles input consumption and output for the Jumping on Clouds problem.
    """
    try:
        n = int(input().strip())
        c = list(map(int, input().rstrip().split()))

        if n != len(c):
            raise ValueError("The number of clouds provided does not match n.")

        result = jumpingOnCloudsMin(c)
        print(result)
    except EOFError:
        pass
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    main()
