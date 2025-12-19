
def playWithWords(input_str: str) -> int:
    str_list = list(input_str)
    mid = len(str_list) // 2

    left = "".join(str_list[:mid])      
    right = "".join(str_list[mid:])
    
def palindrome(word: str) -> int:
    if word == word[::-1]:
        return len(word)
    else:
        return 0

def main():
    try:
        input_str = "eeegeeksforskeeggeeks"
        # input_str = str(input().strip())
        playWithWords(input_str)
    except Exception as e:
        print("Exception: ", e)
        
if __name__ == "__main__":
    main()