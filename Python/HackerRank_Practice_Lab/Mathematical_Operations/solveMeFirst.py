def solveMeFirst(a, b):
    """
    Computes the sum of two integers.

    This function takes two integer values and performs a basic arithmetic 
    addition, returning the result.

    Args:
        a (int): The first integer value.
        b (int): The second integer value.

    Returns:
        int: The sum of a and b.

    Example:
        >>> solveMeFirst(7, 3)
        10

    Constraints:
        1 <= a, b <= 1000
    """
    return a + b

# Main execution block
if __name__ == "__main__":
    try:
        # Standard input reading for two integers
        num1 = int(input())
        num2 = int(input())
        res = solveMeFirst(num1, num2)
        print(res)
    except EOFError:
        pass
    except ValueError:
        print("Invalid input: Please enter integers.")