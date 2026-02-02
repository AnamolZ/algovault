package sequence

// IsPalindrome checks if a string is palindrome using recursion.
func IsPalindrome(word string) bool {
	// Base case: If the length of word is 0 or 1, it's a palindrome
	if len(word) <= 1 {
		return true
	}
	// Check if first and last characters match
	// Handle UTF-8 safely by converting to runes if necessary,
	// but for "same code from python" logic, we'll use byte indexing
	if word[0] != word[len(word)-1] {
		return false
	}
	// Recursively check the inner substring (excluding first and last characters)
	return IsPalindrome(word[1 : len(word)-1])
}
