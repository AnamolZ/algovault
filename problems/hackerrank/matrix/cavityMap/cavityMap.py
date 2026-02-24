"""
Cavity Map Problem Solver.

This module provides a function to identify 'cavities' in an n x n grid of digits.
A cavity is defined as a non-border cell whose value is strictly greater than 
its four neighbors (up, down, left, right).
"""

def cavityMap(grid):
    """
    Identifies cavities in a grid and replaces them with 'X'.

    A cavity is a cell that is not on the border and has a value strictly 
    greater than its four adjacent neighbors.

    Args:
        grid (list of str): An n x n grid of digits as strings.

    Returns:
        list of str: The modified grid with cavities replaced by 'X'.
    """
    n = len(grid)
    if n < 3:
        return grid
        
    result = [list(row) for row in grid]
    
    for i in range(1, n - 1):
        for j in range(1, n - 1):
            cell = grid[i][j]
            if (cell > grid[i-1][j] and cell > grid[i+1][j] and cell > grid[i][j-1] and cell > grid[i][j+1]):
                result[i][j] = 'X'
                
    return ["".join(row) for row in result]

def main():
    """
    Main entry point to demonstrate the cavityMap function.
    """
    n = int(input().strip())

    grid = []

    for _ in range(n):
        grid_item = input()
        grid.append(grid_item)
        
    result = cavityMap(grid)
    for row in result:
        print(row)

if __name__ == "__main__":
    main()