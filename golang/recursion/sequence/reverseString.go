package sequence

// ReverseString reverses a string using recursion.
func ReverseString(word string) string {
	// Base case: If the length of the word is 0 or 1, return the word as it is
	if len(word) <= 1 {
		return word
	}

	// Recursive case: Take the first character of the word and place it at the end
	// Recursively call ReverseString on the substring excluding the first character
	return ReverseString(word[1:]) + string(word[0])
}
