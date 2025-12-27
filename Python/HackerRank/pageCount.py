
def pageCount(n:int, p:int):
    return min(p//2, n//2-p//2)

def main():
    n, p = int(input()), int(input())
    print(pageCount(n, p))

if __name__ == "__main__":
    main()