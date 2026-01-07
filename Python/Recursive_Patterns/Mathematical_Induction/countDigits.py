
# Problem: Count the number of digits in a number using recursion.

# Function definition
def counter(number):
    # Base case: If the number is 0, it has exactly 1 digit
    if number == 0:
        return 1
    # Recursive step: Remove the last digit and count the remaining digits
    else:
        return 1 + counter(number // 10)

# Function call with number = 0
print(counter(0))
