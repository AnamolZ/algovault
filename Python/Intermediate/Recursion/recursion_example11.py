
# Problem: Find all subsequences of a string using recursion.

# Function definition
def subsequences(word, index=0, current_sub="", result=None):
    # Initialize the result list during the first call
    # This list will hold all subsequences
    if result is None:
        result = []

    # Base case: If index reaches the length of the word, we have considered all characters
    # Append the current subsequence to the result list
    if index == len(word):
        result.append(current_sub)
        return result

    # Recursive case 1: Include the current character in the subsequence
    # Create a new string by adding word[index] to current_sub
    include_path = current_sub + word[index]
    # Recursively call subsequences with index + 1 and the updated subsequence
    subsequences(word, index + 1, include_path, result)

    # Recursive case 2: Exclude the current character from the subsequence
    # current_sub remains unchanged
    subsequences(word, index + 1, current_sub, result)

    # Return the result list containing all subsequences
    return result

# Function call with word = "abc"
print(subsequences("abc"))