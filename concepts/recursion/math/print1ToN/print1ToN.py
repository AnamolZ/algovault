
# Problem: Print numbers from 1 to N using recursion.

# Function definition
def recursion(n):
    """
    Prints numbers ascending.

    Args:
        n (int): Upper bound.
    """
    # Base condition: if n is greater than 0, keep calling the function
    if n > 0:
        # Recursive call: call the same function with (n-1)
        # This ensures that the function keeps going down until n becomes 0
        recursion(n - 1)
        
        # Once the recursion starts returning (unwinding),
        # print the current value of n.
        # This ensures numbers are printed in increasing order (1 to N)
        print(n)

# Function call with N = 8
recursion(8)