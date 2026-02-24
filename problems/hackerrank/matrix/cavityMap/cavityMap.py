
def cavityMap(grid):
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