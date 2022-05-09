// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s || s.length < 2) return false
  if (s.length % 2 == 1) return false

  const bracketObj = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  let jsStack = []
  for (let i = 0; i < s.length; i++) {
    if (bracketObj[s[i]]) {
      jsStack.push(s[i])
    } else {
      let cur = jsStack.pop()
      if (bracketObj[cur] != s[i]) return false
    }
  }
  if (jsStack.length > 0) return false
  return true
};
