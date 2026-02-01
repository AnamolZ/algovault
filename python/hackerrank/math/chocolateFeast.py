
def chocolateFeast(n, c, m):
    te = n // c
    cw = te
    while cw >= m:
        nb = cw // m
        te = te + nb
        cw = nb + (cw % m)
    return te

def main():
    t = int(input())
    for _ in t:
        n, c, m = map(int, input().rstrip().split())
        print(chocolateFeast(n, c, m))

if __name__ == "__main__":
    main()