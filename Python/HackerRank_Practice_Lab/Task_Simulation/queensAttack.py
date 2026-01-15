
def get_total_attackable_squares(board_size, obstacle_count, queen_row, queen_column, obstacles):
    max_range = {
        'north': board_size - queen_row,
        'south': queen_row - 1,
        'west': queen_column - 1,
        'east': board_size - queen_column,
        'north_west': min(board_size - queen_row, queen_column - 1),
        'north_east': min(board_size - queen_row, board_size - queen_column),
        'south_west': min(queen_row - 1, queen_column - 1),
        'south_east': min(queen_row - 1, board_size - queen_column)
    }

    for obs_row, obs_column in obstacles:
        if obs_column == queen_column:
            if obs_row > queen_row:
                max_range['north'] = min(max_range['north'], obs_row - queen_row - 1)
            else:
                max_range['south'] = min(max_range['south'], queen_row - obs_row - 1)
        
        elif obs_row == queen_row:
            if obs_column > queen_column:
                max_range['east'] = min(max_range['east'], obs_column - queen_column - 1)
            else:
                max_range['west'] = min(max_range['west'], queen_column - obs_column - 1)
        
        elif abs(obs_row - queen_row) == abs(obs_column - queen_column):
            row_diff = obs_row - queen_row
            col_diff = obs_column - queen_column
            
            if row_diff > 0 and col_diff < 0:
                max_range['north_west'] = min(max_range['north_west'], row_diff - 1)
            elif row_diff > 0 and col_diff > 0:
                max_range['north_east'] = min(max_range['north_east'], row_diff - 1)
            elif row_diff < 0 and col_diff < 0:
                max_range['south_west'] = min(max_range['south_west'], abs(row_diff) - 1)
            elif row_diff < 0 and col_diff > 0:
                max_range['south_east'] = min(max_range['south_east'], abs(row_diff) - 1)

    return sum(max_range.values())

def main():
    first_multiple_input = input().rstrip().split()
    n = int(first_multiple_input[0])
    k = int(first_multiple_input[1])

    second_multiple_input = input().rstrip().split()
    r_q = int(second_multiple_input[0])
    c_q = int(second_multiple_input[1])

    obstacles = []
    for _ in range(k):
        obstacles.append(list(map(int, input().rstrip().split())))
    result = get_total_attackable_squares(n, k, r_q, c_q, obstacles)
    
    print(result)

if __name__ == "__main__":
    main()