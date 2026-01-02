
def designerPdfViewer(a, w):
    indexs = [ord(i) - ord('a') for i in w]
    return max(a[i] for i in indexs) * len(w)

def main():
    a = list(map(int, input().rstrip().split()))
    w = input()
    print(designerPdfViewer(a, w))

if __name__ == '__main__':
    main()