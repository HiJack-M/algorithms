// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
if (!strs || strs.length == 0) return ''
  if (strs?.length == 1) return strs[0]
  let common = strs[0]
  for (let i = 1; i < strs.length; i++) {
    if (strs[i] == '') return ''
    for (let j = 0; j < strs[i].length; j++) {
      if (common[j] != strs[i][j]) {
        common = strs[i].substring(0, j)
        break
      }
      if ((j == strs[i].length - 1) && common[j] == strs[i][j]) {
        common = strs[i]
      }
    }
  }
  return common
}
