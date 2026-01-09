
def squares(a, b):
    return int(b**0.5) - int((a-1)**0.5)

def main():
    q = int(input().strip())

    for q_itr in range(q):
        first_multiple_input = input().rstrip().split()

        a = int(first_multiple_input[0])

        b = int(first_multiple_input[1])

        print(squares(a, b))

if __name__ == '__main__':
    main()