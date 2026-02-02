package sequence

// Subsequences finds all subsequences of a string using recursion.
func Subsequences(word string) []string {
	var result []string
	generate(word, 0, "", &result)
	return result
}

func generate(word string, index int, currentSub string, result *[]string) {
	// Base case: If index reaches the length of the word, we have considered all characters
	if index == len(word) {
		*result = append(*result, currentSub)
		return
	}

	// Recursive case 1: Include the current character in the subsequence
	generate(word, index+1, currentSub+string(word[index]), result)

	// Recursive case 2: Exclude the current character from the subsequence
	generate(word, index+1, currentSub, result)
}
