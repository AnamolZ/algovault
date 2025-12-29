
def catAndMouse(q):
    for i in range(len(q)):

        catA = abs(q[i][0] - q[i][2])
        catB = abs(q[i][1] - q[i][2])
        
        if catA < catB:
            print("Cat A")
        elif catB < catA:
            print("Cat B")
        else:
            print("Mouse C")

def main():
    q = int(input())
    r = [None] * q

    for i in range(q):
        x, y, z = map(int, input().split())
        r[i] = [x, y, z]
    
    catAndMouse(r)

if __name__ == "__main__":
    main()