
from typing import List

def gradingStudents(grades: List[int], grades_count: int) -> List[int]:
    """
    Rounds student grades according to grading rules.

    Rules:
    - Grades below 38 are not rounded (failing grades).
    - Grades are rounded up to the next multiple of 5
      if the difference is less than 3.

    Args:
        grades (List[int]): List of student grades.
        grades_count (int): Number of grades in the list.

    Returns:
        List[int]: List of grades after applying rounding rules.
    """
    for i in range(grades_count):
        if grades[i] < 38:
            continue

        if grades[i] % 5 > 2:
            grades[i] += 5 - (grades[i] % 5)

    return grades


def main() -> None:
    """
    Reads student grades from standard input, applies rounding rules,
    and prints each final grade on a new line.
    """
    try:
        grades_count = int(input().strip())
        grades: List[int] = []

        for _ in range(grades_count):
            grades.append(int(input().strip()))

        for grade in gradingStudents(grades, grades_count):
            print(grade)

    except ValueError as err:
        print("Invalid input:", err)


if __name__ == "__main__":
    main()
