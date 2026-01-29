
def minimumDistances(arr):
    last_seen = {}
    min_dist = float('inf')

    for idx, value in enumerate(arr):
        if value in last_seen:
            distance = idx - last_seen[value]
            if distance < min_dist:
                min_dist = distance

        last_seen[value] = idx

    return min_dist if min_dist != float('inf') else -1

def main():
    n = int(input().strip())

    a = list(map(int, input().rstrip().split()))
    
    if n != len(a):
        raise ValueError("The length of a should be equal to n")

    print(minimumDistances(a))

if __name__ == "__main__":
    main()