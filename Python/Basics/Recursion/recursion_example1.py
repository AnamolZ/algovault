
# Problem: Print numbers from 1 to N using recursion.

# Function definition
def Recursion(n):
    # Base condition: if n is greater than 0, keep calling the function
    if n > 0:
        # Recursive call: call the same function with (n-1)
        # This ensures that the function keeps going down until n becomes 0
        Recursion(n - 1)
        
        # Once the recursion starts returning (unwinding),
        # print the current value of n.
        # This ensures numbers are printed in increasing order (1 to N)
        print(n)

# Function call with N = 8
Recursion(8)
