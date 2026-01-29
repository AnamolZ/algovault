
from collections import Counter

def beautifulTriplets(arr, d):
    counts = Counter(arr)
    total = 0
    for x in counts:
        if (x + d) in counts and (x + 2 * d) in counts:
            total += counts[x] * counts[x + d] * counts[x + 2 * d]
    return total

def main():
    try:
        n, d = map(int, input().split())
        arr = list(map(int, input().split()))
        if n != len(arr):
            raise ValueError(f"Expected {n} elements, but got {len(arr)}")
        result = beautifulTriplets(arr, d)
        print(result)
    except (EOFError, ValueError) as e:
        print(f"Input Error: {e}")

if __name__ == '__main__':
    main()