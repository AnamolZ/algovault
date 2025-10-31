
# Problem: Find the sum of digits of a number.
# For example, if the number is 234, the digits are 2, 3, and 4.
# The sum of these digits would be: 2 + 3 + 4 = 9

# Function definition
def SumDig(n):
    # Base condition: If n is 0, return 0 as there are no more digits to process
    if n == 0:
        return 0
    
    # Extract the last digit of n by calculating the remainder when dividing by 10
    m = n % 10
    
    # Remove the last digit from n by performing integer division by 10
    n = n // 10
    
    # Recursive case: Add the extracted digit to the sum of digits from the remaining number
    # The recursion keeps reducing n by removing digits until n becomes 0
    return m + SumDig(n)

# Function call with N = 234
print(SumDig(234))
