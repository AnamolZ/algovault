
def designerPdfViewer(h, w):
    """
    Calculates the area of the rectangle highlighting the word.

    Args:
        h (list of int): A list of 26 integers representing the heights of each letter.
        word (str): The word to be highlight.

    Returns:
        int: The area of the highlighted rectangle.
    """
    indices = [ord(i) - ord('a') for i in w]
    return max(h[i] for i in indices) * len(w)

def main():
    """
    Reads heights and a word from standard input and prints the result.
    """
    h = list(map(int, input().rstrip().split()))
    w = input()
    print(designerPdfViewer(h, w))

if __name__ == '__main__':
    main()