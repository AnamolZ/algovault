
def formingMagicSquare(magic_squares, matrix):
    """
    Determine the minimum cost required to convert a given 3x3 matrix
    into a magic square.

    A magic square is a 3x3 grid containing the numbers 1 through 9 exactly
    once, where the sums of all rows, columns, and both diagonals are equal.
    The cost is defined as the sum of absolute differences between the
    corresponding elements of the input matrix and a valid magic square.

    Parameters
    ----------
    magic_squares : list[list[list[int]]]
        A list of all possible 3x3 magic squares.
    matrix : list[list[int]]
        A 3x3 matrix representing the input square.

    Returns
    -------
    int
        The minimum transformation cost among all possible magic squares.
    """
    costs = []
    for sq in magic_squares:
        costs.append(calculate_cost(sq, matrix))
    return min(costs)

def calculate_cost(sq, matrix):
    """
    Calculate the transformation cost between a magic square and
    an input matrix.

    The cost is computed as the sum of absolute differences between
    each corresponding cell of the two 3x3 matrices.

    Parameters
    ----------
    sq : list[list[int]]
        A valid 3x3 magic square.
    matrix : list[list[int]]
        A 3x3 input matrix.

    Returns
    -------
    int
        The total transformation cost.
    """
    total_cost = 0
    for i in range(3):
        for j in range(3):
            total_cost += abs(sq[i][j] - matrix[i][j])
    return total_cost

def main():
    """
    Read a 3x3 matrix from standard input and print the minimum cost
    required to convert it into a magic square.

    The function uses all 8 possible 3x3 magic squares and determines
    the least costly transformation.
    """
    magic_squares = [
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    ]

    matrix = [list(map(int, input().rstrip().split())) for _ in range(3)]
    print(formingMagicSquare(magic_squares, matrix))

if __name__ == "__main__":
    main()