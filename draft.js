// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n == 0) return []
  let ans = []
  process(n, n, '', ans)
  return ans
}

// 用剩余量来控制递归
const process = (restLeft, restRight, path, ans) => {
  if (restLeft == 0 && restRight == 0) {
    ans.push(path)
    return
  }

  if (restLeft > 0) {
    let curPath = path + '('
    process(restLeft - 1, restRight, curPath, ans)
  }

  // 以确保括号是有效的
  if (restRight > restLeft) {
    let curPath = path + ')'
    process(restLeft, restRight - 1, curPath, ans)
  }
}

console.log(generateParenthesis(3))
