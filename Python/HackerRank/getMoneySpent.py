
def getMoneySpent(k, d, b):
    ar = [[x+y for y in d if x+y <= b] for x in k]
    return max(max(ar))

def getMoneySpentMergeSort(k, d, b):
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
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
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