
def pickingNumbers(a):
    frequency = [0] * 101
    for x in a:
        frequency[x] += 1
    
    max_count = 0
    for i in range(1, 101):
        max_count = max(max_count, frequency[i] + frequency[i-1])
        
    return max_count

def main():
    s = int(input())
    arr = list(map(int, input().rstrip().split()))

    if s != len(arr):
        raise ValueError
    
    print(pickingNumbers(arr))

if __name__ == "__main__":
    main()