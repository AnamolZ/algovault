#!/bin/python3

import math
import os
import random
import re
import sys

def bomberMan(n, grid):
    """
    Simulate the Bomberman game over n seconds.
    
    Bomberman lives in a rectangular grid. Each cell is empty or contains a bomb.
    Initially, he plants bombs in some cells.
    After 1 second, he does nothing.
    After one more second, he plants bombs in all empty cells.
    After one more second, bombs planted 3 seconds ago detonate.
    This pattern repeats.
    
    Args:
        n (int): The number of seconds to simulate.
        grid (list of str): A list of strings representing the grid where 'O' is a bomb and '.' is an empty cell.
        
    Returns:
        list of str: The state of the grid after `n` seconds.
    """
    r = len(grid)
    c = len(grid[0])

    if n == 1:
        return grid

    elif n % 2 == 0:
        return ['O' * c for _ in range(r)]

    else:
        bomb_neighbors = []
        for row in range(r):
            for column in range(c):
                if grid[row][column] == 'O':
                    bomb_neighbors.append((row, column))
                    up = (row - 1, column)
                    down = (row + 1, column)
                    left = (row, column - 1)
                    right = (row, column + 1)
                    for neighbor in [up, down, left, right]:
                        if 0 <= neighbor[0] < r and 0 <= neighbor[1] < c:
                            bomb_neighbors.append(neighbor)

        grid = [['O' for _ in range(c)] for _ in range(r)]
        for row, column in bomb_neighbors:
            grid[row][column] = '.'

        if n % 4 == 3:
            return [''.join(row) for row in grid]

        bomb_neighbors = []
        for row in range(r):
            for column in range(c):
                if grid[row][column] == 'O':
                    bomb_neighbors.append((row, column))
                    up = (row - 1, column)
                    down = (row + 1, column)
                    left = (row, column - 1)
                    right = (row, column + 1)
                    for neighbor in [up, down, left, right]:
                        if 0 <= neighbor[0] < r and 0 <= neighbor[1] < c:
                            bomb_neighbors.append(neighbor)

        grid = [['O' for _ in range(c)] for _ in range(r)]
        for row, column in bomb_neighbors:
            grid[row][column] = '.'

        return [''.join(row) for row in grid]

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    r = int(first_multiple_input[0])

    c = int(first_multiple_input[1])

    n = int(first_multiple_input[2])

    grid = []

    for _ in range(r):
        grid_item = input()
        grid.append(grid_item)

    result = bomberMan(n, grid)

    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()