
def flatlandSpaceStations(n, m, c):
    c.sort()
    max_dist = c[0]
    max_dist = max(max_dist, (n - 1) - c[-1])

    for i in range(1, m):
        max_dist = max(max_dist, (c[i] - c[i-1]) // 2)
    
    return max_dist
    
def main():
    n, m = map(int, input().split())
    c = list(map(int, input().rstrip().split()))
    print(flatlandSpaceStations(n, m, c))

if __name__ == "__main__":
    main()