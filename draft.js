// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return ''
  if (strs.length === 1) return strs[0]

  let common = strs[0] // 先将公共前缀设置为第一个串
  for (let i = 1; i < strs.length; i++) {
    // 从第二个串开始比较
    let cur = ''
    let p = 0 // 比较指针
    while (common[p] === strs[i][p] && p < common.length) {
      cur += common[p++]
    }
    common = cur
  }

  return common
}

const strs1 = ['flower', 'flow', 'flight']
console.log(longestCommonPrefix(strs1))

const strs2 = ['dog', 'racecar', 'car']
console.log(longestCommonPrefix(strs2))
