
def extraLongFactorials(n):
    if n == 1:
        return 1
    return n * extraLongFactorials(n - 1)

def main():
    n = int(input().strip())
    print(extraLongFactorials(n))

if __name__ == '__main__':
    main()