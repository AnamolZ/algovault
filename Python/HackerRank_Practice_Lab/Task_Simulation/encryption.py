
import math
from itertools import zip_longest

def encryption(text: str) -> None:
    chars = list(text.replace(" ", ""))
    n = len(chars)
    rows = int(math.sqrt(n))
    cols = rows if rows * rows >= n else rows + 1
    container = []

    for i in range(0, n, cols):
        container.append("".join(chars[i:i + cols]))

    col_ = [col for col in zip_longest(*container, fillvalue='')]

    print(" ".join("".join(t) for t in col_))

def main():
    s = input()
    encryption(s)

if __name__ == "__main__":
    main()