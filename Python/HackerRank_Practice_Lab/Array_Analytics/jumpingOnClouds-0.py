
def jumpingOnClouds(c):
    count = 0
    current_idx = 0
    clength = len(c)

    while current_idx < clength - 1:
        if current_idx + 2 < clength and c[current_idx + 2] == 0:
            current_idx += 2
        else:
            current_idx += 1
        count += 1

    return count   

def main():
    n = int(input().strip())

    c = list(map(int, input().rstrip().split()))

    if n != len(c):
        raise ValueError("Length of c should be equal to n")

    print(jumpingOnClouds(c))

if __name__ == '__main__':
    main()