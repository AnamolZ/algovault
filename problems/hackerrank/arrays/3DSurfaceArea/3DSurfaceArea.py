#!/bin/python3

def surfaceArea(A):
    """
    Calculates the 3D surface area of a toy geometry described by a 2D grid.
    
    Args:
        A (list of list of int): A 2D array representing the height of cubes in each cell.
        
    Returns:
        int: The total 3D surface area of the shape.
    """
    H = len(A)
    W = len(A[0])

    area = 2 * H * W

    for i in range(H):
        for j in range(W):
            h = A[i][j]

            up = A[i-1][j] if i > 0 else 0
            area += max(h - up, 0)

            down = A[i+1][j] if i < H-1 else 0
            area += max(h - down, 0)

            left = A[i][j-1] if j > 0 else 0
            area += max(h - left, 0)

            right = A[i][j+1] if j < W-1 else 0
            area += max(h - right, 0)

    return area

if __name__ == '__main__':
    H, W = map(int, input().split())

    A = []
    for _ in range(H):
        A.append(list(map(int, input().split())))

    result = surfaceArea(A)
    print(result)
