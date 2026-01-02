
def climbingLeaderboard(ranked, player):
    """
    Calculates the player's rank after each game on a leaderboard using Dense Ranking.

    Dense Ranking:
    - The person with the highest score is ranked number 1.
    - People who have equal scores receive the same ranking number.
    - The next ranking number is the next consecutive integer.

    Args:
        ranked (list[int]): A list of leaderboard scores in descending order.
        player (list[int]): A list of the player's scores after each game.

    Returns:
        list[int]: A list of integers representing the player's rank after each score.
    """
    unique_ranked = sorted(list(set(ranked)), reverse=True)
    
    results = []
    i = len(unique_ranked) - 1
    
    for score in player:
        while i >= 0 and score >= unique_ranked[i]:
            i -= 1
        
        if i < 0:
            results.append(1)
        else:
            results.append(i + 2)
            
    return results

def main():
    """
    Reads input from standard input, processes the leaderboard scores,
    and prints the resulting ranks.
    """
    try:
        n = int(input())
        ranked = list(map(int, input().rstrip().split()))
        m = int(input())
        player = list(map(int, input().rstrip().split()))

        if n != len(ranked) or m != len(player):
            raise ValueError("Input counts do not match the expected number of elements.")

        print(*climbingLeaderboard(ranked, player), sep='\n')
    except EOFError:
        pass
    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
