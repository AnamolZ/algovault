
def saveThePrisoner(n, m, s):
    """
    Determines which prisoner receives the last candy in a circle.
    
    The logic follows two main rules to explain why we subtract 2:
    
    Rule #1: The "Don't Move" Rule (First -1)
    When you start the game, you give the very first candy to the starting prisoner (s).
    You haven't taken any steps yet! Since 1 candy is already gone, you only have 
    (m - 1) candies left to hand out while walking.
    
    Rule #2: The "Computer is Silly" Rule (Second -1)
    Computers prefer to count starting from zero (0, 1, 2...) instead of one.
    To make the math work for the modulo operator, we shift the starting position 
    back by one: (s - 1).
    
    Putting it together:
    (s - 1) + (m - 1) = s + m - 2
    
    The modulo (% n) handles the circle, and we add 1 back at the end to 
    convert the computer's 0-indexed result back to a human-friendly 1-indexed ID.
    
    Args:
        n (int): The number of prisoners.
        m (int): The number of candies.
        s (int): The chair number to start passing out candies from.
        
    Returns:
        int: The chair number of the prisoner who receives the last candy.
    """
    return ((s + m - 2) % n) + 1

def main():
    t = int(input().strip())
    for _ in range(t):
        n, m, s = map(int, input().split())
        print(saveThePrisoner(n, m, s))

if __name__ == '__main__':
    main()