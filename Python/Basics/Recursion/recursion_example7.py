
# Problem: Check if a string is palindrome using recursion.

# Function definition
def IsPalindrome(word):
    # Base case: If the length of word is 0 or 1, it's a palindrome
    if len(word) <= 1:
        return True
    # Check if first and last characters match
    if word[0] != word[-1]:
        return False
    # Recursively check the inner substring (excluding first and last characters)
    return IsPalindrome(word[1:-1])

# Function call with word = "hello"
print(IsPalindrome("hello"))
