
def taumBday(black, white, black_cost, white_cost, z_conv):
    return (
        black * min(black_cost, white_cost + z_conv) 
        + white * min(white_cost, black_cost + z_conv)
    )

def main():
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