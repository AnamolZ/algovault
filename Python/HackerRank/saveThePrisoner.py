
def saveThePrisoner(n, m, s):
    return ((s + m - 2) % n) + 1

def main():
    n, m, s = map(int, input().split())
    print(saveThePrisoner(n, m, s))

if __name__ == '__main__':
    main()