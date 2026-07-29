def timeInWords(h, m):
    """
    Converts a given time (hour and minute) into its words representation.

    For example, 5:00 becomes "five o' clock", 5:15 becomes "quarter past five",
    5:30 becomes "half past five", and 5:45 becomes "quarter to six".

    Args:
        h (int): The hour (1 <= h <= 12).
        m (int): The minute (0 <= m < 60).

    Returns:
        str: A string representing the time in words.
    """
    words = [
        "zero", "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "quarter", "sixteen",
        "seventeen", "eighteen", "nineteen", "twenty",
        "twenty one", "twenty two", "twenty three", "twenty four",
        "twenty five", "twenty six", "twenty seven", "twenty eight",
        "twenty nine"
    ]

    if m == 0:
        return f"{words[h]} o' clock"
    elif m == 15:
        return f"quarter past {words[h]}"
    elif m == 30:
        return f"half past {words[h]}"
    elif m == 45:
        return f"quarter to {words[h + 1 if h < 12 else 1]}"
    elif m < 30:
        minute = "minute" if m == 1 else "minutes"
        return f"{words[m]} {minute} past {words[h]}"
    else:
        rem = 60 - m
        minute = "minute" if rem == 1 else "minutes"
        next_hour = h + 1 if h < 12 else 1
        return f"{words[rem]} {minute} to {words[next_hour]}"

if __name__ == "__main__":
    h, m = map(int, input().split())
    print(timeInWords(h, m))