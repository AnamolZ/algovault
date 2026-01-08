
def jumpingOnClouds(c, k):
    e = 100
    i = 0

    while True:
        i = (i + k) % len(c)
        e -= 1
        if c[i] == 1:
            e -= 2

        if i == 0:
            break

    return e

def main():
    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    c = list(map(int, input().rstrip().split()))

    if n != len(c):
        raise ValueError("Length of c should be equal to n")

    print(jumpingOnClouds(c, k))

if __name__ == '__main__':
    main()