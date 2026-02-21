
# Problem: Find the sum of all natural numbers up to n using recursion.

# Function definition
def natural_number_sum(n):
    """
    Adds natural sums consecutively.

    Args:
        n (int): Range inclusive bound.

    Returns:
        int: Final sum.
    """
    # Base case: If n is 0, return 0 as the sum of natural numbers up to 0 is 0
    if n == 0:
        return 0
    
    # Recursive case: The sum of numbers up to n is n plus the sum of numbers up to (n-1)
    # The recursion continues to add each number as it reduces n by 1, until n reaches 0
    return n + natural_number_sum(n - 1)

# Function call with N = 5
print(natural_number_sum(5))
