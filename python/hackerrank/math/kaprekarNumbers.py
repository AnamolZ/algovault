
def kaprekarNumbers(p, q):
    results = []
    for n in range(p, q + 1):
        d = len(str(n))
        square, divisor = n * n, 10**d
        
        right, left = square % divisor, square // divisor
        
        if left + right == n:
            results.append(n)
            
    if results:
        print(*(results))
    else:
        print("INVALID RANGE")

def main():
    try:
        p = int(input().strip())
        q = int(input().strip())
        kaprekarNumbers(p, q)
    except EOFError:
        pass

if __name__ == '__main__':
    main()