def dayOfProgrammer(y: int):
    """
    Calculates the date of the 256th day of the year for the Russian calendar.
    
    The function accounts for three distinct historical periods in Russia:
    1. Julian Calendar (1700 - 1917): A leap year is simply divisible by 4.
    2. Transition Year (1918): February started on the 14th, meaning the 256th 
       day shifted significantly.
    3. Gregorian Calendar (1919 - 2700): Uses the standard leap year rule 
       (divisible by 400, or divisible by 4 but not 100).

    Args:
        y (int): The year to evaluate, ranging from 1700 to 2700 inclusive.

    Returns:
        str: The date of the 256th day in 'dd.mm.yyyy' format.
    """
    if y == 1918:
        return '26.09.1918'
    
    elif y < 1918:
        is_leap = (y % 4 == 0)
    else:
        is_leap = (y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)
            
    day = "12" if is_leap else "13"
    return f"{day}.09.{y}"

def main():
    y = int(input().strip())
    print(dayOfProgrammer(y))

if __name__ == '__main__':
    main()