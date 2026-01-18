import re

def validRegex(pattern):
    """
    Check if a given string is a valid and simple regular expression.

    This function performs two types of validation:
    1. It checks for the presence of certain invalid consecutive operator sequences
       that are considered disallowed: "**", "++", "??", "*+", "+*", "?*".
    2. It attempts to compile the pattern using `re.compile` to ensure that
       it is a syntactically valid regular expression.

    Parameters
    ----------
    pattern : str
        The regex pattern string to be validated.

    Returns
    -------
    bool
        True if the pattern is syntactically valid and does not contain any of
        the disallowed operator sequences, False otherwise.
    """
    invalid_sequences = ["**", "++", "??", "*+", "+*", "?*"]
    for seq in invalid_sequences:
        if seq in pattern:
            return False
    try:
        re.compile(pattern)
        return True
    except re.error:
        return False


def main():
    """
    Read multiple regex patterns from user input and check their validity.

    The function performs the following steps:
    1. Reads an integer `n` from input representing the number of patterns.
    2. Reads `n` regex pattern strings from input.
    3. For each pattern, prints `True` if it is valid according to `validRegex`,
       or `False` otherwise.
    """
    n = int(input())
    patterns = [input() for _ in range(n)]
    for p in patterns:
        print(validRegex(p))

if __name__ == "__main__":
    main()