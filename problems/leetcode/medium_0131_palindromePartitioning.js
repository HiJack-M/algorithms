// 131. Palindrome Partitioning

// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let ans = []
  if (!s) return ans

  let dp = new Set() // `${start}_${end}`

  process(s, 0, [], dp, ans)
  return ans
}

const process = (s, index, paths, dp, ans) => {
  // base case 前面的 index 的点都被分成了 palidrome
  if (index == s.length) {
    ans.push(paths)
    return
  }

  // 单个字母的情况
  process(s, index + 1, [...paths, s[index]], dp, ans)

  let i = 1
  while (index + i < s.length) {
    if (isPalindrome(s, index, index + i, dp)) {
      process(s, index + i + 1, [...paths, s.substring(index, index + i + 1)], dp, ans)
    }
    i++
  }
}

const isPalindrome = (s, start, end, dp) => {
  if (dp.has(`${start}_${end}`)) {
    return true
  }

  if (start > end) return false

  let l = start
  let r = end

  while (l < r) {
    if (s[l] != s[r]) {
      return false
    } else {
      l++
      r--
    }
  }

  dp.add(`${start}_${end}`)
  return true
}

console.log(partition('aab')) // [["a","a","b"],["aa","b"]]
console.log(partition('a')) // [["a"]]
console.log(partition('efe')) // [["e","f","e"],["efe"]]
