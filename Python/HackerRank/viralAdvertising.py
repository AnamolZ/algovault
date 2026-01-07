
def viralAdvertising(n):
    """
    Calculates the cumulative number of likes for a viral advertising campaign.
    
    The campaign starts by sharing with 5 people. Each day, floor(shared/2) people 
    like the advertisement and share it with 3 friends each the following day.
    
    Args:
        n (int): The number of days to track.
        
    Returns:
        int: The total (cumulative) number of likes after n days.
    """
    shared = 5
    cumulative_likes = 0
    
    for _ in range(n):
        liked = shared // 2
        cumulative_likes += liked
        shared = liked * 3
        
    return cumulative_likes

def main():
    """
    Reads input from stdin and prints the result of viralAdvertising.
    """
    try:
        n = int(input().strip())
        print(viralAdvertising(n))
    except EOFError:
        pass

if __name__ == '__main__':
    main()
