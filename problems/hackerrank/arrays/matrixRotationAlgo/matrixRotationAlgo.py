#!/bin/python3

import math
import os
import random
import re
import sys

def matrixRotation(matrix, m, n, r):
    """
    Rotates a 2D matrix of size m x n anti-clockwise by r rotations.

    The rotation is performed layer by layer (concentric rings from outer to inner).
    For each layer, its elements are extracted into a 1D array in counter-clockwise order:
    top row (left to right) -> right column (top+1 to bottom-1) -> bottom row (right to left) -> left column (bottom-1 to top+1).
    The 1D layer is then rotated by (r % layer_length) positions to avoid redundant full cycles,
    and written back into the original matrix.

    Parameters:
    matrix (List[List[int]]): The 2D matrix to rotate.
    m (int): Number of rows in the matrix.
    n (int): Number of columns in the matrix.
    r (int): Number of anti-clockwise rotations to perform.

    Returns:
    List[List[int]]: The rotated matrix.
    """
    top = 0
    bottom = m - 1
    left = 0
    right = n - 1

    while top < bottom and left < right:

        top_row = matrix[top][left:right + 1]
        right_col = [matrix[i][right] for i in range(top + 1, bottom)]
        bottom_row = matrix[bottom][left:right + 1][::-1]
        left_col = [matrix[i][left] for i in range(bottom - 1, top, -1)]

        layer = top_row + right_col + bottom_row + left_col

        rotation = r % len(layer)
        layer = layer[rotation:] + layer[:rotation]

        # Put rotated layer back into matrix
        k = 0

        # top
        for j in range(left, right + 1):
            matrix[top][j] = layer[k]
            k += 1

        # right
        for i in range(top + 1, bottom):
            matrix[i][right] = layer[k]
            k += 1

        # bottom
        for j in range(right, left - 1, -1):
            matrix[bottom][j] = layer[k]
            k += 1

        # left
        for i in range(bottom - 1, top, -1):
            matrix[i][left] = layer[k]
            k += 1

        # Move to next layer
        top += 1
        bottom -= 1
        left += 1
        right -= 1

    return matrix

if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    m = int(first_multiple_input[0])

    n = int(first_multiple_input[1])

    r = int(first_multiple_input[2])

    matrix = []

    for _ in range(m):
        matrix.append(list(map(int, input().rstrip().split())))

    result = matrixRotation(matrix, m, n, r)

    for row in result:
        print(*row)