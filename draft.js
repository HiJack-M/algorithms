// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length == 0) return ''
  if (strs?.length == 1) return strs[0]

  let common = strs[0] // 先将公共前缀设置为第一个串
  for (let i = 1; i < strs.length; i++) {
    // 从第二个串开始比较，如果比较的串为空，那公共前缀就肯定是空
    if (strs[i] === '') return ''

    // j 为比较指针
    for (let j = 0; j < strs[i].length; j++) {
      if (common[j] != strs[i][j]) {
        common = strs[i].substring(0, j) // 字母不同，两串的公共前缀为相同部分，替换 common 变量
        break
      }
      if (j == strs[i].length - 1 && common[j] == strs[i][j]) {
        common = strs[i]
      }
    }
  }

  return common
}

const strs1 = ['flower', 'flow', 'flight']
console.log(longestCommonPrefix(strs1))
