
def organizingContainers(container):
    row_sum = [sum(row) for row in container]
    column_sum = [sum(column) for column in zip(*container)]
    row_sum.sort(), column_sum.sort()
    return "Possible" if column_sum == row_sum else "Impossible"

def main():
    q = int(input().strip())

    for q_itr in range(q):
        n = int(input().strip())

        container = []

        for _ in range(n):
            container.append(list(map(int, input().rstrip().split())))

        print(organizingContainers(container))

if __name__ == '__main__':
    main()