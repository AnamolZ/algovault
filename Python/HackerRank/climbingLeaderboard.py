
def climbingLeaderboard(ranked, player):
    unique_ranked = sorted(list(set(ranked)), reverse=True)
    
    results = []
    i = len(unique_ranked) - 1
    
    for score in player:
        while i >= 0 and score >= unique_ranked[i]:
            i -= 1
        
        if i < 0:
            results.append(1)
        else:
            results.append(i + 2)
            
    return results

def main():
    n = int(input())
    ranked = list(map(int, input().rstrip().split()))
    m = int(input())
    player = list(map(int, input().rstrip().split()))

    if n != len(ranked) or m != len(player):
        raise ValueError

    print(*climbingLeaderboard(ranked, player), sep='\n')

if __name__ == "__main__":
    main()