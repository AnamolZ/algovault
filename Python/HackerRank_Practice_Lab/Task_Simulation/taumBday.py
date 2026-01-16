
def taumBday(black, white, black_cost, white_cost, z_conv):
    """
    Calculates the minimum cost of purchasing black and white gifts.

    Args:
        black (int): The number of black gifts.
        white (int): The number of white gifts.
        black_cost (int): The cost of each black gift.
        white_cost (int): The cost of each white gift.
        z_conv (int): The cost to convert one color gift to another color.

    Returns:
        int: The minimum cost to purchase the required number of gifts.
    """
    return (
        black * min(black_cost, white_cost + z_conv) 
        + white * min(white_cost, black_cost + z_conv)
    )

def main():
    """
    The main coordinator for processing multiple test cases of Taum's Birthday problem.
    Reads input for the number of test cases and then processes each case sequentially.
    """
    test_cases = int(input().strip())

    for _ in range(test_cases):
        black, white = map(int, input().split())
        black_cost, white_cost, z_conv = map(int, input().split())

        print(
            taumBday(
                black, 
                white, 
                black_cost, 
                white_cost, 
                z_conv
            ))

if __name__ == '__main__':
    main()