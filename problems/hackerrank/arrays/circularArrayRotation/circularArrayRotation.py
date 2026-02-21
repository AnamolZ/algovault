
def circularArrayRotation(a, k, queries):
    """
    Returns values of the array at specified indices after k right rotations.

    Args:
        a (list of int): the array to mathematically rotate.
        k (int): rotation count.
        queries (list of int): indices to query.

    Returns:
        list of int: values at queried indices.
    """
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
