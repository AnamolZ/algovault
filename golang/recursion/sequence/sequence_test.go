package sequence

import (
	"testing"
)

func TestIsPalindrome(t *testing.T) {
	tests := []struct {
		input string
		want  bool
	}{
		{"racecar", true},
		{"hello", false},
		{"a", true},
		{"", true},
		{"abba", true},
	}
	for _, tt := range tests {
		if got := IsPalindrome(tt.input); got != tt.want {
			t.Errorf("IsPalindrome(%q) = %v; want %v", tt.input, got, tt.want)
		}
	}
}

func TestReverseString(t *testing.T) {
	tests := []struct {
		input string
		want  string
	}{
		{"word", "drow"},
		{"hello", "olleh"},
		{"a", "a"},
		{"", ""},
	}
	for _, tt := range tests {
		if got := ReverseString(tt.input); got != tt.want {
			t.Errorf("ReverseString(%q) = %q; want %q", tt.input, got, tt.want)
		}
	}
}

func TestSubsequences(t *testing.T) {
	got := Subsequences("abc")
	// The order depends on implementation, but based on my 'generate' function:
	// Include/Exclude order: "abc", "ab", "ac", "a", "bc", "b", "c", ""

	// Since order might vary but content should be the same, let's just check length and elements if needed
	// But let's check exact match first based on logic
	if len(got) != 8 {
		t.Errorf("Subsequences(\"abc\") length = %d; want 8", len(got))
	}

	// Simple check for presence of all expected elements
	expected := map[string]bool{
		"abc": true, "ab": true, "ac": true, "a": true,
		"bc": true, "b": true, "c": true, "": true,
	}
	for _, s := range got {
		if !expected[s] {
			t.Errorf("Unexpected subsequence: %q", s)
		}
		delete(expected, s)
	}
	if len(expected) > 0 {
		t.Errorf("Missing subsequences: %v", expected)
	}
}
