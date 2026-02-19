
def serviceLane():
    """
    Solves the 'Service Lane' problem.
    Reads the length of the freeway and the number of test cases,
    then reads an array capturing the width of the service lane at each segment.
    For each test case, reads entry and exit indices and prints the maximum 
    vehicle width that can pass through that segment of the service lane.
    """
    n, t = map(int, input().split())
    width = list(map(int, input().split()))

    for _ in range(t):
        start, end = map(int, input().split())
        print(min(width[i] for i in range(start, end + 1)))

if __name__ == "__main__":
    serviceLane()