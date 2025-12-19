
# def playWithWords(input_str: str) -> int:
#     str_list = list(input_str)
#     mid = len(str_list) // 2

#     left = "".join(str_list[:mid])      
#     right = "".join(str_list[mid:])

#     left = slicer(left)
#     right = slicer(right)

#     print(left)
#     print(right)

# def slicer(word: str, i: int = 0) -> str:
#     if i == len(word):
#         return word
#     if word[i] != word[-i-1]:
#         word.remove(word[i])
#     else:
#         slicer(word, i+1)
                
# def palindrome(word: str) -> int:
#     if word == word[::-1]:
#         return len(word)
#     else:
#         return 0

# def main():
#     try:
#         input_str = "eeegeeksforskeeggeeks"
#         # input_str = str(input().strip())
#         playWithWords(input_str)
#     except Exception as e:
#         print("Exception: ", e)
        
# if __name__ == "__main__":
#     main()


def solve_shaka_game(s: str) -> int:
    n = len(s)
    if n < 2:
        return 0

    # Initialize DP table for LPS lengths
    dp = [[0] * n for _ in range(n)]

    # Fill DP table (O(n^2))
    for i in range(n - 1, -1, -1):
        dp[i][i] = 1
        for j in range(i + 1, n):
            if s[i] == s[j]:
                dp[i][j] = dp[i + 1][j - 1] + 2
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

    # Find maximum product of two non-overlapping palindromes
    max_score = 0
    for k in range(n - 1):
        # Product of LPS of left part s[0...k] and right part s[k+1...n-1]
        score = dp[0][k] * dp[k + 1][n - 1]
        if score > max_score:
            max_score = score
            
    return max_score

# Input
input_str = "eeegeeksforskeeggeeks"
print(solve_shaka_game(input_str))


# def solve_shaka_game(s: str) -> int:
#     n = len(s)
#     if n < 2:
#         return 0

#     dp = [[0] * n for _ in range(n)]

#     for i in range(n - 1, -1, -1):
#         dp[i][i] = 1
#         for j in range(i + 1, n):
#             if s[i] == s[j]:
#                 dp[i][j] = dp[i + 1][j - 1] + 2
#             else:
#                 dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

#     max_score = 0
#     for k in range(n - 1):
#         score = dp[0][k] * dp[k + 1][n - 1]
#         if score > max_score:
#             max_score = score

#     return max_score


# input_str = "eeegeeksforskeeggeeks"
# print(solve_shaka_game(input_str))



