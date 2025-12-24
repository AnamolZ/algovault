def breakingRecords(games: int, scores: list[int]) -> tuple[int, int]:
    """
    Track how many times the highest and lowest score records are broken.

    Given the number of games played and a list of scores in chronological order,
    this function counts:
    - how many times the maximum score record is broken
    - how many times the minimum score record is broken

    The first score is treated as both the initial maximum and minimum record.

    Args:
        games (int): Total number of games played.
        scores (list[int]): List of scores for each game, in order.

    Returns:
        tuple[int, int]: A tuple containing:
            - number of times the maximum score record was broken
            - number of times the minimum score record was broken

    Example:
        >>> breakingRecords(9, [10, 5, 20, 20, 4, 5, 2, 25, 1])
        (2, 4)
    """
    max_score = scores[0]
    min_score = scores[0]
    max_count = 0
    min_count = 0

    for i in range(games):
        if scores[i] > max_score:
            max_score = scores[i]
            max_count += 1
        if scores[i] < min_score:
            min_score = scores[i]
            min_count += 1
    return max_count, min_count


def main() -> None:
    """
    Read input from standard input, process score records,
    and print the number of times records were broken.

    Input format:
        - First line: integer representing number of games
        - Second line: space-separated integers representing game scores

    Output format:
        - Two integers printed on one line:
          maximum record breaks followed by minimum record breaks
    """
    games = int(input())
    scores = list(map(int, input().strip().split()))
    print(*breakingRecords(games, scores))


if __name__ == '__main__':
    main()
