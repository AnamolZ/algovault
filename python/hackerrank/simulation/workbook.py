
def workbook(n, k, arr):
    """
    Calculates the number of special problems in Lisa's workbook.
    A problem is considered "special" if its index (within a chapter) 
    is the same as the page number it's located on.
    
    Args:
        n (int): The number of chapters.
        k (int): The maximum number of problems per page.
        arr (list[int]): An array where arr[i] denotes the number of problems in the (i+1)-th chapter.
        
    Returns:
        int: The total number of special problems in the workbook.
    """
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