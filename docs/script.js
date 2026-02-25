const algorithms = [
    {
        id: "counting-sort",
        title: "Counting Sort",
        category: "Algorithms - Sorting",
        problem: "<b>Core Objective:</b> Efficiently sort an array of integers when the range of potential values (K) is relatively small compared to the number of elements (N). <br><br><b>Constraint:</b> Traditional comparison-based sorting algorithms (QuickSort, MergeSort) are mathematically bound by the Ω(N log N) lower bound. Counting Sort seeks to bypass this by leveraging the specific nature of integers as indices, achieving linear time complexity.",
        solution: "<b>Mechanism:</b> Counting Sort is a <i>non-comparison</i> sorting algorithm. <br><br>1. <b>Frequency Mapping:</b> We iterate through the input array and map each value to an auxiliary 'count' array, where the index matches the value.<br>2. <b>Aggregation:</b> Each index in the count array stores the frequency of that specific integer.<br>3. <b>Reconstruction:</b> By traversing the count array, we overwrite the original data or populate a new array in sorted order. For stable sorting, we can transform the count array into a prefix-sum array (cumulative counts) to determine the exact final position of each element.",
        optimality: "<b>Complexity Analysis:</b><br>• <b>Time:</b> O(N + K), where N is the number of elements and K is the range of values. This is strictly linear when K = O(N).<br>• <b>Space:</b> O(K) for the auxiliary frequency array. <br><br><b>Efficiency Note:</b> This algorithm is the gold standard for large datasets with small ranges, but becomes memory-prohibitive if K » N (e.g., sorting [1, 10^9] with only 2 elements).",
        example: "<b>Input: [4, 2, 2, 8, 3, 3, 1]</b><br><br>1. <b>Range Detection:</b> Max value K = 8.<br>2. <b>Bucket Initialization:</b> Array of size 9 initialized to zero.<br>3. <b>Linear Scan:</b> Frequencies computed: <code>[1:1, 2:2, 3:2, 4:1, 8:1]</code>.<br>4. <b>Ordered Output:</b> Reconstructing elements based on bucket indices: <code>[1, 2, 2, 3, 3, 4, 8]</code>."
    },
    {
        id: "jumping-clouds-revisited",
        title: "Jumping on the Clouds: Revisited<br><a href='https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Challenge Overview:</b> A character navigates a circular array of <b>N</b> clouds starting from index 0. Initial energy is 100. <br><br><b>Movement Mechanics:</b><br>1. The character jumps forward in fixed intervals of <b>k</b> steps.<br>2. Each jump consumes 1 standard energy point.<br>3. Landing on a <b>Thundercloud (1)</b> incurs an additional penalty of 2 energy points (3 total).<br>4. The game terminates when the character returns to index 0.<br><br><b>Goal:</b> Determine the final energy level after the cycle is complete.",
        solution: "<b>Algorithmic Strategy:</b> We utilize <b>Modular Arithmetic Simulation</b>. <br><br>Because the array is circular, any leap beyond the bounds must wrap back to the beginning. The formula <code>(current_index + k) % n</code> serves as the mathematical foundation, providing the exact index in a circular coordinate system. <br><br>We implement a <code>do-while</code> logic (or a <code>while True</code> with a break) to ensure the first jump occurs before checking the termination condition (returning to 0). During each iteration, we evaluate the state of <code>c[index]</code> to apply conditional energy penalties.",
        optimality: "<b>Performance Profile:</b><br>• <b>Time Complexity:</b> O(N/gcd(N,k)). In the worst case where k and N are coprime, we visit every cloud once, yielding O(N). If k divides N, we visit only N/k clouds.<br>• <b>Space Complexity:</b> O(1). We perform the simulation in-place using only scalar variables for state management.<br><br><b>Conclusion:</b> This approach is mathematically optimal as it scales linearly with the number of steps in the sequence and requires constant auxiliary memory.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def jumpingOnClouds(c, k):\n    e = 100\n    i = 0\n    n = len(c)\n\n    while True:\n        i = (i + k) % n\n        # Standard cost (1) + Thundercloud penalty (2) if c[i] == 1\n        e -= 1 + (2 * c[i])\n\n        if i == 0:\n            break\n\n    return e</pre>",
        stepByStep: `<b>Simulation Audit:</b><br>
<b>Initial State:</b> Energy = 100, Position = 0, k = 2, n = 8<br><br>
<b>Iteration 1:</b>
<div style="padding-left: 20px; border-left: 2px solid #007bff; margin-left: 10px; margin-bottom: 10px;">
    <i>Jump:</i> <code>(0 + 2) % 8 = 2</code>.<br>
    <i>State:</i> Cloud 2 is a <b>1 (Thunderhead)</b>.<br>
    <i>Energy:</i> 100 - (1+2) = <b>97</b>
</div>
<b>Iteration 2:</b>
<div style="padding-left: 20px; border-left: 2px solid #007bff; margin-left: 10px; margin-bottom: 10px;">
    <i>Jump:</i> <code>(2 + 2) % 8 = 4</code>.<br>
    <i>State:</i> Cloud 4 is a <b>0 (Cumulus)</b>.<br>
    <i>Energy:</i> 97 - 1 = <b>96</b>
</div>
<b>Iteration 3:</b>
<div style="padding-left: 20px; border-left: 2px solid #007bff; margin-left: 10px; margin-bottom: 10px;">
    <i>Jump:</i> <code>(4 + 2) % 8 = 6</code>.<br>
    <i>State:</i> Cloud 6 is a <b>1 (Thunderhead)</b>.<br>
    <i>Energy:</i> 96 - 3 = <b>93</b>
</div>
<b>Iteration 4:</b>
<div style="padding-left: 20px; border-left: 2px solid #007bff; margin-left: 10px; margin-bottom: 10px;">
    <i>Jump:</i> <code>(6 + 2) % 8 = 0</code>. <b>Target Reached.</b><br>
    <i>State:</i> Cloud 0 is safe.<br>
    <i>Energy:</i> 93 - 1 = <b>92</b>
</div>
<b>Terminal Result:</b> Cycle completed with <b>92</b> energy units remaining.`
    },
    {
        id: "birthday-cake-candles",
        title: "Birthday Cake Candles<br><a href='https://www.hackerrank.com/challenges/birthday-cake-candles/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Case Study:</b> You are managing a dataset representing candle heights on a birthday cake. The objective is to identify how many candles possess the maximum height found in the set. <br><br><b>Constraint:</b> The algorithm must be efficient enough to process large input sizes (e.g., $10^5$ candles) within a limited time window.",
        solution: "<b>Algorithmic Progression:</b><br>1. <b>Naive Approach:</b> Sort the array in descending order and count subsequent elements that match the first. This yields O(N log N) complexity.<br>2. <b>Current Solution:</b> We implement a <b>One-Pass Frequency Accumulator</b>. We maintain two state variables: <code>max_height</code> and <code>frequency</code>.<br>3. <b>Logic:</b> As we iterate through the array, if we encounter a height greater than the current <code>max_height</code>, we update <code>max_height</code> and reset <code>frequency</code> to 1. If the current height matches <code>max_height</code>, we increment <code>frequency</code>. This avoids the need for sorting or multiple passes.",
        optimality: "<b>Efficiency Metrics:</b><br>• <b>Time:</b> O(N) precisely. We perform a single linear scan over the dataset.<br>• <b>Space:</b> O(1). We use exactly two integer variables for tracking, independent of input size.<br><br><b>Verdict:</b> This is the asymptotically optimal solution because any algorithm must examine each element at least once to determine the global maximum.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def birthdayCakeCandles(candles):\n    max_h = 0\n    count = 0\n    for h in candles:\n        if h > max_h:\n            max_h = h\n            count = 1\n        elif h == max_h:\n            count += 1\n    return count</pre>",
        stepByStep: `<b>One-Pass Execution Trace:</b><br>
<b>Input:</b> [4, 4, 1, 3]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #28a745; margin-left: 10px; margin-bottom: 10px;">
    <i>Candle 1 (4):</i> 4 > 0. New Max = 4. Count = 1.<br>
    <i>Candle 2 (4):</i> 4 == 4. Count increments to 2.<br>
    <i>Candle 3 (1):</i> 1 < 4. Ignore.<br>
    <i>Candle 4 (3):</i> 3 < 4. Ignore.
</div>
<b>Final Metric:</b> Maximum height is 4, appearing <b>2</b> times.`
    },
    {
        id: "mini-max-sum",
        title: "Mini-Max Sum<br><a href='https://www.hackerrank.com/challenges/mini-max-sum/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Mathematical Objective:</b> Given an array of <b>N=5</b> integers, calculate the minimum and maximum possible sums obtainable by summing exactly <b>N-1</b> elements. <br><br><b>Output Format:</b> Display two space-separated integers representing the minimum and maximum calculates.",
        solution: "<b>Optimized Analytical Strategy:</b><br>While sorting the array (O(N log N)) allows for easy selection of the first/last four elements, a more efficient <b>Single-Pass Arithmetic Approach</b> (O(N)) exists.<br><br>1. <b>Total Summation:</b> Calculate the sum of all five elements in the array.<br>2. <b>Extrema Detection:</b> Simultaneously identify the global Minimum (<code>minVal</code>) and global Maximum (<code>maxVal</code>).<br>3. <b>Subtraction Logic:</b><br>&nbsp;&nbsp;• <code>Minimum Sum = Total Sum - maxVal</code><br>&nbsp;&nbsp;• <code>Maximum Sum = Total Sum - minVal</code>",
        optimality: "<b>Computational Efficiency:</b><br>• <b>Time Complexity:</b> O(N). Because N is restricted to 5, the operation is effectively O(1) in a real-world scenario.<br>• <b>Space Complexity:</b> O(1). No auxiliary data structures are required.<br><br><b>Conclusion:</b> By using arithmetic subtraction instead of sorting, we minimize CPU cycles and leverage basic algebra for a robust solution.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def miniMaxSum(arr):\n    total_sum = sum(arr)\n    min_val = min(arr)\n    max_val = max(arr)\n\n    print(f\"{total_sum - max_val} {total_sum - min_val}\")</pre>",
        stepByStep: `<b>Mathematical Validation:</b><br>
<b>Input Set:</b> [1, 3, 5, 7, 9]<br><br>
<b>Computation Phase:</b>
<div style="padding-left: 20px; border-left: 2px solid #ef4444; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> Total Sum = <code>1 + 3 + 5 + 7 + 9 = 25</code><br>
    <i>Step 2:</i> Global Min = 1, Global Max = 9<br>
</div>
<b>Final Inference:</b>
<div style="padding-left: 20px; border-left: 2px solid #ef4444; margin-left: 10px; margin-bottom: 10px;">
    <i>Min Sum:</i> 25 - 9 = <b>16</b> (1+3+5+7)<br>
    <i>Max Sum:</i> 25 - 1 = <b>24</b> (3+5+7+9)
</div>
<b>Output:</b> 16 24`
    },
    {
        id: "acm-team",
        title: "ACM ICPC Team<br><a href='https://www.hackerrank.com/challenges/acm-icpc-team/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "Imagine you are assembling a 2-person dream team for a giant trivia tournament! You have a list of people, and for each person, you know exactly which trivia topics they have studied (represented by a string of `1`s for 'Yes' and `0`s for 'No').<br><br>When two people form a team, their knowledge combines. If Person A knows History and Person B knows Science, the team knows exactly 2 topics. Your job is to pair up all possible 2-person teams and find out two things:<br>1. What is the absolute **maximum** number of topics any single team can know?<br>2. How many different 2-person teams can claim that top spot?",
        solution: "To find the ultimate team, we literally test every possible pairing! We take Person 1 and pair them with Person 2, Person 3... all the way to the end. Then we do the same for Person 2, and so on.<br><br>But dealing with strings of '1's and '0's is slow. Instead, we use a computer superpower called **Bitwise Math**. We convert their knowledge strings into binary numbers. If we want to combine Person A's knowledge and Person B's knowledge, we just fuse them together using the Bitwise OR Operator (`|`). In binary math, `1 | 0 = 1` and `1 | 1 = 1`. This instantly gives us a combined 'binary string' representing all the topics that team knows.<br><br>Then, we just count the `1`s in that new binary number (this is called counting set bits!). We track the highest count we've seen, and if we see a tie, we just add 1 to our 'teams tied for first' tally.",
        optimality: "Checking every pairing takes <b>O(N²) Time</b>, where N is the number of people. While O(N²) usually sounds slow, we don't have a choice—we *must* check every unique pairing to be mathematically certain we found the best one! However, because we convert the strings into binary integers, comparing their combined knowledge (`a | b`) takes <b>O(1) Time</b> rather than scanning string arrays, making the algorithm incredibly fast in practice. It takes <b>O(N) Space</b> to store the list of binary integers.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def acmTeam(topic_strings, number_of_topics):\n    topic_bitmasks = [int(topic, 2) for topic in topic_strings]\n    max_topics_known = 0\n    max_teams_count = 0\n    n = len(topic_bitmasks)\n\n    for i in range(n):\n        mask_a = topic_bitmasks[i]\n        for j in range(i + 1, n):\n            combined_topics = mask_a | topic_bitmasks[j]\n            topics_known_count = combined_topics.bit_count()\n            \n            if topics_known_count > max_topics_known:\n                max_topics_known = topics_known_count\n                max_teams_count = 1\n            elif topics_known_count == max_topics_known:\n                max_teams_count += 1\n\n    return max_topics_known, max_teams_count</pre>",
        stepByStep: `<b>Input Array:</b> ["10101", "11100", "11010"]<br><br>
<b>Convert to Binary Math:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Person 0:</i> 10101 (Knows topics 1, 3, 5)<br>
    <i>Person 1:</i> 11100 (Knows topics 1, 2, 3)<br>
    <i>Person 2:</i> 11010 (Knows topics 1, 2, 4)
</div>

<b>Pairing Team: Person 0 + Person 1</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Action:</i> Combine using OR: <code>10101 | 11100 = 11101</code><br>
    <i>Result:</i> Team knows <b>4 topics</b>. Total Max = 4. Winning Teams = 1.
</div>

<b>Pairing Team: Person 0 + Person 2</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Action:</i> Combine using OR: <code>10101 | 11010 = 11111</code><br>
    <i>Result:</i> Team knows <b>5 topics</b>. New Max! Total Max = 5. Winning Teams = 1.
</div>

<b>Pairing Team: Person 1 + Person 2</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Action:</i> Combine using OR: <code>11100 | 11010 = 11110</code><br>
    <i>Result:</i> Team knows <b>4 topics</b>. Less than max.<br>
</div>

<b>Final Answer!</b> The max topics known is 5, and exactly 1 team achieved it.`
    },
    {
        id: "append-and-delete",
        title: "Append and Delete<br><a href='https://www.hackerrank.com/challenges/append-and-delete/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Case Objective:</b> Determine if string 's' can be transformed into string 't' in exactly <b>k</b> operations. <br><br><b>Permitted Operations:</b><br>1. Delete the terminal character of the string.<br>2. Append a character to the terminal end of the string.<br><br><b>Constraint:</b> Deleting from an empty string results in an empty string. The transformation must utilize exactly <b>k</b> operations.",
        solution: "<b>Algorithmic Strategy (Prefix Math):</b><br>The problem is solved using <b>Common Prefix Analysis</b> rather than a literal simulation.<br><br>1. <b>Longest Common Prefix (LCP):</b> Calculate the length of the string segment that both 's' and 't' share from the start.<br>2. <b>Minimum Transformation Cost:</b> The minimum operations required is <code>(len(s) - LCP) + (len(t) - LCP)</code> (deleting unique 's' characters and appending 't' characters).<br>3. <b>Parity and Buffer Check:</b> If the available operations <b>k</b> are significantly larger than the combined lengths of both strings, we can always reach the target (by deleting both strings entirely). Otherwise, <b>k</b> must be at least the Minimum Cost, and the surplus operations $(k - Minimum Cost)$ must be even (allowing for 'add-then-remove' pairs that maintain the string state).",
        optimality: "<b>Complexity Analysis:</b><br>• <b>Time Complexity:</b> O(N), where N is the length of the shorter string. We iterate once to find the LCP.<br>• <b>Space Complexity:</b> O(1). We use scalar variables to track lengths and prefix indices.<br><br><b>Conclusion:</b> This analytical approach is superior to simulation as it handles edge cases (like k being very large) with constant-time arithmetic checks.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def appendAndDelete(s, t, k):\n    common = 0\n    for c1, c2 in zip(s, t):\n        if c1 == c2: common += 1\n        else: break\n    \n    min_moves = (len(s) - common) + (len(t) - common)\n    \n    if k >= len(s) + len(t):\n        return \"Yes\"\n    if k >= min_moves and (k - min_moves) % 2 == 0:\n        return \"Yes\"\n    return \"No\"</pre>",
        stepByStep: `<b>Algorithmic Trace:</b><br>
<b>Input:</b> s="ashley", t="ash", k=2<br><br>
<b>Execution Phase:</b>
<div style="padding-left: 20px; border-left: 2px solid #00c0a3; margin-left: 10px; margin-bottom: 10px;">
    <i>LCP Calculation:</i> s[0:3] == t[0:3] ("ash"). Common Length = 3.<br>
    <i>Min Cost:</i> (6 - 3) + (3 - 3) = 3 operations.<br>
    <i>Validation:</i> Required moves (3) > available moves (2).
</div>
<b>Terminal Verdict:</b> Return <b>"No"</b>.`
    },
    {
        id: "beautiful-triplets",
        title: "Beautiful Triplets<br><a href='https://www.hackerrank.com/challenges/beautiful-triplets/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Challenge Overview:</b> Identify the absolute count of 'Beautiful Triplets' within a strictly increasing sequence. <br><br><b>Definition:</b> A triplet $(i, j, k)$ is 'Beautiful' if and only if:<br>1. $a[j] - a[i] = d$<br>2. $a[k] - a[j] = d$<br>3. Indices follow $i < j < k$.",
        solution: "<b>Efficiency Transformation:</b><br>While a triple-nested loop (O(N³)) is intuitive, the sorted nature of the input allows for <b>Hash-Map Optimized Lookups</b>.<br><br>1. <b>Frequency Aggregation:</b> First, we populate a Hash Map (dictionary) with the frequencies of all elements in the array.<br>2. <b>Ideal Value Prediction:</b> For every element <code>x</code> present in the map, we mathematically predict its companions. If <code>x</code> is our baseline, the triplet must consist of $(x, x+d, x+2d)$.<br>3. <b>Frequency Multiplication:</b> Instead of counting triplets individually, we multiply their occurrences: <code>count(x) * count(x+d) * count(x+2d)</code>. This handles duplicate values in the array simultaneously.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N) precisely. One linear pass to build the map, and one pass over the unique keys for O(1) hash-lookups.<br>• <b>Space:</b> O(N) to store the element frequencies.<br><br><b>Strategic Merit:</b> This strategy reduces the computational burden from cubic to linear time by leveraging the <b>Complementary Lookup Pattern</b>.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>from collections import Counter\n\ndef beautifulTriplets(d, arr):\n    counts = Counter(arr)\n    beautiful_count = 0\n    \n    for x in counts:\n        if (x + d) in counts and (x + 2*d) in counts:\n            beautiful_count += counts[x] * counts[x+d] * counts[x+2*d]\n            \n    return beautiful_count</pre>",
        stepByStep: `<b>Mathematical Validation:</b><br>
<b>Input:</b> [2, 2, 4, 4, 6], d = 2<br><br>
<b>Map Population:</b> {2: 2, 4: 2, 6: 1}<br><br>
<b>Verification Cycle:</b>
<div style="padding-left: 20px; border-left: 2px solid #fd7e14; margin-left: 10px; margin-bottom: 10px;">
    <i>Base x=2:</i> Needs 4 and 6. Both exist in map.<br>
    <i>Combo Calculation:</i> <code>freq(2) * freq(4) * freq(6)</code> = 2 * 2 * 1 = <b>4 Triplets</b>.
</div>
<div style="padding-left: 20px; border-left: 2px solid #fd7e14; margin-left: 10px; margin-bottom: 10px;">
    <i>Base x=4:</i> Needs 6 and 8. 8 is missing from map. <br>
    <i>Result:</i> Skipped.
</div>
<b>Final Result:</b> 4.`
    },
    {
        id: "circular-array-rotation",
        title: "Circular Array Rotation<br><a href='https://www.hackerrank.com/challenges/circular-array-rotation/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Core Objective:</b> Perform <b>k</b> right-circular rotations on an array of length <b>N</b> and respond to <b>M</b> positional queries.<br><br><b>Definition:</b> A single right rotation shifts every element $a[i]$ to $a[i+1]$, and the tail element $a[n-1]$ to index $0$.",
        solution: "<b>Algorithmic Paradigm (Virtual Rotation):</b><br>Performing <b>k</b> physical shifts (O(N*k)) is computationally inefficient. We employ <b>Modular Index Mapping</b> or <b>Slicing Reconstruction</b>.<br><br>1. <b>Minimal Rotation:</b> Since rotating <b>N</b> times returns the array to its original state, we calculate the effective rotation as <code>k_eff = k % n</code>.<br>2. <b>Slice-Based Reconstruction:</b> In Python, we can reconstruct the final array using slice operations. The tail segment <code>a[-k_eff:]</code> shifts to the head, and the original head segment <code>a[:-k_eff]</code> shifts to the tail.<br>3. <b>Query Resolution:</b> Map the requested indices directly to the reconstructed array.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(N + M). Array reconstruction takes linear time O(N), and query retrieval is O(1) per query.<br>• <b>Space:</b> O(N) to store the rotated array structure.<br><br><b>Conclusion:</b> This approach circumvents the O(N*k) bottleneck entirely, making it impervious to extremely high rotation counts (where k » N).",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def circularArrayRotation(a, k, queries):\n    n = len(a)\n    k %= n\n    # Optimal rotation using Python Slicing\n    rotated = a[n-k:] + a[:n-k]\n    return [rotated[q] for q in queries]</pre>",
        stepByStep: `<b>Rotation Trace:</b><br>
<b>Input:</b> [1, 2, 3], k=2, queries=[0, 1, 2]<br><br>
<b>Processing:</b>
<div style="padding-left: 20px; border-left: 2px solid #007bff; margin-left: 10px; margin-bottom: 10px;">
    <i>Reduction:</i> 2 % 3 = 2 effective rotations.<br>
    <i>Slice Head:</i> <code>a[3-2:]</code> → <code>a[1:]</code> → [2, 3]<br>
    <i>Slice Tail:</i> <code>a[:3-2]</code> → <code>a[:1]</code> → [1]<br>
    <i>Reconstruction:</i> [2, 3] + [1] = <b>[2, 3, 1]</b>.
</div>
<b>Query Output:</b> [rotated[0]: 2, rotated[1]: 3, rotated[2]: 1].`
    },
    {
        id: "climbing-leaderboard",
        title: "Climbing the Leaderboard<br><a href='https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Ranking Logic:</b> Implement a 'Dense Ranking' system for a leaderboard. In this system: <br>• Elements with identical scores share the same rank.<br>• The subsequent rank increment is exactly 1 (e.g., scores 100, 90, 90 result in ranks 1, 2, 2, and the next rank is 3).<br><br><b>Goal:</b> Given a leaderboard and a chronological sequence of player scores, determine the player's rank after each score update.",
        solution: "<b>Advanced Strategy (Two-Pointer Optimization):</b><br>The leaderboard is sorted descending, and the player scores are provided in <i>strictly increasing order</i>. This dual-sorted nature allows for a <b>Monotonic Search</b>.<br><br>1. <b>Preprocessing:</b> Reduce the leaderboard to a unique set of scores while maintaining descending order. This unique set directly maps indices to dense ranks.<br>2. <b>Search Phase:</b> Instead of performing a Binary Search (O(log N)) for each player score, we use a 'Bottom-Up' pointer on the unique leaderboard. Since the player's scores only increase, we only need to move our leaderboard pointer <i>upward</i>. We never reset the pointer, ensuring each leaderboard element is compared once total.",
        optimality: "<b>Efficiency Metrics:</b><br>• <b>Time:</b> O(N + M), where N is the original leaderboard length and M is the score sequence length. Single passes for deduplication and pointer traversal make this remarkably efficient.<br>• <b>Space:</b> O(N) auxiliary space to store the deduplicated unique leaderboard.<br><br><b>Professional Evaluation:</b> The Two-Pointer variant is superior to multiple binary searches when the query sequence is sorted, yielding a perfectly linear performance profile.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def climbingLeaderboard(ranked, player):\n    # Dense Ranking Setup\n    unique_ranked = sorted(list(set(ranked)), reverse=True)\n    i = len(unique_ranked) - 1\n    ranks = []\n    \n    for score in player:\n        # Monotonic Upward Search\n        while i >= 0 and score >= unique_ranked[i]:\n            i -= 1\n        ranks.append(i + 2)\n    return ranks</pre>",
        stepByStep: `<b>Execution Trace:</b><br>
<b>Unique Leaderboard:</b> [100, 50, 40, 20]<br>
<b>Player Sequence:</b> [5, 25, 50, 120]<br><br>
<b>Pointer Movement:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px;">
    <i>Score 5:</i> 5 < 20 (pointer index 3). Rank = 3+2 = <b>5</b>.<br>
    <i>Score 25:</i> 25 >= 20. Pointer moves to index 2 (40). 25 < 40. Rank = 2+2 = <b>4</b>.<br>
    <i>Score 50:</i> 50 >= 40. Pointer moves to index 1 (50). 50 >= 50. Pointer moves to index 0 (100). Rank = 0+2 = <b>2</b>.<br>
    <i>Score 120:</i> 120 >= 100. Pointer moves to -1. Rank = -1+2 = <b>1</b>.
</div>
<b>Final Result:</b> [5, 4, 2, 1]`
    },
    {
        id: "compare-the-triplets",
        title: "Compare the Triplets<br><a href='https://www.hackerrank.com/challenges/compare-the-triplets/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Core Objective:</b> Perform a vector-to-vector comparison between two triplets (Alice's and Bob's scores) and tally point-wise victories. <br><br><b>Scoring Logic:</b> For each index $i \in \{0, 1, 2\}$, a point is awarded to the individual with the higher scalar value. No points are awarded for equivalence.",
        solution: "<b>Algorithmic Strategy (Parallel Tallying):</b><br>The solution utilizes a <b>Parallel Iteration</b> pattern to evaluate scores simultaneously across categories.<br><br>1. <b>Synchronization:</b> Align both input vectors using a singular loop or a 'zip' utility.<br>2. <b>Conditional Accumulation:</b> During each iteration, a comparison is performed. Alice's score is incremented if $A[i] > B[i]$, and Bob's if $B[i] > A[i]$.<br>3. <b>Terminal State:</b> The resulting scalar tallies are aggregated into a final result vector.",
        optimality: "<b>Efficiency Metrics:</b><br>• <b>Time Complexity:</b> O(1). Since the input dimensions are strictly fixed at 3 categories, the operations are constant-time.<br>• <b>Space Complexity:</b> O(1). Minimal auxiliary memory is required to store the two integer accumulators.<br><br><b>Conclusion:</b> This approach is asymptotically optimal for fixed-dimension comparisons, ensuring instantaneous execution and zero memory overhead.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def compareTriplets(a, b):\n    alice = 0\n    bob = 0\n    for s1, s2 in zip(a, b):\n        if s1 > s2:\n            alice += 1\n        elif s2 > s1:\n            bob += 1\n    return [alice, bob]</pre>",
        stepByStep: `<b>Comparative Trace:</b><br>
<b>Alice:</b> [5, 6, 7], <b>Bob:</b> [3, 6, 10]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Category 1 (5 vs 3):</i> 5 > 3. Score = [1, 0].<br>
    <i>Category 2 (6 vs 6):</i> Equivalence detected. Score = [1, 0].<br>
    <i>Category 3 (7 vs 10):</i> 10 > 7. Score = [1, 1].
</div>
<b>Final Result:</b> [1, 1]`
    },
    {
        id: "cut-the-sticks",
        title: "Cut the Sticks<br><a href='https://www.hackerrank.com/challenges/cut-the-sticks/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Iterative Reduction:</b> Perform a sequence of 'cutting' operations on a collection of sticks until all are exhausted. <br><br><b>Operation Workflow:</b><br>1. Identify the minimum stick length <i>min_val</i> in the current collection.<br>2. Reduce every stick's length by <i>min_val</i>.<br>3. Remove all sticks with length $\leq 0$.<br>4. Record the count of sticks prior to each operation.",
        solution: "<b>Algorithmic Paradigm (Sorting-Based Jump Strategy):</b><br> Literal simulation of the cutting process (O(N²)) is inefficient. We utilize the <b>Sorted Incremental Invalidation</b> strategy.<br><br>1. <b>Pre-Sorting:</b> Sort the stick array in ascending order. This clusters identical lengths and ensures the shortest element is always at the lowest active index.<br>2. <b>Sequential Pointer Analysis:</b> Traverse the sorted array. A new cutting round occurs whenever we encounter an element strictly larger than its predecessor. At this junction, the number of sticks remaining is simply $(N - \text{current index})$.",
        optimality: "<b>Efficiency Metrics:</b><br>• <b>Time:</b> O(N log N) for the initial sort; the subsequent linear pass is O(N).<br>• <b>Space:</b> O(N) to store the result sequence.<br><br><b>Merit:</b> This approach bypasses the need for repeated subtractions and filtering, handling millions of sticks efficiently through a single pass over the sorted data.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def cutTheSticks(ar):\n    ar.sort()\n    n = len(ar)\n    res = [n]\n    for i in range(1, n):\n        if ar[i] != ar[i-1]:\n            res.append(n-i)\n    return res</pre>",
        stepByStep: `<b>Algorithmic Trace:</b><br>
<b>Input:</b> [5, 4, 4, 2, 2, 8]<br><br>
<b>Processing Cycle:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff2d55; margin-left: 10px; margin-bottom: 10px;">
    <i>Sorted State:</i> [2, 2, 4, 4, 5, 8]<br>
    <i>Initialization:</i> Count = 6.<br>
    <i>Transition at index 2 (4 > 2):</i> 6 - 2 = <b>4 sticks remain</b>.<br>
    <i>Transition at index 4 (5 > 4):</i> 6 - 4 = <b>2 sticks remain</b>.<br>
    <i>Transition at index 5 (8 > 5):</i> 6 - 5 = <b>1 stick remains</b>.
</div>
<b>Final Sequence:</b> [6, 4, 2, 1]`
    },
    {
        id: "divisible-sum-pairs",
        title: "Divisible Sum Pairs<br><a href='https://www.hackerrank.com/challenges/divisible-sum-pairs/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Pair Identification:</b> In an array of integers, find the total count of pairs $(i, j)$ such that $i < j$ and the sum $(a[i] + a[j])$ is perfectly divisible by a divisor $k$.",
        solution: "<b>Arithmetic Optimization (Remainder Bucketing):</b><br>Checking all pairs (O(N²)) is sub-optimal. We leverage the <b>Modular Addition Property</b>: <br><i>(a + b) % k == 0</i> is true if <i>(a%k + b%k) % k == 0</i>.<br><br>1. <b>Tallying Remainder Frequencies:</b> Iterate through the array once, counting how many elements yield each remainder when divided by $k$. Store these in a frequency array <code>rem_counts</code> of size $k$.<br>2. <b>Combinatorial Pair Matching:</b><br>• For remainder 0, use the formula $n(n-1)/2$ to find internal pairs.<br>• For remainders where $r = k/2$ (center cases), also use $n(n-1)/2$.<br>• For all other remainder pairs $(r, k-r)$, the total winning pairs is simple multiplication: <code>rem_counts[r] * rem_counts[k-r]</code>.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N + K). One linear pass over $N$ elements and one pass over $K$ remainder buckets.<br>• <b>Space:</b> O(K) to store the remainder frequency array.<br><br><b>Technical Superiority:</b> This approach converts a quadratic nested-search into a linear combinatorial calculation, making it scalable for extremely large $N$.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def divisibleSumPairs(n, k, ar):\n    # Remainder frequency map\n    counts = [0] * k\n    for x in ar:\n        counts[x % k] += 1\n    \n    # Internal pairs for Remainder 0\n    total = (counts[0] * (counts[0] - 1)) // 2\n    \n    # Cross-remainder matching\n    for i in range(1, (k // 2) + 1):\n        if i == k - i:\n            total += (counts[i] * (counts[i] - 1)) // 2\n        else:\n            total += counts[i] * counts[k - i]\n            \n    return total</pre>",
        stepByStep: `<b>Validation Scenario:</b><br>
<b>Input:</b> [1, 2, 3, 4, 5, 6], k = 5<br><br>
<b>Reminders:</b> [1, 2, 3, 4, 0, 1]<br>
<b>Bucket Frequencies:</b> 0:{1}, 1:{2}, 2:{1}, 3:{1}, 4:{1}<br><br>
<b>Combinatorial Phase:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px;">
    <i>Match (r=1, r'=4):</i> 2 * 1 = <b>2 pairs</b>.<br>
    <i>Match (r=2, r'=3):</i> 1 * 1 = <b>1 pair</b>.<br>
    <i>Match (r=0):</i> 1 * 0 / 2 = 0 pairs.
</div>
<b>Final Result:</b> 3.`
    },
    {
        id: "equalize-the-array",
        title: "Equalize the Array<br><a href='https://www.hackerrank.com/challenges/equality-in-a-array/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Core Objective:</b> Transform an array into a collection of identical elements using the minimum number of deletions.<br><br><b>Constraint:</b> Deletion is the only permitted modification. The goal is to maximize the size of the remaining subset of identical values.",
        solution: "<b>Algorithmic Strategy (Max Frequency Preservation):</b><br>The problem is an inverse of finding the <b>Statistical Mode</b> of the dataset.<br><br>1. <b>Frequency Profiling:</b> Construct a frequency map (Hash Map) of all elements in the array to determine their individual occurrences.<br>2. <b>Survivor Selection:</b> Identify the element with the maximum frequency count. This element is the most efficient 'target' to keep, as it minimizes the required deletions.<br>3. <b>Deletion Calculation:</b> The minimum deletions required is simply: $N - \max(\text{frequencies})$.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(N). Building the frequency map takes linear time, and finding the maximum frequency is O(U) where $U \leq N$.<br>• <b>Space:</b> O(U) auxiliary space to store the frequency counts in a Hash Map.<br><br><b>Conclusion:</b> This frequency-based approach is perfectly optimal, as it requires only a single pass over the data and constant-time lookups.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>from collections import Counter\n\ndef equalizeArray(arr):\n    counts = Counter(arr)\n    max_freq = max(counts.values())\n    return len(arr) - max_freq</pre>",
        stepByStep: `<b>Execution Trace:</b><br>
<b>Input Array:</b> [3, 3, 2, 1, 3]<br><br>
<b>Processing Phases:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff9500; margin-left: 10px; margin-bottom: 10px;">
    <i>Frequency Map:</i> {3: 3, 2: 1, 1: 1}.<br>
    <i>Target Identification:</i> Max frequency is 3 (for element '3').<br>
    <i>Calculation:</i> 5 (total) - 3 (kept) = <b>2 deletions</b>.
</div>
<b>Terminal Verdict:</b> 2.`
    },
    {
        id: "migratory-birds",
        title: "Migratory Birds<br><a href='https://www.hackerrank.com/challenges/migratory-birds/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Case Objective:</b> Identify the most frequently occurring element in an array of Type IDs (integers 1-5). <br><br><b>Tie-Breaking Constraint:</b> In the event of multiple elements sharing the maximum frequency, the element with the minimum scalar value (lowest Type ID) must be selected.",
        solution: "<b>Algorithmic Strategy (Linear Frequency Tallying):</b><br>The solution employs <b>Multi-Stage Selection</b> to satisfy both the frequency and tie-breaking requirements.<br><br>1. <b>Frequency Aggregation:</b> Perform a linear traversal of the sightings array to build a frequency map. Since Type IDs are limited to 1-5, a fixed-size array or dictionary is sufficient.<br>2. <b>Global Maximum Search:</b> Determine the highest frequency count across all categories.<br>3. <b>Lexicographical Filtering:</b> Iterate through the gathered tallies (or use a filtered comprehension) to find all Type IDs matching the maximum frequency, and return the minimum value.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). The sighting array is traversed once. Post-processing involves at most 5 elements, which is constant-time.<br>• <b>Space:</b> O(1). The storage remains constant because the number of Bird Types is fixed at 5, regardless of the input size $N$.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def migratoryBirds(arr):\n    # Type IDs are strictly 1-5\n    counts = [0] * 6\n    for bird_type in arr:\n        counts[bird_type] += 1\n    \n    max_count = max(counts)\n    for i in range(1, 6):\n        if counts[i] == max_count:\n            return i</pre>",
        stepByStep: `<b>Validation Scenario:</b><br>
<b>Sightings:</b> [1, 4, 4, 4, 5, 3]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Tallying:</i> {1:1, 3:1, 4:3, 5:1}.<br>
    <i>Max Sighting Count:</i> 3.<br>
    <i>Winner Selection:</i> Type 4 has count 3. No other type matches.
</div>
<b>Final Result:</b> 4.`
    },
    {
        id: "picking-numbers",
        title: "Picking Numbers<br><a href='https://www.hackerrank.com/challenges/picking-numbers/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Core Objective:</b> Find the maximum length of a subset where the absolute difference between any two elements is $\leq 1$.<br><br><b>Mathematical Constraint:</b> This rule implies the subset can only contain at most two distinct integers, $\{n, n+1\}$, for any $n$.",
        solution: "<b>Algorithmic Strategy (Frequency Bucketing):</b><br>Rather than evaluating combinations, the problem is solved by analyzing the <b>Frequency Distribution</b> of the input. <br><br>1. <b>Histogram Construction:</b> Iterate through the array and populate a frequency array (or hash map) representing counts for each integer encountered.<br>2. <b>Sliding Pairwise Summation:</b> The magnitude of the largest valid subset is the maximum value of $Frequency(i) + Frequency(i-1)$ across all valid integers $i$.<br>3. <b>Deterministic Pass:</b> A single pass through the frequency buckets yields the result in linear time.",
        optimality: "<b>Efficiency Metrics:</b><br>• <b>Time:</b> O(N). Building the frequency map is O(N), followed by a constant-time O(K) pass where $K \leq 100$.<br>• <b>Space:</b> O(1). Since the range of input values is strictly bounded at 100, the auxiliary storage remains constant regardless of array size $N$.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def pickingNumbers(a):\n    frequency = [0] * 101\n    for x in a:\n        frequency[x] += 1\n    \n    max_len = 0\n    # Adjacent bucket summation\n    for i in range(1, 101):\n        max_len = max(max_len, frequency[i] + frequency[i-1])\n    return max_len</pre>",
        stepByStep: `<b>Algorithmic Trace:</b><br>
<b>Input:</b> [1, 1, 2, 2, 4, 4, 5, 5, 5]<br><br>
<b>Execution Phases:</b>
<div style="padding-left: 20px; border-left: 2px solid #34c759; margin-left: 10px; margin-bottom: 10px;">
    <i>Histogram:</i> {1:2, 2:2, 4:2, 5:3}.<br>
    <i>Pair [1,2]:</i> Sum = 2 + 2 = 4.<br>
    <i>Pair [2,3]:</i> Sum = 2 + 0 = 2.<br>
    <i>Pair [4,5]:</i> Sum = 2 + 3 = <b>5</b>.
</div>
<b>Max Subset Length:</b> 5`
    },
    {
        id: "plus-minus",
        title: "Plus Minus<br><a href='https://www.hackerrank.com/challenges/plus-minus/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Core Objective:</b> Calculate the fractional distribution of positive elements, negative elements, and zeros within a given integer vector.<br><br><b>Precision Requirement:</b> Results must be formatted as decimal strings with exactly six decimal places of precision.",
        solution: "<b>Algorithmic Strategy (Linear Classification):</b><br>The solution utilizes <b>Conditional Categorization</b> to partition the dataset in a single pass.<br><br>1. <b>Iterative Evaluation:</b> Traverse the array, incrementing one of three counters (pos, neg, zero) based on the scalar value of each element.<br>2. <b>Normalization:</b> Divide each accumulator by the total element count $N$ to derive the categorical density.<br>3. <b>Formatted Output:</b> Apply fixed-point arithmetic or string formatting to ensure the required decimal precision.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). A single linear sweep is mathematically required to inspect every element.<br>• <b>Space:</b> O(1). Regardless of input magnitude, only three integer counters and the input length are stored.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def plusMinus(arr):\n    n = len(arr)\n    p, m, z = 0, 0, 0\n    for x in arr:\n        if x > 0: p += 1\n        elif x < 0: m += 1\n        else: z += 1\n    \n    print(f\"{p/n:.6f}\\n{m/n:.6f}\\n{z/n:.6f}\")</pre>",
        stepByStep: `<b>Computational Trace:</b><br>
<b>Input:</b> [-1, -1, 0, 1, 1] (N=5)<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 20px solid #afafaf; margin-left: 10px; margin-bottom: 10px;">
    <i>Classification:</i> 2 Positives, 2 Negatives, 1 Zero.<br>
    <i>Positive Ratio:</i> 2/5 = 0.400000.<br>
    <i>Negative Ratio:</i> 2/5 = 0.400000.<br>
    <i>Zero Ratio:</i> 1/5 = 0.200000.
</div>
<b>Output stream successfully generated.</b>`
    },
    {
        id: "simple-array-sum",
        title: "Simple Array Sum<br><a href='https://www.hackerrank.com/challenges/simple-array-sum/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Core Objective:</b> Calculate the arithmetic sum of all integer elements within a given linear array.",
        solution: "<b>Algorithmic Strategy (Accumulation):</b><br>This utilizes the <b>Cumulative Summation</b> pattern, a foundational primitive in computer science.<br><br>1. <b>State Initialization:</b> Define a scalar accumulator variable (e.g., <code>total</code>) initialized to zero.<br>2. <b>Linear Iteration:</b> Traverse the array sequentially. At each element, perform a scalar addition to the accumulator.<br>3. <b>Terminal Return:</b> After the final element is processed, the accumulator contains the global sum.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(N). Linear time is strictly required as every element must be visited at least once to determine its value.<br>• <b>Space:</b> O(1). The solution requires only one auxiliary variable, regardless of the size of the input dataset.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def simpleArraySum(ar):\n    accumulator = 0\n    for element in ar:\n        accumulator += element\n    return accumulator</pre>",
        stepByStep: `<b>Computational Trace:</b><br>
<b>Input:</b> [1, 2, 3, 4]<br><br>
<b>Iteration Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ffcc00; margin-left: 10px; margin-bottom: 10px;">
    <i>Index 0:</i> Sum = 0 + 1 = 1.<br>
    <i>Index 1:</i> Sum = 1 + 2 = 3.<br>
    <i>Index 2:</i> Sum = 3 + 3 = 6.<br>
    <i>Index 3:</i> Sum = 6 + 4 = 10.
</div>
<b>Final Result:</b> 10`
    },
    {
        id: "sock-merchant",
        title: "Sales by Match<br><a href='https://www.hackerrank.com/challenges/sock-merchant/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Pair Extraction:</b> Given a collection of elements (represented by color IDs), determine the maximum number of matched pairs that can be formed.",
        solution: "<b>Algorithmic Strategy (Hash-Set State Machine):</b><br>The problem is modeled as a <b>Streaming Complement Search</b>.<br><br>1. <b>Active Tracking:</b> Maintain a set of 'unpaired' elements encountered so far.<br>2. <b>Sequential Matching:</b> For each incoming element:<br>• If it already exists in the unpaired set, a pair is identified. Increment the pair tally and remove the element from the set (restoring it to a balanced state).<br>• If it is not in the set, add it to the unpaired collection to await a future match.<br>3. <b>Terminal State:</b> The final tally represents the global pair count.",
        optimality: "<b>Complexity Metrics:</b><br>• <b>Time:</b> O(N). A single pass through the array with O(1) average-case set lookups and modifications.<br>• <b>Space:</b> O(U). Auxiliary memory scales with the number of unique elements awaiting a match ($U \leq N$).<br><br><b>Efficiency Note:</b> This approach is mathematically optimal because it processes each element exactly once and avoids the O(N log N) overhead of sorting.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def sockMerchant(n, ar):\n    unpaired = set()\n    pairs = 0\n    for item in ar:\n        if item in unpaired:\n            pairs += 1\n            unpaired.remove(item)\n        else:\n            unpaired.add(item)\n    return pairs</pre>",
        stepByStep: `<b>Algorithmic Trace:</b><br>
<b>Input:</b> [10, 20, 20, 10, 30]<br><br>
<b>Processing Cycle:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff3b30; margin-left: 10px; margin-bottom: 10px;">
    <i>Item 10:</i> Not in set. Set: {10}. Pairs: 0.<br>
    <i>Item 20:</i> Not in set. Set: {10, 20}. Pairs: 0.<br>
    <i>Item 20:</i> <b>Match found!</b> Set: {10}. Pairs: 1.<br>
    <i>Item 10:</i> <b>Match found!</b> Set: {}. Pairs: 2.<br>
    <i>Item 30:</i> Not in set. Set: {30}. Pairs: 2.
</div>
<b>Final Result:</b> 2`
    },
    {
        id: "subarray-division",
        title: "Subarray Division<br><a href='https://www.hackerrank.com/challenges/the-birthday-bar/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Segment Identification:</b> Given an array of integers, count the number of contiguous subarrays of length $m$ whose elements sum up to a target value $d$.",
        solution: "<b>Algorithmic Strategy (Sliding Window):</b><br>The problem is an application of a <b>Fixed-Size Sliding Window</b>.<br><br>1. <b>Initial Window:</b> Calculate the sum of the first $m$ elements.<br>2. <b>Window Propagation:</b> Iteratively slide the window to the right, subtracting the leftmost (exiting) element and adding the new rightmost (entering) element. This maintains the current window sum in constant time.<br>3. <b>Target Matching:</b> During each step, compare the current window sum to $d$. Increment the result counter upon a match.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(N). By using the sliding window subtraction/addition technique, we avoid redundant O(M) summation at each step.<br>• <b>Space:</b> O(1). Only local variables for the window sum and tally are required.<br><br><b>Conclusion:</b> This approach is asymptotically optimal, ensuring linear execution speed irrespective of the window size $m$.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def birthday(s, d, m):\n    count = 0\n    current_sum = sum(s[:m])\n    if current_sum == d: count += 1\n    \n    for i in range(m, len(s)):\n        current_sum += s[i] - s[i - m]\n        if current_sum == d:\n            count += 1\n    return count</pre>",
        stepByStep: `<b>Execution Trace:</b><br>
<b>Bar:</b> [2, 2, 1, 3, 2], d=4, m=2<br><br>
<b>Window Sequence:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px;">
    <i>Window 0 ([2, 2]):</i> Sum = 4. <b>Success!</b> Tally: 1.<br>
    <i>Window 1 ([2, 1]):</i> Sum = 3. Tally: 1.<br>
    <i>Window 2 ([1, 3]):</i> Sum = 4. <b>Success!</b> Tally: 2.<br>
    <i>Window 3 ([3, 2]):</i> Sum = 5. Tally: 2.
</div>
<b>Final Result:</b> 2`
    },
    {
        id: "jumping-on-the-clouds",
        title: "Jumping on the Clouds<br><a href='https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Shortest Path Optimization:</b> Navigate a 1D cloud array from the start to the terminal cloud using the minimum number of jumps. <br><br><b>Constraint Logic:</b><br>• Permissible step sizes: 1 or 2.<br>• Restricted elements: Jumps cannot terminate on a 'thunderhead' cloud (index value 1).",
        solution: "<b>Algorithmic Strategy (Greedy Look-Ahead):</b><br>Because the goal is global minimization, a <b>Greedy Search</b> with a 2-step look-ahead is optimal for this specific topology.<br><br>1. <b>Evaluation:</b> At current index $i$, prioritize a 2-step jump by checking if $i+2$ is within bounds and contains a safe cloud (0).<br>2. <b>Execution:</b> If safe, commit to the 2-step jump; otherwise, proceed with a mandatory 1-step jump.<br>3. <b>Termination:</b> Continue until the target index ($N-1$) is reached.",
        optimality: "<b>Efficiency Profile:</b><br>• <b>Time:</b> O(N). The array is traversed at most once.<br>• <b>Space:</b> O(1). Only the current index and jump tally are persisted in memory.<br><br><b>Conclusion:</b> The greedy property holds here because taking the largest possible step never precludes reaching the goal, effectively reducing the sub-problem dimension at each decision point.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def jumpingOnClouds(c):\n    jumps, i = 0, 0\n    while i < len(c) - 1:\n        # Greedy check for 2-step leap\n        if i + 2 < len(c) and c[i+2] == 0:\n            i += 2\n        else:\n            i += 1\n        jumps += 1\n    return jumps</pre>",
        stepByStep: `<b>Algorithmic Trace:</b><br>
<b>Clouds:</b> [0, 0, 1, 0, 0, 1, 0]<br><br>
<b>Processing Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px;">
    <i>Pos 0:</i> Path [0+2] blocked (value 1). Move to Pos 1. Tally: 1.<br>
    <i>Pos 1:</i> Path [1+2] clear (value 0). Leap to Pos 3. Tally: 2.<br>
    <i>Pos 3:</i> Path [3+2] blocked (value 1). Move to Pos 4. Tally: 3.<br>
    <i>Pos 4:</i> Path [4+2] clear (value 0). Leap to Pos 6. Tally: 4.
</div>
<b>Terminal State Reached. Result:</b> 4.`
    },
    {
        id: "sequence-equation",
        title: "Sequence Equation<br><a href='https://www.hackerrank.com/challenges/permutation-equation/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "<b>Core Objective:</b> For a given permutation array $P$ of length $n$, find a sequence of values $y$ such that $P(P(y)) = x$ for every $x \in \{1, 2, ..., n\}$.",
        solution: "<b>Algorithmic Strategy (Functional Inversion):</b><br>The problem requires resolving a <b>Double Nested Lookup</b> in a permutation sequence.<br><br>1. <b>Mapping Construction:</b> To avoid redundant searches, build an inverse mapping $Inv(x) = \text{index of } x$ such that $P[Inv(x)] = x$.<br>2. <b>Double-Inverse Lookup:</b> For each value $x$, the required position $y$ is derived by applying the inverse mapping twice: $y = Inv(Inv(x))$.<br>3. <b>Result Generation:</b> Collate the resulting $y$ values into a terminal sequence.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). Constructing the inverse map takes linear time, and each subsequent double-lookup is O(1).<br>• <b>Space:</b> O(N) to store the auxiliary inverse mapping array or hash map.<br><br><b>Technical Superiority:</b> Using an explicit mapping converts a potential O(N²) quadratic search into a linear-time operation, ensuring scalability for large permutations.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def permutationEquation(p):\n    # 1-based indexing correction\n    # Map value to its 1-based index\n    pos_map = {val: i + 1 for i, val in enumerate(p)}\n    \n    res = []\n    for x in range(1, len(p) + 1):\n        # Double lookup: y = p^-1(p^-1(x))\n        first_jump = pos_map[x]\n        second_jump = pos_map[first_jump]\n        res.append(second_jump)\n    return res</pre>",
        stepByStep: `<b>Validation Scenario:</b><br>
<b>Permutation P:</b> [2, 3, 1] (Indices: 1:2, 2:3, 3:1)<br><br>
<b>Inverse Map (Value -> Index):</b> {2:1, 3:2, 1:3}<br><br>
<b>Lookup Operations:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff2d55; margin-left: 10px; margin-bottom: 10px;">
    <i>For x=1:</i> Inv(1) = 3. Inv(3) = 2. <b>Result:</b> 2.<br>
    <i>For x=2:</i> Inv(2) = 1. Inv(1) = 3. <b>Result:</b> 3.<br>
    <i>For x=3:</i> Inv(3) = 2. Inv(2) = 1. <b>Result:</b> 1.
</div>
<b>Collated Result:</b> [2, 3, 1]`
    },
    {
        id: "play-with-words",
        title: "Play with Words<br><a href='https://www.hackerrank.com/challenges/strplay/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Dynamic Programming",
        problem: "Imagine you have a long string of letters, like a magic scroll. You want to cut this scroll at exactly one point into two separate pieces. Then, for each piece, you want to find the longest possible hidden message that reads the same forwards and backwards (a palindrome). Finally, you multiply the lengths of those two hidden messages together. Where should you cut the scroll to make that product as large as possible?",
        solution: "To solve this, we use **Dynamic Programming** to find the 'Longest Palindromic Subsequence' (LPS) for every possible segment of the string. We build a magic table where we calculate: 'What is the longest palindrome in this tiny 2-letter piece? What about this 3-letter piece?' until we know the LPS for every segment. Once we have our table, we try cutting the string at every single possible position. For each cut, we look up our table to find the best palindrome on the left and the best one on the right, multiply them, and keep track of the record-breaking product!",
        optimality: "This strategy is highly efficient for such a complex task, achieving <b>O(N²) Time complexity</b>. Building the table takes N² operations, and checking all cut points takes only N more. It uses <b>O(N²) Space</b> to store the table. While it uses more memory than a simple loop, it is mathematically the fastest way to solve this 'two-part' palindrome problem because it avoids re-calculating the same palindromes over and over again.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def playWithWords(s):\n    n = len(s)\n    dp = [[0] * n for _ in range(n)]\n    \n    # Build LPS table\n    for i in range(n - 1, -1, -1):\n        dp[i][i] = 1\n        for j in range(i + 1, n):\n            if s[i] == s[j]:\n                dp[i][j] = dp[i + 1][j - 1] + 2\n            else:\n                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])\n\n    # Maximize product of non-overlapping LPS pieces\n    max_product = 0\n    for i in range(n - 1):\n        product = dp[0][i] * dp[i + 1][n - 1]\n        max_product = max(max_product, product)\n            \n    return max_product</pre>",
        stepByStep: `<b>Input String:</b> "baaa"<br><br>
<b>Phase 1: Build the LPS Table</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Single letters:</i> All have length 1.<br>
    <i>Pair "aa":</i> Match! Length becomes 2.<br>
    <i>Segment "aaa":</i> Outer "a"s match + middle "a" = 3.<br>
    <i>Segment "baa":</i> No outer match. Best is "aa" (length 2).
</div>
<b>Phase 2: Testing the Cut Points</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Cut 1 [b | aaa]:</i> Left LPS: 1 ("b"), Right LPS: 3 ("aaa"). <b>Product: 3</b><br>
    <i>Cut 2 [ba | aa]:</i> Left LPS: 1 ("b" or "a"), Right LPS: 2 ("aa"). <b>Product: 2</b><br>
    <i>Cut 3 [baa | a]:</i> Left LPS: 2 ("aa"), Right LPS: 1 ("a"). <b>Product: 2</b>
</div>
<b>Final Answer:</b> The maximum product is <b>3</b>.`
    },
    {
        id: "a-very-big-sum",
        title: "A Very Big Sum<br><a href='https://www.hackerrank.com/challenges/a-very-big-sum/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Calculate the aggregate sum of a vector containing large integers ($10^{10}$ or greater).<br><br><b>Constraint Context:</b> In statically typed languages (e.g., C++, Java), standard 32-bit integers overflow at $2^{31}-1$. This problem necessitates the use of 64-bit integers (long/long long) or arbitrary-precision arithmetic.",
        solution: "<b>Algorithmic Strategy (Arbitrary-Precision Accumulation):</b><br>The solution leverages high-level language capabilities for <b>Infinite Precision Arithmetic</b>.<br><br>1. <b>Accumulator Initialization:</b> Define a 64-bit or arbitrary-precision integer initialized to zero.<br>2. <b>Sequential Aggregation:</b> Iterate through the integer array, performing scalar addition. Python, specifically, dynamically reallocates memory for integers to prevent overflow, treating large values as objects.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). Each element must be visited once.<br>• <b>Space:</b> O(1). Only a single accumulator is maintained, though its bit-width grows logarithmically with the sum's magnitude.<br><br><b>Conclusion:</b> This approach is asymptotically optimal, ensuring safe summation without the risk of arithmetic overflow.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def aVeryBigSum(ar):\n    # Python handles arbitrary precision integers automatically\n    total = 0\n    for x in ar:\n        total += x\n    return total</pre>",
        stepByStep: `<b>Computational Trace:</b><br>
<b>Input:</b> [10^10 + 1, 10^10 + 2]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ffcc00; margin-left: 10px; margin-bottom: 10px;">
    <i>Current Sum:</i> 0.<br>
    <i>Add Val 1:</i> 10,000,000,001.<br>
    <i>Add Val 2:</i> 20,000,000,003.
</div>
<b>Final Result:</b> 20,000,000,003`
    },
    {
        id: "beautiful-days",
        title: "Beautiful Days at the Movies<br><a href='https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Given a range $[i, j]$ and a divisor $k$, count the number of 'beautiful days'.<br><br><b>Mathematical Definition:</b> A day $x$ is beautiful if $|x - reverse(x)|$ is perfectly divisible by $k$ (i.e., $|x - reverse(x)| \pmod k = 0$).",
        solution: "<b>Algorithmic Strategy (Exhaustive Range Search):</b><br>The problem is solved using <b>Linear Iteration</b> combined with <b>String-Based Transformation</b> for digit reversal.<br><br>1. <b>Range Traversal:</b> Iterate from $i$ to $j$ inclusive.<br>2. <b>Digit Inversion:</b> For each day $x$, convert it to a string, reverse the character sequence, and cast it back to an integer to obtain $reverse(x)$.<br>3. <b>Divisibility Validation:</b> Compute the absolute difference and evaluate the modular condition against $k$. Increment the counter for successful matches.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N * log10(M)), where $N$ is the range width and $M$ is the magnitude of the day number. Reversing digits takes logarithmic time relative to the value.<br>• <b>Space:</b> O(log10(M)) auxiliary space to store the string representation during the reversal process.<br><br><b>Conclusion:</b> This approach is efficient and robust for the typical constraints of integer range problems.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def beautifulDays(i, j, k):\n    count = 0\n    for day in range(i, j + 1):\n        # String reversal trick\n        rev = int(str(day)[::-1])\n        if abs(day - rev) % k == 0:\n            count += 1\n    return count</pre>",
        stepByStep: `<b>Execution Trace:</b><br>
<b>Range:</b> [20, 21], <b>k:</b> 6<br><br>
<b>Processing Cycle:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Day 20:</i> Reverse = 02. |20 - 2| = 18. 18 % 6 = 0. <b>Success.</b><br>
    <i>Day 21:</i> Reverse = 12. |21 - 12| = 9. 9 % 6 = 3. <b>Fail.</b>
</div>
<b>Final Result:</b> 1`
    },
    {
        id: "cat-and-mouse",
        title: "Cats and a Mouse<br><a href='https://www.hackerrank.com/challenges/cats-and-a-mouse/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Determine which of two cats (positioned at $x$ and $y$) will reach a mouse (at $z$) first, assuming uniform velocity and simultaneous starts.<br><br><b>Constraint Logic:</b> If both cats are equidistant from the mouse, they enter a state of conflict, allowing the mouse to escape.",
        solution: "<b>Algorithmic Strategy (Absolute Distance Comparison):</b><br>The problem simplifies to a <b>Scalar 1D Distance Analysis</b>.<br><br>1. <b>Metric Calculation:</b> Compute the L1 distance (absolute difference) for both cats relative to the mouse's coordinate: $D_A = |x - z|$ and $D_B = |y - z|$.<br>2. <b>Selection Logic:</b> Apply conditional branches to identify the minimum distance. If $D_A = D_B$, the collision state is triggered.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(1). Only two arithmetic subtractions and one logical comparison are required per query.<br>• <b>Space:</b> O(1). No auxiliary data structures are necessitated.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def catAndMouse(x, y, z):\n    dist_a = abs(x - z)\n    dist_b = abs(y - z)\n    \n    if dist_a < dist_b: return 'Cat A'\n    if dist_b < dist_a: return 'Cat B'\n    return 'Mouse C'</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> x=1, y=5, z=4<br><br>
<b>Calculation Cycle:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff2d55; margin-left: 10px; margin-bottom: 10px;">
    <i>Cat A Distance:</i> |1 - 4| = 3.<br>
    <i>Cat B Distance:</i> |5 - 4| = 1.<br>
    <i>Verdict:</i> 1 < 3. Cat B wins.
</div>
<b>Terminal Result:</b> Cat B`
    },
    {
        id: "chocolate-feast",
        title: "Chocolate Feast<br><a href='https://www.hackerrank.com/challenges/chocolate-feast/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Calculate the maximum number of chocolates obtainable given an initial budget $n$, unit cost $c$, and a wrapper-to-chocolate exchange rate $m$.<br><br><b>Constraint Logic:</b> The process is recursive/iterative; every 'free' chocolate acquired yields a wrapper that can be aggregated for subsequent exchanges.",
        solution: "<b>Algorithmic Strategy (Iterative Exchange Simulation):</b><br>The solution models a <b>Diminishing Return Loop</b>.<br><br>1. <b>Primary Purchase:</b> Derive initial count and wrappers: $chocolates = n // c$.<br>2. <b>Exchange Loop:</b> While $wrappers \geq m$, trade $m$ wrappers for 1 new chocolate. The new wrapper count becomes the sum of newly acquired wrappers and the remainder of the previous set ($wrappers \pmod m$).<br>3. <b>Aggregation:</b> Continuously increment the total eaten count until the exchange threshold is no longer met.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> $O(\log_m(n))$. The number of wrappers decreases geometrically in each iteration of the loop.<br>• <b>Space:</b> O(1). Only scalar integer variables are used to track state.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def chocolateFeast(n, c, m):\n    total = n // c\n    wrappers = total\n    \n    while wrappers >= m:\n        # Convert wrappers to chocolate\n        claimed = wrappers // m\n        total += claimed\n        # Remaining wrappers + new wrappers\n        wrappers = (wrappers % m) + claimed\n        \n    return total</pre>",
        stepByStep: `<b>Simulation Log:</b><br>
<b>Input:</b> n=15, c=3, m=2<br><br>
<b>Phases:</b>
<div style="padding-left: 20px; border-left: 2px solid #34c759; margin-left: 10px; margin-bottom: 10px;">
    <i>Initial:</i> Eaten: 5, Wrappers: 5.<br>
    <i>Cycle 1:</i> Trade 4 wrappers for 2 chocolates. Eaten: 7, Wrappers: (5-4)+2 = 3.<br>
    <i>Cycle 2:</i> Trade 2 wrappers for 1 chocolate. Eaten: 8, Wrappers: (3-2)+1 = 2.<br>
    <i>Cycle 3:</i> Trade 2 wrappers for 1 chocolate. Eaten: 9, Wrappers: (2-2)+1 = 1.<br>
    <i>Terminate:</i> 1 < 2.
</div>
<b>Final Result:</b> 9`
    },
    {
        id: "day-of-programmer",
        title: "Day of the Programmer<br><a href='https://www.hackerrank.com/challenges/day-of-the-programmer/problem' target='_blank' style='font-size: 0.9rem; epoch='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Determine the exact date of the 256th day of the year in Russia, across three distinct temporal regimes (Julian, Gregorian, and the 1918 Revolution Transition).<br><br><b>Contextual Logic:</b><br>• 1700-1917: Julian Calendar (Leap if divisible by 4).<br>• 1918: Transition year (Feb 14 was the day after Jan 31).<br>• 1919-2700: Gregorian Calendar (Standard leap rules).",
        solution: "<b>Algorithmic Strategy (Temporal Case Partitioning):</b><br>The algorithm provides a <b>Deterministic Mapping</b> based on the historical era of the input year.<br><br>1. <b>Era Identification:</b> Segment years into Julian ( < 1918), Gregorian ( > 1918), or the 1918 anomaly.<br>2. <b>Leap Precision:</b> Apply era-specific leap year predicates. A leap year results in the 256th day falling on Sept 12; a non-leap year on Sept 13.<br>3. <b>Transition Handling:</b> In 1918, due to the 13-day 'desynchronization' in February, the 256th day is uniquely Sept 26.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(1). The solution executes a fixed number of conditional evaluations.<br>• <b>Space:</b> O(1). No auxiliary storage is required; output is a formatted string constant.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def dayOfProgrammer(year):\n    if year == 1918: return \"26.09.1918\"\n    \n    # Predicate for Leap Year\n    if year < 1918:\n        # Julian logic\n        is_leap = (year % 4 == 0)\n    else:\n        # Gregorian logic\n        is_leap = (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)\n        \n    day = \"12\" if is_leap else \"13\"\n    return f\"{day}.09.{year}\"</pre>",
        stepByStep: `<b>Validation Scenario:</b><br>
<b>Year:</b> 1800 (Julian)<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px;">
    <i>Era:</i> Julian (1800 < 1918).<br>
    <i>Leap Check:</i> 1800 % 4 == 0. <b>TRUE</b>.<br>
    <i>Mapping:</i> 256th day in a Julian leap year is Sept 12.
</div>
<b>Terminal Result:</b> 12.09.1800`
    },
    {
        id: "extra-long-factorials",
        title: "Extra Long Factorials<br><a href='https://www.hackerrank.com/challenges/extra-long-factorials/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Compute the factorial ($n!$) for large values of $n$ (up to 100).<br><br><b>Precision Constraint:</b> Values like $100!$ contain approximately 158 digits, exceeding the storage capacity of standard 64-bit primitive types.",
        solution: "<b>Algorithmic Strategy (Arbitrary-Precision Multiplication):</b><br>The algorithm utilizes <b>Infinite Precision Integer Arithmetic</b>, natively supported by Python's object model.<br><br>1. <b>Base Selection:</b> Start with a value of 1.<br>2. <b>Sequential Product:</b> Iteratively multiply by every integer up to $n$.<br>3. <b>Memory Management:</b> The underlying system dynamically allocates contiguous memory blocks to represent increasingly large bit-depths as the product expands.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(N² log N). While loop overhead is linear, the cost of multiplying large integers scales with the number of digits/bits involved.<br>• <b>Space:</b> O(N log N) to store the resulting massive integer value.<br><br><b>Conclusion:</b> For the specified constraints, this approach is perfectly efficient, leveraging optimized library-level multiplication routines.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def extraLongFactorials(n):\n    # Python 3 integers have arbitrary precision\n    res = 1\n    for i in range(1, n + 1):\n        res *= i\n    print(res)</pre>",
        stepByStep: `<b>Mathematical Expansion:</b><br>
<b>Input:</b> n = 25<br><br>
<b>Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #afafaf; margin-left: 10px; margin-bottom: 10px;">
    <i>N=1..10:</i> 3,628,800.<br>
    <i>N=11..20:</i> ~2.43 * 10^18.<br>
    <i>Final (25!):</i> 15,511,210,043,330,985,984,000,000.
</div>
<b>Terminal Verdict:</b> Result successfully printed with 26 digits.`
    },
    {
        id: "find-digits",
        title: "Find Digits<br><a href='https://www.hackerrank.com/challenges/find-digits/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> For an integer $n$, determine the count of its component digits that are divisors of $n$.<br><br><b>Constraint Logic:</b> Zero-valued digits must be excluded from the evaluation to prevent division-by-zero errors.",
        solution: "<b>Algorithmic Strategy (Linear Digit Inspection):</b><br>The algorithm performs a <b>Serial Divisibility Audit</b> on each decimal place of the number.<br><br>1. <b>Digit Extraction:</b> Decompose $n$ into its individual digits using string conversion or modular extraction ($n \pmod{10}$).<br>2. <b>Validation:</b> For each non-zero digit $d$, evaluate the condition $n \pmod d = 0$.<br>3. <b>Aggregation:</b> Maintains a scalar counter for all digits that satisfy the divisibility predicate.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(D), where $D$ is the number of decimal digits ($\log_{10} n$). Each digit is inspected exactly once.<br>• <b>Space:</b> O(D) for digit storage (if using strings) or O(1) if using mathematical extraction.<br><br><b>Conclusion:</b> This approach is perfectly efficient, achieving the mathematical lower bound for digit-based inspection.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def findDigits(n):\n    count = 0\n    # Iterate through string representation\n    for char in str(n):\n        digit = int(char)\n        # Avoid division by zero and check remainder\n        if digit != 0 and n % digit == 0:\n            count += 1\n    return count</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> 1024<br><br>
<b>Calculation Cycle:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff9500; margin-left: 10px; margin-bottom: 10px;">
    <i>Digit 1:</i> 1024 % 1 == 0. <b>TRUE</b>.<br>
    <i>Digit 0:</i> Skip (Zero).<br>
    <i>Digit 2:</i> 1024 % 2 == 0. <b>TRUE</b>.<br>
    <i>Digit 4:</i> 1024 % 4 == 0. <b>TRUE</b>.
</div>
<b>Final Result:</b> 3`
    },
    {
        id: "get-total-x",
        title: "Between Two Sets<br><a href='https://www.hackerrank.com/challenges/between-two-sets/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Find the intersection of two mathematical properties: common multiples of set $A$ and common divisors of set $B$.<br><br><b>Technical Rule:</b> An integer $x$ is included if $a|x$ $\forall a \in A$ AND $x|b$ $\forall b \in B$.",
        solution: "<b>Algorithmic Strategy (LCM-GCD Boundary Identification):</b><br>The solution optimizes the search space using <b>Fundamental Theorem of Arithmetic</b> properties.<br><br>1. <b>Lower Bound:</b> Calculate the Least Common Multiple (LCM) of set $A$. Any valid $x$ must be a multiple of $LCM(A)$.<br>2. <b>Upper Bound:</b> Calculate the Greatest Common Divisor (GCD) of set $B$. Any valid $x$ must be a divisor of $GCD(B)$.<br>3. <b>Iterative Search:</b> Scan multiples of $LCM(A)$ up to $GCD(B)$. If $GCD(B) \pmod x = 0$, $x$ is a valid member of the bridge set.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(N log(max) + M log(max)). GCD/LCM calculations are highly efficient (Euclidean algorithm). The final search pass is proportional to the number of multiples.<br>• <b>Space:</b> O(1). Only the bounds and current multiple are persisted.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>from math import gcd\n\ndef getTotalX(a, b):\n    # Helper for LCM\n    def get_lcm(x, y): return (x * y) // gcd(x, y)\n\n    # Reduce A to its LCM, B to its GCD\n    lcm_a = a[0]\n    for i in a[1:]: lcm_a = get_lcm(lcm_a, i)\n    \n    gcd_b = b[0]\n    for i in b[1:]: gcd_b = gcd(gcd_b, i)\n\n    # Count multiples of lcm_a that divide gcd_b\n    count = 0\n    curr = lcm_a\n    while curr <= gcd_b:\n        if gcd_b % curr == 0: count += 1\n        curr += lcm_a\n    return count</pre>",
        stepByStep: `<b>Algorithmic Trace:</b><br>
<b>A:</b> [2, 6], <b>B:</b> [24, 36]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> LCM([2, 6]) = 6.<br>
    <i>Step 2:</i> GCD([24, 36]) = 12.<br>
    <i>Step 3 (Scanning):</i><br>
    &nbsp;&nbsp;• x=6: 12 % 6 == 0. <b>Success.</b><br>
    &nbsp;&nbsp;• x=12: 12 % 12 == 0. <b>Success.</b>
</div>
<b>Final Result:</b> 2`
    },
    {
        id: "grading-students",
        title: "Grading Students<br><a href='https://www.hackerrank.com/challenges/grading/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Transform a list of integer grades using a specific rounding protocol.<br><br><b>Protocol Constraints:</b><br>• If $Grade < 38$, no transformation (failure threshold).<br>• If $(NextMultipleOf5 - Grade) < 3$, round up to the multiple.<br>• Else, maintain the original grade.",
        solution: "<b>Algorithmic Strategy (Modular Distance Evaluation):</b><br>The algorithm performs a <b>Linear Transformation Pass</b> over student records.<br><br>1. <b>Evaluation:</b> For each grade $g \geq 38$, compute the remainder $r = g \pmod 5$.<br>2. <b>Distance Logic:</b> The distance to the next multiple is $5 - r$. If this delta is strictly less than 3 (equivalently, if $r \geq 3$), apply the rounding upward.<br>3. <b>In-place Update:</b> Modify the array sequence to reflect new scalar values.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(N). Each student record is evaluated once in a single pass.<br>• <b>Space:</b> O(1) beyond input if modified in-place, or O(N) for the resulting vector.<br><br><b>Conclusion:</b> This approach is asymptotically optimal for sequential dataset modification.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def gradingStudents(grades):\n    rounded_grades = []\n    for g in grades:\n        if g < 38:\n            rounded_grades.append(g)\n        else:\n            remainder = g % 5\n            if remainder >= 3:\n                rounded_grades.append(g + (5 - remainder))\n            else:\n                rounded_grades.append(g)\n    return rounded_grades</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> [73, 67, 33]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px;">
    <i>G=73:</i> 73 % 5 = 3. 3 $\geq$ 3? Yes. <b>Round to 75.</b><br>
    <i>G=67:</i> 67 % 5 = 2. 2 $\geq$ 3? No. <b>Stay 67.</b><br>
    <i>G=33:</i> 33 < 38? Yes. <b>Stay 33.</b>
</div>
<b>Final Result:</b> [75, 67, 33]`
    },
    {
        id: "how-many-games",
        title: "Halloween Sale<br><a href='https://www.hackerrank.com/challenges/halloween-sale/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Determine the maximum quantity of items purchasable given a starting price $p$, a progressive discount $d$, a price floor $m$, and a total budget $s$.<br><br><b>Pricing Model:</b> The price of the $k$-th item is $max(m, p - (k-1)d)$.",
        solution: "<b>Algorithmic Strategy (Greedy Simulation):</b><br>The solution employs a <b>Greedy Accumulation Loop</b> to simulate sequential transactions.<br><br>1. <b>Transaction Execution:</b> While the remaining budget $s$ exceeds the current price $p_{curr}$, execute a purchase by decrementing $s$ and incrementing the count.<br>2. <b>Dynamic Repricing:</b> After each purchase, update the price: $p_{new} = max(m, p_{curr} - d)$.<br>3. <b>Termination:</b> The loop concludes when the budget is insufficient for the next purchase.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(S/M). In the worst case (where the price hits the floor $m$ quickly), the number of iterations is bounded by the total budget divided by the minimum price.<br>• <b>Space:</b> O(1). Only local scalar variables are used to maintain price and budget state.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def howManyGames(p, d, m, s):\n    count = 0\n    # Iterative greedy purchase\n    while s >= p:\n        s -= p\n        count += 1\n        # Update price with floor constraint\n        p = max(m, p - d)\n    return count</pre>",
        stepByStep: `<b>Algorithmic Trace:</b><br>
<b>Initial:</b> p=20, d=3, m=6, s=70<br><br>
<b>Transaction Cycles:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff3b30; margin-left: 10px; margin-bottom: 10px;">
    <i>Buy 1:</i> Cost 20. Rem: 50. Price $\rightarrow$ 17.<br>
    <i>Buy 2:</i> Cost 17. Rem: 33. Price $\rightarrow$ 14.<br>
    <i>Buy 3:</i> Cost 14. Rem: 19. Price $\rightarrow$ 11.<br>
    <i>Buy 4:</i> Cost 11. Rem: 8. Price $\rightarrow$ 8.<br>
    <i>Buy 5:</i> Cost 8. Rem: 0. Price $\rightarrow$ 6.<br>
    <i>Buy 6:</i> Cost 6. Rem: -6. <b>FAIL (Insufficient Funds).</b>
</div>
<b>Final Result:</b> 5`
    },
    {
        id: "kangaroo",
        title: "Number Line Jumps<br><a href='https://www.hackerrank.com/challenges/kangaroo/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Determine if two objects starting at positions $x_1, x_2$ with constant velocities $v_1, v_2$ will ever occupy the same coordinate at the same discrete time step $t$.",
        solution: "<b>Algorithmic Strategy (Relative Velocity & Modular Analysis):</b><br>The problem is modeled as a <b>Linear Diophantine Equation</b>: $x_1 + t \cdot v_1 = x_2 + t \cdot v_2$.<br><br>1. <b>Convergence Predicate:</b> For a meeting to occur, the object trailing behind must possess a strictly greater velocity ($v_1 > v_2$ if $x_1 < x_2$).<br>2. <b>Integer Solution Check:</b> Rearranging the equation gives $t = (x_2 - x_1) / (v_1 - v_2)$. A meeting occurs if and only if $t$ is a non-negative integer. This is verified using the modulo operator: $(x_2 - x_1) \pmod{v_1 - v_2} = 0$.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(1). The solution relies on a constant number of arithmetic operations rather than simulation.<br>• <b>Space:</b> O(1). No auxiliary storage is required.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def kangaroo(x1, v1, x2, v2):\n    # Velocity check: trailing object must be faster\n    if v1 > v2:\n        # Check if distance is a multiple of relative speed\n        if (x2 - x1) % (v1 - v2) == 0:\n            return 'YES'\n    return 'NO'</pre>",
        stepByStep: `<b>Validation Scenario:</b><br>
<b>Input:</b> x1=0, v1=3, x2=4, v2=2<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #34c759; margin-left: 10px; margin-bottom: 10px;">
    <i>Relative Speed:</i> 3 - 2 = 1.<br>
    <i>Initial Distance:</i> 4 - 0 = 4.<br>
    <i>Equation:</i> 4 % 1 == 0. <b>Success.</b>
</div>
<b>Terminal Result:</b> YES (They meet at t=4, pos=12)`
    },
    {
        id: "kaprekar-numbers",
        title: "Modified Kaprekar Numbers<br><a href='https://www.hackerrank.com/challenges/kaprekar-numbers/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Identify all 'Modified Kaprekar Numbers' within a specified range $[p, q]$.<br><br><b>Technical Definition:</b> A number $n$ with $d$ digits is a Kaprekar number if the sum of the left and right halves of its square ($n^2$) equals $n$, where the right half contains exactly $d$ digits.",
        solution: "<b>Algorithmic Strategy (Exhaustive Property Check):</b><br>The solution iterates through the search space, applying a <b>Positional Digit Partitioning</b> test to each candidate.<br><br>1. <b>Square & Transform:</b> For each $n$, compute $S = n^2$ and convert to its string representation.<br>2. <b>Pivot Calculation:</b> Determine the split point based on the digit count $d$ of $n$. The right segment $R$ consists of the terminal $d$ characters; the left segment $L$ consists of the remaining prefix.<br>3. <b>Arithmetic Reconstruction:</b> Sum the integer values of $L$ and $R$. If $L+R = n$, record the value.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(N * D), where $N$ is the range width and $D$ is the number of digits in $q^2$. Squaring and string slicing are linear relative to the digit count.<br>• <b>Space:</b> O(K) where $K$ is the count of identified Kaprekar numbers.<br><br><b>Conclusion:</b> This approach is perfectly optimal for identifying number-theoretic invariants within a bounded domain.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def kaprekarNumbers(p, q):\n    results = []\n    for n in range(p, q + 1):\n        digits = len(str(n))\n        square_str = str(n * n)\n        \n        # Partition the square\n        right_part = square_str[-digits:]\n        left_part = square_str[:-digits] or \"0\"\n        \n        if int(left_part) + int(right_part) == n:\n            results.append(n)\n    return results if results else \"INVALID RANGE\"</pre>",
        stepByStep: `<b>Validation Scenario:</b><br>
<b>Input:</b> n = 297, d = 3<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #afafaf; margin-left: 10px; margin-bottom: 10px;">
    <i>Square:</i> 297 * 297 = 88209.<br>
    <i>Partition:</i> Right (3 digits) = 209, Left = 88.<br>
    <i>Sum:</i> 88 + 209 = 297.<br>
    <i>Verdict:</i> <b>KAPREKAR NUMBER.</b>
</div>
<b>Final Result:</b> Identified.`
    },
    {
        id: "library-fine",
        title: "Library Fine<br><a href='https://www.hackerrank.com/challenges/library-fine/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Determine the library fine rate based on a multi-tiered temporal penalty schedule.<br><br><b>Penalty Logic:</b><br>• Return year > Due year: Flat 10,000 fine.<br>• Return year = Due year AND Return month > Due month: 500 per month late.<br>• Return year = Due year AND Return month = Due month AND Return day > Due day: 15 per day late.<br>• Otherwise: Zero fine.",
        solution: "<b>Algorithmic Strategy (Hierarchical Predicate Evaluation):</b><br>The algorithm leverages <b>Sequential Comparison</b> to identify the highest applicable penalty tier.<br><br>1. <b>Temporal Dominance:</b> Evaluate the year delta first, as it overrides all other conditions.<br>2. <b>Tiered Fallthrough:</b> If the years are equal, evaluate the month delta. If months are equal, evaluate the day delta.<br>3. <b>Immediate Return:</b> As soon as a late condition is met, the fine is computed and returned, bypassing subsequent checks.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(1). The solution performs a fixed max of three comparisons.<br>• <b>Space:</b> O(1). No auxiliary data structures are necessitated.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def libraryFine(d1, m1, y1, d2, m2, y2):\n    # Tier 1: Inter-annual delinquency\n    if y1 > y2: return 10000\n    if y1 < y2: return 0\n    \n    # Tier 2: Monthly delinquency\n    if m1 > m2: return (m1 - m2) * 500\n    if m1 < m2: return 0\n    \n    # Tier 3: Daily delinquency\n    if d1 > d2: return (d1 - d2) * 15\n    return 0</pre>",
        stepByStep: `<b>Administrative Trace:</b><br>
<b>Input:</b> Returned: 15-07-2015, Due: 01-07-2015<br><br>
<b>Audit Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff2d55; margin-left: 10px; margin-bottom: 10px;">
    <i>Year Status:</i> 2015 = 2015 (Valid).<br>
    <i>Month Status:</i> 07 = 07 (Valid).<br>
    <i>Day Status:</i> 15 > 01. <b>14 days late.</b><br>
    <i>Calculation:</i> 14 * 15 = 210.
</div>
<b>Terminal Fine:</b> 210`
    },
    {
        id: "finding-the-percentage",
        title: "Finding the Percentage<br><a href='https://www.hackerrank.com/challenges/finding-the-percentage/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Efficiently query student record data to calculate the mean of an integer vector, ensuring a fixed-precision floating-point output.<br><br><b>Technical Requirement:</b> The result must be formatted to exactly two decimal places, regardless of whether the value is an integer or has trailing zeros.",
        solution: "<b>Algorithmic Strategy (Key-Value Retrieval & Mean Computation):</b><br>The algorithm leverages <b>Hash Map Adjacency</b> for near-instantaneous record retrieval.<br><br>1. <b>Record Association:</b> Store student marks in a dictionary where $Name \rightarrow Marks[]$.<br>2. <b>Aggregate Calculation:</b> Compute the arithmetic mean: $\mu = \frac{\sum marks}{n}$.<br>3. <b>String Serialization:</b> Apply precision-controlled formatting (e.g., Python's `':.2f'`) to satisfy the output specification.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(K), where $K$ is the number of marks per student. Dictionary lookup is O(1) on average; summation is linear relative to the vector size.<br>• <b>Space:</b> O(N * K) to persist the record dataset in memory.<br><br><b>Conclusion:</b> This approach is asymptotically optimal for interactive record-based queries.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def solve(student_marks, query_name):\n    # Average marks calculation with 2-decimal formatting\n    marks = student_marks[query_name]\n    avg = sum(marks) / len(marks)\n    return f\"{avg:.2f}\"</pre>",
        stepByStep: `<b>Computational Trace:</b><br>
<b>Dataset:</b> {"Alpha": [50, 60, 70], "Beta": [30, 40, 50]}<br>
<b>Query:</b> "Alpha"<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> Map lookup: "Alpha" $\rightarrow$ [50, 60, 70].<br>
    <i>Step 2:</i> $\sum = 180, n = 3$.<br>
    <i>Step 3:</i> $180 / 3 = 60.0$.<br>
    <i>Step 4:</i> Format 60.0 $\rightarrow$ <b>"60.00"</b>.
</div>
<b>Final Result:</b> 60.00`
    },
    {
        id: "minimum-distances",
        title: "Minimum Distances<br><a href='https://www.hackerrank.com/challenges/minimum-distances/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Given an array $A$, find the minimum absolute distance $d = |i - j|$ such that $A[i] = A[j]$.<br><br><b>Boundary Case:</b> If no duplicate elements exist within the vector, return -1.",
        solution: "<b>Algorithmic Strategy (Index Persistence Mapping):</b><br>The solution optimizes for speed using a <b>Hash Map (Dictionary)</b> to track the most recent observed index of each element.<br><br>1. <b>Linear Traversal:</b> Iterate through $A$ once. For each element $x$ at index $i$:<br>2. <b>Conflict Detection:</b> If $x$ exists in the map, calculate the localized distance $d_{curr} = i - map[x]$ and update the global minimum: $d_{min} = min(d_{min}, d_{curr})$.<br>3. <b>State Update:</b> Persist the current index $i$ in the map for future encounters.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(N). The algorithm performs a single pass over the dataset with O(1) dictionary operations per step.<br>• <b>Space:</b> O(N) to store the indices of distinct elements in the auxiliary map.<br><br><b>Conclusion:</b> This approach bypasses the $O(N^2)$ brute-force comparison, reaching the theoretical time lower bound.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def minimumDistances(a):\n    last_seen = {}\n    min_dist = float('inf')\n\n    for i, val in enumerate(a):\n        if val in last_seen:\n            # Calculate distance to last occurrence\n            min_dist = min(min_dist, i - last_seen[val])\n        # Track most recent position\n        last_seen[val] = i\n\n    return min_dist if min_dist != float('inf') else -1</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> [3, 2, 1, 2, 3]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ffcc00; margin-left: 10px; margin-bottom: 10px;">
    <i>i=0, val=3:</i> Map: {3:0}.<br>
    <i>i=1, val=2:</i> Map: {3:0, 2:1}.<br>
    <i>i=2, val=1:</i> Map: {3:0, 2:1, 1:2}.<br>
    <i>i=3, val=2:</i> Duplicate! |3-1| = 2. $d_{min} = 2$.<br>
    <i>i=4, val=3:</i> Duplicate! |4-0| = 4. $d_{min} = min(2, 4) = 2$.
</div>
<b>Final Result:</b> 2`
    },
    {
        id: "non-divisible-subset",
        title: "Non-Divisible Subset<br><a href='https://www.hackerrank.com/challenges/non-divisible-subset/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Determine the maximum cardinality of a subset $S' \subseteq S$ such that for any $a, b \in S'$, $(a+b) \pmod k \neq 0$.<br><br><b>Mathematical Invariant:</b> The condition $(a+b) \pmod k = 0$ is equivalent to $(a \pmod k + b \pmod k) = k$ or both being $0 \pmod k$.",
        solution: "<b>Algorithmic Strategy (Modular Remainder Bucketing):</b><br>The algorithm leverages <b>Pigeonhole Principle</b> extensions on remainders.<br><br>1. <b>Frequency Map:</b> Count occurrences of each remainder $r \in [0, k-1]$.<br>2. <b>Conflict Resolution:</b> For each remainder pair $(r, k-r)$, greedily select the one with higher frequency. They are mutually exclusive in a valid subset.<br>3. <b>Degenerate Cases:</b> Remainder $0$ and $k/2$ (if $k$ is even) can only contribute at most one element, as adding any two from these sets triggers divisibility by $k$.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N + K). A single pass over $S$ followed by a linear scan of $k$ remainder buckets.<br>• <b>Space:</b> O(K) to store the bucket counts.<br><br><b>Conclusion:</b> This approach is asymptotically optimal, transforming a potentially $O(2^N)$ search into linear time logic.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def nonDivisibleSubset(k, s):\n    # Count remainders\n    counts = [0] * k\n    for x in s: counts[x % k] += 1\n    \n    # Only 1 element with rem 0 can exist\n    ans = min(counts[0], 1)\n    \n    # Pick max between counts[i] and counts[k-i]\n    for i in range(1, (k // 2) + 1):\n        if i == k - i:\n            ans += 1 if counts[i] > 0 else 0\n        else:\n            ans += max(counts[i], counts[k - i])\n            \n    return ans</pre>",
        stepByStep: `<b>Logical Trace:</b><br>
<b>S:</b> [1, 2, 3, 4, 5, 6], <b>K:</b> 3<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #55efc4; margin-left: 10px; margin-bottom: 10px;">
    <i>Remainders:</i> 1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2, 6%3=0.<br>
    <i>Counts:</i> R0:2, R1:2, R2:2.<br>
    <i>Selection:</i><br>
    &nbsp;&nbsp;• R0: Add 1 (max capacity).<br>
    &nbsp;&nbsp;• R1 vs R2: Max(2, 2) = 2. Pick all from R1 or R2.
</div>
<b>Final Result:</b> 3`
    },
    {
        id: "page-count",
        title: "Drawing Book<br><a href='https://www.hackerrank.com/challenges/drawing-book/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Determine the minimum number of page turns required to reach page $p$ in a book of $n$ pages, allowing turns from either the front (page 1) or the back (page $n$).<br><br><b>Constraint Context:</b> Pages are grouped in pairs (except possibly the start/end), meaning each turn advances or regresses the view by two logical page numbers.",
        solution: "<b>Algorithmic Strategy (Minimization Heuristic):</b><br>The algorithm leverages the <b>Direct Mapping</b> of page numbers to turn counts.<br><br>1. <b>Frontal Distance:</b> Moving from page 1, the turn count is $\lfloor p/2 \rfloor$.<br>2. <b>Rear Distance:</b> Moving from the back, the distance is the total possible turns minus the turns to reach $p$: $\lfloor n/2 \rfloor - \lfloor p/2 \rfloor$.<br>3. <b>Selection:</b> Return the minimum of the two calculated values.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(1). Calculations are scalar and independent of $n$ or $p$.<br>• <b>Space:</b> O(1). No auxiliary data structures are utilized.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def pageCount(n, p):\n    # Integer division yields the turn count directly\n    front = p // 2\n    back = (n // 2) - (p // 2)\n    return min(front, back)</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> n=6, p=2<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px;">
    <i>Front Path:</i> 2 // 2 = 1.<br>
    <i>Back Path:</i> (6 // 2) - (2 // 2) = 3 - 1 = 2.<br>
    <i>Verdict:</i> min(1, 2) = 1.
</div>
<b>Final Result:</b> 1`
    },
    {
        id: "save-the-prisoner",
        title: "Save the Prisoner!<br><a href='https://www.hackerrank.com/challenges/save-the-prisoner/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Identify the seat number of the prisoner who receives the terminal 'candy' in a circular distribution of $m$ items among $n$ participants, starting at seat $s$.",
        solution: "<b>Algorithmic Strategy (Modular Offset Reconstruction):</b><br>The solution employs <b>Residue Class Arithmetic</b> to simulate the wrap-around behavior without iteration.<br><br>1. <b>Zero-Indexing:</b> Shift the start and count systems to 0-indexed for clean modular logic: $(s - 1) + (m - 1)$.<br>2. <b>Modular Reduction:</b> Compute $( (s-1) + (m-1) ) \pmod n$ to find the relative offset from the origin.<br>3. <b>Human-Readable Restoration:</b> Add 1 to return the result to the 1-based seat numbering schema. Simplified: $(s + m - 2) \pmod n + 1$.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(1). The result is derived in a single arithmetic evaluation.<br>• <b>Space:</b> O(1). No auxiliary storage memory is required.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def saveThePrisoner(n, m, s):\n    # Calculate terminal seat using modular arithmetic\n    return ((s + m - 2) % n) + 1</pre>",
        stepByStep: `<b>Computational Trace:</b><br>
<b>Input:</b> n=5, m=2, s=1<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff3b30; margin-left: 10px; margin-bottom: 10px;">
    <i>Base Calc:</i> 1 + 2 - 2 = 1.<br>
    <i>Modular:</i> 1 % 5 = 1.<br>
    <i>Result:</i> 1 + 1 = 2.
</div>
<b>Final Result:</b> Seat 2`
    },
    {
        id: "solve-me-first",
        title: "Solve Me First<br><a href='https://www.hackerrank.com/challenges/solve-me-first/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Implement the fundamental arithmetic summation of two scalar integers, $a$ and $b$.",
        solution: "<b>Algorithmic Strategy (Linear Accumulation):</b><br>The operation is a <b>Primitive CPU Instruction</b>.<br><br>1. <b>Aggregation:</b> Utilize the addition operator ($+$) to derive the combined value.<br>2. <b>Verification:</b> In high-level languages, assume standard integer overflow protections or arbitrary precision as applicable.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(1). Addition is a near-instantaneous atomic operation.<br>• <b>Space:</b> O(1). No auxiliary stack or heap allocation is necessary beyond the return register.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def solveMeFirst(a, b):\n    # Basic scalar summation\n    return a + b</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> a = 15, b = 25<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Summation:</i> 15 + 25 = <b>40</b>.
</div>
<b>Terminal Result:</b> 40`
    },
    {
        id: "sherlock-and-squares",
        title: "Sherlock and Squares<br><a href='https://www.hackerrank.com/challenges/sherlock-and-squares/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "<b>Core Objective:</b> Count the number of perfect squares within a closed interval $[a, b]$.<br><br><b>Technical Challenge:</b> Naive iteration through the range is inefficient for large intervals. An analytical solution using inverse operations is required.",
        solution: "<b>Algorithmic Strategy (Discrete Square Root Counting):</b><br>The algorithm identifies the range of integers whose squares fall within $[a, b]$.<br><br>1. <b>Lower Boundary:</b> The smallest integer $x$ such that $x^2 \ge a$ is $\lceil \sqrt{a} \rceil$.<br>2. <b>Upper Boundary:</b> The largest integer $y$ such that $y^2 \le b$ is $\lfloor \sqrt{b} \rfloor$.<br>3. <b>Range Derivation:</b> The count of such integers is $( \lfloor \sqrt{b} \rfloor - \lceil \sqrt{a} \rceil ) + 1$. Alternatively, calculated as $\lfloor \sqrt{b} \rfloor - \lfloor \sqrt{a-1} \rfloor$.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(1). The calculation depends only on two square root operations regardless of interval width.<br>• <b>Space:</b> O(1). No auxiliary memory is consumed.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>import math\n\ndef squares(a, b):\n    # Count squares by finding integers in root range\n    upper = math.floor(math.sqrt(b))\n    lower = math.ceil(math.sqrt(a))\n    return upper - lower + 1</pre>",
        stepByStep: `<b>Mathematical Trace:</b><br>
<b>Input:</b> a=24, b=49<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ffcc00; margin-left: 10px; margin-bottom: 10px;">
    <i>Square Root b:</i> $\sqrt{49} = 7$. $\lfloor 7 \rfloor = 7$.<br>
    <i>Square Root a:</i> $\sqrt{24} \approx 4.89$. $\lceil 4.89 \rceil = 5$.<br>
    <i>Count:</i> $7 - 5 + 1 = 3$.
</div>
<b>Final Result:</b> 3 (Squares are 25, 36, 49)`
    },
    {
        id: "diagonal-difference",
        title: "Diagonal Difference<br><a href='https://www.hackerrank.com/challenges/diagonal-difference/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Matrix",
        problem: "<b>Core Objective:</b> Calculate the absolute difference between the sums of the two diagonals of a square matrix.<br><br><b>Mathematical Logic:</b> For a square matrix $M$ of size $n$, the primary diagonal elements are $M[i][i]$ and the secondary diagonal elements are $M[i][n-i-1]$.",
        solution: "<b>Algorithmic Strategy (Single-Pass Index Logic):</b><br>The algorithm iterates through the matrix rows once, simultaneously accumulating both diagonal sums.<br><br>1. <b>Diagonal Access:</b> For row $i$, access $M[i][i]$ for the primary sum and $M[i][n-i-1]$ for the secondary sum.<br>2. <b>Aggregation:</b> Update running totals for both diagonals.<br>3. <b>Magnitude Calculation:</b> Return $|PrimarySum - SecondarySum|$.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). A single pass over the rows processes both diagonals simultaneously.<br>• <b>Space:</b> O(1). Only two summation variables are required.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def diagonalDifference(arr):\n    n = len(arr)\n    p_sum = s_sum = 0\n    \n    for i in range(n):\n        p_sum += arr[i][i]\n        s_sum += arr[i][n - i - 1]\n        \n    return abs(p_sum - s_sum)</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> 3x3 Matrix<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #34c759; margin-left: 10px; margin-bottom: 10px;">
    <i>Row 0:</i> Primary [0][0], Secondary [0][2].<br>
    <i>Row 1:</i> Primary [1][1], Secondary [1][1].<br>
    <i>Row 2:</i> Primary [2][2], Secondary [2][0].<br>
    <i>Calculation:</i> abs(Sum1 - Sum2).
</div>
<b>Final Result:</b> Absolute Difference`
    },
    {
        id: "forming-magic-square",
        title: "Forming a Magic Square<br><a href='https://www.hackerrank.com/challenges/forming-a-magic-square/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Matrix",
        problem: "<b>Core Objective:</b> Transform a given $3 \times 3$ matrix into a magic square (where rows, columns, and diagonals sum to 15) with minimal transformation cost.<br><br><b>Transformation Cost:</b> Defined as $\sum |S_{ij} - M_{ij}|$, where $S$ is the input and $M$ is a valid magic square.",
        solution: "<b>Algorithmic Strategy (Static Pattern Matching):</b><br>The algorithm employs <b>Exhaustive Comparison</b> against the finite set of $3 \times 3$ magic squares.<br><br>1. <b>Predefined Permutations:</b> There are exactly 8 distinct magic squares for $k=3$ (derived from rotations and reflections of the Lo Shu Square).<br>2. <b>Cost Minimization:</b> Iterate through all 8 permutations, calculating the <b>Manhattan Distance</b> between the input and each candidate.<br>3. <b>Optimal Selection:</b> The result is the global minimum of these 8 calculated costs.",
        optimality: "<b>Complexity Profile:</b><br>• <b>Time:</b> O(1). The search space is constant (8 candidates of 9 elements each).<br>• <b>Space:</b> O(1). Requires storing the 8 reference matrices.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def formingMagicSquare(s):\n    # All 8 possible 3x3 magic squares\n    patterns = [\n        [8,1,6,3,5,7,4,9,2], [6,1,8,7,5,3,2,9,4],\n        [4,3,8,9,5,1,2,7,6], [2,7,6,9,5,1,4,3,8],\n        [2,9,4,7,5,3,6,1,8], [4,9,2,3,5,7,8,1,6],\n        [6,7,2,1,5,9,8,3,4], [8,3,4,1,5,9,6,7,2]\n    ]\n    \n    s_flat = [num for row in s for num in row]\n    return min(sum(abs(p[i] - s_flat[i]) for i in range(9)) for p in patterns)</pre>",
        stepByStep: `<b>Algorithmic Audit:</b><br>
<b>Input:</b> Messy Matrix $M$<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #afafaf; margin-left: 10px; margin-bottom: 10px;">
    <i>Pattern 1 Cost:</i> $|M_{00} - 8| + |M_{01} - 1| \dots = 25$.<br>
    <i>Pattern 2 Cost:</i> $|M_{00} - 6| + |M_{01} - 1| \dots = 14$.<br>
    <i>... (Checking all 8)</i><br>
    <i>Minimum Found:</i> 7.
</div>
<b>Final Result:</b> 7`
    },
    {
        id: "organizing-containers",
        title: "Organizing Containers<br><a href='https://www.hackerrank.com/challenges/organizing-containers/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Matrix",
        problem: "<b>Core Objective:</b> Determine if it is possible to organize $n$ types of balls into $n$ containers such that each container contains exactly one type of ball, using only one-for-one swaps.<br><br><b>Governing Constraint:</b> Swaps preserve the total number of balls within each container (row sum) and the total number of balls of each type (column sum).",
        solution: "<b>Algorithmic Strategy (Invariant Matching):</b><br>The algorithm leverages the <b>Conservation of Capacity</b>. Since swaps are 1-to-1, the final state must map each container's fixed capacity to a ball type's fixed total count.<br><br>1. <b>Capacity Calculation:</b> Sum each row to find container capacities: $C_i = \sum_{j} M_{ij}$.<br>2. <b>Type Auditing:</b> Sum each column to find ball type totals: $T_j = \sum_{i} M_{ij}$.<br>3. <b>Multi-set Equality:</b> Sort both sets of sums. The organization is 'Possible' if and only if the sorted multisets of $C$ and $T$ are identical.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N^2) for matrix summation, plus O(N log N) for sorting.<br>• <b>Space:</b> O(N) to store the row and column aggregates.<br><br><b>Conclusion:</b> This approach is optimal, as it bypasses complex swap simulations in favor of fundamental invariants.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def organizingContainers(container):\n    # Calculate capacities and type totals\n    row_sums = sorted([sum(row) for row in container])\n    col_sums = sorted([sum(x) for x in zip(*container)])\n    \n    return \"Possible\" if row_sums == col_sums else \"Impossible\"</pre>",
        stepByStep: `<b>Invariant Audit:</b><br>
<b>Matrix:</b> [[1, 1], [1, 1]]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Container Capacities:</i> Row0=2, Row1=2. Sorted: [2, 2].<br>
    <i>Ball Type Totals:</i> Col0=2, Col1=2. Sorted: [2, 2].<br>
    <i>Check:</i> [2, 2] == [2, 2].<br>
</div>
<b>Final Result:</b> Possible`
    },
    {
        id: "angry-professor",
        title: "Angry Professor<br><a href='https://www.hackerrank.com/challenges/angry-professor/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Determine if a class session should be cancelled based on a student attendance threshold $k$.<br><br><b>Technical Condition:</b> A student is considered 'on time' if their arrival time $a_i \le 0$. The class is cancelled if the total number of on-time students is strictly less than $k$.",
        solution: "<b>Algorithmic Strategy (Linear Threshold Audit):</b><br>The algorithm performs a <b>Linear Scan</b> through the arrival vector to aggregate attendance data.<br><br>1. <b>Filtering:</b> Identify all elements in the arrival array $a$ where $val \le 0$.<br>2. <b>Cardinality Comparison:</b> Compare the size of the filtered set against the threshold $k$.<br>3. <b>Predicate Mapping:</b> Return 'YES' (cancelled) if $count < k$, otherwise return 'NO'.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). Each student's arrival time is examined exactly once.<br>• <b>Space:</b> O(1). Only a single counter variable is maintained during the scan.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def angryProfessor(k, a):\n    # Count students with arrival time <= 0\n    on_time = sum(1 for arrival in a if arrival <= 0)\n    return 'YES' if on_time < k else 'NO'</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> k=3, a=[-1, -3, 4, 2]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff3b30; margin-left: 10px; margin-bottom: 10px;">
    <i>Evaluation:</i> -1 $\le$ 0 (Yes), -3 $\le$ 0 (Yes), 4 $\le$ 0 (No), 2 $\le$ 0 (No).<br>
    <i>Aggregation:</i> Total on-time = 2.<br>
    <i>Threshold Check:</i> 2 < 3. <b>Cancellation Triggered.</b>
</div>
<b>Final Result:</b> YES`
    },
    {
        id: "bigger-is-greater",
        title: "Bigger is Greater<br><a href='https://www.hackerrank.com/challenges/bigger-is-greater/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Find the lexicographically smallest string that is strictly greater than the input by rearranging its characters.<br><br><b>Context:</b> This is equivalent to finding the next permutation in a lexicographical sequence.",
        solution: "<b>Algorithmic Strategy (Pivot-Successor-Reverse):</b><br>The algorithm follows the standard <b>Next Permutation</b> logic.<br><br>1. <b>Identify Pivot:</b> Scan from right-to-left to find the first character $w[i]$ such that $w[i] < w[i+1]$.<br>2. <b>Identify Successor:</b> Scan from right-to-left to find the smallest character $w[j]$ such that $w[j] > w[i]$.<br>3. <b>Swap & Minimize:</b> Swap $w[i]$ and $w[j]$, then reverse the suffix starting at $i+1$ to ensure it is in non-decreasing order (lexicographically minimal).",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). The procedure involves three linear scans of the string.<br>• <b>Space:</b> O(N). String characters are converted to a list for in-place modifications.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def biggerIsGreater(w):\n    arr = list(w)\n    n = len(arr)\n    \n    # 1. Find pivot\n    i = n - 2\n    while i >= 0 and arr[i] >= arr[i+1]: i -= 1\n    if i == -1: return 'no answer'\n    \n    # 2. Find successor\n    j = n - 1\n    while arr[j] <= arr[i]: j -= 1\n    \n    # 3. Swap and reverse suffix\n    arr[i], arr[j] = arr[j], arr[i]\n    arr[i+1:] = reversed(arr[i+1:])\n    return ''.join(arr)</pre>",
        stepByStep: `<b>Algorithmic Trace:</b><br>
<b>Input:</b> "dkhc"<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ffcc00; margin-left: 10px; margin-bottom: 10px;">
    <i>Pivot Search:</i> 'k' > 'h', 'h' > 'c'... No pivot until 'd' < 'k' at index 0.<br>
    <i>Successor Search:</i> 'h' is the smallest on right larger than 'd'.<br>
    <i>Swap:</i> "h " + "kdc".<br>
    <i>Reverse Suffix:</i> "h" + "cdk".
</div>
<b>Final Result:</b> "hcdk"`
    },
    {
        id: "bon-appetit",
        title: "Bill Division (Bon Appétit)<br><a href='https://www.hackerrank.com/challenges/bon-appetit/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Verify the mathematical accuracy of a split bill where one participant excludes a specific shared item.<br><br><b>Technical Check:</b> Given a list of costs, an index $k$ of the excluded item, and a charged amount $b$, determine if $b = (\sum cost - cost[k]) / 2$.",
        solution: "<b>Algorithmic Strategy (Arithmetic Fairness Audit):</b><br>The algorithm calculates the true fair share through <b>Selective Summation</b>.<br><br>1. <b>Summation:</b> Aggregate the total cost of all items consumed. Subtract the cost of the item at index $k$.<br>2. <b>Parity Check:</b> Divide the result by 2 to find the exact liability. Compare this 'Fair Share' against the 'Charged Amount' $b$.<br>3. <b>Discrepancy Reporting:</b> If they match, the calculation is correct ('Bon Appetit'). Otherwise, return the difference $|b - FairShare|$.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). The bill items are summed in a single linear pass.<br>• <b>Space:</b> O(1). Only scalar variables for products and sums are persisted.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def bonAppetit(bill, k, b):\n    # Calculate Anna's actual debt\n    actual_total = (sum(bill) - bill[k]) // 2\n    \n    if actual_total == b:\n        print(\"Bon Appetit\")\n    else:\n        print(b - actual_total)</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> bill=[3, 10, 2, 9], k=1, b=12<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px;">
    <i>Total Bill:</i> 3+10+2+9 = 24.<br>
    <i>Anna Share:</i> (24 - 10) / 2 = 7.<br>
    <i>Check:</i> 12 != 7.<br>
    <i>Refund:</i> 12 - 7 = 5.
</div>
<b>Final Result:</b> 5`
    },
    {
        id: "breaking-records",
        title: "Breaking the Records<br><a href='https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Count the number of times seasonal performance records (minimum and maximum) are surpassed over a sequence of events.<br><br><b>Constraint Context:</b> The performance in the first event establishes the initial records and does not count as a 'break'.",
        solution: "<b>Algorithmic Strategy (Stateful Extremum Tracking):</b><br>The algorithm maintains two <b>Dynamic Bounds</b> that are updated as the sequence is processed.<br><br>1. <b>Initialization:</b> Set $min\_record$ and $max\_record$ to the value of the first event.<br>2. <b>Iterative Comparison:</b> For each subsequent event $s$:<br>&nbsp;&nbsp;• If $s > max\_record$, update the maximum and increment the 'high' counter.<br>&nbsp;&nbsp;• If $s < min\_record$, update the minimum and increment the 'low' counter.<br>3. <b>Final Tally:</b> Return the tuple of counters.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). The sequence is traversed once.<br>• <b>Space:</b> O(1). Only four scalar variables (two records, two counters) are required.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def breakingRecords(scores):\n    # Initialize records with the first score\n    minimum = maximum = scores[0]\n    min_count = max_count = 0\n    \n    for score in scores[1:]:\n        if score > maximum:\n            maximum = score\n            max_count += 1\n        elif score < minimum:\n            minimum = score\n            min_count += 1\n            \n    return [max_count, min_count]</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Scores:</b> [12, 24, 10, 24]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff9500; margin-left: 10px; margin-bottom: 10px;">
    <i>Game 1:</i> High=12, Low=12.<br>
    <i>Game 2 (24):</i> 24 > 12. <b>New High!</b> (Count=1).<br>
    <i>Game 3 (10):</i> 10 < 12. <b>New Low!</b> (Count=1).<br>
    <i>Game 4 (24):</i> 24 is equal to High. No break.
</div>
<b>Final Result:</b> [1, 1]`
    },
    {
        id: "apples-and-oranges",
        title: "Apples and Oranges<br><a href='https://www.hackerrank.com/challenges/apple-and-orange/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Quantify the number of fruits that land within a specified spatial interval $[s, t]$ on a 1D coordinate system, given their relative displacement from two distinct origin points (trees $a$ and $b$).",
        solution: "<b>Algorithmic Strategy (Linear Coordinate Transformation):</b><br>The algorithm iterates through each fruit's displacement, mapping it to a global coordinate system.<br><br>1. <b>Relative to Absolute:</b> For each fruit displacement $d$ from tree $T$, the landing coordinate is $X = T_{pos} + d$.<br>2. <b>Interval Inclusion Test:</b> Check if $s \le X \le t$.<br>3. <b>Concurrent Aggregation:</b> Maintain independent tallies for both fruit types (apples from tree $a$, oranges from tree $b$).",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(M + N), where $M$ and $N$ represent the fruit counts. Each displacement is processed once.<br>• <b>Space:</b> O(1). Only two scalar counters are required.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def countApplesAndOranges(s, t, a, b, apples, oranges):\n    # Count included coordinates via list comprehension\n    apple_count = sum(1 for d in apples if s <= a + d <= t)\n    orange_count = sum(1 for d in oranges if s <= b + d <= t)\n    \n    print(apple_count)\n    print(orange_count)</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>House:</b> [7, 11]. Tree A (Apple): 5. Tree B (Orange): 15.<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #34c759; margin-left: 10px; margin-bottom: 10px;">
    <i>Apple at -2:</i> 5 + (-2) = 3. <b>OUT.</b><br>
    <i>Apple at 3:</i> 5 + 3 = 8. <b>IN.</b><br>
    <i>Orange at 5:</i> 15 + 5 = 20. <b>OUT.</b><br>
    <i>Orange at -6:</i> 15 + (-6) = 9. <b>IN.</b>
</div>
<b>Final Result:</b> 1 Apple, 1 Orange`
    },
    {
        id: "counting-valleys",
        title: "Counting Valleys<br><a href='https://www.hackerrank.com/challenges/counting-valleys/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Count the number of 'valleys' traversed in a sequence of steps, where a valley is defined as a continuous sub-sequence that begins with a step below sea level and concludes with a step back to sea level.",
        solution: "<b>Algorithmic Strategy (Temporal Altitude Tracking):</b><br>The algorithm maintains a <b>Relative Altitude State</b>, using zero as the reference point for sea level.<br><br>1. <b>State Transition:</b> For each step, increment (if 'U') or decrement (if 'D') the current altitude.<br>2. <b>Event Detection:</b> A valley completion is detected when the altitude transitions from -1 to 0. This implies the participant has just emerged from sub-surface terrain.<br>3. <b>Aggregation:</b> Increment the valley counter only during this specific upward zero-crossing.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). Each step in the path is visited once.<br>• <b>Space:</b> O(1). Only two integer variables (altitude and count) are required.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def countingValleys(steps, path):\n    altitude = valleys = 0\n    \n    for step in path:\n        if step == 'U':\n            altitude += 1\n            # Emergence from sea level identifies a valley end\n            if altitude == 0: valleys += 1\n        else:\n            altitude -= 1\n            \n    return valleys</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Path:</b> D D U U<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1 (D):</i> Alt: -1. Entering sub-surface.<br>
    <i>Step 2 (D):</i> Alt: -2.<br>
    <i>Step 3 (U):</i> Alt: -1.<br>
    <i>Step 4 (U):</i> Alt: 0. <b>Valley Emergence Detected.</b>
</div>
<b>Final Result:</b> 1 Valley`
    },
    {
        id: "designer-pdf-viewer",
        title: "Designer PDF Viewer<br><a href='https://www.hackerrank.com/challenges/designer-pdf-viewer/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Calculate the area of a selection highlight rectangle for a given word, where each character has a fixed width of 1mm and a variable height defined by an input array.<br><br><b>Constraint:</b> The rectangle's height is defined by the maximum height among all characters in the selection string.",
        solution: "<b>Algorithmic Strategy (Bounding Box Area Calculation):</b><br>The algorithm identifies the <b>Global Maximum Height</b> of the selected substring.<br><br>1. <b>Mapping:</b> For each character in the string, retrieve its height from the 26-element array $h$ using its ASCII offset from 'a'.<br>2. <b>Maximization:</b> Maintain a running $max\_h$ during the traversal.<br>3. <b>Area Derivation:</b> Multiply $max\_h$ by the string length (total width).",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). The word is scanned once to determine the maximum height.<br>• <b>Space:</b> O(1). Only a single peak variable is stored.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def designerPdfViewer(h, word):\n    # Find the maximum height among characters in the word\n    max_height = max(h[ord(char) - 97] for char in word)\n    return max_height * len(word)</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> h=[1, 3, 1, 3, ...], Word="abc"<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px;">
    <i>'a':</i> h[0] = 1. Max: 1.<br>
    <i>'b':</i> h[1] = 3. Max: 3.<br>
    <i>'c':</i> h[2] = 1. Max: 3.<br>
    <i>Calculation:</i> 3 (Height) * 3 (Width) = 9.
</div>
<b>Final Result:</b> 9mm²`
    },
    {
        id: "encryption",
        title: "Encryption<br><a href='https://www.hackerrank.com/challenges/encryption/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Encrypt a string using a grid-based columnar transposition cipher, where the grid dimensions are constrained by the square root of the string length $L$.<br><br><b>Technical Constraints:</b> $\lfloor \sqrt{L} \rfloor \le row \le col \le \lceil \sqrt{L} \rceil$ and $row \times col \ge L$.",
        solution: "<b>Algorithmic Strategy (Virtual Grid Transposition):</b><br>The algorithm projects characters into a columnar format without explicit matrix allocation.<br><br>1. <b>Dimension Optimization:</b> Calculate $cols = \lceil \sqrt{L} \rceil$. The number of columns is the primary driver for transposing the string.<br>2. <b>Index Projection:</b> Iterate from $c = 0$ to $cols-1$. For each column, extract characters at indices $i, i+cols, i+2cols, \dots$.<br>3. <b>Concatenation:</b> Join the extracted columnar strings with spaces to form the final ciphertext.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(L). Each character in the original string is processed exactly once to construct the output.<br>• <b>Space:</b> O(L). Necessary for storing the resulting ciphertext string.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>import math\n\ndef encryption(s):\n    s = s.replace(' ', '')\n    n = len(s)\n    cols = math.ceil(math.sqrt(n))\n    \n    res = []\n    for i in range(cols):\n        # Slice string with 'cols' as step to simulate column reading\n        res.append(s[i::cols])\n        \n    return ' '.join(res)</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> "if man was meant to stay on the ground..." (no spaces)<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #afafaf; margin-left: 10px; margin-bottom: 10px;">
    <i>Length:</i> 54. $\sqrt{54} \approx 7.35$. $Cols=8$.<br>
    <i>Col 1:</i> s[0], s[8], s[16]... -> "imntsd..."<br>
    <i>Col 2:</i> s[1], s[9], s[17]... -> "fweao..."<br>
    <i>Join:</i> "imntsd fweao ... "
</div>
<b>Final Result:</b> Encrypted Ciphertext`
    },
    {
        id: "fair-rations",
        title: "Fair Rations<br><a href='https://www.hackerrank.com/challenges/fair-rations/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Determine the minimum number of loaves required to ensure every individual in a sequence has an even number of loaves, under the constraint that loaves must be distributed in pairs to adjacent positions.",
        solution: "<b>Algorithmic Strategy (Greedy Ripple Correction):</b><br>The algorithm iterates through the sequence, resolving parity deficits by propagating them to the next index.<br><br>1. <b>Parity Scan:</b> Traverse the array from index 0 to $n-2$. If $arr[i]$ is odd, increment both $arr[i]$ and $arr[i+1]$.<br>2. <b>Counter Increment:</b> Each pair distribution adds 2 to the global tally.<br>3. <b>Feasibility Validation:</b> After the scan, if the final element $arr[n-1]$ remains odd, a valid state is mathematically impossible.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). A single linear pass processes the entire sequence.<br>• <b>Space:</b> O(1). Only a scalar counter is utilized during simulation.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def fairRations(B):\n    loaves = 0\n    for i in range(len(B) - 1):\n        # If parity is odd, distribute a pair\n        if B[i] % 2 != 0:\n            B[i] += 1\n            B[i+1] += 1\n            loaves += 2\n            \n    return str(loaves) if B[-1] % 2 == 0 else 'NO'</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> [2, 3, 4, 5, 6]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 20px solid #ff9500; margin-left: 10px; margin-bottom: 10px;">
    <i>i=0:</i> Even. Skip.<br>
    <i>i=1:</i> 3 is Odd. $B[1] \to 4, B[2] \to 5$. Loaves: 2.<br>
    <i>i=2:</i> 5 is Odd. $B[2] \to 6, B[3] \to 6$. Loaves: 4.<br>
    <i>i=3:</i> Even. Skip.<br>
    <i>Check:</i> $B[4]=6$ is Even.
</div>
<b>Final Result:</b> 4`
    },
    {
        id: "flatland-space-stations",
        title: "Flatland Space Stations<br><a href='https://www.hackerrank.com/challenges/flatland-space-stations/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Find the maximum possible minimum distance between a city and its nearest space station in a linear geography of $n$ cities.<br><br><b>Technical Challenge:</b> The result is the maximum of the distances at the boundaries and the halfway points of inter-station gaps.",
        solution: "<b>Algorithmic Strategy (Gap Analysis):</b><br>The algorithm identifies critical points in the linear topology and calculates the local minimum-distance maxima.<br><br>1. <b>Sorting:</b> Order the station indices $c$. Distance calculation depends on adjacency.<br>2. <b>Boundary Analysis:</b> Compute distance from city 0 to $c[0]$ and city $n-1$ to $c[-1]$.<br>3. <b>Intermediate Analysis:</b> For any two adjacent stations $c[i]$ and $c[i+1]$, the maximum distance occurs at the midpoint $(\lfloor (c[i+1] - c[i]) / 2 \rfloor)$.<br>4. <b>Global Extremum:</b> The answer is the maximum value observed across all three categories.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(M log M) where $M$ is the number of stations, dominated by sorting. The subsequent linear pass is O(M).<br>• <b>Space:</b> O(1) auxiliary space (excluding input storage).",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def flatlandSpaceStations(n, c):\n    c.sort()\n    # Maximize distance from boundaries\n    max_dist = max(c[0], (n - 1) - c[-1])\n    \n    # Maximize distance from gaps\n    for i in range(len(c) - 1):\n        gap_max = (c[i+1] - c[i]) // 2\n        max_dist = max(max_dist, gap_max)\n        \n    return max_dist</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> n=5, stations=[0, 4]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Sort:</i> [0, 4].<br>
    <i>Start:</i> 0. <i>End:</i> (5-1) - 4 = 0.<br>
    <i>Gap (0,4):</i> (4 - 0) // 2 = 2.<br>
    <i>Max:</i> max(0, 0, 2) = 2.
</div>
<b>Final Result:</b> 2`
    },
    {
        id: "electronics-shop",
        title: "Electronics Shop<br><a href='https://www.hackerrank.com/challenges/electronics-shop/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Determine the maximum total cost Monica can spend to purchase exactly one keyboard and one USB drive, given a fixed budget $b$.",
        solution: "<b>Algorithmic Strategy (Two-Pointer Optimization):</b><br>The algorithm avoids the $O(N \times M)$ brute-force approach by utilizing <b>Sorted Search</b>.<br><br>1. <b>Preprocessing:</b> Sort keyboards in ascending order and USB drives in descending order.<br>2. <b>Search Phase:</b> Initialize pointers at the start of both sorted arrays. Iterate while pointers are within bounds:<br>&nbsp;&nbsp;• If $sum \le b$, update the maximum expenditure and increment the keyboard pointer (trying to spend more).<br>&nbsp;&nbsp;• If $sum > b$, increment the USB drive pointer (moving to a cheaper item to meet the budget).<br>3. <b>Optimal Result:</b> Return the maximum valid sum found, or -1 if no combination is affordable.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N log N + M log M). Sorting dominates the linear $O(N+M)$ search pass.<br>• <b>Space:</b> O(1) beyond the input arrays.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def getMoneySpent(keyboards, drives, b):\n    # Sort ascending and descending for two-pointer logic\n    keyboards.sort()\n    drives.sort(reverse=True)\n    \n    max_spent = -1\n    i = j = 0\n    \n    while i < len(keyboards) and j < len(drives):\n        total = keyboards[i] + drives[j]\n        if total <= b:\n            max_spent = max(max_spent, total)\n            i += 1\n        else:\n            j += 1\n            \n    return max_spent</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Budget:</b> 10. K=[3, 1]. D=[5, 2, 8].<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #34c759; margin-left: 10px; margin-bottom: 10px;">
    <i>Sort:</i> K=[1, 3], D=[8, 5, 2].<br>
    <i>i=0, j=0 (1+8):</i> 9 $\le$ 10. Max=9. i=1.<br>
    <i>i=1, j=0 (3+8):</i> 11 > 10. j=1.<br>
    <i>i=1, j=1 (3+5):</i> 8 $\le$ 10. Max=9. i=2 (Done).
</div>
<b>Final Result:</b> 9`
    },
    {
        id: "the-hurdle-race",
        title: "The Hurdle Race<br><a href='https://www.hackerrank.com/challenges/the-hurdle-race/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Determine the minimum number of 'doses' required to increase a character's natural jump height $k$ such that they can clear the tallest hurdle in a given set.",
        solution: "<b>Algorithmic Strategy (Threshold Deficit Calculation):</b><br>The algorithm identifies the bottleneck hurdle and calculates the jump deficit.<br><br>1. <b>Boundary Identification:</b> Find the maximum hurdle height $h_{max}$ in the input array.<br>2. <b>Deficit Derivation:</b> Use the formula $max(0, h_{max} - k)$. If the tallest hurdle is cleared by the natural jump height, the result is zero.<br>3. <b>Scalar Evaluation:</b> The dose count is the linear offset between the peak hurdle and initial capacity.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). Requires a single pass to find the maximum hurdle height.<br>• <b>Space:</b> O(1). Only the maximum value discovered is stored.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def hurdleRace(k, height):\n    # Identify the highest peak and subtract current capacity\n    tallest = max(height)\n    return max(0, tallest - k)</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> k=4, hurdles=[1, 6, 3, 5, 2]<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Peak Detection:</i> max(1, 6, 3, 5, 2) = 6.<br>
    <i>Capacity Check:</i> 6 > 4.<br>
    <i>Requirement:</i> 6 - 4 = 2.
</div>
<b>Final Result:</b> 2`
    },
    {
        id: "queens-attack-2",
        title: "Queen's Attack II<br><a href='https://www.hackerrank.com/challenges/queens-attack-2/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Calculate the total number of squares a queen can attack on an $n \times n$ chessboard, accounting for board boundaries and $k$ obstacles.",
        solution: "<b>Algorithmic Strategy (Radial Beam Trimming):</b><br>Instead of grid traversal, the algorithm calculates the maximum reach in 8 discrete directions and 'trims' them based on obstacle intersections.<br><br>1. <b>Initial Reach:</b> Compute the distance to the board edge for all 8 vectors (ordinal and cardinal).<br>2. <b>Obstacle Auditing:</b> For each obstacle $(r_o, c_o)$, determine if it lies on a vector from the queen's position $(r_q, c_q)$.<br>3. <b>Distance Reduction:</b> If an obstacle is encountered, update the reach for that specific direction to $dist_{new} = min(dist_{current}, dist_{to\_obstacle} - 1)$.<br>4. <b>Aggregation:</b> The result is the sum of the final 8 distances.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(K). The processing time is proportional only to the number of obstacles, independent of board size $n$.<br>• <b>Space:</b> O(1). Only 8 distance variables are maintained.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def queensAttack(n, k, r_q, c_q, obstacles):\n    # Distances to [Up, Down, Left, Right, UL, UR, DL, DR]\n    u, d = n - r_q, r_q - 1\n    l, r = c_q - 1, n - c_q\n    ul, ur = min(u, l), min(u, r)\n    dl, dr = min(d, l), min(d, r)\n    \n    for r_o, c_o in obstacles:\n        if c_o == c_q: # Vertical\n            if r_o > r_q: u = min(u, r_o - r_q - 1)\n            else: d = min(d, r_q - r_o - 1)\n        elif r_o == r_q: # Horizontal\n            if c_o > c_q: r = min(r, c_o - c_q - 1)\n            else: l = min(l, c_q - c_o - 1)\n        elif abs(r_o - r_q) == abs(c_o - c_q): # Diagonal\n            if r_o > r_q and c_o < c_q: ul = min(ul, r_o - r_q - 1)\n            elif r_o > r_q and c_o > c_q: ur = min(ur, r_o - r_q - 1)\n            elif r_o < r_q and c_o < c_q: dl = min(dl, r_q - r_o - 1)\n            elif r_o < r_q and c_o > c_q: dr = min(dr, r_q - r_o - 1)\n            \n    return u + d + l + r + ul + ur + dl + dr</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Board:</b> 4x4. <b>Queen:</b> (4, 4). <b>Obstacle:</b> (4, 2).<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff3b30; margin-left: 10px; margin-bottom: 10px;">
    <i>Initial W:</i> 3 (4-1).<br>
    <i>Obstacle (4, 2):</i> Horizontal path. $c_o < c_q$.<br>
    <i>Trim:</i> min(3, 4 - 2 - 1) = 1.<br>
    <i>Sum:</i> 1 (W) + 0 (Other Directions) + 6 (Implicit reach) = 7.
</div>
<b>Final Result:</b> 7 attackable squares.`
    },
    {
        id: "repeated-string",
        title: "Repeated String<br><a href='https://www.hackerrank.com/challenges/repeated-string/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Count the occurrences of a character 'a' in a string that repeats infinitely, truncated at length $n$.",
        solution: "<b>Algorithmic Strategy (Modular Frequency Extrapolation):</b><br>The algorithm avoids infinite construction by leveraging the periodicity of the string.<br><br>1. <b>Unit Frequency:</b> Count the occurrences of 'a' in a single instance of the pattern $s$.<br>2. <b>Quotient Evaluation:</b> Determine how many complete patterns fit into $n$ ($n // len(s)$) and multiply by the unit frequency.<br>3. <b>Remainder Analysis:</b> Count 'a's in the partial prefix of length $n \pmod{len(s)}$.<br>4. <b>Aggregation:</b> The total count is the sum of cyclic and residual frequencies.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(L) where $L$ is the length of input string $s$. The count is proportional only to the pattern length, not the truncated length $n$.<br>• <b>Space:</b> O(1). Only scalar counters are stored.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def repeatedString(s, n):\n    # Calculate counts using integer division and modulo\n    count_in_pattern = s.count('a')\n    full_repeats = n // len(s)\n    remainder_len = n % len(s)\n    \n    total_a = (full_repeats * count_in_pattern) + s[:remainder_len].count('a')\n    return total_a</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> s="aba", n=10.<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px;">
    <i>Unit:</i> "aba" → 2 'a's. Len=3.<br>
    <i>Cycles:</i> 10 // 3 = 3 full repeats. $3 \times 2 = 6$.<br>
    <i>Residual:</i> 10 % 3 = 1. s[:1] ("a") → 1 'a'.<br>
    <i>Sum:</i> 6 + 1 = 7.
</div>
<b>Final Result:</b> 7`
    },
    {
        id: "service-lane",
        title: "Service Lane<br><a href='https://www.hackerrank.com/challenges/service-lane/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Find the maximum width vehicle (bike, car, or truck) that can pass through a specified segment $[i, j]$ of a service lane with varying segment widths.",
        solution: "<b>Algorithmic Strategy (Bottleneck Capacity Identification):</b><br>The algorithm identifies the limiting factor (the minimum width) within the specified range.<br><br>1. <b>Slicing:</b> Extract the sub-sequence of widths from index $i$ to $j$ (inclusive).<br>2. <b>Minimization:</b> Apply the $min$ function to the sub-sequence. The widest vehicle that can traverse the entire stretch is constrained by the narrowest point.<br>3. <b>Throughput Assessment:</b> The resulting value (1, 2, or 3) directly corresponds to the vehicle type.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(T) per query, where $T$ is the segment length ($j - i + 1$). For many queries, this could be optimized to O(1) using a Range Minimum Query (RMQ) data structure like a Segment Tree.<br>• <b>Space:</b> O(1) beyond the input storage.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def serviceLane(n, widths, cases):\n    results = []\n    for entry, exit in cases:\n        # Bottleneck is the minimum width in the range\n        results.append(min(widths[entry : exit + 1]))\n    return results</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Widths:</b> [2, 3, 1, 2, 3, 2, 3, 3]. <b>Case:</b> [0, 3].<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff9500; margin-left: 10px; margin-bottom: 10px;">
    <i>Segment:</i> width[0] to width[3] (inclusive).<br>
    <i>Values:</i> [2, 3, 1, 2].<br>
    <i>Min:</i> 1.<br>
    <i>Capacity:</i> Only width 1 (Bike) can pass.
</div>
<b>Final Result:</b> 1`
    },
    {
        id: "staircase",
        title: "Staircase<br><a href='https://www.hackerrank.com/challenges/staircase/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Generate a right-aligned staircase pattern of size $n$, using '#' symbols and leading spaces.",
        solution: "<b>Algorithmic Strategy (Aligned Quadrant Simulation):</b><br>The algorithm iterates through row indices to calculate the specific ratio of whitespace to padding characters.<br><br>1. <b>Iteration:</b> Loop from $i=1$ to $n$.<br>2. <b>Whitespace Calculation:</b> For each row, the number of leading spaces is $n-i$.<br>3. <b>Symbol Population:</b> The number of '#' characters is equal to the current row index $i$.<br>4. <b>Row Construction:</b> Concatenate the strings and output the result.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N²). For $n$ rows, we manipulate and print $n$ characters. Since every character must be generated, this is asymptotically optimal for the output size.<br>• <b>Space:</b> O(1) auxiliary space (excluding the output buffer).",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def staircase(n):\n    for i in range(1, n + 1):\n        # Right-align by padding with n-i spaces\n        print((' ' * (n - i)) + ('#' * i))</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> n=4<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5856d6; margin-left: 10px; margin-bottom: 10px; font-family: monospace; white-space: pre;">
    Row 1: "   #" (Spaces: 3, #: 1)<br>
    Row 2: "  ##" (Spaces: 2, #: 2)<br>
    Row 3: " ###" (Spaces: 1, #: 3)<br>
    Row 4: "####" (Spaces: 0, #: 4)
</div>
<b>Final Result:</b> Right-aligned staircase`
    },
    {
        id: "taum-bday",
        title: "Taum and B'day<br><a href='https://www.hackerrank.com/challenges/taum-and-bday/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Minimize the total cost of purchasing $b$ black gifts and $w$ white gifts, considering the direct purchase price and the possibility of cross-color conversion ($z$ fee).",
        solution: "<b>Algorithmic Strategy (Economic Arbitrage Selection):</b><br>The algorithm evaluates whether converting a cheaper gift is more cost-effective than purchasing the desired color directly.<br><br>1. <b>Effective Price Calculation:</b> For each color, the optimal cost is $min(price_{direct}, price_{alt} + z)$.<br>2. <b>Cost Optimization:</b> If $wc + z < bc$, it is cheaper to buy white and convert to black. Conversely, if $bc + z < wc$, it is cheaper to buy black and convert to white.<br>3. <b>Linear Summation:</b> Multiply the requirements by the calculated effective prices.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(1). The solution involves a fixed number of operations regardless of the input magnitude.<br>• <b>Space:</b> O(1). Only temporary price variables are required.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def taumBday(b, w, bc, wc, z):\n    # Calculate effective minimum price for both colors\n    effective_bc = min(bc, wc + z)\n    effective_wc = min(wc, bc + z)\n    \n    return (b * effective_bc) + (w * effective_wc)</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> B=3, W=5, bc=3, wc=4, z=1.<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Effective Black:</i> min(3, 4 + 1) = 3.<br>
    <i>Effective White:</i> min(4, 3 + 1) = 4.<br>
    <i>Total:</i> (3 * 3) + (5 * 4) = 9 + 20 = 29.
</div>
<b>Final Result:</b> 29`
    },
    {
        id: "time-conversion",
        title: "Time Conversion<br><a href='https://www.hackerrank.com/challenges/time-conversion/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Convert a time string from 12-hour AM/PM format to 24-hour (military) format.<br><br><b>Constraint:</b> Handle the edge cases of 12:00:00AM (00:00:00) and 12:00:00PM (12:00:00) correctly.",
        solution: "<b>Algorithmic Strategy (Meridiem-Based Normalization):</b><br>The algorithm parses the time string and applies modular logic for the hour component.<br><br>1. <b>Segmentation:</b> Extract the hour, minute, second, and period (AM/PM).<br>2. <b>Parity Logic:</b><br>&nbsp;&nbsp;• <b>PM:</b> If hour < 12, add 12. If hour == 12, keep as 12.<br>&nbsp;&nbsp;• <b>AM:</b> If hour == 12, set to 00. If hour < 12, keep as is.<br>3. <b>Format Reassembly:</b> Format the hour to two digits and join with the original minutes and seconds.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(1). The input string length is fixed (10 characters).<br>• <b>Space:</b> O(1). Only a few string fragments are stored temporarily.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def timeConversion(s):\n    period = s[-2:]\n    hh, mm, ss = map(int, s[:-2].split(':'))\n    \n    if period == 'PM' and hh != 12: hh += 12\n    elif period == 'AM' and hh == 12: hh = 0\n    \n    return f\"{hh:02}:{mm:02}:{ss:02}\"</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> "12:01:00AM"<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #5ac8fa; margin-left: 10px; margin-bottom: 10px;">
    <i>Period:</i> AM. <i>Hour:</i> 12.<br>
    <i>Condition:</i> AM + 12 $\to$ 00.<br>
    <i>Result:</i> "00:01:00".
</div>
<b>Final Result:</b> "00:01:00"`
    },
    {
        id: "utopian-tree",
        title: "Utopian Tree<br><a href='https://www.hackerrank.com/challenges/utopian-tree/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "<b>Core Objective:</b> Calculate the final height of a tree subjected to alternating growth cycles: Spring ($2 \times height$) and Summer ($height + 1$).",
        solution: "<b>Algorithmic Strategy (Seasonal Parity Oscillation):</b><br>The algorithm iterates through sequential cycles, applying growth logic based on the cycle index parity.<br><br>1. <b>Initialization:</b> The baseline height is constant at 1 meter.<br>2. <b>Modality Check:</b> For each cycle $n$ in $[1, N]$:<br>&nbsp;&nbsp;• If $n$ is odd (Spring), perform a bitwise shift or multiplication by 2.<br>&nbsp;&nbsp;• If $n$ is even (Summer), increment the height by 1.<br>3. <b>Iterative Simulation:</b> Repeat until the target cycle count is reached.",
        optimality: "<b>Complexity Benchmarks:</b><br>• <b>Time:</b> O(N). Each cycle is processed in constant time. (Note: Can be O(1) using the geometric closed form $2^{\lceil N/2 \rceil + 1} - (N\%2 + 1)$).<br>• <b>Space:</b> O(1). Only the scalar height state is maintained.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def utopianTree(n):\n    height = 1\n    for i in range(1, n + 1):\n        # Spring cycles are odd, summer are even\n        if i % 2 != 0:\n            height *= 2\n        else:\n            height += 1\n    return height</pre>",
        stepByStep: `<b>Quantitative Trace:</b><br>
<b>Input:</b> 4 cycles.<br><br>
<b>Execution Log:</b>
<div style="padding-left: 20px; border-left: 2px solid #ff9500; margin-left: 10px; margin-bottom: 10px;">
    <i>Cycle 1 (Spring):</i> 1 * 2 = 2.<br>
    <i>Cycle 2 (Summer):</i> 2 + 1 = 3.<br>
    <i>Cycle 3 (Spring):</i> 3 * 2 = 6.<br>
    <i>Cycle 4 (Summer):</i> 6 + 1 = 7.
</div>
<b>Final Result:</b> 7`
    },
    {
        id: "valid-regex",
        title: "Valid Regex<br><a href='https://www.hackerrank.com/challenges/incorrect-regex/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "You are given several strings, and you need to determine if each one is a valid 'Regular Expression' (Regex). A regex is valid if a program (like a search engine or language compiler) can actually use it to find patterns without crashing or throwing an error due to bad notation.",
        solution: "The most reliable way to check validity is to 'Try it out'! We take the input string and attempt to compile it using the language's built-in Regex library (like `re.compile` in Python). We wrap this call in a **Try-Except** block: <br>• If it compiles successfully, the string is a valid regex. <br>• If the library throws an error (indicating bad syntax like unclosed brackets or mismatched operators), we catch the error and mark the string as invalid.",
        optimality: "This 'Library Validation' approach is optimal, running in <b>O(L) Time complexity</b> where L is the length of the string, as the internal compiler must scan the entire string. Using the built-in library is best because it guarantees your answer matches exactly how the computer would actually behave. it uses <b>O(L) Space</b> for the compiled object.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>import re\ndef isValid(pattern):\n    try:\n        re.compile(pattern)\n        return True\n    except re.error:\n        return False</pre>",
        stepByStep: `<b>Test Case 1:</b> ".*\+"<br>
<b>Validation:</b> Attempting to compile... Success! <b>Valid</b>.<br><br>
<b>Test Case 2:</b> ".*++"<br>
<b>Validation:</b> Attempting to compile... Error! (Consecutive quantifiers). <b>Invalid</b>.`
    },
    {
        id: "viral-advertising",
        title: "Viral Advertising<br><a href='https://www.hackerrank.com/challenges/strange-advertising/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "A company starts an advertising campaign! On the first day, they show the ad to 5 people. Exactly half (rounded down) like the ad and share it with 3 of their friends the following day. This pattern repeats daily. Your goal is to find out the *cumulative* number of people who liked the ad after **n** days.",
        solution: "We solve this by simulating the campaign day by day. We keep track of two variables: `shared` (people shown the ad today) and `cumulative` (total likes so far). <br><br>Each day:<br>1. Half the people who saw it like it: `liked = shared // 2`.<br>2. Add these to our running total: `cumulative += liked`.<br>3. These people each share it with 3 friends for tomorrow: `shared = liked * 3`.<br><br>We repeat this for **n** days and return the cumulative total.",
        optimality: "This 'Daily Tally' simulation runs in <b>O(N) Time complexity</b> where N is the number of days. Since N is typically small, this is extremely efficient. It uses <b>O(1) Space</b> to store the counters. It's the most direct and accurate way to model the growth of a viral trend.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def viralAdvertising(n):\n    shared = 5\n    cumulative = 0\n    for _ in range(n):\n        liked = shared // 2\n        cumulative += liked\n        shared = liked * 3\n    return cumulative</pre>",
        stepByStep: `<b>Input:</b> n = 3 days<br><br>
<b>Campaign Progress:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Day 1:</i> Shared with 5. Likes: 5//2 = 2. Total Likes: <b>2</b>. Next day shared: 2*3=6.<br>
    <i>Day 2:</i> Shared with 6. Likes: 6//2 = 3. Total Likes: 2+3 = <b>5</b>. Next day shared: 3*3=9.<br>
    <i>Day 3:</i> Shared with 9. Likes: 9//2 = 4. Total Likes: 5+4 = <b>9</b>. Next day shared: 4*3=12.
</div>
<b>Final Result:</b> 9 cumulative likes.`
    },
    {
        id: "lisas-workbook",
        title: "Lisa's Workbook<br><a href='https://www.hackerrank.com/challenges/lisa-workbook/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Simulation",
        problem: "Lisa has a math workbook! It has several chapters, and each chapter has a different number of problems. The catch? Only <b>k</b> problems fit on a single page. A problem is considered 'special' if its number within the chapter (1, 2, 3...) happens to be the same as the page number it's printed on. Help Lisa count all the special problems in her book.",
        solution: "We solve this by simulating the printing of the book! We maintain a `current_page` counter starting at 1. We iterate through each chapter and calculate how many problems it has. <br><br>For each 'batch' of <b>k</b> problems on a page, we determine the range of problem numbers (e.g., problems 4 to 6). If the `current_page` number falls within that range (e.g., is page 5 also problem 5?), we increment our 'special' counter. We then turn the page and continue until every chapter is done.",
        optimality: "This 'Page Turner' simulation runs in <b>O(N + P) Time complexity</b> where N is the number of chapters and P is the number of pages (which depends on total problems). Since we must 'check' every page once, this is the most efficient way to solve it. It uses <b>O(1) Space</b> as we only need to track the page and special counters.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def workbook(n, k, chapters):\n    page = 1\n    special = 0\n    for problems_in_chapter in chapters:\n        for start in range(1, problems_in_chapter + 1, k):\n            end = min(start + k - 1, problems_in_chapter)\n            if start <= page <= end:\n                special += 1\n            page += 1\n    return special</pre>",
        stepByStep: `<b>Config:</b> k = 3 problems/page | <b>Chapter 1:</b> 5 problems<br><br>
<b>Building the Workbook:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Page 1:</i> Problems 1, 2, 3. (Page 1 = Problem 1? <b>YES!</b>)<br>
    <i>Page 2:</i> Problems 4, 5. (Page 2 is NOT in range 4-5. NO.)<br>
    <i>Page 3:</i> (Start of next chapter...)
</div>
<b>Final Result:</b> Lisa found 1 special problem so far!`
    },
    {
        id: "heap-sort",
        title: "Heap Sort",
        category: "Algorithms - Sorting",
        problem: "Sorting a large list of numbers where you need a guaranteed O(N log N) performance regardless of the input data, unlike QuickSort which can occasionally hit a 'worst-case' slow point. You need an 'in-place' sort that doesn't use extra memory for a new list.",
        solution: "The Heap Sort algorithm treats the array as a 'Binary Heap'—a special tree structure where every parent is larger than its children. First, we transform the messy array into a Max-Heap (a process called 'heapify'). Then, we repeatedly pluck the largest element (the root) and swap it with the last element of the unsorted section, shrinking the heap and building the sorted list from the back.",
        optimality: "Heap Sort is a heavyweight champion of efficiency, delivering <b>O(N log N) Time complexity</b> in the Best, Average, AND Worst cases. Because it performs all operations directly within the original array, it uses <b>O(1) Space complexity</b>. While it might be slightly slower than QuickSort in random real-world data due to cache performance, its rock-solid guarantees make it ideal for systems where predictable performance is mission-critical.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def heapify(arr, n, i):\n    largest = i\n    l, r = 2*i + 1, 2*i + 2\n    if l < n and arr[l] > arr[largest]: largest = l\n    if r < n and arr[r] > arr[largest]: largest = r\n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)\n\ndef heapSort(arr):\n    n = len(arr)\n    for i in range(n // 2 - 1, -1, -1): heapify(arr, n, i)\n    for i in range(n-1, 0, -1):\n        arr[i], arr[0] = arr[0], arr[i]\n        heapify(arr, i, 0)\n    return arr</pre>",
        stepByStep: `<b>Input array:</b> [4, 10, 3, 5, 1]<br><br>
<b>Phase 1: Build the Max-Heap</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Action:</i> Rearrange array so parent > children.<br>
    <i>Result:</i> [10, 5, 3, 4, 1]
</div>
<b>Phase 2: Sorting</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> Swap root (10) with last (1). Result: [1, 5, 3, 4, 10]. Heapify unsorted part.<br>
    <i>Step 2:</i> Largest in unsorted is 5. Swap with last in unsorted (4). Result: [4, 1, 3, 5, 10].<br>
    <i>...Continue until sorted...</i>
</div>
<b>Final Result:</b> [1, 3, 4, 5, 10]`
    },
    {
        id: "insertion-sort",
        title: "Insertion Sort",
        category: "Algorithms - Sorting",
        problem: "Sorting a small or nearly sorted list of items, like arranging a hand of playing cards from smallest to largest as you receive them one by one.",
        solution: "Insertion Sort works exactly like sorting a hand of cards! We start with one card and assume it's sorted. Then, for every new card we pick up, we compare it to the cards already in our hand, shifting them to the right until we find the perfect slot to 'insert' the new card. We repeat this until every card is in its proper place.",
        optimality: "For small datasets or lists that are already 'mostly' sorted, Insertion Sort is incredibly fast, achieving <b>O(N) Time complexity</b> in the best case. However, for large, random lists, it slows down to <b>O(N²)</b>. Its main advantage is its extreme simplicity and the fact that it uses <b>O(1) Space</b>, making it a favorite for 'online' sorting where data arrives incrementally.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def insertionSort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and key < arr[j]:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr</pre>",
        stepByStep: `<b>Input array:</b> [12, 11, 13, 5, 6]<br><br>
<b>Walking through the hand:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Card 11:</i> Smaller than 12. Shift 12 right and insert 11. [11, 12, 13, 5, 6]<br>
    <i>Card 13:</i> Larger than 12. Keep it. [11, 12, 13, 5, 6]<br>
    <i>Card 5:</i> Smaller than 13, 12, 11. Shift all three right and insert 5 at front. [5, 11, 12, 13, 6]<br>
    <i>Card 6:</i> Smaller than 13, 12, 11. Shift those three right and insert 6 after 5. [5, 6, 11, 12, 13]
</div>
<b>Final Result:</b> [5, 6, 11, 12, 13]`
    },
    {
        id: "merge-sort",
        title: "Merge Sort",
        category: "Algorithms - Sorting",
        problem: "Sorting massive datasets with absolute stability (meaning items with the same value stay in their original relative order). You need a reliable, parallelizable algorithm that handles data of any size consistently.",
        solution: "Merge Sort follows the 'Divide and Conquer' philosophy. It recursively splits the list into halves until it's dealing with tiny, one-item lists (which are naturally sorted). Then, it 'merges' those tiny lists back together in the correct order. The magic happens in the merge step, where we compare the heads of two sorted lists and zip them into a single, perfectly ordered result.",
        optimality: "Merge Sort is the gold standard for stability and scales perfectly with <b>O(N log N) Time complexity</b> across all scenarios. While it requires <b>O(N) Space</b> to create the temporary merged lists, its predictable performance and ease of parallelization (splitting work across multiple CPUs) make it the engine behind many industrial-strength sorting libraries.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def mergeSort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    L = mergeSort(arr[:mid])\n    R = mergeSort(arr[mid:])\n    \n    res, i, j = [], 0, 0\n    while i < len(L) and j < len(R):\n        if L[i] <= R[j]: res.append(L[i]); i += 1\n        else: res.append(R[j]); j += 1\n    return res + L[i:] + R[j:]</pre>",
        stepByStep: `<b>Input array:</b> [38, 27, 43, 3]<br><br>
<b>Phase 1: Divide</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    Split into [38, 27] and [43, 3].<br>
    Split further into [38], [27], [43], [3].
</div>
<b>Phase 2: Conquer (Merge)</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    Merge [38] and [27] → [27, 38].<br>
    Merge [43] and [3] → [3, 43].<br>
    Merge [27, 38] and [3, 43] → [3, 27, 38, 43].
</div>
<b>Final Result:</b> [3, 27, 38, 43]`
    },
    {
        id: "quick-sort",
        title: "Quick Sort",
        category: "Algorithms - Sorting",
        problem: "Sorting large amounts of data as fast as humanly possible on average. You need an 'in-place' algorithm that uses CPU caches efficiently and outperforms most other sorting methods in the real world.",
        solution: "Quick Sort picks a 'pivot' element and partitions the rest of the array into two piles: those smaller than the pivot and those larger. It then recursively applies the same logic to those piles. By the time the recursion finishes, the entire array is sorted! Its speed comes from the fact that it does very few unnecessary swaps and works entirely within the original memory space.",
        optimality: "Quick Sort is legendary for its <b>O(N log N) Average-case Time complexity</b>, often beating Merge Sort and Heap Sort in practice due to lower low-level overhead. While it can theoretically hit <b>O(N²)</b> in extremely rare 'unbalanced' cases (solved by picking a random pivot), its <b>O(log N) Space complexity</b> (for the recursion stack) and sheer raw speed make it the default choice for most modern programming languages.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def quickSort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr) // 2]\n    L = [x for x in arr if x < pivot]\n    M = [x for x in arr if x == pivot]\n    R = [x for x in arr if x > pivot]\n    return quickSort(L) + M + quickSort(R)</pre>",
        stepByStep: `<b>Input array:</b> [10, 80, 30, 90, 40, 50, 70]<br><br>
<b>Picking the Pivot:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Pivot chosen:</i> 90 (at index 3).<br>
    <i>Partition:</i> [10, 80, 30, 40, 50, 70] | [90] | []<br>
    <i>Recurse:</i> Sort the left side [10, 80, 30, 40, 50, 70].
</div>
<b>Final Result:</b> [10, 30, 40, 50, 70, 80, 90]`
    },
    {
        id: "cavity-map",
        title: "Cavity Map<br><a href='https://www.hackerrank.com/challenges/cavity-map/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Matrix",
        problem: "Imagine you have a top-down map of a terrain, represented by a grid of numbers showing heights. You want to identify 'cavities'—special deep spots in the terrain. A spot is a cavity if it isn't on the edge of the map and its height is strictly greater than all four of its immediate neighbors (Up, Down, Left, and Right). Once found, you need to mark these spots with an 'X' to warn travelers!",
        solution: "We solve this by scanning the inner portion of the grid (skipping the very first and last rows and columns). For every inner cell, we perform a 'Four-Way Check'. We compare the current height against the heights of the cells directly above, below, to the left, and to the right. If the central cell is 'The King of the Hill' (strictly greater than all four), we mark it as a cavity. We use a copy of the grid to store our 'X' marks so that we don't accidentally use an 'X' as a height value for the next check!",
        optimality: "This 'Neighborhood Inspector' approach is perfectly optimal, running in <b>O(N²) Time complexity</b> where N is the side length of the square grid. Since we must examine almost every cell once, we cannot Mathematically solve this faster. It uses <b>O(N²) Space</b> to store the modified result grid, ensuring the original terrain data stays intact during the scan.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def cavityMap(grid):\n    n = len(grid)\n    res = [list(r) for r in grid]\n    for i in range(1, n-1):\n        for j in range(1, n-1):\n            v = grid[i][j]\n            if v > grid[i-1][j] and v > grid[i+1][j] and \\\n               v > grid[i][j-1] and v > grid[i][j+1]:\n                res[i][j] = 'X'\n    return [''.join(r) for r in res]</pre>",
        stepByStep: `<b>Input Map:</b><br>
1112<br>
1912<br>
1892<br>
1234<br><br>
<b>Scanning the Interior:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Spot (1,1) height 9:</i> Compare to 1, 1, 1, 8. All are smaller! Mark as <b>X</b>.<br>
    <i>Spot (1,2) height 1:</i> Smaller than neighbors. Skip.<br>
    <i>Spot (2,1) height 8:</i> Smaller than neighbors (9 is above). Skip.<br>
    <i>Spot (2,2) height 9:</i> Compare to 1, 8, 3, 2. All are smaller! Mark as <b>X</b>.
</div>
<b>Final Warning Map:</b><br>
1112<br>
1X12<br>
18X2<br>
1234`
    },
    {
        id: "factorial-recursion",
        title: "Factorial (Recursion)",
        category: "Concepts - Recursion",
        problem: "Calculate the factorial of a number ($n!$). Factorial is the product of all positive integers from 1 to $n$. For example, $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$.",
        solution: "Recursion is the perfect way to represent the 'Russian Doll' nature of factorials! We define $n!$ as $n \\times (n-1)!$. This means to find $5!$, we just need to know $4!$ and multiply it by 5. We keep breaking the problem down until we hit our 'Base Case': the factorial of 1 (or 0) is simply 1. Once we hit that bottom point, the recursion 'unwinds', multiplying all the numbers back up to our answer.",
        optimality: "The recursive approach reflects the mathematical definition perfectly, achieving <b>O(N) Time complexity</b> since we perform one multiplication for each number from 1 to N. It uses <b>O(N) Space</b> on the 'Call Stack' to keep track of each pending multiplication. For standard numbers, this is incredibly clean and readable code.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)</pre>",
        stepByStep: `<b>Input:</b> n = 4<br><br>
<b>The Execution Stack:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Call 1:</i> factorial(4) → 4 * factorial(3)<br>
    <i>Call 2:</i> factorial(3) → 3 * factorial(2)<br>
    <i>Call 3:</i> factorial(2) → 2 * factorial(1)<br>
    <i>Call 4 (Base):</i> factorial(1) → 1
</div>
<b>Unwinding:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    Return 1 to Call 3: 2 * 1 = 2<br>
    Return 2 to Call 2: 3 * 2 = 6<br>
    Return 6 to Call 1: 4 * 6 = <b>24</b>
</div>
<b>Final Result:</b> 24`
    },
    {
        id: "gcd-recursion",
        title: "Greatest Common Divisor",
        category: "Concepts - Recursion",
        problem: "Find the largest number that divides two integers perfectly without leaving a remainder. For example, the GCD of 48 and 18 is 6.",
        solution: "We use the ancient and brilliant **Euclidean Algorithm** via recursion! The logic is simple: the GCD of two numbers (A and B) is the same as the GCD of B and the remainder of $A \\div B$. We keep 'swapping and modding' until the second number becomes 0. At that exact moment, the first number is our Greatest Common Divisor! It's like folding a piece of paper repeatedly until you find the largest square that fits perfectly.",
        optimality: "The Euclidean algorithm is legendary for its efficiency, achieving <b>O(log(min(A, B))) Time complexity</b>—far faster than checking every possible divisor! It uses <b>O(log(min(A, B))) Space</b> for the recursion stack. It is the gold standard for GCD calculations in every modern computer system.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def gcd(a, b):\n    if b == 0: return a\n    return gcd(b, a % b)</pre>",
        stepByStep: `<b>Input:</b> a = 48, b = 18<br><br>
<b>The Euclidean Dance:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Round 1:</i> gcd(48, 18). Remainder (48%18) is 12.<br>
    <i>Round 2:</i> gcd(18, 12). Remainder (18%12) is 6.<br>
    <i>Round 3:</i> gcd(12, 6). Remainder (12%6) is 0.<br>
    <i>Round 4:</i> gcd(6, 0). <b>Base Case reached!</b>
</div>
<b>Final Result:</b> 6`
    },
    {
        id: "power-compute-recursion",
        title: "Fast Exponentiation",
        category: "Concepts - Recursion",
        problem: "Calculate $X^N$ (X raised to the power of N) efficiently. While you could just multiply X by itself N times, a computer can do it much faster for large exponents!",
        solution: "We use the 'Divide and Conquer' trick called **Exponentiation by Squaring**. Instead of calculating $2^8$ as $2 \\times 2 \\times 2...$, we realize that $2^8 = (2^4)^2$. And $2^4 = (2^2)^2$. By splitting the exponent in half at every step, we drastically reduce the work! If the exponent is odd (like $2^9$), we just calculate $(2^4)^2 \\times 2$. This recursive approach cuts the number of operations down significantly.",
        optimality: "This optimized recursion achieves <b>O(log N) Time complexity</b>, which is a massive leap over the simple O(N) loop! While a standard loop might take a million steps for $2^{1000000}$, this method only takes about 20 steps. It uses <b>O(log N) Space</b> for the call stack, making it the fastest way to handle large powers in cryptography and higher math.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def power(x, n):\n    if n == 0: return 1\n    half = power(x, n // 2)\n    if n % 2 == 0: return half * half\n    return x * half * half</pre>",
        stepByStep: `<b>Input:</b> 2^5<br><br>
<b>Divide and Conquer:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> Need 2^2 to find 2^5.<br>
    <i>Step 2:</i> Need 2^1 to find 2^2.<br>
    <i>Step 3:</i> Need 2^0 (is 1).<br>
    <i>Recursive Climb:</i> <br>
    2^1 = 2 * (1*1) = 2<br>
    2^2 = (2*2) = 4<br>
    2^5 = 2 * (4*4) = <b>32</b>
</div>
<b>Final Result:</b> 32`
    },
    {
        id: "sum-of-digits-recursion",
        title: "Sum of Digits",
        category: "Concepts - Recursion",
        problem: "Calculate the sum of all digits in a number. For example, if the input is 234, the answer should be $2 + 3 + 4 = 9$.",
        solution: "We use recursion to peel the number like an onion, one digit at a time! We take the last digit (using `number % 10`) and add it to the 'Sum of Digits' of whatever is left (using `number // 10`). We keep doing this until there are no digits left (the number becomes 0). The recursion then adds all the 'peeled' digits together as it returns.",
        optimality: "This approach is perfectly efficient with <b>O(D) Time complexity</b>, where D is the number of digits. Since we must look at every digit once, it's impossible to go faster. It uses <b>O(D) Space</b> for the recursion stack. It's a fundamental example of how recursion can break down numerical data structures.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def sumDigits(n):\n    if n == 0: return 0\n    return (n % 10) + sumDigits(n // 10)</pre>",
        stepByStep: `<b>Input:</b> 234<br><br>
<b>Peeling the Onion:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Call 1:</i> 4 + sumDigits(23)<br>
    <i>Call 2:</i> 3 + sumDigits(2)<br>
    <i>Call 3:</i> 2 + sumDigits(0)<br>
    <i>Base:</i> 0
</div>
<b>Recombining:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    2 + 0 = 2<br>
    3 + 2 = 5<br>
    4 + 5 = <b>9</b>
</div>
<b>Final Result:</b> 9`
    },
    {
        id: "is-palindrome-recursion",
        title: "Palindrome Check",
        category: "Concepts - Recursion",
        problem: "Determine if a word or phrase is a 'Palindrome'—meaning it reads exactly the same forwards and backwards (like 'level' or 'racecar').",
        solution: "Recursion allows us to check symmetry from the 'outside-in'! We check if the first and last letters match. If they don't, it's definitely not a palindrome. If they DO match, we strip them off and recursively ask the same question about the inner part of the word. We stop when we are left with 0 or 1 letters (which are always symmetrical). It's like checking the layers of a mirrored reflection.",
        optimality: "The recursive checker runs in <b>O(N) Time complexity</b>, where N is the length of the string. We only ever look at each pair of characters once. It uses <b>O(N) Space</b> for the recursion stack and substring creation. It's the most intuitive way to express the recursive symmetry of palindromic structures.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def isPalindrome(s):\n    if len(s) <= 1: return True\n    return s[0] == s[-1] and isPalindrome(s[1:-1])</pre>",
        stepByStep: `<b>Input:</b> "racecar"<br><br>
<b>Symmetry Inspection:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Check 1:</i> 'r' == 'r'? Yes. Check "aceca".<br>
    <i>Check 2:</i> 'a' == 'a'? Yes. Check "cec".<br>
    <i>Check 3:</i> 'c' == 'c'? Yes. Check "e".<br>
    <i>Base Case:</i> "e" is length 1. <b>TRUE!</b>
</div>
<b>Final Result:</b> "racecar" is a palindrome.`
    },
    {
        id: "reverse-string-recursion",
        title: "Reverse String",
        category: "Concepts - Recursion",
        problem: "Take a word and flip it completely backwards using recursion. 'apple' becomes 'elppa'.",
        solution: "Similar to the sum of digits, we 'peel' the word! We take the very first character and move it to the *end* of the reversed version of 'everything else'. So, `reverse('apple')` is just `reverse('pple') + 'a'`. This chain of logic continues until we hit the last letter. As the recursion 'unwinds', it glues the letters back together in the opposite order.",
        optimality: "This elegant logic achieves <b>O(N) Time complexity</b> because we process each character once. It uses <b>O(N) Space</b> to store the stack of characters and the resulting substrings. It's a classic demonstration of how recursive thinking can transform a sequence.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def reverse(s):\n    if len(s) <= 1: return s\n    return reverse(s[1:]) + s[0]</pre>",
        stepByStep: `<b>Input:</b> "cat"<br><br>
<b>The Reversal Chain:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> reverse("at") + "c"<br>
    <i>Step 2:</i> reverse("t") + "a"<br>
    <i>Base:</i> "t"
</div>
<b>The Snap-Back:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    "t" + "a" = "ta"<br>
    "ta" + "c" = <b>"tac"</b>
</div>
<b>Final Result:</b> "tac"`
    },
    {
        id: "string-subsequences-recursion",
        title: "String Subsequences",
        category: "Concepts - Recursion",
        problem: "Find every single possible 'Subsequence' of a string. A subsequence is a new string formed by deleting zero or more characters from the original string. For 'abc', the subsequences include 'a', 'ab', 'ac', 'bc', etc.",
        solution: "We solve this using a 'Choice Tree' recursion! For every character in the string, we have two simple choices: 'Include it' OR 'Exclude it'. We branch the recursion for both choices. By the time we reach the end of the string, every unique path through these choices represents one possible subsequence. This exhaustive search ensures we don't miss a single one!",
        optimality: "Because every character has 2 choices, there are $2^N$ possible subsequences. This means the algorithm runs in <b>O(2^N) Time complexity</b>. While this grows very fast for long strings, it is the mathematically required time to find every unique combination. It uses <b>O(N) Space</b> for the recursion depth.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def subsets(s, current=\"\", res=[]):\n    if not s: \n        res.append(current)\n        return\n    # Choice 1: Include s[0]\n    subsets(s[1:], current + s[0], res)\n    # Choice 2: Exclude s[0]\n    subsets(s[1:], current, res)</pre>",
        stepByStep: `<b>Input:</b> "ab"<br><br>
<b>The Choice Tree:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Root:</i> Start with ""<br>
    <i>Lvl 1 (a):</i> Choose 'a' → "a" | Skip 'a' → ""<br>
    <i>Lvl 2 (b):</i> From "a" choose 'b' → "ab" | From "a" skip 'b' → "a"<br>
    <i>Lvl 2 (b):</i> From "" choose 'b' → "b" | From "" skip 'b' → ""
</div>
<b>Final Result:</b> ["ab", "a", "b", ""]`
    },
    {
        id: "sum-of-natural-numbers-recursion",
        title: "Natural Number Sum",
        category: "Concepts - Recursion",
        problem: "Calculate the sum of all positive integers from 1 up to N. For example, if N is 5, the sum is $1+2+3+4+5=15$.",
        solution: "We define the sum of N numbers as $N + (Sum of N-1)$. This recursive definition allows us to stack the numbers one on top of the other until we hit the base case of 0. Then, we add all the stacked numbers as we return. It's the numerical equivalent of building a tower of blocks and then counting them as you take them down.",
        optimality: "This approach runs in <b>O(N) Time complexity</b> and <b>O(N) Space</b>. While the mathematical formula $(N(N+1))/2$ is even faster (O(1)), this recursive method is a perfect 'Hello World' for understanding how state is maintained across function calls.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def sumNatural(n):\n    if n == 0: return 0\n    return n + sumNatural(n - 1)</pre>",
        stepByStep: `<b>Input:</b> n = 3<br><br>
<b>Building the Stack:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    3 + sum(2)<br>
    2 + sum(1)<br>
    1 + sum(0)<br>
    Base: 0
</div>
<b>Collapsing the Stack:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    1 + 0 = 1<br>
    2 + 1 = 3<br>
    3 + 3 = <b>6</b>
</div>
<b>Final Result:</b> 6`
    },
    {
        id: "count-digits-recursion",
        title: "Digit Counter",
        category: "Concepts - Recursion",
        problem: "Count exactly how many digits are in a number using recursion. For 12345, the answer is 5.",
        solution: "We use a 'Chop and Count' strategy! Every time we call the function, we chop off the last digit (using `// 10`) and add 1 to our count. We keep chopping until the number hits 0. The total number of 'chops' we made is exactly the number of digits in the original number.",
        optimality: "This is a flawlessly efficient <b>O(D) Time complexity</b> solution, where D is the number of digits. It uses <b>O(D) Space</b> for the recursion stack. It's the standard recursive way to measure the size of a decimal integer.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def countDigits(n):\n    if n < 10: return 1\n    return 1 + countDigits(n // 10)</pre>",
        stepByStep: `<b>Input:</b> 543<br><br>
<b>Chopping Away:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Call 1:</i> count(543) → 1 + count(54)<br>
    <i>Call 2:</i> count(54) → 1 + count(5)<br>
    <i>Base:</i> count(5) → 1
</div>
<b>Tallying:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    1 + 1 + 1 = <b>3</b>
</div>
<b>Final Result:</b> 3 digits.`
    },
    {
        id: "print-n-to-1-recursion",
        title: "Print N to 1",
        category: "Concepts - Recursion",
        problem: "Print a sequence of numbers from N down to 1 using recursion without using any loops.",
        solution: "In recursion, order is everything! To print descending, we print the current number <i>before</i> we pass the torch to the next recursive call. This ensures that the biggest number is dealt with first, followed by N-1, and so on, until we hit the base case.",
        optimality: "This approach runs in <b>O(N) Time complexity</b> as each number is printed exactly once. It uses <b>O(N) Space</b> for the recursion stack. It's the perfect way to understand the 'Forward' phase of a recursive process.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def printNto1(n):\n    if n <= 0: return\n    print(n)\n    printNto1(n - 1)</pre>",
        stepByStep: `<b>Input:</b> n = 3<br><br>
<b>Printing Order:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Current n is 3:</i> Print 3. Recurse(2).<br>
    <i>Current n is 2:</i> Print 2. Recurse(1).<br>
    <i>Current n is 1:</i> Print 1. Recurse(0).<br>
    <i>Base Case:</i> Stop.
</div>
<b>Final Output:</b> 3, 2, 1`
    },
    {
        id: "print-1-to-n-recursion",
        title: "Print 1 to N",
        category: "Concepts - Recursion",
        problem: "Print a sequence of numbers from 1 up to N using recursion without using any loops.",
        solution: "To print ascending, we use the 'Snap-Back' property of the call stack! We make the recursive call first, which keeps diving deeper until it hits 0. Only then, as the calls finish and 'pop' off the stack in reverse order, do we actually print the number. It's like leaving a trail of breadcrumbs and only picking them up on the way back out of the forest!",
        optimality: "This approach runs in <b>O(N) Time complexity</b> and <b>O(N) Space</b>. It is a brilliant example of how 'Deferred Execution' works in recursive programming.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def print1toN(n):\n    if n <= 0: return\n    print1toN(n - 1)\n    print(n)</pre>",
        stepByStep: `<b>Input:</b> n = 3<br><br>
<b>The Depth Dive:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    Call(3) → Call(2) → Call(1) → Base(0).<br>
    (Nothing has been printed yet!)
</div>
<b>The Return Trip:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Back in Call(1):</i> Print 1.<br>
    <i>Back in Call(2):</i> Print 2.<br>
    <i>Back in Call(3):</i> Print 3.
</div>
<b>Final Output:</b> 1, 2, 3`
    },
    {
        id: "jumping-on-the-clouds-min",
        title: "Jumping on the Clouds: Minimum Jumps<br><a href='https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "You are playing a game where you jump between safe clouds (0) and avoid thunderheads (1). Starting at cloud 0, your goal is to reach the final cloud in as few jumps as possible. You can only jump 1 or 2 steps at a time, and you can only land on clouds marked 0. What is the lowest number of jumps needed to win?",
        solution: "To find the minimum number of jumps, we use a 'Greedy' approach. Greedy means always trying to make the biggest possible move (2 steps) first. <br><br>We start at index 0 and look at the cloud 2 steps ahead. If it exists and is safe (0), we jump there immediately. If it's a thunderhead or doesn't exist, we must jump only 1 step to the next safe cloud. By always preferring the 2-step jump, we mathematically guarantee that we reach the end in the smallest number of moves.",
        optimality: "This strategy is perfectly optimal, completing in <b>O(N) Time</b> because we only visit each cloud once on our path. It uses <b>O(1) Space</b> as we only need two variables: one to track our current position and one to count our jumps. It is the fastest possible way to navigate the cloud array.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def jumpingOnCloudsMin(c):\n    jumps = 0\n    i = 0\n    while i < len(c) - 1:\n        # Priority: Jump 2 steps if safe\n        if i + 2 < len(c) and c[i + 2] == 0:\n            i += 2\n        else:\n            i += 1\n        jumps += 1\n    return jumps</pre>",
        stepByStep: `<b>Input Array:</b> [0, 0, 1, 0, 0, 1, 0]<br><br>
<b>Path Navigation:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Current Position 0:</i> Check index 2. It is a 1 (Thundercloud). <br>
    <i>Action:</i> Must jump 1 step to index 1. <b>(Jump 1)</b>
</div>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Current Position 1:</i> Check index 3. It is a 0 (Safe!). <br>
    <i>Action:</i> Leap 2 steps to index 3. <b>(Jump 2)</b>
</div>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Current Position 3:</i> Check index 5. It is a 1 (Thundercloud). <br>
    <i>Action:</i> Must jump 1 step to index 4. <b>(Jump 3)</b>
</div>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Current Position 4:</i> Check index 6. It is a 0 (Safe!). <br>
    <i>Action:</i> Leap 2 steps to index 6 (The end!). <b>(Jump 4)</b>
</div>
<b>Final Result:</b> 4`
    }
];

function initSite() {
    const toc = document.getElementById('toc');
    const chapters = document.getElementById('chapters');

    // Group algorithms by root category
    const categorized = {};
    algorithms.forEach(algo => {
        const rootCategory = algo.category.split(' - ')[0]; // e.g. "Algorithms" or "Problems"
        if (!categorized[rootCategory]) {
            categorized[rootCategory] = [];
        }
        categorized[rootCategory].push(algo);
    });

    // Build Categorized TOC
    for (const [categoryName, items] of Object.entries(categorized)) {
        // Create Category Header
        const categoryHeader = document.createElement('li');
        categoryHeader.style.marginTop = '15px';
        categoryHeader.style.marginBottom = '5px';
        categoryHeader.style.fontWeight = '600';
        categoryHeader.style.fontSize = '0.85rem';
        categoryHeader.style.color = '#888';
        categoryHeader.style.textTransform = 'uppercase';
        categoryHeader.textContent = categoryName;
        toc.appendChild(categoryHeader);

        // Create Sub-list for the items
        const subList = document.createElement('ul');
        subList.style.listStyleType = 'none';
        subList.style.paddingLeft = '10px';
        subList.style.margin = '0';

        items.forEach(algo => {
            const li = document.createElement('li');
            li.style.marginBottom = '8px';
            const a = document.createElement('a');
            a.href = `#${algo.id}`;
            a.innerHTML = algo.title.split('<br>')[0];
            li.appendChild(a);
            subList.appendChild(li);
        });

        toc.appendChild(subList);
    }

    algorithms.forEach(algo => {
        // Build Chapter Content
        const section = document.createElement('section');
        section.id = algo.id;
        section.className = 'chapter-section';

        section.innerHTML = `
            <div style="text-transform:uppercase; font-size: 0.8rem; color: #666; font-weight:600; letter-spacing:0.05em; margin-bottom: 0.5rem;">${algo.category}</div>
            <h2>${algo.title}</h2>
            
            <div class="problem-statement">
                <strong>Problem Addressed:</strong><br>
                ${algo.problem}
            </div>

            <h3>Solution Approach</h3>
            <p>${algo.solution}</p>

            <h3>Why This Is Optimal</h3>
            <p>${algo.optimality}</p>

            <div class="professional-note">
                <h4>Solution Code</h4>
                <div class="code-block" style="margin-bottom: 1rem;">
                    ${algo.codeBlock ? algo.codeBlock : ''}
                </div>
                
                <h4>Step-by-Step Explanation</h4>
                <div class="step-by-step-block" style="background: rgba(0,0,0,0.03); padding: 15px; border-radius: 5px; border-left: 4px solid #007bff; line-height: 1.6;">
                    ${algo.stepByStep ? algo.stepByStep : (algo.example ? algo.example.replace(/\n/g, '<br>') : 'Information not available.')}
                </div>
            </div>
        `;

        chapters.appendChild(section);
    });

    // Handle SPA Routing
    function handleRouting() {
        let currentHash = window.location.hash.substring(1);
        if (!currentHash && algorithms.length > 0) {
            // Default to the first algorithm if no hash is present
            currentHash = algorithms[0].id;
        }

        // Hide all sections, show the active one
        document.querySelectorAll('.chapter-section').forEach(sec => {
            sec.style.display = 'none';
        });
        const activeSection = document.getElementById(currentHash);
        if (activeSection) {
            activeSection.style.display = 'block';
            window.scrollTo(0, 0);
        }

        // Update active class on TOC links
        document.querySelectorAll('.toc a').forEach(a => {
            if (a.getAttribute('href') === `#${currentHash}`) {
                a.classList.add('active');
                a.style.fontWeight = '600';
            } else {
                a.classList.remove('active');
                a.style.fontWeight = 'normal';
            }
        });
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);

    // Initial load
    handleRouting();
}

document.addEventListener('DOMContentLoaded', initSite);
