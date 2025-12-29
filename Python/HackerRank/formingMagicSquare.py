
def formingMagicSquare(magic_squares, matrix):
    costs = []
    for sq in magic_squares:
        costs.append(calculate_cost(sq, matrix))
    return min(costs)

def calculate_cost(sq, matrix):
    total_cost = 0
    for i in range(3):
        for j in range(3):
            total_cost += abs(sq[i][j] - matrix[i][j])
    return total_cost

def main():
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