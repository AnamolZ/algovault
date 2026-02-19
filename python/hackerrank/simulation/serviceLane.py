
def serviceLane():
    n, t = map(int, input().split())
    width = list(map(int, input().split()))

    for _ in range(t):
        start, end = map(int, input().split())
        print(min(width[i] for i in range(start, end + 1)))

if __name__ == "__main__":
    serviceLane()