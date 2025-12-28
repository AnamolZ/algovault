
def getMoneySpent(k, d, b):
    """
    Find the maximum amount of money that can be spent on one keyboard and one drive
    without exceeding the budget using a brute-force approach.

    Parameters:
    k (list of int): Prices of available keyboards.
    d (list of int): Prices of available USB drives.
    b (int): Budget constraint.

    Returns:
    int: Maximum sum of one keyboard and one drive that does not exceed the budget.

    Notes:
    - Time complexity: O(n * m), where n = len(k) and m = len(d).
    - May be inefficient for large input sizes due to nested loops.
    """
    ar = [[x+y for y in d if x+y <= b] for x in k]
    return max(max(ar))


def getMoneySpentMergeSort(k, d, b):
    """
    Find the maximum amount of money that can be spent on one keyboard and one drive
    without exceeding the budget using sorting and the two-pointer technique.

    Parameters:
    k (list of int): Prices of available keyboards.
    d (list of int): Prices of available USB drives.
    b (int): Budget constraint.

    Returns:
    int: Maximum sum of one keyboard and one drive that does not exceed the budget.
         Returns -1 if no combination is affordable.

    Notes:
    - Sorts keyboards in ascending order and drives in descending order.
    - Uses a two-pointer traversal to efficiently find the best combination.
    - Time complexity: O(n log n + m log m), where n = len(k) and m = len(d).
    - Space complexity: O(n + m) due to merge_sort.
    """
    ar_k = merge_sort(k)
    ar_d = merge_sort(d)[::-1]
    
    max_spent = -1
    i = 0
    j = 0
    
    while i < len(ar_k) and j < len(ar_d):
        current_total = ar_k[i] + ar_d[j]
        
        if current_total <= b:
            if current_total > max_spent:
                max_spent = current_total
            i += 1
        else:
            j += 1
            
    return max_spent


def merge_sort(arr):
    """
    Sort an array using the merge sort algorithm.

    Parameters:
    arr (list of int): List of integers to be sorted.

    Returns:
    list of int: Sorted list in ascending order.

    Notes:
    - Merge sort is a divide-and-conquer algorithm.
    - Time complexity: O(n log n)
    - Space complexity: O(n)
    """
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)


def merge(left, right):
    """
    Merge two sorted lists into a single sorted list.

    Parameters:
    left (list of int): Sorted list.
    right (list of int): Sorted list.

    Returns:
    list of int: Combined sorted list in ascending order.
    """
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result


def main():
    """
    Main function to read input and compute the maximum money that can be spent.
    
    Input:
    - First line: Three integers b, n, m (budget, number of keyboards, number of drives)
    - Second line: n space-separated integers (keyboard prices)
    - Third line: m space-separated integers (drive prices)
    
    Output:
    - Maximum money spent using brute-force approach
    - Maximum money spent using merge sort + two-pointer approach
    """
    b, n, m = map(int, input().split())
    k = list(map(int, input().rstrip().split()))
    d = list(map(int, input().rstrip().split()))

    if len(k) != n:
        raise ValueError("Invalid input: Mismatch between n number of keyboards and path length.")

    if len(d) != m:
        raise ValueError("Invalid input: Mismatch between m number of drives and path length.")

    print(getMoneySpent(k, d, b))
    print(getMoneySpentMergeSort(k, d, b))


if __name__ == "__main__":
    main()