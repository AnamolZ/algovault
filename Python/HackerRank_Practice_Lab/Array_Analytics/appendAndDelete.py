
def appendAndDelete(s, t, k):
    """
    Determines whether it is possible to convert string `s` into string `t`
    using exactly `k` operations, where each operation is either:
    - deleting the last character of the string, or
    - appending a character to the end of the string.

    The function finds the longest common prefix between `s` and `t` to
    minimize unnecessary operations, then checks whether the remaining
    operations can be performed within the allowed count `k`.

    Args:
        s (str): The initial string.
        t (str): The target string.
        k (int): The exact number of operations allowed.

    Returns:
        str: "Yes" if the transformation is possible within `k` operations,
             otherwise "No".
    """
    common_length = 0
    for char_s, char_t in zip(s, t):
        if char_s == char_t:
            common_length += 1
        else:
            break
            
    total_len = len(s) + len(t)
    min_moves = total_len - (2 * common_length)
    
    if k >= total_len:
        return "Yes"
    
    elif k >= min_moves and (k - min_moves) % 2 == 0:
        return "Yes"
    
    else:
        return "No"

def main():
    """
    Main entry point for the script.
    Reads inputs with robust error handling for the integer 'k'.
    """
    try:
        s = input().strip()
        t = input().strip()
        
        # Read k and validate it's a positive integer
        line_k = input().strip()
        if not line_k:
            raise ValueError("Number of operations 'k' cannot be empty.")
            
        k = int(line_k)
        
        if k < 0:
            raise ValueError("Number of operations 'k' must be a non-negative integer.")

        print(appendAndDelete(s, t, k))
        
    except EOFError:
        # Handle cases where input is interrupted/missing
        pass
    except ValueError as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == '__main__':
    main()