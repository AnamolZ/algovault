https://www.hackerrank.com/challenges/strplay/problem?isFullScreen=true

explain:

```python
n = int(input())
student_marks = {name: list(map(float, scores))
                 for name, *scores in (input().split() for _ in range(n))}
query_name = input()
```