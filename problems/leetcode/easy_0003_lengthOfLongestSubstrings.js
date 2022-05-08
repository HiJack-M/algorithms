// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if (!s) return 0
  if (s.length === 1) return 1

  let maxLen = 0
  let map = new Map()
  let rp = 0

  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      map.delete(s[i - 1])
    }
    while (rp < s.length && !map.has(s[rp])) {
      map.set(s[rp++], 1)
    }
    maxLen = Math.max(maxLen, map.size)
  }
  return maxLen
}

let str1 = 'abcabcbb'
let str2 = ''
let str3 = 'akddekvhsadrfygwjhyhory'

console.log(lengthOfLongestSubstring(str1))
console.log(lengthOfLongestSubstring(str2))
console.log(lengthOfLongestSubstring(str3))

// 用 map 记录无重复集合
// 用 rp 下标来记录每次检测过的字符，不用重复放入
