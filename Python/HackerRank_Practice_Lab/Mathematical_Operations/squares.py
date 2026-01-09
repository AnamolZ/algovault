
def squares(a, b):
    """
    Counts the number of square integers between two given integers a and b (inclusive).

    The number of squares in [a, b] is found by calculating the number of squares 
    up to b (int(sqrt(b))) and subtracting the number of squares up to a-1 (int(sqrt(a-1))).

    Args:
        a (int): The starting integer of the range.
        b (int): The ending integer of the range.

    Returns:
        int: Total count of square integers in the range [a, b].
    """
    return int(b**0.5) - int((a-1)**0.5)

def main():
    """
    Main entry point for the script. 
     Reads the number of queries, followed by 'a' and 'b' for each query.
    Implements robust error handling for malformed or non-integer inputs.
    """
    try:
        line = input().strip()
        if not line:
            return
        q = int(line)
    except ValueError:
        print("Error: Number of test cases must be an integer.")
        return

    for q_itr in range(q):
        try:
            input_line = input().rstrip()
            if not input_line:
                continue
            
            parts = input_line.split()
            if len(parts) != 2:
                print(f"Error: Expected 2 integers, got {len(parts)}.")
                continue

            a = int(parts[0])
            b = int(parts[1])

            if a < 0 or b < 0:
                print("Error: Inputs must be non-negative integers.")
                continue

            print(squares(a, b))
        except ValueError:
            print("Error: Inputs must be valid integers.")
        except EOFError:
            break

if __name__ == '__main__':
    main()