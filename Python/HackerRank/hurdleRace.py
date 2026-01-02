
def hurdleRace(k, h):
    """
    Calculates the minimum doses of potion needed to jump over all hurdles.
    
    Each dose of potion increases the maximum height the character can jump by 1 unit.

    Args:
        k (int): The maximum height the character can jump without potion.
        height (list[int]): A list of hurdle heights.

    Returns:
        int: The minimum number of doses needed.
    """
    max_hurdle = max(h)
    return max(0, max_hurdle - k)

def main():
    try:
        n, k = map(int, input().split())
        h = list(map(int, input().rstrip().split()))
        
        if n != len(h):
            raise ValueError("Input hurdle count does not match the actual number of hurdles provided.")
        
        print(hurdleRace(k, h))

    except (EOFError, ValueError) as e:
        if isinstance(e, ValueError):
            print(f"Error: {e}")

if __name__ == "__main__":
    main()