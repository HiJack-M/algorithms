// 回文数
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true
  let n = 10 ** Math.floor(Math.log10(x))
  while(n > 1 && x > 0) {
    if (Math.floor(x / n) !== x % 10) return false
    x = Math.floor((x % n) / 10)
    n /= 100
  }
  return true
};

let a = 121
let b = 98
console.log(isPalindrome(a))
console.log(isPalindrome(b))
