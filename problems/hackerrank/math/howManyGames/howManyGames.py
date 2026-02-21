
def howManyGames(p, d, m, s):
    """
    Calculates the total number of games that can be purchased given the starting price,
    discount, minimum price, and total budget.

    Args:
        p (int): The cost of the first game.
        d (int): The discount applied after each game.
        m (int): The minimum cost of a game.
        s (int): The total budget.

    Returns:
        int: The number of games that can be bought.
    """
    count = 0
    while s >= p:
        s -= p
        count += 1
        p = max(m, p - d)
    return count

def main():
    p, d, m, s = map(int, input().rstrip().split())
    print(howManyGames(p, d, m, s))

if __name__ == '__main__':
    main()