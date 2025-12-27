
def sockMerchant(ar: list[int]) -> int:
    b = set()
    p = 0

    for i in ar:
        if i in b:
            p += 1
            b.discard(i)
        else:
            b.add(i)
    return p

def main():
    try:
        n = int(input())
        ar = list(map(int, input().rstrip().split()))

        if len(ar) != n:
            raise ValueError(f"Expected {n} numbers, but got {len(ar)}")
    
        print(sockMerchant(ar))

    except ValueError:
        raise ValueError("Must be integers")

if __name__ == "__main__":
    main()