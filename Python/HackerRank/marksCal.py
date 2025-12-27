def marksCal(m, q):
    """
    Calculate and return the average marks of a student.

    Parameters:
        m (dict[str, list[float]]): Dictionary mapping student names
            to a list of their marks.
        q (str): Name of the student whose average is required.

    Returns:
        str: The student's average marks formatted to two decimal places.

    Example:
        >>> m = {"Alice": [80, 90, 70], "Bob": [60, 75, 85]}
        >>> marksCal(m, "Alice")
        '80.00'
    """
    return f"{sum_(m[q]) / 3:.2f}"


def sum_(ar: list[int]) -> float:
    """
    Compute the sum of a list of numbers.

    Parameters:
        ar (list[int]): List of numeric values.

    Returns:
        float: Sum of the elements in the list.

    Example:
        >>> sum_([1, 2, 3])
        6
    """
    return sum(ar)


def main():
    """
    Read student data, process marks, and print the average
    marks for a queried student.

    Input format:
        - An integer n representing the number of students.
        - n lines each containing a student name followed by 3 marks.
        - A final line containing the queried student name.

    Output:
        - The average marks of the queried student formatted to two decimals.

    Sample Input:
        2
        Alice 80 90 70
        Bob 60 75 85
        Alice

    Sample Output:
        80.00
    """
    n = int(input())
    m = {name: list(map(float, scores))
                 for name, *scores in (input().split() for _ in range(n))}
    q = input()
    print(marksCal(m, q))


if __name__ == "__main__":
    main()
