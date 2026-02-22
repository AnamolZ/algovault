const algorithms = [
    {
        id: "counting-sort",
        title: "Counting Sort",
        category: "Algorithms - Sorting",
        problem: "Sorting an array or list of integers efficiently when the range of potential values (maximum element value) is relatively small compared to the number of items. Comparison-based sorts like QuickSort or MergeSort cannot do better than O(N log N).",
        solution: "The Counting Sort algorithm. It allocates an auxiliary array, count, of size max_val + 1. It tallies the occurrences of each number in the input array, and then overwrites or reconstructs the output array by iterating through the count array.",
        optimality: "This solution is optimal for specific conditions—specifically, when the largest number in the array, K, is not significantly larger than the size of the array, N. It achieves O(N + K) time complexity, breaking the O(N log N) lower bound of comparison-based sorting. However, its space complexity is O(K), which can be memory-intensive if K is excessively large.",
        example: "Input: [4, 2, 2, 8, 3, 3, 1]\n\n1. Find max K = 8\n2. Create count array length 9: [0, 0, 0, 0, 0, 0, 0, 0, 0]\n3. Tally frequencies: [0, 1, 2, 2, 1, 0, 0, 0, 1]\n4. Reconstruct: [1, 2, 2, 3, 3, 4, 8]"
    },
    {
        id: "jumping-clouds",
        title: "Jumping on the Clouds<br><a href='https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "Imagine a game where a character stands on a circle of numbered clouds. The game starts at Cloud 0, and the player is given 100 Energy Points to begin with! The rules are simple:<br><br>1. You always jump forward exactly <b>k</b> steps at a time.<br>2. When you jump, you lose <b>1 Energy Point</b> because jumping is tiring work.<br>3. There are two types of clouds: Safe Clouds (marked as <b>0</b>) and Thunderclouds (marked as <b>1</b>).<br>4. If you land on a Thundercloud, you get electrocuted and lose an <b>extra 2 Energy Points</b> (so you lose 3 points total for that jump!).<br><br>Because the path is a circle, if you jump past the last cloud, you loop right back around to the beginning. The game finishes the exact moment you land back on Cloud 0 where you started. Your mission? Calculate exactly how much Energy you have left when the game ends!",
        solution: "To solve this, we don't need any complex formulas! We just play the game using a 'loop' in our code, tracking the character exactly as they jump.<br><br>We start by setting our Energy to 100, and our Current Position to 0. Then, we calculate where the next jump lands. To handle the 'circle' part of the game perfectly, we use the Math Modulo Operator (`%`). This operator basically gives us the remainder of division. So if there are 8 clouds (0 to 7), and we jump from cloud 6 by 2 steps, `(6 + 2) % 8 = 0`. It wraps exactly back to 0!<br><br>Once we know the new cloud we landed on, we check if it is a `0` (subtract 1 energy) or a `1` (subtract 3 energy). We keep doing jumps in our loop until our position becomes 0 again. Then we stop the loop and return the final Energy.",
        optimality: "This 'simulate the game' approach is perfect because it takes the absolute minimum amount of time possible. We don't examine every single cloud on the board—we only look at the exact clouds our character lands on! In big-O notation, we say this takes <b>O(N) Time</b>, meaning it is as fast as reading the input. It also uses <b>O(1) Space</b>, which means we only use two tiny variables (`e` for energy and `i` for position) instead of storing large amounts of data in memory. It is the gold standard solution for this problem.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def jumpingOnClouds(c, k):\n    e = 100\n    i = 0\n    n = len(c)\n\n    while True:\n        i = (i + k) % n\n        if c[i] == 1:\n            e -= 3\n        else:\n            e -= 1\n\n        if i == 0:\n            break\n\n    return e</pre>",
        stepByStep: `<b>Round 1:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Current Position:</i> 0<br>
    <i>Action:</i> Jump 2 steps <code>(0 + 2) % 8 = 2</code>. We land on <b>Cloud 2</b>.<br>
    <i>Check:</i> Cloud 2 is a <code>1</code> (Thundercloud!).<br>
    <i>Energy Math:</i> 100 - 3 = <b>97 Energy remaining</b>
</div>
<b>Round 2:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Current Position:</i> 2<br>
    <i>Action:</i> Jump 2 steps <code>(2 + 2) % 8 = 4</code>. We land on <b>Cloud 4</b>.<br>
    <i>Check:</i> Cloud 4 is a <code>0</code> (Safe Cloud).<br>
    <i>Energy Math:</i> 97 - 1 = <b>96 Energy remaining</b>
</div>
<b>Round 3:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Current Position:</i> 4<br>
    <i>Action:</i> Jump 2 steps <code>(4 + 2) % 8 = 6</code>. We land on <b>Cloud 6</b>.<br>
    <i>Check:</i> Cloud 6 is a <code>1</code> (Thundercloud!).<br>
    <i>Energy Math:</i> 96 - 3 = <b>93 Energy remaining</b>
</div>
<b>Round 4:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Current Position:</i> 6<br>
    <i>Action:</i> Jump 2 steps <code>(6 + 2) % 8 = 8 % 8 = 0</code>. We wrap around and land on <b>Cloud 0</b>.<br>
    <i>Check:</i> Cloud 0 is intrinsically safe.<br>
    <i>Energy Math:</i> 93 - 1 = <b>92 Energy remaining</b>
</div>
<b>Game Over!</b> We reached 0, so the loop terminates. The final answer is <b>92</b>.`
    },
    {
        id: "birthday-cake-candles",
        title: "Birthday Cake Candles<br><a href='https://www.hackerrank.com/challenges/birthday-cake-candles/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "Imagine you are celebrating a child's birthday. They are turning 4 years old, so there are 4 candles on their cake! The candles aren't all the same height, though. When the birthday child blows on the cake, they can only blow hard enough to blow out the **tallest** candles on the cake! Any smaller candles will stay lit.<br><br>Your job is to look at the group of candles, figure out how tall the tallest candle is, and then count exactly how many candles share that maximum height so we know how many get blown out!",
        solution: "To solve this problem like a computer, we can do it in two easy sweeps (or 'loops') over the candles!<br><br>First, we need to find the tallest candle. We can do this by picking up the first candle and saying, 'This is the tallest I've seen so far!' Then, we look at every single other candle. If we find one taller, that becomes our new 'tallest'. By the time we look at the last candle, we know the exact maximum height.<br><br>Second, now that we know the magic maximum height, we just walk past the candles one more time from the beginning. Every time we see a candle that matches our magic max height, we add 1 to our 'blown out' tally. At the end, we return the tally!",
        optimality: "This strategy takes <b>O(N) Time</b> and <b>O(1) Space</b>! We have to check every candle at least once to know which is tallest, making it mathematically impossible to solve faster than O(N). We also only keep two small numbers in our head—the maximum height and the counting tally—so it uses virtually zero extra memory.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def findMax(arr):\n    max_n = arr[0]\n    for x in arr:\n        if x > max_n:\n            max_n = x\n    return max_n\n\ndef birthdayCakeCandles(arr):\n    max_n = findMax(arr)\n    count = 0\n    for x in arr:\n        if x == max_n:\n            count += 1\n    return count</pre>",
        stepByStep: `<b>Input Array:</b> [4, 4, 1, 3]<br><br>
<b>Phase 1: Finding the Tallest Candle</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Current max guess:</i> 4 (the first candle)<br>
    <i>Check next candle (4):</i> Not taller, max stays 4.<br>
    <i>Check next candle (1):</i> Not taller, max stays 4.<br>
    <i>Check next candle (3):</i> Not taller, max stays 4.<br>
    <b>The tallest candle height is 4!</b>
</div>
<b>Phase 2: Counting the Tallest Candles</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Check candle 4:</i> It matches our max height! Tally = 1.<br>
    <i>Check candle 4:</i> It matches our max height! Tally = 2.<br>
    <i>Check candle 1:</i> Not the max height. Tally stays 2.<br>
    <i>Check candle 3:</i> Not the max height. Tally stays 2.<br>
    <b>Final Answer: 2 candles get blown out!</b>
</div>`
    },
    {
        id: "mini-max-sum",
        title: "Mini-Max Sum<br><a href='https://www.hackerrank.com/challenges/mini-max-sum/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "You are given a bucket containing exactly 5 numbers. Your goal is simple: pick up exactly 4 of those numbers and add them together. <br><br>But there is a twist! You need to calculate two different things:<br>1. What is the **absolute smallest** sum you can possibly make by picking 4 numbers?<br>2. What is the **absolute largest** sum you can possibly make by picking 4 numbers?<br><br>You must print both of those sums side-by-side as your final answer.",
        solution: "Think about how easily we could solve this if the numbers were perfectly sorted in a line from smallest to largest!<br><br>If we sort the numbers, the easiest way to make the **smallest sum** is to just pick up the first 4 numbers (which are guaranteed to be the littlest). Similarly, the easiest way to make the **largest sum** is to just pick up the last 4 numbers (which are guaranteed to be the biggest).<br><br>So our code simply sorts the array of 5 numbers using a quick sorting trick. Then it grabs the first 4 pieces to calculate the <code>min_sum</code>, grabs the last 4 pieces to calculate the <code>max_sum</code>, and prints both!",
        optimality: "Because there are strictly 5 numbers every single time, the 'sort and sum' strategy is astonishingly fast. In computer terms, it operates in <b>O(N log N) Time</b> due to the sorting step, but since N is locked at exactly 5, it runs in virtually constant O(1) real-world time. It's clean, foolproof, and completely avoids writing confusing combinations logic!",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def sorting(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return sorting(left) + middle + sorting(right)\n\ndef miniMaxSum(arr):\n    arr = sorting(arr)\n    min_n = sum(arr[:4])\n    max_n = sum(arr[1:])\n    return min_n, max_n</pre>",
        stepByStep: `<b>Input Array:</b> [1, 3, 5, 7, 9] (Let's assume the array is already sorted for this example!)<br><br>
<b>Calculating Minimum Sum</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Rule:</i> We must ignore the biggest number (9) to keep the sum as small as possible.<br>
    <i>Action:</i> We add the 4 smallest numbers: <code>1 + 3 + 5 + 7</code><br>
    <i>Result:</i> <b>16</b>
</div>
<b>Calculating Maximum Sum</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Rule:</i> We must ignore the smallest number (1) to keep the sum as big as possible.<br>
    <i>Action:</i> We add the 4 biggest numbers: <code>3 + 5 + 7 + 9</code><br>
    <i>Result:</i> <b>24</b>
</div>
<b>Final Answer</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    We print both numbers separated by a space: <b>16 24</b>
</div>`
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
        problem: "You are playing a word game where you have a starting word (like `hackerhappy`), and you are trying to turn it into a target word (like `hackerrank`). But you only have exactly `k` magic moves to do it!<br><br>A magic move lets you do one of two things:<br>1. Delete the last letter of your word.<br>2. Stick a new letter onto the end of your word.<br><br>You must use **exactly** `k` moves. If your word matches the target word and you still have moves left over, you are allowed to delete letters that aren't there (deleting an empty word just keeps it empty). Can you reach exactly the target word in exactly `k` moves?",
        solution: "To find out if it's possible, we don't actually need to play the game—we just do some smart math on the string lengths!<br><br>First, we count how many letters the two words have in common from the very beginning (their 'common prefix'). For `hackerhappy` and `hackerrank`, the first 6 letters (`hacker`) match perfectly. This means we *never* need to delete those letters if we don't have to.<br><br>Next, we calculate the absolute minimum number of moves required to change the words. We count the letters in the starting word that don't match (we must `Delete` them), and we count the letters in the target word that are missing (we must `Append` them). Minimum Moves = Deletions + Appends.<br><br>Finally, we check our rules: If we have enough moves `k` to completely erase both words and rebuild them from scratch, the answer is 'Yes'. Otherwise, if we can hit the exact move count by just bouncing back and forth on the last letter (which takes 2 moves per 'bounce'), the answer is also 'Yes'. Otherwise, it's 'No'!",
        optimality: "This math trick operates in <b>O(N) Time</b> and <b>O(1) Space</b>! We only ever loop over the characters once to find the matching prefix length. After that, we just compare lengths using basic arithmetic. We don't magically construct strings in memory, meaning this uses virtually no space and runs instantaneously.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def appendAndDelete(s, t, k):\n    common_length = 0\n    for char_s, char_t in zip(s, t):\n        if char_s == char_t:\n            common_length += 1\n        else:\n            break\n            \n    total_len = len(s) + len(t)\n    min_moves = total_len - (2 * common_length)\n    \n    if k >= total_len:\n        return \"Yes\"\n    elif k >= min_moves and (k - min_moves) % 2 == 0:\n        return \"Yes\"\n    else:\n        return \"No\"</pre>",
        stepByStep: `<b>Input Strings:</b> s = "ashley", t = "ash", k = 2<br><br>
<b>Phase 1: Finding the Common Root</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Check:</i> Comparing "ashley" and "ash"...<br>
    <i>Result:</i> Both start with "ash". That is <b>3 matching letters!</b>
</div>
<b>Phase 2: Calculating Minimum Moves</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Rule:</i> We must delete "ley" from "ashley" (3 letters). We don't need to append anything. <br>
    <i>Math:</i> <code>(6 total length + 3 total length) - (2 * 3 matching letters) = 9 - 6 = 3</code>.<br>
    <i>Result:</i> We absolutely need <b>3 minimum moves</b>.
</div>
<b>Phase 3: The Verdict</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Check:</i> Our magic move limit is <code>k = 2</code>. We need <code>3</code>.<br>
    <i>Result:</i> 2 is less than 3! We don't have enough magic moves. Return <b>"No"</b>.
</div>`
    },
    {
        id: "beautiful-triplets",
        title: "Beautiful Triplets<br><a href='https://www.hackerrank.com/challenges/beautiful-triplets/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "You are handed a list of numbers sorted from smallest to largest. Your goal is to find special groups of three numbers called 'Beautiful Triplets'.<br><br>For a group of three numbers (let's call them A, B, and C) to be 'Beautiful', they must be perfectly spaced apart by an exact magic distance `d`. <br><br>For example, if your magic distance `d` is 2, then `[1, 3, 5]` is a beautiful triplet because `3 - 1 = 2`, and `5 - 3 = 2`. The gaps match perfectly! How many totally unique beautiful triplets can you spot hiding in the list?",
        solution: "The slow way to do this is to check every combination of 3 numbers. But we can be much smarter using a tool from math called a **Hash Map**!<br><br>We take all our numbers and put them in a tally chart (using a dictionary). Then we look at every unique number we collected—let's call it `A`. Since we know the 'magic gap' `d` ahead of time, we don't need to guess what `B` and `C` are! `B` *must* be `A + d`, and `C` *must* be `A + 2*d`.<br><br>So for every number `A`, we simply ask the tally chart: 'Do you have the number `A + d`? What about `A + 2*d`?'. If the chart has both, then we've found a Beautiful Triplet! We just multiply their tally counts together to see how many variations we can make, and add that to our total.",
        optimality: "This Hash Map approach shatters the slow loop method, achieving blitz-fast <b>O(N) Time complexity</b>. Creating the tally chart requires looping over the list once, and checking the map for our 'ideal numbers' takes instant O(1) time checks! It requires exactly <b>O(U) Space</b>, where U is the amount of unique numbers tracked inside our lookup dictionary.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>from collections import Counter\n\ndef beautifulTriplets(arr, d):\n    counts = Counter(arr)\n    total = 0\n    for x in counts:\n        if (x + d) in counts and (x + 2 * d) in counts:\n            total += counts[x] * counts[x + d] * counts[x + 2 * d]\n    return total</pre>",
        stepByStep: `<b>Input array:</b> [2, 2, 4, 4, 6], Magic Distance <code>d = 2</code><br><br>
<b>Phase 1: Build the Tally Chart</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>We count the frequencies:</i><br>
    The number '2' appears 2 times.<br>
    The number '4' appears 2 times.<br>
    The number '6' appears 1 time.
</div>
<b>Phase 2: Check the Map!</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Checking '2':</i> We need a ` + "`4`" + ` (2+2) and a ` + "`6`" + ` (2+4). Do we have them? Yes!<br>
    <i>Math:</i> Multiply the tallies: <code>2 x 2 x 1 = 4</code> unique triplets formed!<br>
    <i>Total jumps to:</i> 4
</div>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Checking '4':</i> We need a ` + "`6`" + ` (4+2) and an ` + "`8`" + ` (4+4). Do we have them? No, ` + "`8`" + ` is missing.<br>
    <i>Total stays at:</i> 4
</div>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Checking '6':</i> We need an ` + "`8`" + ` (6+2) and a ` + "`10`" + ` (6+4). Do we have them? No.<br>
    <i>Total stays at:</i> 4
</div>
<b>Final Answer!</b> We found exactly <b>4</b> Beautiful Triplets.`
    },
    {
        id: "circular-array-rotation",
        title: "Circular Array Rotation<br><a href='https://www.hackerrank.com/challenges/circular-array-rotation/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "You are given a list of integers and told to 'rotate' them to the right by exactly `k` steps. A 'rotation' just means taking the very last number off the end of your list and gluing it onto the very front of the list, over and over!<br><br>Once the list has been rotated `k` times, you are given a bunch of 'queries' (which are just index numbers). For each query index, you must print out exactly what number is now sitting in that spot of the rotated list.",
        solution: "We could use a loop to move numbers one by one, but that would take forever if `k` was a million! Instead, we can use a clever Python trick to instantly perform all the rotations at once without ever using a loop.<br><br>First, if someone asked you to rotate a list of 5 things 5 whole times... it would end up looking exactly like the starting list. So we immediately use the Math Modulo Operator (`%`) to chop off the useless full circles. 104 rotations on a list of 5 is really just `104 % 5 = 4` rotations!<br><br>Next, we know exactly how to rebuild the array. If we do 4 rotations on a list, we know the exact *last* 4 numbers in the array are getting moved to the front. We just use Python's slice syntax `a[-k:]` to slice those numbers off the end, and glue them to the front of the remaining numbers `a[:-k]`. Boom! The list is perfectly rotated. We return a brand new list containing only the requested queries.",
        optimality: "This is a flawlessly optimal solution. Performing the rotation happens in a massive leap using slicing, meaning it completes in <b>O(N) Time complexity</b> to reconstruct the single new array. From there, answering the queries using the new array takes instant O(1) lookups, mapping to <b>O(Q) Time</b> for all queries. The total space complexity requires <b>O(N)</b> to store the newly rotated array. Pure math wizardry!",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def circularArrayRotation(a, k, queries):\n    k %= len(a)\n    r = a[-k:] + a[:-k]\n    return [r[i] for i in queries]</pre>",
        stepByStep: `<b>Input array:</b> [1, 2, 3], Rotations: <code>k = 2</code>, Queries: <code>[0, 1, 2]</code><br><br>
<b>Phase 1: Optimizing the Rotations</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>We use Modulo math:</i> <code>2 % 3 length = 2</code> effective rotations. 
</div>
<b>Phase 2: The Array Slice Magic</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Slice off the end:</i> Grab the last 2 elements: <code>a[-2:]</code> = ` + "`[2, 3]`" + `<br>
    <i>Slice off the rest:</i> Grab everything else: <code>a[:-2]</code> = ` + "`[1]`" + `<br>
    <i>Glue them together:</i> <code>[2, 3] + [1] = [2, 3, 1]</code>! The array is fully rotated.
</div>
<b>Phase 3: Answering the Queries</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Query 0:</i> What is at index 0? <b>2</b><br>
    <i>Query 1:</i> What is at index 1? <b>3</b><br>
    <i>Query 2:</i> What is at index 2? <b>1</b><br>
    <b>Final output returned is: [2, 3, 1]</b>!
</div>`
    },
    {
        id: "climbing-leaderboard",
        title: "Climbing the Leaderboard<br><a href='https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "Imagine you are playing an arcade game and you want to know your rank on the global leaderboard after every single game you play! The arcade uses 'Dense Ranking', which means ties are treated fairly. If the top scores are 100, 90, 90, and 80, the person with 100 is in 1st place, *both* people with 90 are in 2nd place, and the person with 80 is in 3rd place!<br><br>You are given a list of all the high scores currently on the board, and a list of your own scores from the games you played today (in the order you played them, getting better every game). Your job is to print out what your exact rank was after *each* game you finished.",
        solution: "First, we clean up the arcade's leaderboard! Since ties share the same rank, we don't care about duplicate scores. We shrink the leaderboard down to only the unique scores, sorted from highest to lowest. If the unique scores are `[100, 90, 80]`, then 100 is Rank 1, 90 is Rank 2, and 80 is Rank 3!<br><br>Now, we could just check your score against the whole leaderboard every single time you play, but that is way too slow! Since your scores are *getting better* every game (ascending), we use a clever 'Two Pointer' trick. We start a pointer at the very *bottom* of the unique leaderboard. As you play games and your score increases, we just march the pointer *up* the leaderboard until we find a score bigger than yours. Your rank is exactly one spot below that pointer! Because we just keep marching up and never reset to the bottom, it's incredibly fast.",
        optimality: "This Two Pointer approach is brilliantly optimal, achieving <b>O(N + M) Time</b> (where N is the leaderboard size and M is the number of games you played). Stripping the duplicates takes O(N), and since our pointer only ever moves upwards across the board and never restarts, we only examine the leaderboard once total across all your games! The space complexity is <b>O(N)</b> to store the cleaned-up unique leaderboard.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def climbingLeaderboard(ranked, player):\n    unique_ranked = sorted(list(set(ranked)), reverse=True)\n    results = []\n    i = len(unique_ranked) - 1\n    \n    for score in player:\n        while i >= 0 and score >= unique_ranked[i]:\n            i -= 1\n        \n        if i < 0:\n            results.append(1)\n        else:\n            results.append(i + 2)\n            \n    return results</pre>",
        stepByStep: `<b>Leaderboard:</b> [100, 100, 50, 40, 40, 20]<br>
<b>Your Scores:</b> [5, 25, 50, 120]<br><br>
<b>Phase 1: Clean the Leaderboard</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Unique Scores:</i> <code>[100, 50, 40, 20]</code><br>
    <i>Ranks:</i> 100 is Rank 1. 50 is Rank 2. 40 is Rank 3. 20 is Rank 4.
</div>
<b>Phase 2: Climbing the Ladder!</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Game 1 (Score 5):</i> Pointer starts at bottom (20). 5 is not bigger than 20. Pointer stops. Rank is <b>6</b>.<br>
    <i>Game 2 (Score 25):</i> 25 is bigger than 20! Pointer moves up to 40. 25 is not bigger than 40. Pointer stops. Rank is <b>4</b>.<br>
    <i>Game 3 (Score 50):</i> 50 is bigger than 40! Pointer moves up to 50. 50 is equal to 50! Pointer moves past it to 100. Pointer stops. Rank is <b>2</b>.<br>
    <i>Game 4 (Score 120):</i> 120 is bigger than 100! Pointer moves up and falls off the top of the board! Rank is <b>1</b>!
</div>
<b>Final Printed Ranks:</b> 6, 4, 2, 1.`
    },
    {
        id: "compare-the-triplets",
        title: "Compare the Triplets<br><a href='https://www.hackerrank.com/challenges/compare-the-triplets/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "Alice and Bob each created a coding challenge, and a reviewer gave their challenges a rating from 1 to 100 in three distinct categories: Problem Clarity, Originality, and Difficulty. You are given Alice's three scores `[A1, A2, A3]` and Bob's three scores `[B1, B2, B3]`.<br><br>Your task is to find their total comparison points by comparing their scores category by category:<br>1. If Alice's score is higher, Alice gets 1 point.<br>2. If Bob's score is higher, Bob gets 1 point.<br>3. If they tied, neither gets a point.<br><br>You must calculate and return their final scores side-by-side as a single output array!",
        solution: "This is a classic 'zip and compare' problem! We create a little scoreboard with Alice's Points = 0 and Bob's Points = 0. Then, we line their scores up side-by-side (zipping them) so we can look at Category 1 together, then Category 2, and finally Category 3.<br><br>For each category, we just use a basic `if` statement: Is Alice's number strictly bigger? Give her a point. Else, is Bob's strictly bigger? Give him a point. We completely ignore ties. At the very end, we bundle their total tallies into a list and return it!",
        optimality: "This is as straightforward and optimal as algorithms get! Since we only ever look at 3 categories, the algorithm runs in <b>O(1) Time</b> (or O(N) if the list sizes were allowed to grow indefinitely, but they are locked to exactly 3). We simply loop exactly 3 times and do constant math. The auxiliary memory footprint is exactly <b>O(1) Space</b> because we are just maintaining two integer tally variables!",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>from itertools import zip_longest\n\ndef compareLists(list_a, list_b):\n    score_a = 0\n    score_b = 0\n\n    for val_a, val_b in zip_longest(list_a, list_b, fillvalue=0):\n        if val_a > val_b:\n            score_a += 1\n        elif val_b > val_a:\n            score_b += 1\n\n    return score_a, score_b</pre>",
        stepByStep: `<b>Alice's Scores:</b> [5, 6, 7]<br>
<b>Bob's Scores:</b> [3, 6, 10]<br><br>
<b>Category 1: Clarity</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Compare:</i> Alice (5) vs Bob (3).<br>
    <i>Result:</i> 5 > 3! Alice gets 1 point.<br>
    <i>Current Score:</i> Alice: 1, Bob: 0.
</div>
<b>Category 2: Originality</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Compare:</i> Alice (6) vs Bob (6).<br>
    <i>Result:</i> 6 == 6! It's a tie! Nobody gets a point.<br>
    <i>Current Score:</i> Alice: 1, Bob: 0.
</div>
<b>Category 3: Difficulty</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Compare:</i> Alice (7) vs Bob (10).<br>
    <i>Result:</i> 10 > 7! Bob gets 1 point.<br>
    <i>Current Score:</i> Alice: 1, Bob: 1.
</div>
<b>Final Output returned:</b> <code>[1, 1]</code>`
    },
    {
        id: "cut-the-sticks",
        title: "Cut the Sticks<br><a href='https://www.hackerrank.com/challenges/cut-the-sticks/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "You are given a pile of wooden sticks of different lengths. You are going to perform a series of cutting operations on them! In each operation, you must:<br>1. Look at all the sticks currently in the pile and find the absolute shortest one.<br>2. Note the length of that shortest stick (let's call it `x`).<br>3. Cut exactly `x` length off of every single stick in the pile.<br>4. Throw away any pieces of wood that are now length 0 or smaller.<br><br>Before each round of cutting begins, you must write down exactly how many sticks are still in the pile. You stop when all sticks have been completely destroyed!",
        solution: "If we simulate the cuts by looping through the array and literally subtracting numbers, our computer has to do way too much math. What if we just sort the pile of sticks from smallest to largest first?<br><br>If the sticks are sorted like `[2, 2, 4, 8]`, we immediately know we have 4 sticks. The smallest stick is simply the first one in the line (a `2`). If we cut a length of 2 off of everything, we know exactly what happens: all the *other* sticks that are also size 2 will be completely destroyed, and everything bigger than 2 will survive! <br><br>So, instead of doing subtraction, we just walk down the sorted line. Every time we encounter a stick that is strictly bigger than the one behind it, it means a new round of cutting just started! We simply take the total number of sticks we started with, and subtract exactly how many sticks we have walked past so far. This instantly tells us how many sticks survived the last cut!",
        optimality: "The sorting-based strategy leaps over brute-force simulation, capping out at <b>O(N log N) Time</b> strictly because we have to sort the array first. The actual 'cutting' logic operates in a blazing <b>O(N)</b> pass without any nested loops or inner subtractions. It requires <b>O(N) Space</b> to hold the returned list of counts. It's incredibly elegant and completely scales!",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def cutTheSticks(sticks):\n    if not sticks:\n        return []\n\n    sorted_sticks = sorted(sticks)\n    n = len(sorted_sticks)\n    cuts = [n]\n\n    for i in range(1, n):\n        if sorted_sticks[i] != sorted_sticks[i - 1]:\n            cuts.append(n - i)\n\n    return cuts</pre>",
        stepByStep: `<b>Input Sticks:</b> [5, 4, 4, 2, 2, 8]<br>
<b>Phase 1: Sort the Sticks!</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Sorted Array:</i> <code>[2, 2, 4, 4, 5, 8]</code><br>
    <i>Total Sticks:</i> 6. We immediately write down <b>6</b> for the first round.<br>
</div>
<b>Phase 2: Walk the Line</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Index 1 (Stick length 2):</i> Is it bigger than the stick before it (2)? No. Keep walking.<br>
    <i>Index 2 (Stick length 4):</i> Is it bigger than the stick before it (2)? <b>YES!</b> This means a cut happened and all 2s died. How many survived? The total (6) minus the ones we walked past (2). We write down <b>4</b>.<br>
    <i>Index 3 (Stick length 4):</i> Is it bigger than the previous (4)? No. Keep walking.<br>
    <i>Index 4 (Stick length 5):</i> Is it bigger than the previous (4)? <b>YES!</b> A cut happened, killing the 4s. Total (6) minus passed (4). We write down <b>2</b>.<br>
    <i>Index 5 (Stick length 8):</i> Is it bigger than the previous (5)? <b>YES!</b> A cut happened, killing the 5s. Total (6) minus passed (5). We write down <b>1</b>.<br>
</div>
<b>Final Printed List:</b> 6, 4, 2, 1.`
    },
    {
        id: "divisible-sum-pairs",
        title: "Divisible Sum Pairs<br><a href='https://www.hackerrank.com/challenges/divisible-sum-pairs/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "You are given a list of random numbers and a magic divisor number called `k`. Your task is to pick out exactly two numbers from the list so that when you add them together, their sum can be perfectly divided by `k` (meaning there is no remainder).<br><br>For example, if your list is `[1, 2, 3, 4, 5, 6]` and `k = 5`, picking `1` and `4` is a winning pair because 1 + 4 = 5, and 5 divides cleanly into 5. Picking `2` and `3` is also a winning pair! Oh, and order matters, so `(1, 4)` is the same as `(4, 1)`. How many winning pairs can you find?",
        solution: "The slow way is a nested loop: checking every number against every other number. The genius way is using **Buckets of Remainders**!<br><br>Think about math trickery. If two numbers add up to a multiple of `k`, it is absolutely guaranteed that their *remainders* (when divided by `k`) also add up perfectly to `k`!<br>For example, if `k = 5`. The number 14 has a remainder of 4. What does it need to hit a clean multiple of 5? It needs a number with a remainder of exactly 1 (like 6, or 11, or 21).<br><br>So we throw all our numbers into buckets based on what their remainder is when divided by `k`. Then, we just do combinations. We multiply the amount of things in Bucket 1 by the amount of things in Bucket 4 (because 1+4=5). We multiply Bucket 2 by Bucket 3. The only tricky case is Bucket 0 (numbers already perfectly divisible)—they can only uniquely pair with *other* numbers in Bucket 0! We tally all these bucket math combinations together to get the final count!",
        optimality: "By moving from checking loops to 'Bucket Math Combinations', we shred the time complexity from O(N²) down to an astonishing <b>O(N + K) Time</b>! We iterate over the list once to drop them in buckets O(N), and then we do some instant multiplication checking pairs of buckets up to half of K O(K). It requires exactly <b>O(K) Space</b> to store the frequency dictionary of remainders.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>from collections import Counter\n\ndef divisibleSumPairs(ar, k):\n    rbkt = [x % k for x in ar]\n    cnt = Counter(rbkt)\n\n    res = cnt[0] * (cnt[0] - 1) // 2\n\n    for i in range(1, (k // 2) + 1):\n        if i == k - i:\n            res += cnt[i] * (cnt[i] - 1) // 2\n        else:\n            res += cnt[i] * cnt[k - i]\n\n    return res</pre>",
        stepByStep: `<b>Input Array:</b> [1, 2, 3, 4, 5, 6], Magic Divisor <code>k = 5</code><br><br>
<b>Phase 1: Sorting into Remainder Buckets</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Bucket 0:</i> (5) -> Contains 1 number.<br>
    <i>Bucket 1:</i> (1, 6) -> Contains 2 numbers.<br>
    <i>Bucket 2:</i> (2) -> Contains 1 number.<br>
    <i>Bucket 3:</i> (3) -> Contains 1 number.<br>
    <i>Bucket 4:</i> (4) -> Contains 1 number.<br>
</div>
<b>Phase 2: Matchmaking!</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Match Bucket 0 with Itself:</i> We only have 1 number in here, so it can't pair with a partner. <code>Pairs = 0</code>.<br>
    <i>Match Bucket 1 with Bucket 4:</i> Bucket 1 has 2 items. Bucket 4 has 1 item. <code>2 x 1 = 2</code> pairs! (They are 1+4 and 6+4).<br>
    <i>Match Bucket 2 with Bucket 3:</i> Bucket 2 has 1 item. Bucket 3 has 1 item. <code>1 x 1 = 1</code> pair! (It is 2+3).<br>
</div>
<b>Final Answer!</b> <code>0 + 2 + 1</code> = <b>3 winning pairs!</b>`
    },
    {
        id: "equalize-the-array",
        title: "Equalize the Array<br><a href='https://www.hackerrank.com/challenges/equality-in-a-array/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "You are given a bucket of numbers, and your goal is to make every single number in the bucket exactly the same! <br><br>The only action you are allowed to take is 'deleting' a number from the bucket. What is the absolute minimum number of deletions you have to make to leave the bucket in a state where every remaining number matches perfectly?",
        solution: "To delete as few numbers as possible, we need to keep as many numbers as possible! This means we should figure out which number appears the *most* frequently in the bucket, decide that it is our 'target number', and just delete everything else!<br><br>To do this, we use Python's built-in `Counter` superpower. It instantly builds a tally chart telling us exactly how many times each number appears. We just ask the chart: 'Which number has the highest tally?' Once we know the highest tally count, the math is easy: The total amount of numbers in the bucket *minus* the highest tally count gives us exactly how many numbers we are forced to delete!",
        optimality: "Using a Hash Map (like `Counter`) makes this solution incredibly fast, operating in <b>O(N) Time complexity</b> to build the frequency map in a single pass. Finding the max tally in the map takes O(U) time, where U is the amount of unique numbers, which is always less than or equal to N. The auxiliary space memory footprint is <b>O(U) Space</b> to store the tally chart. This is the flawlessly optimal way to solve it.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>from collections import Counter\n\ndef equalizeArray(arr):\n    if not arr: return 0\n    counts = Counter(arr)\n    return len(arr) - counts[max(counts, key=counts.get)]</pre>",
        stepByStep: `<b>Input Bucket:</b> [3, 3, 2, 1, 3]<br>
<b>Phase 1: Build the Tally Chart</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Count '3':</i> Appears 3 times.<br>
    <i>Count '2':</i> Appears 1 time.<br>
    <i>Count '1':</i> Appears 1 time.
</div>
<b>Phase 2: Find the Target and Subtract</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Ask the Chart:</i> What is the biggest tally? <b>3</b> (the number '3' is our chosen survivor).<br>
    <i>Do the Math:</i> Total numbers in the bucket (5) minus the ones we are saving (3). <code>5 - 3 = 2</code> deletions!<br>
    <i>Verify visually:</i> We keep the three \`3\`s, and we delete the \`2\` and the \`1\`. That took 2 deletions!<br>
</div>
<b>Final Printed Answer:</b> 2.`
    },
    {
        id: "migratory-birds",
        title: "Migratory Birds<br><a href='https://www.hackerrank.com/challenges/migratory-birds/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "You are a bird watcher! Every time a bird flies over your head, you write down its Type ID (which is a number from 1 to 5). After watching for a long time, you have a massive list of numbers.<br><br>Your job is to figure out which Bird Type you saw the *most* often! But there is a very important rule: If there is a tie (for example, you saw exactly 10 Hawks and exactly 10 Eagles), you must pick the bird with the **smallest Type ID number** as the winner.",
        solution: "Like many counting problems, the smartest way to track our bird sightings is by keeping a 'tally chart' in a dictionary! We loop through our sightings list exactly one time. If we see a Type 3 bird, we add a tally to the 'Type 3' bucket. <br><br>Once we finish our entire list, we look at our tally chart and find out what the highest count was (say, 10 sightings). Then, we use a cool Python list comprehension to gather up *all* the Bird Type IDs that managed to score exactly 10 sightings. Since it could be a tie, this might return a list like `[Type 4, Type 2]`. Finally, we just use the `min()` function on that list to guarantee we return the smallest Type ID!",
        optimality: "This is a flawless <b>O(N) Time complexity</b> solution. We only look at the massive list of bird sightings one time to build the tally chart. After that, we only look at the 5 distinct bird types to find the maximums and minimums, which takes instant constant time. Since there are strictly only 5 types of birds, the memory is locked to a tiny dictionary, resulting in an unbeatable <b>O(1) Space complexity</b>!",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def migratoryBirds(arr):\n    ar_dit = {}\n    for i in arr:\n        if i in ar_dit:\n            ar_dit[i] += 1\n        else:\n            ar_dit[i] = 1\n    mc = max(ar_dit.values())\n    return min([x for x, c in ar_dit.items() if c == mc])</pre>",
        stepByStep: `<b>Input Sightings:</b> [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]<br>
<b>Phase 1: Build the Tally Chart</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Type 1:</i> 2 sightings.<br>
    <i>Type 2:</i> 2 sightings.<br>
    <i>Type 3:</i> 3 sightings.<br>
    <i>Type 4:</i> 3 sightings.<br>
    <i>Type 5:</i> 1 sighting.
</div>
<b>Phase 2: Find the Maximum</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Ask the Chart:</i> What was the highest number of sightings? <b>3</b>.
</div>
<b>Phase 3: Tie-breaker!</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Gather the winners:</i> Which birds scored exactly 3? Both <b>Type 3</b> and <b>Type 4</b>!<br>
    <i>The Rule:</i> We must pick the smallest ID. <code>min([3, 4])</code> is <b>3</b>.
</div>
<b>Final Printed Answer:</b> 3.`
    },
    {
        id: "picking-numbers",
        title: "Picking Numbers<br><a href='https://www.hackerrank.com/challenges/picking-numbers/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "You are given a big array of numbers, and your task is to play a 'picking' game. You want to pick out as many numbers as possible to form a brand new group. But there is a strict rule: **No two numbers in your new group can have a difference greater than 1!**<br><br>This means your new group can only contain identical numbers, or numbers that are exactly 1 step apart (like a mix of 4s and 5s). You can't have 4s, 5s, AND 6s, because 6 - 4 = 2, which breaks the rule! What is the record for the maximum amount of numbers you can pick that perfectly obey this rule?",
        solution: "Instead of trying to pull combinations of numbers out of the array, we can solve this with a genius counting trick! We know the rule stringently limits us to two adjacent numbers (like 4s and 5s). We also know from the problem constraints that the numbers will never be bigger than 100.<br><br>So, we instantly create an array of 101 empty buckets! We loop through our numbers one time and drop them into their matching buckets. If we see a 4, we drop a tally in Bucket 4!<br><br>Once all the tallies are placed, finding the biggest group is incredibly easy! We just slide a two-bucket window across our buckets. We look at Bucket 1 + Bucket 2. Then Bucket 2 + Bucket 3. Then Bucket 3 + Bucket 4! The absolute highest combined total of any two adjacent buckets is mathematically guaranteed to be our answer!",
        optimality: "This 'Frequency Array' trick is a legendary optimization technique! It completely destroys sorting or nested loops, resolving the problem in brutal <b>O(N) Time complexity</b> to tally up the numbers, followed by an instant O(K) pass over the 100 buckets. Because the max number size is completely locked to 100 by the problem rules, the memory requirement is a staggeringly tiny <b>O(1) Space</b> to hold precisely 101 integer tallies!",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def pickingNumbers(a):\n    frequency = [0] * 101\n    for x in a:\n        frequency[x] += 1\n    \n    max_count = 0\n    for i in range(1, 101):\n        max_count = max(max_count, frequency[i] + frequency[i - 1])\n        \n    return max_count</pre>",
        stepByStep: `<b>Input Array:</b> [4, 6, 5, 3, 3, 1]<br>
<b>Phase 1: Fill the 100 Buckets!</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Bucket 1:</i> 1 item.<br>
    <i>Bucket 2:</i> 0 items.<br>
    <i>Bucket 3:</i> 2 items.<br>
    <i>Bucket 4:</i> 1 item.<br>
    <i>Bucket 5:</i> 1 item.<br>
    <i>Bucket 6:</i> 1 item.
</div>
<b>Phase 2: Slide the Two-Bucket Window!</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Mix 1s and 2s:</i> 1 + 0 = 1.<br>
    <i>Mix 2s and 3s:</i> 0 + 2 = 2.<br>
    <i>Mix 3s and 4s:</i> 2 + 1 = <b>3</b>. (This is a group of two 3s and one 4. They obey the rule!)<br>
    <i>Mix 4s and 5s:</i> 1 + 1 = 2.<br>
    <i>Mix 5s and 6s:</i> 1 + 1 = 2.
</div>
<b>Final Printed Answer:</b> The highest adjacent sum we found was <b>3</b>.`
    },
    {
        id: "plus-minus",
        title: "Plus Minus<br><a href='https://www.hackerrank.com/challenges/plus-minus/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "Imagine you have a bag of numbers containing positive integers, negative integers, and zeros. Your task is to reach into the bag and find out exactly what proportion of the numbers fall into each of these three categories!<br><br>For example, if you have 6 numbers and 3 of them are positive, the 'positive ratio' is 3 out of 6, or 0.500000. You need to calculate the ratios for all three types (Positives, Negatives, and Zeros) and print them out clearly.",
        solution: "To solve this, we just need to do a single sweep through our list of numbers! We keep three separate counters (like three tally marks) in our head: one for positives, one for negatives, and one for zeros. <br><br>As we look at each number, we check its sign and add 1 to the correct tally. Once we've looked at every single number, we simply divide each total tally by the total number of items we counted. The magic is in the formatting—we make sure to display the answer with exactly 6 decimal places to satisfy the picky math requirements!",
        optimality: "This is the most efficient way possible to solve the problem, running in <b>O(N) Time complexity</b>. Since we have to look at every number at least once to know its sign, we can't go faster than O(N). We also use <b>O(1) Space</b> because we only ever keep three small counter variables, regardless of whether the bag has 10 numbers or 10 million numbers!",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def plusMinus(arr):\n    n = len(arr)\n    positive = 0\n    negative = 0\n    zero = 0\n    \n    for x in arr:\n        if x > 0:\n            positive += 1\n        elif x < 0:\n            negative += 1\n        else:\n            zero += 1\n            \n    print(f\"{positive/n:.6f}\")\n    print(f\"{negative/n:.6f}\")\n    print(f\"{zero/n:.6f}\")</pre>",
        stepByStep: `<b>Input Array:</b> [-4, 3, -9, 0, 4, 1] (Total 6 numbers)<br><br>
<b>Phase 1: Tallying the Numbers</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Check -4:</i> Negative! (Neg: 1, Pos: 0, Zero: 0)<br>
    <i>Check 3:</i> Positive! (Neg: 1, Pos: 1, Zero: 0)<br>
    <i>Check -9:</i> Negative! (Neg: 2, Pos: 1, Zero: 0)<br>
    <i>Check 0:</i> Zero! (Neg: 2, Pos: 1, Zero: 1)<br>
    <i>Check 4:</i> Positive! (Neg: 2, Pos: 2, Zero: 1)<br>
    <i>Check 1:</i> Positive! (Neg: 2, Pos: 3, Zero: 1)
</div>
<b>Phase 2: Calculating Ratios</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Positive Ratio:</i> 3 / 6 = <b>0.500000</b><br>
    <i>Negative Ratio:</i> 2 / 6 = <b>0.333333</b><br>
    <i>Zero Ratio:</i> 1 / 6 = <b>0.166667</b>
</div>
<b>Final Result:</b> Each ratio is printed on its own line.`
    },
    {
        id: "simple-array-sum",
        title: "Simple Array Sum<br><a href='https://www.hackerrank.com/challenges/simple-array-sum/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "Imagine you have a list of numbers—maybe they are receipts, scores, or measurements—and you simply want to know the grand total. Your task is to add every single number in the list together to find the final sum!",
        solution: "To find the sum, we use a simple 'accumulator' strategy. We start with a total of 0. Then, we walk through the list one by one, picking up each number and adding it to our running total. By the time we reach the end of the list, our accumulator holds the sum of every number we encountered!",
        optimality: "This is the perfectly optimal way to sum a list, running in <b>O(N) Time complexity</b>. Because we must visit every number at least once to know its value, we cannot mathematically solve this faster than O(N). It uses <b>O(1) Space</b> because we only need one variable to store the running total, no matter how many millions of numbers are in the list.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def simpleArraySum(ar):\n    total = 0\n    for x in ar:\n        total += x\n    return total</pre>",
        stepByStep: `<b>Input Array:</b> [1, 2, 3, 4, 10, 11]<br><br>
<b>Walking through the list:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Start:</i> Total = 0<br>
    <i>Add 1:</i> Total = 1<br>
    <i>Add 2:</i> Total = 3<br>
    <i>Add 3:</i> Total = 6<br>
    <i>Add 4:</i> Total = 10<br>
    <i>Add 10:</i> Total = 20<br>
    <i>Add 11:</i> Total = 31
</div>
<b>Final Answer:</b> 31`
    },
    {
        id: "sock-merchant",
        title: "Sales by Match<br><a href='https://www.hackerrank.com/challenges/sock-merchant/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Arrays",
        problem: "Imagine you are doing laundry and you have a giant pile of socks of various colors. Your goal is to find all the matching pairs! <br><br>Each sock has a color ID number. For every two socks that have the same color ID, you have found one matching pair. How many total matching pairs can you pull out of the pile?",
        solution: "To solve this like a human would, we walk through the pile and pick up socks one at a time. We keep a 'waiting table' (a **Set**) where we put socks that are currently single. <br><br>When we pick up a new sock, we check the table: 'Do I already have a sock of this color waiting?' If yes, we've found a pair! We increment our tally and remove the partner from the table. If no, we simply place the new sock on the table to wait for its match. By the time the pile is empty, we know exactly how many pairs we found!",
        optimality: "This 'Single Pass Matcher' strategy is perfectly efficient, operating in <b>O(N) Time complexity</b> because we only look at each sock exactly once. It uses <b>O(N) Space</b> in the worst case (if every single sock in the pile is a different color), though in reality, the space used is only as large as the number of unique colors currently waiting for a match.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def sockMerchant(ar):\n    unpaired_socks = set()\n    pairs = 0\n\n    for color in ar:\n        if color in unpaired_socks:\n            pairs += 1\n            unpaired_socks.discard(color)\n        else:\n            unpaired_socks.add(color)\n            \n    return pairs</pre>",
        stepByStep: `<b>Input Pile:</b> [10, 20, 20, 10, 10, 30, 50, 10, 20]<br><br>
<b>Sorting the Pile:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Pick 10:</i> No partner on table. Table: {10}. Pairs: 0<br>
    <i>Pick 20:</i> No partner on table. Table: {10, 20}. Pairs: 0<br>
    <i>Pick 20:</i> Found a Match! Remove 20 from table. Table: {10}. <b>Pairs: 1</b><br>
    <i>Pick 10:</i> Found a Match! Remove 10 from table. Table: {}. <b>Pairs: 2</b><br>
    <i>Pick 10:</i> No partner on table. Table: {10}. Pairs: 2<br>
    <i>Pick 30:</i> No partner on table. Table: {10, 30}. Pairs: 2<br>
    <i>Pick 50:</i> No partner on table. Table: {10, 30, 50}. Pairs: 2<br>
    <i>Pick 10:</i> Found a Match! Remove 10 from table. Table: {30, 50}. <b>Pairs: 3</b><br>
    <i>Pick 20:</i> No partner on table. Table: {30, 50, 20}. Pairs: 3
</div>
<b>Final Answer:</b> 3 pairs found!`
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
        problem: "Imagine you are adding up numbers so huge that they would break a normal calculator! In some programming languages, when a number gets too big, it 'overflows' and turns into a strange negative number. Your task is to sum a list of these massive integers correctly.",
        solution: "While this is a tricky problem in languages like C++ or Java (where you have to use special '64-bit' storage types), Python is like a wizard! It handles numbers of any size automatically without any extra work. <br><br>We simply use a standard 'accumulator' loop. We start at 0 and add each massive number one by one. Python's memory expands dynamically to make sure the total is always accurate, no matter how many billions or trillions it reaches!",
        optimality: "This solution is perfectly optimal with <b>O(N) Time complexity</b>, as we must touch every number once to include it in the sum. It uses <b>O(1) Space</b> for the accumulator variable (though the variable itself grows slightly in memory as the number increases, it's still considered constant logic space).",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def aVeryBigSum(ar):\n    total_sum = 0\n    for number in ar:\n        total_sum += number\n    return total_sum</pre>",
        stepByStep: `<b>Input Array:</b> [1000000001, 1000000002, 1000000003]<br><br>
<b>The Wizardry of Big Integers:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Start:</i> Total = 0<br>
    <i>Add 1,000,000,001:</i> Total = 1,000,000,001<br>
    <i>Add 1,000,000,002:</i> Total = 2,000,000,003<br>
    <i>Add 1,000,000,003:</i> Total = 3,000,000,006
</div>
<b>Final Result:</b> 3000000006`
    },
    {
        id: "beautiful-days",
        title: "Beautiful Days at the Movies<br><a href='https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "Imagine you are planning a trip to the movies, but you only want to go on 'Beautiful Days'. A day is considered beautiful if the difference between the day number and its reverse is perfectly divisible by your magic number `k`. <br><br>For example, if today is Day 20 and your magic number is 6, is it beautiful? The reverse of 20 is 02. The difference is `20 - 2 = 18`. Since 18 is divisible by 6, today is a Beautiful Day! How many such days exist in a given range?",
        solution: "To find all beautiful days, we simply walk through every day in the range one by one. For each day, we calculate its reverse by turning the number into a string, flipping it, and turning it back into a number. <br><br>Once we have the reversed number, we subtract it from the original day number and take the absolute value. If that result divided by `k` has a remainder of zero, we add 1 to our 'Beautiful Day' tally!",
        optimality: "This 'Range Scanner' approach is optimal, running in <b>O(N * D) Time complexity</b>, where N is the number of days in the range and D is the number of digits in the day number (since we have to reverse the digits). Since we must check every individual day to see if it's beautiful, we cannot do it faster. It uses <b>O(1) Space</b> because we only keep a single tally variable.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def beautifulDays(start, end, k):\n    beautiful_count = 0\n    for day in range(start, end + 1):\n        reversed_day = int(str(day)[::-1])\n        if abs(day - reversed_day) % k == 0:\n            beautiful_count += 1\n    return beautiful_count</pre>",
        stepByStep: `<b>Input Range:</b> [20, 23], Magic Number <code>k = 6</code><br><br>
<b>Checking the Calendar:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Day 20:</i> Reverse is 02. |20 - 2| = 18. 18 % 6 == 0. <b>Beautiful!</b> (Tally: 1)<br>
    <i>Day 21:</i> Reverse is 12. |21 - 12| = 9. 9 % 6 != 0. Not beautiful.<br>
    <i>Day 22:</i> Reverse is 22. |22 - 22| = 0. 0 % 6 == 0. <b>Beautiful!</b> (Tally: 2)<br>
    <i>Day 23:</i> Reverse is 32. |23 - 32| = 9. 9 % 6 != 0. Not beautiful.
</div>
<b>Final Result:</b> 2 Beautiful Days found!`
    },
    {
        id: "cat-and-mouse",
        title: "Cats and a Mouse<br><a href='https://www.hackerrank.com/challenges/cats-and-a-mouse/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "Two cats (Cat A and Cat B) are at different positions on a line, and a mouse (Mouse C) is also sitting somewhere on that same line. Both cats want to catch the mouse! They move at the exact same speed. If one cat is closer to the mouse, it will catch it first. If they are exactly the same distance away, they will start fighting, and the mouse will escape! Who wins?",
        solution: "To find the winner, we just need a simple ruler! We calculate the absolute distance from Cat A to the Mouse, and then the absolute distance from Cat B to the Mouse. <br><br>We compare the two distances: if Cat A's distance is smaller, Cat A wins. If Cat B's distance is smaller, Cat B wins. If they are identical, the 'Mouse C' escapes while the cats fight!",
        optimality: "This 'Distance Duel' logic is perfectly optimal, operating in <b>O(1) Time complexity</b> per query. Since we only do two subtractions and one comparison, it is as fast as a computer can possibly be. It uses <b>O(1) Space</b> because we only store two small distance numbers.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def catAndMouse(x, y, z):\n    dist_a = abs(x - z)\n    dist_b = abs(y - z)\n    \n    if dist_a < dist_b:\n        return \"Cat A\"\n    elif dist_b < dist_a:\n        return \"Cat B\"\n    else:\n        return \"Mouse C\"</pre>",
        stepByStep: `<b>Input:</b> Cat A at 1, Cat B at 2, Mouse C at 3<br><br>
<b>Calculating the Chase:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Cat A distance:</i> |1 - 3| = <b>2</b><br>
    <i>Cat B distance:</i> |2 - 3| = <b>1</b><br>
    <i>Comparison:</i> 1 is smaller than 2.
</div>
<b>Final Result:</b> Cat B reaches the mouse first!`
    },
    {
        id: "chocolate-feast",
        title: "Chocolate Feast<br><a href='https://www.hackerrank.com/challenges/chocolate-feast/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "Imagine you have a few dollars in your pocket and you hit the candy store! You buy as many chocolates as you can afford. But there's a bonus: the shop has a special 'Wrapper Recycling' deal! If you bring back a certain number of empty wrappers, they'll give you a brand-new chocolate for free! And yes, that free chocolate comes with a wrapper you can recycle too! How many chocolates can you eat in total?",
        solution: "We solve this by simulating the entire feast! First, we spend our initial cash `n` to buy as many chocolates as the cost `c` allows. We count these toward our total and keep all the wrappers. Then, we start a loop: as long as we have enough wrappers `m` to get a freebie, we trade them in! Every time we get free chocolates, we add them to our total and collect their shiny new wrappers to add to whatever leftovers we had. We keep recycling until we're left with fewer wrappers than the shop requires.",
        optimality: "This 'Simulated Recycling' approach is highly efficient, running in <b>O(log(N)) Time complexity</b>. Because the number of wrappers decreases significantly with each trade-in cycle, the loop finishes almost instantly even for large amounts of money. It uses <b>O(1) Space</b> because we only need to keep track of a few integer variables.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def chocolateFeast(n, c, m):\n    chocolates = n // c\n    wrappers = chocolates\n    total_eaten = chocolates\n    \n    while wrappers >= m:\n        new_chocolates = wrappers // m\n        total_eaten += new_chocolates\n        wrappers = (wrappers % m) + new_chocolates\n        \n    return total_eaten</pre>",
        stepByStep: `<b>Input:</b> $10, Chocolate Cost: $2, Exchange Rate: 5 wrappers<br><br>
<b>The Feast Begins:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> Spend $10 to buy 5 chocolates. (Total Eaten: 5, Wrappers: 5)<br>
    <i>Step 2:</i> Trade 5 wrappers for 1 free chocolate. (Total Eaten: 6, Wrappers: 1)<br>
    <i>Step 3:</i> Only 1 wrapper left. Can't trade for more.
</div>
<b>Final Result:</b> You ate a total of 6 chocolates!`
    },
    {
        id: "day-of-programmer",
        title: "Day of the Programmer<br><a href='https://www.hackerrank.com/challenges/day-of-the-programmer/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "Russia has a very interesting calendar history! Between 1700 and 2700, they used the Julian calendar, then switched to the Gregorian calendar in 1918. Your task is to find the exact date (in dd.mm.yyyy format) of the 256th day of any given year. Beware: the leap year rules changed during the switch, and 1918 was a very short year because they skipped 13 days in February!",
        solution: "We solve this by checking which historical period the year falls into! <br>1. **Before 1918 (Julian):** Leap years are simply any year divisible by 4. <br>2. **After 1918 (Gregorian):** We use standard leap year rules (divisible by 400, or by 4 but not 100). <br>3. **The Year 1918:** This was the transition year. Since they jumped from January 31st directly to February 14th, the 256th day is always September 26th.<br><br>For all other years, the 256th day is either September 12th (leap year) or September 13th (normal year).",
        optimality: "This is a flawlessly optimal <b>O(1) Time complexity</b> solution. We only perform a few basic math operations and 'if' checks to determine the date. It uses <b>O(1) Space</b> because we don't store any data, just a single return string.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def dayOfProgrammer(y):\n    if y == 1918:\n        return '26.09.1918'\n    \n    if y < 1918:\n        is_leap = (y % 4 == 0)\n    else:\n        is_leap = (y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)\n            \n    day = \"12\" if is_leap else \"13\"\n    return f\"{day}.09.{y}\"</pre>",
        stepByStep: `<b>Input Year:</b> 2017 (Gregorian)<br><br>
<b>Calculating the Date:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> Check year 2017. It is after 1918.<br>
    <i>Step 2:</i> Rule: Is 2017 divisible by 400? No. By 4? No. <br>
    <i>Step 3:</i> It is a <b>Normal Year</b>.<br>
    <i>Step 4:</i> In a normal year, the 256th day is <b>September 13th</b>.
</div>
<b>Final Result:</b> 13.09.2017`
    },
    {
        id: "extra-long-factorials",
        title: "Extra Long Factorials<br><a href='https://www.hackerrank.com/challenges/extra-long-factorials/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "In many programming languages, calculating the factorial of a large number (like 25!) is impossible because the result is so huge it 'overflows' 64-bit memory. Your task is to calculate the factorial for numbers up to 100, which results in a massive number with over 150 digits!",
        solution: "This is another problem where Python's built-in 'BigInt' capabilities make us look like geniuses! We calculate the factorial using a simple recursive approach: $n! = n \times (n-1)!$. <br><br>While a language like C++ would require complex array-based math to store such a large number, Python's integers grow automatically to accommodate as many digits as needed. We just multiply the numbers down to 1 and let Python handle the massive storage behind the scenes.",
        optimality: "This recursive approach is optimal for readability and logic, running in <b>O(N²) Time complexity</b> (where N is the number, because each of the N multiplications involves numbers with $O(N)$ digits). It uses <b>O(N) Space</b> on the call stack due to recursion. For values up to 100, this completes in a split second.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def extraLongFactorials(n):\n    if n == 1:\n        return 1\n    return n * extraLongFactorials(n - 1)</pre>",
        stepByStep: `<b>Input:</b> n = 5<br><br>
<b>The Recursive Chain:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> 5 * factorial(4)<br>
    <i>Step 2:</i> 5 * (4 * factorial(3))<br>
    <i>Step 3:</i> 5 * (4 * (3 * factorial(2)))<br>
    <i>Step 4:</i> 5 * (4 * (3 * (2 * factorial(1))))<br>
    <i>Step 5:</i> 5 * 4 * 3 * 2 * 1 = <b>120</b>
</div>
<b>Final Result:</b> 120 (Imagine this for 100!)`
    },
    {
        id: "find-digits",
        title: "Find Digits<br><a href='https://www.hackerrank.com/challenges/find-digits/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "You are given a number and you need to look at each of its digits one by one. Your goal is to see how many of those digits are 'friendly' to the original number—meaning the original number can be divided by that digit without any remainder. (Remember: zero can't divide anything, so we ignore it!)",
        solution: "To solve this, we first turn the number into a string of characters so we can easily visit each digit individually. For every digit we see, we convert it back into a small number and check two things: <br>1. Is it greater than zero? <br>2. Does the original number divided by this digit leave a remainder of 0? <br><br>If both are true, we give that digit a 'point' in our counter!",
        optimality: "This 'Digit Inspector' approach is perfectly optimal with <b>O(D) Time complexity</b>, where D is the number of digits in the input. Since we must look at every digit at least once, we can't do it any faster! It uses <b>O(D) Space</b> to store the string version of the number while we inspect it.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def findDigits(n):\n    n_str = str(n)\n    count = 0\n    \n    for char in n_str:\n        digit = int(char)\n        if digit != 0 and n % digit == 0:\n            count += 1\n    return count</pre>",
        stepByStep: `<b>Input Number:</b> 124<br><br>
<b>Inspecting the Digits:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Digit 1:</i> 124 % 1 == 0. <b>Yes!</b> (Count: 1)<br>
    <i>Digit 2:</i> 124 % 2 == 0. <b>Yes!</b> (Count: 2)<br>
    <i>Digit 3:</i> 124 % 4 == 0. <b>Yes!</b> (Count: 3)
</div>
<b>Final Result:</b> 3 digits are divisors of 124.`
    },
    {
        id: "get-total-x",
        title: "Between Two Sets<br><a href='https://www.hackerrank.com/challenges/between-two-sets/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "You are given two sets of numbers, Group A and Group B. You need to find all the numbers that act as a 'bridge' between them. To be a bridge, a number must satisfy two rules: <br>1. Every number in Group A must be able to divide into it perfectly. <br>2. It must be able to divide into every number in Group B perfectly.",
        solution: "To find these bridges, we use two powerful math tools: <b>LCM</b> (Least Common Multiple) and <b>GCD</b> (Greatest Common Divisor). <br><br>First, we find the LCM of Group A. This is the smallest number that everyone in Group A can divide into. Any 'bridge' must be a multiple of this LCM. <br>Second, we find the GCD of Group B. This is the largest number that divides into everyone in Group B. Any 'bridge' must be a divisor of this GCD. <br><br>Finally, we just look at the multiples of our LCM (LCM, 2*LCM, 3*LCM...) and see which ones divide perfectly into our GCD!",
        optimality: "This 'Math Identity' approach is extremely efficient, running in <b>O((N+M) log(max)) Time complexity</b>. Instead of checking every possible number, we jump straight to the candidates using LCM and GCD. It uses <b>O(1) Space</b> to store our results.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def getTotalX(a, b):\n    # Helper to find GCD/LCM... \n    L = LCM(a)\n    G = GCD(b)\n    \n    count = 0\n    multiple = L\n    while multiple <= G:\n        if G % multiple == 0:\n            count += 1\n        multiple += L\n    return count</pre>",
        stepByStep: `<b>Group A:</b> [2, 4], <b>Group B:</b> [16, 32, 96]<br><br>
<b>Building the Bridge:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> Find LCM of [2, 4]. Result is <b>4</b>.<br>
    <i>Step 2:</i> Find GCD of [16, 32, 96]. Result is <b>16</b>.<br>
    <i>Step 3:</i> Check multiples of 4 that divide 16:<br>
    &nbsp;&nbsp;• 4? Yes (16/4 = 4).<br>
    &nbsp;&nbsp;• 8? Yes (16/8 = 2).<br>
    &nbsp;&nbsp;• 12? No.<br>
    &nbsp;&nbsp;• 16? Yes (16/16 = 1).
</div>
<b>Final Result:</b> 3 bridge numbers found (4, 8, 16).`
    },
    {
        id: "grading-students",
        title: "Grading Students<br><a href='https://www.hackerrank.com/challenges/grading/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "Professor Sam at HackerLand University has a special way of rounding student grades. He wants every student to be happy, so if a grade is within 2 points of the next multiple of 5, he rounds it up! However, if a student is failing (grade below 38), he doesn't round at all because even a few points won't save them. Your task is to automate Sam's rounding logic.",
        solution: "We solve this by checking each grade one by one. First, we ignore any grade lower than 38. For the rest, we find out how far away they are from the next multiple of 5. <br><br>We use the <b>Modulo Operator (%)</b> to find the distance. If a grade is 73, `73 % 5` is 3. This means we are 2 points away from 75 ($5 - 3 = 2$). Since 2 is less than 3, we round up to 75! If the distance was 3 or more, we would leave the grade exactly as it is.",
        optimality: "This 'Conditional Rounding' approach is optimal, running in <b>O(N) Time complexity</b> because we visit each grade exactly once. It uses <b>O(1) Space</b> (beyond the input list) since we modify the grades in-place or store them in a simple resulting list.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def gradingStudents(grades):\n    for i in range(len(grades)):\n        if grades[i] < 38:\n            continue\n\n        remainder = grades[i] % 5\n        if remainder >= 3:\n            # Round up by adding the difference \n            grades[i] += (5 - remainder)\n            \n    return grades</pre>",
        stepByStep: `<b>Input Grades:</b> [73, 67, 38, 33]<br><br>
<b>Applying Sam's Logic:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Grade 73:</i> Next multiple is 75. Difference is 2. <b>Round to 75.</b><br>
    <i>Grade 67:</i> Next multiple is 70. Difference is 3. <b>Stay at 67.</b><br>
    <i>Grade 38:</i> Next multiple is 40. Difference is 2. <b>Round to 40.</b><br>
    <i>Grade 33:</i> Below 38. <b>Stay at 33.</b> (Failing)
</div>
<b>Final Result:</b> [75, 67, 40, 33]`
    },
    {
        id: "how-many-games",
        title: "Halloween Sale<br><a href='https://www.hackerrank.com/challenges/halloween-sale/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "You're getting ready for a massive Halloween sale! The first game you buy costs `p` dollars. For every game you buy after that, the price drops by `d` dollars until it hits a minimum price of `m` dollars. Every game bought after that stays at `m` dollars. If you have `s` dollars in your wallet, how many games can you walk away with?",
        solution: "We solve this by simulating a shopping spree! We start with our budget `s` and the current price `p`. As long as we can afford the current price ($s \\geq p$), we buy the game, subtract the price from our budget, and increase our count. Then, we calculate the price for the next game: it's either the current price minus `d` (using `max(m, p-d)`), or the minimum price `m`. We repeat this until we run out of money.",
        optimality: "This 'Greedy Shopping' approach is optimal, running in <b>O(S/M) Time complexity</b>. Since we only buy one game at a time and the price eventually stabilizes at a constant <code>m</code>, the number of iterations is directly proportional to how many games we can afford. It uses <b>O(1) Space</b> to store our count and current price tally.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def howManyGames(p, d, m, s):\n    count = 0\n    while s >= p:\n        s -= p\n        count += 1\n        p = max(m, p - d)\n    return count</pre>",
        stepByStep: `<b>Input:</b> Start $20, Discount $3, Min $6, Budget $80<br><br>
<b>Let's Go Shopping:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Game 1:</i> Cost $20. Budget left: $60. (Price drops to $17)<br>
    <i>Game 2:</i> Cost $17. Budget left: $43. (Price drops to $14)<br>
    <i>Game 3:</i> Cost $14. Budget left: $29. (Price drops to $11)<br>
    <i>Game 4:</i> Cost $11. Budget left: $18. (Price drops to $8)<br>
    <i>Game 5:</i> Cost $8. Budget left: $10. (Price drops to $6)<br>
    <i>Game 6:</i> Cost $6. Budget left: $4. (Price stays at $6)<br>
    <i>Game 7:</i> Can't afford $6! STOP.
</div>
<b>Final Result:</b> You bought 6 games!`
    },
    {
        id: "kangaroo",
        title: "Number Line Jumps<br><a href='https://www.hackerrank.com/challenges/kangaroo/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "Imagine two kangaroos on a number line, ready to jump! The first kangaroo starts at position $x1$ and jumps $v1$ meters at a time. The second starts further ahead at position $x2$ and jumps $v2$ meters at a time. They jump at the exact same moment. Will they ever land on the same spot at the same time?",
        solution: "To find out if they meet, we look at their speeds and the gap between them. <br><br>First, if the kangaroo starting behind ($x1$) isn't faster than the one in front ($v1 \\leq v2$), it will never catch up. <br>Second, if it is faster, they will only meet if the distance between them is perfectly 'eaten up' by the difference in their jump distances. We use the <b>Modulo Operator (%)</b> to check if the starting gap is perfectly divisible by the speed difference. If it is, they'll land on the same spot in a whole number of jumps!",
        optimality: "This 'Relative Speed' approach is perfectly optimal, running in <b>O(1) Time complexity</b>. Instead of simulating every single jump, we use one simple math equation to get the answer instantly. It uses <b>O(1) Space</b> as well.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def kangaroo(x1, v1, x2, v2):\n    # If the one behind is slower or same speed, no meeting\n    if v1 <= v2:\n        return 'NO'\n    \n    # Check if the gap is perfectly divisible by speed difference\n    if (x2 - x1) % (v1 - v2) == 0:\n        return 'YES'\n    \n    return 'NO'</pre>",
        stepByStep: `<b>Kangaroo 1:</b> Starts at 0, Jumps 3m<br>
<b>Kangaroo 2:</b> Starts at 4, Jumps 2m<br><br>
<b>The Race:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Initial Gap:</i> 4 meters (4 - 0)<br>
    <i>Speed Difference:</i> 1 meter/jump (3 - 2)<br>
    <i>Check:</i> Does 1 divide 4 perfectly? <b>Yes!</b> (4 % 1 == 0)<br>
    <i>Prediction:</i> They will meet in 4 jumps at position 12.
</div>
<b>Final Result:</b> YES!`
    },
    {
        id: "kaprekar-numbers",
        title: "Modified Kaprekar Numbers<br><a href='https://www.hackerrank.com/challenges/kaprekar-numbers/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "A Modified Kaprekar Number is a rare and special integer! If you take this number, square it, and then split that square into two parts (a left side and a right side), adding those two parts together brings you right back to your original number! The only catch is that the right side must have the same number of digits as the original number. Can you find all of them in a given range?",
        solution: "We solve this by trying every number in the range. For each number: <br>1. We measure how many digits it has ($d$). <br>2. We calculate its square. <br>3. We slice the square into two pieces: the right piece gets the last $d$ digits, and the left piece gets everything else. <br>4. We add them together. If the sum equals our original number, we found a Kaprekar Number!",
        optimality: "This 'Number Scanner' approach is optimal, running in <b>O(N * D) Time complexity</b> where N is the range size and D is the number of digits (since squaring and string-slicing depend on length). Since we have to check every individual number to see if it's special, we cannot go faster. It uses <b>O(N) Space</b> only to store our final list of winners.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def kaprekarNumbers(p, q):\n    results = []\n    for n in range(p, q + 1):\n        d = len(str(n))\n        square = n * n\n        \n        # Split square into two parts\n        s_str = str(square)\n        right = s_str[-d:] if s_str[-d:] else '0'\n        left = s_str[:-d] if s_str[:-d] else '0'\n        \n        if int(left) + int(right) == n:\n            results.append(n)\n    return results</pre>",
        stepByStep: `<b>Input Range:</b> [1, 50], Check Number: <b>45</b><br><br>
<b>The Kaprekar Test:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> 45 has <b>2</b> digits.<br>
    <i>Step 2:</i> 45 squared is <b>2025</b>.<br>
    <i>Step 3:</i> Split 2025 into two parts (right side gets 2 digits):<br>
    &nbsp;&nbsp;• Left: 20<br>
    &nbsp;&nbsp;• Right: 25<br>
    <i>Step 4:</i> Add them: 20 + 25 = <b>45</b>.
</div>
<b>Final Result:</b> 45 is a Kaprekar Number!`
    },
    {
        id: "library-fine",
        title: "Library Fine<br><a href='https://www.hackerrank.com/challenges/library-fine/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "You've returned a book to the library, but oh no—it might be overdue! The library has a strict 'Penalty Tier' system based on how late you are. If you return it in a different year, it's a huge flat fine. A different month? A monthly fine. Just a few days? A daily fine. On time? Zero fine! Can you calculate the exact damage to your wallet?",
        solution: "We solve this by comparing the 'Return Date' and the 'Due Date' starting from the most severe case to the least severe. <br>1. **Year Check:** If the return year is greater than the due year, the user pays a flat 10,000 fine. <br>2. **Month Check:** If the year is the same but the month is later, we multiply the number of months late by 500. <br>3. **Day Check:** If both year and month are the same but the day is later, we multiply the number of days late by 15. <br>4. **On-Time:** In any other case (return date is before or on the due date), the fine is 0.",
        optimality: "This 'Hierarchical Comparison' is perfectly optimal, running in <b>O(1) Time complexity</b>. It only performs a constant number of integer comparisons and basic arithmetic. It uses <b>O(1) Space</b> as well.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def libraryFine(d1, m1, y1, d2, m2, y2):\n    # Severe case: Different year\n    if y1 > y2:\n        return 10000\n\n    # Moderate case: Same year, different month\n    if y1 == y2 and m1 > m2:\n        return 500 * (m1 - m2)\n\n    # Minor case: Same month, different day\n    if y1 == y2 and m1 == m2 and d1 > d2:\n        return 15 * (d1 - d2)\n\n    return 0</pre>",
        stepByStep: `<b>Input:</b> Returned 9 June 2015, Due 6 June 2015<br><br>
<b>Calculating the Penalty:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Year Check:</i> 2015 == 2015. (Not a year late)<br>
    <i>Month Check:</i> June == June. (Not a month late)<br>
    <i>Day Check:</i> 9 > 6. User is <b>3 days late</b>.<br>
    <i>Calculation:</i> 3 days * 15 = 45.
</div>
<b>Final Result:</b> Your fine is 45.`
    },
    {
        id: "finding-the-percentage",
        title: "Finding the Percentage<br><a href='https://www.hackerrank.com/challenges/finding-the-percentage/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "You have a list of students and their marks in different subjects. You need to store all this data efficiently and then, when someone asks for a specific student, calculate their average marks and display them perfectly formatted to two decimal places (e.g., 80.00).",
        solution: "We use a <b>Dictionary (Hash Map)</b> to store the student data, where the student's name is the 'Key' and their list of marks is the 'Value'. This makes looking up a student near-instant! To calculate the average, we sum the marks for the requested student and divide by the total number of subjects. Finally, we use Python's <b>F-string formatting</b> (`:.2f`) to ensure the average always looks professional with exactly two decimal points.",
        optimality: "This 'Dictionary Lookup' approach is optimal, offering <b>O(1) Time complexity</b> for the student lookup and <b>O(K) Time</b> to calculate the average mark (where K is the number of subjects). It uses <b>O(N * K) Space</b> to store all student data in memory.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def marksCal(student_data, query_name):\n    # Lookup the student's marks list\n    marks = student_data[query_name]\n    \n    # Calculate average and format to 2 decimal places\n    average = sum(marks) / len(marks)\n    return f\"{average:.2f}\"</pre>",
        stepByStep: `<b>Data Store:</b> { "Alice": [80, 90, 70], "Bob": [60, 75, 85] }<br>
<b>Query:</b> "Alice"<br><br>
<b>Calculating Average:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Lookup:</i> Found "Alice" → [80, 90, 70]<br>
    <i>Summing marks:</i> 80 + 90 + 70 = 240<br>
    <i>Averaging:</i> 240 / 3 = 80.0<br>
    <i>Formatting:</i> "80.0" becomes <b>"80.00"</b>.
</div>
<b>Final Result:</b> 80.00`
    },
    {
        id: "minimum-distances",
        title: "Minimum Distances<br><a href='https://www.hackerrank.com/challenges/minimum-distances/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "You have a list of numbers, and some of them might be identical twins! Your goal is to find the pair of identical numbers that are standing closest to each other in the line. How few steps are between them? If there are no twins at all, we return -1.",
        solution: "We solve this efficiently using a <b>Memory Map (Dictionary)</b> to remember where we last saw each number. <br><br>As we walk through the list, we check: 'Have I seen this number before?' <br>• If **yes**, we calculate the distance between our current spot and the spot where we last saw it. We keep track of the smallest distance found so far. <br>• In both cases, we update our memory with the number's current location so we're ready for the next time it appears!",
        optimality: "This 'One-Pass Memory' approach is highly optimal, running in <b>O(N) Time complexity</b> because we only walk through the list once. It uses <b>O(N) Space</b> to store the locations of the numbers we've encountered. This is much faster than checking every possible pair ($O(N^2)$).",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def minimumDistances(a):\n    last_seen = {}\n    min_dist = float('inf')\n\n    for i, val in enumerate(a):\n        if val in last_seen:\n            dist = i - last_seen[val]\n            min_dist = min(min_dist, dist)\n        last_seen[val] = i\n\n    return min_dist if min_dist != float('inf') else -1</pre>",
        stepByStep: `<b>Input Array:</b> [7, 1, 3, 4, 1, 7]<br><br>
<b>Walking the List:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> See 7 at index 0. Store: {7: 0}<br>
    <i>Step 2:</i> See 1 at index 1. Store: {7: 0, 1: 1}<br>
    <i>Step 3:</i> See 3 at index 2. Store: {7: 0, 1: 1, 3: 2}<br>
    <i>Step 4:</i> See 4 at index 3. Store: {..., 4: 3}<br>
    <i>Step 5:</i> See <b>1</b> at index 4. Distance from last 1 (at index 1) is <b>3</b>. Min Dist: 3.<br>
    <i>Step 6:</i> See <b>7</b> at index 5. Distance from last 7 (at index 0) is <b>5</b>. Min stays 3.
</div>
<b>Final Result:</b> 3`
    },
    {
        id: "non-divisible-subset",
        title: "Non-Divisible Subset<br><a href='https://www.hackerrank.com/challenges/non-divisible-subset/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "You have a collection of numbers and a secret divisor `k`. You want to pick as many numbers as possible to form a 'safe' group. What makes it safe? No two numbers in your group, when added together, can be perfectly divisible by `k`. How big a group can you build?",
        solution: "This is a clever logic puzzle! Instead of looking at the numbers themselves, we look at their <b>Remainders</b> when divided by `k`. <br><br>1. If two numbers have remainders that add up to `k` (like 1 and 3 if $k=4$), they are 'dangerous' together. <br>2. For each dangerous pair of remainders, we simply pick the remainder that appears more often in our collection. <br>3. We handle special cases: remainders of 0 and $k/2$ can only have <i>one</i> representative in our safe group, because adding two of them would create a sum divisible by `k`.",
        optimality: "This 'Remainder Counting' approach is optimal, running in <b>O(N + K) Time complexity</b>. We look at each number once to find its remainder ($O(N)$) and then loop through the unique remainders ($O(K)$). It uses <b>O(K) Space</b> to store the counts of each remainder.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def non_divisible_subset(k, s):\n    counts = [0] * k\n    for x in s: counts[x % k] += 1\n    \n    # Special cases for 0 and k/2\n    result = min(counts[0], 1) \n    \n    for r in range(1, (k // 2) + 1):\n        if r == k - r:\n            result += min(counts[r], 1)\n        else:\n            result += max(counts[r], counts[k - r])\n            \n    return result</pre>",
        stepByStep: `<b>Input:</b> $S = [1, 7, 2, 4]$, $K = 3$<br><br>
<b>Building the Safe Group:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> Find remainders for each number (mod 3):<br>
    &nbsp;&nbsp;• 1 % 3 = 1<br>
    &nbsp;&nbsp;• 7 % 3 = 1<br>
    &nbsp;&nbsp;• 2 % 3 = 2<br>
    &nbsp;&nbsp;• 4 % 3 = 1<br>
    <i>Step 2:</i> Counts: { Rem-1: 3, Rem-2: 1 }<br>
    <i>Step 3:</i> Rem-1 and Rem-2 add up to 3 (K). They are dangerous! <br>
    <i>Step 4:</i> Pick the winner: Count(1) vs Count(2) → 3 vs 1. We pick the 3 numbers with Rem-1.
</div>
<b>Final Result:</b> 3`
    },
    {
        id: "page-count",
        title: "Drawing Book<br><a href='https://www.hackerrank.com/challenges/drawing-book/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "You're looking for a specific page in a drawing book. The book always starts with page 1 on the right side. When you turn a page, you see two new pages (except for the very last page, which might be alone). Since you're lazy, you want to get to your page with the absolute minimum number of turns. Should you start from the front or the back?",
        solution: "This is a problem of finding the shortest path! <br>• **Starting from the front:** Since every turn reveals 2 pages, reaching page `p` takes `p // 2` turns. <br>• **Starting from the back:** Reaching page `p` takes `(total_pages // 2) - (p // 2)` turns. <br><br>We simply calculate both distances and return the smaller one. It's like deciding whether to take the front door or the back door to get to the kitchen!",
        optimality: "This 'Shortest Path' logic is optimal, running in <b>O(1) Constant Time</b>. We only perform a few basic integer divisions and subtractions to get the answer instantly. It uses <b>O(1) Space</b>.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def pageCount(n, p):\n    from_front = p // 2\n    from_back = (n // 2) - (p // 2)\n    \n    return min(from_front, from_back)</pre>",
        stepByStep: `<b>Book Details:</b> Total Pages (n) = 6, Target Page (p) = 2<br><br>
<b>Finding the Shortcut:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Front Path:</i> 2 // 2 = <b>1 turn</b> (Page 1 → Pages 2,3)<br>
    <i>Back Path:</i> (6 // 2) - (2 // 2) = 3 - 1 = <b>2 turns</b> (Pages 6,7 → Pages 4,5 → Pages 2,3)<br>
</div>
<b>Final Result:</b> 1 turn (Start from the front!)`
    },
    {
        id: "save-the-prisoner",
        title: "Save the Prisoner!<br><a href='https://www.hackerrank.com/challenges/save-the-prisoner/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "A group of prisoners are sitting in a circle, and the jailer is handing out treats. He starts at a specific seat and hands them out one by one. The catch? The very last treat is actually a 'bad' one! You need to warn the prisoner who is about to receive that last, unlucky piece of candy.",
        solution: "This is a classic 'Circular Distribution' problem. We use the <b>Modulo Operator (%)</b> to wrap around the circle. <br><br>The formula is simplified as: `((s + m - 2) % n) + 1`. <br>• We subtract 1 because the first candy goes to the starting person (they've already taken 1 candy before we start 'walking'). <br>• We subtract another 1 to convert to a '0-indexed' system for the computer. <br>• Finally, we add 1 back at the very end to return a human-style ID (starting from 1).",
        optimality: "This 'One-Shot Math' approach is perfectly optimal, running in <b>O(1) Constant Time</b>. We don't need to simulate handing out thousands of candies; we just calculate the destination instantly. It uses <b>O(1) Space</b>.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def saveThePrisoner(n, m, s):\n    # n = prisoners, m = candies, s = start\n    # (s + m - 2) logic handles the circle and indexing\n    result = ((s + m - 2) % n) + 1\n    return result</pre>",
        stepByStep: `<b>Prisoners:</b> 3, <b>Candies:</b> 7, <b>Start:</b> 2<br><br>
<b>Tracking the Candies:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Candy 1:</i> Seat 2<br>
    <i>Candy 2:</i> Seat 3<br>
    <i>Candy 3:</i> Seat 1 (Wrap around!)<br>
    <i>Candy 4:</i> Seat 2<br>
    <i>Candy 5:</i> Seat 3<br>
    <i>Candy 6:</i> Seat 1<br>
    <i>Candy 7:</i> <b>Seat 2</b> (The Unlucky One!)
</div>
<b>Final Result:</b> 2`
    },
    {
        id: "solve-me-first",
        title: "Solve Me First<br><a href='https://www.hackerrank.com/challenges/solve-me-first/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "Welcome to the world of algorithms! Your first quest is simple: you are given two numbers, and you need to find their sum. It's the 'Hello World' of competitive programming.",
        solution: "We solve this by using the most fundamental operation in mathematics: **Addition**. We take the first number `a`, the second number `b`, and combine them using the `+` operator. Simple, elegant, and the foundation of everything else we build here!",
        optimality: "This approach is the theoretical limit of efficiency, running in <b>O(1) Constant Time</b>. Combining two integers is a single CPU operation. It uses <b>O(1) Space</b> as well.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def solveMeFirst(a, b):\n    return a + b</pre>",
        stepByStep: `<b>Input:</b> a = 7, b = 3<br><br>
<b>The Calculation:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Equation:</i> 7 + 3 = <b>10</b>
</div>
<b>Final Result:</b> 10`
    },
    {
        id: "sherlock-and-squares",
        title: "Sherlock and Squares<br><a href='https://www.hackerrank.com/challenges/sherlock-and-squares/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Math",
        problem: "Sherlock Holmes is looking for square numbers (like 4, 9, 16) hidden within a range of numbers from `a` to `b`. Your job is to count exactly how many square numbers exist in that range without counting them manually one by one.",
        solution: "Instead of checking every number in the range (which could be millions!), we use math to find the answer almost instantly. <br><br>We find the square root of the ending number (`sqrt(b)`) and the square root of the number just before the start (`sqrt(a-1)`). The difference between these two square roots tells us exactly how many integers were squared to land in that range. It's like finding how many milestones are between two distances on a highway!",
        optimality: "This 'Square Root Identity' approach is optimal, running in <b>O(1) Constant Time</b>. We perform two square root calculations regardless of how large the range is. It uses <b>O(1) Space</b>.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def squares(a, b):\n    # Count of squares up to b minus squares up to a-1\n    return int(b**0.5) - int((a-1)**0.5)</pre>",
        stepByStep: `<b>Input Range:</b> [3, 9]<br><br>
<b>Counting Squares:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1:</i> Find sqrt(9) = <b>3</b>. (There are 3 squares up to 9: 1, 4, 9)<br>
    <i>Step 2:</i> Find sqrt(3-1) = sqrt(2) ≈ <b>1.41</b>. Take the floor: <b>1</b>. (There is 1 square up to 2: 1)<br>
    <i>Step 3:</i> Subtract: 3 - 1 = <b>2</b>.
</div>
<b>Final Result:</b> 2 (The squares are 4 and 9)`
    },
    {
        id: "diagonal-difference",
        title: "Diagonal Difference<br><a href='https://www.hackerrank.com/challenges/diagonal-difference/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Matrix",
        problem: "Imagine you're looking at a square grid of numbers. Your task is to find two special paths: the 'Main Diagonal' (from top-left to bottom-right) and the 'Side Diagonal' (from top-right to bottom-left). Sum up the numbers in each path, and find the absolute difference between those two sums. It's like finding the balance between two crossing lines!",
        solution: "We solve this by walking through the rows of our square grid once. <br><br>For each row `i`, we pick two numbers:<br>1. The one where row and column index are the same: `matrix[i][i]`. This is our **Main Diagonal** (Primary).<br>2. The one where the column index counts backwards from the end: `matrix[i][n-i-1]`. This is our **Side Diagonal** (Secondary).<br><br>We keep two running totals, subtract them at the end, and take the absolute value to ensure our result is positive.",
        optimality: "This 'One-Pass Scanner' approach is optimal, running in <b>O(N) Time complexity</b> where N is the number of rows (size of the square). Since we must look at each diagonal element once, we can't do it any faster! It uses <b>O(1) Space</b> to store our two running sums.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def diagonalDifference(matrix):\n    n = len(matrix)\n    primary_sum = 0\n    secondary_sum = 0\n    \n    for i in range(n):\n        primary_sum += matrix[i][i]\n        secondary_sum += matrix[i][n - i - 1]\n        \n    return abs(primary_sum - secondary_sum)</pre>",
        stepByStep: `<b>Input Matrix:</b><br>
[ 1, 2, 3 ]<br>
[ 4, 5, 6 ]<br>
[ 9, 8, 9 ]<br><br>
<b>Calculating Diagonals:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Row 0:</i> Primary picks 1, Secondary picks 3.<br>
    <i>Row 1:</i> Primary picks 5, Secondary picks 5.<br>
    <i>Row 2:</i> Primary picks 9, Secondary picks 9.<br>
    <br>
    <i>Primary Total:</i> 1 + 5 + 9 = <b>15</b><br>
    <i>Secondary Total:</i> 3 + 5 + 9 = <b>17</b>
</div>
<b>Final Result:</b> |15 - 17| = <b>2</b>`
    },
    {
        id: "forming-magic-square",
        title: "Forming a Magic Square<br><a href='https://www.hackerrank.com/challenges/forming-a-magic-square/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Matrix",
        problem: "You're given a 3x3 grid of numbers. A grid is 'Magic' if every row, every column, and both main diagonals add up to the exact same total (which is always 15 for a 3x3 grid). Your task is to turn your messy grid into a Magic Square with the minimum possible 'effort' (cost). The cost of changing one number is the absolute difference between the old and new number.",
        solution: "This is a classic 'Brute Force' puzzle mixed with some math trivia! It turns out there are **exactly 8 possible 3x3 magic squares** in existence. <br><br>Since 8 is a very small number, the smartest way to solve this is to simply compare your input grid against each of those 8 perfect squares. For each square, we calculate the total cost to transform our grid into it. The answer is simply the smallest cost we find! It's like checking 8 different reference keys to see which one fits your lock with the least filing.",
        optimality: "This 'Pattern Matching' approach is perfectly optimal, running in <b>O(1) Constant Time</b>. Because the grid size is always 3x3 and there are always only 8 magic squares to check, the computer does the exact same small amount of work no matter what the numbers are. It uses <b>O(1) Space</b> to store the reference squares.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def formingMagicSquare(matrix):\n    # There are only 8 possible magic squares\n    all_magic = [\n        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],\n        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],\n        # ... (all 8 patterns)\n    ]\n    \n    min_cost = float('inf')\n    for magic in all_magic:\n        current_cost = 0\n        for r in range(3):\n            for c in range(3):\n                current_cost += abs(matrix[r][c] - magic[r][c])\n        min_cost = min(min_cost, current_cost)\n        \n    return min_cost</pre>",
        stepByStep: `<b>Input Grid:</b><br>
[ 4, 8, 2 ]<br>
[ 4, 5, 7 ]<br>
[ 6, 1, 6 ]<br><br>
<b>Checking a Candidate:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Target Square:</i> [[8,1,6], [3,5,7], [4,9,2]]<br>
    <i>Cost Calc:</i> <br>
    |4-8| + |8-1| + |2-6| + ... <br>
    4 + 7 + 4 + 1 + 0 + 0 + 2 + 8 + 4 = <b>30</b>
</div>
<b>Final Result:</b> After checking all 8, the smallest cost found is <b>4</b>.`
    },
    {
        id: "organizing-containers",
        title: "Organizing Containers<br><a href='https://www.hackerrank.com/challenges/organizing-containers/problem' target='_blank' style='font-size: 0.9rem; color: #007bff; text-decoration: none;'>HackerRank</a>",
        category: "Problems - Matrix",
        problem: "You have several containers, and each container is currently a mix of different types of balls. Your goal is to end up with each container only holding one type of ball. The only move you can make is swapping a ball from one container with a ball from another. There's a catch: swapped balls are always one-for-one, meaning the capacity of each container never changes. Is it possible to reach your goal?",
        solution: "This problem is a bit of a 'conservation of space' puzzle! Because swaps are always 1-for-1, the total number of balls in any given container (its capacity) is locked forever. <br><br>Therefore, to succeed:<br>1. Calculate the **capacity** of every container (sum of each row).<br>2. Calculate the **total number of balls** of each type (sum of each column).<br>3. If the collection of capacities matches the collection of totals exactly, then we can always find a set of swaps to organize them! We simply sort both lists and see if they are identical.",
        optimality: "This 'Capacity Matching' logic is highly efficient, running in <b>O(N^2) Time complexity</b> (to sum up the grid) and <b>O(N log N)</b> to sort the results. It uses <b>O(N) Space</b> to store the sums. It avoids any complex simulation and gives an instant 'Possible' or 'Impossible' answer.",
        codeBlock: "<pre style='background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; margin-top: 10px; font-family: Fira Code, monospace; font-size: 0.95rem; border: 1px solid #333;'>def organizingContainers(matrix):\n    # Container sizes (row sums)\n    row_sums = sorted([sum(row) for row in matrix])\n    \n    # Ball type totals (column sums)\n    col_sums = sorted([sum(col) for col in zip(*matrix)])\n    \n    return \"Possible\" if row_sums == col_sums else \"Impossible\"</pre>",
        stepByStep: `<b>Input Matrix:</b><br>
[ 1, 3, 1 ] (Container 0)<br>
[ 2, 1, 2 ] (Container 1)<br>
[ 3, 3, 3 ] (Container 2)<br><br>
<b>Checking Feasibility:</b>
<div style="padding-left: 20px; border-left: 2px solid #ccc; margin-left: 10px; margin-bottom: 10px;">
    <i>Step 1: Container Capacities (Rows)</i><br>
    Row 0: 5 | Row 1: 5 | Row 2: 9<br>
    Sorted: <b>[5, 5, 9]</b><br>
    <br>
    <i>Step 2: Ball Type Totals (Cols)</i><br>
    Col 0: 6 | Col 1: 7 | Col 2: 6<br>
    Sorted: <b>[6, 6, 7]</b>
</div>
<b>Final Result:</b> [5, 5, 9] ≠ [6, 6, 7]. <b>Impossible!</b>`
    },
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
