
def chocolateFeast(n, c, m):
    # Initial chocolates bought with money
    chocolates = n // c
    wrappers = chocolates
    total_eaten = chocolates
    
    # Trade in wrappers for more chocolates
    while wrappers >= m:
        new_chocolates = wrappers // m
        total_eaten += new_chocolates
        # New wrappers = remainder from trade + wrappers from new chocolates
        wrappers = (wrappers % m) + new_chocolates
        
    return total_eaten

def main():
    t = int(input())
    for _ in range(t):
        n, c, m = map(int, input().rstrip().split())
        print(chocolateFeast(n, c, m))

if __name__ == "__main__":
    main()