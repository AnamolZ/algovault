
# Problem: Reverse a string using recursion.

# Function definition
def reverse_string(word):
    """
    Reconstructs backward sequences natively recursively.

    Args:
        s (str): Original.

    Returns:
        str: Standard reversal pattern.
    """
    # Base case: If the length of the word is 0 or 1, return the word as it is
    # This handles the termination of recursion when we reach the smallest substring
    if len(word) == 0 or len(word) == 1:
        return word
    
    # Recursive case: Take the first character of the word and place it at the end
    # Recursively call ReverseString on the substring excluding the first character
    return reverse_string(word[1:]) + word[0]

# Function call with word = "word"
print(reverse_string("word"))