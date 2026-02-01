
def howManyGames(p, d, m, s):
    count = 0
    while s >= p:
        s -= p
        count += 1
        p = max(m, p - d)
    return count

def main():
    p, d, m, s = map(int, input().rstrip().split())
    print(howManyGames(p, d, m, s))

if __name__ == '__main__':
    main()