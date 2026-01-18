
def catAndMouse(q):
    """
    Determines which cat reaches the mouse first for each query.

    Args:
        q (list of list of int): A list of queries, where each query contains
        three integers [x, y, z]. `x` is the position of Cat A, `y` is the
        position of Cat B, and `z` is the position of Mouse C.

    Prints:
        A line of output for each query:
        - "Cat A" if Cat A is closer to the mouse
        - "Cat B" if Cat B is closer to the mouse
        - "Mouse C" if both cats are equally distant from the mouse
    """
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
    """
    Reads input from standard input, stores the queries, and runs the
    catAndMouse function.

    Input format:
        - First line: an integer q representing the number of queries
        - Next q lines: three space-separated integers representing the
          positions of Cat A, Cat B, and Mouse C

    Calls:
        catAndMouse() with the collected list of queries.
    """
    q = int(input())
    r = [None] * q

    for i in range(q):
        x, y, z = map(int, input().split())
        r[i] = [x, y, z]
    
    catAndMouse(r)

if __name__ == "__main__":
    main()