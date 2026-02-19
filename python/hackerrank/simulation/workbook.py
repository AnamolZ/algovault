
def workbook(n, k, arr):
    page_count = 1
    special_problems = 0
    for i in arr:
        for j in range(1, i+1):
            if j == page_count:
                special_problems += 1
            if j % k == 0:
                page_count += 1
    return special_problems

def main():
    n, k = map(int, input().rstrip().split())
    arr = list(map(int, input().rstrip().split()))
    print(workbook(n, k, arr))

if __name__ == "__main__":
    main()