// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s) return false

  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (/[0-9A-Za-z]/.test(s[i])) {
      res += s[i].toLowerCase()
    }
  }

  let l = 0
  let r = res.length - 1
  while (l <= r) {
    if (res[l] === res[r]) {
      l++
      r--
    } else {
      return false
    }
  }
  return true
}

let s1 = 'A man, a plan, a canal: Panama'
let s2 = 'race a car'
let s3 = ' '
let s4 = 'a pirate 10 1 etarip A'
console.log(isPalindrome(s1))
console.log(isPalindrome(s2))
console.log(isPalindrome(s3))
console.log(isPalindrome(s4))
