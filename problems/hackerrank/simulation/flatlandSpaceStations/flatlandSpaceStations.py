
def flatlandSpaceStations(n, m, c):
    """
    Calculate the maximum distance from any city to its nearest space station.

    Args:
        n (int): The number of cities.
        m (int): The number of space stations.
        c (list of int): The indices of cities that have a space station.

    Returns:
        int: The maximum distance any city is from a space station.
    """
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