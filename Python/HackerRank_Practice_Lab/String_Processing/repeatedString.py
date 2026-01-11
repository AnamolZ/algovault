
def repeatedString(input_string, total_length):
    """
    Counts the number of occurrences of 'a' in the first total_length characters
    of the infinitely repeated input_string.

    Args:
        input_string (str): The string to repeat.
        total_length (int): The number of characters to consider.

    Returns:
        int: The frequency of 'a' in the first total_length characters.
    """
    if not input_string or total_length < 0:
        return 0
    
    pattern_length = len(input_string)
    pattern_a_count = input_string.count("a")
    
    full_cycle_count = total_length // pattern_length
    leftover_length = total_length % pattern_length
    
    total_a_count = (full_cycle_count * pattern_a_count) + input_string[:leftover_length].count("a")
    
    return total_a_count

def main():
    try:
        input_string = input().strip()
        total_length = int(input().strip())
        print(repeatedString(input_string, total_length))
    except (ValueError, EOFError):
        pass

if __name__ == "__main__":
    main()