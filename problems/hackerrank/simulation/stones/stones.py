import sys

def stones(n, a, b):
    res = {(i * b + (n - 1 - i) * a) for i in range(n)}
    return sorted(res)

def main():
    it = iter(map(int, sys.stdin.read().split()))
    try:
        for _ in range(next(it)):
            n, a, b = next(it), next(it), next(it)
            print(*stones(n, a, b))
    except StopIteration:
        pass

if __name__ == "__main__":
    main()