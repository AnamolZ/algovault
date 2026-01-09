
def libraryFine(d1, m1, y1, d2, m2, y2):
    """
    Calculates the fine for a library book based on return and due dates.

    Fines are calculated as follows:
    - If returned on or before the due date: 0.
    - If returned after the due day but within the same month/year: 15 * days late.
    - If returned after the due month but within the same year: 500 * months late.
    - If returned after the due year: Fixed fine of 10000.

    Args:
        d1, m1, y1 (int): Day, month, and year the book was returned.
        d2, m2, y2 (int): Day, month, and year the book was due.

    Returns:
        int: The calculated fine.
    """
    if y1 > y2:
        return 10000

    if y1 == y2 and m1 > m2:
        return 500 * (m1 - m2)

    if y1 == y2 and m1 == m2 and d1 > d2:
        return 15 * (d1 - d2)

    return 0

def main():
    """
    Main entry point for calculating library fines.
    Reads return and due dates, validates input format and types,
    and returns the calculated fine.
    """
    try:
        first_input = input().rstrip().split()
        if not first_input:
            return
        if len(first_input) != 3:
            print(f"Error: Expected 3 integers for return date, got {len(first_input)}.")
            return
        d1, m1, y1 = map(int, first_input)

        second_input = input().rstrip().split()
        if not second_input:
            return
        if len(second_input) != 3:
            print(f"Error: Expected 3 integers for due date, got {len(second_input)}.")
            return
        d2, m2, y2 = map(int, second_input)

        print(libraryFine(d1, m1, y1, d2, m2, y2))
    except ValueError:
        print("Error: All inputs must be valid integers.")
    except EOFError:
        pass

if __name__ == '__main__':
    main()