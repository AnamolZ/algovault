
# Problem: Find the factorial of a number n using recursion.

# Function definition
def Factorial(n):
    # Base condition: If n is 0 or 1, return 1 as factorial of 0 and 1 is 1
    if n == 0 or n == 1:
        return 1

    # Recursive case: Calculate the factorial by multiplying n with the factorial of (n-1)
    # The recursion keeps reducing n by 1 until it reaches 0 or 1
    return n * Factorial(n - 1)

# Function call with N = 8
print(Factorial(8))
