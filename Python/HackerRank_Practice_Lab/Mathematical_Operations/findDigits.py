
def findDigits(n):
    n_str = str(n)
    c = 0
    
    for i in n_str:
        digit = int(i)
        
        if digit != 0 and n % digit == 0:
            c += 1
    return c

def main():
    t = int(input().strip())

    for t_itr in range(t):
        
        n = int(input().strip())
        print(findDigits(n))

if __name__ == '__main__':
    main()