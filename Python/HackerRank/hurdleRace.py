
def hurdleRace(k, h):
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