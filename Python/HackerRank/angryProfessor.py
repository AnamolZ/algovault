
def angryProfessor(k, a):
    return "NO" if sum(1 for x in a if x <= 0) >= k else "YES"

def main():
    t = int(input().strip())

    for t_itr in range(t):
        first_multiple_input = input().rstrip().split()

        n = int(first_multiple_input[0])

        k = int(first_multiple_input[1])

        a = list(map(int, input().rstrip().split()))

        result = angryProfessor(k, a)

        print(result)

if __name__ == '__main__':
    main()