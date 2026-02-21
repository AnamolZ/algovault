
def fairRations(b):
    """
    Calculates the minimum number of loaves required to ensure everyone has an even number of loaves.
    If it's not possible to distribute loaves such that everyone has an even number, it returns "NO".

    Args:
        b (list of int): An array of integers representing the number of loaves each person has.

    Returns:
        int or str: The minimum number of loaves to distribute, or "NO" if it's impossible.
    """
    count = 0
    for i in range(len(b)):
        if i == len(b) - 1:
            if b[i] % 2 != 0:
                return "NO"
        if b[i] % 2 != 0:
            b[i], b[i+1] = b[i] + 1, b[i+1] + 1
            count += 2
    return count

def main():
    n = int(input().strip())
    b = list(map(int, input().rstrip().split()))

    if n != len(b):
        raise ValueError("Length of array does not match the input")

    print(fairRations(b))

if __name__ == "__main__":
    main()