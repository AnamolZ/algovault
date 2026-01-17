
from collections import Counter
import sys

#Submitted Solution on HackerRank
def organizingContainers(container):
    """
    Approach 1: The Sorting Method (Timsort)
    - Complexity: O(n log n)
    - Best for: Small to medium datasets (n < 10,000).
    - Advantage: Low memory overhead, uses Python's highly optimized C-level sorting.
    """
    # Calculate capacities and ball totals - O(n^2)
    row_sums = [sum(row) for row in container]
    col_sums = [sum(col) for col in zip(*container)]

    # Sort in-place to minimize memory allocation - O(n log n)
    row_sums.sort()
    col_sums.sort()

    # Direct list comparison - O(n)
    return "Possible" if row_sums == col_sums else "Impossible"

def organizing_containers_counter(container):
    """
    Approach 2: The Frequency Map Method (Hash Map)
    - Complexity: O(n) average case.
    - Best for: Large-scale datasets where n is very high.
    - Advantage: Linear scaling; avoids the overhead of ordering elements.
    """
    # Calculate capacities and ball totals - O(n^2)
    row_sums = [sum(row) for row in container]
    col_sums = [sum(col) for col in zip(*container)]

    # Compare distribution of values using Hash Maps - O(n)
    # This checks if the counts of each sum value match exactly.
    if Counter(row_sums) == Counter(col_sums):
        return "Possible"
    else:
        return "Impossible"

def main():
    q = int(input().strip())

    for q_itr in range(q):
        n = int(input().strip())

        container = []

        for _ in range(n):
            container.append(list(map(int, input().rstrip().split())))

        print(organizingContainers(container))
        print(organizing_containers_counter(container))

if __name__ == '__main__':
    main()