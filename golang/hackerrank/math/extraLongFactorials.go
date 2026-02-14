package math
import (
	"math/big"
)






// ExtraLongFactorials calculates the factorial of a large integer 'n'.
func ExtraLongFactorials(n int64) *big.Int {
	res := big.NewInt(1)
	for i := int64(2); i <= n; i++ {
		res.Mul(res, big.NewInt(i))
	}
	return res
}
