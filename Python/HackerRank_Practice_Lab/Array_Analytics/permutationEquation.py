
def permutationEquation(a):
    return [a.index(a.index(a.index(i) + 1) + 1) + 1 for i in a]

def main():
    n = int(input().strip())
    p = list(map(int, input().rstrip().split()))

    if n != len(p):
        raise ValueError("Length of array does not match the value of n")

    print(*permutationEquation(p), sep="\n")

if __name__ == '__main__':
    main()