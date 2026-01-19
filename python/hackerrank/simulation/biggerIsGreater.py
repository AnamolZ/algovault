
def biggerIsGreater(word):
    chars = list(word)
    codes = [ord(c) for c in chars]

    for i in range(len(codes) - 1, 0, -1):
        if codes[i] > codes[i - 1]:
            pivot = i - 1
            pivot_val = codes[pivot]
            break
    else:
        return "no answer"

    swap_idx = None
    swap_val = None

    for j in range(pivot + 1, len(codes)):
        if codes[j] > pivot_val and (swap_val is None or codes[j] < swap_val):
            swap_val = codes[j]
            swap_idx = j

    chars[pivot], chars[swap_idx] = chars[swap_idx], chars[pivot]
    chars[pivot + 1:] = sorted(chars[pivot + 1:])

    return "".join(chars)

def main():
    test_cases = int(input().strip())
    for _ in range(test_cases):
        word = input()
        print(biggerIsGreater(word))

if __name__ == "__main__":
    main()