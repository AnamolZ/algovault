
def repeatedString(input_string, total_length):
    if not input_string or total_length < 0:
        return 0
    
    pattern_length = len(input_string)
    pattern_a_count = input_string.count("a")
    
    full_cycle_count = total_length // pattern_length
    leftover_length = total_length % pattern_length
    
    total_a_count = (full_cycle_count * pattern_a_count) + input_string[:leftover_length].count("a")
    
    return total_a_count

def main():
    try:
        input_string = input().strip()
        total_length = int(input().strip())
        print(repeatedString(input_string, total_length))
    except (ValueError, EOFError):
        pass

if __name__ == "__main__":
    main()