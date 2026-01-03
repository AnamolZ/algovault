
def angryProfessor(k, a):
    """
    Determines if a class is cancelled based on arrival times.

    Args:
        k (int): The threshold number of students required for the class to go on.
        a (list[int]): A list of integers representing the arrival times of students.
            A value <= 0 represents early or on-time arrival.
            A value > 0 represents late arrival.

    Returns:
        str: "YES" if the class is cancelled (fewer than k students arrived on time),
             "NO" if the class is NOT cancelled (k or more students arrived on time).
    """
    return "NO" if sum(1 for x in a if x <= 0) >= k else "YES"

def main():
    """
    Reads input from stdin, processes each test case, and prints the result.
    """
    t = int(input().strip())

    for t_itr in range(t):
        n, k = map(int, input().rstrip().split())

        a = list(map(int, input().rstrip().split()))

        if len(a) != n:
            raise ValueError("Invalid input: Number of students does not match the number of arrival times.")

        print(angryProfessor(k, a))

if __name__ == '__main__':
    main()