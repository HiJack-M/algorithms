// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length == 0) return ''
  if (strs?.length == 1) return strs[0]

  let common = strs[0] // 先将公共前缀设置为第一个串
  // 从第二个串开始比较，如果比较的串为空，那公共前缀就肯定是空
  for (let i = 1; i < strs.length; i++) {
    // 若某个字符串为空
    if (strs[i] == '') return ''

    // j 为比较指针
    for (let j = 0; j < strs[i].length; j++) {
      if (common[j] != strs[i][j]) {
        common = strs[i].substring(0, j) // 字母不同，两串的公共前缀为相同部分，替换 common 变量
        break
      }
      // 若直到某个字符串的最后一个字符都一致
      if (j == strs[i].length - 1 && common[j] == strs[i][j]) {
        common = strs[i]
      }
    }
  }
  return common
}

const strs1 = ['flower', 'flow', 'flight']
console.log(longestCommonPrefix(strs1))
