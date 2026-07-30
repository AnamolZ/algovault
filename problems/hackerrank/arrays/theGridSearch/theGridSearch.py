#!/bin/python3

import math
import os
import random
import re
import sys

def gridSearch(g_grid, p_grid):
    """
    Finds if a given 2D pattern (p_grid) exists within a larger 2D grid (g_grid).
    This function uses a rolling hash (Rabin-Karp-like) approach to efficiently
    find the pattern in the grid.
    
    Args:
        g_grid (list of str): The larger grid represented as a list of strings.
        p_grid (list of str): The smaller pattern grid to search for.
        
    Returns:
        str: "YES" if the pattern is found, "NO" otherwise.
    """
    g_rows, g_cols = len(g_grid), len(g_grid[0])
    p_rows, p_cols = len(p_grid), len(p_grid[0])
    
    p_ints = [[int(x) for x in row] for row in p_grid]
    g_ints = [[int(x) for x in row] for row in g_grid]
    
    base = 10
    p_hashes = []
    for row in p_ints:
        h = 0
        for val in row:
            h = h * base + val
        p_hashes.append(h)
        
    g_row_hashes = [[0] * (g_cols - p_cols + 1) for _ in range(g_rows)]
    highest_place = base ** (p_cols - 1)
    
    for i in range(g_rows):
        current_hash = 0
        for j in range(p_cols):
            current_hash = current_hash * base + g_ints[i][j]
        g_row_hashes[i][0] = current_hash
        
        for j in range(1, g_cols - p_cols + 1):
            current_hash = (current_hash - g_ints[i][j - 1] * highest_place) * base + g_ints[i][j + p_cols - 1]
            g_row_hashes[i][j] = current_hash

    for i in range(g_rows - p_rows + 1):
        for j in range(g_cols - p_cols + 1):
            
            if g_row_hashes[i][j] == p_hashes[0]:
                match = True
                
                for k in range(1, p_rows):
                    if g_row_hashes[i + k][j] != p_hashes[k]:
                        match = False
                        break
                
                if match:
                    return "YES"
                    
    return "NO"

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        first_multiple_input = input().rstrip().split()

        R = int(first_multiple_input[0])

        C = int(first_multiple_input[1])

        G = []

        for _ in range(R):
            G_item = input()
            G.append(G_item)

        second_multiple_input = input().rstrip().split()

        r = int(second_multiple_input[0])

        c = int(second_multiple_input[1])

        P = []

        for _ in range(r):
            P_item = input()
            P.append(P_item)

        result = gridSearch(G, P)

        fptr.write(result + '\n')

    fptr.close()