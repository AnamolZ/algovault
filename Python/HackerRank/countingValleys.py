
def countingValleys(p):
    """
    Counts the number of valleys in a hike.

    A valley is defined as a sequence of steps below sea level,
    starting with a step down from sea level and ending with a step
    up to sea level.

    Parameters:
        p (list of str): A list representing the path taken during the hike,
                         where 'U' indicates a step up and 'D' indicates
                         a step down.

    Returns:
        int: The total number of valleys traversed.
    """
    c, s = 0, 0
    for i in p:
        if i == 'D':
            c -= 1
        if i == 'U':
            c += 1
        if c == 0 and i == 'U':
            s += 1
    return s

def main():
    """
    Reads input from the user, validates it, and prints the number of valleys.

    The function expects:
    - An integer representing the number of steps.
    - A string representing the path of the hike.

    If the number of steps does not match the length of the path,
    a ValueError is raised and handled.
    """
    try:
        s = int(input())
        p = list(map(str, list(input())))

        if len(p) != s:
            raise ValueError("Invalid input: Mismatch between step count and path length.")

        print(countingValleys(p))
    except ValueError as err:
        print(err)

if __name__ == "__main__":
    main()