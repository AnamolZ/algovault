
def jumpingOnCloudsMin(c):
    count = 0
    current_idx = 0
    clength = len(c)

    while current_idx < clength - 1:
        # Check if a jump of 2 is possible and lands on a safe cloud
        if current_idx + 2 < clength and c[current_idx + 2] == 0:
            current_idx += 2
        else:
            current_idx += 1
        count += 1

    return count

def main():
    try:
        n = int(input().strip())
        c = list(map(int, input().rstrip().split()))

        if n != len(c):
            raise ValueError("The number of clouds provided does not match n.")

        result = jumpingOnCloudsMin(c)
        print(result)
    except EOFError:
        pass
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    main()
