package math

import (
	"testing"
)

func TestFactorial(t *testing.T) {
	if got := Factorial(5); got != 120 {
		t.Errorf("Factorial(5) = %d; want 120", got)
	}
	if got := Factorial(0); got != 1 {
		t.Errorf("Factorial(0) = %d; want 1", got)
	}
}

func TestGCD(t *testing.T) {
	if got := GCD(48, 18); got != 6 {
		t.Errorf("GCD(48, 18) = %d; want 6", got)
	}
}

func TestPowerCompute(t *testing.T) {
	if got := PowerCompute(2, 5); got != 32 {
		t.Errorf("PowerCompute(2, 5) = %d; want 32", got)
	}
	if got := PowerCompute(3, 0); got != 1 {
		t.Errorf("PowerCompute(3, 0) = %d; want 1", got)
	}
}

func TestSumDigits(t *testing.T) {
	if got := SumDigits(234); got != 9 {
		t.Errorf("SumDigits(234) = %d; want 9", got)
	}
}

func TestSumNaturalNumbers(t *testing.T) {
	if got := SumNaturalNumbers(5); got != 15 {
		t.Errorf("SumNaturalNumbers(5) = %d; want 15", got)
	}
}
