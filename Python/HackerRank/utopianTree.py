
def utopianTree(n):
    height = 1
    for cycle in range(1, n + 1):
        if cycle % 2 == 1:
            height *= 2
        else:
            height += 1
    return height

def main():
    try:
        t_input = input().strip()
        if not t_input:
            return
        t = int(t_input)
        for _ in range(t):
            n_input = input().strip()
            if n_input:
                n = int(n_input)
                print(utopianTree(n))
    except (EOFError, ValueError):
        pass

if __name__ == '__main__':
    main()