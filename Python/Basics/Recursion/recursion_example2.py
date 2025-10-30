
# Problem: Print numbers from N to 1 using recursion.

# Function definition
def Recursion(n):
    # Base condition: If n is greater than 0, continue the recursion
    if n > 0:
        # Print the current value of n before making the recursive call
        # This step happens first to print numbers from N to 1
        print(n)

        # Recursive call: Call the same function with (n-1)
        # The recursion keeps decreasing n until the base condition is met (n == 0)
        Recursion(n - 1)

# Function call with N = 8
Recursion(8)
