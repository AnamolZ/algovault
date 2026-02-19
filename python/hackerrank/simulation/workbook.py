
def workbook(n, k, arr):
    page = 1
    special = 0

    for problems in arr:
        num_pages = (problems + k - 1) // k

        for p in range(num_pages):
            start = p * k + 1
            end = min(start + k - 1, problems)

            if start <= page <= end:
                special += 1

            page += 1

    return special

def main():
    n, k = map(int, input().rstrip().split())
    arr = list(map(int, input().rstrip().split()))
    print(workbook(n, k, arr))

if __name__ == "__main__":
    main()