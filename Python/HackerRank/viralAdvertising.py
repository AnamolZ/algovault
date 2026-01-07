
def viralAdvertising(n):
    shared = 5
    cumulative_likes = 0
    
    for _ in range(n):
        liked = shared // 2
        cumulative_likes += liked
        shared = liked * 3
        
    return cumulative_likes

def main():
    n = int(input())
    print(viralAdvertising(n))

if __name__ == '__main__':
    main()