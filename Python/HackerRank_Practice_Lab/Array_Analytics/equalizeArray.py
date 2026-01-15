
from collections import Counter

def equalizeArray(arr):
    if not arr: return 0
    counts = Counter(arr)
    return len(arr) - counts[max(counts, key=counts.get)]

def main():
    n = int(input().strip())
    arr = list(map(int, input().rstrip().split()))

    if n != len(arr):
        raise ValueError(
            f"Invalid input: expected {n} elements, got {len(arr)}"
        )

    print(equalizeArray(arr))

if __name__ == '__main__':
    main()