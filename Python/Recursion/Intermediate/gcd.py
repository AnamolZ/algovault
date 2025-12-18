
# Problem: Find the Greatest Common Divisor (GCD) using recursion (Euclidean Algorithm).

# Function definition
def gcd(st_number, nd_number):
    # Base case: If the second number is 0, the GCD is the first number
    if nd_number == 0:
        return st_number
    # Recursive step: Calculate the remainder (modulo) and recurse with swapped values
    remainder = st_number % nd_number
    return gcd(nd_number, remainder)  # Recurse with swapped values

# Function call with two numbers, 48 and 18
print(gcd(48, 18))