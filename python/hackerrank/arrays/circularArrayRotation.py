
def circularArrayRotation(a, k, queries):
    k %= len(a)
    r = a[-k:] + a[:-k]
    return [r[i] for i in queries]

def main():
    n, k, q = map(int, input().split())
    a = list(map(int, input().split()))
    queries = [int(input()) for _ in range(q)]
    print(*circularArrayRotation(a, k, queries), sep="\n")

if __name__ == '__main__':
    main()
