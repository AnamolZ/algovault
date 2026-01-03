
def beautifulDays(i, j, k):
    c = 0
    for i in range(i, j + 1):
        if (i - int(str(i)[::-1])) % k == 0:
            c += 1
    return c

def main():
    i, j, k = map(int, input().split())
    print(beautifulDays(i, j, k))

if __name__ == '__main__':
    main()