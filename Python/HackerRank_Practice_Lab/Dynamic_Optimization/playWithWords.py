import sys

def solve():
    s = "eeegeeksforskeeggeeks"
    n = len(s)
    
    dp = [[0] * n for _ in range(n)]
    
    for i in range(n - 1, -1, -1):
        dp[i][i] = 1
        for j in range(i + 1, n):
            if s[i] == s[j]:
                dp[i][j] = dp[i + 1][j - 1] + 2
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

    max_product = 0
    for i in range(n - 1):
        product = dp[0][i] * dp[i + 1][n - 1]
        if product > max_product:
            max_product = product
            
    print(max_product)

if __name__ == "__main__":
    solve()