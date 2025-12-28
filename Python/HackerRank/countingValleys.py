
def countingValleys(p):
    c, s = 0, 0
    for i in p:
        if i == 'D':
            c -= 1
        if i == 'U':
            c += 1
        if c == 0 and i == 'U':
            s += 1
    return s

def main():
    try:
        s = int(input())
        p = list(map(str, list(input())))

        if len(p) != s:
            raise ValueError("Invalid input: Mismatch between step count and path length.")

        print(countingValleys(p))
    except ValueError as err:
        print(err)

if __name__ == "__main__":
    main()